# Task Backlog

The living work list for the Rapid Tech Plus website. Per [`CLAUDE.md`](../../CLAUDE.md),
check tasks here before implementing, add new tasks before starting them, and
mark tasks done only when the full Definition of Done is met.

Status: `[x]` done · `[ ]` todo · `[~]` in progress

---

## Phase 0 — Planning ✅

- [x] Product requirements (`docs/PRD.md`)
- [x] Architecture (`docs/architecture.md`)
- [x] Project overview (`docs/project/project-overview.md`)
- [x] Project docs: vision, goals, success-metrics (`docs/project/`)
- [x] Architecture docs: coding-standards, deployment (`docs/architecture/`)
- [x] Design docs: ui-guidelines, animation-guidelines, accessibility, branding (`docs/design/`)
- [x] Content docs: sitemap, page-outline, content-strategy, seo-strategy (`docs/content/`)

## Phase 1 — Scaffold ✅

- [x] Next 15 / React 19 / Tailwind v4 / motion / lucide dependencies
- [x] `next.config.ts` static export (unoptimized images, trailing slash)
- [x] TypeScript strict (`tsconfig.json`)
- [x] Tailwind v4 + PostCSS + `app/globals.css` design tokens
- [x] `lib/utils.ts` (cn), `components/ui/button.tsx`
- [x] ESLint (flat config) / Prettier / Husky / lint-staged
- [x] `typecheck` script (`tsc --noEmit`)
- [x] shadcn/ui toolchain (cva, tailwind-merge, Slot) + `components.json`
- [x] Light/dark theme system (next-themes, dark-first) + header toggle

## Phase 2 — Layout & shared UI ✅

- [x] Root `layout.tsx` (fonts, default metadata, JSON-LD)
- [x] `Nav`, `Footer`
- [x] Section primitives: `SectionHead`, `IconCard`, `CtaBanner`, `Reveal`

## Phase 3 — Pages ✅

- [x] Home, About, Services, Products, Contact, Privacy, Terms, 404
- [x] Homepage sections per master plan: Hero, Company intro, Services,
      Products preview, Technologies, Process, Why us, Contact CTA

## Phase 4 — SEO, assets, metadata ✅

- [x] Per-page metadata (title, description, canonical, OG/Twitter)
- [x] Organization JSON-LD
- [x] favicon, OG image, generated `robots.txt` + `sitemap.xml`
- [x] Brand assets in `public/`

## Phase 5 — Deploy ✅ (site) / ⏳ (verify)

- [x] GitHub Actions workflow builds and publishes `out/`
- [x] Remove legacy `.html` files
- [x] Clean static export from `npm run build`
- [ ] Confirm deployed GitHub Pages URL renders (owner action)
- [ ] Validate HTTPS / custom-domain readiness

## Phase 5.5 — Additional pages ✅

- [x] Industries page (`/industries`) + `industries` content
- [x] Technologies page (`/technologies`) + `techGroups` content
- [x] Nav, footer, and sitemap wiring for both
- [x] Homepage FAQ section (`faqs`, native details/summary) + FAQPage JSON-LD

## Phase 6 — Future Expansion (not v1)

- [ ] Product detail pages (`generateStaticParams` from `content/`)
- [ ] Careers page
- [ ] Documentation section
- [ ] Blog / insights
- [ ] Case studies
- [ ] Open source page
- [ ] Press kit
- [ ] Testimonials / trust section
- [ ] `config/` for shared constants (extract site config if it grows)
- [ ] Lighthouse CI to guard ≥95 Performance/A11y/SEO/Best-Practices

---

## Rules

- Only work on tasks whose dependencies are complete.
- One logical group of related tasks per change.
- Run lint + typecheck + build before marking done.
- Keep this file current after each batch.
