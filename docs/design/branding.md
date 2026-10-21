# Branding

The Rapid Tech Plus brand as expressed on the website. Visual tokens are defined
in [`design-system.md`](./design-system.md); brand facts live in
`content/site.ts` (single source of truth).

---

## Name & usage

- Full name: **Rapid Tech Plus** — always written in full, consistently across
  every page (critical for company/bank verification).
- Never abbreviate to "RTP" or reorder the words in copy.

## Logo

- Official mark: the **"R" with a rising arrow and circuit traces** (navy →
  sky-blue, gray leg), cut from the master lockup `public/brand/logo-full.webp`.
- The header and the footer both show the full lockup
  (`public/brand/logo-full-header.webp`). On a dark surface (the dark theme,
  the `.surface-dark` footer) it sits on a **white tile** (`--logo-plate`) —
  the navy type disappears otherwise. On the light header it is shown bare.
  Don't recolour the mark.
- Assets: `public/brand/` (paths in `site.logo`), `public/favicon.ico`,
  `public/apple-touch-icon.png`, plus the generated social cards
  `app/**/opengraph-image.png` (template: `lib/og-image.tsx`, rebuilt with
  `npm run og:generate`). Keep the gradient and proportions consistent if the
  mark evolves — the OG template hardcodes the brand colours as literals, since
  Satori resolves no CSS variables.

## Voice & tone

- **Confident, clear, and honest.** We describe real capability, not hype.
- **Technical but accessible** — credible to engineers, understandable to
  business readers.
- Short sentences. Active voice. No filler, no buzzword stacking.
- AI is framed as a **capability, not a marketing claim** (see
  [`../project/vision.md`](../project/vision.md)).

**Say:** "We build multi-tenant SaaS engineered for growth."
**Avoid:** "We leverage cutting-edge synergies to revolutionize your business."

## Color

Every colour is sampled from the logo itself (Phase 39; sampling in
[`../audit/redesign-audit-2026-10.md`](../audit/redesign-audit-2026-10.md)):

- **Navy `#183860`** — the "R" body and "RAPID TECH" wordmark. Primary
  actions and headline gradients in light; the ink the dark theme is built on.
- **Sky `#5890d0`** — the rising arrow and "PLUS". Accents, the gradient's
  end, and the primary action in dark. Darkened to `#2b66a8` wherever it has
  to carry text on white (5.9:1).
- **Steel `#888e92`** — the grey leg and "THE WAY TO WEB PRESENCE". Reserved
  for the logo; muted text uses navy-tinted greys instead.
- **`--grad`** — the R's own navy → sky ramp.

Light is the designed (and, for now, only) theme — enterprise-light (Phase
40): white and soft-grey surfaces, navy type, brand-blue actions, sky glows
and a fine dot grid behind the heroes, and a navy footer closing the page.
Dark surfaces appear only where they add contrast (the footer, the hero's
glass core and code panel, the dashboard sidebar). A full dark theme exists
in the tokens but is disabled until the owner wants it back. Tokens in
[`design-system.md`](./design-system.md).

## Typography

- **Inter** (via `next/font`), system fallback. Large, tight-tracked headings;
  comfortable body measure. See the design system for the scale.

## Imagery & iconography

- Prefer clean, geometric, restrained visuals over stock photography.
- Section/card glyphs currently use Unicode marks held in `content/site.ts`;
  migrate to `lucide-react` when richer visuals are warranted — keep them in
  content, not hardcoded in JSX.

## Brand facts (verification-relevant)

| Field    | Value                                                                                |
| -------- | ------------------------------------------------------------------------------------ |
| Name     | Rapid Tech Plus                                                                      |
| Tagline  | Modern software products, web platforms, and digital systems for growing businesses. |
| Email    | hello@rapidtechplus.com                                                              |
| Support  | support@rapidtechplus.com                                                            |
| Location | India — serving clients worldwide                                                    |
| Hours    | Monday – Friday, 9:00 – 18:00 IST                                                    |
| URL      | https://rapidtechplus.github.io                                                      |

Update these in `content/site.ts` only; the whole site follows.
