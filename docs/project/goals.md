# Goals

Concrete objectives for the Rapid Tech Plus website. Success is measured in
[`success-metrics.md`](./success-metrics.md); the "why" lives in
[`vision.md`](./vision.md) and [`../PRD.md`](../PRD.md).

---

## Business goals

1. **Establish a credible company identity** — consistent name, description, and
   branding across every page.
2. **Support business and bank verification** — clearly present the company name,
   what it does, contact details, and legal pages (Privacy, Terms) with canonical
   URLs.
3. **Build trust** with prospective clients and partners.
4. **Showcase services and products** in a way that reflects real capability.
5. **Demonstrate engineering excellence** through the quality of the site itself.

## Product goals

1. A **permanent, scalable** information architecture that absorbs new pages
   (Careers, Docs, Blog, Case Studies, Open Source) without redesign.
2. **Static export** compatible with GitHub Pages — no backend, database, CMS, or
   auth (see non-goals in [`../PRD.md`](../PRD.md)).
3. **Content in one place** — all copy and company details live in
   `content/site.ts`, so verification-relevant facts change once.

## Engineering goals

1. TypeScript strict, ESLint-clean, and a green `lint → typecheck → build` on
   every change.
2. Reusable, composable components; no duplicated code or premature abstraction.
3. Mobile-first, accessible (WCAG AA), and performance-conscious by default.

## Design goals

1. Premium, minimal, dark-first aesthetic on par with the reference SaaS sites.
2. Handcrafted light **and** dark themes — not a color inversion.
3. Motion that enhances without distracting, respecting `prefers-reduced-motion`.

## Non-goals (v1)

No authentication, database, CMS, admin panel, backend APIs, contact-form
backend, analytics dashboard, or customer portal. The site is fully static.
