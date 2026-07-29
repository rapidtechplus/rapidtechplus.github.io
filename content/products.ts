/**
 * Products collection. Slug-keyed records that drive the `/products` hub grid
 * and their statically-exported `/products/[slug]` detail pages (Phase F).
 * These are the kinds of products we build; each record carries enough copy for
 * its own page (intro, overview, capabilities) plus a shared FAQ set and the
 * `productSlugs` / `getProduct` / `relatedProducts` helpers, mirroring the
 * services / industries collection pattern.
 */

import type { DetailRecord, Feature, Faq } from "@/content/types";

/** A product category with a static detail page at `/products/[slug]`. */
export type ProductRecord = DetailRecord & {
  /** Longer description shown on the `/products` hub card. */
  body: string;
  /** Hero lead paragraph on the detail page. */
  intro: string;
  /** Opening body paragraph beneath the hero. */
  overview: string;
  /** What we build — rendered as the capability panel. */
  capabilities: Feature[];
};

export const productRecords: ProductRecord[] = [
  {
    slug: "web-platforms",
    label: "Web Platforms",
    title: "Web Platforms",
    icon: "app-window",
    summary: "Customer-facing platforms and marketplaces",
    body: "Customer-facing platforms and marketplaces with clean UX and scalable architecture.",
    intro:
      "Customer-facing web platforms and marketplaces — engineered for clean UX, fast performance, and an architecture that scales with your business.",
    overview:
      "We design and build web platforms that put the customer experience first: intuitive interfaces backed by robust, well-structured systems. From multi-sided marketplaces to portals and community products, every platform is built to stay fast under load, easy to extend, and simple to operate as you grow.",
    capabilities: [
      { icon: "layout-dashboard", title: "Customer-facing UX", body: "Polished, accessible interfaces designed around real user journeys and conversion." },
      { icon: "blocks", title: "Scalable architecture", body: "Well-structured foundations that stay fast and maintainable as traffic and features grow." },
      { icon: "arrow-left-right", title: "Marketplace mechanics", body: "Multi-sided flows, listings, search, and transactions engineered for correctness." },
    ],
  },
  {
    slug: "saas-applications",
    label: "SaaS Applications",
    title: "SaaS Applications",
    icon: "layout-dashboard",
    summary: "Subscription products with dashboards and roles",
    body: "Subscription products with dashboards, roles, and billing-ready foundations.",
    intro:
      "Subscription software built to grow — multi-tenant SaaS applications with dashboards, roles, and billing-ready foundations from day one.",
    overview:
      "We build SaaS products end to end: secure multi-tenancy, role-based access, analytics dashboards, and clean integration points for billing and third-party services. Whether it's a first MVP or a maturing platform, we engineer for reliability, so the product stays dependable as your user base and feature set expand.",
    capabilities: [
      { icon: "users", title: "Multi-tenant & roles", body: "Secure tenant isolation and role-based access designed in from the start." },
      { icon: "activity", title: "Dashboards & analytics", body: "Clear, actionable dashboards that surface the metrics your users and team need." },
      { icon: "shield-check", title: "Billing-ready foundations", body: "Clean integration points for subscriptions, plans, and payment providers." },
    ],
  },
  {
    slug: "internal-tools",
    label: "Internal Tools",
    title: "Internal Tools",
    icon: "wrench",
    summary: "Admin panels and operational tooling",
    body: "Admin panels and operational tooling that streamline day-to-day business.",
    intro:
      "Admin panels and operational tooling that streamline the day-to-day — internal software shaped around how your team actually works.",
    overview:
      "We build the internal tools that keep operations running: admin consoles, back-office dashboards, and workflow tooling tailored to your processes. By replacing spreadsheets and manual steps with purpose-built software, we help teams move faster, reduce errors, and get reliable visibility into the systems they depend on.",
    capabilities: [
      { icon: "layout-dashboard", title: "Admin consoles", body: "Purpose-built panels for managing data, users, and operations with confidence." },
      { icon: "workflow", title: "Workflow tooling", body: "Software that models your real processes and removes repetitive manual work." },
      { icon: "activity", title: "Operational visibility", body: "Reporting and dashboards that surface the right data to the right people." },
    ],
  },
  {
    slug: "integration-systems",
    label: "Integration Systems",
    title: "Integration Systems",
    icon: "arrow-left-right",
    summary: "Middleware and API layers",
    body: "Middleware and API layers that connect the services a business depends on.",
    intro:
      "Middleware and API layers that connect the services your business depends on — reliable integration systems that keep data flowing correctly.",
    overview:
      "We build the connective tissue between systems: APIs, middleware, and data pipelines that move information reliably between the tools your business runs on. With careful attention to error handling, idempotency, and observability, we engineer integrations that stay dependable even as the systems on either end change.",
    capabilities: [
      { icon: "arrow-left-right", title: "APIs & middleware", body: "Well-documented API layers and middleware that connect your services cleanly." },
      { icon: "list-checks", title: "Reliable data flow", body: "Careful error handling, retries, and idempotency so data stays consistent." },
      { icon: "activity", title: "Observability", body: "Logging and monitoring built in, so integration issues surface early." },
    ],
  },
  {
    slug: "landing-marketing-sites",
    label: "Landing & Marketing Sites",
    title: "Landing & Marketing Sites",
    icon: "globe",
    summary: "Fast, polished, SEO-friendly sites",
    body: "Fast, polished, SEO-friendly sites that represent brands with credibility.",
    intro:
      "Fast, polished, SEO-friendly sites that represent your brand with credibility — marketing sites engineered for performance and search.",
    overview:
      "We build marketing and landing sites that load fast, rank well, and convert. With excellent Core Web Vitals, thoughtful SEO, and design that reflects the quality of your brand, these sites work as a dependable front door — accessible, responsive, and easy to update as your messaging evolves.",
    capabilities: [
      { icon: "zap", title: "Performance-first", body: "Excellent Core Web Vitals and fast loads that keep visitors engaged." },
      { icon: "search", title: "SEO-friendly", body: "Clean structure, metadata, and semantics that help pages rank and get found." },
      { icon: "pen-tool", title: "Brand-quality design", body: "Polished, responsive design that represents your brand with credibility." },
    ],
  },
  {
    slug: "automation-solutions",
    label: "Automation Solutions",
    title: "Automation Solutions",
    icon: "workflow",
    summary: "Workflow automation that removes manual work",
    body: "Workflow automation that removes repetitive manual work and reduces errors.",
    intro:
      "Workflow automation that removes repetitive manual work and reduces errors — software that lets your team focus on what matters.",
    overview:
      "We identify the repetitive, error-prone steps in your operations and replace them with dependable automation: scheduled jobs, event-driven workflows, and integrations that move work forward without manual intervention. The result is fewer mistakes, faster turnaround, and a team freed to focus on higher-value work.",
    capabilities: [
      { icon: "workflow", title: "Process automation", body: "Automate repetitive, error-prone steps across your day-to-day operations." },
      { icon: "arrow-left-right", title: "Event-driven flows", body: "Triggers and integrations that move work forward without manual steps." },
      { icon: "list-checks", title: "Fewer errors", body: "Consistent, auditable execution that reduces mistakes and rework." },
    ],
  },
];

/** Shared FAQs rendered on every product detail page. */
export const productFaqs: Faq[] = [
  {
    q: "Do you build products from scratch or improve existing ones?",
    a: "Both. We build new products from first MVP to production, and we also take on existing codebases — improving, extending, or re-architecting them where it makes sense.",
  },
  {
    q: "Who owns the code you build?",
    a: "You do. Everything we build is delivered to you with full ownership and access — source code, infrastructure, and documentation — with no lock-in to us.",
  },
  {
    q: "How do you keep products maintainable as they grow?",
    a: "We favour clean architecture, TypeScript strictness, reusable components, and clear documentation, so the product stays easy to extend and hand over as it scales.",
  },
  {
    q: "Can you work with our existing stack and integrations?",
    a: "Yes. We adapt to the tools and services your business already relies on, and build clean integration points rather than forcing a rewrite.",
  },
  {
    q: "How do we get started?",
    a: "Tell us what you're building via the contact page. The first consultation is free, and we typically reply within one business day to help you plan the right approach.",
  },
];

/** Slugs for `generateStaticParams` and the machine sitemap. */
export const productSlugs = productRecords.map((p) => p.slug);

/** Look up a product record by slug. */
export const getProduct = (slug: string): ProductRecord | undefined =>
  productRecords.find((p) => p.slug === slug);

/** Other products, for the related grid (excludes the current one). */
export const relatedProducts = (slug: string): ProductRecord[] =>
  productRecords.filter((p) => p.slug !== slug).slice(0, 3);

/** Cards shown on the `/products` hub, in order. */
export const products = productRecords.map((p) => ({
  slug: p.slug,
  icon: p.icon,
  title: p.title,
  body: p.body,
}));
