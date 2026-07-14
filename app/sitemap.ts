import type { MetadataRoute } from "next";
import { SITE_URL, SITEMAP_CHANGE_FREQUENCY } from "@/config/site";
import { serviceSlugs } from "@/content/services";
import { hireSlugs } from "@/content/hire";
import { industrySlugs } from "@/content/industries";
import { solutionSlugs } from "@/content/solutions";

export const dynamic = "force-static";

/** Static hub/landing routes. */
const staticRoutes = [
  "",
  "/about",
  "/careers",
  "/our-process",
  "/open-source",
  "/services",
  "/hire",
  "/solutions",
  "/products",
  "/case-studies",
  "/industries",
  "/technologies",
  "/blog",
  "/contact",
  "/privacy",
  "/terms",
  "/cookies",
  "/sitemap",
];

/**
 * Slug routes derived from the content collections — adding a record to a
 * collection adds its sitemap URL automatically, with no edit here.
 */
const collectionRoutes = [
  ...serviceSlugs.map((slug) => `/services/${slug}`),
  ...hireSlugs.map((slug) => `/hire/${slug}`),
  ...industrySlugs.map((slug) => `/industries/${slug}`),
  ...solutionSlugs.map((slug) => `/solutions/${slug}`),
];

const routes = [...staticRoutes, ...collectionRoutes];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${SITE_URL}${route}/`.replace(/\/+$/, "/"),
    lastModified,
    changeFrequency: SITEMAP_CHANGE_FREQUENCY,
    priority: route === "" ? 1 : 0.7,
  }));
}
