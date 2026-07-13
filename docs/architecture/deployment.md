# Deployment

How the site is built and published. Read with
[`../architecture.md`](../architecture.md) (rendering model).

---

## Target

- **Host:** GitHub Pages.
- **Repo / domain:** intended to live at `rapidtechplus.github.io`, so the site
  serves from the domain root and `basePath` stays empty.
- **Pipeline:** GitHub Actions (`.github/workflows/deploy.yml`) builds and
  publishes the static `out/` directory.

## Build model

The site is a **fully static export**. `next.config.ts` sets:

```ts
output: "export",        // emit static HTML to out/
trailingSlash: true,     // clean paths on static hosting
basePath: basePath || undefined,
images: { unoptimized: true }, // no image-optimization server on Pages
```

`npm run build` produces `out/`, which is deployed as-is. There is **no server
runtime** — no route handlers, server actions, or middleware.

## Local build commands

| Command             | Purpose                |
| ------------------- | ---------------------- |
| `npm run dev`       | Local dev server       |
| `npm run lint`      | ESLint                 |
| `npm run typecheck` | `tsc --noEmit`         |
| `npm run build`     | Static export → `out/` |

Run lint, typecheck, and build before every deploy — see
[`../project/success-metrics.md`](../project/success-metrics.md).

## GitHub Actions flow

1. Trigger on push to `master`.
2. Install dependencies and run `npm run build`.
3. Upload `out/` as the Pages artifact and deploy to GitHub Pages.

`.nojekyll` in `public/` is required so GitHub Pages serves Next's `_next/`
asset folder (Jekyll would otherwise ignore underscore-prefixed paths).

## Moving to a project (sub-path) repo

If the site is ever hosted under a sub-path (e.g. `/rapidtechplus.com/`), set
`NEXT_PUBLIC_BASE_PATH="/repo-name"` — `next.config.ts` applies it to `basePath`
(and asset prefixing follows). No code changes needed.

## Custom domain

To attach a custom domain later: add a `CNAME` file to `public/`, configure the
domain in GitHub Pages settings, and verify HTTPS. Update `site.url` in
`content/site.ts` so canonical URLs, sitemap, robots, and JSON-LD all follow.

## Post-deploy checklist (owner action)

- [ ] Live URL renders correctly over HTTPS.
- [ ] Canonical URLs, `sitemap.xml`, and `robots.txt` resolve.
- [ ] Legal pages (Privacy, Terms) and contact details are reachable.
