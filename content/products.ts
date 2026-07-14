/**
 * Products collection. Slug-keyed records for the `/products` hub grid (and
 * the future `/products/[slug]` detail pages in Phase F). These are the kinds
 * of products we build; named flagship products are modelled in Phase F.
 */

import type { DetailRecord } from "@/content/types";

export type ProductRecord = DetailRecord & { body: string };

export const productRecords: ProductRecord[] = [
  {
    slug: "web-platforms",
    label: "Web Platforms",
    title: "Web Platforms",
    icon: "app-window",
    summary: "Customer-facing platforms and marketplaces",
    body: "Customer-facing platforms and marketplaces with clean UX and scalable architecture.",
  },
  {
    slug: "saas-applications",
    label: "SaaS Applications",
    title: "SaaS Applications",
    icon: "layout-dashboard",
    summary: "Subscription products with dashboards and roles",
    body: "Subscription products with dashboards, roles, and billing-ready foundations.",
  },
  {
    slug: "internal-tools",
    label: "Internal Tools",
    title: "Internal Tools",
    icon: "wrench",
    summary: "Admin panels and operational tooling",
    body: "Admin panels and operational tooling that streamline day-to-day business.",
  },
  {
    slug: "integration-systems",
    label: "Integration Systems",
    title: "Integration Systems",
    icon: "arrow-left-right",
    summary: "Middleware and API layers",
    body: "Middleware and API layers that connect the services a business depends on.",
  },
  {
    slug: "landing-marketing-sites",
    label: "Landing & Marketing Sites",
    title: "Landing & Marketing Sites",
    icon: "globe",
    summary: "Fast, polished, SEO-friendly sites",
    body: "Fast, polished, SEO-friendly sites that represent brands with credibility.",
  },
  {
    slug: "automation-solutions",
    label: "Automation Solutions",
    title: "Automation Solutions",
    icon: "workflow",
    summary: "Workflow automation that removes manual work",
    body: "Workflow automation that removes repetitive manual work and reduces errors.",
  },
];

/** Cards shown on the `/products` hub, in order. */
export const products = productRecords.map((p) => ({
  icon: p.icon,
  title: p.title,
  body: p.body,
}));
