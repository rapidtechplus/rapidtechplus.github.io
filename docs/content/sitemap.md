# Sitemap

The site's information architecture. The machine-readable version is generated at
build time by [`app/sitemap.ts`](../../app/sitemap.ts) → `/sitemap.xml`; this
document is the human reference and the plan for growth. See the full audit in
[`docs/audit/project-audit-2026-07.md`](../audit/project-audit-2026-07.md).

---

## Live routes (14 hubs + 23 service detail + 404)

| Path            | Page             | In nav        | In sitemap.xml |
| --------------- | ---------------- | ------------- | -------------- |
| `/`             | Home             | ✅ (logo)     | ✅ (1.0)       |
| `/about`        | About            | ✅ (Company)  | ✅ (0.7)       |
| `/services`     | Services         | ✅ (mega)     | ✅ (0.7)       |
| `/solutions`    | Solutions        | ✅ (mega)     | ✅ (0.7)       |
| `/products`     | Products         | ✅ (footer)   | ✅ (0.7)       |
| `/industries`   | Industries       | ✅ (mega)     | ✅ (0.7)       |
| `/technologies` | Technologies     | ✅ (Company)  | ✅ (0.7)       |
| `/case-studies` | Case Studies     | ✅ (mega)     | ✅ (0.7)       |
| `/blog`         | Blogs / Insights | ✅            | ✅ (0.7)       |
| `/contact`      | Contact          | ✅ (CTA/menu) | ✅ (0.7)       |
| `/privacy`      | Privacy Policy   | ❌ (footer)   | ✅ (0.7)       |
| `/terms`        | Terms of Service | ❌ (footer)   | ✅ (0.7)       |
| `/cookies`      | Cookie Policy    | ❌ (footer)   | ✅ (0.7)       |
| `/sitemap`      | Human sitemap    | ❌ (footer)   | ✅ (0.7)       |
| `/services/[slug]` | Service detail (×23) | ✅ (Services mega) | ✅ (0.7) |
| `*`             | 404 (not-found)  | —             | —              |

**Phase A landed:** the Services mega-menu's 23 sub-items now resolve to their
own `/services/[slug]` pages (AI Agents, LLM Integration, RAG, MCP, React,
Next.js, Angular, Vue, Node.js, NestJS, Laravel, .NET, AWS, Azure, Docker,
Kubernetes, CI/CD, Flutter, React Native, Android, iOS, …), derived from the
`content/services.ts` collection and auto-added to `sitemap.xml` via
`serviceSlugs`. Other collections are split and slug-keyed but still resolve to
their hubs until Phases C–H.

Top-level nav (`megaMenu` in `content/site.ts`): Services · Hire Expert ·
Solutions · Industries · Case Studies · Company · Blogs. The **Get A Quote** CTA
covers Contact. Legal + Home + Sitemap live in the footer bottom bar.

> **Known gap (narrowing):** Services sub-items now have real `[slug]` routes
> (Phase A). The remaining mega-menu sub-items (~110) still resolve to their
> hub pages; the plan below gives each its own `[slug]` route. See the audit.

## Footer structure

`footerColumns` in `content/site.ts`: **Services · Solutions · Industries ·
Company · Resources**, plus a legal/theme bottom bar (`legalLinks`).

## Planned routes (Phases A–O — see task backlog)

| Path                       | Page             | Phase |
| -------------------------- | ---------------- | ----- |
| `/services/[slug]`         | Service detail   | ✅ A (pattern) → B (copy depth) |
| `/hire`, `/hire/[slug]`    | Hire Expert      | C     |
| `/industries/[slug]`       | Industry detail  | D     |
| `/solutions/[slug]`        | Solution detail  | E     |
| `/products/[slug]`         | Product detail   | F     |
| `/case-studies/[slug]`     | Case study       | G     |
| `/blog/[slug]`, `/category`, `/tag` | Insights | H     |
| `/about/{story,leadership,culture}`, `/careers` | Company | I |
| `/resources/{faq,open-source,process}`, `/why-rapid-tech-plus` | Resources | J |
| `/disclaimer`, `/coming-soon`, `500` | Legal/system | K |

## Rules when adding a route

1. Add the record to its **content collection** (Phase A) — copy is data.
2. Create `app/<route>/page.tsx` (server component, exports `metadata`, sets a
   canonical URL). Detail pages use `generateStaticParams` + `DetailLayout`.
3. `app/sitemap.ts` picks up collection slugs automatically (Phase A).
4. Point the nav/footer link at the real route (retire the shared-hub href).
