# Project Audit & Complete Website Plan — July 2026

Planning-only audit of the Rapid Tech Plus website. **No new UI was written for
this document.** It establishes the full roadmap before implementation resumes.

Audit date: 2026-07-14 · Branch: `develop` · Live routes: 14 (+ 404)

---

## 1. Current project status

The site is a mature, well-engineered **single-page-per-hub** marketing site. It
is visually polished (20 recorded refinement phases), statically exported,
strict-typed, and accessible. The foundation is excellent. The gap is **depth**:
the navigation advertises a large, professional information architecture, but
almost every link resolves to one of ~6 hub pages.

### What exists and is solid

| Area | Status | Notes |
| --- | --- | --- |
| Design system | ✅ Strong | Class-API `globals.css`, Ink & Electric Violet, 3 type roles, real lucide icons, semantic tokens |
| Theme system | ✅ Strong | next-themes `system`, independent light/dark, smooth transitions |
| Header + mega menu | ✅ Strong | Master–detail + flat + compact panels, fixed-anchored, keyboard-accessible |
| Footer | ✅ Strong | 5 columns, newsletter (mailto), 8 socials, legal bar, theme switch |
| Motion / animation | ✅ Strong | Background layer, counters, hero visual — all reduced-motion safe |
| Responsive | ✅ Good | Zero horizontal overflow verified 375→1920; hamburger ≤1024px |
| Content model | ✅ Strong | `content/site.ts` single source of truth, serializable |
| SEO baseline | ✅ Good | Per-page metadata, Organization + FAQPage + BreadcrumbList JSON-LD, sitemap.xml, robots |
| Accessibility baseline | ✅ Good | Focus management, scroll-lock, Escape, aria-expanded, aria-current |

### Live routes (14)

Home · About · Services · Solutions · Products · Industries · Technologies ·
Case Studies · Blog · Contact · Privacy · Terms · Cookies · Sitemap (+ 404).

---

## 2. Missing pages (the central gap)

The mega menu exposes **~130 destinations** that collapse into ~6 hubs. Every
sub-item is a real, professional promise the site does not yet deliver as its
own page. Priority-ordered:

### Services — detail pages (currently all → `/services` or `/solutions`)
Missing individual pages for: AI Agents, LLM Integration, RAG Solutions, MCP
Servers, AI Automation, AI Chatbots, React, Next.js, Angular, Vue, Node.js,
NestJS, Laravel, .NET, AWS, Azure, Docker, Kubernetes, CI/CD, Flutter, React
Native, Android, iOS. **→ needs `/services/[slug]`.**

### Hire Expert — landing + role pages (currently all → `/contact`)
No `/hire` landing exists. ~30 role links all point at `/contact`: Hire React /
Next.js / Angular / Vue / Node / Python / .NET / Laravel / Flutter / iOS /
Android / AI / ML / DevOps / QA / Designers, plus Dedicated Teams. **→ needs
`/hire` + `/hire/[slug]`.**

### Industries — detail pages (all 10 → `/industries`)
Healthcare, FinTech, Retail & eCommerce, Manufacturing, Education, Real Estate,
Hospitality, Travel, Food & Beverage, Cleantech. **→ needs `/industries/[slug]`.**

### Solutions — detail pages (all → `/solutions`)
AI Agents, Workflow Automation, Business Automation, Enterprise Software, Cloud
Solutions, Data & Integrations. **→ needs `/solutions/[slug]`.**

### Products — detail pages
Products page lists generic categories only. Named products from the footer/roadmap
(Planix, Rocket Intelligence Engine, WhatsApp Business OS, KidzoRides) have **no
detail pages** and are not modelled in content. **→ needs `/products/[slug]`.**

### Case Studies — detail pages (all 8 categories → `/case-studies`)
6 illustrative studies exist as cards only; no per-study route. **→ needs
`/case-studies/[slug]`.**

### Blog / Insights — post pages (all → `/blog`)
6 posts exist as metadata; no per-post route, no categories/tags/authors/search.
**→ needs `/blog/[slug]` (+ category/tag routes).**

### Company pages (Careers & Culture are `soon`; others don't exist)
Our Story, Leadership, Careers, Culture — none exist as routes.

### Resources (referenced in scope, not built)
FAQs (standalone), Open Source, Engineering Process, Development Process, Why
Rapid Tech Plus.

### Legal / system
Disclaimer, Coming Soon, and a **500** page are missing (404 exists).

---

## 3. Missing components / reusable primitives

To build the pages above without duplication, these are needed:

- **`generateStaticParams` detail templates** — one reusable page template per
  collection (service, hire-role, industry, solution, product, case study, post).
- **`PageHero` extraction** — the inner-page hero + breadcrumb pattern is repeated
  inline across pages; extract to one primitive.
- **`DetailLayout`** — shared detail scaffold (hero, TOC/anchors, body sections,
  related items, CTA banner).
- **`RelatedGrid`** — "related services / industries / studies" cross-linking.
- **`Pill` / `Tag`, `Badge`, `MetricStat`, `Quote/Testimonial`** — currently
  ad-hoc in `pieces.tsx`; consolidate.
- **`Breadcrumbs`** already exists ✅ — reuse for all detail pages.
- **Blog: `PostCard`, `CategoryFilter`, `TagList`, `AuthorByline`, client-side
  `SearchBox`** (static index filter).
- **`FaqAccordion`** extracted from the homepage for a standalone `/faq`.
- **`ContactForm`** exists ✅ (static/mailto) — reuse on hire/detail CTAs.

---

## 4. Missing features

- **Content collections** — `content/site.ts` is a single 1,400-line file. Split
  into `content/{services,industries,solutions,products,hire,case-studies,blog}.ts`
  with typed records keyed by `slug`, powering both nav and `[slug]` routes.
- **Real destinations** — retire the pattern where ~130 nav links share ~6 hrefs;
  once detail pages exist, point each link at its own route.
- **Search** (static, client-side) for Blog and possibly a global site search.
- **`config/`** for shared constants (per CLAUDE.md folder standards; not created).
- **OG image per template** (currently one global OG image).
- **Lighthouse CI** to guard the ≥95 targets.
- **Sitemap generation from collections** so `app/sitemap.ts` stays in sync
  automatically as `[slug]` routes are added.

---

## 5. Missing / stale documentation

- **`docs/content/sitemap.md` is stale** — still lists the old `navItems`
  (Home·About·Services·Products·Industries·Technologies·Contact) and a 3-column
  footer that no longer match `content/site.ts`. **Rewritten as part of this task.**
- No **content-model / collections spec** for the planned `[slug]` routes.
- No **component inventory** doc.
- PRD/architecture do not yet mention the expanded IA — update when Phase A lands.

---

## 6. Proposed sitemap

Two-tier: hub (landing) pages + `[slug]` detail pages, all statically exported.

```
/                                   Home
/about                              About (company)
  /about/story                      Our Story
  /about/leadership                 Leadership
  /about/culture                    Culture
/careers                            Careers (was "soon")
/contact                            Contact

/services                           Services hub
  /services/[slug]                  ~23 service detail pages
/hire                               Hire Expert hub (NEW)
  /hire/[slug]                      ~16 role pages
/solutions                          Solutions hub
  /solutions/[slug]                 ~6 solution pages
/industries                         Industries hub
  /industries/[slug]                10 industry pages
/products                           Products hub
  /products/[slug]                  Planix, Rocket Intelligence Engine,
                                    WhatsApp Business OS, KidzoRides, …
/technologies                       Technologies (stack)

/case-studies                       Case Studies hub
  /case-studies/[slug]              per-study pages
/blog                               Insights hub
  /blog/[slug]                      per-post pages
  /blog/category/[slug]             category archives
  /blog/tag/[slug]                  tag archives

/resources/faq                      FAQ (standalone)
/resources/open-source              Open Source
/resources/process                  Engineering / Development Process
/why-rapid-tech-plus                Why us

/sitemap                            Human sitemap
/privacy  /terms  /cookies  /disclaimer   Legal
/404  /500  /coming-soon             System
```

Nav stays as-is structurally; the win is that **links finally resolve to their
own pages** instead of shared hubs.

---

## 7. Updated task backlog

See [`docs/roadmap/task-backlog.md`](../roadmap/task-backlog.md) → the new
**"Complete-Website Plan (Phases A–O)"** section. Summary of phases:

- **A** — Content collections + detail-page architecture (foundation; blocks B–H)
- **B** — Service detail pages
- **C** — Hire Expert landing + role pages
- **D** — Industry detail pages
- **E** — Solution detail pages
- **F** — Product detail pages (Planix, Rocket Intelligence Engine, etc.)
- **G** — Case study detail pages
- **H** — Blog post + category/tag pages (+ search)
- **I** — Company pages (Our Story, Leadership, Careers, Culture)
- **J** — Resources (FAQ, Open Source, Process, Why Us)
- **K** — Legal & system (Disclaimer, 500, Coming Soon)
- **L** — SEO deepening (per-page OG, structured data per template, sitemap sync)
- **M** — Performance (Lighthouse CI, image/asset budget)
- **N** — Accessibility hardening (full audit across new pages)
- **O** — Production readiness (cross-browser, domain, deploy verification)

---

## 8. Recommended implementation order

1. **Phase A first, always.** Content collections + reusable detail template
   unblock everything and prevent duplication. Do not build detail pages before A.
2. Then **B → D → E** (Services, Industries, Solutions) — highest SEO value,
   reuse the same template, largest number of promised-but-missing pages.
3. **C (Hire Expert)** — commercially important; distinct template (role + team).
4. **F, G (Products, Case Studies)** — need real content; can proceed in parallel
   once A lands.
5. **H (Blog)** — most template work (post + archives + search); schedule after
   the simpler collections prove the pattern.
6. **I, J, K (Company, Resources, Legal/system)** — smaller, independent.
7. **L, M, N, O** — cross-cutting hardening; run continuously but formalize last.

**One collection per pull request.** Each phase B–H is a self-contained PR:
content file + `[slug]` route + nav rewiring + sitemap entry + Design Review
Checklist.
