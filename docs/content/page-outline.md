# Page Outline

Section-by-section structure of each page. Copy for all of these lives in
`content/site.ts`; this is the map. See [`sitemap.md`](./sitemap.md) for routes.

---

## Home (`/`)

1. **Hero** — headline, lead, primary + ghost CTA.
2. **Company intro / stats** — short positioning + `homeStats` (10+ years, 100%
   quality, 24/7, ∞ scale).
3. **Core services** — grid from `homeServices` (6 items).
4. **Products preview** — grid from `products`, linking to `/products`.
5. **Technologies** — chip list from `techStack`.
6. **Process** — 4 steps from `process` (Discover → Design → Build → Launch).
7. **Why choose us** — `whyUs` + `homeFeatures`.
8. **FAQ** — `faqs` (6 items) as native `<details>` accordions; emits `FAQPage`
   JSON-LD.
9. **Contact CTA** — `CtaBanner` to `/contact`.

**Planned additions** (per PRD, not yet built as dedicated sections): AI
Capabilities, Open Source & Innovation.

## About (`/about`)

1. Hero / intro.
2. **At a glance** — `aboutGlance` (3 items).
3. **Values** — `aboutValues` (6 items).
4. Contact CTA.

## Services (`/services`)

1. Hero / intro.
2. **Services grid** — `services` (8 items, richer than the homepage subset).
3. **Process** — reused `process` steps.
4. Contact CTA.

## Products (`/products`)

1. Hero / intro.
2. **Products grid** — `products` (6 items).
3. Contact CTA.
4. _(Future: product detail pages via `/products/[slug]`.)_

## Industries (`/industries`)

1. Hero / intro.
2. **Industries grid** — `industries` (6 items).
3. Contact CTA.

## Technologies (`/technologies`)

1. Hero / intro.
2. **Grouped stack** — `techGroups` (Languages & Frameworks, Styling & UI, Data
   & APIs, Cloud & DevOps) rendered as panels of chips.
3. Contact CTA.

## Contact (`/contact`)

1. Hero / intro.
2. **Contact details** — email, support email, location, hours (from `site`).
3. **Contact form** — backend-free `mailto` flow (`contact-form.tsx`).

## Privacy (`/privacy`) & Terms (`/terms`)

Single-column `.prose` legal documents (`780px` measure). Required for
verification. Keep company name, contact, and effective date accurate.

## 404 (`not-found.tsx`)

Branded not-found with a clear path back to Home.

---

## Composition rules

- Sections are built from `components/sections` primitives (`SectionHead`,
  `IconCard`, `CtaBanner`) fed by `content/site.ts`.
- Every content page closes with a contact CTA.
- The **Eyebrow → Heading → Lead** pattern opens each section.
