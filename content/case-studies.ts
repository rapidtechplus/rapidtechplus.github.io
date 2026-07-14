/**
 * Case studies collection. Slug-keyed study records power the `/case-studies`
 * hub grid (and gain `/case-studies/[slug]` detail pages in Phase G). The
 * mega-menu panel is a set of category filter links derived alongside them.
 */

import type { MegaItem, Metric } from "@/content/types";

export type CaseStudy = {
  slug: string;
  icon: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  metrics: Metric[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "payments-platform-rebuilt-for-scale",
    icon: "landmark",
    title: "Payments platform rebuilt for scale",
    client: "FinTech scaleup",
    category: "FinTech",
    summary:
      "Re-platformed a legacy payments dashboard into a fast, multi-tenant system with real-time reconciliation and audit-grade correctness.",
    metrics: [
      { value: "3×", label: "Faster load times" },
      { value: "99.9%", label: "Uptime at launch" },
    ],
  },
  {
    slug: "ai-agent-triages-support-at-scale",
    icon: "bot",
    title: "AI agent that triages support at scale",
    client: "SaaS company",
    category: "AI & Automation",
    summary:
      "Shipped a retrieval-grounded AI agent wired into the product and knowledge base, deflecting routine tickets and routing the rest.",
    metrics: [
      { value: "40%", label: "Tickets deflected" },
      { value: "24/7", label: "First-response cover" },
    ],
  },
  {
    slug: "headless-storefront-for-a-growing-retailer",
    icon: "shopping-cart",
    title: "Headless storefront for a growing retailer",
    client: "Retail brand",
    category: "Retail & eCommerce",
    summary:
      "Designed and built a headless commerce storefront with fast search, streamlined checkout, and an operations back office.",
    metrics: [
      { value: "+28%", label: "Conversion lift" },
      { value: "0.9s", label: "Median page load" },
    ],
  },
  {
    slug: "operations-automation-for-logistics",
    icon: "truck",
    title: "Operations automation for logistics",
    client: "Logistics operator",
    category: "Automation",
    summary:
      "Replaced manual, spreadsheet-driven workflows with automated pipelines and dashboards that surface exceptions in real time.",
    metrics: [
      { value: "12h", label: "Saved per week" },
      { value: "−65%", label: "Manual errors" },
    ],
  },
  {
    slug: "clinical-portal-for-a-healthcare-provider",
    icon: "heart-pulse",
    title: "Clinical portal for a healthcare provider",
    client: "Healthcare provider",
    category: "Healthcare",
    summary:
      "Built a compliant patient and clinician portal with secure records, scheduling, and integrations to existing systems.",
    metrics: [
      { value: "HIPAA", label: "Aligned by design" },
      { value: "4.8★", label: "User satisfaction" },
    ],
  },
  {
    slug: "multi-tenant-saas-from-mvp-to-scale",
    icon: "layout-dashboard",
    title: "Multi-tenant SaaS from MVP to scale",
    client: "B2B SaaS startup",
    category: "SaaS Platforms",
    summary:
      "Took a SaaS product from first MVP to a billing-ready, role-based platform engineered to grow with the business.",
    metrics: [
      { value: "6 wks", label: "To first launch" },
      { value: "10×", label: "Headroom to scale" },
    ],
  },
];

/** Category filter links shown in the Case Studies mega-menu (flat panel). */
export const caseStudiesMenu: MegaItem = {
  label: "Case Studies",
  href: "/case-studies",
  flat: true,
  overview: "Explore all case studies",
  links: [
    { label: "FinTech Platforms", href: "/case-studies", icon: "landmark", desc: "Secure, correct financial products" },
    { label: "Healthcare Systems", href: "/case-studies", icon: "heart-pulse", desc: "Compliant patient & clinical tools" },
    { label: "Retail & eCommerce", href: "/case-studies", icon: "shopping-cart", desc: "Storefronts and back-office" },
    { label: "Logistics & Operations", href: "/case-studies", icon: "truck", desc: "Automation for daily workflows" },
    { label: "AI & Automation", href: "/case-studies", icon: "bot", desc: "Agents and workflow automation" },
    { label: "SaaS Platforms", href: "/case-studies", icon: "layout-dashboard", desc: "Multi-tenant products at scale" },
    { label: "Web Applications", href: "/case-studies", icon: "app-window", desc: "Bespoke, high-performance apps" },
    { label: "Modernization", href: "/case-studies", icon: "refresh-cw", desc: "Legacy re-platforming, de-risked" },
  ],
};
