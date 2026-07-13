# Sitemap

The site's information architecture. The machine-readable version is generated at
build time by [`app/sitemap.ts`](../../app/sitemap.ts) → `/sitemap.xml`; this
document is the human reference and the plan for growth.

---

## Live routes (v1)

| Path            | Page             | In nav      | In sitemap.xml | Priority |
| --------------- | ---------------- | ----------- | -------------- | -------- |
| `/`             | Home             | ✅          | ✅ (1.0)       | Highest  |
| `/about`        | About            | ✅          | ✅ (0.7)       | High     |
| `/services`     | Services         | ✅          | ✅ (0.7)       | High     |
| `/products`     | Products         | ✅          | ✅ (0.7)       | High     |
| `/industries`   | Industries       | ✅          | ✅ (0.7)       | High     |
| `/technologies` | Technologies     | ✅          | ✅ (0.7)       | High     |
| `/contact`      | Contact          | ✅          | ✅ (0.7)       | High     |
| `/privacy`      | Privacy Policy   | ❌ (footer) | ✅ (0.7)       | Legal    |
| `/terms`        | Terms of Service | ❌ (footer) | ✅ (0.7)       | Legal    |
| `*`             | 404 (not-found)  | —           | —              | —        |

Primary nav (`navItems` in `content/site.ts`): Home · About · Services ·
Products · Industries · Technologies · Contact. Legal pages are linked from the
footer only.

## Footer structure

`footerColumns` in `content/site.ts`:

- **Company** — About, Services, Products
- **Connect** — Contact, email link
- **Legal** — Privacy Policy, Terms of Service

## Planned routes (future — not v1)

Add each as a new `app/*` route reusing existing sections and content; no
architectural change required. Remember to add the route to `app/sitemap.ts` and
to the nav/footer where appropriate.

| Path                    | Page            | Notes                                  |
| ----------------------- | --------------- | -------------------------------------- |
| `/products/[slug]`      | Product detail  | `generateStaticParams` from `content/` |
| `/careers`              | Careers         |                                        |
| `/docs`                 | Documentation   |                                        |
| `/blog`, `/blog/[slug]` | Blog / Insights | Static-generated from local data/MDX   |
| `/case-studies`         | Case studies    |                                        |
| `/open-source`          | Open source     |                                        |
| `/press`                | Press kit       |                                        |

## Rules when adding a route

1. Create `app/<route>/page.tsx` (server component, exports `metadata`).
2. Source all copy from `content/site.ts`.
3. Add the path to `app/sitemap.ts`.
4. Add to `navItems` / `footerColumns` if it should be discoverable.
5. Set a canonical URL in the page metadata.
