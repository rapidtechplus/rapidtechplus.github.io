# Accessibility

Target: **WCAG 2.1 AA** in both light and dark themes. Accessibility is built in,
not bolted on — every task is accountable to this document.

---

## Color & contrast

- Maintain **AA contrast** (4.5:1 body text, 3:1 large text / UI) in both themes.
  Accent colors are pre-tuned and darkened in light mode for this reason — don't
  introduce raw colors that break it.
- **`--accent` is a foreground color, not a button background.** It is tuned to
  be legible *on* the canvas, which in dark makes it light (`#8a8fff`) — white
  text on it measures **2.82:1** and fails AA. (Light theme's `#4f46e5` happens
  to pass at 6.29:1, so a dark-only failure is easy to ship unnoticed.) For any
  filled control carrying text, use the primary button's fixed gradient
  (`linear-gradient(180deg, #6366f1, #4f46e5)`) with `var(--on-accent)`, which
  holds up in both themes. `background: var(--accent); color: #fff` has caused
  this bug twice — see Phase Q in the task backlog.
- Accent as a *background* is fine for decorative, text-free elements (rules,
  dots, indicator bars) and for tinted surfaces via `--accent-soft`.
- Never convey information by color alone; pair with text, icon, or shape.

## Semantic structure

- Use real semantic elements: `header`, `nav`, `main`, `section`, `footer`,
  headings in order (one `h1` per page, no skipped levels).
- Landmarks let assistive tech navigate — don't replace them with `div`s.

## Keyboard

- Everything interactive is reachable and operable by keyboard in a logical tab
  order.
- **Visible focus** on every interactive element. Inputs switch their border to
  `--accent` on focus — keep an equivalent, clearly visible indicator on any new
  control. Never remove focus outlines without a replacement.
- The mobile nav toggle and menu are keyboard-operable and expose state.

## Images & icons

- All meaningful imagery has descriptive `alt`.
- Decorative glyphs (`◆ ▲ ● ⬡ ⇄ ↻ ⚙`) are `aria-hidden`.
- Icon-only controls (theme toggle, nav toggle) carry an `aria-label`.

## Motion

- Honor `prefers-reduced-motion`: `Reveal` renders statically, smooth-scroll is
  disabled. See [`animation-guidelines.md`](./animation-guidelines.md).

## Forms (contact)

- Every field has an associated `<label>`.
- Errors/instructions are conveyed in text, not color alone.
- The backend-free contact form uses a native `mailto` flow — keep it fully
  keyboard-operable.

## Testing checklist

- [ ] Tab through the page — order is logical, focus always visible.
- [ ] Run Lighthouse / axe — zero critical issues (target a11y ≥ 95).
- [ ] Check contrast in **both** themes.
- [ ] Verify with reduced motion enabled.
- [ ] Confirm headings form a sensible outline.
