# SEO Strategy

How the site is made discoverable and shareable. Targets live in
[`../project/success-metrics.md`](../project/success-metrics.md) (SEO ≥ 95).

---

## Foundations (implemented)

| Element          | Source                                    |
| ---------------- | ----------------------------------------- |
| Per-page title   | `metadata` in each `page.tsx`             |
| Meta description | `metadata` in each `page.tsx`             |
| Canonical URL    | `metadata.alternates.canonical`           |
| Open Graph       | `metadata.openGraph`                      |
| Twitter card     | `metadata.twitter`                        |
| Sitemap          | `app/sitemap.ts` → `/sitemap.xml`         |
| Robots           | `app/robots.ts` → `/robots.txt`           |
| Structured data  | `lib/structured-data.ts` + `components/seo/json-ld.tsx` |
| Social image     | Per-template `app/**/opengraph-image.png` |

`site.url` (`https://rapidtechplus.github.io`) is the base for canonical URLs,
sitemap entries, robots, and JSON-LD — change it in one place when the domain
changes.

## Rules for every page

1. **Unique title & description** — no two routes share them. Keep titles
   ~50–60 chars, descriptions ~150–160.
2. **Canonical URL** set explicitly, with trailing slash (matches
   `trailingSlash: true`).
3. **OG + Twitter** metadata present so links preview well.
4. **One `h1`**, logical heading order (also an a11y requirement).
5. Add the route to `app/sitemap.ts`.

## Structured data

- **Organization** JSON-LD ships site-wide from the root layout (name, URL,
  logo, contact). Keep it in sync with `content/site.ts`.
- As pages are added, layer specific schemas: `BreadcrumbList`, `WebSite` +
  `SearchAction` (if search arrives), `Article` for blog posts, `Product` for
  product detail pages, `FAQPage` for an FAQ section.

## Performance = SEO

Core Web Vitals are ranking factors, and the site already optimizes for them:
static export, no runtime JS on server components, `next/font` (no layout shift),
subtle GPU-only motion. Guard against regressions:

- Keep client components minimal and pushed to leaves.
- No large unoptimized images (export uses `unoptimized`; ship right-sized
  assets, prefer SVG).
- Watch bundle size when adding dependencies.

## Content SEO

- Write clear, keyword-honest headings (services, products, technologies) — no
  keyword stuffing.
- Descriptive link text (not "click here").
- Descriptive `alt` on meaningful images.

## Roadmap

- [ ] Lighthouse CI to guard SEO/Perf/A11y/Best-Practices ≥ 95 (Phase 6).
- [ ] Per-page OG images when the content justifies them.
- [ ] Breadcrumb + richer schema as new page types launch.
- [ ] Submit sitemap to Google Search Console once on the final domain.
