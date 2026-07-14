/**
 * Services collection — the single source of truth for both the Services
 * mega-menu panel and the statically-exported `/services/[slug]` detail pages.
 * Editing a record here updates the navigation, the sitemap, and the detail
 * page together; there is no duplicated copy.
 */

import { CONTACT_HREF } from "@/config/site";
import type { MegaColumn, ServiceRecord } from "@/content/types";

/**
 * Ordered mega-menu categories. The array order is the panel order
 * (AI-first), and each service references its category by this exact title.
 */
export const serviceCategories = [
  "AI Development",
  "Frontend Development",
  "Backend Development",
  "Cloud & DevOps",
  "Mobile Development",
] as const;

export const services: ServiceRecord[] = [
  // ── AI Development ──────────────────────────────────────────────────────
  {
    slug: "ai-agents",
    category: "AI Development",
    label: "AI Agents",
    title: "AI Agent Development",
    icon: "bot",
    summary: "Autonomous, tool-using assistants",
    intro:
      "Autonomous assistants that use your tools and data to take real work off your team — safely, and under your rules.",
    overview:
      "We design and ship production AI agents that go beyond chat: they plan, call tools, and take actions inside your systems with guardrails, evaluation, and observability built in from day one.",
    capabilities: [
      {
        icon: "workflow",
        title: "Tool & action orchestration",
        body: "Agents that reliably call your APIs, query data, and complete multi-step tasks.",
      },
      {
        icon: "shield-check",
        title: "Guardrails & evaluation",
        body: "Policies, permissions, and automated evals that keep behaviour safe and measurable.",
      },
      {
        icon: "activity",
        title: "Observability",
        body: "Full tracing of every step so you can debug, audit, and improve in production.",
      },
    ],
  },
  {
    slug: "llm-integration",
    category: "AI Development",
    label: "LLM Integration",
    title: "LLM Integration",
    icon: "sparkles",
    summary: "Language models in your product",
    intro:
      "Bring large language models into your product with the reliability, cost control, and security production demands.",
    overview:
      "From model selection to prompt architecture, streaming, and fallback strategies, we wire LLMs into your stack so features feel fast and stay dependable under real load.",
    capabilities: [
      {
        icon: "plug-zap",
        title: "Model integration",
        body: "Provider-agnostic integration with streaming, retries, and graceful fallback.",
      },
      {
        icon: "gauge",
        title: "Cost & latency control",
        body: "Caching, routing, and token budgeting that keep responses fast and affordable.",
      },
      {
        icon: "shield",
        title: "Secure by design",
        body: "Prompt-injection defences and data handling that respect your security posture.",
      },
    ],
  },
  {
    slug: "rag-solutions",
    category: "AI Development",
    label: "RAG Solutions",
    title: "RAG Solutions",
    icon: "database",
    summary: "Answers grounded in your data",
    intro:
      "Retrieval-augmented generation that grounds every answer in your own content — so responses stay accurate and trustworthy.",
    overview:
      "We build retrieval pipelines end to end: ingestion, chunking, embeddings, and retrieval-quality checks that keep answers honest and citable rather than hallucinated.",
    capabilities: [
      {
        icon: "database",
        title: "Retrieval pipelines",
        body: "Ingestion, chunking, and embeddings tuned to your corpus and query patterns.",
      },
      {
        icon: "search-check",
        title: "Answer quality",
        body: "Grounding, citations, and evaluation that keep responses faithful to your data.",
      },
      {
        icon: "refresh-cw",
        title: "Fresh knowledge",
        body: "Sync layers that keep the index current as your content changes.",
      },
    ],
  },
  {
    slug: "mcp-servers",
    category: "AI Development",
    label: "MCP Servers",
    title: "MCP Server Development",
    icon: "plug-zap",
    summary: "Connect models to your systems",
    intro:
      "Model Context Protocol servers that securely connect AI models to your systems, data, and internal tools.",
    overview:
      "We build and host MCP servers that expose your resources and actions to AI clients through a standard, auditable interface — extending what agents can do without bespoke glue for every integration.",
    capabilities: [
      {
        icon: "plug-zap",
        title: "Standard integration",
        body: "Expose tools and resources over MCP so any compatible client can use them.",
      },
      {
        icon: "shield-check",
        title: "Scoped access",
        body: "Fine-grained permissions and auditing around every exposed capability.",
      },
      {
        icon: "box",
        title: "Composable tools",
        body: "Reusable server modules that snap into your existing services.",
      },
    ],
  },
  {
    slug: "ai-automation",
    category: "AI Development",
    label: "AI Automation",
    title: "AI Automation",
    icon: "workflow",
    summary: "Intelligent workflow automation",
    intro:
      "Intelligent automation that removes repetitive, judgement-heavy work — combining AI with dependable pipelines.",
    overview:
      "We identify the workflows draining your team's time and automate them with a blend of AI reasoning and deterministic orchestration, so the routine runs itself and people focus on the exceptions.",
    capabilities: [
      {
        icon: "workflow",
        title: "Workflow design",
        body: "Map, model, and automate multi-step processes across your tools.",
      },
      {
        icon: "sparkles",
        title: "AI-in-the-loop",
        body: "Language models handling classification, extraction, and drafting where they excel.",
      },
      {
        icon: "activity",
        title: "Monitoring",
        body: "Dashboards and alerts that surface exceptions the moment they happen.",
      },
    ],
  },
  {
    slug: "ai-chatbots",
    category: "AI Development",
    label: "AI Chatbots",
    title: "AI Chatbot Development",
    icon: "bot-message-square",
    summary: "Conversational support & sales",
    intro:
      "Conversational assistants that support customers and streamline internal workflows — grounded, on-brand, and always available.",
    overview:
      "We build chatbots and copilots that are retrieval-grounded, escalate gracefully to humans, and plug into your product and knowledge base so answers stay accurate and useful.",
    capabilities: [
      {
        icon: "bot-message-square",
        title: "Grounded conversations",
        body: "Answers drawn from your content, not guesses — with citations where it matters.",
      },
      {
        icon: "arrow-left-right",
        title: "Human handoff",
        body: "Seamless escalation to your team when a request needs a person.",
      },
      {
        icon: "layout-dashboard",
        title: "Omnichannel",
        body: "Deploy the same assistant across web, product, and messaging channels.",
      },
    ],
  },

  // ── Frontend Development ────────────────────────────────────────────────
  {
    slug: "react",
    category: "Frontend Development",
    label: "React.js",
    title: "React.js Development",
    icon: "atom",
    summary: "Interactive, component-driven UIs",
    intro:
      "Interactive, component-driven interfaces built with React — fast, accessible, and maintainable at scale.",
    overview:
      "We build React applications with a clean component architecture, strong typing, and testing baked in, so your UI stays fast to ship and easy to evolve as the product grows.",
    capabilities: [
      {
        icon: "atom",
        title: "Component architecture",
        body: "Reusable, composable components with a design-system-driven approach.",
      },
      {
        icon: "gauge",
        title: "Performance",
        body: "Code-splitting, memoization, and rendering strategies tuned for speed.",
      },
      {
        icon: "shield-check",
        title: "Quality",
        body: "TypeScript, tests, and accessibility built into every component.",
      },
    ],
  },
  {
    slug: "nextjs",
    category: "Frontend Development",
    label: "Next.js",
    title: "Next.js Development",
    icon: "triangle",
    summary: "Fast, SEO-ready web apps",
    intro:
      "Fast, SEO-ready web applications built on Next.js — from static marketing sites to full-stack products.",
    overview:
      "We use Next.js to deliver web apps that are fast by default: server rendering, static export, and smart caching combined with a modern developer workflow and clean architecture.",
    capabilities: [
      {
        icon: "triangle",
        title: "Rendering strategies",
        body: "SSR, SSG, and static export chosen to fit each page's needs.",
      },
      {
        icon: "search",
        title: "SEO & metadata",
        body: "Structured data, canonical URLs, and metadata handled per route.",
      },
      {
        icon: "zap",
        title: "Speed",
        body: "Optimized assets and caching for excellent Core Web Vitals.",
      },
    ],
  },
  {
    slug: "angular",
    category: "Frontend Development",
    label: "Angular",
    title: "Angular Development",
    icon: "shield",
    summary: "Enterprise-grade frontends",
    intro:
      "Structured, enterprise-grade frontends built with Angular — ideal for large teams and long-lived applications.",
    overview:
      "We build Angular applications with a clear module structure, typed services, and testing throughout, giving large organisations a maintainable, consistent frontend foundation.",
    capabilities: [
      {
        icon: "shield",
        title: "Enterprise structure",
        body: "Modular architecture and typed services built for large codebases.",
      },
      {
        icon: "refresh-cw",
        title: "Maintainability",
        body: "Consistent patterns that keep long-lived apps easy to evolve.",
      },
      {
        icon: "list-checks",
        title: "Testing",
        body: "Unit and end-to-end coverage that protects critical flows.",
      },
    ],
  },
  {
    slug: "vue",
    category: "Frontend Development",
    label: "Vue.js",
    title: "Vue.js Development",
    icon: "diamond",
    summary: "Lightweight, reactive interfaces",
    intro:
      "Lightweight, reactive interfaces built with Vue — approachable, fast, and a joy to maintain.",
    overview:
      "We build Vue applications with a clean composition-API structure and strong typing, delivering reactive UIs that ship quickly and stay readable.",
    capabilities: [
      {
        icon: "diamond",
        title: "Reactive UI",
        body: "Composable, reactive components with the Composition API.",
      },
      {
        icon: "zap",
        title: "Lightweight",
        body: "Small bundles and fast startup for snappy experiences.",
      },
      {
        icon: "shield-check",
        title: "Quality",
        body: "Typed, tested components with accessibility in mind.",
      },
    ],
  },

  // ── Backend Development ─────────────────────────────────────────────────
  {
    slug: "nodejs",
    category: "Backend Development",
    label: "Node.js",
    title: "Node.js Development",
    icon: "hexagon",
    summary: "Scalable APIs and services",
    intro:
      "Scalable APIs and services built on Node.js — fast to build, easy to integrate, and ready to grow.",
    overview:
      "We build Node.js backends with clean architecture, typed end to end, and designed for reliability under load — the connective tissue between your product and the systems it depends on.",
    capabilities: [
      {
        icon: "hexagon",
        title: "API design",
        body: "REST and GraphQL APIs with clear contracts and versioning.",
      },
      {
        icon: "gauge",
        title: "Scalability",
        body: "Async, event-driven services that handle real production traffic.",
      },
      {
        icon: "arrow-left-right",
        title: "Integrations",
        body: "Reliable connections to databases, queues, and third-party services.",
      },
    ],
  },
  {
    slug: "nestjs",
    category: "Backend Development",
    label: "NestJS",
    title: "NestJS Development",
    icon: "box",
    summary: "Structured, typed backends",
    intro:
      "Structured, typed backends built with NestJS — an opinionated foundation for services that need to last.",
    overview:
      "We use NestJS to give backends a clear, modular structure with dependency injection and testing built in, so complex services stay organised and maintainable.",
    capabilities: [
      {
        icon: "box",
        title: "Modular structure",
        body: "Clean module boundaries and dependency injection out of the box.",
      },
      {
        icon: "shield-check",
        title: "Typed & tested",
        body: "End-to-end TypeScript with a first-class testing story.",
      },
      {
        icon: "arrow-left-right",
        title: "Integrations",
        body: "Well-structured adapters for data, messaging, and external APIs.",
      },
    ],
  },
  {
    slug: "laravel",
    category: "Backend Development",
    label: "Laravel",
    title: "Laravel Development",
    icon: "layers",
    summary: "Rapid PHP application builds",
    intro:
      "Rapid, reliable application builds with Laravel — a productive PHP framework for getting to production fast.",
    overview:
      "We build Laravel applications with clean, testable code and a pragmatic approach, delivering feature-rich products quickly without sacrificing maintainability.",
    capabilities: [
      {
        icon: "layers",
        title: "Rapid delivery",
        body: "Expressive tooling that turns requirements into features fast.",
      },
      {
        icon: "database",
        title: "Data modelling",
        body: "Clean, migration-driven schemas with an expressive ORM.",
      },
      {
        icon: "shield-check",
        title: "Maintainable",
        body: "Tested, well-structured code that's easy to hand over.",
      },
    ],
  },
  {
    slug: "dotnet",
    category: "Backend Development",
    label: ".NET",
    title: ".NET Development",
    icon: "circle-dot",
    summary: "Robust enterprise systems",
    intro:
      "Robust, high-performance enterprise systems built on .NET — dependable foundations for mission-critical software.",
    overview:
      "We build .NET services and APIs with strong typing, clean architecture, and performance in mind, well suited to enterprises that need reliability and long-term support.",
    capabilities: [
      {
        icon: "circle-dot",
        title: "Enterprise-grade",
        body: "Reliable, well-architected services for critical workloads.",
      },
      {
        icon: "gauge",
        title: "Performance",
        body: "High-throughput APIs tuned for demanding environments.",
      },
      {
        icon: "shield",
        title: "Security",
        body: "Secure defaults and best practices baked into the build.",
      },
    ],
  },

  // ── Cloud & DevOps ──────────────────────────────────────────────────────
  {
    slug: "aws",
    category: "Cloud & DevOps",
    label: "AWS",
    title: "AWS Cloud Services",
    icon: "cloud",
    summary: "Scalable cloud infrastructure",
    intro:
      "Scalable, secure cloud infrastructure on AWS — architected for reliability, performance, and cost efficiency.",
    overview:
      "We design and operate AWS environments from the ground up: well-architected infrastructure as code, secure networking, and cost-aware services that scale with your product.",
    capabilities: [
      {
        icon: "cloud",
        title: "Architecture",
        body: "Well-architected, infrastructure-as-code environments.",
      },
      {
        icon: "shield-check",
        title: "Security",
        body: "Least-privilege access, encryption, and secure networking.",
      },
      {
        icon: "gauge",
        title: "Cost efficiency",
        body: "Right-sized services and autoscaling that control spend.",
      },
    ],
  },
  {
    slug: "azure",
    category: "Cloud & DevOps",
    label: "Azure",
    title: "Azure Cloud Services",
    icon: "cloud-cog",
    summary: "Enterprise cloud delivery",
    intro:
      "Enterprise cloud delivery on Microsoft Azure — integrated, secure, and ready for regulated environments.",
    overview:
      "We build and operate Azure environments that integrate cleanly with enterprise identity and tooling, with governance and security suited to organisations that need them.",
    capabilities: [
      {
        icon: "cloud-cog",
        title: "Enterprise integration",
        body: "Deep integration with identity, governance, and Microsoft tooling.",
      },
      {
        icon: "shield",
        title: "Compliance-ready",
        body: "Controls and governance for regulated environments.",
      },
      {
        icon: "gauge",
        title: "Scalable delivery",
        body: "Autoscaling services and managed platforms that grow with you.",
      },
    ],
  },
  {
    slug: "docker",
    category: "Cloud & DevOps",
    label: "Docker",
    title: "Docker Containerization",
    icon: "container",
    summary: "Portable, containerized apps",
    intro:
      "Portable, reproducible applications with Docker — consistent from a laptop to production.",
    overview:
      "We containerize applications for reliable, reproducible builds and deployments, giving your team the same environment everywhere and a clean path into orchestration.",
    capabilities: [
      {
        icon: "container",
        title: "Containerization",
        body: "Lean, reproducible images with sensible, secure defaults.",
      },
      {
        icon: "refresh-cw",
        title: "Consistency",
        body: "Identical environments across dev, staging, and production.",
      },
      {
        icon: "git-branch",
        title: "CI-ready",
        body: "Images that slot straight into automated build pipelines.",
      },
    ],
  },
  {
    slug: "kubernetes",
    category: "Cloud & DevOps",
    label: "Kubernetes",
    title: "Kubernetes Orchestration",
    icon: "ship-wheel",
    summary: "Orchestration at scale",
    intro:
      "Container orchestration at scale with Kubernetes — resilient, self-healing infrastructure for demanding workloads.",
    overview:
      "We design and run Kubernetes platforms with autoscaling, rolling deployments, and observability, giving your services the resilience and headroom to grow without drama.",
    capabilities: [
      {
        icon: "ship-wheel",
        title: "Orchestration",
        body: "Self-healing, autoscaling workloads across your cluster.",
      },
      {
        icon: "activity",
        title: "Observability",
        body: "Metrics, logs, and tracing wired in for real operability.",
      },
      {
        icon: "shield-check",
        title: "Resilience",
        body: "Rolling deploys and health checks that keep services up.",
      },
    ],
  },
  {
    slug: "ci-cd",
    category: "Cloud & DevOps",
    label: "CI/CD",
    title: "CI/CD Pipelines",
    icon: "git-branch",
    summary: "Automated build & release",
    intro:
      "Automated build, test, and release pipelines — so shipping is fast, safe, and repeatable.",
    overview:
      "We set up CI/CD that runs your tests, builds artifacts, and deploys with confidence, turning releases from a risky event into a routine, reversible one.",
    capabilities: [
      {
        icon: "git-branch",
        title: "Pipelines",
        body: "Automated build, test, and deploy on every change.",
      },
      {
        icon: "list-checks",
        title: "Quality gates",
        body: "Tests, linting, and checks that stop regressions early.",
      },
      {
        icon: "refresh-cw",
        title: "Safe releases",
        body: "Repeatable, reversible deployments with fast rollback.",
      },
    ],
  },

  // ── Mobile Development ──────────────────────────────────────────────────
  {
    slug: "flutter",
    category: "Mobile Development",
    label: "Flutter",
    title: "Flutter Development",
    icon: "feather",
    summary: "Cross-platform from one codebase",
    intro:
      "Beautiful cross-platform apps from a single Flutter codebase — native performance on iOS and Android.",
    overview:
      "We build Flutter apps that share one codebase across platforms without compromising on feel, delivering polished, performant experiences faster and more affordably.",
    capabilities: [
      {
        icon: "feather",
        title: "One codebase",
        body: "Ship iOS and Android together from shared, typed code.",
      },
      {
        icon: "zap",
        title: "Native performance",
        body: "Smooth, compiled UIs that feel native on every device.",
      },
      {
        icon: "pen-tool",
        title: "Pixel-perfect UI",
        body: "Custom, brand-accurate interfaces with fluid motion.",
      },
    ],
  },
  {
    slug: "react-native",
    category: "Mobile Development",
    label: "React Native",
    title: "React Native Development",
    icon: "smartphone",
    summary: "Native feel, shared logic",
    intro:
      "Cross-platform mobile apps with React Native — native feel, shared logic, and a fast path to both stores.",
    overview:
      "We build React Native apps that reuse logic across platforms and integrate cleanly with native modules where it counts, giving you reach without doubling the work.",
    capabilities: [
      {
        icon: "smartphone",
        title: "Cross-platform",
        body: "Shared React codebase targeting iOS and Android.",
      },
      {
        icon: "arrow-left-right",
        title: "Native modules",
        body: "Drop to native where performance or device APIs demand it.",
      },
      {
        icon: "refresh-cw",
        title: "Fast iteration",
        body: "Rapid updates and a familiar React developer workflow.",
      },
    ],
  },
  {
    slug: "android",
    category: "Mobile Development",
    label: "Native Android",
    title: "Native Android Development",
    icon: "tablet-smartphone",
    summary: "Kotlin apps built for Android",
    intro:
      "Native Android apps built in Kotlin — fast, modern, and true to the platform.",
    overview:
      "We build native Android apps with Kotlin and Jetpack, delivering performant experiences that make full use of the platform's capabilities and design language.",
    capabilities: [
      {
        icon: "tablet-smartphone",
        title: "Kotlin & Jetpack",
        body: "Modern, idiomatic Android built on current best practices.",
      },
      {
        icon: "zap",
        title: "Performance",
        body: "Responsive apps that make the most of the device.",
      },
      {
        icon: "shield-check",
        title: "Quality",
        body: "Tested, maintainable code ready for the Play Store.",
      },
    ],
  },
  {
    slug: "ios",
    category: "Mobile Development",
    label: "Native iOS",
    title: "Native iOS Development",
    icon: "apple",
    summary: "Swift apps built for iOS",
    intro:
      "Native iOS apps built in Swift — polished, performant, and at home on Apple's platforms.",
    overview:
      "We build native iOS apps with Swift and SwiftUI, crafting refined experiences that follow Apple's guidelines and take full advantage of the platform.",
    capabilities: [
      {
        icon: "apple",
        title: "Swift & SwiftUI",
        body: "Modern, idiomatic iOS built for performance and polish.",
      },
      {
        icon: "pen-tool",
        title: "Refined UX",
        body: "Interfaces that follow Apple's human-interface guidelines.",
      },
      {
        icon: "shield-check",
        title: "App Store ready",
        body: "Tested, compliant builds ready for review and release.",
      },
    ],
  },
];

/** Fast slug → record lookup for the detail route. */
const bySlug = new Map(services.map((s) => [s.slug, s]));

/** All service slugs — powers `generateStaticParams` and the sitemap. */
export const serviceSlugs = services.map((s) => s.slug);

/** Look up a single service by slug (undefined → the route calls notFound). */
export function getService(slug: string): ServiceRecord | undefined {
  return bySlug.get(slug);
}

/** Other services in the same category — used by the "related" grid. */
export function relatedServices(slug: string, limit = 3): ServiceRecord[] {
  const current = bySlug.get(slug);
  if (!current) return [];
  return services
    .filter((s) => s.category === current.category && s.slug !== slug)
    .slice(0, limit);
}

/**
 * The Services mega-menu panel, derived from the collection. Each category
 * becomes a column and each service a link that resolves to its real
 * `/services/[slug]` detail page — no separate nav copy to keep in sync.
 */
export const serviceMenuColumns: MegaColumn[] = serviceCategories.map(
  (category) => ({
    title: category,
    links: services
      .filter((s) => s.category === category)
      .map((s) => ({
        label: s.label,
        href: `/services/${s.slug}`,
        icon: s.icon,
        desc: s.summary,
      })),
  }),
);

/**
 * High-level service offerings shown on the `/services` hub page. These are
 * broader capability groupings (distinct from the technology-specific detail
 * pages above) and are kept here so all service copy lives in one module.
 */
export const serviceOfferings = [
  {
    icon: "app-window",
    title: "Custom Web Applications",
    body: "Tailored web platforms built around your workflows — internal tools, dashboards, customer portals, and everything in between.",
  },
  {
    icon: "layout-dashboard",
    title: "SaaS Product Development",
    body: "End-to-end SaaS builds: authentication, multi-tenancy, billing-ready architecture, and features engineered to scale.",
  },
  {
    icon: "pen-tool",
    title: "UI/UX Implementation",
    body: "We turn designs into accessible, pixel-accurate, responsive interfaces with smooth, premium interactions.",
  },
  {
    icon: "monitor-smartphone",
    title: "Frontend Engineering",
    body: "Modern, component-driven frontends with React, Next.js, and TypeScript — fast, maintainable, and testable.",
  },
  {
    icon: "server",
    title: "Backend Engineering",
    body: "Robust APIs, data models, and services built for reliability, performance, and clean integration.",
  },
  {
    icon: "arrow-left-right",
    title: "API Integration",
    body: "Connect payments, messaging, analytics, and third-party platforms with secure, well-documented integrations.",
  },
  {
    icon: "refresh-cw",
    title: "Software Modernization",
    body: "Re-platform and refactor legacy systems into fast, secure, maintainable applications without the risk.",
  },
  {
    icon: "settings",
    title: "Business Automation",
    body: "Streamline manual processes with custom automation, integrations, and internal tooling that saves time.",
  },
] as const;

/** The four-phase delivery model shown on the Services hub and elsewhere. */
export const process = [
  {
    icon: "1",
    title: "Discover",
    body: "We learn your goals, users, and constraints to scope the work clearly.",
  },
  {
    icon: "2",
    title: "Design",
    body: "We shape the architecture and experience before writing production code.",
  },
  {
    icon: "3",
    title: "Build",
    body: "We ship in reviewable increments with quality and communication built in.",
  },
  {
    icon: "4",
    title: "Launch & support",
    body: "We deploy, monitor, and keep improving alongside your business.",
  },
] as const;

/** Re-exported for detail-page CTAs that link to the contact hub. */
export { CONTACT_HREF };
