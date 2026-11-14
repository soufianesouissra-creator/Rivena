# Rivena ERP: roadmap (proposal)

Repo `Tracker` · Next.js 15, PostgreSQL/Prisma · live on Vercel (`rivena-erp`, branch `claude/cc-ap4aj6`).
Built for **one company (RIVENA's own back office)**; every table carries `companyId`, so selling it to
several clients needs multi-tenancy work, not a new schema.

Status: **proposal**. Soufiane decides what moves to "Now".

## Done (see `changelog.md`)
CRM → quotes (e-signature) → orders → invoices → payment chasing; recurring contracts; purchasing;
Moroccan accounting (CGNC, VAT incl. SIMPL-TVA export, fixed assets, balance sheet and CPC); projects,
time and expenses; support tickets with SLA; client portal; installable phone app and Android APK.

## Now: so the agent team can use it
| # | Item | Why | Size |
|---|---|---|---|
| 1 | Merge `claude/agent-summary` and set `AGENT_READ_TOKEN` in Vercel | Gives the Head agent and the sales/support agents real figures | Done in code, needs OK |
| 2 | Production database with real data instead of the demo seed (backup plan first) | Today the summary would show demo clients | Decision |
| 3 | Daily `/api/cron` scheduler (Vercel Cron or GitHub Actions) | Contracts are billed, late invoices and SLA breaches are flagged only when it runs | Small |
| 4 | Persistent storage for supplier-invoice scans (Vercel disk is temporary) | Uploads are lost on every redeploy | Small |

## Next: to sell it
| # | Item | Why |
|---|---|---|
| 5 | Multi-tenant: one company per client, sign-up, per-client settings and isolation tests | Needed before a second client |
| 6 | Plans and billing for clients (the ERP can invoice its own subscriptions via recurring contracts) | Recurring revenue |
| 7 | Demo company with its own sample data, reset nightly | Self-serve demos from the website |
| 8 | Link with Fleet: fleet costs (fuel, maintenance) into ERP purchasing/projects | Cross-sell to fleet clients |

## Later
- Arabic interface (Fleet already has it, with right-to-left layout).
- Bank statement import and matching.
- Payroll is **not** covered; decide whether to partner or skip.
