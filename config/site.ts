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
