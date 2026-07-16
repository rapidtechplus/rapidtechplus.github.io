/**
 * Shared content types. Kept in a dependency-free module so both `site.ts`
 * (which builds the nav from the collections) and the individual collection
 * files can import them without creating an import cycle.
 *
 * Everything here is serializable — icons are referenced by string name
 * (resolved by `components/icon.tsx`), never as component imports — so records
 * can be passed across the server/client boundary and rendered statically.
 */

/** A single navigable entry inside a mega-menu panel or footer column. */
export type NavLink = {
  label: string;
  href: string;
  desc?: string;
  /** Renders as a non-clickable "coming soon" item (no dead link). */
  soon?: boolean;
  /** Icon key resolved by `components/icon.tsx`. */
  icon?: string;
};

/**
 * A category of links inside a mega-menu panel. `icon`, `blurb`, and `href` are
 * only read by the three-column showcase panel (see `MegaItem.showcase`), which
 * renders them as the category's rail icon and its featured right-hand panel;
 * master–detail and flat panels ignore them.
 */
export type MegaColumn = {
  title: string;
  links: NavLink[];
  /** Icon key resolved by `components/icon.tsx`. */
  icon?: string;
  /** Short paragraph introducing the category in the featured panel. */
  blurb?: string;
  /** Where the featured panel's primary CTA points. */
  href?: string;
};

/**
 * Payload for the three-column company panel (see `MegaItem.company`). The
 * panel's left sidebar is the `MegaItem`'s own `links`; this type carries the
 * two trust-building columns beside it plus the closing banner.
 */
export type CompanyPanel = {
  /** Mono eyebrow above the sidebar. */
  navLabel: string;
  /** Mono eyebrow above the highlight cards. */
  highlightsLabel: string;
  /** What we build / how we work, as interactive cards. */
  highlights: Feature[];
  /** Mono eyebrow above the stat grid. */
  statsLabel: string;
  /**
   * Trust indicators. Every value must be independently verifiable — derive
   * counts from the content collections rather than asserting a number no page
   * can back up.
   */
  stats: Metric[];
  /** Right-hand company story panel. */
  feature: {
    eyebrow: string;
    title: string;
    body: string;
    /** Icon key for the panel's motif. */
    icon: string;
    /** Filled CTA, then two quieter ones. */
    actions: NavLink[];
  };
  /** Closing promotional strip across the panel's foot. */
  banner: { title: string; body: string; cta: NavLink };
};

/** Top-level navigation entry — a plain link, or a mega-menu panel. */
export type MegaItem = {
  label: string;
  href: string;
  columns?: MegaColumn[];
  links?: NavLink[];
  flat?: boolean;
  compact?: boolean;
  /**
   * Renders `links` as the left sidebar of a three-column company panel —
   * sidebar, highlights + stats, featured story — closed by a full-width
   * banner. Falls back to two columns below 1200px (the featured column drops)
   * and to the shared accordion on mobile, where only the sidebar and stats
   * remain. Ignored unless `links` is present.
   */
  company?: CompanyPanel;
  /**
   * Renders `columns` as a three-column showcase: category rail, solution
   * cards, and a featured panel driven by the active category's `icon`,
   * `blurb`, and `href`. Falls back to the two-column master–detail layout
   * below 1200px, and to the shared accordion on mobile.
   */
  showcase?: boolean;
  overview?: string;
};

/** A question/answer pair used by `FaqAccordion` and FAQPage JSON-LD. */
export type Faq = { q: string; a: string };

/** A single "value + label" metric (e.g. "3× · Faster load times"). */
export type Metric = { value: string; label: string };

/** An icon + title + body triple — the shared shape behind `IconCard`. */
export type Feature = { icon: string; title: string; body: string };

/**
 * Base fields every slug-keyed detail record shares. Individual collections
 * extend this with their own domain fields.
 */
export type DetailRecord = {
  /** URL segment — unique within its collection. */
  slug: string;
  /** Short label used in navigation and related-item cards. */
  label: string;
  /** Full page heading (may be longer/more descriptive than `label`). */
  title: string;
  /** Icon key. */
  icon: string;
  /** One-line description shown in menus and card grids. */
  summary: string;
};

/** A service offering with a static detail page at `/services/[slug]`. */
export type ServiceRecord = DetailRecord & {
  /** Mega-menu category this service is grouped under. */
  category: string;
  /** Hero lead paragraph on the detail page. */
  intro: string;
  /** Opening body paragraph beneath the hero. */
  overview: string;
  /** What the service includes — rendered as a capability card grid. */
  capabilities: Feature[];
  /** Business problems this service solves — rendered as a card grid. */
  problems?: Feature[];
  /** Technology names rendered as a chip cloud. */
  technologies?: string[];
  /** Business benefits / outcomes — rendered as a card grid. */
  benefits?: Feature[];
  /** Industry slugs this service commonly serves (links to `/industries/[slug]`). */
  industries?: string[];
  /** Case-study slugs to feature (links to `/case-studies/[slug]`). */
  caseStudies?: string[];
  /** Optional per-service FAQs. */
  faqs?: Faq[];
};
