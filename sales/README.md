# Sales and clients

The ERP CRM (opportunities, quotes, orders, invoices, contracts, payment chasing) is the source of truth.
This folder only holds the weekly pipeline brief, built from `GET /api/agent/resume`. Quotes, emails and
chasing messages are drafted here and go to `data/approvals.json`; nothing is sent from here.

Blocked until the ERP endpoint is live in production (see `data/approvals.json`).
