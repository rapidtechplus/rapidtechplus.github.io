# Project Structure

How the codebase is organized and the conventions every change must follow.
Read alongside [`../architecture.md`](../architecture.md) (rendering model) and
[`../design/design-system.md`](../design/design-system.md) (visual language).

---

## Directory layout

```
app/                      App Router — one folder per route
  layout.tsx              Root layout: fonts, metadata, JSON-LD, ThemeProvider, Nav, Footer
  page.tsx                Home (/)
  about/page.tsx          /about
  services/page.tsx       /services
  products/page.tsx       /products
  contact/page.tsx        /contact
  privacy/page.tsx        /privacy
  terms/page.tsx          /terms
  not-found.tsx           404
  robots.ts               Generated /robots.txt
  sitemap.ts              Generated /sitemap.xml
  globals.css             Tailwind v4 entry + design tokens + component classes

components/
  layout/                 Page chrome — nav.tsx, footer.tsx
  sections/               Composable page sections — pieces.tsx (SectionHead, IconCard, CtaBanner)
  ui/                     Primitives — button.tsx (shadcn-style: cva + Slot)
  reveal.tsx              Scroll-in animation wrapper (motion)
  theme-provider.tsx      next-themes provider
  theme-toggle.tsx        Light/dark toggle
  contact-form.tsx        Backend-free mailto form

content/                  Typed static content — single source of truth for copy
  site.ts                 Company details, nav, footer, and all page section data

lib/                      Shared, framework-agnostic helpers
  utils.ts                cn() (clsx + tailwind-merge)
  og-image.tsx            Shared Open Graph card template (Satori)
  structured-data.ts      schema.org JSON-LD builders

public/                   Static assets served at the root
  favicon.svg  logo.svg  .nojekyll

scripts/                  Build-time generators (not run by `next build`)
  generate-og.tsx         `npm run og:generate` → app/**/opengraph-image.png

docs/                     Project docs (this folder)
config/                   Shared constants (site.ts, og-templates.ts)
```

---

## Naming conventions

| Thing                 | Convention                        | Example                                 |
| --------------------- | --------------------------------- | --------------------------------------- |
| File names            | kebab-case                        | `theme-toggle.tsx`, `pieces.tsx`        |
| Route folders         | lowercase, match URL              | `app/about/`                            |
| Component exports     | PascalCase, named (no default)    | `export function ThemeToggle()`         |
| Route components      | default export (Next requirement) | `export default function AboutPage()`   |
| Content objects       | camelCase                         | `homeServices`, `footerColumns`         |
| CSS component classes | kebab-case, semantic              | `.card`, `.cta-banner`, `.section-head` |
| CSS design tokens     | `--kebab-case` custom properties  | `--bg-elev`, `--accent-soft`            |

---

## Component organization

- **`ui/`** — style-only, reusable primitives with no page-specific content. shadcn/ui
  pattern (cva variants + `Slot`/`asChild`). Add new primitives here via the shadcn
  approach.
- **`sections/`** — larger presentational blocks composed from primitives and fed by
  `content/`. Reused across pages (e.g. `IconCard`, `CtaBanner`).
- **`layout/`** — global chrome rendered once in the root layout.
- **Top-level `components/*`** — cross-cutting behavior components (theming, animation,
  the contact form) that don't fit the three buckets above.

Keep components small and single-purpose. If a page file grows past ~150 lines of JSX,
extract sections into `sections/`.

---

## Server vs. client components

- Default to **server components**. They ship no JS and export `metadata`.
- Add `"use client"` only when a component needs state, effects, browser APIs, or
  event handlers: currently `nav.tsx`, `reveal.tsx`, `theme-provider.tsx`,
  `theme-toggle.tsx`, `contact-form.tsx`.
- Route `page.tsx` files stay server components and export `metadata`; push
  interactivity down into small client children.

---

## Import rules

- Use the `@/*` path alias (maps to repo root) for all internal imports —
  `import { site } from "@/content/site"`. No deep relative chains (`../../..`).
- Import order: external packages → `@/` internal → relative. (Prettier + ESLint
  enforce formatting.)
- **Content never lives in components.** Copy, lists, and company details belong in
  `content/site.ts`; components consume them. This keeps verification-relevant details
  (name, email) in one place.
- Shared logic goes in `lib/`; shared constants (when they appear) in `config/`.

---

## Static-export constraints

Every addition must survive `output: "export"`:

- No route handlers, server actions, middleware, or runtime data fetching.
- Dynamic lists are generated at build time from `content/` via `generateStaticParams`.
- Images use `next/image` with `unoptimized` or plain `<img>`.

---

## Definition of Done (structure)

A change respects this document when files are in the right folder, named per the
conventions, content is externalized to `content/`, imports use `@/`, and
`npm run lint && npm run typecheck && npm run build` all pass.
