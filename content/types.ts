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

export type MegaColumn = { title: string; links: NavLink[] };

/** Top-level navigation entry — a plain link, or a mega-menu panel. */
export type MegaItem = {
  label: string;
  href: string;
  columns?: MegaColumn[];
  links?: NavLink[];
  flat?: boolean;
  compact?: boolean;
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
  /** Case-study slugs to feature (links to `/case-studies`). */
  caseStudies?: string[];
  /** Optional per-service FAQs. */
  faqs?: Faq[];
};
