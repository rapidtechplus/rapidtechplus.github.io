import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

const routes = [
  "",
  "/about",
  "/services",
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

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${site.url}${route}/`.replace(/\/+$/, "/"),
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
