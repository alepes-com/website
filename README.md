# Alepes — product-preview website

> This repository contains the public Alepes product-preview website at
> [https://alepes.com](https://alepes.com).
>
> The Alepes product/platform repository is
> [https://github.com/alepes-com/alepes](https://github.com/alepes-com/alepes).

**Your money, moving together.** This is the static marketing/product-preview
site for Alepes — a rules-based personal capital-allocation system. It explains
the product concept (cash-flow rules, reserves, formation, contribution
rebalancing, Shadow Mode, explainability) and shows mock product screens.

It is not the product application and performs no financial work.

## Stack

- **Bun 1.4** (pinned) — the only toolchain; no npm/pnpm
- Next.js 16 (App Router) with **static export** (`output: "export"`)
- TypeScript, React, Tailwind CSS v4
- shadcn/ui (Base UI), lucide-react, framer-motion
- Oxlint (lint), Vitest (tests)

## Local setup

```bash
bun install --frozen-lockfile   # install dependencies
bun run dev                     # http://localhost:3000

# validation
bunx tsc --noEmit               # typecheck
bunx oxlint                     # lint
bun run test                    # tests
bun run build                   # static export → out/
```

`bun run build` emits `out/` with `out/index.html`.

## Deployment

Static export on **Cloudflare Pages**:

- production branch: `main`
- build command: `bun run build`
- output directory: `out`

## Repository boundary

This repository is the public preview surface only. Financial domain models,
engines, provider integrations, persistence, and workflows live in
[`alepes-com/alepes`](https://github.com/alepes-com/alepes).