/**
 * Solutions collection. Slug-keyed records power the Solutions mega-menu panel,
 * the `/solutions` hub grid, and the statically-exported `/solutions/[slug]`
 * detail pages — all from one source. Each record carries a short `summary`
 * (menu) and a longer `body` (hub card), plus the `intro`, `overview`, and
 * `capabilities` its detail page renders, so there is no duplicated copy.
 *
 * The taxonomy is a master–detail set of six outcome-focused categories, each
 * grouping the individual solutions it contains. The mega menu renders the
 * categories as a left rail; hovering one reveals its solutions, each linking
 * to its own `/solutions/[slug]` detail page.
 */

import { CONTACT_HREF } from "@/config/site";
import type { MegaColumn, DetailRecord, Feature, Faq } from "@/content/types";

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
  // ── AI & Automation ────────────────────────────────────────────────────
  {
    slug: "ai-solutions",
    category: "AI & Automation",
    label: "AI Solutions",
    title: "AI Solutions",
    icon: "brain-circuit",
    summary: "Production AI, end to end",
    body: "Production-grade AI built for real work — from strategy and data to models, guardrails, and evaluation, shipped with the reliability your business needs.",
    intro:
      "Production-grade AI built for real work — from strategy and data to models, guardrails, and evaluation, shipped with the reliability your business needs.",
    overview:
      "We take AI from idea to production without the science-project detour: a clear use case, the right data foundation, models chosen for the job, and the guardrails and evaluation that keep them trustworthy once real users depend on them.",
    capabilities: [
      {
        icon: "target",
        title: "Strategy & use cases",
        body: "We identify where AI creates real value and scope the work so the first release earns its keep.",
      },
      {
        icon: "shield-check",
        title: "Guardrails & evaluation",
        body: "Safety rails, testing, and monitoring so outputs stay accurate and on-policy in production.",
      },
      {
        icon: "gauge",
        title: "Built to scale",
        body: "Architecture and cost controls that keep AI fast and affordable as usage grows.",
      },
    ],
  },
  {
    slug: "ai-agents",
    category: "AI & Automation",
    label: "AI Agents",
    title: "AI Agents",
    icon: "bot",
    summary: "Autonomous assistants in your stack",
    body: "Autonomous assistants wired into your data and tools — answering questions, triaging work, and taking action under your rules.",
    intro:
      "Autonomous assistants wired into your data and tools — answering questions, triaging work, and taking action under your rules.",
    overview:
      "We build tool-using agents that plan and act inside your systems, not just chat. They read your data, call your APIs, and complete multi-step tasks — always within permissions and policy you define, with a full audit trail.",
    capabilities: [
      {
        icon: "workflow",
        title: "Plan & act",
        body: "Agents that break a goal into steps and use your tools to complete real work end to end.",
      },
      {
        icon: "plug-zap",
        title: "Tool & data access",
        body: "Secure, governed connections to your APIs, databases, and third-party services.",
      },
      {
        icon: "shield-check",
        title: "Guardrails & oversight",
        body: "Permission boundaries, approvals, and logging so autonomy stays safe and reviewable.",
      },
    ],
  },
  {
    slug: "generative-ai",
    category: "AI & Automation",
    label: "Generative AI",
    title: "Generative AI",
    icon: "sparkles",
    summary: "Content, code & creative at scale",
    body: "Generative features that draft, summarise, and create — text, code, and media — grounded in your context and safe to ship.",
    intro:
      "Generative features that draft, summarise, and create — text, code, and media — grounded in your context and safe to ship.",
    overview:
      "We embed generation where it saves your team time: drafting copy, summarising documents, producing code and media — always grounded in your context and guarded against the failure modes that make generative features risky.",
    capabilities: [
      {
        icon: "sparkles",
        title: "Grounded generation",
        body: "Outputs anchored to your data and brand voice, not generic model defaults.",
      },
      {
        icon: "layout-dashboard",
        title: "In-product features",
        body: "Draft, summarise, and rewrite flows built directly into your app's UX.",
      },
      {
        icon: "shield-check",
        title: "Safe to ship",
        body: "Content filters, review steps, and evaluation so what you release stays on-brand and on-policy.",
      },
    ],
  },
  {
    slug: "llm-integration",
    category: "AI & Automation",
    label: "LLM Integration",
    title: "LLM Integration",
    icon: "plug-zap",
    summary: "Language models in your product",
    body: "Securely wire large language models into your product and workflows, with prompt design, evaluation, and cost controls built in.",
    intro:
      "Securely wire large language models into your product and workflows, with prompt design, evaluation, and cost controls built in.",
    overview:
      "We integrate LLMs into real products the right way: robust prompt and context design, structured outputs your code can trust, evaluation to catch regressions, and cost controls so quality and spend stay predictable.",
    capabilities: [
      {
        icon: "plug-zap",
        title: "Robust integration",
        body: "Structured outputs, retries, and fallbacks so language models behave reliably in production code.",
      },
      {
        icon: "target",
        title: "Prompt & context design",
        body: "Prompts and context pipelines engineered and versioned for accuracy and consistency.",
      },
      {
        icon: "gauge",
        title: "Cost & quality controls",
        body: "Caching, model routing, and evaluation to keep spend down and quality measurable.",
      },
    ],
  },
  {
    slug: "rag-solutions",
    category: "AI & Automation",
    label: "RAG Solutions",
    title: "RAG Solutions",
    icon: "database",
    summary: "Answers grounded in your data",
    body: "Retrieval-augmented pipelines that ground every answer in your own content — accurate, current, and citable.",
    intro:
      "Retrieval-augmented pipelines that ground every answer in your own content — accurate, current, and citable.",
    overview:
      "We build retrieval-augmented systems that answer from your own knowledge base — documents, wikis, tickets, code — so responses stay accurate, current, and citable instead of hallucinated. Ingestion, indexing, and retrieval are tuned for your content.",
    capabilities: [
      {
        icon: "database",
        title: "Ingestion & indexing",
        body: "Pipelines that turn your documents and data into clean, searchable, up-to-date knowledge.",
      },
      {
        icon: "target",
        title: "Accurate retrieval",
        body: "Tuned search and ranking so the model sees the right context for every question.",
      },
      {
        icon: "shield-check",
        title: "Citable & governed",
        body: "Answers link back to sources, with access controls that respect who can see what.",
      },
    ],
  },
  {
    slug: "mcp-server-development",
    category: "AI & Automation",
    label: "MCP Server Development",
    title: "MCP Server Development",
    icon: "server",
    summary: "Connect AI to your systems",
    body: "Custom Model Context Protocol servers that give AI assistants secure, governed access to your tools and data.",
    intro:
      "Custom Model Context Protocol servers that give AI assistants secure, governed access to your tools and data.",
    overview:
      "We build Model Context Protocol servers that expose your tools and data to AI assistants through a clean, governed interface — so any MCP-capable client can act on your systems safely, with authentication and permissions handled properly.",
    capabilities: [
      {
        icon: "server",
        title: "Custom MCP servers",
        body: "Well-designed tools and resources that expose your systems to AI clients over MCP.",
      },
      {
        icon: "shield-check",
        title: "Secure & governed",
        body: "Authentication, scoping, and permission boundaries so access stays controlled and auditable.",
      },
      {
        icon: "plug-zap",
        title: "Broad compatibility",
        body: "Standards-based servers that work with any MCP-capable assistant or agent.",
      },
    ],
  },
  {
    slug: "intelligent-automation",
    category: "AI & Automation",
    label: "Intelligent Automation",
    title: "Intelligent Automation",
    icon: "cpu",
    summary: "AI-driven decisions in pipelines",
    body: "Combine automation with AI judgement to handle work that used to need a human in the loop — reliably and at scale.",
    intro:
      "Combine automation with AI judgement to handle work that used to need a human in the loop — reliably and at scale.",
    overview:
      "We blend dependable automation with AI judgement to handle the grey-area work rules alone can't: classifying, extracting, and deciding — with confidence thresholds and human review where it matters, so throughput rises without losing control.",
    capabilities: [
      {
        icon: "cpu",
        title: "AI-driven decisions",
        body: "Classification, extraction, and routing that used to need a person, handled automatically.",
      },
      {
        icon: "workflow",
        title: "Reliable pipelines",
        body: "Automation with retries and monitoring so processes run correctly around the clock.",
      },
      {
        icon: "shield-check",
        title: "Human-in-the-loop",
        body: "Confidence thresholds and review queues so people handle the edge cases that need them.",
      },
    ],
  },
  {
    slug: "workflow-automation",
    category: "AI & Automation",
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
    category: "AI & Automation",
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
  {
    slug: "custom-business-solutions",
    category: "Digital Transformation",
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

  // ── Enterprise Solutions ───────────────────────────────────────────────
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

  // ── Business Applications ──────────────────────────────────────────────
  {
    slug: "saas-product-solutions",
    category: "Business Applications",
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
    category: "Business Applications",
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
    slug: "ecommerce-solutions",
    category: "Business Applications",
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

/** Ordered mega-menu categories for the Solutions panel. */
export const solutionCategories = [
  "AI & Automation",
  "Digital Transformation",
  "Enterprise Solutions",
  "Cloud Solutions",
  "Business Applications",
  "Data & Analytics",
] as const;

/**
 * Solutions mega-menu columns, derived from the collection — one column per
 * category (rendered as the master–detail rail). Each link resolves to its own
 * `/solutions/[slug]` detail page.
 */
export const solutionMenuColumns: MegaColumn[] = solutionCategories.map(
  (category) => ({
    title: category,
    links: solutionRecords
      .filter((s) => s.category === category)
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
 * detail page.
 */
export const solutions = solutionRecords.map((s) => ({
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
