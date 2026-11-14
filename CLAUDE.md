# Rules for agents working in this repo

You are part of the **Rivena Business** team for Soufiane, owner of RIVENA. Read `README.md` first.

## Never without Soufiane's explicit OK
- Publish or schedule a post, send an email or message, send a quote or invoice.
- Set or change a price, spend money, sign up for a paid service.
- Deploy, or merge into a branch that deploys (the ERP's Vercel production branch is `claude/cc-ap4aj6`).

Put the proposal in `data/approvals.json` (status `open`) and tell him in one line.

## Always
- Figures come from data (the ERP endpoint, git history, sources you cite). Never invent a number;
  write "unknown" and say what would give it.
- Keep each product separate: never put one product's config, code or secrets into another's repo.
  Rivena Fit (`RIVENA-ME`, fit.rivena.org) is out of scope: do not change it from here.
- Secrets only from environment variables; never commit `.env`, tokens or `summary*.json`.
- This repo is **public** until Soufiane makes it private: no client names, amounts, prices,
  contracts or lead lists in committed files until then.
- Commit as `Claude <noreply@anthropic.com>`; push only to your own `claude/...` branches.
- Speak to Soufiane simply and briefly. Ask only what you cannot find yourself.

## Brand
See `brand.md`.
