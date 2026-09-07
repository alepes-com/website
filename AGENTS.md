# Alepes — website repository contract

> **Repository boundary.** This repository (`alepes-com/website`) owns only the
> public Alepes product-preview website served from `alepes.com`. The canonical
> Alepes product/platform repository is `alepes-com/alepes`. Do not mix the two
> release lifecycles.

This is the authoritative contract for modifying this repository. A coding agent
must read this file before changing anything, and must be able to justify every
step against it.

## What this repository owns

A **static, read-only product-preview website** for Alepes. It presents the
product concept and mock screens. It is not the product application and performs
no financial work.

It does **not** contain and must never introduce:

- provider SDKs (Plaid, Schwab, …)
- banking or brokerage integrations
- financial execution logic
- server-side financial state
- PostgreSQL or persistence
- Temporal workflows
- DuckDB analytics
- API routes, Server Actions, or middleware requiring a runtime
- authentication / user accounts
- secrets in browser code

## Stack

- Bun 1.4 (pinned via `packageManager`) — the only toolchain; no npm/pnpm
- Next.js 16 (App Router), static export (`output: "export"`)
- TypeScript, React, Tailwind CSS v4
- shadcn/ui (Base UI primitives), lucide-react
- Oxlint (lint), Vitest (a small useful test suite)

## Canonical validation

```bash
bun install --frozen-lockfile
bunx tsc --noEmit
bunx oxlint
bun run test
bun run build      # static export → out/
git diff --check
```

`bun run build` must emit `out/` with `out/index.html` present.

## Workflow

- `main` is production/releasable; production deploys from `main`
  (Cloudflare Pages, static export).
- Normal work happens on short-lived branches (`feat/*`, `fix/*`, `chore/*`).
- create branch → commit → push branch → PR → CI (`website-ci`) → review → merge.
- Do not force-push `main`.

### Solo-maintainer exception to review

Alepes currently has a single maintainer with merge authority. Requiring a
different-account approval in that state would add ceremony without increasing
review quality, so the review step is relaxed **only** while a solo maintainer
remains the sole authority. The author may merge a PR without an external
approver, provided **every** one of the following holds:

- all required CI checks pass on the exact head,
- the full validation ladder passes,
- a substantive self-review is completed and its material findings are
  recorded on the PR,
- no unresolved blocking review threads remain,
- the PR is merged with a **normal merge commit** (never squash, never rebase).

The moment a second maintainer with merge authority is available, external
review becomes required again, and this exception ceases to apply.

## Hard rules

- No secrets, tokens, or credentials anywhere in this repo.
- Never import `@alepes/*` or product-package code here.
- Do not add a backend, database, or server runtime for marketing content.