# Rivena ERP: changelog

From the git history of `Tracker` (branch `claude/cc-ap4aj6`). Newest first.

## 2026-11-15
- Read-only summary for the agents: `GET /api/agent/resume`, protected by a token (live).
- Client portal: a deducted deposit is no longer shown as still owed.

## 2026-11-14
- Verification scripts read `.env` themselves.

## 2026-08-22: phone app
- Installable on iPhone and Android; Android app (TWA) built by CI; APK downloads from the site in one tap.

## 2026-08-21
- Database prepared automatically at deploy (migrations, demo data only on an empty base).
- Next.js 15.5.23 (fix for CVE-2025-66478).

## 2026-08-20: four modules
- SIMPL-TVA deduction statement (Excel and EDI XML).
- Projects and time, expense notes, online quote signature.
- Fixed assets and depreciation.
- Balance sheet and CPC (income statement).
- Client portal.

## 2026-08-12
- Guide for installing on your own server (systemd, Nginx, HTTPS, cron, backup).

## 2026-08-09 to 2026-08-10: first release
- Base: schema, accounting engine, PDFs, sign-in, quotes.
- CRM, sales, payment chasing, purchasing, accounting, support, settings; dashboard; end-to-end check.
- VAT on credit notes fixed for cash-basis VAT.
- Phone layout for every module.
