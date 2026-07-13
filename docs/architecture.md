# Architecture

## Stack

| Concern    | Choice                               |
| ---------- | ------------------------------------ |
| Framework  | Next.js 15 (App Router)              |
| UI runtime | React 19                             |
| Language   | TypeScript (strict)                  |
| Styling    | Tailwind CSS v4                      |
| Components | shadcn/ui pattern (local primitives) |
| Icons      | lucide-react                         |
| Animation  | motion (Framer Motion successor)     |
| Quality    | ESLint, Prettier, Husky, lint-staged |
| Hosting    | GitHub Pages via GitHub Actions      |

## Rendering model

Every page is **statically generated** and exported to plain HTML via
`output: 'export'` in `next.config.ts`. There is no server runtime — the
`out/` directory is deployed as-is to GitHub Pages.

Implications:

- `next/image` runs with `unoptimized: true` (no image optimization server).
- No route handlers, server actions, middleware, or dynamic segments that need
  a server. Any dynamic list (products, case studies) is generated at build time
  from local TypeScript/MDX data with `generateStaticParams`.
- Trailing slashes enabled so paths resolve cleanly on static hosting.

## Deployment target

The repo is intended to live at `rapidtechplus.github.io`, so the site serves
from the domain root and `basePath` stays empty. If it is ever moved to a
project repo (`/rapidtechplus.com/`), set `basePath` / `assetPrefix` accordingly
via an env var — see `next.config.ts`.

## Directory layout

```
app/                 App Router routes (one folder per page)
  layout.tsx         Root layout: fonts, metadata, <Nav>/<Footer>
  page.tsx           Home
  about/ services/ products/ contact/ privacy/ terms/
  not-found.tsx      404
components/
  ui/                shadcn-style primitives (Button, ...)
  layout/            Nav, Footer, Container
  sections/          Composable page sections (Hero, ServiceGrid, CTA, ...)
content/             Typed static content (site config, services, products)
lib/                 Utilities (cn, metadata helpers)
styles/globals.css   Tailwind v4 entry + design tokens
public/              Static assets (favicon, og image, robots.txt)
docs/                PRD, architecture, roadmap
.github/workflows/   Pages deploy pipeline
```

## Design tokens

Colors, spacing, radius, and typography live as CSS custom properties in
`globals.css` and are exposed to Tailwind via the v4 `@theme` block, so the
palette can evolve in one place. Dark, neutral base palette per the design
philosophy.

## Scalability path

New sections (Careers, Docs, Blog, Case Studies, Open Source, Press Kit) are
added as new `app/*` routes reusing `components/sections` and `content/*` — no
architectural change required.
