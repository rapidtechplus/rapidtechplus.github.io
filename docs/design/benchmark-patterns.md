# Benchmark Patterns (Phase 33)

A curated pattern study used to drive the 2026 redesign. It replaces the
"study 100 sites and combine them" idea: averaging many sites produces a
generic template, so we instead extract a short list of **patterns** and
implement them in our own visual language. Nothing here is copied — no layouts,
copy, illustrations, or brand assets are taken from any reference.

> Method note: compiled from working knowledge of these sites' public pages,
> not from a live crawl in this session. Re-validate against the live sites
> before citing specifics externally.

## Reference set (12)

| Group | Site | What it does well |
| --- | --- | --- |
| IT services | Thoughtworks | Editorial, insight-led; restrained colour; strong case-study proof |
| IT services | EPAM | Clear capability taxonomy; industries × services matrix |
| IT services | Globant | Bold section rhythm; AI positioning front and centre |
| IT services | Accenture | Big-number proof points; concise service hubs |
| IT services | Netguru / STX Next | Mid-size studio tone; hire/team-extension funnels |
| Product | Vercel | Monochrome + one accent; mono labels; dense, precise grids |
| Product | Linear | Editorial type scale; scroll-told feature narrative; restraint |
| Product | Stripe | Asymmetric bento; animated diagrams that explain the product |
| Product | Anthropic | Calm, typographic, generous whitespace; few but deliberate visuals |
| Product | Retool | Developer-credible proof (stack, integrations marquee) |
| Product | Supabase | Dark-first craft; code/terminal visuals as hero |
| Product | Clerk / Resend | Component-level polish; tasteful micro-interactions |

## Patterns adopted

| # | Pattern | Where | Status |
| --- | --- | --- | --- |
| 1 | Editorial type scale, left-aligned section heads | Global | ✅ Phase 32 |
| 2 | Short top nav (≤5) with rich mega panels | Header | ✅ Phase 33a |
| 3 | Stack/integration marquee under the hero | Home | ✅ Phase 33b |
| 4 | Asymmetric bento for capabilities, one flagship tile | Home | ✅ Phase 33b |
| 5 | Scroll-told process with a progress rail | Home | ✅ Phase 33b |
| 6 | Sticky in-page section nav on long detail pages | Service pages | Phase 34 |
| 7 | Guided assistant answering from site content | Service pages | Phase 34 |
| 8 | Animated, explanatory diagrams (not decoration) | Service pages | Phase 34 |
| 9 | Proof next to the claim (case study + metrics inline) | Detail pages | Phase 34/35 |
| 10 | Oversized footer wordmark, theme-aware footer | Footer | ✅ Phase 32 |

## Patterns rejected

- **Client-logo wall** — we have no client logos we may display; a fake wall
  would be dishonest. The stack marquee fills the slot truthfully.
- **Autoplay video hero** — heavy on LCP and the ≥95 Lighthouse target.
- **Animate everything** — motion is reserved for one signature element per
  section and always respects `prefers-reduced-motion`.
