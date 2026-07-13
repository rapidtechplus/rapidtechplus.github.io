# Success Metrics

How we know the site is meeting its [`goals.md`](./goals.md).

---

## Quality gates (must pass on every change)

| Gate        | Command             | Bar                  |
| ----------- | ------------------- | -------------------- |
| Lint        | `npm run lint`      | Zero errors          |
| Type safety | `npm run typecheck` | Zero errors (strict) |
| Build       | `npm run build`     | Clean static export  |

A task is not done until all three pass — see `CLAUDE.md` → _Definition of Done_.

## Lighthouse targets

Measured on the built static output for representative pages (Home, Services,
Contact):

| Category       | Target |
| -------------- | ------ |
| Performance    | ≥ 95   |
| Accessibility  | ≥ 95   |
| SEO            | ≥ 95   |
| Best Practices | ≥ 95   |

A future task adds Lighthouse CI to guard these automatically (see task backlog,
Phase 6).

## Accessibility

- WCAG 2.1 **AA** contrast in both themes.
- Full keyboard operability; visible focus on every interactive element.
- `prefers-reduced-motion` honored everywhere.
- Zero critical issues in an axe / Lighthouse a11y audit.

## SEO / discoverability

- Every page ships title, description, canonical, Open Graph, and Twitter card.
- Valid `sitemap.xml`, `robots.txt`, and Organization JSON-LD.
- No duplicate titles or descriptions across routes.

## Verification readiness

- Company name, description, contact email, and legal pages render on the live
  GitHub Pages URL over HTTPS with stable canonical URLs.

## Maintainability (qualitative)

- New pages added by reusing existing sections + `content/` — no architectural
  change.
- No duplicated copy; all content sourced from `content/site.ts`.
- The codebase remains understandable to a new engineer within one reading of
  the docs.
