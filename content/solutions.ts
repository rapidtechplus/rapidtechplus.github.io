/**
 * Solutions collection. Slug-keyed records power the Solutions mega-menu panel,
 * the `/solutions` hub grid, and the statically-exported `/solutions/[slug]`
 * detail pages — all from one source. Each record carries a short `summary`
 * (menu) and a longer `body` (hub card), plus the `intro`, `overview`, and
 * `capabilities` its detail page renders, so there is no duplicated copy.
 *
 * The taxonomy is a set of eight outcome-focused categories. The mega menu
 * renders them as a three-column showcase: a category rail, the category's
 * solutions, and a featured panel. AI leads the taxonomy — but its links
 * resolve to the canonical `/ai/[slug]` pages rather than to solution records
 * of their own, so the site keeps a single home per AI capability (see the
 * Phase AI de-duplication note in the backlog).
 */

import { CONTACT_HREF } from "@/config/site";
import { aiCapabilities } from "@/content/ai";
import type {
  MegaColumn,
  NavLink,
  DetailRecord,
  Feature,
  Faq,
} from "@/content/types";

export type SolutionRecord = DetailRecord & {
  /** Mega-menu category grouping. */
  category: string;
  /** Longer description used on the hub card. */
  body: string;
  /** Hero lead paragraph on the detail page. */
  intro: string;
  /** Opening body paragraph beneath the hero. */
  overview: string;
  /** What the solution includes — rendered as a capability card grid. */
  capabilities: Feature[];
};

export const solutionRecords: SolutionRecord[] = [
  // ── Business Automation ────────────────────────────────────────────────
  // AI-led automation (agents, LLM, RAG, MCP, AI-driven decisions) lives in
  // `content/ai.ts` and is the canonical `/ai` section. Only rules-and-
  // integration automation belongs here, so the same capability is never
  // advertised from two places.
  {
    slug: "workflow-automation",
    category: "Business Automation",
    label: "Workflow Automation",
    title: "Workflow Automation",
    icon: "workflow",
    summary: "Remove repetitive manual steps",
    body: "Replace repetitive, error-prone manual steps with reliable automated pipelines that run around the clock.",
    intro:
      "Replace repetitive, error-prone manual steps with reliable automated pipelines that run around the clock.",
    overview:
      "We map the manual, repetitive steps eating your team's time and replace them with reliable automated workflows — triggered, monitored, and error-handled — so work flows through without copy-paste, missed handoffs, or late-night firefighting.",
    capabilities: [
      {
        icon: "workflow",
        title: "Automated pipelines",
        body: "End-to-end flows that trigger, transform, and route work without manual steps.",
      },
      {
        icon: "arrow-left-right",
        title: "System integration",
        body: "Your tools connected so data and tasks move between them automatically.",
      },
      {
        icon: "shield-check",
        title: "Reliable & monitored",
        body: "Error handling, alerts, and retries so automations keep running unattended.",
      },
    ],
  },
  {
    slug: "business-process-automation",
    category: "Business Automation",
    label: "Business Process Automation",
    title: "Business Process Automation",
    icon: "settings",
    summary: "Connect the tools your team uses",
    body: "Connect the tools your team already uses so information and tasks flow between them without copy-paste.",
    intro:
      "Connect the tools your team already uses so information and tasks flow between them without copy-paste.",
    overview:
      "We automate whole business processes across the tools you already run — CRM, finance, support, ops — so information and approvals flow end to end. Fewer handoffs, fewer errors, and a clear view of every process as it runs.",
    capabilities: [
      {
        icon: "arrow-left-right",
        title: "Connected tools",
        body: "Integrations that keep your systems in sync so nothing is re-keyed by hand.",
      },
      {
        icon: "workflow",
        title: "End-to-end processes",
        body: "Approvals, notifications, and handoffs automated across the whole process, not one step.",
      },
      {
        icon: "gauge",
        title: "Visibility & control",
        body: "Dashboards and audit trails so you can see and improve how each process performs.",
      },
    ],
  },

  {
    slug: "document-automation",
    category: "Business Automation",
    label: "Document Automation",
    title: "Document Automation",
    icon: "file-text",
    summary: "Generate and route paperwork",
    body: "Generate, route, and file the documents your business runs on — contracts, quotes, invoices, and reports — without manual assembly.",
    intro:
      "Generate, route, and file the documents your business runs on — without manual assembly.",
    overview:
      "Contracts, quotes, invoices, and reports still eat hours of copy-paste in most businesses. We automate the whole path: documents generated from your real data, routed for approval, signed, and filed where they belong — consistent every time, and searchable afterwards.",
    capabilities: [
      {
        icon: "file-text",
        title: "Templated generation",
        body: "Documents built from live data, so every quote and contract is consistent and current.",
      },
      {
        icon: "workflow",
        title: "Approval & signing flows",
        body: "Review, sign-off, and e-signature routed automatically to the right people in the right order.",
      },
      {
        icon: "database",
        title: "Filed & findable",
        body: "Finished documents stored, indexed, and searchable instead of scattered across inboxes.",
      },
    ],
  },

  // ── Digital Transformation ─────────────────────────────────────────────
  {
    slug: "digital-transformation",
    category: "Digital Transformation",
    label: "Digital Transformation",
    title: "Digital Transformation",
    icon: "refresh-cw",
    summary: "Modernise how your business runs",
    body: "Rethink and rebuild the digital core of your business — processes, platforms, and experiences that move you forward.",
    intro:
      "Rethink and rebuild the digital core of your business — processes, platforms, and experiences that move you forward.",
    overview:
      "We help you modernise the digital core of your business — not one app, but the processes, platforms, and experiences behind them. We start from outcomes, prioritise ruthlessly, and deliver in increments so change is real and measurable, not a multi-year gamble.",
    capabilities: [
      {
        icon: "target",
        title: "Outcome-led roadmap",
        body: "A prioritised plan tied to business outcomes, not technology for its own sake.",
      },
      {
        icon: "refresh-cw",
        title: "Platform modernisation",
        body: "Processes and systems rebuilt on modern, maintainable foundations you can own.",
      },
      {
        icon: "gauge",
        title: "Incremental delivery",
        body: "Value shipped in stages so momentum and ROI show up early, not years out.",
      },
    ],
  },
  {
    slug: "legacy-system-modernization",
    category: "Digital Transformation",
    label: "Legacy System Modernization",
    title: "Legacy System Modernization",
    icon: "wrench",
    summary: "Retire risk, keep what works",
    body: "Re-platform and refactor ageing systems into fast, maintainable applications — without disrupting what already works.",
    intro:
      "Re-platform and refactor ageing systems into fast, maintainable applications — without disrupting what already works.",
    overview:
      "We modernise ageing systems without a risky big-bang rewrite: assess what to keep, strangle out the rest incrementally, and re-platform onto maintainable foundations — so you shed risk and cost while the business keeps running.",
    capabilities: [
      {
        icon: "wrench",
        title: "Assess & plan",
        body: "A clear picture of what to keep, refactor, or replace, with risk mapped up front.",
      },
      {
        icon: "refresh-cw",
        title: "Incremental migration",
        body: "Strangler-pattern rollouts that modernise piece by piece with no downtime.",
      },
      {
        icon: "shield-check",
        title: "Continuity preserved",
        body: "Behaviour and data protected so users see improvement, not disruption.",
      },
    ],
  },
  // ── Enterprise Solutions ───────────────────────────────────────────────
  {
    slug: "custom-business-solutions",
    category: "Enterprise Solutions",
    label: "Custom Business Solutions",
    title: "Custom Business Solutions",
    icon: "blocks",
    summary: "Software shaped to your process",
    body: "Bespoke software modelled on how your business actually works — internal tools, portals, and platforms, not templates.",
    intro:
      "Bespoke software modelled on how your business actually works — internal tools, portals, and platforms, not templates.",
    overview:
      "We build software around how your business actually operates — internal tools, customer portals, and operational platforms modelled on your real workflows. Clean architecture and strong typing throughout, so it fits today and stays easy to evolve.",
    capabilities: [
      {
        icon: "blocks",
        title: "Modelled on your process",
        body: "Applications shaped to your real workflows, not forced into an off-the-shelf template.",
      },
      {
        icon: "layout-dashboard",
        title: "Tools & portals",
        body: "Internal tools, dashboards, and customer portals that remove manual, spreadsheet-driven work.",
      },
      {
        icon: "refresh-cw",
        title: "Built to evolve",
        body: "Clean, well-tested code your team can own and extend as the business changes.",
      },
    ],
  },

  {
    slug: "enterprise-software",
    category: "Enterprise Solutions",
    label: "Enterprise Software Solutions",
    title: "Enterprise Software Solutions",
    icon: "building-2",
    summary: "Reliable systems built to scale",
    body: "Reliable, well-architected enterprise systems designed to scale with your organisation and its processes.",
    intro:
      "Reliable, well-architected enterprise systems designed to scale with your organisation and its processes.",
    overview:
      "We design and build enterprise systems for the long haul: sound architecture, security and compliance built in, and the observability large organisations need. Software that scales with your headcount, data, and processes without buckling.",
    capabilities: [
      {
        icon: "building-2",
        title: "Sound architecture",
        body: "Well-structured systems with clear boundaries that stay maintainable as they grow.",
      },
      {
        icon: "shield-check",
        title: "Security & compliance",
        body: "Access control, auditability, and data protection designed in from the start.",
      },
      {
        icon: "gauge",
        title: "Scale & reliability",
        body: "Performance, observability, and resilience for systems the business depends on.",
      },
    ],
  },
  {
    slug: "crm-erp-solutions",
    category: "Enterprise Solutions",
    label: "CRM & ERP Solutions",
    title: "CRM & ERP Solutions",
    icon: "users",
    summary: "Unify sales, ops & resources",
    body: "Implement, customise, and integrate the CRM and ERP systems your teams rely on so your operations run as one.",
    intro:
      "Implement, customise, and integrate the CRM and ERP systems your teams rely on so your operations run as one.",
    overview:
      "We implement, customise, and integrate the CRM and ERP platforms your teams run on — so sales, finance, and operations share one source of truth. Tailored workflows, clean data migration, and connections to the rest of your stack.",
    capabilities: [
      {
        icon: "users",
        title: "Implement & customise",
        body: "CRM and ERP configured and extended to match how your teams actually work.",
      },
      {
        icon: "arrow-left-right",
        title: "Integrated operations",
        body: "Your platforms connected so sales, finance, and ops run on shared, consistent data.",
      },
      {
        icon: "database",
        title: "Clean data migration",
        body: "Careful migration and de-duplication so you start on trustworthy records.",
      },
    ],
  },

  // ── Cloud Solutions ────────────────────────────────────────────────────
  {
    slug: "cloud-solutions",
    category: "Cloud Solutions",
    label: "Cloud Solutions",
    title: "Cloud Solutions",
    icon: "cloud",
    summary: "Scalable, secure cloud delivery",
    body: "Scalable, secure cloud infrastructure and delivery — from architecture to CI/CD and observability.",
    intro:
      "Scalable, secure cloud infrastructure and delivery — from architecture to CI/CD and observability.",
    overview:
      "We design and run cloud infrastructure that stays secure, scalable, and cost-aware: infrastructure as code, automated CI/CD, and the observability to know what's happening in production — so your team ships confidently instead of babysitting servers.",
    capabilities: [
      {
        icon: "cloud",
        title: "Cloud architecture",
        body: "Right-sized, secure infrastructure designed for your scale and budget.",
      },
      {
        icon: "workflow",
        title: "CI/CD & IaC",
        body: "Automated pipelines and infrastructure as code so releases are fast and repeatable.",
      },
      {
        icon: "gauge",
        title: "Observability",
        body: "Monitoring, logging, and alerting so you catch issues before your users do.",
      },
    ],
  },
  {
    slug: "cloud-migration",
    category: "Cloud Solutions",
    label: "Cloud Migration",
    title: "Cloud Migration",
    icon: "cloud-cog",
    summary: "Move to the cloud, safely",
    body: "Plan and execute a low-risk migration to the cloud — re-hosting, re-platforming, and optimising for cost and scale.",
    intro:
      "Plan and execute a low-risk migration to the cloud — re-hosting, re-platforming, and optimising for cost and scale.",
    overview:
      "We plan and execute cloud migrations that don't gamble with uptime: assess the estate, choose the right path for each workload — re-host, re-platform, or refactor — and migrate in waves, optimising for cost and scale as we go.",
    capabilities: [
      {
        icon: "target",
        title: "Assess & plan",
        body: "A workload-by-workload migration plan with risk, cost, and sequencing mapped up front.",
      },
      {
        icon: "cloud-cog",
        title: "Staged migration",
        body: "Re-host, re-platform, or refactor in waves so nothing moves before it's ready.",
      },
      {
        icon: "gauge",
        title: "Cost & scale tuning",
        body: "Right-sizing and optimisation so the cloud bill reflects real usage.",
      },
    ],
  },

  // ── Startup Solutions ──────────────────────────────────────────────────
  {
    slug: "saas-product-solutions",
    category: "Startup Solutions",
    label: "SaaS Product Solutions",
    title: "SaaS Product Solutions",
    icon: "layout-dashboard",
    summary: "Multi-tenant, subscription-ready",
    body: "End-to-end SaaS builds — multi-tenancy, authentication, and billing-ready architecture engineered to scale.",
    intro:
      "End-to-end SaaS builds — multi-tenancy, authentication, and billing-ready architecture engineered to scale.",
    overview:
      "We build SaaS products from foundation to launch: secure multi-tenancy, roles and permissions, and billing-ready architecture — engineered to stay fast and reliable from your first customer to your thousandth, with a codebase your team can own.",
    capabilities: [
      {
        icon: "layout-dashboard",
        title: "Multi-tenant foundations",
        body: "Tenant isolation, roles, and permissions designed in from the start.",
      },
      {
        icon: "shield-check",
        title: "Auth & billing-ready",
        body: "Authentication and subscription hooks baked in so you can charge from day one.",
      },
      {
        icon: "gauge",
        title: "Built to scale",
        body: "Architecture that stays fast and reliable as your customer base grows.",
      },
    ],
  },
  {
    slug: "startup-mvp-solutions",
    category: "Startup Solutions",
    label: "Startup MVP Solutions",
    title: "Startup MVP Solutions",
    icon: "rocket",
    summary: "From idea to launch, fast",
    body: "Ship a focused, credible MVP quickly — the right feature set, built to validate and ready to grow with you.",
    intro:
      "Ship a focused, credible MVP quickly — the right feature set, built to validate and ready to grow with you.",
    overview:
      "We help founders ship a credible MVP fast: sharp scope on the features that prove the idea, a clean build you won't have to throw away, and a foundation ready to grow the moment the market says yes.",
    capabilities: [
      {
        icon: "target",
        title: "Sharp scope",
        body: "The smallest feature set that genuinely tests your idea — nothing that delays launch.",
      },
      {
        icon: "rocket",
        title: "Fast to launch",
        body: "A focused, credible product in front of real users quickly, without cutting corners you'll regret.",
      },
      {
        icon: "refresh-cw",
        title: "Ready to grow",
        body: "A clean foundation that scales into a full product once you've found traction.",
      },
    ],
  },
  {
    slug: "product-discovery",
    category: "Startup Solutions",
    label: "Product Discovery",
    title: "Product Discovery",
    icon: "target",
    summary: "Decide what to build first",
    body: "A short, structured engagement that turns an idea into a scoped, costed plan — before you commit a budget to building it.",
    intro:
      "Turn an idea into a scoped, costed plan — before you commit a budget to building it.",
    overview:
      "Most wasted budget is spent building the wrong thing well. Discovery is a short, structured engagement that pressure-tests the idea against real users and real constraints, then hands you a prioritised scope, an architecture direction, and a credible estimate — so the build starts with the arguments already settled.",
    capabilities: [
      {
        icon: "target",
        title: "Problem framing",
        body: "Who it's for and what success looks like, agreed before a line of code is written.",
      },
      {
        icon: "layout-dashboard",
        title: "Scope & prototype",
        body: "A prioritised feature set and a clickable prototype you can put in front of real users.",
      },
      {
        icon: "gauge",
        title: "Plan & estimate",
        body: "Architecture direction, delivery phases, and a costed plan you can actually decide on.",
      },
    ],
  },

  // ── Commerce Solutions ─────────────────────────────────────────────────
  {
    slug: "ecommerce-solutions",
    category: "Commerce Solutions",
    label: "E-commerce Solutions",
    title: "E-commerce Solutions",
    icon: "shopping-cart",
    summary: "Storefronts built to convert",
    body: "Fast, conversion-focused storefronts and commerce platforms — from catalogue and checkout to integrations and analytics.",
    intro:
      "Fast, conversion-focused storefronts and commerce platforms — from catalogue and checkout to integrations and analytics.",
    overview:
      "We build commerce experiences that load fast and convert: polished catalogue and checkout flows, integrations with payments and fulfilment, and the analytics to keep improving — whether you're on a platform or building a custom storefront.",
    capabilities: [
      {
        icon: "shopping-cart",
        title: "Conversion-focused UX",
        body: "Fast, frictionless catalogue and checkout flows built to turn visits into orders.",
      },
      {
        icon: "arrow-left-right",
        title: "Payments & integrations",
        body: "Secure connections to payment, shipping, tax, and inventory systems.",
      },
      {
        icon: "gauge",
        title: "Analytics & growth",
        body: "Tracking and insight so you can measure and lift conversion over time.",
      },
    ],
  },

  {
    slug: "marketplace-platforms",
    category: "Commerce Solutions",
    label: "Marketplace Platforms",
    title: "Marketplace Platforms",
    icon: "blocks",
    summary: "Connect buyers and sellers",
    body: "Multi-vendor platforms with onboarding, listings, payouts, and trust built in — engineered for both sides of the market.",
    intro:
      "Multi-vendor platforms with onboarding, listings, payouts, and trust built in.",
    overview:
      "A marketplace is two products at once: one for buyers, one for sellers, joined by money and trust. We build both sides — vendor onboarding and listings, search and matching, split payments and payouts, ratings and dispute handling — on architecture that stays fast as supply and demand grow.",
    capabilities: [
      {
        icon: "users",
        title: "Multi-vendor onboarding",
        body: "Seller sign-up, verification, and self-serve listing management that scales without your ops team.",
      },
      {
        icon: "arrow-left-right",
        title: "Payments & payouts",
        body: "Split payments, commissions, and scheduled seller payouts handled correctly and auditably.",
      },
      {
        icon: "shield-check",
        title: "Trust & safety",
        body: "Ratings, moderation, and dispute flows that keep both sides of the market confident.",
      },
    ],
  },
  {
    slug: "subscription-platforms",
    category: "Commerce Solutions",
    label: "Subscription Platforms",
    title: "Subscription Platforms",
    icon: "refresh-cw",
    summary: "Recurring revenue, done right",
    body: "Plans, trials, upgrades, dunning, and revenue reporting — the billing machinery recurring businesses live or die by.",
    intro:
      "Plans, trials, upgrades, dunning, and revenue reporting — billing that holds up as you grow.",
    overview:
      "Recurring revenue lives or dies on billing details: proration on upgrades, failed-payment recovery, tax, and numbers finance can trust. We build subscription platforms where those edges are handled deliberately rather than discovered in production.",
    capabilities: [
      {
        icon: "layout-dashboard",
        title: "Plans & lifecycle",
        body: "Trials, upgrades, downgrades, and proration that behave correctly at every edge.",
      },
      {
        icon: "shield-check",
        title: "Dunning & recovery",
        body: "Failed-payment retries and recovery flows that protect revenue you've already earned.",
      },
      {
        icon: "gauge",
        title: "Revenue reporting",
        body: "MRR, churn, and cohort reporting your finance team can reconcile and trust.",
      },
    ],
  },

  // ── Data & Analytics ───────────────────────────────────────────────────
  {
    slug: "data-analytics-solutions",
    category: "Data & Analytics",
    label: "Data Analytics Solutions",
    title: "Data Analytics Solutions",
    icon: "gauge",
    summary: "Turn data into decisions",
    body: "Pipelines, dashboards, and models that turn scattered data into clear, trustworthy insight your teams can act on.",
    intro:
      "Pipelines, dashboards, and models that turn scattered data into clear, trustworthy insight your teams can act on.",
    overview:
      "We turn scattered data into decisions: reliable pipelines that consolidate your sources, a trustworthy model your teams can query, and dashboards that surface the metrics that matter — so people act on evidence instead of guesswork.",
    capabilities: [
      {
        icon: "database",
        title: "Pipelines & modelling",
        body: "Reliable ingestion and a clean data model that consolidate your sources into one truth.",
      },
      {
        icon: "gauge",
        title: "Dashboards & metrics",
        body: "Clear, self-serve dashboards that put the numbers that matter in front of the right people.",
      },
      {
        icon: "brain-circuit",
        title: "Predictive insight",
        body: "Forecasting and models that turn historical data into forward-looking decisions.",
      },
    ],
  },
  {
    slug: "iot-solutions",
    category: "Data & Analytics",
    label: "IoT Solutions",
    title: "IoT Solutions",
    icon: "activity",
    summary: "Connected devices & telemetry",
    body: "Connect, collect, and act on device data — ingestion, telemetry, and dashboards for the physical edge of your business.",
    intro:
      "Connect, collect, and act on device data — ingestion, telemetry, and dashboards for the physical edge of your business.",
    overview:
      "We connect the physical edge of your business to the cloud: reliable device ingestion, real-time telemetry, and dashboards and alerts that turn sensor streams into action — built to stay dependable at the scale of thousands of devices.",
    capabilities: [
      {
        icon: "activity",
        title: "Device connectivity",
        body: "Reliable ingestion from sensors and devices, at the scale your fleet demands.",
      },
      {
        icon: "gauge",
        title: "Telemetry & dashboards",
        body: "Real-time monitoring and dashboards that make device data legible and actionable.",
      },
      {
        icon: "shield-check",
        title: "Alerts & automation",
        body: "Rules and alerting so the system reacts to conditions the moment they occur.",
      },
    ],
  },
];

/**
 * Ordered mega-menu categories for the Solutions panel, each with the icon and
 * featured-panel copy the showcase menu renders. AI leads deliberately — it is
 * the studio's differentiator, so it is the first thing the menu says.
 *
 * `records` is the collection filter for the category's cards. The AI category
 * has none: its cards come from `/ai` instead (see `aiCategoryLinks`), because
 * those capabilities are owned by `content/ai.ts`.
 *
 * To add a category: append an entry here. The rail, cards, and featured panel
 * all derive from it — no component changes needed.
 */
const solutionCategoryMeta: {
  title: string;
  icon: string;
  blurb: string;
  href: string;
}[] = [
  {
    title: "AI & Intelligent Solutions",
    icon: "brain-circuit",
    blurb:
      "Build intelligent products on generative AI, autonomous agents, and RAG architectures — engineered for production, not demos.",
    href: "/ai",
  },
  {
    title: "Enterprise Solutions",
    icon: "building-2",
    blurb:
      "Well-architected systems your organisation can depend on, with security, auditability, and scale designed in from the start.",
    href: "/solutions",
  },
  {
    title: "Business Automation",
    icon: "workflow",
    blurb:
      "Replace the manual, repetitive work between your systems with reliable automated pipelines that run unattended.",
    href: "/solutions",
  },
  {
    title: "Cloud Solutions",
    icon: "cloud",
    blurb:
      "Secure, cost-aware cloud infrastructure and delivery — architecture, migration, and the observability to run it confidently.",
    href: "/solutions",
  },
  {
    title: "Data & Analytics",
    icon: "gauge",
    blurb:
      "Turn scattered data into decisions your teams trust — pipelines, dashboards, and models built on one source of truth.",
    href: "/solutions",
  },
  {
    title: "Startup Solutions",
    icon: "rocket",
    blurb:
      "From discovery to a launched MVP — sharp scope, fast delivery, and a clean foundation that grows when traction arrives.",
    href: "/solutions",
  },
  {
    title: "Commerce Solutions",
    icon: "shopping-cart",
    blurb:
      "Storefronts, marketplaces, and subscription platforms engineered to load fast, convert, and bill correctly.",
    href: "/solutions",
  },
  {
    title: "Digital Transformation",
    icon: "refresh-cw",
    blurb:
      "Modernise the digital core of your business in increments — real, measurable change instead of a multi-year gamble.",
    href: "/solutions",
  },
];

/** Ordered category names — the taxonomy other modules read. */
export const solutionCategories = solutionCategoryMeta.map((c) => c.title);

/**
 * The AI category's menu links, sourced from the canonical `/ai` collection so
 * each capability keeps exactly one home on the site.
 */
const aiCategoryLinks: NavLink[] = aiCapabilities.map((c) => ({
  label: c.label,
  href: `/ai/${c.slug}`,
  icon: c.icon,
  desc: c.summary,
}));

/**
 * Solutions mega-menu columns, derived from the taxonomy — one column per
 * category, carrying its rail icon and featured-panel copy. Solution links
 * resolve to `/solutions/[slug]`; AI links resolve to `/ai/[slug]`.
 */
export const solutionMenuColumns: MegaColumn[] = solutionCategoryMeta.map(
  (category) => ({
    title: category.title,
    icon: category.icon,
    blurb: category.blurb,
    href: category.href,
    links:
      category.title === "AI & Intelligent Solutions"
        ? aiCategoryLinks
        : solutionRecords
            .filter((s) => s.category === category.title)
            .map((s) => ({
              label: s.label,
              href: `/solutions/${s.slug}`,
              icon: s.icon,
              desc: s.summary,
            })),
  }),
);

/**
 * Cards shown on the `/solutions` hub — every solution, in taxonomy order, so
 * the hub is the full catalogue behind the mega menu. Each card links to its
 * detail page. (AI capabilities are not solution records; the hub links to `/ai`
 * for those.)
 */
export const solutions = [...solutionRecords]
  .sort(
    (a, b) =>
      solutionCategories.indexOf(a.category) -
      solutionCategories.indexOf(b.category),
  )
  .map((s) => ({
    icon: s.icon,
    title: s.title,
    body: s.body,
    href: `/solutions/${s.slug}`,
  }));

/** Slug list for `generateStaticParams` and the sitemap. */
export const solutionSlugs = solutionRecords.map((s) => s.slug);

/** Look up a single solution by slug (undefined if not found). */
export function getSolution(slug: string): SolutionRecord | undefined {
  return solutionRecords.find((s) => s.slug === slug);
}

/**
 * Related solutions for a detail page — others in the same category first,
 * topped up from the rest of the catalogue so there are always `limit` cards.
 */
export function relatedSolutions(slug: string, limit = 3): SolutionRecord[] {
  const current = getSolution(slug);
  if (!current) return [];
  const sameCategory = solutionRecords.filter(
    (s) => s.slug !== slug && s.category === current.category,
  );
  const others = solutionRecords.filter(
    (s) => s.slug !== slug && s.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, limit);
}

/** Shared FAQs rendered on every solution detail page. */
export const solutionFaqs: Faq[] = [
  {
    q: "How do we get started?",
    a: "We begin with a short discovery conversation to understand your goals, constraints, and current systems, then propose a clearly scoped first phase so you can see value quickly.",
  },
  {
    q: "Can this work with our existing systems?",
    a: "Yes. We design solutions to integrate with the tools and data you already run, rather than forcing a rip-and-replace, and we sequence the work to avoid disrupting what's already working.",
  },
  {
    q: "Do we own the code and infrastructure?",
    a: "Always. Everything we build is yours — clean, documented, and handed over so your team can own and extend it. There is no lock-in to us.",
  },
];

/** Re-exported for detail-page CTAs that link to the contact hub. */
export { CONTACT_HREF };
