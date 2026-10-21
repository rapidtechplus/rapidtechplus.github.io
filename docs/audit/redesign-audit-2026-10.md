# Redesign Audit — October 2026

Pre-implementation audit for the brand-true redesign (Phase 39+). Written
before any code changed, per the redesign brief's step 1. Builds on the
[July 2026 project audit](./project-audit-2026-07.md) and the
[August 2026 mobile audit](./mobile-audit-2026-08.md), which remain accurate
for everything they cover.

Audit date: 2026-10-21 · Branch: `feat/header-full-logo` (= `origin/master`)
· Exported routes: 115

---

## 1. Stack and build (preserved — no migration)

| Area       | Finding                                                                             |
| ---------- | ----------------------------------------------------------------------------------- |
| Framework  | Next.js 15 App Router, React 19, TypeScript strict, `output: "export"`              |
| Styling    | Tailwind v4 (PostCSS) + a hand-written class API in `app/globals.css` (4,925 lines) |
| Motion     | `motion` for reveals; Canvas 2D hero globe; CSS scroll-driven process rail           |
| Icons      | `lucide-react` through `components/icon.tsx`                                        |
| Fonts      | Sora (display), Inter (body), JetBrains Mono (labels) via `next/font`               |
| Tooling    | ESLint 9 flat config, Prettier + Tailwind plugin, Husky + lint-staged               |
| Deploy     | GitHub Actions → GitHub Pages on push to `master` (`.github/workflows/deploy.yml`)  |
| Images     | `unoptimized: true` — no image server on Pages                                      |

The stack is suitable and stays. There is no router, dependency, or build
change in the redesign.

### Repo vs live site

`origin/master` (deployed) contains every commit on this branch — the live
site and the repository are the same code. There is no discrepancy to
reconcile. `develop` is one merge behind `master`.

## 2. Route inventory (115 exported routes)

| Section         | Routes | Template                                   |
| --------------- | ------ | ------------------------------------------ |
| `/`             | 1      | `app/page.tsx` (home)                      |
| `/hire`         | 1 + 29 | `HireLanding`                              |
| `/solutions`    | 1 + 18 | `DetailLayout`                             |
| `/industries`   | 1 + 10 | `DetailLayout`                             |
| `/services`     | 1 + 8  | `ServiceLanding`                           |
| `/technologies` | 1 + 7  | `TechnologyLanding`                        |
| `/ai`           | 1 + 7  | `ServiceLanding`                           |
| `/products`     | 1 + 6  | `DetailLayout`                             |
| `/case-studies` | 1 + 6  | `CaseStudyLayout`                          |
| Company         | 6      | about, careers, engineering, open-source, our-process, why-us |
| Resources       | 2      | blog (index only), contact                 |
| Legal / system  | 7      | privacy, terms, cookies, disclaimer, sitemap, coming-soon, 404 |

Every hub and detail page is composed from six shared templates plus the
primitives in `components/sections/pieces.tsx` (`PageHero`, `SectionHead`,
`IconCard`, `CaseCard`, `CtaBanner`, …). Redesigning the tokens, the shell
(header, footer, backgrounds) and those primitives therefore redesigns every
route; page-level work is then layout, not styling.

## 3. Brand assets and logo-derived colours

Assets in `public/brand/`: `logo-full.webp` (master lockup, 2000×454),
`logo-full-header.webp` (529×120), `logo-mark.png` (512), `logo-mark-128.png`,
`icon-512.png`, `favicon-64.png`; plus `public/favicon.ico`,
`public/apple-touch-icon.png` and 13 generated OG cards.

Dominant opaque colours, sampled from the master lockup with `sharp`
(8-bit buckets, alpha ≥ 200):

| Sample    | Share | Where in the logo                  | Token               |
| --------- | ----- | ---------------------------------- | ------------------- |
| `#183860` | 26%   | "R" body, "RAPID TECH" wordmark    | `--brand-navy`      |
| `#808888` | 14%   | grey leg, "THE WAY TO WEB PRESENCE" | `--brand-steel`     |
| `#5890d0` | 9%    | arrow tip, "PLUS"                  | `--brand-sky`       |
| `#305888`–`#4070a0` | 8% | the navy → sky gradient mid-tones | `--brand-blue`      |

**Finding:** the live palette is _not_ logo-derived. Phase 31 chose Tailwind
cobalt/sky (`#2563eb`, `#60a5fa`, `#0ea5e9`) before the official logo existed
(Phase 37). The accent is more saturated and the "navy" is a royal blue; the
grey never appears. The redesign keys every token to the sampled values above.

Contrast of the chosen values (WCAG, computed):

| Pair                                      | Ratio   |
| ----------------------------------------- | ------- |
| navy `#183860` text on white              | 11.8 :1 |
| accent `#2b66a8` text on white            | 5.9 :1  |
| white on button `#1e4a7f`→`#183860`       | ≥ 8 :1  |
| sky `#5890d0` on dark `#0a1322`           | 5.6 :1  |
| accent `#7fb0e6` on dark `#0a1322`        | 8.2 :1  |
| dark ink on sky button `#5890d0`          | 5.3 :1  |
| muted `#495a70` / dim `#5f7089` on white  | 7.1 / 5.0 :1 |
| muted `#a9b6c8` / dim `#8d9bb0` on dark   | 9.0 / 6.6 :1 |

Raw sky `#5890d0` on white is 3.3:1, so it is used for large type, gradients
and non-text accents only; text uses the darkened `#2b66a8`.

## 4. Existing issues found

Content

- Placeholder / illustrative copy still ships: `homeStats` ("100% focus on
  quality", "∞ room to scale"), the three unattributed testimonials, the
  About-page milestones, the Why-us proof stats, the hero telemetry chips
  ("agents online 12", "p95 latency 42ms"), footer phone and address. All are
  flagged in `content/` comments and in the disclaimer; the redesign neutralises
  the hero chips and leaves the rest for owner input (they need real numbers).
- Footer slogan ("AI-Native Engineering") disagrees with the lockup's line
  ("The way to web presence") — open owner decision since Phase 37.
- `/blog` has an index but no post routes; "Read more" links go to the index.

Design system

- 21 hardcoded colour literals outside the token block (primary buttons, three
  mega-menu CTAs, the assistant launcher/bubbles, theme switch) — all cobalt.
- OG template (`lib/og-image.tsx`) still carries a violet `#a855f7` stop from
  the pre-Phase-31 palette.
- Theme default is `system`; the brief's direction (dark hero, light content
  sections) needs light as the designed default with dark bands as a surface.
- The hero's static stand-in and the globe palette are hardcoded per theme in
  JS (`components/hero-scene/index.tsx`).

Structure (from the mobile audit, still open)

- 2,203 DOM elements / 235 KB HTML per page (mega menu rendered on all routes).
- No automated tests; Lighthouse performance ≥ 95 not demonstrated.
- `globals.css` is a single 4,925-line file with load-bearing ordering.

Links: 0 broken internal links in the last export sweep (mobile audit).

## 5. Redesign plan

Phase 39 — brand-true design system (this change)

1. Tokens: logo-derived palette, light-first with an independently tuned dark
   theme; a `.surface-dark` scope that re-declares the dark set so any band
   (hero, CTA, footer) can be dark inside a light page and every child
   component adapts without new CSS.
2. Shell: light header (bare lockup; white plate only in dark), dark navy hero
   with the globe, dark footer in both themes, light content sections.
3. Primitives: `PageHero` gains a `tone` prop (dark by default; legal pages
   stay light), `CtaBanner` becomes a dark band, buttons/chips/menu CTAs read
   their fills from tokens.
4. Metadata: `theme-color`, global error boundary and OG cards recoloured; OG
   PNGs regenerated.
5. Verification: lint, typecheck, build; static export reviewed at 320/375/768/
   1024/1280/1440/1920 in both themes; keyboard pass on header, sheet, toggle.

Phase 40 (follow-up) — page-level layouts: hub pages get differentiated section
layouts (fewer uniform card grids), blog post routes, real proof points once
the owner supplies them, Lighthouse CI.
