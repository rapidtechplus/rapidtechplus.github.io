# Design System

The visual language of the Rapid Tech Plus site. Source of truth for the tokens
is [`app/globals.css`](../../app/globals.css); this document explains intent and
usage. Aesthetic target: premium, minimal, dark-first SaaS (Vercel / Linear /
Stripe).

---

## Theming

Two themes, driven by CSS custom properties. Dark is the default; `.light` on
`<html>` (set by `next-themes`) overrides the palette. Components reference
tokens (`var(--bg)`), never raw hex, so both themes stay consistent.

## Color tokens

| Token             | Dark        | Light     | Use                                 |
| ----------------- | ----------- | --------- | ----------------------------------- |
| `--bg`            | `#0a0e16`   | `#f7f9fc` | Page background                     |
| `--bg-elev`       | `#10151f`   | `#ffffff` | Cards, panels, footer, alt sections |
| `--bg-elev-2`     | `#151b28`   | `#eef2f8` | Higher elevation                    |
| `--surface`       | `white 2%`  | `ink 2%`  | Subtle fills (ghost btn, chips)     |
| `--border`        | `white 8%`  | `ink 10%` | Hairlines                           |
| `--border-strong` | `white 14%` | `ink 16%` | Emphasized borders                  |
| `--text`          | `#eef2f8`   | `#0c1320` | Headings, primary text              |
| `--text-muted`    | `#9aa6b8`   | `#47566b` | Body copy                           |
| `--text-dim`      | `#6b7688`   | `#6b7688` | Labels, captions                    |
| `--accent`        | `#38d6f0`   | `#0a95b0` | Cyan — eyebrows, icons, focus       |
| `--accent-2`      | `#4f8cff`   | `#2f6bff` | Blue — gradient partner             |
| `--accent-soft`   | cyan 12%    | cyan 10%  | Icon tile backgrounds               |

**Gradients**

- `--grad` `linear-gradient(135deg, #38d6f0 → #4f8cff)` — primary buttons, logo.
- `--grad-text` — clipped onto headline spans (`.grad-text`); darker in light mode
  for contrast.

Accent colors are darkened in light mode to keep text/icon contrast ≥ WCAG AA.

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
  - `primary` — `--grad` fill, dark text (`--on-accent`), lifts `-2px` on hover.
  - `ghost` — `--surface` fill, strong border, accent border on hover.
- **Cards** (`.card`): `--bg-elev`, `1px` border, `radius-lg`, `28px` pad; hover lifts
  `-4px` + `shadow-md`. Icon tile `.ico` = `46px`, `accent-soft` bg, accent glyph.
- **Panel** (`.panel`): like a card but for grouped content (feature lists, forms).
- **Stats** (`.stat .num`): gradient-clipped numerals, `800` weight.
- **Chips** (`.chip`): pill tags for the tech list; accent border on hover.
- **CTA banner** (`.cta-banner`): bordered block with a radial accent glow.
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
