import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    // `/home-preview` is the review-only homepage variant (also noindex).
    rules: { userAgent: "*", allow: "/", disallow: "/home-preview/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
