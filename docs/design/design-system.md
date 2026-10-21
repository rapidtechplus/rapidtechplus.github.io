# Design System

The visual language of the Rapid Tech Plus site. Source of truth for the tokens
is [`app/globals.css`](../../app/globals.css); this document explains intent and
usage. Aesthetic target: premium, credible IT-services company — a dark navy hero over
clean light sections (Stripe / Vercel / Linear), keyed to the logo's own colours.

---

## Theming

Two themes, driven by CSS custom properties and keyed to the official logo
(Phase 39). **Light is the designed default** — the brand composition is a
dark navy hero over clean, spacious light sections — and dark is an
independently tuned theme (navy ink, sky accent), not an inversion.
**For now the site ships light-only** (owner decision): `ThemeProvider` passes
`forcedTheme="light"`, so `<html>` always carries `.light` and no stored or
system preference is read; the footer theme switch is removed from the markup.
The dark token set and `components/theme-toggle.tsx` stay in the codebase —
re-enable dark by dropping `forcedTheme` and restoring the switch.

`.surface-dark` re-declares the whole dark token set on one element. The home
hero, every marketing `PageHero` (`tone="dark"`, the default), the CTA banner
and the footer carry it, so they are navy bands in both themes and every child
— buttons, chips, cards, fields — adapts through the same tokens with no extra
CSS. Legal/prose pages pass `tone="light"` to keep a reading-first header.

Components reference tokens (`var(--bg)`), never raw hex. The only literals
outside the token block are `#000` inside mask gradients.

## Brand palette (sampled from the logo)

| Token                | Value     | In the logo                           |
| -------------------- | --------- | ------------------------------------- |
| `--brand-navy`       | `#183860` | "R" body, "RAPID TECH" wordmark       |
| `--brand-blue`       | `#3a6fa8` | the navy → sky ramp's mid-tone        |
| `--brand-sky`        | `#5890d0` | arrow tip, "PLUS"                     |
| `--brand-sky-light`  | `#8ab8ea` | tint used for dark-theme text accents |
| `--brand-steel`      | `#888e92` | grey leg, "THE WAY TO WEB PRESENCE"   |
| `--brand-navy-deep`  | `#12294a` | —                                     |
| `--brand-navy-ink`   | `#0a1322` | the navy taken to near-black (dark canvas) |

`--grad` is the R's own ramp: `135deg, navy → blue 55% → sky`.

## Color tokens

| Token             | Light (default) | Dark / `.surface-dark` | Use                              |
| ----------------- | --------------- | ---------------------- | -------------------------------- |
| `--bg`            | `#f6f8fb`       | `#0a1322`              | Page / band background           |
| `--bg-elev`       | `#ffffff`       | `#101c30`              | Cards, panels, alt sections      |
| `--bg-elev-2`     | `#edf1f7`       | `#16253e`              | Higher elevation                 |
| `--surface`       | navy 2.4%       | white 3%               | Subtle fills (ghost btn, chips)  |
| `--border`        | navy 10%        | white 9%               | Hairlines                        |
| `--border-strong` | navy 17%        | white 15%              | Emphasised borders               |
| `--text`          | `#0f1f35`       | `#e8eef6`              | Headings, primary text           |
| `--text-muted`    | `#495a70`       | `#a9b6c8`              | Body copy (7.1 / 9.0 :1)         |
| `--text-dim`      | `#5f7089`       | `#8d9bb0`              | Labels, captions (5.0 / 6.6 :1)  |
| `--accent`        | `#2b66a8`       | `#7fb0e6`              | Eyebrow dots, icons, links, focus |
| `--accent-2`      | navy            | sky                    | Gradient partner                 |
| `--accent-soft`   | accent 9%       | accent 14%             | Icon tiles, hover glows          |
| `--btn-bg`        | navy ramp       | sky ramp               | Primary action fill              |
| `--on-accent`     | `#ffffff`       | `#0a1322`              | Label on `--btn-bg` (≥ 8 / 5.3 :1) |
| `--on-brand`      | `#ffffff`       | same                   | Label on `--grad` itself         |
| `--logo-plate`    | `#ffffff`       | same                   | Tile under the logo on dark      |

The raw sky `#5890d0` measures 3.3:1 on white, so in light it carries only
large type, gradients and non-text accents; text uses the darkened `#2b66a8`.
In dark the primary button is the sky with a navy-ink label — the one place the
raw brand sky carries text.

**Gradients**

- `--grad` `linear-gradient(135deg, #183860 → #3a6fa8 → #5890d0)` — the logo
  ramp; icon tiles, decorative seams.
- `--grad-text` — clipped onto headline spans (`.grad-text`); navy-led in light,
  sky-led in dark.
- `--btn-bg` / `--btn-bg-hover` / `--btn-bg-active` — vertical ramps for
  primary actions, tuned per theme.

The footer palette (`--footer-*`) is a single dark set — the footer is a navy
band in both themes.

---

## Typography

- **Family:** Inter (`next/font/google`, `--font-inter`), system fallback.
- **Scale** (fluid via `clamp`):

| Element | Size                                                 |
| ------- | ---------------------------------------------------- |
| `h1`    | `clamp(2.4rem, 5vw, 3.6rem)`                         |
| `h2`    | `clamp(1.8rem, 3.5vw, 2.6rem)`                       |
| `h3`    | `1.25rem`                                            |
| Body    | `17px` (16px < 640px), line-height `1.6`             |
| Lead    | `1.2rem`, muted                                      |
| Eyebrow | `0.8rem`, uppercase, `0.14em` tracking, accent color |

- Headings: weight 700, letter-spacing `-0.02em`, tight line-height `1.15`.
- Constrain measure for readability: hero `~15ch` heading / `60ch` lead; prose `780px`.

---

## Spacing & layout

- Container: `max-width: 1120px` (`--maxw`), `24px` side padding.
- Section rhythm: `padding: clamp(64px, 9vw, 120px) 0`. Adjacent same-purpose
  sections use `padding-top: 0` to avoid double gaps.
- Section head: centered, `max-width: 680px`, bottom margin `clamp(40px, 6vw, 64px)`.
- Card/grid gap: `20px`.
- Nav height: `68px` (`--nav-h`).

## Radius & elevation

- `--radius: 14px` (inputs, small), `--radius-lg: 22px` (cards, panels), `999px` (pills).
- Shadows `--shadow-sm/md/lg` — soft, low-opacity; lighter in light theme. Reserve
  `--shadow-md` for hover states, `--shadow-lg` for the mobile menu.

---

## Components

- **Buttons** (`.btn`): pill (`999px`), weight 600, `13px 24px`. Variants via the
  `Button`/`ButtonLink` cva API:
  - `primary` — `--btn-bg` fill with `--on-accent` label (navy + white in
    light, sky + navy-ink in dark; inside a `.surface-dark` band it is always
    the sky), lifts `-1px` on hover.
  - `ghost` — `--surface` fill, strong border, accent border on hover.
- **Cards** (`.card`): `--bg-elev`, `1px` border, `radius-lg`, `28px` pad; hover lifts
  `-4px` + `shadow-md`. Icon tile `.ico` = `46px`, `accent-soft` bg, accent glyph.
- **Panel** (`.panel`): like a card but for grouped content (feature lists, forms).
- **Stats** (`.stat .num`): gradient-clipped numerals, `800` weight.
- **Chips** (`.chip`): pill tags for the tech list; accent border on hover.
- **CTA banner** (`.cta-banner`): a `.surface-dark` navy block with a radial
  sky glow and a travelling accent seam — dark in both themes.
- **Prose** (`.prose`): legal pages — `780px` measure, spaced headings, accent links.
- **Eyebrow → Heading → Lead** is the standard section-head pattern.

---

## Icons

- **UI icons:** [`lucide-react`](https://lucide.dev) (e.g. theme toggle Sun/Moon),
  `~18px`, `currentColor`.
- **Decorative glyphs:** the section/card icons currently use Unicode marks
  (`◆ ▲ ● ⬡ ⇄ ↻ ⚙`) held in `content/site.ts`. When richer visuals are needed,
  migrate these to lucide icons — keep them in content, not hardcoded in JSX.

---

## Motion

- Subtle only. Scroll reveals via the `Reveal` wrapper (motion): fade + `22px` rise,
  `0.6s ease-out`, **once**.
- Hover transitions `0.15–0.2s`. Buttons/cards translate on hover.
- **Respect `prefers-reduced-motion`:** `Reveal` renders statically and smooth-scroll
  is disabled. Never ship motion that ignores this.
- Theme switches use `disableTransitionOnChange` (no color-fade flash).

---

## Responsive breakpoints

Mobile-first; two max-width breakpoints in `globals.css`:

| Breakpoint | Behavior                                                                              |
| ---------- | ------------------------------------------------------------------------------------- |
| `≤ 900px`  | 3/4-col grids → 2-col; stats → 2-col; split & contact stack; footer → 2-col           |
| `≤ 640px`  | Base font 16px; all grids → 1-col; nav collapses to a toggle menu; hero actions stack |

Every new component must be checked at desktop, tablet (≤900px), and mobile (≤640px).

---

## Accessibility baseline

- Maintain AA contrast in both themes (accents pre-tuned for this).
- Semantic HTML; `aria-label` on icon-only controls (nav toggle, theme toggle).
- Visible focus: inputs switch border to `--accent` on focus — keep an equivalent
  focus indicator on any new interactive element.
- All imagery needs `alt`; decorative glyphs are `aria-hidden`.
