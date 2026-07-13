# Project Overview

**Read this first**, together with [`CLAUDE.md`](../../CLAUDE.md) and the
[task backlog](../roadmap/task-backlog.md), before making any code changes.

## What this is

The official, permanent website for **Rapid Tech Plus** — a modern software
company. It is a fully static, statically-exported Next.js app deployed to
GitHub Pages. The first release supports company and bank verification, but the
architecture is built to grow into a full marketing and product site without
rewrites.

## Snapshot

|           |                                                                                       |
| --------- | ------------------------------------------------------------------------------------- |
| Live URL  | https://rapidtechplus.github.io                                                       |
| Repo      | `rapidtechplus/rapidtechplus.github.io` (branch `master`)                             |
| Stack     | Next.js 15 · React 19 · TypeScript (strict) · Tailwind CSS v4 · motion · lucide-react |
| Rendering | `output: "export"` → static `out/`, no server runtime                                 |
| Deploy    | GitHub Actions → GitHub Pages                                                         |

## Hard constraints

Static only. No APIs, databases, authentication, CMS, or server-side
persistence. Everything must build via static export. See `CLAUDE.md` →
_Project Constraints_.

## Where things live

| Path              | Purpose                                                                |
| ----------------- | ---------------------------------------------------------------------- |
| `app/`            | App Router routes (one folder per page)                                |
| `components/`     | Reusable UI — `layout/`, `sections/`, `ui/`                            |
| `content/`        | Typed page content — single source of truth for copy & company details |
| `lib/`            | Shared logic/utilities                                                 |
| `app/globals.css` | Design tokens + component styles                                       |
| `public/`         | Static assets (favicon, OG image, `.nojekyll`)                         |
| `docs/`           | This overview, PRD, architecture, roadmap                              |

## Related docs

**Product**

- [Product Requirements (PRD)](../PRD.md) — vision, goals, non-goals, success criteria
- [Vision](./vision.md) · [Goals](./goals.md) · [Success Metrics](./success-metrics.md)

**Architecture**

- [Architecture](../architecture.md) — stack, rendering model, scalability path
- [Project Structure](../architecture/project-structure.md) — folders, naming, imports
- [Coding Standards](../architecture/coding-standards.md) · [Deployment](../architecture/deployment.md)

**Design**

- [Design System](../design/design-system.md) — colors, typography, spacing, components, motion
- [UI Guidelines](../design/ui-guidelines.md) · [Animation Guidelines](../design/animation-guidelines.md)
- [Accessibility](../design/accessibility.md) · [Branding](../design/branding.md)

**Content**

- [Sitemap](../content/sitemap.md) · [Page Outline](../content/page-outline.md)
- [Content Strategy](../content/content-strategy.md) · [SEO Strategy](../content/seo-strategy.md)

**Roadmap**

- [Master Development Plan](../roadmap/master-development-plan.md) — phased build plan
- [Task Backlog](../roadmap/task-backlog.md) — the living work list

## Definition of Done

Every task must pass `npm run lint`, `npm run typecheck`, and `npm run build`,
be responsive and accessible, and update the backlog (and docs if needed)
before it is considered complete. See `CLAUDE.md` → _Definition of Done_.
