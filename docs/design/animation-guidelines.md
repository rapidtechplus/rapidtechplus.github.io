# Animation Guidelines

Motion should enhance the experience without becoming distracting. Subtle,
purposeful, and performant — always. The motion section of
[`design-system.md`](./design-system.md) is the token-level reference.

---

## Principles

- **Subtle over showy.** If an animation draws attention to itself rather than the
  content, remove it.
- **Purposeful.** Motion should clarify hierarchy or state (something appeared,
  something is interactive) — not decorate for its own sake.
- **Fast.** Interaction feedback is `0.15–0.2s`; entrances stay under `~0.6s`.
- **Performant.** Animate only `transform` and `opacity` (GPU-friendly). Avoid
  animating layout, `width/height`, `top/left`, or box-shadow on scroll.

## Library

Use **motion** (Framer Motion successor). Wrap scroll entrances in the shared
`Reveal` component rather than re-implementing intersection logic.

## Patterns in use

| Pattern           | Spec                                                   |
| ----------------- | ------------------------------------------------------ |
| Scroll reveal     | fade + `22px` rise, `0.6s ease-out`, fires **once**    |
| Button/card hover | translate `-2px`/`-4px`, `0.15–0.2s`, adds `shadow-md` |
| Theme switch      | `disableTransitionOnChange` — no color-fade flash      |

## Candidate patterns (add tastefully as sections grow)

Hero background / gradient movement, staggered card reveals, number counters,
subtle parallax on decorative elements, smooth in-page anchor scrolling. Each
must stay subtle and reduced-motion-safe.

## Reduced motion (non-negotiable)

Respect `prefers-reduced-motion: reduce`:

- `Reveal` renders its children **statically** (no transform, full opacity).
- Smooth-scroll is disabled.
- Any new animated component must degrade to a static, fully-visible state — never
  ship motion that ignores this setting.

## Checklist for any new animation

- [ ] Animates only `transform` / `opacity`.
- [ ] Under ~0.6s; interaction feedback under 0.2s.
- [ ] Fully functional and visible with reduced motion on.
- [ ] No layout shift or jank on entry.
- [ ] Doesn't loop indefinitely in a way that distracts from content.
