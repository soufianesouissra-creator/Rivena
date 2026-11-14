# Rivena Business

Home base of the **Rivena Business** agent team: products, website, sales, social media,
growth and support for RIVENA. Agents **propose**; Soufiane approves anything that is
published, sent, priced or deployed.

| Folder | Agent | What lives here |
| --- | --- | --- |
| `products/` | Products | Roadmap and changelog per product (`erp/`, `fleet/`), client feature/bug triage |
| `website/` | Website | Backlog: product pages, pricing, demo booking, SEO, case studies |
| `sales/` | Sales and clients | Weekly pipeline brief. **The ERP CRM is the source of truth**; nothing is copied here |
| `social/` | Social media | Drafts (`social/drafts/`); the calendar itself is `data/social.json` |
| `growth/` | Growth | Market watch (Morocco first), lead lists, partnership and pricing ideas, with numbers |
| `support/` | Support | FAQ and reply drafts built from the product docs; escalations |
| `data/` | All | Machine-readable state: `tasks.json`, `social.json`, `approvals.json` |

## Products and where they live

Each product keeps its own repo, stack and config. Nothing from one product goes into another's repo.

| Product | Repo | Live |
| --- | --- | --- |
| Rivena ERP | `soufianesouissra-creator/Tracker` | Vercel project `rivena-erp` |
| Rivena Fleet | `soufianesouissra-creator/Traking-fleet` | fleet.rivena.org (own Docker Compose stack on the VPS) |
| Rivena Fit | `soufianesouissra-creator/RIVENA-ME` | fit.rivena.org. **Handled elsewhere, not by this team** |
| Website | not on GitHub yet | |

## Summary for the Head agent

```bash
npm run summary            # prints JSON; reads .env (ERP_URL, AGENT_READ_TOKEN) if present
npm test                   # checks the summary builder
```

Shape (all figures computed from the sources, never estimated; ERP sections are `null` when the ERP
is not reachable, and `sources.erp` says why):

```text
as_of, sources{erp, erp_as_of}
tasks[{title, area, due, status}]          data/tasks.json + ERP CRM tasks due within 30 days
deadlines[{date, what, area}]              tasks due within 14 days, contract renewals, posts
pipeline{open_deals, value_mad, weighted_mad, quotes_pending,
         invoices_due{count, mad, overdue, overdue_mad}, renewals_30d}
support{open, urgent, sla_breached}
social{scheduled[{date, platform, title, status}], awaiting_ok}
approvals[{type, summary, link}]           data/approvals.json + posts awaiting OK
key_numbers{billed_month_mad, collected_month_mad, recurring_mad}   (MAD, excl. VAT except collected)
```

The ERP side comes from `GET /api/agent/resume` in the ERP (read-only, Bearer `AGENT_READ_TOKEN`).
The output can contain client names and amounts: it is git-ignored and must not be committed.

## Data formats

- `data/tasks.json`: `{ title, area, due (YYYY-MM-DD or null), status: todo | doing | blocked | done }`
- `data/social.json`: `{ id, date, platform: instagram | tiktok | linkedin | x | …, title,
  status: draft | awaiting_ok | approved | scheduled | posted, draft: "social/drafts/<id>.md",
  results?: { reach, likes, comments, shares, leads } }`
- `data/approvals.json`: `{ id, type: post | quote | email | price | deploy | setting, summary, link, created, status: open | approved | rejected }`
