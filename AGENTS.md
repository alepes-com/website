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
  (Cloudflare Workers Builds serving the static export as Worker assets;
  see "Delivery (GitOps)").
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

The exception covers the operator's own PRs only. Agent-authored PRs always
need the operator's approval (see "Delivery (GitOps)").

## Delivery (GitOps)

Git is the only way a change reaches `alepes.com`. Nothing is deployed from a
workstation.

**Identity.** Agents act on GitHub as the `alepes-com-agent` GitHub App, never
with the operator's credentials. Hermes agent profiles load this automatically:
`gh` and `git` in an agent shell authenticate as the App. The App cannot
approve its own pull requests.

**Change path.**
1. Branch.
2. Push.
3. Open a PR (App-authored).
4. The required checks pass.
5. The operator approves.
6. Merge.

`main` is protected by the org ruleset `default-branch-two-party`:
- a PR with 1 approval is required, and the last push must be approved by
  someone other than its pusher;
- stale approvals are dismissed;
- force pushes and deletion are blocked;
- only org admins (the operator) can bypass it.

**Testing.**
- `website-ci` (job `validate (bun 1.4)`) runs the canonical validation on
  every PR and on push to `main`.
- It is the required status check for `main`.
- Nothing merges on a red check, and a red check is never waived by
  narrative.

**Deployment.** The desired state is this repository:
- `wrangler.jsonc` (Worker `alepes-website`, custom domain `alepes.com`,
  assets from `./out`);
- the built static export.

How it reaches production:
- Cloudflare Workers Builds is linked to this repo through the Cloudflare
  GitHub App.
- It pulls `main` and runs the build.
- It deploys the result, and reports the check `Workers Builds:
  alepes-website` on the commit.
- No deploy credential exists in GitHub, and CI does not deploy.

Rules:
- Do not run `bun run deploy` from a workstation.
- Do not change Worker settings in the Cloudflare dashboard without making
  the same change in `wrangler.jsonc` in the same PR.

**`www` redirect: known gap.**
- `infra/www-redirect/` (Worker `alepes-www-redirect`, `www.alepes.com`) is
  not linked to Workers Builds; it has been deployed by hand with
  `bun run deploy:www`.
- Until the operator links it as a second Workers Builds project (root
  directory `infra/www-redirect`), changes to it must still land on `main` by
  PR first.
- After merge, the operator deploys it and records the commit deployed on
  the PR.
- Agents never run `deploy:www`.

**Rollback.**
- Open a revert PR against `main`.
- After the operator merges it, Workers Builds deploys the previous content.
- A Cloudflare dashboard rollback is an emergency-only step. It is closed by
  the same revert PR, so `main` again matches production.

## Hard rules

- No secrets, tokens, or credentials anywhere in this repo.
- Never import `@alepes/*` or product-package code here.
- Do not add a backend, database, or server runtime for marketing content.