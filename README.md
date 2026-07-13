# Rapid Tech Plus — Website

Official website for **Rapid Tech Plus**, built as a statically-exported
Next.js 15 app and deployed to GitHub Pages.

## Stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS v4 · motion · lucide-react ·
ESLint · Prettier · Husky.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build & static export

```bash
npm run build    # outputs a fully static site to ./out
```

The app uses `output: "export"` (see `next.config.ts`), so `out/` is deployed
as-is. There is no server runtime, database, or backend.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
export and publishes `out/` to GitHub Pages.

**One-time setup:** create a repo named `rapidtechplus.github.io`, push, then set
**Settings → Pages → Source → "GitHub Actions"**.

## Project layout

| Path              | Purpose                                       |
| ----------------- | --------------------------------------------- |
| `app/`            | App Router routes (one folder per page)       |
| `components/`     | Reusable UI (layout, sections, ui primitives) |
| `content/`        | Typed static content — single source of truth |
| `app/globals.css` | Design tokens + component styles              |
| `public/`         | Static assets (favicon, og image)             |
| `docs/`           | PRD, architecture, roadmap                    |

See [`docs/`](docs/) for the product requirements, architecture, and roadmap.
