import { test } from "node:test";
import assert from "node:assert/strict";

import { buildSummary, fetchErp } from "./build-summary.mjs";

const now = new Date("2026-11-15T08:00:00Z");

const erpData = {
  as_of: "2026-11-15T07:59:00Z",
  pipeline: { open_deals: 6, value_mad: 1342000, weighted_mad: 632150, quotes_pending: { count: 3 } },
  invoices_due: { count: 6, mad: 218154, overdue: { count: 1, mad: 57288 } },
  renewals_30d: [{ number: "CTR-1", customer: "Client A", title: "Maintenance", end_date: "2026-12-09" }],
  support: { open: 6, urgent: 2, sla_breached: 2 },
  key_numbers: { billed_month_ht_mad: 43605, collected_month_mad: 44640, recurring_monthly_ht_mad: 11116.67 },
  tasks: [{ title: "Call back", customer: "Client B", due: "2026-11-13", overdue: true }],
};

const tasks = [
  { title: "ERP roadmap", area: "products", due: "2026-11-20", status: "todo" },
  { title: "Old thing", area: "growth", due: "2026-11-01", status: "done" },
];
const social = [
  { id: "p1", date: "2026-11-18", platform: "instagram", title: "Launch", status: "awaiting_ok", draft: "social/drafts/p1.md" },
  { id: "p2", date: "2026-11-10", platform: "tiktok", title: "Past", status: "posted" },
  { id: "p3", date: "2026-12-20", platform: "linkedin", title: "Later", status: "approved" },
];
const approvals = [
  { id: "a1", type: "price", summary: "Fleet price grid", status: "open" },
  { id: "a2", type: "post", summary: "Done", status: "approved" },
];

test("combines ERP figures with own data, without inventing anything", () => {
  const s = buildSummary({ tasks, social, approvals, erp: { status: "ok", data: erpData }, now });
  assert.equal(s.sources.erp, "ok");
  assert.deepEqual(s.pipeline, {
    open_deals: 6,
    value_mad: 1342000,
    weighted_mad: 632150,
    quotes_pending: 3,
    invoices_due: { count: 6, mad: 218154, overdue: 1, overdue_mad: 57288 },
    renewals_30d: 1,
  });
  assert.deepEqual(s.key_numbers, { billed_month_mad: 43605, collected_month_mad: 44640, recurring_mad: 11116.67 });
  // Done tasks dropped, ERP task added and sorted first (oldest due date).
  assert.deepEqual(s.tasks.map((t) => t.title), ["Call back (Client B)", "ERP roadmap"]);
  assert.equal(s.tasks[0].status, "overdue");
  // Past and posted posts are not "scheduled".
  assert.deepEqual(s.social.scheduled.map((p) => p.title), ["Launch", "Later"]);
  assert.equal(s.social.awaiting_ok, 1);
  // Open approvals plus posts awaiting OK.
  assert.deepEqual(s.approvals.map((a) => a.type), ["price", "post"]);
  // Deadlines within 14 days + renewals, sorted.
  assert.deepEqual(s.deadlines.map((d) => d.date), ["2026-11-13", "2026-11-18", "2026-11-20", "2026-12-09"]);
});

test("ERP sections are null, not zero, when the ERP is unavailable", () => {
  const s = buildSummary({ tasks, social, approvals, erp: { status: "not_configured", data: null }, now });
  assert.equal(s.pipeline, null);
  assert.equal(s.support, null);
  assert.equal(s.key_numbers, null);
  assert.equal(s.sources.erp, "not_configured");
  assert.deepEqual(s.tasks.map((t) => t.title), ["ERP roadmap"]);
});

test("fetchErp reports configuration and HTTP errors instead of throwing", async () => {
  assert.equal((await fetchErp({})).status, "not_configured");
  const denied = await fetchErp({ ERP_URL: "https://erp.example", AGENT_READ_TOKEN: "x" }, async () => ({ ok: false, status: 401 }));
  assert.equal(denied.status, "error_http_401");
  let seen;
  const ok = await fetchErp({ ERP_URL: "https://erp.example/", AGENT_READ_TOKEN: "t" }, async (url, init) => {
    seen = { url, auth: init.headers.Authorization };
    return { ok: true, json: async () => ({ hello: 1 }) };
  });
  assert.deepEqual(seen, { url: "https://erp.example/api/agent/resume", auth: "Bearer t" });
  assert.equal(ok.status, "ok");
});
