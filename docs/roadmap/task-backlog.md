# Task Backlog

The living work list for the Rapid Tech Plus website. Per [`CLAUDE.md`](../../CLAUDE.md),
check tasks here before implementing, add new tasks before starting them, and
mark tasks done only when the full Definition of Done is met.

Status: `[x]` done · `[ ]` todo · `[~]` in progress

---

## Phase 0 — Planning ✅

- [x] Product requirements (`docs/PRD.md`)
- [x] Architecture (`docs/architecture.md`)
- [x] Project overview (`docs/project/project-overview.md`)
- [x] Project docs: vision, goals, success-metrics (`docs/project/`)
- [x] Architecture docs: coding-standards, deployment (`docs/architecture/`)
- [x] Design docs: ui-guidelines, animation-guidelines, accessibility, branding (`docs/design/`)
- [x] Content docs: sitemap, page-outline, content-strategy, seo-strategy (`docs/content/`)

## Phase 1 — Scaffold ✅

- [x] Next 15 / React 19 / Tailwind v4 / motion / lucide dependencies
- [x] `next.config.ts` static export (unoptimized images, trailing slash)
- [x] TypeScript strict (`tsconfig.json`)
- [x] Tailwind v4 + PostCSS + `app/globals.css` design tokens
- [x] `lib/utils.ts` (cn), `components/ui/button.tsx`
- [x] ESLint (flat config) / Prettier / Husky / lint-staged
- [x] `typecheck` script (`tsc --noEmit`)
- [x] shadcn/ui toolchain (cva, tailwind-merge, Slot) + `components.json`
- [x] Light/dark theme system (next-themes, dark-first) + header toggle

## Phase 2 — Layout & shared UI ✅

- [x] Root `layout.tsx` (fonts, default metadata, JSON-LD)
- [x] `Nav`, `Footer`
- [x] Section primitives: `SectionHead`, `IconCard`, `CtaBanner`, `Reveal`

## Phase 3 — Pages ✅

- [x] Home, About, Services, Products, Contact, Privacy, Terms, 404
- [x] Homepage sections per master plan: Hero, Company intro, Services,
      Products preview, Technologies, Process, Why us, Contact CTA

## Phase 4 — SEO, assets, metadata ✅

- [x] Per-page metadata (title, description, canonical, OG/Twitter)
- [x] Organization JSON-LD
- [x] favicon, OG image, generated `robots.txt` + `sitemap.xml`
- [x] Brand assets in `public/`

## Phase 5 — Deploy ✅ (site) / ⏳ (verify)

- [x] GitHub Actions workflow builds and publishes `out/`
- [x] Remove legacy `.html` files
- [x] Clean static export from `npm run build`
- [ ] Confirm deployed GitHub Pages URL renders (owner action)
- [ ] Validate HTTPS / custom-domain readiness

## Phase 5.5 — Additional pages ✅

- [x] Industries page (`/industries`) + `industries` content
- [x] Technologies page (`/technologies`) + `techGroups` content
- [x] Nav, footer, and sitemap wiring for both
- [x] Homepage FAQ section (`faqs`, native details/summary) + FAQPage JSON-LD

## Phase 6.5 — "Ink & Electric Violet" redesign ✅

Complete, original redesign benchmarked against techalmas.com (analysed, not
copied). New handcrafted design system; recognizably different from both the
reference and the prior build.

- [x] Design review of reference site (IA, hierarchy, motion, content flow)
- [x] New design system in `app/globals.css` — violet→indigo accent + amber
      spark, Sora/Inter type pairing, re-engineered components (stable class API)
- [x] Independent premium light + dark themes (not an inversion)
- [x] System theme detection + smooth theme transitions (next-themes `system`)
- [x] Motion layer `components/background.tsx` — animated grid, drifting aurora,
      floating particles; reduced-motion safe
- [x] Animated counters `components/counter.tsx` (count-up on scroll into view)
- [x] `Sora` display font wired in `app/layout.tsx`
- [x] Recomposed homepage: hero + trust row, animated proof stats, story split,
      capabilities, connected process timeline, industries, why-us, toolkit,
      FAQ, CTA
- [x] `TimelineStep` primitive in `components/sections/pieces.tsx`
- [x] Fixed tablet nav overflow (hamburger now collapses at ≤900px)
- [x] lint + typecheck + static build all green; verified in browser (both themes)

## Phase 7 — Information architecture (mega-menu + footer) ✅

Original IA benchmarked against leading software-company sites (analysed, not
copied). Scalable, data-driven navigation and a comprehensive footer hub.

- [x] `megaMenu` IA model in `content/site.ts` — top-level Services, Products,
      Industries, Technologies, Company, Resources, Contact with grouped columns
- [x] `NavLink`/`MegaColumn`/`MegaItem` types; `soon` flag renders intended
      future items as non-clickable pills (no dead links)
- [x] Mega-menu `Nav` — CSS hover/focus-within panels on desktop, tap-to-expand
      accordions on mobile; keyboard/`aria-expanded` accessible
- [x] "Overview" link per panel points at the real hub page
- [x] Comprehensive 6-column `Footer` (Company, Services, Products,
      Technologies, Resources, Legal) with `soon` support
- [x] Footer bottom bar: copyright, social links (GitHub, Email),
      "Built with Next.js & TypeScript" badge
- [x] Homepage FAQ section anchor (`#faq`) for Resources → FAQs deep link
- [x] Responsive footer grid (7 → 3 → 2 → 1) + mega-menu breakpoints
- [x] lint + typecheck + build green

## Phase 7.5 — Brand alignment (official logo + palette) ✅

Re-keyed the whole system to the official Rapid Tech Plus logo (navy → sky-blue
"R"/rising-arrow with gray tagline "The way to web presence").

- [x] Retuned all design tokens in `app/globals.css` from violet → the brand's
      navy (`#123A6B`) / sky-blue (`#5EA6E0`) / gray (`#8B9096`); both themes
      independently re-tuned (dark canvas now navy-tinted ink)
- [x] Brand SVG mark `public/logo.svg` (R + rising arrow) wired into `Nav` +
      `Footer`; updated `public/favicon.svg` and `public/og-image.svg` to match
- [x] Added `site.slogan` ("The way to web presence") shown under the footer brand
- [x] Updated `theme-color` meta to brand backgrounds
- [x] lint + typecheck + static build all green (14 routes)
- [ ] Optional: drop the original raster at `public/logo.svg`/`.png` for a
      pixel-exact mark (one-line swap; current mark is an on-brand SVG)

## Phase 8 — UI/UX review & refinement ✅

Comprehensive production-quality pass across layout, header, hero, and footer.

- [x] Wider, more spacious layout — `--maxw` 1160→1280, `--maxw-wide` 1320→1480,
      fluid container padding that opens up on large monitors
- [x] Mega-menu fix — opaque panel (was near-transparent `--surface`, hero bled
      through), stronger border/shadow, backdrop blur, refined open/close motion
- [x] Header polish — larger hit areas, clearer active/hover states
- [x] Hero refinement — tighter hierarchy, AI-first framing, focus glow
- [x] Footer redesign — added Solutions column + named products (Planix, Rocket
      Intelligence Engine, WhatsApp Business OS, KidzoRides); 7-column hub, theme
      switcher in the bottom bar; responsive grid retuned
- [x] New pages: `/solutions`, `/cookies` (real Cookie Policy) — no dead links
- [x] Nav + footer wiring for Solutions; Cookie Policy now a real route
- [x] lint + typecheck + build green

## Phase 9 — Mobile-first & responsive hardening ✅

Elevate the mobile navigation and touch experience to match the desktop polish,
per the mobile-first requirements.

- [x] Mobile menu scroll-locking (lock `body` scroll while the sheet is open)
- [x] `Escape` closes the mobile menu; menu closes on route change
- [x] Focus management — focus moves into the sheet on open, returns to the
      toggle on close
- [x] Thumb-friendly 44×44px minimum tap targets (nav toggle, theme toggle,
      mega/nav links, footer social)
- [x] Reduced-motion safe menu transition
- [x] lint + typecheck + build green; verified across breakpoints

## Phase 8.5 — Layout width & container system ✅

Replaced the two-tier container (1280 / 1480) with a proper responsive,
per-section width system so the site feels open and premium on large monitors
without stretching every element.

- [x] Tiered container tokens in `app/globals.css`: `--maxw-content` 1280
      (reading), `--maxw` 1440 (standard, default), `--maxw-wide` 1600,
      `--maxw-xwide` 1760; fluid `--gutter` clamp(20px, 4vw, 72px)
- [x] Composable width modifiers: `.container-content`, `.container-wide`,
      `.container-xwide`, `.container-full` (pair with `.container`)
- [x] Per-section widths — hero/stats/services/process/industries/why-us and
      interior card grids → wide; technologies showcase → xwide; who-we-are
      split, FAQ, contact, CTA → standard; legal/prose → reading width
- [x] Wider footer (`container-wide`) with larger column gaps + breathing room
- [x] Fluid grid gaps (clamp 20→30px) and card padding (clamp 28→40px) so the
      extra width becomes larger cards, not just wider gutters
- [x] Larger hero measure (h1 20ch, lead 66ch) + wider section-head (760px)
- [x] Verified 1440/1920: correct tier widths, zero horizontal overflow;
      lint + typecheck + static build (16 routes) all green

## Phase 10 — Landing-page UI/UX review & redesign ✅

Premium AI-first redesign benchmarked against techalmas.com (analysed, not
copied). One cohesive pass across navigation, mega menus, hero, layout width,
homepage IA, and footer.

- [x] Nav IA restructured — removed top-level Technologies + Resources, added
      **Insights**; final: Services, Solutions, Industries, Products, Company,
      Insights, Contact (Technologies now lives under Company)
- [x] Nav hover/active redesigned — removed background fill, added a subtle
      center-growing underline indicator; keyboard focus-visible ring kept
- [x] Icon mega menus — `NavLink.icon` added; each item renders icon + title +
      description. Services uses a 5-column tech-stack taxonomy (Frontend,
      Backend, Mobile, AI, Cloud & DevOps); Industries expanded to 10 sectors;
      panel width scales with column count (`mega-cols-3/4/5`), wide panels
      right-anchored to avoid viewport overflow
- [x] Primary CTA renamed **Get in touch → Get A Quote →** (nav + hero + CTA
      banner); premium gradient, strong contrast both themes
- [x] Hero redesigned — two-column split with an animated **neural-network
      visual** (`components/hero-visual.tsx`, SVG + CSS, reduced-motion safe)
- [x] Wider layout — container tokens bumped (content 1320, base 1520, wide
      1680, xwide 1860; gutter max 80px)
- [x] Homepage sections added — Why Choose, AI Expertise, Featured Products,
      Testimonials (clearly-labelled placeholders), Insights preview
- [x] Footer reorganized — Industries + Insights columns replace Technologies +
      Resources; added LinkedIn + X socials
- [x] New `/blog` (Insights) index page + metadata; added to `sitemap.ts`
      (also backfilled missing `/solutions`, `/cookies`)
- [x] lint + typecheck + static build (17 routes) all green
- [x] Verified in browser: nav/mega menus, hero visual (19 nodes), 0 horizontal
      overflow at 1280 + 375, footer columns/socials, mobile hamburger. Screen-
      shot capture timed out (continuous background animation keeps the
      compositor busy) — verification done via DOM/text tools instead

## Phase 11 — Master–detail mega navigation ✅

Redesigned the mega menu from an all-columns-at-once dropdown into a premium,
hierarchical master–detail navigation. UX pattern benchmarked against
technource.com (interaction model only — no visual/branding/wording/layout
copied); original Rapid Tech Plus design and copy throughout.

- [x] Two-panel desktop layout — left category rail (~26%) + right service-card
      detail (~74%); hovering/focusing a category swaps the right panel with a
      subtle fade+slide (reduced-motion safe). No nested dropdowns.
- [x] Reused existing `megaMenu` data model unchanged (each `column` = a
      category, its `links` = services) — no content-model churn
- [x] Extracted `MegaMenuItem` client component holding per-menu active-category
      state (defaults to first category, resets on mouse-leave)
- [x] Service cards — icon + title + one-line description + hover arrow; `soon`
      pill preserved; whole card is the hit target
- [x] Panel footer strip — "Explore all {section}" overview link + subtle
      "Book a consultation" CTA
- [x] Uniform panel width (retired the `mega-cols-3/4/5` width-scaling hack);
      right-anchored the two right-most menus to avoid viewport overflow
- [x] Mobile — rail hidden; categories become stacked, labelled accordion
      sections (all services visible, touch-friendly, no hover dependency)
- [x] Accessibility — category buttons are focusable and update the panel on
      focus; Escape closes; `aria-expanded`; visible focus; reduced motion
- [x] lint + typecheck + static build (17 routes) all green; verified in browser
      at 1440px — panel 780px (26% rail / 74% detail), category hover swaps the
      detail panel (e.g. AI Development → 5 cards), last-two menus right-anchored,
      no nav-induced overflow, zero console errors; mobile accordion rules
      (rail hidden, category heads shown, single-column cards ≤1024px) confirmed

## Phase 12 — Header/nav/branding refinement (round 2) ✅

Second polish pass toward AI-first premium-SaaS feel (Vercel/Stripe/Linear).

- [x] Primary CTA redesigned — smaller, refined blue gradient, glow, hover lift + animated arrow (`.btn-arrow`); elegant, not oversized; both themes
- [x] Header + footer share one container width (`container-wide`, 1680) — top-
      to-bottom alignment, less wasted side spacing on large screens
- [x] Mega rail widened (250px, `white-space: nowrap`) — category labels like
      "Frontend Development" no longer wrap; panel width retuned
- [x] New **Hire Expert** mega menu (AI Engineers first, then Frontend, Backend,
      Mobile, DevOps, UI/UX, QA, Dedicated Teams) — team-augmentation IA
- [x] Typography pass — tightened modular scale, heading hierarchy, paragraph
      readability, consistent weights/tracking
- [x] Brand lockup — slogan "The Way to Web Presence" under the wordmark in the
      header (both themes, no added header height)
- [x] AI-first ordering — Services now leads with AI Development
- [x] Industries converted to a single flat mega menu (10 industries, icon +
      name + one-line desc, no second-level rail)
- [x] Header polish — alignment, spacing, hover/focus, radius, shadow, blur
- [x] lint + typecheck + static build (17 routes) green; verified in browser —
      nav order Services→Hire Expert→Solutions→Industries→Products→Company→
      Insights→Contact; Services leads with AI Development; Hire Expert leads
      with AI Engineers (8 categories); Industries flat (10 cards); rail 250px
      with single-line labels (no wrap); CTA 144×34 (down from taller); brand
      slogan legible both themes; nav-h still 74px; header + footer both 1680;
      zero console errors; mobile (390px) hamburger + single-column, no overflow

## Phase 13 — Header layout, footer contact hub & new hero motif ✅

Owner-requested round: recenter the primary nav, relocate the theme switcher,
rebuild the footer as a full-width contact hub, and replace the hero animation.

- [x] Header — removed the theme toggle from the header; primary nav links now
      sit centered between the logo (left) and the **Get A Quote** CTA (right)
- [x] Theme switcher now lives only in the footer bottom bar (with a label)
- [x] Footer rebuilt full-width — brand + newsletter masthead, link columns,
      a Sales / HR / Location contact aside, social row + theme switch (layout
      benchmarked against the reference screenshot, original design & content)
- [x] `NewsletterForm` client component — static-safe, opens a prefilled mailto
      (no backend); `site.contact` added for sales/HR/phone/address details
- [x] New hero AI motif in `components/hero-visual.tsx` — animated neural core
      with rotating orbital rings, satellites, radiating signal spokes and a
      pulsing core; reduced-motion safe and deterministic (no hydration drift)
- [x] lint + typecheck + static build (17 routes) all green; verified in the
      browser — theme toggle gone from the header; nav links centered (center at
      the midpoint between logo-right and CTA-right); footer full-width with 3
      contact blocks, newsletter, and the theme switch (labelled "Theme");
      hero shows 3 spinning orbital rings + pulsing core; zero horizontal
      overflow at 399px and 1440px (right-anchored Products panel too, since
      centering shifted it into the right half)

## Phase 14 — Nav cleanup & footer redesign (round 3) ✅

Owner-requested round: simplify the nav and give the footer a distinct,
premium identity.

- [x] Removed the top-level **Contact** nav item (the **Get A Quote** CTA
      already covers it)
- [x] Renamed **Insights** → **Blogs** and made it a single-level plain link
      (no mega panel); footer "Insights" column also renamed to "Blogs"
- [x] Footer given a distinct, theme-independent deep-navy ink palette
      (`--footer-*` tokens) with a top accent seam — reads as its own band in
      both light and dark
- [x] Footer brand now uses the header lockup (logo + wordmark + "The Way to
      Web Presence" slogan stacked beneath)
- [x] Social row switched from text labels to inline SVG brand icons
      (GitHub, LinkedIn, X, Email) as square icon buttons with `aria-label`s
- [x] Theme toggle rebuilt as a labelled sliding **switch** (`role="switch"`,
      sun/moon track) beside the "Theme" label
- [x] Removed the "Built with Next.js & TypeScript" badge
- [x] Reduced border-radius throughout the footer (news row + social 16px → 8px)
- [x] lint + typecheck + static build (17 routes) all green; verified in the
      browser — nav has no Contact, Blogs is a single link; footer bg is the
      navy gradient with muted text, 4 SVG social icons, 8px radii, and the
      theme switch flips light/dark while the footer stays dark in both

## Phase 6 — Future Expansion (not v1)

- [ ] Product detail pages (`generateStaticParams` from `content/`)
- [ ] Careers page
- [ ] Documentation section
- [~] Blog / insights — static `/blog` index shipped (Phase 10); per-post
  routes still to come
- [ ] Case studies
- [ ] Open source page
- [ ] Press kit
- [~] Testimonials / trust section — homepage placeholders shipped (Phase 10);
  swap in real, attributed client quotes when available
- [ ] `config/` for shared constants (extract site config if it grows)
- [ ] Lighthouse CI to guard ≥95 Performance/A11y/SEO/Best-Practices

---

## Rules

- Only work on tasks whose dependencies are complete.
- One logical group of related tasks per change.
- Run lint + typecheck + build before marking done.
- Keep this file current after each batch.
