# UI Guidelines

Practical rules for building screens. The token reference is
[`design-system.md`](./design-system.md); this covers how to _apply_ it.

Aesthetic target: premium, minimal, dark-first SaaS (Vercel · Linear · Stripe).
Never let the UI read as a generic agency template.

---

## Layout

- **Container:** `max-width: 1120px` (`--maxw`), `24px` side padding. Content
  never touches the viewport edge.
- **Section rhythm:** `padding: clamp(64px, 9vw, 120px) 0`. Adjacent
  same-purpose sections drop `padding-top` to avoid double gaps.
- **Generous whitespace** is the default — when unsure, add space, not elements.
- **Grids:** `20px` gap; 3–4 columns at desktop, collapsing per the responsive
  rules below.

## Section anatomy

The standard pattern is **Eyebrow → Heading → Lead**, centered, `max-width:
680px`, with `clamp(40px, 6vw, 64px)` bottom margin before content. Use the
`SectionHead` primitive rather than hand-rolling it.

## Typography in practice

- One `h1` per page. Use the heading scale from the design system — don't set
  ad-hoc font sizes.
- Constrain measure: hero heading `~15ch`, lead `~60ch`, prose `780px`.
- Gradient-clip (`.grad-text`) only accent words in a headline, never whole
  paragraphs.

## Color usage

- Reference tokens (`var(--accent)`), never raw hex.
- Accent (cyan/blue) is for eyebrows, icons, focus, and gradient CTAs — use it
  sparingly so it stays meaningful.
- Elevation is communicated with `--bg-elev` layers + hairline borders, not heavy
  shadows.

## Components

- **Buttons** — pill-shaped via the `Button`/`ButtonLink` cva API. `primary`
  (gradient fill) for the single most important action per view; `ghost` for
  secondary. Never place two primaries side by side.
- **Cards** (`.card`) — elevated surface, hairline border, `radius-lg`, lift on
  hover. Icon tile (`.ico`) uses `accent-soft` background.
- **Panels** (`.panel`) — grouped content (feature lists, the contact form).
- **Chips** (`.chip`) — the tech-stack tags.
- **CTA banner** (`.cta-banner`) — bordered block with a radial accent glow;
  closes most pages.

## Do / Don't

**Do:** large type, soft shadows, rounded corners, subtle gradients, tasteful
motion, clear hierarchy.
**Don't:** bright flashy colors, dense paragraphs, cluttered grids, decorative
noise, or animation that competes for attention.

## Responsive rules

| Breakpoint | Behavior                                                                  |
| ---------- | ------------------------------------------------------------------------- |
| `≤ 900px`  | 3/4-col grids → 2-col; stats → 2-col; split & contact stack; footer 2-col |
| `≤ 640px`  | Base font 16px; grids → 1-col; nav → toggle menu; hero actions stack      |

Check every new component at desktop, ≤900px, and ≤640px, in **both themes**.

## Accessibility (see [`accessibility.md`](./accessibility.md))

Semantic HTML, AA contrast, visible focus, `aria-label` on icon-only controls,
`alt` on imagery, `aria-hidden` on decorative glyphs.
