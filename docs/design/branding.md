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

- Current mark: the letter **"R"** (`logoLetter`) rendered with the brand
  gradient, paired with the wordmark.
- Assets: `public/favicon.svg`, `public/og-image.svg`. Keep the gradient and
  proportions consistent if the mark evolves.

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

- Base palette is **dark, neutral, premium** (deep blue-black backgrounds).
- Brand accent: **cyan `#38d6f0` → blue `#4f8cff`** gradient (`--grad`), used for
  the logo, primary buttons, and clipped headline words. Accents are darkened in
  light mode for AA contrast.

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
