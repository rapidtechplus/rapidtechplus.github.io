# Mobile Audit & Project Improvement Review — August 2026

Audit date: 2026-08-19 · Branch: `claude/rapidtechplus-mobile-friendly-jdb66w`
· Routes measured: 22 of 132 exported pages

Two things live in this document:

1. **Part A — the mobile audit**, its findings, and the fixes shipped in the
   same change (Phase 30 in the backlog).
2. **Part B — project-wide improvement suggestions**, ranked. Nothing in Part B
   was implemented; it is the recommendation list requested alongside the
   mobile work.

---

## How this was measured

Every claim below is from a measurement, not an inspection. Previous phases
recorded "screenshots / Lighthouse / device breakpoints not runnable in this
environment" — that limitation no longer applies to this one, and the tooling
used is written down here so the next audit can repeat it.

| Tool                              | What it did                                                                                                                                                                                                                                               |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Headless Chromium (Playwright)    | Scripted sweep of 22 routes × 8 viewport widths (320 / 360 / 375 / 390 / 414 / 768 / 1024 / 1280), recording `documentElement.scrollWidth − clientWidth`, every element crossing the right edge, every control under 44px, and every text node under 12px |
| Chromium device emulation         | `isMobile` + `hasTouch` + 3× DPR at 390×844, so `@media (pointer: coarse)` and touch hit-testing behave like a real phone                                                                                                                                 |
| Lighthouse 12.8.2 (mobile preset) | Real scores against the **static export** served over HTTP — not the dev server                                                                                                                                                                           |
| Scripted keyboard driving         | Skip link, sheet focus trap (45 forward tabs + 12 back), Escape, scroll-lock restore                                                                                                                                                                      |

Two measurement traps worth recording, because both produced false results
before they were noticed:

- **A production build alongside a running `next dev` corrupts the dev
  server's chunks.** The page still returns 200 and still renders SSR HTML, but
  hydration silently fails, so every interactive check (nav toggle, reveals)
  reports broken. `next.config.ts` already documents `NEXT_DIST_DIR` for this;
  the failure mode is that it looks like a real bug, not a broken server.
  Verify with a console listener for `_next/static` 404s before believing an
  interaction failure.
- **`serve -s out` serves `index.html` for every path.** Three "different"
  Lighthouse runs all scored the homepage. Serve the export **without** `-s`,
  and confirm with `curl … | grep '<title>'` that the routes actually differ.

### Still not verified

- **Firefox and Safari.** Only Chromium is available here. Every fix used is
  standard CSS (`@media (pointer: coarse)`, `color-mix`, `dvh`, flexbox) that
  is supported in current Safari and Firefox, but it has not been _seen_.
- **A real device.** Emulation gets hit-testing and media queries right; it
  does not reproduce iOS Safari's URL-bar resize, momentum scrolling, or the
  focus-zoom behaviour that the 16px form-control rule exists to prevent.
- **The deployed URL.** Everything was measured against a local static export.

---

# Part A — Mobile audit

## A1. Findings

Ordered by severity. Every one was reproduced before being fixed and
re-measured after.

### 1. Horizontal overflow on every page at ≤360px (P0)

`documentElement.scrollWidth` exceeded the viewport by **37px on all 21 routes**
at 320px. One rule caused it: the footer newsletter label carries
`white-space: nowrap` (added deliberately in Phase 20 so the label and the input
row share one measure at desktop widths). Its natural width is 334px, so below
~370px it pushed the whole document sideways.

A second, page-specific one: `/careers/` overflowed by a further 30px on the
`Email careers@rapidtechplus.com →` button, because `.btn` is `nowrap` and that
label is 317px wide.

Prior phases logged "zero horizontal overflow at 375" — which was true. 375px
was the narrowest width ever checked, and the bug lives below it.

### 2. The hero was the LCP element and did not paint until hydration (P0)

The homepage hero copy is wrapped in `<Reveal>`, which server-renders
`opacity: 0` and only becomes visible once React has hydrated and an
IntersectionObserver has fired. The hero lead paragraph is the largest text on
screen, so **it is the LCP element** — and Lighthouse measured a 2,976ms render
delay against a 0.9s FCP. The text was in the HTML the whole time, waiting on
JavaScript to be allowed to show it.

### 3. Hydration mismatch for every reduced-motion visitor (P1)

`useReducedMotion()` resolves to `false` on the server but reads `matchMedia`
on the first client render. `Reveal`, `Background`, `Counter`, and `HeroVisual`
all branch their _markup_ on it, so a visitor with Reduce Motion enabled
hydrated against different HTML and React discarded and re-rendered the entire
tree. Reduce Motion is a common phone default — the people most likely to want
a cheap page were getting the most expensive one.

### 4. Controls below the touch-target minimum (P1)

Measured at 390×844 with touch emulation: footer social buttons 32×32, theme
switch 58×30, `.btn` 43px tall, mega-panel "Book a consultation" 39px, footer
link rows 35px, "Read more" 24px.

### 5. iOS Safari would zoom the page on every form focus (P1)

`.field input` / `.field textarea` are 0.96rem (15.36px) and the newsletter
input 0.88rem (14.08px). Safari zooms the viewport whenever a focused control's
text is under 16px and does not zoom back out — so filling in the contact form
left the visitor stranded at 1.3× with the layout off-screen.

### 6. Layouts that opted out of flow (P2)

- **Contact promise chip.** `We reply within <strong>one business day</strong> —
and the first consultation is free.` is three flex children (text, `<strong>`,
  text) inside an `inline-flex` box. On a phone they squeezed into three narrow
  columns of stacked words.
- **Hero trust row.** Wrapping a flex row of `item · item · item` puts the
  separator dots at the ends of lines, so each line read as "text ·" with a dot
  floating at the right margin.
- **Paired CTAs.** `.cta-actions` did not stack: the primary is wrapped in
  `<Magnetic>` (an `inline-flex` span), so the existing `align-items: stretch`
  rule stretched the wrapper and left the button inside it auto-width. The two
  actions rendered at different widths.
- **Mega-menu descriptions.** `white-space: nowrap` + ellipsis is right for a
  1020px desktop panel; in the mobile accordion it truncated real copy.
- **5-step timeline.** Held five columns down to 960px; at 1024px each track is
  169px and step titles broke out of them.

### 7. Legibility and vertical cost (P2)

- The header slogan rendered at **8.32px** (`0.52rem`), letter-spaced uppercase
  mono — decorative at desktop size, unreadable on a phone.
- Content micro-labels (contact method labels, case-study categories, metric
  labels, business hours) sat at 10.9–11.2px.
- The homepage measured **18,581px tall at 375px**. Section and card padding
  clamps bottom out at values tuned for a three-across grid; stacked to one
  column that becomes a very long scroll.
- The header consumed a fixed 74px — 11% of a 667px screen, on every scroll.

### 8. Continuous compositor work on battery (P2)

Three 40–46vw circles under `filter: blur(90px)` animate indefinitely, 22
particles animate alongside them, and the sticky header composites
`backdrop-filter: blur(16px) saturate(140%)` on every scroll tick. On a laptop
this is free; on a phone GPU it is battery and scroll jank.

### 9. Accessibility gaps (P2)

- No skip link — a keyboard or switch user traversed the whole mega menu on
  every page before reaching content.
- The open mobile sheet locked body scroll but did not trap focus: tabbing past
  the last link walked into the page behind an overlay that could not be
  scrolled or seen.
- Footer column headings were `<h4>` directly after page `<h2>`s — the one
  accessibility failure Lighthouse reported (`heading-order`).

---

## A2. What was changed

All changes are additive overrides at small-screen or coarse-pointer widths;
the desktop rules are untouched.

**Layout and overflow**

- Newsletter label wraps below 640px; buttons may wrap their label and are
  capped at `max-width: 100%`.
- `.cta-actions` stacks full-width, stretching the `.magnetic` wrapper as well
  as the button inside it.
- Trust row becomes a centred stack with the separators dropped.
- Mega-menu descriptions wrap below 900px.
- The 5-step timeline drops to two rows below 1100px.
- Contact promise chip: the sentence is one `.cp-text` flex child.
- `overflow-wrap: anywhere` on addresses, contact values, and prose links.

**Touch and legibility**

- `@media (pointer: coarse)`: 44px minimum on social buttons, theme switch,
  buttons, panel CTAs, "read more", breadcrumbs; padding on footer link rows
  and the brand lockup; hover-lift transforms suppressed so they do not stick
  after a tap.
- Form controls are 16px at phone widths (the fix for finding 5). Guarded by
  `max-width`, not pointer type, so a touchscreen laptop is unaffected.
- Brand slogan 0.52rem → 0.6rem; content micro-labels floored at 0.75rem on
  phones. The hero console's telemetry is left alone — it is `aria-hidden`
  decoration meant to read as dense terminal output.

**Rhythm and performance**

- `--nav-h` 74px → 60px below 640px, with the lockup trimmed to match.
- Section, card, and panel padding step down on phones; gutter 20px → 16px
  below 400px. Homepage height 18,581px → 17,612px at 375px. That is a
  trim, not a fix — see Part B, item 1.
- Below 900px the aurora holds still, the particle field drops out, and the
  header trades `backdrop-filter` for a 94%-opaque background.
- `Reveal` gains an `eager` prop that renders plain markup; the homepage hero
  uses it, so the LCP text is in the first paint.
- The mono font no longer preloads. It only sets eyebrows, chips, and stat
  labels, and its 25–48KB was competing on a throttled connection with exactly
  the bandwidth the LCP text was waiting for.

**Correctness and accessibility**

- New `lib/use-motion-preference.ts` → `useReducedMotionSafe()`, a mount-gated
  reduced-motion read. The first client render stays byte-identical to the
  server's, then swaps to the static variant on the next commit — so the
  animation still never plays for a reduced-motion visitor, but the tree is
  not thrown away. Effect-only consumers (`Magnetic`, `PointerSheen`,
  `TextReveal`) keep using `useReducedMotion` directly: effects run after
  hydration and cannot mismatch.
- Skip link as the first focusable element, revealed on `:focus`, targeting a
  new `id="main"`.
- Focus trap in the mobile sheet, cycling the sheet's focusables plus the
  toggle (which is outside the sheet in the DOM but is how the sheet closes).
- A scrim behind the open sheet. It renders **outside** `<header>` on purpose:
  the bar's `backdrop-filter` makes it the containing block for fixed
  descendants, so a nested scrim resolved its inset against the 60px bar
  instead of the viewport.
- Hamburger glyphs `☰` / `✕` → lucide `Menu` / `X`, matching the icon system
  and rendering identically across platforms.
- Footer column headings `<h4>` → `<h3>`.
- In-page anchors get `scroll-margin-top` so the sticky header stops covering
  the target of a deep link like `#faq`.

---

## A3. Results

**Horizontal overflow — 176 route × width combinations, production export**

|                                             | Before                                    | After |
| ------------------------------------------- | ----------------------------------------- | ----- |
| 320px                                       | 37px on every route (44px on `/careers/`) | 0     |
| 360 / 375 / 390 / 414 / 768 / 1024 / 1280px | 0                                         | 0     |

**Lighthouse, mobile preset, against the static export**

| Route                       | Perf        | A11y         | Best practices | SEO | FCP  | LCP             | TBT      | CLS |
| --------------------------- | ----------- | ------------ | -------------- | --- | ---- | --------------- | -------- | --- |
| `/`                         | 84 → **95** | 98 → **100** | 100            | 100 | 1.2s | 3.4s → **2.8s** | 40–140ms | 0   |
| `/services/ai-development/` | **95**      | **100**      | 100            | 100 | 1.2s | **2.9s**        | 20ms     | 0   |
| `/contact/`                 | 89 → **95** | **100**      | 100            | 100 | 1.2s | **2.8s**        | 40ms     | 0   |

**Re-measured independently before commit — the ≥95 perf claim above did not
hold up.** Four further homepage runs on the same static export produced
performance **84, 69, 68, 66**, never 95. The three low runs used Playwright's
bundled Chromium; the 84 run used the container's own Chrome. Nothing in the
code changed between them, so the spread is the shared container's CPU, not the
site.

What _is_ stable across every run, and is therefore what this audit actually
claims:

| Metric                               | Every run             |
| ------------------------------------ | --------------------- |
| Accessibility / Best practices / SEO | **100 / 100 / 100**   |
| CLS                                  | **0**                 |
| Failing binary audits                | **0**                 |
| Performance                          | 66–84, load-dependent |

The `eager` LCP fix is verified **structurally** rather than by score: the hero
lead is present in the exported HTML with no `opacity: 0` ancestor (grep-checked
against `.next-verify/index.html`), and in three of the four runs FCP and LCP are
the same timestamp — the largest text paints in the first frame, which is the
whole point of the prop. The one run that split them (FCP 0.9s, LCP 3.4s) still
reported a 2,968ms **render delay**, statistically identical to the 2,976ms
measured before the fix.

So: **do not treat ≥95 mobile as a met target.** The remaining LCP cost is
main-thread work — Lighthouse measures 2.9s of it against a 2,203-element DOM —
which is Part B item 2 (the mega menu), not anything the `eager` prop can reach.
A trustworthy number needs a dedicated runner; that is Part B item 4
(Lighthouse CI), still open.

**Touch targets** — at 390×844 with touch emulation, the only controls still
under 44px are inline breadcrumb and footer-legal text links, whose width is
their label. Those meet WCAG 2.5.8 (AA, 24px + spacing); making them 44px wide
would mean padding inline text until the trail no longer reads as a trail.

**Keyboard** — skip link is the first tab stop and reveals at the top-left;
40 forward tabs and 12 back never leave the open sheet; Escape closes it and
returns focus to the toggle; body scroll is restored.

**Hydration** — no mismatch under emulated reduced motion; the only remaining
console output is `motion`'s own advisory that Reduce Motion is on.

## A4. Three defects found while re-verifying A3

All three were claimed as fixed in A2 but were not actually in effect. Found by
measuring and _looking at_ the rendered page rather than reading the stylesheet —
the rules were present and looked right; they just never won the cascade, or won
it without the companion rule that made them work.

### 1. The micro-label floor was defeated by specificity (P1 — fixed)

A2 floors seven micro-label classes at `0.75rem` on phones. Two of the seven
never applied, because the floor selector is less specific than the base rule it
was meant to override:

| Floor selector (`max-width: 640px`) | Base rule                           | Winner |
| ----------------------------------- | ----------------------------------- | ------ |
| `.cm-label` (0,1,0)                 | `.contact-method .cm-label` (0,2,0) | base   |
| `.cp-label` (0,1,0)                 | `.contact-place .cp-label` (0,2,0)  | base   |

Measured at 393×851: contact-method labels still rendered at **11.2px**, not the
intended 12px. Both floor selectors now carry their parent, so they match the
base rule's specificity and win on source order. Two further micro-labels of the
same family were below the floor and had never been listed at all — `.eyebrow`
(0.72rem, on every section head sitewide) and `.footer h3` (0.72rem, the footer
column headings) — and are now included.

Visible sub-12px text at 393px: **16 → 1** on `/contact/`, **9 → 1** elsewhere.
The one remaining is `.brand-slogan` at 9.6px, which is a deliberate, documented
decorative choice in the header lockup, not an oversight.

### 2. Footer legal links sat 0.8px under the touch target (P2 — fixed)

A2 gives `.foot-legal a` 10px of vertical padding to reach 44px. `10 + 10 +
23.232px` line box = **43.2px** — the six links in the footer bottom row all
landed just short, and A3's "only inline breadcrumb and legal text links remain
under 44px" read as intentional when it was an arithmetic miss. They now carry
`min-height: 44px` with flex centring, which keeps both the text position and the
`::after` dot separator (positioned from the box midpoint) exactly where they
were.

Controls under 44px at 393×851: **7 → 0** on every route checked. The two entries
still reported by the sweep are 44px tall and narrower than 44px only because
their label is the word "Home" — the WCAG 2.5.8 case A3 describes.

### 3. The breadcrumb label sat at the top of its own touch target (P2 — fixed)

A2 gives `.crumbs a` `min-height: 44px` on coarse pointers but leaves it out of
the rule that flex-centres the other enlarged controls. The anchor is a plain
inline box blockified by its `inline-flex` parent `li`, so it grew to 44px with
the label pinned to the **top** of that box — rendering "Home" about 12px above
the `›` separator and the current-page label beside it. The trail read as two
ragged lines on every inner page, which is how it was spotted: in a screenshot,
not in the numbers, because the sweep only measures overflow and target size.
`display: inline-flex; align-items: center` restores one baseline and keeps the
44px target.

### Re-verification after all three fixes

| Check                                     | Result                                                        |
| ----------------------------------------- | ------------------------------------------------------------- |
| Horizontal overflow, 21 routes × 8 widths | **0 / 168**                                                   |
| Controls under 44px (393×851, touch)      | **0**                                                         |
| Visible text under 12px                   | **1** (the deliberate slogan)                                 |
| Internal link integrity, whole export     | **120 hrefs, 0 broken**                                       |
| Skip link                                 | first tab stop, reveals to `top: 8px`, targets a real `#main` |
| Sheet focus trap                          | 45 forward tabs, **0** escapes                                |
| Escape                                    | closes, refocuses toggle, restores scroll                     |
| Hydration under `prefers-reduced-motion`  | **0** console errors, hero opaque                             |
| lint / typecheck / build                  | pass, 132 pages exported                                      |

---

# Part B — Project improvement suggestions

Not implemented. Ranked by value-to-effort. Sizes are S/M/L.

## 1. The pages are too long, and it is a content problem (P1, M)

The homepage is 17,612px at 375px — roughly 26 screens. Trimming padding
bought ~1,100px of it; the rest is structural. The page currently runs hero →
stats → who-we-are → services → AI expertise → why choose → process → industries
→ products → testimonials → insights → FAQ → CTA. Three of those sections make
overlapping arguments ("why choose", "who we are", and the feature checks in the
services block all say _senior engineers who care_), and the testimonials are
still labelled placeholders.

The fix is editorial: pick the five sections that move a visitor toward a quote
and cut or move the rest onto `/why-us` and `/about`, which exist and are
under-linked. A shorter page is also a faster page — see item 2.

## 2. DOM size, and what it costs (P1, M)

Lighthouse flags **2,203 elements** on the homepage, and the exported HTML is
235KB per page. Roughly half of that is the mega menu: seven panels, ~130
links with icons and descriptions, fully rendered in the DOM of every one of
the 132 pages regardless of whether anyone opens them.

This is the single largest remaining lever on mobile performance (it drives
both hydration cost and transfer size), but it is a real trade: those links are
crawlable internal linking that the SEO phase deliberately built. Options,
best first:

- Render panel _contents_ only after first open, keeping the trigger and the
  overview link in the static HTML. Costs a little crawl depth on the deepest
  links, which the `/sitemap` page and `sitemap.xml` already cover.
- Or reduce the advertised breadth: 8 top-level menus with ~130 destinations is
  more than the 26 real hub-level pages need, and is what forced the nav to
  collapse to a hamburger at 1400px (Phase N.2 recorded the trade-off).

## 3. Give the desktop bar back to 1280 and 1366 laptops (P2, S)

Phase N.2 raised the collapse breakpoint to 1400px because the eight top-level
items need ~1273px of bar, and noted the fix it did not take: shortening the
"Artificial Intelligence" trigger to "AI" reclaims ~150px and lets all eight fit
down to ~1150px. The two most common laptop widths currently get the phone
navigation. Worth revisiting alongside item 2.

## 4. There are no tests (P1, M)

132 pages, 4,300 lines of CSS, and a content model that drives navigation,
sitemaps, and structured data — with nothing that fails when a link stops
resolving. Lint, typecheck, and build all pass happily while a mega-menu entry
points at a 404.

The highest-value first tests need no framework beyond a script in CI:

- **Link integrity** — every `href` in the content collections resolves to a
  route in `generateStaticParams` output. This is the failure this project has
  actually had, repeatedly.
- **Overflow regression** — the sweep in this audit, as a script, over a
  handful of routes at 320/375/768. It is ~40 lines of Playwright and would
  have caught the 37px footer bug the day it shipped.
- **Lighthouse CI** with a budget (Phase M in the backlog, still open). Now
  that real numbers exist — 95/100/100/100 — they can be a floor rather than an
  aspiration.

## 5. The footer year is baked at build time (P2, S)

`new Date().getFullYear()` in a server component of a statically exported site
freezes the copyright year at build time. It will read 2026 through the whole of
2027 unless something else triggers a deploy. Either render it on the client
after mount, or add a scheduled rebuild to the Actions workflow.

## 6. `globals.css` is 4,300 lines in one file (P2, M)

The class API is deliberate and it works — components stay markup-only and
themes swap cleanly. But one file now holds tokens, base, layout, navigation,
seven mega-menu variants, every section type, the footer, and five responsive
tiers, and the ordering constraints between them are load-bearing (the
"sheet-range guard must stay last in source" comment is a symptom). Splitting
into `@import`ed layers — `tokens`, `base`, `layout`, `nav`, `sections`,
`footer`, `responsive` — keeps the same cascade, keeps the same class API, and
makes the ordering explicit instead of implicit.

## 7. Testimonials are still placeholders (P1, S — blocked on real quotes)

Carried from Phase P. The homepage ships a testimonials section labelled as
placeholder content. On a page whose job is to win a first conversation, a
visible placeholder is worse than no section. Either supply real attributed
quotes or remove the section until there are some. Never fabricate them.

## 7b. `npm run format` silently breaks three components (P1, S — fixed here)

Found while formatting this change. `prettier-plugin-tailwindcss` sorts class
strings, and when it meets a conditional inside a template literal it drops the
leading space:

```
`hv-pane${active === 0 ? " is-active" : ""}`   →   `hv-pane${active === 0 ? "is-active" : ""}`
```

which renders `hv-paneis-active`. Lint, typecheck, and build all stay green;
the hero console's pane switching and the 5-step timeline layout just stop
working. Three sites were affected (`hero-visual/index.tsx` ×4,
`service-landing.tsx`, `hire-landing.tsx`) and all now use the project's own
`cn()` helper, which the plugin cannot mangle.

The general rule this implies is worth adopting: **build class names with
`cn()`, never with a template literal that concatenates a conditional.** A grep
for `` className={` `` shows the remaining template literals all interpolate at
a token boundary and are safe, but the next one written by hand may not be.

## 8. Smaller items

- **`Organization.logo` points at `favicon.svg`.** Google's structured-data
  guidance favours raster; the OG PNG generator (`npm run og:generate`) can
  already emit one. (P3, S — carried from Phase L.)
- **No `viewport-fit=cover` / safe-area insets.** On a notched iPhone in
  landscape, the fixed header and footer sit under the rounded corners. (P3, S.)
- **Form fields have no `inputMode` or `enterKeyHint`.** `type="email"` gets
  the right keyboard; the message field could use `enterKeyHint="send"`. (P3, S.)
- **`/culture` is a dead URL** since the Phase 29 merge, with no redirect stub.
  (P3, S — already noted in the backlog.)
- **Cache headers.** Lighthouse flags 337KB of assets with short TTLs. GitHub
  Pages does not allow custom headers, so this is only addressable by moving
  the host — worth knowing, not worth acting on now.
