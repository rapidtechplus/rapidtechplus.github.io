/**
 * Shared, cross-cutting constants. Per the CLAUDE.md folder standards,
 * configuration values live here (not scattered as inline literals) so a single
 * edit updates every consumer.
 */

/** Canonical production origin. Used for canonical URLs and JSON-LD `item`s. */
export const SITE_URL = "https://rapidtechplus.github.io";

/** The single conversion destination used by primary CTAs across the site. */
export const CONTACT_HREF = "/contact";

/** Default `changeFrequency` for generated sitemap entries. */
export const SITEMAP_CHANGE_FREQUENCY = "monthly" as const;

/**
 * Label of the primary conversion action everywhere it appears — header,
 * hero, paired CTAs, closing banner — so the wording changes in one place.
 */
export const CTA_LABEL = "Start a project";

/** The two homepage compositions kept side by side (see `app/page.tsx`). */
export type HomeVariant = "concept" | "classic";

/**
 * Which homepage is live at `/`: "concept" (Phase 40 enterprise-light) or
 * "classic" (Phase 39 navy hero). The other one is served at `/home-preview`
 * (noindex, not in the sitemap) so both can be compared until one is kept.
 */
export const HOME_VARIANT: HomeVariant = "concept";

export const HOME_VARIANT_LABELS: Record<HomeVariant, string> = {
  concept: "enterprise-light concept (Phase 40)",
  classic: "classic (Phase 39)",
};
