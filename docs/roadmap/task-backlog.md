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
      detail panel (e.g. Artificial Intelligence → 5 cards), last-two menus right-anchored,
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
- [x] AI-first ordering — Services now leads with Artificial Intelligence
- [x] Industries converted to a single flat mega menu (10 industries, icon +
      name + one-line desc, no second-level rail)
- [x] Header polish — alignment, spacing, hover/focus, radius, shadow, blur
- [x] lint + typecheck + static build (17 routes) green; verified in browser —
      nav order Services→Hire Expert→Solutions→Industries→Products→Company→
      Insights→Contact; Services leads with Artificial Intelligence; Hire Expert leads
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

## Phase 11 — Nav, footer, homepage & CTA refresh

- [x] Brand slogan "The Way to Web Presence" made clearly visible — recoloured
      from `--text-dim` to the brand accent in the header, and to `--footer-accent`
      in the footer (bolder weight, wider tracking)
- [x] Footer columns reduced to Company, Services, Industries, **Top Trending
      Insights** (+ Legal), replacing the old Solutions/Products/Blogs columns
- [x] Header nav: removed **Products**, added **Case Studies** mega-menu
      (By Industry / By Capability / Outcomes) — every link resolves to the
      real `/case-studies` page
- [x] New `/case-studies` route + `caseStudies` content (6 illustrative studies
      with category, client, summary, and two metrics each); added to sitemap
- [x] Global typography scale tightened for a more balanced look — body 17→16px,
      h1 `4.4→3.6rem` cap, h2/h3, hero lead, and section-head lead all reduced
- [x] Two new homepage sections modelled on techalmas.com: **"Our process for
      tailored IT solutions"** (5-step) and **"Spurring digital growth across
      domains"** (6-domain grid)
- [x] Reusable `CtaActions` (Get A Quote / Hire Us) + `DualCta` panel;
      `CtaBanner` now shows both actions; hero secondary button is now "Hire Us";
      paired CTAs placed on the new homepage sections and the Case Studies page
- [x] lint + typecheck + static build (18 routes) all green; verified in the
      browser — nav shows Case Studies (no Products), footer has the 4 requested
      columns, both slogans render in brand blue, new sections + dual CTAs present
- [ ] Design review still to confirm on real devices: mobile/tablet breakpoints,
      Firefox/Safari, and Lighthouse (not runnable in this environment)

## Phase 15 — Footer legal/sitemap, Home link & vibrant palette

Owner-requested round: surface legal links and a sitemap in the footer, restore
a Home link, and replace the dull palette with a modern, vibrant identity.

- [x] Footer bottom bar now carries **Home + legal links + Sitemap** before the
      theme toggle (`legalLinks` in `content/site.ts`, `.foot-legal` styles);
      removed the redundant "Legal" footer column
- [x] New human-readable **`/sitemap`** page grouping every route
      (`sitemapGroups` in `content/site.ts`); added `/sitemap` to `sitemap.ts`
- [x] Restored a **Home** entry (footer bottom bar + sitemap page)
- [x] Recoloured the design system in `app/globals.css` from the dull navy/sky
      to a vibrant **electric indigo → violet** identity (both themes
      independently re-tuned; stable class API, no component churn)
- [x] lint + typecheck + static build (19 routes incl. `/sitemap`) all green;
      verified in browser — footer bottom bar order is copyright → Home + legal +
      Sitemap → theme toggle; `/sitemap` renders 4 grouped cards; new electric-
      iris accent (`#8b93ff`) on deep-ink canvas (`#08080f`) both themes. Device
      breakpoints / Firefox·Safari / Lighthouse not runnable here.
- [x] Brand assets re-keyed to the new palette — `public/logo.svg`,
      `favicon.svg`, `og-image.svg` now use the `#4f46e5 → #7c3aed → #a855f7`
      gradient (arrow `#ddd6ff`; OG bg/text retuned to the ink canvas); the
      gradient tile self-backgrounds so one mark works in both themes
- [x] Company nav converted to a single-level dropdown (owner request, ever.tech
      screenshot as pattern reference) — new `compact` flag on `MegaItem` +
      `.mega.is-compact` styles (340px, one column, no category rail); merged
      the old "Rapid Tech Plus"/"More" columns into one flat 6-item list;
      verified in browser (no rail, single column, no viewport overflow) and
      lint + typecheck + build (19 routes) green

## Phase 16 — Mega-menu readability tweaks (round 5) ✅

Owner-requested polish on the mega-menu panels.

- [x] `.mega-link-desc` forced to a single non-wrapping line
      (`white-space: nowrap` + ellipsis) so descriptions read as clean menu
      subtitles instead of wrapping
- [x] Widened panels (master–detail 860→1020px, flat 720→800px) and shortened
      the one over-long copy ("…wired into your stack" → "…in your stack") so
      no description is ellipsis-truncated at desktop widths
- [x] Recentred panels under the nav bar — `.nav-item` set to `position: static`
      so panels anchor to the full-width header and center via
      `left: 50%; translateX(-50%)` (retired the right-anchor hack); verified
      in browser all 6 panels stay in-bounds at 1280px (left 123 / right 1143)
      and cap to 94vw at 1040px with zero truncation
- [x] `.mm-foot` given a light `--hairline` top border; overview + CTA text
      sizes reduced (0.86→0.8rem, 0.84→0.78rem) for a lighter footer
- [x] lint + typecheck + build (17 routes) green; screenshots unavailable in
      this environment (browser capture times out) — verified via DOM metrics

## Phase 17 — Full design audit & premium redesign ✅

Owner-requested complete design audit and redesign toward a world-class,
AI-first software-engineering brand (benchmarked against Vercel/Stripe/Linear/
Clerk/Supabase/Resend; techalmas/technource/advancio studied for IA only —
nothing copied). One cohesive pass across the whole system.

- [x] **Icon system overhaul** — replaced ~135 inconsistent dingbat glyphs
      (`◆ ▲ ⬡ ↻ …`) across all content with a real, coherent line-icon set.
      New `components/icon.tsx` registry maps kebab-case names → tree-shaken
      lucide icons (`strokeWidth 1.8`); `content/site.ts` now references icons by
      name (stays serializable). Wired into `IconCard`, nav `ServiceCard`,
      contact/case-studies/feature-check renderers. Unknown names fall back to
      raw text (numeric process markers still render)
- [x] **Type system** — added a third role: **JetBrains Mono** utility face
      (`--font-mono`) for eyebrows, stat/metric labels, chips, badges, trust row,
      breadcrumbs, footer/section labels, and the hero telemetry — a deliberate
      engineering-console voice against Sora display + Inter body
- [x] **Colour system re-tuned** — handcrafted, independent light + dark themes.
      Dark: deep indigo-ink `#0a0a13` canvas, iris `#8a8fff` accent. Light: crisp
      near-white `#fbfbfd` (retired the lavender wash). Added semantic
      **success / warning / error** tokens (+ soft variants), used on the feature
      checks and hero status chrome
- [x] **Component language tightened** — flatter radii (pills → 8–12px on
      buttons/cards/chips/mega), refined solid-gradient primary button (less
      bubbly, real focus ring), quieter ghost button, mono stat/case/post labels
- [x] **Hero signature** — reframed the neural-core visual as a running
      **"rapidcore" console**: mono status bar (traffic-light dots · title ·
      live pulse) above the animation and a telemetry row (agents / uptime /
      p95 / deploys) below; fixed the SVG hydration mismatch by rounding trig
      output to 2dp; reduced-motion safe
- [x] **Landing page IA** — merged the redundant 4-step "process" + 5-step
      "tailored process" + duplicate industries/growth sections into one clean
      5-stage numbered timeline + one Industries grid (removed the unused
      `growthDomains` export and `process` from the homepage)
- [x] **Header** — scroll-aware sticky (`is-scrolled` adds border + shadow past
      8px); `▾` text caret replaced with a lucide `ChevronDown` that tints on
      hover/focus
- [x] **Mega menus** — panels now anchor to the full-width nav bar via
      `position: fixed` (the bar's backdrop-filter is the containing block),
      centered on the viewport, so a 1020px panel never overflows regardless of
      trigger position on a centered nav — retired the fragile `nth-of-type`
      edge-anchoring. Verified centered + zero overflow at 1280/1440/1920
- [x] **Breadcrumbs** — new `components/sections/breadcrumbs.tsx` (mono trail +
      `BreadcrumbList` JSON-LD, `aria-current` on the leaf) added to all 13 inner
      pages' `page-hero`
- [x] **Footer** — expanded to a 5-column hub (Services · Solutions · Industries ·
      Company · Resources) resolving to real routes, plus the existing contact
      aside, newsletter, socials, and legal/theme bottom bar
- [x] **Responsive hardening** — added `minmax(0, …)` track floors to hero/split/
      contact grids and the mobile mega cards; **zero horizontal overflow** now at
      375 / 768 / 1280 / 1440 / 1920
- [x] lint + typecheck + clean static **build (19 routes) all green**; verified in
      browser both themes, focus-visible rings, reduced-motion, mobile sheet
      (scroll-lock + Escape). Screenshots unavailable here (capture times out on
      the continuous compositor) — verified via DOM/computed-style metrics.
      Firefox/Safari + Lighthouse not runnable in this environment

## Phase 18 — Contact page redesign + footer declutter ✅

Owner-requested: rebuild `/contact` as a premium, copy-rich page and move the
location (and full contact) details out of the footer onto it.

- [x] Rebuilt `/contact` — richer hero copy + a "ways to reach us" info column
      (method cards: general/sales, support, careers, phone — each an icon +
      label + value + descriptive line, mailto/tel links) and a dedicated
      "where to find us" location + hours card, beside the message form panel
      (now with its own intro copy)
- [x] Moved location/contact details out of the footer — dropped the
      `footer-contact` aside (Sales / Careers / Location) and removed its now-dead
      CSS + responsive override; footer is link columns + newsletter only, and
      the contact page is the single home for those details
- [x] New `.contact-methods` / `.contact-method` / `.contact-place` /
      `.contact-form-*` styles; `Phone` added to the icon registry;
      `.footer-main` simplified to a single track
- [x] lint + typecheck + clean build (17 routes) green; verified in browser —
      both themes (dark iris / light indigo tokens resolve correctly), method
      links (mailto/tel) correct, footer aside gone, zero horizontal overflow at
      375 / 768 / 1280. Screenshots unavailable here (capture times out)

## Phase 19 — Brand refresh: slogan, socials, spacing ✅

Owner-requested batch: AI-focused slogan, more social channels, smaller social
icons, tighter section rhythm.

- [x] Slogan updated to "AI-First Software Engineering" (was "The Way to Web
      Presence") in `content/site.ts` — flows through nav/footer brand lockup
- [x] Social channels expanded to 8 — added Instagram, Facebook, YouTube, and
      WhatsApp (WhatsApp href derived from `site.contact.phoneHref`) alongside
      GitHub / LinkedIn / X / Email; new inline SVG brand glyphs added to the
      footer icon registry, `SocialLink["icon"]` union widened
- [x] Social icons shrunk — button 40→32px, SVG 18→15px, gap 10→8px, row now
      wraps for the longer set
- [x] Reduced section vertical padding site-wide — `section` padding
      `clamp(72px,10vw,132px)` → `clamp(48px,6.5vw,88px)` for a tighter rhythm
- [x] lint + typecheck + clean build (17 routes) green; verified live in browser
      via loaded-CSS rules (section padding + 32px social button) and DOM (new
      slogan text, 8 social links present). Screenshot capture times out in this
      pane (reports innerWidth 0); Firefox/Safari + Lighthouse not runnable here

## Phase 20 — Nav + footer polish (round 6) ✅

Owner-requested batch off a Company-menu screenshot.

- [x] Newsletter heading made a single line — kept copy "Subscribe to our
      newsletter for product updates", `.foot-news-label` set `white-space: nowrap`
      (dropped `max-width: 34ch`), newsletter column 340→380px so the label (334px
      natural at 0.9rem) and the email input row share the same 380px width
- [x] Brand slogan redesigned + reworded to "AI-Native Engineering" (was
      "AI-First Software Engineering") — now an uppercase, letter-spaced mono
      micro-label with a glowing accent dot (`.brand-slogan::before`)
- [x] Mega-menu hover gap fixed — `.mega::before` bridge enlarged (16→20px tall,
      extended ±60px past the panel edges) to survive diagonal pointer travel
- [x] Compact menu (Company) now opens anchored directly under its own trigger,
      right-aligned (`.nav-item.mm-anchored`, `position: absolute`, wrapped in
      `@media (min-width:1025px)` so mobile accordion is untouched) instead of
      centring on the viewport — short, direct pointer path into the panel
- [x] Case Studies converted from master–detail (level-2 category rail) to a
      single flat menu of 8 direct sub-menu links
- [x] lint + typecheck + clean build (17 routes) green; verified live via DOM +
      computed styles (slogan text/uppercase/dot, one-line 380px newsletter,
      Company panel anchored under trigger with no overflow, Case Studies rail
      gone). Screenshot capture still times out in this pane

## Phase 21 — Services taxonomy → 8 core offerings ✅

Owner-requested: replace the tech-stack Services taxonomy (5 categories → ~23
technology-specific pages like React/Node/AWS) with a flat set of **8 core
service offerings**.

- [x] Rewrote `content/services.ts` — 8 flat `ServiceRecord`s (Artificial Intelligence,
      Custom Software Development, SaaS Development, Web Development, Mobile
      Development, UI/UX Design, Cloud & DevOps, QA & Testing), each with
      intro/overview/3 capabilities and its own `/services/[slug]` page
- [x] Services mega-menu converted from master–detail columns to a **flat
      panel** (`servicesMenu`, mirrors the Industries pattern); retired
      `serviceCategories` + `serviceMenuColumns`
- [x] `relatedServices` now returns other offerings (taxonomy is flat, one
      category "Services"); `serviceOfferings` derived from the collection so
      the `/services` hub grid + nav stay aligned (cards now link to detail
      pages)
- [x] Footer Services column repointed to the real `/services/[slug]` routes
- [x] Sitemap auto-derives the 8 new slugs (no edit needed); `app/services`
      hub + `[slug]` detail route unchanged and working
- [x] lint + typecheck + static **build (27 routes)** all green; verified in
      browser — flat menu lists all 8 services + overview link, `/services/
      ai-development` renders (breadcrumb, overview, 3 capabilities, 3 related,
      CTA), zero console errors. Screenshots/Firefox/Safari/Lighthouse not
      runnable in this pane (unchanged from prior phases)

## Audit checkpoint — 2026-07-14 📋

Full project audit completed → [`docs/audit/project-audit-2026-07.md`](../audit/project-audit-2026-07.md).
Key finding: the nav advertises ~130 destinations that collapse into ~6 hub
pages. The plan below (Phases A–O) builds the real detail pages. **No new UI is
built until Phase A lands.** The legacy "Future Expansion" note below is
superseded by these phases.

---

## Competitive review checkpoint — 2026-07-14 (ACKPlus) 📋

Full competitive review of https://ackplus.com/ →
[`docs/design/ackplus-analysis.md`](../design/ackplus-analysis.md); updated
[`docs/architecture/sitemap.md`](../architecture/sitemap.md) and
[`docs/architecture/page-inventory.md`](../architecture/page-inventory.md).

**Finding:** ACKPlus is narrow (5 services) but ships every page — real service
detail pages, ~16 case-study detail pages, a live careers job board, contact
FAQ + 24h response promise, one real testimonial. Rapid Tech Plus has far wider
nav breadth but most links resolve to hub pages. The gap is **follow-through**,
not breadth. This confirms the priority order of Phases A–O below and adds a
few quick wins + a Careers page. Planning only — **no UI built until approved**.

### Phase P — ACKPlus quick wins (copy/UX, no new architecture)

- [ ] **Contact response promise + FAQ** — add an explicit "we reply within 1
  business day" promise and a short contact-stage FAQ (demos, response time,
  support) to `/contact`. _Deps: none. Priority: P1. Complexity: S._
- [ ] **"Free Consultation" CTA framing** — introduce/test a lower-friction
  "Book a free consultation" CTA alongside "Get A Quote" in hero + CTA banner.
  _Deps: none. Priority: P2. Complexity: S._
- [ ] **Business hours** stated on Contact + footer. _Deps: none. P2. S._
- [ ] **Real testimonials** — replace homepage testimonial placeholders with
  3–4 real, attributed client quotes when available (never fabricate). _Deps:
  real quotes. Priority: P1. Complexity: S._

### Phase I+ — Careers (direct ACKPlus gap, folds into Phase I)

- [~] `/careers` — static careers page shipped (Phase 22): remote-first
  benefits, representative open roles with dept/mode/type chips + per-role
  mailto apply, and a "how to apply" intro. Filters and `/careers/[slug]` role
  detail still to come. _Deps: A + live job data._

---

## Complete-Website Plan (Phases A–O)

Each task: **Title · Description · Dependencies · Acceptance · Priority ·
Complexity.** One collection = one PR. Every PR must pass the Design Review
Checklist in `CLAUDE.md`.

### Phase A — Content collections & detail-page architecture 🔑 ✅

_Foundation. Blocks B–H. Done first, as required._

- [x] **Split content collections** — broke `content/site.ts` into typed,
  slug-keyed collections: `content/types.ts` (shared types) plus
  `content/{services,hire,solutions,industries,products,case-studies,blog}.ts`.
  Every record has a `slug`; the mega menu is composed in `site.ts` from those
  collections (`serviceMenuColumns`, `hireMenuColumns`, `solutionMenuColumns`,
  `industriesMenu`, `caseStudiesMenu`) so nav + pages read from one source;
  `site.ts` re-exports page-facing arrays so existing imports keep working. No
  copy lost. typecheck + lint + build green.
- [x] **Reusable detail template** — `components/sections/detail-layout.tsx`
  (`DetailLayout`: hero + breadcrumb + overview split + capability grid +
  optional FAQ + related grid + CTA). Proven on Services:
  `app/services/[slug]/page.tsx` with `generateStaticParams` + `dynamicParams
  = false`, per-page metadata (canonical + OG), and Service + BreadcrumbList
  JSON-LD. Verified: 23 pages render statically, unknown slug → 404. Services
  mega-menu links now point at real `/services/[slug]` routes.
- [x] **Extract shared primitives** — `PageHero`, `RelatedGrid`, `MetricStat`,
  `Quote`, `Tag` (pill), `FaqAccordion` added to `components/sections/pieces.tsx`
  (+ linkable `IconCard`). Refactored every inner page to `PageHero`, the
  homepage to `FaqAccordion`/`Quote`, and Case Studies to `MetricStat`/`Tag`.
  No duplication; verified no visual regression (both themes, breakpoints).
- [x] **Sitemap-from-collections** — `app/sitemap.ts` now derives
  `/services/[slug]` from `serviceSlugs`, so adding a service record adds its
  sitemap URL automatically.
- [x] **Create `config/`** — `config/site.ts` holds `SITE_URL`, `CONTACT_HREF`,
  and `SITEMAP_CHANGE_FREQUENCY`; consumed by breadcrumbs, sitemap, the detail
  route, and content modules.

**Design Review** — verified in-browser (dev) on `/services/ai-agents`: h1,
breadcrumbs, overview split (3 capability checks), related grid (3 same-category
links), Service+BreadcrumbList+Organization JSON-LD, CTA; zero horizontal
scroll at 375/768/1440 (body clips the decorative aurora/mega layers, matching
the existing baseline); dark theme confirmed. Not verifiable here: Safari/
Firefox and Lighthouse (call-outs unchanged from prior phases). Screenshot
capture still times out in this pane (continuous background compositor) —
verified via DOM/computed-style metrics.

**Newly discovered / carried tasks:**

- [~] Detail-page richness for later collections — **hire done (Phase C)**,
  **case studies done (Phase G)**; product/blog records still carry
  `summary`/`body` only; add per-record detail bodies (capabilities, FAQs) when
  their `[slug]` phases land.
- [~] Repoint mega-menu links from hubs to real routes as `[slug]` phases land —
  **Hire Expert done (Phase C), Industries done (Phase D), Case Studies done
  (Phase G): links + `collectionRoutes` now resolve to `/hire/[slug]`,
  `/industries/[slug]`, and `/case-studies/[slug]`**; `/products/[slug]` and
  `/blog/[slug]` still pending their phases.

### Phase B — Service detail pages ✅

- [x] `/services/[slug]` for all 8 core offerings, each rebuilt as a full
  landing page. _Deps: A._ Enriched `content/services.ts` — every
  `ServiceRecord` now carries `problems`, `technologies`, `benefits`,
  `industries` (slug refs) and `caseStudies` (slug refs) plus per-service
  `faqs`; added a shared 5-stage `serviceProcess` and
  `serviceIndustries` / `serviceCaseStudies` resolver helpers (unknown slugs are
  skipped, so no dead links). New `components/sections/service-landing.tsx`
  composes the landing template: Hero → dual CTA → Overview → **Business
  problems** → **Technologies** (chip cloud) → **Development process**
  (5-step timeline) → **Benefits** → **Industries** (links to
  `/industries/[slug]`) → **Case studies** (metric cards) → **FAQs** → Related
  services → CTA; every optional section hides when its data is absent.
  `app/services/[slug]/page.tsx` now renders `ServiceLanding` and emits Service
  (+ `areaServed`) and FAQPage JSON-LD alongside the existing BreadcrumbList.
- [x] lint + typecheck + clean static **build** all green; verified in browser —
  `/services/ai-development` and `/services/cloud-devops` render all nine
  sections in order (Overview, Business problems, Technologies × 8 chips, How we
  work × 5 steps, Benefits, Industries × 3 linked, Proof × 2 case cards, FAQ,
  Related services), zero console errors, zero content-level horizontal overflow
  at 375 and 1280 (only the pre-existing decorative aurora/mega layers extend
  past the viewport and are clipped by `body`, matching the documented
  baseline). Screenshots/Firefox/Safari/Lighthouse not runnable in this pane
  (unchanged from prior phases).

### Phase C — Hire Expert landing + role pages ✅

- [x] `/hire` hub + `/hire/[slug]` for all 29 roles across 8 disciplines. _Deps:
  A._ Enriched `content/hire.ts` — each `HireRole` now carries `intro`,
  `overview`, and role-specific `capabilities`; added shared `engagementModels`
  + `hireFaqs`, and `hireSlugs` / `getHireRole` / `relatedRoles` / `hireGroups`
  helpers. `/hire` hub (`app/hire/page.tsx`) = hero + 3 engagement models +
  discipline-grouped role cards + CTA. `/hire/[slug]` reuses `DetailLayout`
  (overview + capabilities + shared engagement FAQs + same-discipline related
  grid + CTA) with `generateStaticParams` + `dynamicParams = false` and
  Service/BreadcrumbList JSON-LD. Repointed the **Hire Expert** mega-menu (and
  footer/sitemap "Hire an Expert") from `/contact` to the real `/hire/[slug]`
  routes; `megaMenu` "Hire Expert" href → `/hire`. `app/sitemap.ts` derives the
  role URLs from `hireSlugs`; `/hire` added to the human `/sitemap` page.
- [x] lint + typecheck + clean static **build (57 routes, +30)** all green;
  verified in browser — `/hire` hub (engagement models + all 8 discipline
  groups, cards link to detail pages) and `/hire/react-developers` (breadcrumb,
  overview + 3 capabilities, shared FAQ, related frontend roles, CTA) render;
  zero console errors; no horizontal overflow at 375px. Screenshots/Firefox/
  Safari/Lighthouse not runnable in this pane (unchanged from prior phases).

### Phase C.1 — Hire role pages rebuilt as full landing pages ✅

Owner-requested (highest-converting "Hire Experts" flow): rebuild every
`/hire/[slug]` role page from the compact `DetailLayout` into a full landing
page, mirroring the Phase B service-landing rebuild.

- [x] Enriched `content/hire.ts` with shared landing data — `whyRapidTechPlus`
      (6 reasons), `hireProcess` (5-stage hire→ship timeline), and a per-role
      `roleTech` technology-stack map (all 29 roles) + `getRoleTech` resolver
- [x] New `components/sections/hire-landing.tsx` (`HireLanding`) composes the
      high-converting flow: Hero → dual CTA → Overview → **Why Rapid Tech Plus** →
      **Developer skills** → **Hiring models** → **Technology stack** (chips) →
      **Development process** (5-step timeline) → **FAQs** → Related roles →
      contact CTA; every optional section hides when its data is absent
- [x] `app/hire/[slug]/page.tsx` now renders `HireLanding` and emits Service +
      **FAQPage** JSON-LD alongside the existing metadata/breadcrumb
- [x] lint + typecheck + clean static **build (91 routes)** all green; verified
      in browser — `/hire/react-developers` and `/hire/kubernetes-engineers`
      render all sections in the requested order with per-role tech stacks
      (React 8 chips / Kubernetes 7 chips), zero console errors, zero horizontal
      overflow at 1280 and 375. Screenshots/Firefox/Safari/Lighthouse not
      runnable in this pane (unchanged from prior phases)

### Phase D — Industry detail pages ✅

- [x] `/industries/[slug]` for all 10 industries. _Deps: A._ Enriched
  `content/industries.ts` — `IndustrySector` now carries `intro`, `overview`,
  and sector-specific `capabilities`; added shared `industryFaqs` and
  `industrySlugs` / `getIndustry` / `relatedIndustries` helpers. New
  `app/industries/[slug]/page.tsx` reuses `DetailLayout` (overview + 3
  capabilities + shared FAQs + related-sector grid + dual CTA) with
  `generateStaticParams` + `dynamicParams = false`, per-page metadata
  (canonical + OG), and Service/BreadcrumbList JSON-LD (`areaServed` = sector).
  Repointed the flat **Industries** mega-menu links from `/industries` to the
  real `/industries/[slug]` routes. `/industries` hub now leads with a linked
  10-sector grid (cards → detail pages) above the broader audience-segment grid.
  `app/sitemap.ts` derives the sector URLs from `industrySlugs`.
- [x] lint + typecheck + clean static **build (67 routes, +10)** all green;
  verified in browser — `/industries/healthcare` and `/industries/fintech`
  render (breadcrumb, overview + 3 capabilities, shared FAQ, 3 related sectors,
  dual CTA); `/industries` hub links all 10 sector pages; zero console errors;
  zero horizontal overflow at 375px and desktop. Screenshots/Firefox/Safari/
  Lighthouse not runnable in this pane (unchanged from prior phases).

### Phase E — Solution detail pages ✅

- [x] `/solutions/[slug]` for all 21 solutions across the six categories. _Deps: A.
  Accept: each Solutions link resolves to its own page. Priority: P1. Complexity: M._
- [x] Enriched `content/solutions.ts` — each `SolutionRecord` gains `intro`,
      `overview`, and a 3-card `capabilities` grid; added shared `solutionFaqs`
      and `getSolution` / `solutionSlugs` / `relatedSolutions` (same-category-first)
      helpers, mirroring the services/industries collection pattern.
- [x] `solutionMenuColumns` and the `/solutions` hub cards now link to
      `/solutions/[slug]` (previously resolved to the hub); sitemap adds the 21
      solution routes via `solutionSlugs`.
- [x] New `app/solutions/[slug]/page.tsx` reuses `DetailLayout` with Service
      JSON-LD, breadcrumb, canonical/OG metadata — consistent with the services
      and industries detail templates.
- [x] lint + typecheck + clean static build all green (91 pages, 21 under
      `/solutions/[slug]`); verified in browser — AI Agents detail renders hero,
      overview, 3 capabilities, shared FAQ, category-first related grid, and CTA;
      zero console errors. Screenshots/Firefox/Safari/Lighthouse not runnable in
      this pane (unchanged from prior phases).

### Phase 23 — Solutions taxonomy → 6 category mega menu ✅

Owner-requested: stop listing dozens of solutions flat in the menu; organise the
Solutions mega menu into six outcome-focused categories.

- [x] Rewrote `content/solutions.ts` — 20 slug-keyed `SolutionRecord`s across six
      categories (AI & Automation, Digital Transformation, Enterprise Solutions,
      Cloud Solutions, Business Applications, Data & Analytics); each with icon,
      one-line `summary` (menu) + longer `body` (hub card)
- [x] `solutionMenuColumns` now derives one column per category, so the Solutions
      mega menu renders as a master–detail rail (6 categories → their solutions);
      links resolve to the `/solutions` hub until Phase E ships detail pages
- [x] `/solutions` hub grid now shows all 20 solutions in taxonomy order (fuller
      catalogue behind the menu); footer Solutions column repointed to the six
      category labels
- [x] lint + typecheck + clean static build all green; verified in browser —
      Solutions rail shows the 6 categories in order, each panel lists the correct
      solutions (AI & Automation 9, Digital Transformation 3, Enterprise 2, Cloud
      2, Business Apps 3, Data & Analytics 2), hub renders 20 cards, zero
      horizontal overflow, zero console errors. Screenshots/Firefox/Safari/
      Lighthouse not runnable in this pane (unchanged from prior phases)

### Phase 26 — Solutions mega menu → three-column showcase ✅

Owner-requested: the Solutions menu was too simple. Rebuilt as a premium
three-column showcase (category rail → solutions → featured panel).
techalmas.com studied for menu *organisation* only — no layout, branding,
icons, colours, imagery, or wording taken; the design and copy are original.

- [x] **Taxonomy → 8 categories** (`content/solutions.ts`), AI-first per the
      brief: AI & Automation, Enterprise, Business Automation, Cloud,
      Data & Analytics, Startup, Commerce, Digital Transformation. New
      `solutionCategoryMeta` drives rail icon + featured blurb + CTA target;
      adding a category is a single append, no component change (scalability
      requirement).
- [x] **AI-first without duplication** — the AI category's links resolve to the
      canonical `/ai/[slug]` pages rather than re-adding the solution records
      retired by the Phase AI de-dup. The menu leads with AI; each capability
      still has exactly one home.
- [x] **4 new solution records** so no requested category is threadbare:
      `document-automation`, `product-discovery`, `marketplace-platforms`,
      `subscription-platforms` — each a real `/solutions/[slug]` page (only
      destinations that exist are advertised, per the audit rule). Moved
      `custom-business-solutions` → Enterprise.
- [x] **Content model** — `MegaColumn` gains optional `icon`/`blurb`/`href`;
      `MegaItem` gains `showcase`. Ignored by the other panel variants.
- [x] **`nav.tsx` refactor** — extracted `MenuFoot`, `CategoryRail`, and
      `FeaturePanel`; the flat/master-detail/showcase variants now share the
      footer and rail instead of duplicating them.
- [x] **Featured panel** — original CSS motif (concentric accent rings + the
      category glyph, no imagery), mono eyebrow, blurb, and the two CTAs
      (Explore Solutions / Book Consultation). Re-keys on the active category so
      the fade replays; reduced-motion safe.
- [x] `file-text` + `target` added to the icon registry; footer Solutions column
      repointed to real detail routes (was 5× `/solutions`).
- [x] lint + typecheck + clean static **build (106 routes, +4)** green; 18
      `/solutions/[slug]` dirs in `out/`.

**Design review** — verified in-browser via DOM/computed-style metrics:

- Desktop 1440: panel 1320px, columns 292/698/328, centred and in-bounds
  (53→1373), featured column shown, footer strip suppressed. All 8 categories
  cycled — **zero** truncated rail labels and **zero** ellipsised descriptions.
- Category switching drives rail + cards + featured panel together (verified by
  invoking the real React handlers; synthetic DOM mouse events don't reach
  React's delegated enter/leave synthesis).
- Tablet 1085: featured column drops, two columns (292 + 706), cards go
  single-column so descriptions keep their full text, footer CTAs return.
- Mobile 390: rail + featured hidden, all 8 categories as labelled accordion
  sections, 25 links single-column, all tap targets ≥44px, zero horizontal
  overflow.
- Both themes: all tokens resolve; light and dark independently checked.

**Fixed along the way (found by verification):**

- **Mobile accordion clipping** — the shared `max-height: 1400px` cap silently
  truncated tall panels. Solutions needs 2167px, and **Hire Expert (2339px) was
  already broken before this change**. Replaced with a `0fr→1fr` row-track
  animation that expands to natural height, so no panel can ever be clipped as
  content grows. All 7 menus verified unclipped.
- **Featured CTA contrast** — white on `var(--accent)` was ~2.8:1 in dark
  (fails AA). Repointed to the primary button's fixed indigo gradient +
  `--on-accent`, now at parity with every other CTA on the site (4.47 at the
  lightest gradient stop, 6.29 at the darkest).
- Shortened one AI summary ("…into your product" → "…into your app") — the only
  description that still ellipsised at desktop (Phase 16 precedent).

**Newly discovered — deferred, see Phase Q below.**

- [ ] Not verifiable in this environment (unchanged from prior phases):
  screenshots (capture times out on the continuous compositor), Firefox/Safari,
  Lighthouse.

### Phase Q — Defects found during Phase 26 verification (deferred) 🐛

Found while verifying the Solutions showcase menu; **all pre-existing and
unrelated to that redesign**, so they were logged rather than folded into it.
Numbers below were measured in-browser (dev server, computed styles), not
estimated. Phase 26's own defects were fixed in-phase and are listed under
"Fixed along the way" above — nothing in this section is a Phase 26 regression.

- [ ] **`.mm-foot-cta:hover` fails WCAG AA in dark theme** — the rule
  (`app/globals.css`, `.mm-foot-cta:hover`) sets `background: var(--accent);
  color: #fff`. In dark, `--accent` is `#8a8fff`, giving white text a measured
  **2.82:1** at 12.48px/600 weight, where AA requires 4.5:1 (the text is not
  "large" by WCAG's definition, so the 3:1 allowance does not apply). **Light
  theme passes** at 6.29:1 (`--accent` is `#4f46e5` there), so this is
  dark-only. Affects the "Book a consultation" CTA in **all 7 mega menus** —
  visible on every non-showcase menu at all widths, and on Solutions at ≤1200px
  where the footer strip returns. This is the same defect class already fixed on
  `.mm-feature-cta` in Phase 26; the fix is the same — swap `var(--accent)` +
  `#fff` for the primary button's fixed indigo gradient + `var(--on-accent)`.
  Root cause worth noting: `--accent` is tuned for legibility *on* the dark
  canvas, so it is never a safe *background* for white text; only the fixed
  gradient is. _Deps: none. Accept: ≥4.5:1 in both themes; audit for other
  text-on-`--accent` uses. Priority: **P1** (a11y, and `CLAUDE.md` requires
  accessible). Complexity: S. Folds into Phase N._
- [ ] **`.btn-primary` marginally under AA at its lightest gradient stop** — the
  site-wide primary button (`linear-gradient(180deg, #6366f1, #4f46e5)` +
  `--on-accent`) measures **4.47:1** against white at the `#6366f1` top stop vs
  the 4.5:1 requirement; the `#4f46e5` bottom stop is 6.29:1. A ~0.03 shortfall
  affecting only the topmost pixel rows, but it is the button used everywhere
  (nav CTA, hero, CTA banner, and now `.mm-feature-cta`). Nudging the top stop
  slightly darker (e.g. `#6165f0`) clears it globally with no visible change.
  _Deps: none. Accept: both gradient stops ≥4.5:1. Priority: P2. Complexity: S.
  Folds into Phase N._
- [ ] **Primary nav overflows between ~1025–1150px** — the 8 top-level items +
  the Get A Quote CTA do not fit before the hamburger collapses at ≤1024px.
  Measured at 1085px: `nav.nav-links` spans 285→1288 in a 1085px viewport and is
  clipped by `body { overflow-x: hidden }`, so the last items are unreachable at
  those widths. Predates this phase (the nav has grown to 8 items over Phases
  10–AI). Fix options: raise the collapse breakpoint to ~1150px (smallest
  change), or tighten nav padding/font at that tier. _Deps: none. Accept: no
  `nav-links` overflow at any width between 1024 and 1440. Priority: P2.
  Complexity: S._

### Phase 24 — Technology landing pages (Priority 6) ✅

Owner-requested (Priority 6): replace the "logo wall" idea with real technology
pages. Each featured technology gets a dedicated landing page following the flow
**[Tech] Development → Why [Tech] → Why Rapid Tech Plus → Projects → FAQs**.

- [x] New `content/technologies.ts` collection — 7 slug-keyed `TechRecord`s
  (React, Next.js, Angular, Node.js, NestJS, Laravel, Flutter), each with
  `intro`, `overview`, `reasons` (Why [Tech]), illustrative `projects` (metric
  cards), and per-tech `faqs`; shared `whyRapidTechPlus` reasons + `technologyCta`;
  `techSlugs` / `getTechnology` / `relatedTechnologies` helpers and a flat
  `technologiesMenu` mega-panel derived from the collection
- [x] New `components/sections/technology-landing.tsx` — composes hero → overview
  → Why [Tech] → Why Rapid Tech Plus → Projects → FAQs → related → CTA; optional
  sections hide when data is absent
- [x] New `app/technologies/[slug]/page.tsx` — `generateStaticParams` +
  `dynamicParams = false`, per-page metadata (canonical + OG), Service + FAQPage
  JSON-LD
- [x] Wired **Technologies** into the mega menu (flat panel, after Industries),
  the machine `app/sitemap.ts` (7 routes via `techSlugs`), and the `/technologies`
  hub (new linked "Technologies we specialise in" grid above the broader toolkit)
- [x] lint + typecheck + clean static **build** all green; the 7
  `/technologies/[slug]` pages prerender. Verified against the static export
  (`out/`) — the React and NestJS pages render the full flow in order
  ([Tech] Development hero → Why build with [Tech] → Why Rapid Tech Plus →
  [Tech] in action / Projects → FAQs), the nav shows **Technologies** linking to
  the detail routes, and all 7 slug directories are emitted. (An earlier
  transient dev-server 500 was a `.next` collision from running the production
  build against a shared dev server, not a code fault — the static export is the
  source of truth here.) Screenshots/Firefox/Safari/Lighthouse not runnable in
  this pane (unchanged from prior phases).

### Phase 25 — Trust building: About page expansion (Priority 9) ✅

Owner-requested (Priority 9 — Trust Building): surface the studio's credibility
signals on `/about` rather than scattering them. Certifications intentionally
omitted (no fake badges); quality framed as practices, per owner decision.

- [x] New content in `content/site.ts` — `companyTimeline` (illustrative,
      clearly-framed milestones), `qualityStandards` (practice cards, not
      certifications). Reuses the existing `engineeringPrinciples` (added by the
      concurrent engineering-page work) and `engagementModels` (from
      `content/hire.ts`) — no duplication.
- [x] Expanded `app/about/page.tsx` — added four trust sections after the
      existing story/values: **Our journey** (vertical milestone timeline),
      **Engineering principles**, **Quality standards** (+ cross-links to
      `/our-process`, `/open-source`, and the GitHub org), and **Client
      engagement models**.
- [x] New `.milestones` / `.milestone` / `.about-links` styles in
      `app/globals.css` (vertical timeline, mono year labels, single-column on
      ≤560px).
- [x] `typecheck` clean (after removing an accidental duplicate
      `engineeringPrinciples` — reused the concurrent session's export instead).
- [x] **Build + browser verification unblocked and completed (2026-07-15)** — the
      concurrent session's `hire-landing.tsx` prerender failure is gone; after an
      `rm -rf .next`, lint + typecheck + clean static build are all green. The
      static export carries all seven trust sections and 4 timeline milestones.
      Browser-verified `/about`: h2 order is Journey → Values → Engineering
      principles → Quality standards → Client engagement models → CTA; the three
      cross-links resolve (`/our-process/`, `/open-source/`, the GitHub org); the
      `.milestone` grid is `160px + auto` at 768/1440 and collapses to a single
      335px column at 375; mono year labels render in JetBrains Mono; dark theme
      tokens resolve (canvas `#0a0a13`, iris `#8a8fff`); zero console errors.
- [ ] Pre-existing overflow at 1440 (`scrollWidth` 1463 vs `clientWidth` 1425)
      reconfirmed on `/about` and traced by element to `.nav-right` /
      `.nav-cta-desktop` + the decorative aurora/bg-grid layers — **no `/about`
      content element overflows**. Already logged in **Phase Q** (nav 1024–1440,
      P2); left there rather than folded in here.
- [ ] Screenshots (capture times out on the continuous compositor),
      Firefox/Safari, and Lighthouse not runnable in this environment (unchanged
      from prior phases).

### Phase 26 — Better hero: cycling console panes (Priority 8) ✅

Owner-requested (Priority 8 — Better Hero). Of the ideas raised (AI animation,
product mockups, code snippets, neural network, terminal animation, floating
technology cards) four were already shipped in the Phase 13/Phase Q hero motif;
**code snippets** and **product mockups** were the genuine gaps. Rather than
adding two more elements to an already-busy single composition, the console was
reframed as a real product: a tab strip that auto-cycles Graph → Code → Deploy.

- [x] Split `components/hero-visual.tsx` (single 234-line file) into
      `components/hero-visual/` — `index.tsx` (console chrome, tab strip, pane
      cycling, terminal), `graph-pane.tsx` (the existing neural core, moved
      as-is), `code-pane.tsx`, `deploy-pane.tsx`, and `data.ts` (all
      deterministic content/geometry). Import path `@/components/hero-visual` is
      unchanged.
- [x] **Code pane** — a hand-tokenised agent-orchestration snippet that types
      itself in line by line (`clip-path` opened on `steps(chars)` so the reveal
      lands on glyph boundaries). Tokenised by hand rather than shipping a
      highlighter to re-derive a fixed answer.
- [x] **Deploy pane** — product mockup of a release view: env/health row, three
      metric tiles, a throughput bar chart that grows in, and a pipeline
      checklist with the last stage still running.
- [x] Tab strip is **decorative, not interactive** — the whole visual is
      `aria-hidden`, so a clickable-looking control hidden from AT would be a
      trap. It is a picture of tabs; the hero's meaning lives in the adjacent
      copy.
- [x] Panes stack in one grid cell (`grid-area: 1/1`) so the box never reflows
      as content swaps; all three stay mounted, and the code/deploy panes are
      keyed on visit so their animations replay each cycle.
- [x] Pane content sizes off the pane via **container query units** (`cqw`), not
      `vw` — the hero is two columns on desktop and one when stacked, so pane
      width and viewport width do not track each other. Initial `vw`-based
      sizing measured a 9.28px code font with clipped lines at 320px; now
      10.88px with zero overflow.
- [x] Snippet lines capped at ~32 chars for the same reason (documented in
      `data.ts` — widening a line silently truncates it).
- [x] Fixed a pre-existing bug found in passing: `.hv-orbit`'s
      `transform-origin` was `320px 180px` against a 640×320 viewBox whose
      centre is `320px 160px`, so the rings orbited 20px off-centre.
- [x] Reduced-motion: nothing rotates, pulses, drifts, types, grows, or cycles;
      the console holds on the Graph pane and every pane shows its settled
      state. Rules added for the new `hv-tab*` / `hv-pane` / `hv-code-type` /
      `hv-dep-*` animations.
- [x] lint + typecheck + clean static **build** all green.
- [x] Verified in browser (dark + light): all three panes render and cycle, ink
      bar tracks the active tab, no console errors, no hydration warnings.
      Measured pane geometry at 320 / 480 / 768 / 1440 / 1920 — ratio locks to
      exactly 2.0 from 480 up, zero overflow inside the visual at every width.
      At 320 the shared cell grows to 242×181 (ratio 1.34) because the code pane
      is taller than a 2:1 box; panes are centred so the graph doesn't hang off
      the top. Deliberately accepted over clipping the code, and it causes no
      reflow since all panes share the cell.

**Not verified / known:**

- [ ] Below the 320px spec floor (~283px viewport) two code punctuation tokens
      overflow by **2px**, clipped invisibly by `overflow: hidden`. Zero at the
      320px minimum, so within spec — noted rather than chased.
- [ ] `prefers-reduced-motion` could not be **emulated** in this browser pane;
      the CSS rules and the `useReducedMotion` JS branch were verified by
      inspection only, not by observing the reduced state.
- [ ] Lighthouse / Firefox / Safari not runnable here (unchanged from prior
      phases).
- [ ] Pre-existing horizontal overflow at 1440 (`scrollWidth` 1463 vs
      `clientWidth` 1425) traced to `.nav-right` / `.nav-cta-desktop`, **not**
      the hero. Already logged in **Phase Q** as the nav-links 1024–1440
      overflow (P2); left alone rather than silently folded into this change.

_Note for future phases: running `npm run build` while `next dev` is live
corrupts the shared `.next` and produces phantom failures (stale CSS, a
`ServiceCard is not defined` error for a component that exists nowhere in the
source). Same collision Phase 24 and Phase 25 hit. Stop the dev server first._

### Phase AI — Dedicated AI section (flagship differentiator) ✅

Owner Priority 4: build AI into a standout section rather than a single line of
copy. New top-level **AI** nav (placed first — AI-first differentiator) with a
`/ai` hub and eight deep capability pages built on the rich `ServiceLanding`
template.

- [x] New `content/ai.ts` collection — `AiCapability` (reuses the rich
      `ServiceRecord` shape) with seven slug-keyed records: **AI Agents,
      LLM Integration, RAG, MCP Servers, Automation, Enterprise AI, AI
      Consulting**, each with intro/overview/capabilities/problems/technologies/
      benefits/industries/case-studies/FAQs. Shared `aiProcess` (5-stage),
      `aiChain` funnel, `aiMenu` (flat panel), `aiOfferings` (hub cards), and
      `aiSlugs`/`getAiCapability`/`relatedAiCapabilities`/`aiIndustries`/
      `aiCaseStudies` helpers (unknown slugs skipped → no dead links)
- [x] `/ai` hub (`app/ai/page.tsx`) — hero + dual CTA + overview/differentiators
      split + capability grid + the AI capability chain + how-we-build-AI
      timeline + hub FAQ + CTA; Service JSON-LD
- [x] `/ai/[slug]` (`app/ai/[slug]/page.tsx`) — reuses `ServiceLanding` with
      `generateStaticParams` + `dynamicParams = false`, per-page metadata
      (canonical + OG), Service + FAQPage JSON-LD; `serviceType: "Artificial
      Intelligence"`
- [x] Nav: **AI** added as the first `megaMenu` item; footer gains an **AI**
      column; `/ai` added to the human `/sitemap` "What We Do" group; machine
      `app/sitemap.ts` adds `/ai` + `aiSlugs.map(/ai/[slug])`
- [x] **De-dup follow-up** — retired the seven overlapping `/solutions/*` AI
      records (`ai-solutions`, `ai-agents`, `generative-ai`, `llm-integration`,
      `rag-solutions`, `mcp-server-development`, `intelligent-automation`) from
      `content/solutions.ts`, so `/ai` is the single canonical home for every AI
      concept and none is advertised twice. The category's two rules-based
      records (`workflow-automation`, `business-process-automation`) have no
      `/ai` counterpart and were kept, so the category survives — renamed
      **AI & Automation → Automation** to reflect what's left, with a comment
      recording the boundary. Footer Solutions column "AI Solutions" → "Automation"
      (its only AI pointer). Build 109 → **102 routes** (exactly −7); verified
      against the static export that all seven directories are gone, zero stale
      references remain in any exported HTML, and `/ai` still emits the hub + all
      7 capability pages. Browser-verified: nav leads with Artificial
      Intelligence (8 `/ai/*` links), the Solutions rail now opens on Automation
      with all 6 categories intact, `/ai/rag` renders all 10 sections with
      Service + FAQPage + BreadcrumbList JSON-LD, zero console errors, zero
      horizontal overflow. lint + typecheck + build green.
- [ ] **Generative AI has no `/ai` home** — the retired `generative-ai` record
      was the only place the site named generative/creative work; the closest
      surviving page is `/ai/llm-integration`. Either fold that framing into the
      LLM Integration copy or add an eighth AI capability record. _Deps: none.
      Priority: P2. Complexity: S._
- [ ] Design review on real devices + Lighthouse (not runnable in this
      environment) — call out as with prior phases

### Phase 28 — Premium motion pass (Priority 12) ✅

Owner-requested (Priority 12 — Animations): "current animations are okay, make
them feel premium." Ideas raised: aurora, AI network, mouse interaction,
magnetic buttons, number counters, text reveal, smooth mega menus, gradient
movement.

**Audit first — five of the eight already shipped** (Phase 6.5 + the `motion
primitives` commit `b470ec4`): aurora (`components/background.tsx`, 3 drifting
blobs), AI network (the hero console's graph pane), number counters
(`components/counter.tsx`), text reveal (`components/text-reveal.tsx`), magnetic
buttons (`components/magnetic.tsx`), and gradient movement (`.grad-text` sheen).
So this phase is **not** "add eight effects" — it is: fix the one that is
silently dead, upgrade the two the owner named as weak, and apply the ones that
exist to the moments that earn them.

- [x] **Card cursor spotlight revived** — `.card::before` drew a
      `radial-gradient(… at var(--mx, 50%) var(--my, 0%) …)` but **nothing ever
      wrote those variables**, so every card on the site fell back to a sheen
      pinned to top-centre. New `components/pointer-sheen.tsx` (`PointerSheen`,
      mounted once in `app/layout.tsx`) drives them from a single delegated,
      passive `pointermove` listener on `document`, rAF-throttled. Delegation
      over a wrapper component on purpose: cards are plain server-rendered markup
      site-wide and a decoration must not force them into a client boundary. The
      vars are only read while a card is hovered, so a stale value left on leave
      is invisible and needs no reset.
- [x] **Smooth mega menus** — replaced the symmetric `0.18s` fade with an
      asymmetric open/close: entry `opacity 0.22s` + `transform 0.34s` on a new
      `--ease-out-expo` with a `0.985 → 1` scale settle; exit `0.14s/0.16s` on a
      new `--ease-exit`, with `visibility` **delayed the full exit duration** so
      the fade-out is actually seen (it previously flipped to `hidden` on frame
      1). Anchored (compact) panels scale from `top right` so they unfold from
      their own trigger. Added a staggered `mmLinkIn` card entry (38ms steps,
      `backwards` fill) scoped to the open state — unscoped it would play once at
      page load and never again, since panels are `visibility`-hidden rather than
      `display: none`.
- [x] **Gradient movement beyond `.grad-text`** — a 7s travelling accent seam
      (`seam-travel`) across the CTA banner's top edge. A 1px decorative overlay
      that sits on the border line and never touches the text, so it cannot
      affect CTA contrast.
- [x] **Applied the existing primitives where they earn their keep** — the nav
      "Get A Quote" CTA is now `Magnetic`-wrapped (was plain, and it is the
      most-clicked button on the site); the hero `h1` now uses `TextReveal`, with
      a new `accent` prop that nests `.grad-text` **inside** the word span rather
      than on it (both set `animation`, so on one element the rise and the sheen
      clobber each other).
- [x] Reduced-motion rules for every new animation, verified present in the
      **shipped** CSSOM (not just source): the seam, the `mega-link` stagger, the
      mega open/close transitions, `.tr-word`, `.magnetic`, and `.mm-co-dot` are
      all neutralised, while `visibility` is deliberately **not** forced visible
      so the panel still leaves the a11y tree and stops catching the pointer.
      `PointerSheen` additionally opts out on `prefers-reduced-motion` and on
      `(pointer: coarse)`, where there is no cursor to track.

**Fixed along the way (found by verification):**

- **`.next-verify/` was never gitignored** — the separate build dir used to dodge
  the documented `.next`/dev-server collision left ~3,400 lint problems (13
  errors) on its own minified output. Added to `.gitignore` and the stale dir
  removed; `npm run lint` is now clean. Root cause of a lint signal that would
  have re-appeared after every verification build.
- **Magnetic wrapper needed the CTA's breakpoint visibility** — `.nav-cta-magnet`
  now shares `display: none` with `.nav-cta-desktop` at ≤1024px. Hiding only the
  inner link would have left a zero-width flex child in `.nav-right`, doubling
  its gap on mobile.

**Design review** — lint + typecheck + clean static build all green. Verified
in-browser against the static export (`out/`, port 3200) via DOM/computed-style
and CSSOM metrics:

- **Pointer sheen**: before a pointer move `--mx`/`--my` are unset (gradient
  resolves to the `50% 0%` top-centre fallback — the exact reported bug); after a
  move at 25%/75% of a card the vars read `25.0%`/`75.0%` and the computed
  `::before` gradient is `radial-gradient(240px at 25% 75%, …)`. Live.
- **Mega menus**: `getAnimations()` on the exit reports the intended asymmetry —
  `opacity 140ms` / `transform 160ms` on `cubic-bezier(0.4, 0, 1, 1)`, with
  `visibility` at `delay: 160ms`, so the fade-out is now seen. Open settles to
  `opacity 1` / `scale(1)`, panel in-bounds (233→1033 at 1280), links settle to
  `opacity 1`, stagger fires at 0.03/0.068/0.106/0.144/0.182s with `backwards`
  fill.
- **Hero + CTA**: `h1` renders 7 `.tr-word` spans with `.grad-text` on "ahead";
  nav CTA is inside `.nav-cta-magnet`; seam is `seam-travel 7s` at `height: 1px`.
- Both themes resolve (dark `#0a0a13`/`#8a8fff`, light `#fbfbfd`/`#4f46e5`).
  Mobile 390: CTA + magnet both `display: none`, **zero** content-level
  horizontal overflow.
- The company mega scroller's slides extend past the viewport by design and are
  clipped by their track (`overflow-x: auto`, in-bounds 513→1047, `scrollWidth`
  1626 vs `clientWidth` 542) — not a page overflow.

**Not verified / known:**

- [ ] Pre-existing overflow at 1265 traced to `.nav-links` (1295) plus the
      decorative aurora/bg-grid layers — **no Phase 28 element overflows**.
      Already logged in **Phase Q** (nav 1024–1440, P2); left there rather than
      folded in.
- [ ] `prefers-reduced-motion` could not be **emulated** in this pane (unchanged
      from Phase 26) — the rules were verified by reading the shipped CSSOM, and
      `PointerSheen`'s JS opt-out by inspection, but not by observing the reduced
      state.
- [ ] This pane starves `requestAnimationFrame` (first callback landed at 934ms),
      so frame-sampled animation values are unreliable here and read as their
      settled state. Timing was verified with `getAnimations()` / transition
      events instead — worth reusing in future motion phases.
- [ ] Screenshots, Firefox/Safari, and Lighthouse not runnable in this
      environment (unchanged from prior phases).

### Phase 29 — Micro-interactions pass (Priority 13) ✅

Owner-requested (Priority 13 — Micro Interactions): review buttons, cards,
forms, hover, focus, theme switcher, and navigation — "everything should feel
alive." Audit found the hover layer already strong (Phase 28); the gaps are
press feedback, focus companionship, and small state-change moments.

- [x] Press (`:active`) states site-wide — none existed anywhere: buttons
      (primary/ghost/nav CTA), hamburger, footer social icons, linked cards,
      theme switch
- [x] Hamburger (`.nav-toggle`) given hover/active/focus-visible + transition
      (was completely inert)
- [x] Form micro-interactions — label tints on `:focus-within`, input hover
      border, accent `caret-color`, `.form-error` class (semantic `--error`
      token + shake that replays per attempt, `role="alert"`)
- [x] FAQ answer entrance — fade + rise when a `details` opens
- [x] Theme switch — knob squash while pressed (iOS-style), dark-state travel
      compensated so the knob never overflows the track
- [x] Footer link hover slide; card icon responds with the card hover
- [x] Removed dead `.theme-toggle` CSS (header toggle removed in Phase 13)
- [x] Reduced-motion rules for the new animations
- [x] lint + typecheck + clean static build all green.

**Cascade order is the load-bearing detail** — every new `:active` rule ties on
specificity with the `:hover` rule it must override (both `(0,2,0)`), so it only
wins by being declared later. Verified by source order for all six pairs
(`.btn-primary:hover` 407 → `.btn:active` 421; `.card:hover` 2644 →
`.card-link:active` 2714; ghost, nav-CTA, footer-social likewise). Moving any
`:hover` rule below its `:active` partner silently kills the press feedback —
the pointer is always over the element while pressing it.

**Design review** — verified in-browser against the **static export** via
DOM/CSSOM metrics (the pane's known limits are unchanged: screenshots time out,
Firefox/Safari and Lighthouse not runnable, `prefers-reduced-motion` not
emulable — the RM rules were read from the shipped CSSOM instead):

- All **15** new rules ship, and both `form-shake` + `faq-body-in` keyframes are
  present in the exported CSS.
- **Form error**: an empty submit renders `.form-error` with `role="alert"` and
  the right copy; the element is **recreated** on a second attempt (the `key`
  ={attempt} trick), which is what makes the shake replay rather than fire once.
  `noValidate` is set, so the custom message is reachable at all (with `required`
  alone the browser would intercept and this path would be dead).
- **Themes**: `--error` resolves in both (dark `#f0625d`, light `#dc2626`);
  the `role="switch"` toggle flips `light`/`dark` and back.
- **Theme knob** geometry checked by hand: track 58px, knob pinned at its 3px
  resting edge and stretching inward (light `3→31`, dark `27→55`) — the widened
  knob never overflows the track in either state.
- **Reduced motion** neutralises `.form-error` + `.faq-body` animations; the
  dead `.theme-toggle` CSS is gone (**0** rules in the export).
- Mobile 390: **zero** horizontal overflow, hamburger a full 44×44 tap target.
- 1440: `scrollWidth` 2113 vs `clientWidth` 1425, entirely the **closed `.mega`
  panels** — no Phase 29 element among the offenders, and
  `canScrollHorizontally` is **false** (clipped by `body`). Matches the
  documented baseline; the nav overflow stays logged in **Phase Q**.

**Verification trap worth knowing (cost real time here):** with `NEXT_DIST_DIR`
set, the static export lands in that dist dir — **not** in `out/`. Serving `out/`
after such a build silently serves a **stale** export (it tested the pre-Phase-29
form and reported a false failure). Serve the dist dir, or build without the
override. CI is unaffected: it publishes `./out` and never sets the variable.
Also note `serve -s` strips the trailing slash this site requires and 404s —
serve without `-s`.

### Phase F — Product detail pages

- [ ] Model named products (Planix, Rocket Intelligence Engine, WhatsApp
  Business OS, KidzoRides) in content + `/products/[slug]`. _Deps: A + real
  product copy. Accept: footer product links resolve; each has overview,
  features, CTA. Priority: P2. Complexity: M._

### Phase G — Case study detail pages ✅

- [x] `/case-studies/[slug]` for each study. _Deps: A._ Enriched
  `content/case-studies.ts` — each of the **6** records (the collection had six,
  not seven) now carries `intro` plus `challenge` / `approach` / `outcome`
  chapters (a prose `body` + three supporting `points` each), `technologies`,
  `services` / `industries` slug refs, and per-study `faqs`; added
  `caseStudySlugs` / `getCaseStudy` / `relatedCaseStudies` (same-category-first)
  / `caseStudyHref` / `caseStudyCards` helpers, mirroring the Phase B services
  pattern.
- [x] New `components/sections/case-study-layout.tsx` (`CaseStudyLanding`) —
  Hero → client + outcome-metric strip → **disclosure** → dual CTA → **Challenge**
  → **Approach** → **Outcome** (alternating bands) → **Technologies** (chips) →
  **Services this engagement drew on** → **Where this work applies** → FAQs →
  Related studies → CTA. Optional sections hide when their data is absent.
- [x] `app/case-studies/[slug]/page.tsx` — `generateStaticParams` +
  `dynamicParams = false`, per-page metadata with `ogImageFor("case-studies")`
  set **explicitly** (declaring `openGraph` replaces rather than merges the
  inherited object, so omitting it would ship an imageless card), and
  `CaseStudy` + `FAQPage` JSON-LD. `BreadcrumbList` comes from the shared
  `Breadcrumbs` component via `PageHero`, as on every other detail route —
  re-declaring it in the page would emit two conflicting trails.
- [x] **Integrity** — the studies are representative, not named clients. A
  `CASE_STUDY_DISCLOSURE` strip states this on every detail page (the hub's
  promise now travels with the record), `client` stays a generalised descriptor,
  and the JSON-LD names no organisation. The "HIPAA aligned by design" FAQ says
  plainly that a formal determination is the provider's to make.
- [x] Repointed the **Case Studies mega-menu** from 8 category links that all
  resolved to the hub → the 6 real studies (label = title, desc = client), so
  every entry reaches a page that exists. Hub cards, and the "proof" cards on the
  service/AI landings, now link to the detail routes.
- [x] Extracted `CaseCard` into `components/sections/pieces.tsx` — the hub, the
  service landing, and the related grid rendered the same markup three times.
  Added the one CSS rule the linkable variant needs (`.card-link` moves padding
  onto the inner anchor, so the anchor must be the flex column that pins
  `.case-metrics` to the card foot).
- [x] `app/sitemap.ts` derives the 6 study URLs from `caseStudySlugs`.
- [x] **Phase L's withheld `ItemList` is now real** — `/case-studies` upgraded
  from `WebPage` to `CollectionPage` + `ItemList` (6 items), derived from
  `caseStudyCards` so the markup cannot drift from the visible grid.
- [x] lint + typecheck + clean static **build (125 routes) all green**.

**Design review** — verified in-browser (dev server; built into `.next-verify`
so the live dev server's `.next` stayed intact — note `out/` is stale and must
not be used to verify):

- `/case-studies/payments-platform-rebuilt-for-scale` renders all nine sections
  in order, 8 tech chips, 2 FAQs, breadcrumb trail Home > Case Studies > study.
- Built HTML confirms `canonical`, explicit `og:image`
  (`/case-studies/opengraph-image.png`), `summary_large_image`, and exactly one
  each of `CaseStudy` / `BreadcrumbList` / `FAQPage`. Hub emits
  `CollectionPage` + `ItemList` (6). `sitemap.xml` carries the 6 study URLs.
- Clicking a real hub card navigates to the detail page; unknown slug → 404
  (`dynamicParams = false`).
- **Zero content-level horizontal overflow at 1440 and 375** (the only offenders
  are the pre-existing decorative aurora/grid and closed mega panels, clipped by
  `body` — the documented baseline). Mobile ≤640px collapses the summary strip
  to a column and left-aligns the chapter prose.
- Both themes verified via a real theme switch (`localStorage` + reload, not a
  synthetic class swap — that silently leaves the canvas unrepainted and gives
  false readings): dark canvas `#0a0a13`, light `#fbfbfd`, all tokens resolve.
- Mega-menu: all 6 labels and descriptions render **untruncated** (the Phase 16
  `.mega-link-desc` nowrap+ellipsis constraint holds — client descriptors are
  short). Zero console errors.

**Fixed along the way (found by verification):**

- **`.case-disclosure` failed WCAG AA** — first drafted with `--text-dim`, which
  measured **3.78:1** at 13.76px against the dark canvas (AA needs 4.5:1, and the
  text is not "large"). Switched to `--text-muted` → **7.84:1** dark / **7.41:1**
  light. Same root cause as the Phase Q findings: `--text-dim` is tuned for
  decorative micro-labels, not body-size prose.

- [ ] Not verifiable in this environment (unchanged from prior phases):
  screenshots (capture times out on the continuous compositor; the pane also
  reports `innerWidth: 0` until an explicit resize), Firefox/Safari, Lighthouse.

### Phase H — Blog / Insights

- [ ] `/blog/[slug]` post pages + `/blog/category/[slug]` + `/blog/tag/[slug]` +
  client-side search + author bylines. _Deps: A + post bodies (MDX or typed).
  Accept: posts render, archives filter, Article JSON-LD. Priority: P1.
  Complexity: L._

### Phase I — Company pages

- [x] **Closed by Phase 27.** The Company section is now scoped to the seven
  owner-defined pages (About, Why Us, Culture, Careers, Engineering,
  `/our-process`, Contact) and every menu item resolves to a real page — the
  acceptance criterion is met. `/about/story` and `/about/leadership` are
  **deliberately out of scope**: the Leadership/Partners/Certifications pills
  were removed in Phase 27 rather than built. Reopen only if the owner widens
  the Company set. _Deps: A + copy._

### Phase 25 — Company pages: Why Us · Culture · Engineering ✅

Owner-requested (Priority 10 — Company Pages): fill the remaining gaps in the
Company section. About, Careers, Development Process (`/our-process`), and
Contact already shipped; this phase adds the three missing pages.

- [x] New `/why-us` — differentiator pillars (`whyUsPillars`), illustrative
      proof stats (`whyUsStats`, `MetricStat`), an "us vs. typical agency"
      comparison panel (`whyUsDifference`), and a contact FAQ (`whyUsFaqs`,
      `FaqAccordion`) + CTA
- [x] New `/culture` — how-we-work principles (`culturePrinciples`), everyday
      rituals (`cultureRituals`), and shared values (reuses `aboutValues`) + CTA
- [x] New `/engineering` — engineering practices (`engineeringPractices`),
      decision principles (`engineeringPrinciples`), a "definition of done"
      quality-bar checklist (`engineeringStandards`), and the shared stack
      (`techGroups`) + CTA
- [x] Wired all three into the Company mega-menu, footer Company column, the
      human `/sitemap` page groups, and machine `app/sitemap.ts`
- [x] lint + typecheck + clean static **build** all green; the three routes
      export as prerendered static pages (`○ /why-us`, `/culture`,
      `/engineering`). Verified in browser — `/why-us` and `/engineering` render
      every section with zero console errors; `/culture` compiled and served 200.
      (Intermittent 404s during verification were a shared-`.next` race with a
      concurrent dev server in the same folder, not a code issue.)
      Screenshots/Firefox/Safari/Lighthouse not runnable in this pane (unchanged
      from prior phases).

### Phase 27 — Company section scoped to the seven defined pages ✅

Owner-requested (Priority 10 follow-up): constrain the Company section to the
seven defined pages — About, Why Us, Culture, Careers, Engineering, Development
Process (`/our-process`), Contact — and remove the rest. All seven already
existed (Phases 3/22/25), so this was a scoping pass, not new page work.

- [x] `content/company.ts` — Company mega-menu trimmed 11 → **7** links.
      Removed the **Open Source** link and the three `soon` pills (Leadership
      Team, Partners, Certifications). Every remaining link resolves to a real
      route; zero `soon` pills.
- [x] **`/open-source` page deliberately kept live** (owner decision) — only its
      Company-menu entry was dropped. It stays reachable via the `/about` prose
      link and the human `/sitemap` index, and remains in `app/sitemap.ts`.
      Deleting it would have meant rewriting the About cross-link and discarding
      its `content/site.ts` copy.
- [x] Footer Company column — added the **missing Culture** link (was 6 items,
      inconsistent with the defined set); now matches the menu's seven.
- [x] `/sitemap` index left listing Open Source: it is the index of *every*
      public route, and the route is still live.
- [x] lint + typecheck + clean static **build** all green. Verified in browser
      (dev) — Company panel renders exactly 7 links (`/about`, `/why-us`,
      `/our-process`, `/engineering`, `/culture`, `/careers`, `/contact`), no
      soon pills; footer column shows the 7 incl. Culture; `/open-source` still
      200s and `/about` still links it. Verified against the static export —
      "Leadership Team" and "Certifications" have **zero** occurrences, all 7
      company routes emit `index.html`, and `out/open-source` still exports.

**Newly discovered:**

- [ ] **`soon` support is now entirely unused** — no `soon: true` exists anywhere
      in the content collections, leaving the `NavLink["soon"]` type field, the
      `MegaLink` `is-soon` branch (`components/layout/mega-link.tsx`), and the
      `.soon-pill` / `.mega-link.is-soon` CSS as dead paths (confirmed in the
      export: `soon-pill` appears only in the layout chunk + CSS, never in page
      HTML). Kept deliberately — it is a documented general-purpose nav
      affordance (Phase 7) likely wanted again for Leadership/Partners, and
      stripping it is unrelated to this scoping change. Either use it or remove
      all three pieces together. _Deps: none. Priority: P3. Complexity: S._

### Phase 22 — Company nav restructure + new pages ✅

Owner-requested: restructure the Company mega-menu to About · Careers · Contact ·
Our Process · Open Source, and build the missing pages (they had pointed at
`/about`).

- [x] Company menu (`content/site.ts`) restructured to the 5 requested items;
      `soon` flags dropped; Technologies/Culture removed from this menu
- [x] New `/careers` — remote-first benefits, 4 representative roles (dept/mode/
      type chips + per-role mailto apply to the HR inbox), how-to-apply intro
- [x] New `/our-process` — five-stage `tailoredProcess` timeline (`timeline-5`),
      four operating principles, working-with-us FAQ, CTA
- [x] New `/open-source` — engagement principles, investment categories, GitHub
      org link, collaborate CTA
- [x] Added `book-open` to the icon registry (`components/icon.tsx`)
- [x] Footer Company column + human `/sitemap` groups + machine `app/sitemap.ts`
      wired to the three new routes
- [x] lint + typecheck + clean static **build (70 routes, +3)** all green;
      verified in browser — all three pages render, Company mega-menu +
      descriptions and footer resolve to the new routes, zero console errors.
      Screenshots/Firefox/Safari/Lighthouse not runnable in this pane (unchanged
      from prior phases)

### Phase J — Resources

- [ ] `/resources/faq`, `/resources/open-source`, `/resources/process`,
  `/why-rapid-tech-plus`. _Deps: A. Accept: standalone FAQ reuses
  `FaqAccordion` + FAQPage JSON-LD. Priority: P2. Complexity: M._

### Phase K — Legal & system

- [ ] `/disclaimer`, `/coming-soon`, and a `500`/global-error page. _Deps: none.
  Accept: routes render, linked where appropriate. Priority: P2. Complexity: S._

### Phase L — SEO deepening (Priority 14) ✅

Owner-requested (Priority 14 — SEO): every page should have metadata, Open
Graph, structured data, breadcrumbs, canonical, and internal linking.

**Audit first — four of the six already shipped.** Metadata and canonical were
on every route (the homepage inherits `canonical: "/"` from the root layout,
which is correct); `crumbs` is a *required* prop of `PageHero`, so breadcrumbs +
`BreadcrumbList` JSON-LD were already on all 26 inner pages (the homepage
correctly has none — it is the root); internal linking is extensive (mega menus,
footer hub, related grids, `/sitemap`). So this phase is **not** "add six
things" — it is: fix the one that was silently broken, and fill the
structured-data gap on the hubs.

Scoped to shipped routes: Phase L's stated deps (B–K) are only partly done, and
F/G/H/J/K pages do not exist yet. The work is wired into the shared templates
and `config/og-templates.ts`, so those pages inherit it when they land.

- [x] **Every social share preview on the site was broken** — the root layout
      pinned `openGraph.images` / `twitter.images` to `public/og-image.svg`, and
      **no major crawler (Facebook, LinkedIn, X, Slack, WhatsApp) renders SVG
      Open Graph images**. Replaced with real 1200×630 PNGs.
- [x] **Next's `opengraph-image.tsx` route convention is unusable on this host** —
      it emits its image at an *extensionless* path (`/opengraph-image`), and
      GitHub Pages derives Content-Type from the extension alone. **Measured
      against the live host** (`curl -I https://rapidtechplus.github.io/.nojekyll`
      → `application/octet-stream`, vs `/og-image.svg` → `image/svg+xml`): the
      file would have been served as `application/octet-stream` and rejected as
      an image. The in-tree untracked `app/opengraph-image.tsx` was replaced
      rather than finished, for this reason.
- [x] **Committed static PNGs instead** — `scripts/generate-og.tsx`
      (`npm run og:generate`, `tsx` devDep) renders `lib/og-image.tsx` to
      `app/**/opengraph-image.png` + `.alt.txt`. Static files keep the `.png`
      extension (correct Content-Type) and are still picked up automatically by
      Next's metadata cascade, so the wiring stays idiomatic and `next build`
      pays no rendering cost.
- [x] **Per-template, not per-page** (13 images, ~950KB) — the cascade means
      `app/services/opengraph-image.png` also covers every `/services/[slug]`.
      Per-slug images would have added ~8MB of PNGs to the repo for a marginally
      better title.
- [x] **Detail pages needed the image set explicitly** — declaring `openGraph` in
      a page's `generateMetadata` *replaces* the inherited object instead of
      merging, so all 6 `[slug]` templates were shipping
      `twitter:card: summary_large_image` with **no image** (a broken card, worse
      than none). Fixed via `ogImageFor(section)` in `config/og-templates.ts`.
      Hub pages declare no `openGraph`, so the cascade still covers them.
- [x] **Structured data on the hubs** — the detail templates already emitted
      `Service`/`FAQPage`, but the ~20 hub/company pages had `BreadcrumbList`
      alone. New `lib/structured-data.ts` builders + `components/seo/json-ld.tsx`:
      enriched `Organization` (`sameAs` from the 7 real social profiles,
      sales/HR `contactPoint`, referenced by `@id` rather than re-inlined),
      `WebSite`, `CollectionPage`+`ItemList` on the 6 collection hubs (derived
      from the same arrays the grids render, so they cannot drift),
      `AboutPage`, `ContactPage`, and `WebPage` elsewhere.
- [x] **FAQ markup gap closed** — `/ai`, `/why-us`, and `/our-process` rendered
      `FaqAccordion` with no `FAQPage` markup at all. Added.
- [x] **No SearchAction** (the site has no search endpoint), **no `ItemList` on
      `/products`, `/case-studies`, `/blog`** (Phases F/G/H haven't given those
      records routes — listing URLs that 404 helps nobody), and **no `JobPosting`
      on `/careers`** (the roles are representative, not live vacancies).
      Advertising any of these would be a structured-data violation.
      _Update: **Phase G shipped `/case-studies/[slug]`, so that hub's `ItemList`
      is now real and has been added** (`CollectionPage` + 6 items). `/products`
      and `/blog` remain correctly withheld pending Phases F/H._
- [x] Removed the now-dead `public/og-image.svg`; updated `seo-strategy.md`,
      `branding.md`, `project-structure.md`.

**Fixed along the way (found by verification):**

- **`npm run lint` was reporting 3,388 problems (13 errors) on build output** —
  `eslint.config.mjs` ignored `.next/**` but not `.next-verify/**`, the separate
  distDir used to build alongside a live dev server. Phase 28 hit this and
  "fixed" it by adding the dir to `.gitignore`, but **ESLint does not read
  `.gitignore`**, so it recurred on every verification build. Ignore pattern
  widened to `.next*/**` — the actual root cause.
- **OG template defects caught by looking at the rendered PNG**, not the byte
  count: the accent seam stopped 80px short of each edge (absolutely positioned
  children resolve against the *padded* box; restructured so the seam is a normal
  flex child of an unpadded root), and the home card printed the slogan twice
  (eyebrow + footer).

**Design review** — lint + typecheck + clean static **build (119 pages)** all
green. No UI/layout change: this phase touches `<head>` metadata and JSON-LD
only, so the responsive/theme checklist has no surface to regress. Verified
against the static export:

- **Zero** `og-image.svg` references remain in any exported HTML.
- Every page's `og:image` resolves to a real `.png` **file present in the export**
  (13 cards, all `PNG 1200×630`); `/privacy` correctly falls back to the root
  card, `/services/ai-development` → the services card, and so on.
- **104 pages scanned: 0 invalid JSON-LD blocks, 0 pages missing a canonical.**
- **Sitemap sync exact** — 101 entries, **0** pointing at routes that would 404;
  the only exported route not listed is `/404`, which correctly should not be.
- Canonicals absolute with trailing slash (matching `trailingSlash: true`);
  `sameAs` correctly excludes the `mailto:` social entry.

**Not verified / known:**

- [ ] Share previews not validated against the **real** crawlers (Facebook
      Sharing Debugger, LinkedIn Post Inspector, X Card Validator) — they need
      the deployed URL, and this is unreleased. The Content-Type reasoning was
      measured against live GitHub Pages, but the crawler round-trip was not.
- [ ] `Organization.logo` still points at `favicon.svg`. Google's logo guidance
      favours raster; worth re-pointing at a PNG. _Priority: P3. Complexity: S._
- [ ] Lighthouse / Firefox / Safari not runnable in this environment (unchanged
      from prior phases).

### Phase M — Performance

- [ ] Lighthouse CI guarding ≥95 (mobile), asset/font budget. _Deps: pages
  exist. Priority: P1. Complexity: M._

### Phase N — Accessibility hardening

- [ ] Full a11y pass across all new pages (focus order, contrast, landmarks,
  keyboard). _Deps: B–K. Priority: P0. Complexity: M._
- [ ] Fold in the two measured contrast failures logged in **Phase Q** —
  `.mm-foot-cta:hover` (2.82:1, dark only, P1) and `.btn-primary`'s lightest
  gradient stop (4.47:1, P2). Both have a known fix and exact numbers already
  recorded, so they need no re-investigation. _Deps: none._

### Phase O — Production readiness

- [ ] Cross-browser (Chrome/Edge/Firefox/Safari), custom domain + HTTPS,
  deployed-URL render verification. _Deps: all. Priority: P0. Complexity: M._

---

## Phase 6 — Future Expansion (superseded — see Phases A–O above)

- [ ] Product detail pages (`generateStaticParams` from `content/`)
- [ ] Careers page
- [ ] Documentation section
- [~] Blog / insights — static `/blog` index shipped (Phase 10); per-post
  routes still to come
- [x] Case studies — `/case-studies` index shipped (Phase 11) with illustrative
  studies + metrics; per-study detail routes shipped (Phase G). Per-industry
  filter views not built: with six studies a filter adds navigation without
  adding information — revisit if the collection grows
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
