/**
 * The Open Graph image set, one entry per page *template*.
 *
 * Next's metadata files cascade, so an `opengraph-image.png` in a segment
 * covers that segment and everything nested under it — `app/services/` therefore
 * also serves every `/services/[slug]` detail page. That is why this is keyed by
 * template rather than by page: ~10 images cover 100+ routes, where per-slug
 * images would add megabytes of PNGs to the repo for a marginally better title.
 *
 * Consumed only by `scripts/generate-og.tsx` (`npm run og:generate`), never at
 * build or request time — see that script for why these are committed.
 */
export type OgTemplate = {
  /** Directory under `app/`, `""` for the root (home) image. */
  dir: string;
  title: string;
  eyebrow: string;
};

/**
 * The OG image a section's pages should advertise.
 *
 * Detail routes need this explicitly. Declaring `openGraph` in a page's
 * `generateMetadata` *replaces* the inherited object rather than merging into
 * it, so the segment's `opengraph-image.png` is dropped and the page ships a
 * `summary_large_image` card with no image — worse than no card at all. Hub
 * pages declare no `openGraph`, so the cascade still covers them.
 */
export const ogImageFor = (dir: string) => `/${dir}/opengraph-image.png`;

export const ogTemplates: OgTemplate[] = [
  // Not the slogan — the card's footer already carries it, and repeating it
  // reads as a rendering bug.
  {
    dir: "",
    title: "Modern software products & digital systems",
    eyebrow: "Software Studio",
  },
  {
    dir: "ai",
    title: "AI agents, LLM integration & intelligent automation",
    eyebrow: "Artificial Intelligence",
  },
  {
    dir: "services",
    title: "Everything you need to build and scale software",
    eyebrow: "Services",
  },
  {
    dir: "hire",
    title: "Hire vetted engineers for your team",
    eyebrow: "Hire Experts",
  },
  {
    dir: "solutions",
    title: "Outcome-focused solutions for growing businesses",
    eyebrow: "Solutions",
  },
  {
    dir: "industries",
    title: "Software engineering across regulated industries",
    eyebrow: "Industries",
  },
  {
    dir: "technologies",
    title: "The stack we build production systems on",
    eyebrow: "Technologies",
  },
  {
    dir: "case-studies",
    title: "Proof of delivery, measured in outcomes",
    eyebrow: "Case Studies",
  },
  {
    dir: "blog",
    title: "Engineering notes, patterns & practice",
    eyebrow: "Insights",
  },
  {
    dir: "products",
    title: "Products built by Rapid Tech Plus",
    eyebrow: "Products",
  },
  { dir: "about", title: "The studio behind the software", eyebrow: "Company" },
  {
    dir: "careers",
    title: "Build ambitious software with us",
    eyebrow: "Careers",
  },
  { dir: "contact", title: "Tell us what you're building", eyebrow: "Contact" },
];
