/**
 * Hire Expert collection — the single source of truth for both the Hire Expert
 * mega-menu panel and the statically-exported `/hire` hub + `/hire/[slug]` role
 * pages. Editing a record here updates the navigation, the sitemap, and the
 * role detail page together; there is no duplicated copy.
 *
 * Roles are grouped into engineering disciplines (`hireCategories`). Each role
 * carries enough copy for its own detail page (intro, overview, capabilities);
 * the engagement models and hiring FAQs below are shared across every role.
 */

import type { Feature, Faq, MegaColumn } from "@/content/types";

export type HireRole = {
  /** URL segment — unique across the collection. */
  slug: string;
  /** Discipline this role is grouped under (mega-menu column + hub section). */
  category: string;
  /** Short label used in navigation and card grids (e.g. "React Developers"). */
  label: string;
  /** Icon key resolved by `components/icon.tsx`. */
  icon: string;
  /** One-line description shown in menus and card grids. */
  summary: string;
  /** Hero lead paragraph on the role detail page. */
  intro: string;
  /** Opening body paragraph beneath the hero. */
  overview: string;
  /** What this role brings — rendered as the capability panel. */
  capabilities: Feature[];
};

export const hireCategories = [
  "AI Engineers",
  "Frontend Developers",
  "Backend Developers",
  "Mobile Developers",
  "DevOps Engineers",
  "UI/UX Designers",
  "QA Engineers",
  "Dedicated Teams",
] as const;

export const hireRoles: HireRole[] = [
  // AI Engineers
  {
    slug: "ai-agent-engineers",
    category: "AI Engineers",
    label: "AI Agent Engineers",
    icon: "bot",
    summary: "Build autonomous, tool-using agents",
    intro:
      "Hire AI agent engineers who design autonomous, tool-using systems that plan and act inside your stack — safely and under your rules.",
    overview:
      "Our agent engineers go beyond prompt demos: they build production agents with planning, tool use, memory, and guardrails, wired into your systems with the observability and evaluation real deployments require.",
    capabilities: [
      { icon: "workflow", title: "Agent architecture", body: "Planning, tool-calling, and memory designed for reliability, not just a demo." },
      { icon: "shield-check", title: "Guardrails & evaluation", body: "Safety rails, permissions, and evaluation harnesses that keep agents in bounds." },
      { icon: "plug-zap", title: "Systems integration", body: "Agents connected to your APIs, data, and internal tools through secure interfaces." },
    ],
  },
  {
    slug: "llm-rag-engineers",
    category: "AI Engineers",
    label: "LLM & RAG Engineers",
    icon: "database",
    summary: "Grounded, production-grade LLM apps",
    intro:
      "Hire LLM and RAG engineers who ground every answer in your own data — accurate, citable, and current.",
    overview:
      "Our LLM engineers build retrieval pipelines and LLM features that hold up in production: chunking and embeddings tuned to your content, retrieval you can trust, and evaluation that catches regressions before your users do.",
    capabilities: [
      { icon: "database", title: "Retrieval pipelines", body: "Chunking, embeddings, and retrieval tuned to your content for grounded answers." },
      { icon: "search", title: "Evaluation & quality", body: "Answer-quality metrics and test sets so accuracy is measured, not assumed." },
      { icon: "gauge", title: "Cost & latency tuning", body: "Model selection, caching, and streaming for fast, affordable responses." },
    ],
  },
  {
    slug: "ml-engineers",
    category: "AI Engineers",
    label: "ML Engineers",
    icon: "brain-circuit",
    summary: "Predictive models and pipelines",
    intro:
      "Hire ML engineers who turn your data into predictive models and dependable pipelines — from prototype to production.",
    overview:
      "Our ML engineers own the full lifecycle: feature engineering, training, and deployment, plus the monitoring and retraining pipelines that keep models accurate as your data shifts.",
    capabilities: [
      { icon: "brain-circuit", title: "Model development", body: "Feature engineering, training, and validation grounded in your real data." },
      { icon: "workflow", title: "ML pipelines", body: "Reproducible training and inference pipelines, versioned and automated." },
      { icon: "activity", title: "Monitoring & retraining", body: "Drift detection and retraining so models stay accurate over time." },
    ],
  },
  {
    slug: "mcp-integration-engineers",
    category: "AI Engineers",
    label: "MCP Integration Engineers",
    icon: "plug-zap",
    summary: "Wire models into your systems",
    intro:
      "Hire MCP integration engineers who connect language models securely to your tools, data, and internal systems.",
    overview:
      "Our engineers build and integrate Model Context Protocol servers so your models can safely read and act across your stack — with authentication, scoping, and auditability designed in from the start.",
    capabilities: [
      { icon: "plug-zap", title: "MCP servers", body: "Custom MCP servers exposing your tools and data to models cleanly." },
      { icon: "shield-check", title: "Secure access", body: "Authentication, scoping, and audit trails around every model action." },
      { icon: "arrow-left-right", title: "System bridging", body: "Reliable connections between models and your existing APIs and services." },
    ],
  },
  // Frontend Developers
  {
    slug: "react-developers",
    category: "Frontend Developers",
    label: "React Developers",
    icon: "atom",
    summary: "High-performing interfaces",
    intro:
      "Hire React developers who build fast, accessible, high-performing interfaces with clean, testable component architecture.",
    overview:
      "Our React developers write modern, typed component code that scales: thoughtful state management, reusable design-system components, and performance tuning that keeps interactions smooth under real-world load.",
    capabilities: [
      { icon: "atom", title: "Component architecture", body: "Reusable, typed components and state management that scale with your app." },
      { icon: "zap", title: "Performance", body: "Rendering, code-splitting, and bundle tuning for fast, smooth UIs." },
      { icon: "monitor-smartphone", title: "Accessible & responsive", body: "Interfaces that work for everyone, on every screen size." },
    ],
  },
  {
    slug: "nextjs-developers",
    category: "Frontend Developers",
    label: "Next.js Developers",
    icon: "triangle",
    summary: "Fast, SEO-ready web apps",
    intro:
      "Hire Next.js developers who ship fast, SEO-ready web apps with the right rendering strategy for every page.",
    overview:
      "Our Next.js developers choose rendering per route — static, server, or client — for the best mix of speed, SEO, and freshness, and back it with robust data fetching, caching, and excellent Core Web Vitals.",
    capabilities: [
      { icon: "triangle", title: "Rendering strategy", body: "Static, server, and client rendering chosen per page for speed and SEO." },
      { icon: "search", title: "SEO & metadata", body: "Structured data, canonical URLs, and metadata that rank and share well." },
      { icon: "gauge", title: "Core Web Vitals", body: "Tuning for excellent load, interactivity, and stability scores." },
    ],
  },
  {
    slug: "angular-developers",
    category: "Frontend Developers",
    label: "Angular Developers",
    icon: "shield",
    summary: "Enterprise-grade frontends",
    intro:
      "Hire Angular developers who build structured, enterprise-grade frontends that stay maintainable as teams and features grow.",
    overview:
      "Our Angular developers lean on the framework's structure — modules, typed services, and RxJS — to build large applications that stay organised, testable, and consistent across big teams.",
    capabilities: [
      { icon: "shield", title: "Structured architecture", body: "Modules, services, and typed patterns built for large, long-lived apps." },
      { icon: "arrow-left-right", title: "Reactive data flow", body: "RxJS-driven state and data flows that stay predictable at scale." },
      { icon: "list-checks", title: "Testable by default", body: "Unit and integration tests woven into the component structure." },
    ],
  },
  {
    slug: "vue-developers",
    category: "Frontend Developers",
    label: "Vue.js Developers",
    icon: "diamond",
    summary: "Reactive, lightweight UIs",
    intro:
      "Hire Vue.js developers who build reactive, lightweight interfaces that are quick to ship and easy to maintain.",
    overview:
      "Our Vue developers use the Composition API and a component-first approach to build fast, approachable UIs — lean bundles, clear reactivity, and code your team can pick up quickly.",
    capabilities: [
      { icon: "diamond", title: "Composition API", body: "Composable, reusable logic for clean, maintainable components." },
      { icon: "zap", title: "Lightweight & fast", body: "Lean bundles and efficient reactivity for snappy interfaces." },
      { icon: "blocks", title: "Component systems", body: "Consistent, reusable UI building blocks across your product." },
    ],
  },
  // Backend Developers
  {
    slug: "nodejs-developers",
    category: "Backend Developers",
    label: "Node.js Developers",
    icon: "hexagon",
    summary: "Scalable APIs and services",
    intro:
      "Hire Node.js developers who build scalable, well-typed APIs and services that stay fast under load.",
    overview:
      "Our Node.js developers build robust backends with TypeScript throughout: clean REST and GraphQL APIs, solid data models, and asynchronous services designed for reliability and horizontal scale.",
    capabilities: [
      { icon: "hexagon", title: "API design", body: "Clean, versioned REST and GraphQL APIs with clear contracts." },
      { icon: "server", title: "Scalable services", body: "Asynchronous, stateless services built to scale horizontally." },
      { icon: "shield-check", title: "Secure & tested", body: "Auth, validation, and test coverage baked into every endpoint." },
    ],
  },
  {
    slug: "python-developers",
    category: "Backend Developers",
    label: "Python Developers",
    icon: "code-xml",
    summary: "Data, AI, and backend systems",
    intro:
      "Hire Python developers who build backends, data pipelines, and AI-powered systems on a clean, maintainable codebase.",
    overview:
      "Our Python developers work across web backends, data engineering, and AI: typed FastAPI and Django services, dependable data pipelines, and integrations that connect models and data to the rest of your stack.",
    capabilities: [
      { icon: "server", title: "Web backends", body: "Typed FastAPI and Django services with clean architecture." },
      { icon: "database", title: "Data pipelines", body: "Reliable ingestion, transformation, and processing pipelines." },
      { icon: "brain-circuit", title: "AI & ML integration", body: "Models and data wired into production Python services." },
    ],
  },
  {
    slug: "dotnet-developers",
    category: "Backend Developers",
    label: ".NET Developers",
    icon: "circle-dot",
    summary: "Robust enterprise systems",
    intro:
      "Hire .NET developers who build robust, secure enterprise systems on a modern, cross-platform stack.",
    overview:
      "Our .NET developers build performant back-office and line-of-business systems with C# and ASP.NET Core: strong typing, clean architecture, and enterprise integrations that hold up to real business complexity.",
    capabilities: [
      { icon: "circle-dot", title: "ASP.NET Core", body: "Modern, cross-platform C# services with clean architecture." },
      { icon: "blocks", title: "Enterprise systems", body: "Line-of-business applications built for real operational complexity." },
      { icon: "arrow-left-right", title: "Integrations", body: "Secure connections to enterprise data sources and services." },
    ],
  },
  {
    slug: "laravel-developers",
    category: "Backend Developers",
    label: "Laravel Developers",
    icon: "layers",
    summary: "Rapid PHP application builds",
    intro:
      "Hire Laravel developers who build polished PHP web applications quickly, without cutting corners on quality.",
    overview:
      "Our Laravel developers use the framework's conventions and rich ecosystem to move fast: clean MVC structure, expressive Eloquent data models, and well-tested features that ship on a predictable timeline.",
    capabilities: [
      { icon: "layers", title: "Rapid delivery", body: "Convention-driven builds that reach production quickly." },
      { icon: "database", title: "Eloquent data models", body: "Expressive, maintainable data layers and migrations." },
      { icon: "list-checks", title: "Tested features", body: "Feature and unit tests that keep rapid builds reliable." },
    ],
  },
  // Mobile Developers
  {
    slug: "react-native-developers",
    category: "Mobile Developers",
    label: "React Native Developers",
    icon: "smartphone",
    summary: "Cross-platform apps",
    intro:
      "Hire React Native developers who ship polished iOS and Android apps from a single, shared codebase.",
    overview:
      "Our React Native developers build cross-platform apps that feel native: shared business logic, platform-aware UI, and native modules where performance or device APIs demand them — all store-ready and maintainable.",
    capabilities: [
      { icon: "smartphone", title: "Shared codebase", body: "One codebase targeting iOS and Android with native feel." },
      { icon: "plug-zap", title: "Native modules", body: "Bridges to native APIs where performance or device access is needed." },
      { icon: "zap", title: "Store-ready", body: "Smooth, brand-accurate apps ready for the App Store and Play Store." },
    ],
  },
  {
    slug: "flutter-developers",
    category: "Mobile Developers",
    label: "Flutter Developers",
    icon: "feather",
    summary: "One codebase, every platform",
    intro:
      "Hire Flutter developers who deliver beautiful, high-performance apps for mobile, web, and desktop from one codebase.",
    overview:
      "Our Flutter developers use a single Dart codebase and a pixel-accurate widget system to ship consistent, expressive UIs across platforms — with the performance of compiled, natively-rendered apps.",
    capabilities: [
      { icon: "feather", title: "Multi-platform", body: "Mobile, web, and desktop from one Dart codebase." },
      { icon: "pen-tool", title: "Expressive UI", body: "Pixel-accurate, brand-accurate interfaces via the widget system." },
      { icon: "zap", title: "Native performance", body: "Compiled, natively-rendered apps that stay smooth." },
    ],
  },
  {
    slug: "ios-developers",
    category: "Mobile Developers",
    label: "iOS Developers",
    icon: "apple",
    summary: "Native Swift applications",
    intro:
      "Hire iOS developers who build fast, elegant native apps in Swift that feel right at home on Apple devices.",
    overview:
      "Our iOS developers build with Swift and SwiftUI to deliver responsive, platform-idiomatic experiences — deep device-API integration, polished interactions, and App Store submissions handled end to end.",
    capabilities: [
      { icon: "apple", title: "Swift & SwiftUI", body: "Modern, idiomatic native iOS with responsive interfaces." },
      { icon: "plug-zap", title: "Device APIs", body: "Deep integration with camera, location, notifications, and more." },
      { icon: "zap", title: "App Store ready", body: "Polished builds submitted and shipped end to end." },
    ],
  },
  {
    slug: "android-developers",
    category: "Mobile Developers",
    label: "Android Developers",
    icon: "tablet-smartphone",
    summary: "Native Kotlin applications",
    intro:
      "Hire Android developers who build performant, native apps in Kotlin across the full range of Android devices.",
    overview:
      "Our Android developers build with Kotlin and Jetpack Compose for modern, maintainable apps — clean architecture, smooth performance across device sizes, and Play Store releases managed end to end.",
    capabilities: [
      { icon: "tablet-smartphone", title: "Kotlin & Compose", body: "Modern, maintainable native Android with Jetpack Compose." },
      { icon: "blocks", title: "Clean architecture", body: "Structured, testable app architecture that scales." },
      { icon: "zap", title: "Play Store ready", body: "Smooth releases across the Android device range." },
    ],
  },
  // DevOps Engineers
  {
    slug: "cloud-engineers",
    category: "DevOps Engineers",
    label: "Cloud Engineers",
    icon: "cloud",
    summary: "AWS, Azure, and GCP delivery",
    intro:
      "Hire cloud engineers who design secure, cost-aware infrastructure on AWS, Azure, and GCP.",
    overview:
      "Our cloud engineers build well-architected environments as infrastructure-as-code: right-sized, secure, and observable, with cost controls and scalability designed in rather than bolted on later.",
    capabilities: [
      { icon: "cloud", title: "Cloud architecture", body: "Well-architected AWS, Azure, and GCP environments." },
      { icon: "blocks", title: "Infrastructure as code", body: "Reproducible infrastructure with Terraform and friends." },
      { icon: "gauge", title: "Cost & scale", body: "Right-sizing and autoscaling that balance cost and performance." },
    ],
  },
  {
    slug: "kubernetes-engineers",
    category: "DevOps Engineers",
    label: "Kubernetes Engineers",
    icon: "ship-wheel",
    summary: "Orchestration at scale",
    intro:
      "Hire Kubernetes engineers who run resilient, self-healing, autoscaling workloads in production.",
    overview:
      "Our Kubernetes engineers containerize and orchestrate your services for reliability at scale — sensible cluster design, secure defaults, and autoscaling that keeps workloads healthy under changing load.",
    capabilities: [
      { icon: "ship-wheel", title: "Cluster design", body: "Resilient, secure cluster architecture built to scale." },
      { icon: "refresh-cw", title: "Self-healing workloads", body: "Health checks, rollouts, and autoscaling for reliability." },
      { icon: "shield-check", title: "Secure defaults", body: "Network policies, RBAC, and hardened configurations." },
    ],
  },
  {
    slug: "cicd-engineers",
    category: "DevOps Engineers",
    label: "CI/CD Engineers",
    icon: "git-branch",
    summary: "Automated build & release",
    intro:
      "Hire CI/CD engineers who turn releases from a risky event into a routine, reversible one.",
    overview:
      "Our CI/CD engineers automate build, test, and deploy with quality gates and fast rollback — pipelines that catch problems early and let your team ship confidently, many times a day.",
    capabilities: [
      { icon: "git-branch", title: "Pipeline automation", body: "Automated build, test, and deploy on every change." },
      { icon: "list-checks", title: "Quality gates", body: "Tests, linting, and checks that block regressions early." },
      { icon: "refresh-cw", title: "Fast rollback", body: "Safe, reversible deploys that reduce release risk." },
    ],
  },
  {
    slug: "sre",
    category: "DevOps Engineers",
    label: "Site Reliability (SRE)",
    icon: "activity",
    summary: "Observability and uptime",
    intro:
      "Hire site reliability engineers who keep your systems observable, resilient, and available.",
    overview:
      "Our SREs bring production discipline: meaningful metrics and alerting, defined SLOs, and incident practices that turn outages into learning — so reliability is measured and improved, not left to chance.",
    capabilities: [
      { icon: "activity", title: "Observability", body: "Metrics, logs, and tracing that make systems legible." },
      { icon: "gauge", title: "SLOs & alerting", body: "Meaningful service objectives and actionable alerts." },
      { icon: "shield-check", title: "Incident response", body: "Runbooks and postmortems that build lasting resilience." },
    ],
  },
  // UI/UX Designers
  {
    slug: "product-designers",
    category: "UI/UX Designers",
    label: "Product Designers",
    icon: "pen-tool",
    summary: "End-to-end product design",
    intro:
      "Hire product designers who take problems from research through to polished, shippable interfaces.",
    overview:
      "Our product designers own the whole arc: user research and flows, then pixel-accurate, on-brand interfaces with premium interactions — designed to be built, accessible and responsive on every screen.",
    capabilities: [
      { icon: "search", title: "Research & flows", body: "User research and journeys that shape the right product." },
      { icon: "pen-tool", title: "Interface design", body: "Pixel-accurate, on-brand interfaces with premium interactions." },
      { icon: "monitor-smartphone", title: "Built to ship", body: "Designs made to be implemented, accessible and responsive." },
    ],
  },
  {
    slug: "ux-researchers",
    category: "UI/UX Designers",
    label: "UX Researchers",
    icon: "search",
    summary: "Insight-driven decisions",
    intro:
      "Hire UX researchers who ground product decisions in real evidence about your users.",
    overview:
      "Our UX researchers plan and run the right studies — interviews, usability testing, and analysis — and turn findings into clear, prioritised recommendations your team can act on with confidence.",
    capabilities: [
      { icon: "search", title: "User studies", body: "Interviews, surveys, and usability testing done rigorously." },
      { icon: "list-checks", title: "Synthesis", body: "Findings distilled into clear, prioritised recommendations." },
      { icon: "eye", title: "Evidence-led design", body: "Decisions grounded in what users actually do and need." },
    ],
  },
  {
    slug: "design-systems",
    category: "UI/UX Designers",
    label: "Design Systems",
    icon: "blocks",
    summary: "Scalable, consistent UI",
    intro:
      "Hire design-systems specialists who make your UI consistent, scalable, and fast to build with.",
    overview:
      "Our design-systems specialists build the shared language between design and engineering: tokens, components, and documentation that keep your product coherent and speed up every team that touches it.",
    capabilities: [
      { icon: "blocks", title: "Tokens & components", body: "Reusable design tokens and components as a single source of truth." },
      { icon: "arrow-left-right", title: "Design–dev bridge", body: "Systems that keep design and code in lockstep." },
      { icon: "list-checks", title: "Documentation", body: "Usage guidelines that make the system easy to adopt." },
    ],
  },
  // QA Engineers
  {
    slug: "automation-qa",
    category: "QA Engineers",
    label: "Automation QA",
    icon: "list-checks",
    summary: "Fast, reliable test suites",
    intro:
      "Hire automation QA engineers who build fast, reliable test suites that run on every change.",
    overview:
      "Our automation QA engineers build layered coverage — unit, integration, and end-to-end — wired into CI so regressions are caught before release and your team ships with confidence.",
    capabilities: [
      { icon: "list-checks", title: "Test automation", body: "Unit, integration, and end-to-end suites that run continuously." },
      { icon: "git-branch", title: "CI integration", body: "Tests wired into pipelines to block regressions early." },
      { icon: "gauge", title: "Reliable & fast", body: "Stable, quick suites that teams actually trust." },
    ],
  },
  {
    slug: "manual-qa",
    category: "QA Engineers",
    label: "Manual QA",
    icon: "search-check",
    summary: "Thorough exploratory testing",
    intro:
      "Hire manual QA engineers who catch the edge cases automation misses through thorough, exploratory testing.",
    overview:
      "Our manual QA engineers test across real devices and scenarios with a critical eye — structured test plans plus exploratory testing that surfaces the subtle, human-facing issues that matter.",
    capabilities: [
      { icon: "search-check", title: "Exploratory testing", body: "Critical, human testing that finds what scripts miss." },
      { icon: "monitor-smartphone", title: "Cross-device", body: "Coverage across real devices, browsers, and screen sizes." },
      { icon: "list-checks", title: "Structured plans", body: "Clear test plans and reproducible, well-written bug reports." },
    ],
  },
  {
    slug: "performance-qa",
    category: "QA Engineers",
    label: "Performance QA",
    icon: "gauge",
    summary: "Load and stress testing",
    intro:
      "Hire performance QA engineers who make sure your system holds up under real-world load.",
    overview:
      "Our performance QA engineers design realistic load and stress tests, find the bottlenecks, and give you clear, actionable results — so you know your system's limits before your users do.",
    capabilities: [
      { icon: "gauge", title: "Load & stress testing", body: "Realistic scenarios that reveal capacity and limits." },
      { icon: "activity", title: "Bottleneck analysis", body: "Profiling that pinpoints where performance breaks down." },
      { icon: "list-checks", title: "Actionable results", body: "Clear reports your team can act on immediately." },
    ],
  },
  // Dedicated Teams
  {
    slug: "full-product-team",
    category: "Dedicated Teams",
    label: "Full Product Team",
    icon: "users",
    summary: "Design, build, and ship end-to-end",
    intro:
      "Hire a full product team — design, engineering, and QA — that takes your product from idea to launch.",
    overview:
      "Get a cross-functional, senior team that owns delivery end to end: product design, frontend and backend engineering, and QA, working as one unit with clear communication and reviewable progress.",
    capabilities: [
      { icon: "users", title: "Cross-functional", body: "Design, engineering, and QA working as one team." },
      { icon: "rocket", title: "End-to-end ownership", body: "From discovery to launch and beyond, we own the outcome." },
      { icon: "handshake", title: "One accountable partner", body: "Clear communication and reviewable, incremental progress." },
    ],
  },
  {
    slug: "staff-augmentation",
    category: "Dedicated Teams",
    label: "Staff Augmentation",
    icon: "user-plus",
    summary: "Extend your in-house team",
    intro:
      "Hire senior engineers to extend your in-house team and add capacity without the hiring overhead.",
    overview:
      "Our staff-augmentation engineers plug into your team, tools, and process quickly — adding senior capacity where you need it while your team keeps ownership and direction.",
    capabilities: [
      { icon: "user-plus", title: "Seamless integration", body: "Engineers who join your stand-ups, tools, and workflow." },
      { icon: "zap", title: "Fast ramp-up", body: "Senior developers productive from the first sprint." },
      { icon: "arrow-left-right", title: "Flexible scaling", body: "Scale capacity up or down as your roadmap shifts." },
    ],
  },
  {
    slug: "managed-delivery",
    category: "Dedicated Teams",
    label: "Managed Delivery",
    icon: "rocket",
    summary: "We own the outcome",
    intro:
      "Hire us to own delivery of a defined scope — you set the goal, we manage the team and the outcome.",
    overview:
      "With managed delivery we take responsibility for the whole engagement: planning, staffing, and execution against agreed milestones — so you get a predictable outcome without managing the day-to-day.",
    capabilities: [
      { icon: "rocket", title: "Outcome ownership", body: "We manage the team and deliver against agreed milestones." },
      { icon: "list-checks", title: "Clear scope", body: "Defined goals, milestones, and transparent progress." },
      { icon: "handshake", title: "Predictable delivery", body: "Accountable execution without the day-to-day overhead." },
    ],
  },
];

/**
 * Engagement models shared across every role — how clients actually hire. Shown
 * on the `/hire` hub and reusable on role pages.
 */
export const engagementModels: Feature[] = [
  {
    icon: "user-plus",
    title: "Staff augmentation",
    body: "Add senior specialists to your existing team on a flexible, ongoing basis — you keep direction and ownership.",
  },
  {
    icon: "users",
    title: "Dedicated team",
    body: "A cross-functional team working exclusively on your product, as an extension of your own.",
  },
  {
    icon: "rocket",
    title: "Managed delivery",
    body: "We own a defined scope end to end and deliver against agreed milestones — a fixed outcome, not just hours.",
  },
];

/** Shared hiring FAQs — engagement, ramp-up, and how it works. */
export const hireFaqs: Faq[] = [
  {
    q: "How quickly can someone start?",
    a: "For most roles we can introduce vetted candidates within days and have someone contributing within the first week, depending on the specialism and onboarding requirements.",
  },
  {
    q: "What engagement models do you offer?",
    a: "Three: staff augmentation (extend your team), a dedicated team (a cross-functional unit working only on your product), and managed delivery (we own a defined scope and its outcome). We'll recommend the right fit for your goals.",
  },
  {
    q: "How do you ensure quality?",
    a: "Every engineer is senior and vetted, works TypeScript-first where applicable, and follows our review, testing, and communication standards. You get reviewable, incremental progress — not a black box.",
  },
  {
    q: "Can we scale the team up or down?",
    a: "Yes. Engagements are flexible: add capacity as your roadmap grows or scale back between phases, without the overhead of permanent hiring.",
  },
];

/**
 * Why teams hire through Rapid Tech Plus — shared across every role landing
 * page (the "Why Rapid Tech Plus" section).
 */
export const whyRapidTechPlus: Feature[] = [
  {
    icon: "users",
    title: "Senior, vetted engineers",
    body: "Every developer is senior, rigorously vetted, and proven on production systems — no juniors billed as experts.",
  },
  {
    icon: "zap",
    title: "Matched in days, not months",
    body: "Skip the hiring overhead. We introduce the right talent within days and have them contributing in the first week.",
  },
  {
    icon: "arrow-left-right",
    title: "Flexible engagement",
    body: "Scale up or down as your roadmap shifts — staff augmentation, a dedicated team, or fully managed delivery.",
  },
  {
    icon: "shield-check",
    title: "Quality built in",
    body: "TypeScript-first engineering, code review, and testing standards baked into every engagement.",
  },
  {
    icon: "clock",
    title: "Time-zone overlap",
    body: "Working hours aligned to your team for real-time stand-ups, collaboration, and fast turnarounds.",
  },
  {
    icon: "eye",
    title: "Transparent progress",
    body: "Reviewable, incremental delivery and direct communication — you always see how the work is going.",
  },
];

/**
 * How hiring a specialist works, end to end — shared across every role landing
 * page (the "Development process" / how-we-work section). Numeric icons render
 * as step markers in the timeline.
 */
export const hireProcess = [
  {
    icon: "1",
    title: "Share your needs",
    body: "Tell us the role, skills, and goals. We scope the engagement and the right engagement model with you.",
  },
  {
    icon: "2",
    title: "Get matched",
    body: "We shortlist senior, vetted specialists who fit your stack, domain, and ways of working — within days.",
  },
  {
    icon: "3",
    title: "Interview & select",
    body: "You interview the shortlist and pick who joins. No obligation until you're confident in the fit.",
  },
  {
    icon: "4",
    title: "Onboard",
    body: "Your specialist plugs into your tools, stand-ups, and workflow and is productive from the first sprint.",
  },
  {
    icon: "5",
    title: "Deliver & scale",
    body: "You get reviewable, incremental progress — and can scale the team up or down as your roadmap changes.",
  },
] as const;

/**
 * Representative technology stack per role, keyed by slug. Rendered as the
 * "Technology stack" chip cloud on each role landing page. Kept as a map (not a
 * field on every record) so the stacks read as one maintainable block; the
 * resolver falls back to an empty list so a new role never breaks the page.
 */
const roleTech: Record<string, string[]> = {
  // AI Engineers
  "ai-agent-engineers": ["Anthropic Claude", "OpenAI", "LangChain", "LangGraph", "MCP", "Python", "TypeScript", "Vector DBs"],
  "llm-rag-engineers": ["OpenAI", "Anthropic Claude", "LlamaIndex", "LangChain", "Pinecone", "pgvector", "Python"],
  "ml-engineers": ["Python", "PyTorch", "TensorFlow", "scikit-learn", "MLflow", "Pandas", "SageMaker"],
  "mcp-integration-engineers": ["MCP", "TypeScript", "Node.js", "Python", "OpenAI", "Anthropic Claude", "OAuth"],
  // Frontend Developers
  "react-developers": ["React", "TypeScript", "Next.js", "Redux", "Tailwind CSS", "Vite", "Jest", "Testing Library"],
  "nextjs-developers": ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "tRPC", "Prisma"],
  "angular-developers": ["Angular", "TypeScript", "RxJS", "NgRx", "Jasmine", "Karma", "SCSS"],
  "vue-developers": ["Vue.js", "TypeScript", "Nuxt", "Pinia", "Vite", "Vitest", "Tailwind CSS"],
  // Backend Developers
  "nodejs-developers": ["Node.js", "TypeScript", "Express", "NestJS", "GraphQL", "PostgreSQL", "Redis", "Prisma"],
  "python-developers": ["Python", "FastAPI", "Django", "PostgreSQL", "Celery", "SQLAlchemy", "Docker"],
  "dotnet-developers": ["C#", "ASP.NET Core", "Entity Framework", "SQL Server", "Azure", "xUnit"],
  "laravel-developers": ["PHP", "Laravel", "MySQL", "Eloquent", "Redis", "Livewire", "PHPUnit"],
  // Mobile Developers
  "react-native-developers": ["React Native", "TypeScript", "Expo", "Redux", "Firebase", "Jest"],
  "flutter-developers": ["Flutter", "Dart", "Bloc", "Riverpod", "Firebase", "GetX"],
  "ios-developers": ["Swift", "SwiftUI", "UIKit", "Combine", "Core Data", "XCTest"],
  "android-developers": ["Kotlin", "Jetpack Compose", "Coroutines", "Room", "Hilt", "JUnit"],
  // DevOps Engineers
  "cloud-engineers": ["AWS", "Azure", "GCP", "Terraform", "CloudFormation", "Docker", "Kubernetes"],
  "kubernetes-engineers": ["Kubernetes", "Docker", "Helm", "Istio", "ArgoCD", "Prometheus", "Terraform"],
  "cicd-engineers": ["GitHub Actions", "GitLab CI", "Jenkins", "Docker", "ArgoCD", "Terraform"],
  sre: ["Prometheus", "Grafana", "Datadog", "PagerDuty", "Kubernetes", "OpenTelemetry", "Terraform"],
  // UI/UX Designers
  "product-designers": ["Figma", "FigJam", "Framer", "Prototyping", "Design Systems"],
  "ux-researchers": ["Figma", "Maze", "Dovetail", "UserTesting", "Hotjar"],
  "design-systems": ["Figma", "Storybook", "Design Tokens", "Style Dictionary", "Tailwind CSS"],
  // QA Engineers
  "automation-qa": ["Playwright", "Cypress", "Selenium", "Appium", "Jest", "GitHub Actions"],
  "manual-qa": ["TestRail", "Jira", "Postman", "BrowserStack", "Charles Proxy"],
  "performance-qa": ["k6", "JMeter", "Gatling", "Grafana", "Lighthouse"],
  // Dedicated Teams
  "full-product-team": ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Figma"],
  "staff-augmentation": ["React", "Node.js", "Python", "TypeScript", "AWS", "Docker"],
  "managed-delivery": ["React", "Node.js", "TypeScript", "AWS", "Kubernetes", "Figma"],
};

/** Representative technology stack for a role (empty if none is mapped). */
export function getRoleTech(slug: string): string[] {
  return roleTech[slug] ?? [];
}

/** Fast slug → record lookup for the detail route. */
const bySlug = new Map(hireRoles.map((r) => [r.slug, r]));

/** All hire slugs — powers `generateStaticParams` and the sitemap. */
export const hireSlugs = hireRoles.map((r) => r.slug);

/** Look up a single role by slug (undefined → the route calls notFound). */
export function getHireRole(slug: string): HireRole | undefined {
  return bySlug.get(slug);
}

/** Other roles in the same discipline — used by the "related" grid. */
export function relatedRoles(slug: string, limit = 3): HireRole[] {
  const role = bySlug.get(slug);
  if (!role) return [];
  const sameCategory = hireRoles.filter(
    (r) => r.slug !== slug && r.category === role.category,
  );
  const pool =
    sameCategory.length >= limit
      ? sameCategory
      : [...sameCategory, ...hireRoles.filter((r) => r.slug !== slug && r.category !== role.category)];
  return pool.slice(0, limit);
}

/**
 * Roles grouped by discipline — powers the `/hire` hub page's sectioned grid.
 */
export const hireGroups = hireCategories.map((category) => ({
  category,
  roles: hireRoles.filter((r) => r.category === category),
}));

/**
 * Hire Expert mega-menu columns, derived from the role collection. Each link
 * resolves to its real `/hire/[slug]` role page.
 */
export const hireMenuColumns: MegaColumn[] = hireCategories.map((category) => ({
  title: category,
  links: hireRoles
    .filter((r) => r.category === category)
    .map((r) => ({
      label: r.label,
      href: `/hire/${r.slug}`,
      icon: r.icon,
      desc: r.summary,
    })),
}));
