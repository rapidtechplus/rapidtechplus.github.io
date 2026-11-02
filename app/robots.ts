import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    // Review-only design previews, also noindex and absent from the sitemap:
    // `/home-preview` (the other v1 homepage variant) and `/v2` (the v2 design).
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/home-preview/", "/v2/"],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
