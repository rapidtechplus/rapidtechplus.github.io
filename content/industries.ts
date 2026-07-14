/**
 * Industries collection. `industrySectors` are the ten sector records that
 * drive the Industries mega-menu panel and their statically-exported
 * `/industries/[slug]` detail pages (Phase D). Each record carries enough copy
 * for its own page (intro, overview, capabilities). `industries` are the broader
 * audience segments shown on the homepage and the `/industries` hub grid — kept
 * distinct so no copy is lost. Both live in one module.
 */

import type { MegaItem, DetailRecord, Feature, Faq } from "@/content/types";

/** A sector with a static detail page at `/industries/[slug]`. */
export type IndustrySector = DetailRecord & {
  /** Hero lead paragraph on the detail page. */
  intro: string;
  /** Opening body paragraph beneath the hero. */
  overview: string;
  /** What we build for the sector — rendered as the capability panel. */
  capabilities: Feature[];
};

export const industrySectors: IndustrySector[] = [
  {
    slug: "healthcare",
    label: "Healthcare",
    title: "Healthcare",
    icon: "heart-pulse",
    summary: "Compliant patient & clinical tools",
    intro:
      "Software for healthcare that puts patient safety, privacy, and clinical accuracy first — built to fit the way care teams actually work.",
    overview:
      "We build patient portals, clinical tools, and health platforms with compliance and data protection designed in from the start. From intake to reporting, every workflow is engineered for correctness, auditability, and the reliability that healthcare demands.",
    capabilities: [
      { icon: "shield-check", title: "Compliance & privacy", body: "Access controls, audit trails, and data handling built for sensitive health records." },
      { icon: "heart-pulse", title: "Clinical workflows", body: "Patient portals, scheduling, and care tools shaped around real clinical practice." },
      { icon: "arrow-left-right", title: "Systems integration", body: "Secure connections to the health systems and data standards your teams rely on." },
    ],
  },
  {
    slug: "fintech",
    label: "FinTech",
    title: "FinTech",
    icon: "landmark",
    summary: "Secure, correct financial apps",
    intro:
      "Financial software where correctness and security are non-negotiable — payments, dashboards, and platforms your customers can trust.",
    overview:
      "We build fintech products with careful attention to correctness, security, and integration: robust money-movement logic, hardened access, and clean connections to payment providers and financial data — engineered so every transaction is accurate and traceable.",
    capabilities: [
      { icon: "shield-check", title: "Security by default", body: "Hardened authentication, encryption, and access controls throughout." },
      { icon: "list-checks", title: "Correctness first", body: "Rigorous handling of money movement, reconciliation, and edge cases." },
      { icon: "arrow-left-right", title: "Payments & data", body: "Well-documented integrations with payment providers and financial data sources." },
    ],
  },
  {
    slug: "retail-ecommerce",
    label: "Retail & eCommerce",
    title: "Retail & eCommerce",
    icon: "shopping-cart",
    summary: "Storefronts and back-office",
    intro:
      "Fast, conversion-focused storefronts and the back-office tools behind them — built to sell and to scale through peak demand.",
    overview:
      "We build storefronts, catalogs, and operational tooling that stay fast under load and easy to manage. From checkout to fulfilment and inventory, we engineer commerce experiences that convert and back-office systems that keep the business running.",
    capabilities: [
      { icon: "zap", title: "Fast storefronts", body: "Conversion-focused, high-performance shopping experiences with great Core Web Vitals." },
      { icon: "layout-dashboard", title: "Back-office tools", body: "Catalog, order, and inventory tooling that keeps operations smooth." },
      { icon: "arrow-left-right", title: "Commerce integrations", body: "Payments, shipping, and ERP connections that fit your stack." },
    ],
  },
  {
    slug: "manufacturing",
    label: "Manufacturing",
    title: "Manufacturing",
    icon: "factory",
    summary: "Operations & process tooling",
    intro:
      "Operational software for manufacturing — the tools and automation that streamline production, tracking, and the day-to-day flow of work.",
    overview:
      "We build internal platforms, tracking systems, and process automation tailored to how your operation runs. From the shop floor to reporting, we engineer tools that reduce manual work, surface the right data, and connect to the systems already in place.",
    capabilities: [
      { icon: "blocks", title: "Operations platforms", body: "Custom tools that model production, inventory, and process the way you work." },
      { icon: "workflow", title: "Process automation", body: "Automation that removes repetitive, error-prone manual steps." },
      { icon: "activity", title: "Tracking & reporting", body: "Real-time visibility into throughput, status, and operational metrics." },
    ],
  },
  {
    slug: "education",
    label: "Education",
    title: "Education",
    icon: "graduation-cap",
    summary: "Learning platforms and LMS",
    intro:
      "Learning platforms and education software that make teaching, learning, and administration work smoothly for everyone involved.",
    overview:
      "We build LMS platforms, course tools, and student systems that are accessible, engaging, and easy to administer. From enrolment to assessment, we engineer education experiences that scale to many learners without losing usability.",
    capabilities: [
      { icon: "graduation-cap", title: "Learning platforms", body: "Course delivery, progress tracking, and assessment tools built to engage." },
      { icon: "users", title: "Student & admin systems", body: "Enrolment, records, and administration workflows that stay simple to run." },
      { icon: "monitor-smartphone", title: "Accessible everywhere", body: "Inclusive, responsive experiences that work on any device." },
    ],
  },
  {
    slug: "real-estate",
    label: "Real Estate",
    title: "Real Estate",
    icon: "house",
    summary: "Listings, CRMs, and portals",
    intro:
      "Property software — listings, CRMs, and client portals — that connect buyers, sellers, and agents on fast, searchable platforms.",
    overview:
      "We build listing platforms, agent CRMs, and client portals with rich search, media, and workflow at their core. From lead capture to closing, we engineer real-estate tools that keep every party informed and every deal moving.",
    capabilities: [
      { icon: "house", title: "Listings & search", body: "Rich, fast property search with media, maps, and filtering." },
      { icon: "briefcase", title: "CRM & pipelines", body: "Lead capture and deal workflows tailored to how agents work." },
      { icon: "users", title: "Client portals", body: "Portals that keep buyers, sellers, and agents in sync." },
    ],
  },
  {
    slug: "hospitality",
    label: "Hospitality",
    title: "Hospitality",
    icon: "concierge-bell",
    summary: "Guest and property platforms",
    intro:
      "Guest and property platforms for hospitality — software that makes every stay smoother from booking through checkout.",
    overview:
      "We build booking, guest-experience, and property-management tools designed around the guest journey and the teams behind it. We engineer hospitality software that reduces friction for guests and gives staff the operational clarity they need.",
    capabilities: [
      { icon: "concierge-bell", title: "Guest experience", body: "Booking and guest-facing tools that make every stay seamless." },
      { icon: "layout-dashboard", title: "Property management", body: "Operational platforms that give staff clarity and control." },
      { icon: "arrow-left-right", title: "Channel integrations", body: "Connections to booking channels, payments, and property systems." },
    ],
  },
  {
    slug: "travel",
    label: "Travel",
    title: "Travel",
    icon: "plane",
    summary: "Booking and itinerary systems",
    intro:
      "Booking and itinerary software for travel — reliable systems that handle complex trips, real-time availability, and busy peaks.",
    overview:
      "We build booking engines, itinerary tools, and travel platforms that stay accurate and fast when it matters most. From search to confirmation, we engineer travel software that handles complexity behind the scenes and stays simple for the traveller.",
    capabilities: [
      { icon: "plane", title: "Booking engines", body: "Search, availability, and reservation flows that stay accurate at scale." },
      { icon: "workflow", title: "Itinerary management", body: "Tools that assemble and manage complex, multi-leg trips." },
      { icon: "arrow-left-right", title: "Provider integrations", body: "Connections to inventory, payments, and travel data providers." },
    ],
  },
  {
    slug: "food-beverage",
    label: "Food & Beverage",
    title: "Food & Beverage",
    icon: "utensils",
    summary: "Ordering and supply platforms",
    intro:
      "Ordering and supply software for food & beverage — platforms that connect kitchens, customers, and suppliers reliably.",
    overview:
      "We build ordering platforms, supply tools, and operational systems tuned for the pace of food service. From online ordering to inventory and supply, we engineer software that keeps orders flowing and operations coordinated.",
    capabilities: [
      { icon: "utensils", title: "Ordering platforms", body: "Fast, reliable online and in-store ordering experiences." },
      { icon: "truck", title: "Supply & inventory", body: "Tools that keep stock, suppliers, and fulfilment in sync." },
      { icon: "workflow", title: "Operations automation", body: "Automation that streamlines the busy day-to-day of food service." },
    ],
  },
  {
    slug: "cleantech",
    label: "Cleantech",
    title: "Cleantech",
    icon: "leaf",
    summary: "Sustainability & energy software",
    intro:
      "Sustainability and energy software for cleantech — data-driven platforms that measure, monitor, and optimise for a lower-impact future.",
    overview:
      "We build monitoring, analytics, and management platforms for energy and sustainability. From sensor data to reporting, we engineer cleantech software that turns complex environmental and energy data into clear insight and action.",
    capabilities: [
      { icon: "leaf", title: "Sustainability platforms", body: "Tools that measure, track, and report environmental impact." },
      { icon: "activity", title: "Monitoring & analytics", body: "Real-time data pipelines and analytics for energy and resources." },
      { icon: "gauge", title: "Optimisation", body: "Insight that drives efficiency and lower consumption." },
    ],
  },
];

/**
 * Shared industry FAQs — how we approach domain work, compliance, and delivery.
 * Rendered on every `/industries/[slug]` page.
 */
export const industryFaqs: Faq[] = [
  {
    q: "Do you have experience in our specific industry?",
    a: "We build across sectors and start every engagement by learning your domain — its users, workflows, constraints, and regulations. Deep discovery up front means the software fits your industry, not a generic template.",
  },
  {
    q: "How do you handle industry compliance and security?",
    a: "We design compliance and data protection in from the start rather than bolting them on later — appropriate access controls, encryption, audit trails, and secure integrations for the standards your sector requires.",
  },
  {
    q: "Can you integrate with the systems we already use?",
    a: "Yes. We build secure, well-documented integrations to the platforms, data providers, and internal systems your industry relies on, so new software works with your existing stack rather than replacing all of it.",
  },
  {
    q: "How do you get up to speed on our domain?",
    a: "Through structured discovery: we interview your team, map real workflows, and validate our understanding before writing production code — so decisions are grounded in how your business actually operates.",
  },
];

/** Fast slug → record lookup for the detail route. */
const bySlug = new Map(industrySectors.map((s) => [s.slug, s]));

/** All sector slugs — powers `generateStaticParams` and the sitemap. */
export const industrySlugs = industrySectors.map((s) => s.slug);

/** Look up a single sector by slug (undefined → the route calls notFound). */
export function getIndustry(slug: string): IndustrySector | undefined {
  return bySlug.get(slug);
}

/** Other sectors — used by the "related" grid on each detail page. */
export function relatedIndustries(slug: string, limit = 3): IndustrySector[] {
  return industrySectors.filter((s) => s.slug !== slug).slice(0, limit);
}

/**
 * Industries mega-menu entry (flat panel), derived from the sector collection.
 * Each link resolves to its real `/industries/[slug]` detail page.
 */
export const industriesMenu: MegaItem = {
  label: "Industries",
  href: "/industries",
  flat: true,
  links: industrySectors.map((s) => ({
    label: s.label,
    href: `/industries/${s.slug}`,
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
