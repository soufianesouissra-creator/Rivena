#!/usr/bin/env node
/**
 * Builds the read-only summary the Head agent pulls from Rivena Business.
 *
 *   node scripts/build-summary.mjs            -> prints the summary JSON
 *   node scripts/build-summary.mjs --out FILE -> also writes it to FILE
 *
 * Sources:
 *   data/tasks.json      tasks kept by the business agents
 *   data/social.json     post calendar (drafts, awaiting OK, scheduled, posted)
 *   data/approvals.json  things waiting for Soufiane's OK
 *   Rivena ERP           GET $ERP_URL/api/agent/resume with $AGENT_READ_TOKEN
 *
 * Every figure comes from these sources; nothing is estimated. If the ERP is
 * not configured or does not answer, its sections are null and `sources.erp`
 * says why.
 *
 * The output can contain client names and amounts: never commit it to a
 * public repository (summary*.json is git-ignored).
 */
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DAY = 24 * 60 * 60 * 1000;

const OPEN_TASK = new Set(["todo", "doing", "blocked"]);
const UPCOMING_POST = new Set(["awaiting_ok", "approved", "scheduled"]);

async function readJson(relative) {
  const raw = await readFile(join(ROOT, relative), "utf8");
  return JSON.parse(raw);
}

/** Calendar day (YYYY-MM-DD) of a date or ISO string, UTC. */
const day = (value) => (value ? String(value).slice(0, 10) : null);

export async function fetchErp(env = process.env, fetchImpl = globalThis.fetch) {
  const url = env.ERP_URL;
  const token = env.AGENT_READ_TOKEN;
  if (!url || !token) return { status: "not_configured", data: null };
  try {
    const response = await fetchImpl(`${url.replace(/\/$/, "")}/api/agent/resume`, {
      headers: { Authorization: `Bearer ${token}` },
      signal: AbortSignal.timeout(20_000),
    });
    if (!response.ok) return { status: `error_http_${response.status}`, data: null };
    return { status: "ok", data: await response.json() };
  } catch (error) {
    return { status: `error_${error?.name ?? "fetch"}`, data: null };
  }
}

/** Pure: combines the sources into the agreed summary shape. */
export function buildSummary({ tasks, social, approvals, erp, now = new Date() }) {
  const today = day(now.toISOString());
  const in14 = day(new Date(now.getTime() + 14 * DAY).toISOString());

  const ownTasks = tasks
    .filter((t) => OPEN_TASK.has(t.status))
    .map((t) => ({ title: t.title, area: t.area, due: day(t.due), status: t.status }));
  const erpTasks = (erp.data?.tasks ?? []).map((t) => ({
    title: t.customer ? `${t.title} (${t.customer})` : t.title,
    area: "sales",
    due: day(t.due),
    status: t.overdue ? "overdue" : "todo",
  }));
  const allTasks = [...ownTasks, ...erpTasks].sort((a, b) => (a.due ?? "9999").localeCompare(b.due ?? "9999"));

  const upcomingPosts = social
    .filter((p) => UPCOMING_POST.has(p.status) && day(p.date) >= today)
    .sort((a, b) => day(a.date).localeCompare(day(b.date)));

  const openApprovals = [
    ...approvals
      .filter((a) => a.status === "open")
      .map((a) => ({ type: a.type, summary: a.summary, link: a.link ?? null })),
    ...social
      .filter((p) => p.status === "awaiting_ok")
      .map((p) => ({
        type: "post",
        summary: `${p.platform}: ${p.title} (${day(p.date)})`,
        link: p.draft ?? null,
      })),
  ];

  const deadlines = [
    ...allTasks.filter((t) => t.due && t.due <= in14).map((t) => ({ date: t.due, what: t.title, area: t.area })),
    ...(erp.data?.renewals_30d ?? []).map((r) => ({
      date: r.end_date,
      what: `Renewal ${r.number} ${r.customer}: ${r.title}`,
      area: "sales",
    })),
    ...upcomingPosts
      .filter((p) => day(p.date) <= in14)
      .map((p) => ({ date: day(p.date), what: `${p.platform} post: ${p.title}`, area: "social" })),
  ].sort((a, b) => (a.date ?? "").localeCompare(b.date ?? ""));

  const d = erp.data;
  return {
    source: "rivena-business",
    as_of: now.toISOString(),
    sources: { erp: erp.status, erp_as_of: d?.as_of ?? null },
    tasks: allTasks,
    deadlines,
    pipeline: d
      ? {
          open_deals: d.pipeline.open_deals,
          value_mad: d.pipeline.value_mad,
          weighted_mad: d.pipeline.weighted_mad,
          quotes_pending: d.pipeline.quotes_pending.count,
          invoices_due: {
            count: d.invoices_due.count,
            mad: d.invoices_due.mad,
            overdue: d.invoices_due.overdue.count,
            overdue_mad: d.invoices_due.overdue.mad,
          },
          renewals_30d: d.renewals_30d.length,
        }
      : null,
    support: d ? d.support : null,
    social: {
      scheduled: upcomingPosts.map((p) => ({
        date: day(p.date),
        platform: p.platform,
        title: p.title,
        status: p.status,
      })),
      awaiting_ok: social.filter((p) => p.status === "awaiting_ok").length,
    },
    approvals: openApprovals,
    key_numbers: d
      ? {
          billed_month_mad: d.key_numbers.billed_month_ht_mad,
          collected_month_mad: d.key_numbers.collected_month_mad,
          recurring_mad: d.key_numbers.recurring_monthly_ht_mad,
        }
      : null,
  };
}

async function main() {
  const [tasks, social, approvals, erp] = await Promise.all([
    readJson("data/tasks.json"),
    readJson("data/social.json"),
    readJson("data/approvals.json"),
    fetchErp(),
  ]);
  const summary = buildSummary({ tasks, social, approvals, erp });
  const text = JSON.stringify(summary, null, 2) + "\n";
  const outIndex = process.argv.indexOf("--out");
  if (outIndex !== -1 && process.argv[outIndex + 1]) await writeFile(process.argv[outIndex + 1], text);
  process.stdout.write(text);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
