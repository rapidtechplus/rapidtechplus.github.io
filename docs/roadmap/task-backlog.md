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

- [x] Rewrote `content/services.ts` — 8 flat `ServiceRecord`s (AI Development,
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

- [~] Detail-page richness for later collections — **hire done (Phase C)**;
  solution/industry/product/case-study/blog records still carry `summary`/`body`
  only; add per-record detail bodies (capabilities, FAQs) when their `[slug]`
  phases land.
- [~] Repoint mega-menu links from hubs to real routes as `[slug]` phases land —
  **Hire Expert done (Phase C) + Industries done (Phase D): links +
  `collectionRoutes` now resolve to `/hire/[slug]` and `/industries/[slug]`**;
  `/solutions/[slug]`, `/products/[slug]`, etc. still pending their phases.

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

### Phase F — Product detail pages

- [ ] Model named products (Planix, Rocket Intelligence Engine, WhatsApp
  Business OS, KidzoRides) in content + `/products/[slug]`. _Deps: A + real
  product copy. Accept: footer product links resolve; each has overview,
  features, CTA. Priority: P2. Complexity: M._

### Phase G — Case study detail pages

- [ ] `/case-studies/[slug]` for each study. _Deps: A. Accept: study cards link
  to full pages (challenge/approach/outcome/metrics); CaseStudy/BreadcrumbList
  JSON-LD. Priority: P1. Complexity: M._

### Phase H — Blog / Insights

- [ ] `/blog/[slug]` post pages + `/blog/category/[slug]` + `/blog/tag/[slug]` +
  client-side search + author bylines. _Deps: A + post bodies (MDX or typed).
  Accept: posts render, archives filter, Article JSON-LD. Priority: P1.
  Complexity: L._

### Phase I — Company pages

- [~] `/careers` shipped (Phase 22) and the `soon` flag retired from the Company
  menu. `/about/story`, `/about/leadership`, `/about/culture` still to come.
  _Deps: A + copy. Accept: Company menu items resolve to real pages. Priority:
  P2. Complexity: M._

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

### Phase L — SEO deepening

- [ ] Per-template OG images, per-template structured data, canonical audit,
  sitemap sync verified. _Deps: B–K. Priority: P1. Complexity: M._

### Phase M — Performance

- [ ] Lighthouse CI guarding ≥95 (mobile), asset/font budget. _Deps: pages
  exist. Priority: P1. Complexity: M._

### Phase N — Accessibility hardening

- [ ] Full a11y pass across all new pages (focus order, contrast, landmarks,
  keyboard). _Deps: B–K. Priority: P0. Complexity: M._

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
  studies + metrics; per-industry/per-study detail routes still to come
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
