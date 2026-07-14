/**
 * Industries collection. `industrySectors` are the ten sector records that
 * drive the Industries mega-menu panel (and gain `/industries/[slug]` detail
 * pages in Phase D). `industries` are the broader audience segments shown on
 * the homepage and the `/industries` hub grid — kept distinct so no copy is
 * lost. Both live in one module.
 */

import type { MegaItem, DetailRecord } from "@/content/types";

export type IndustrySector = DetailRecord;

export const industrySectors: IndustrySector[] = [
  { slug: "healthcare", label: "Healthcare", title: "Healthcare", icon: "heart-pulse", summary: "Compliant patient & clinical tools" },
  { slug: "fintech", label: "FinTech", title: "FinTech", icon: "landmark", summary: "Secure, correct financial apps" },
  { slug: "retail-ecommerce", label: "Retail & eCommerce", title: "Retail & eCommerce", icon: "shopping-cart", summary: "Storefronts and back-office" },
  { slug: "manufacturing", label: "Manufacturing", title: "Manufacturing", icon: "factory", summary: "Operations & process tooling" },
  { slug: "education", label: "Education", title: "Education", icon: "graduation-cap", summary: "Learning platforms and LMS" },
  { slug: "real-estate", label: "Real Estate", title: "Real Estate", icon: "house", summary: "Listings, CRMs, and portals" },
  { slug: "hospitality", label: "Hospitality", title: "Hospitality", icon: "concierge-bell", summary: "Guest and property platforms" },
  { slug: "travel", label: "Travel", title: "Travel", icon: "plane", summary: "Booking and itinerary systems" },
  { slug: "food-beverage", label: "Food & Beverage", title: "Food & Beverage", icon: "utensils", summary: "Ordering and supply platforms" },
  { slug: "cleantech", label: "Cleantech", title: "Cleantech", icon: "leaf", summary: "Sustainability & energy software" },
];

/**
 * Industries mega-menu entry (flat panel), derived from the sector collection.
 * Links resolve to the hub until per-industry detail pages ship (Phase D).
 */
export const industriesMenu: MegaItem = {
  label: "Industries",
  href: "/industries",
  flat: true,
  links: industrySectors.map((s) => ({
    label: s.label,
    href: "/industries",
    icon: s.icon,
    desc: s.summary,
  })),
};

/**
 * Audience segments shown on the homepage and the `/industries` hub. Broader
 * than the sector list above (which is technology/nav-oriented).
 */
export const industries = [
  {
    icon: "rocket",
    title: "Startups & Scaleups",
    body: "MVPs and production platforms built to validate fast and scale cleanly as you grow.",
  },
  {
    icon: "layout-dashboard",
    title: "SaaS & Software",
    body: "Multi-tenant products, dashboards, and developer tooling engineered for reliability.",
  },
  {
    icon: "shopping-cart",
    title: "E-commerce & Retail",
    body: "Storefronts, catalogs, and back-office tools with fast, conversion-focused experiences.",
  },
  {
    icon: "landmark",
    title: "Fintech",
    body: "Secure, well-integrated financial applications with careful attention to correctness.",
  },
  {
    icon: "truck",
    title: "Logistics & Operations",
    body: "Internal tools and automation that streamline day-to-day operational workflows.",
  },
  {
    icon: "briefcase",
    title: "Professional Services",
    body: "Client portals, booking systems, and custom platforms tailored to service businesses.",
  },
] as const;
