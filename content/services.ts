/**
 * Services collection — the single source of truth for both the Services
 * mega-menu panel and the statically-exported `/services/[slug]` detail pages.
 * Editing a record here updates the navigation, the sitemap, and the detail
 * page together; there is no duplicated copy.
 *
 * The taxonomy is a flat set of eight core offerings (AI-first ordering).
 * Each record gains its own `/services/[slug]` detail page.
 */

import { CONTACT_HREF } from "@/config/site";
import type { MegaItem, ServiceRecord } from "@/content/types";
import { caseStudies, type CaseStudy } from "@/content/case-studies";
import { industrySectors } from "@/content/industries";

export const services: ServiceRecord[] = [
  {
    slug: "ai-development",
    category: "Services",
    label: "Artificial Intelligence",
    title: "Artificial Intelligence",
    icon: "brain-circuit",
    summary: "Agents, LLMs, RAG & automation",
    intro:
      "Production AI that does real work — agents, LLM features, retrieval, and automation, built with guardrails and evaluation from day one.",
    overview:
      "We design and ship AI that goes beyond demos: autonomous agents that use your tools, retrieval-grounded answers over your own data, and intelligent automation — all with the security, observability, and evaluation production requires.",
    capabilities: [
      {
        icon: "bot",
        title: "AI agents & assistants",
        body: "Tool-using agents that plan and take action inside your systems, safely and under your rules.",
      },
      {
        icon: "database",
        title: "RAG & knowledge",
        body: "Retrieval pipelines that ground every answer in your content — accurate, citable, and current.",
      },
      {
        icon: "workflow",
        title: "AI automation",
        body: "Language models wired into dependable pipelines to remove repetitive, judgement-heavy work.",
      },
    ],
    problems: [
      {
        icon: "clock",
        title: "Teams buried in repetitive work",
        body: "Manual triage, data entry, and research consume hours that AI agents can handle reliably.",
      },
      {
        icon: "search",
        title: "Knowledge locked in silos",
        body: "Answers live scattered across docs, tickets, and wikis that nobody can search quickly.",
      },
      {
        icon: "shield-check",
        title: "AI pilots that never reach production",
        body: "Demos impress, then stall on accuracy, security, and evaluation. We build for production from day one.",
      },
    ],
    technologies: [
      "OpenAI",
      "Anthropic Claude",
      "LangChain",
      "LlamaIndex",
      "Pinecone",
      "pgvector",
      "Python",
      "TypeScript",
    ],
    benefits: [
      {
        icon: "gauge",
        title: "Hours returned to your team",
        body: "Automate judgement-heavy busywork so people focus on the work that needs them.",
      },
      {
        icon: "search-check",
        title: "Answers you can trust",
        body: "Every response is grounded in your data and citable — no hallucinated guesses.",
      },
      {
        icon: "shield-check",
        title: "Safe, observable, evaluated",
        body: "Guardrails, logging, and evaluation baked in so you can ship with confidence.",
      },
    ],
    industries: ["fintech", "healthcare", "retail-ecommerce"],
    caseStudies: ["ai-agent-triages-support-at-scale", "operations-automation-for-logistics"],
    faqs: [
      {
        q: "How do you keep AI outputs accurate?",
        a: "We ground responses in your own data with retrieval, add evaluation suites that measure accuracy over real examples, and put guardrails around what the model can do.",
      },
      {
        q: "Will our data be used to train external models?",
        a: "No. We architect around enterprise endpoints and your own infrastructure so your data stays private and is never used to train third-party models.",
      },
      {
        q: "Can you integrate AI into our existing product?",
        a: "Yes — most of our AI work wires into existing systems through your APIs and data sources, rather than replacing what you already run.",
      },
    ],
  },
  {
    slug: "custom-software-development",
    category: "Services",
    label: "Custom Software Development",
    title: "Custom Software Development",
    icon: "blocks",
    summary: "Bespoke platforms & internal tools",
    intro:
      "Bespoke software built around your workflows — internal tools, portals, and platforms engineered to fit your business, not a template.",
    overview:
      "We build custom applications end to end: clean architecture, strong typing, and testing throughout, so the software fits how you actually work today and stays easy to evolve as your business changes.",
    capabilities: [
      {
        icon: "blocks",
        title: "Tailored architecture",
        body: "Systems modelled on your real processes, with clean boundaries and clear contracts.",
      },
      {
        icon: "refresh-cw",
        title: "Legacy modernization",
        body: "Re-platform and refactor ageing systems into fast, maintainable applications without the risk.",
      },
      {
        icon: "arrow-left-right",
        title: "Integrations",
        body: "Secure, well-documented connections to payments, data providers, and third-party services.",
      },
    ],
    problems: [
      {
        icon: "refresh-cw",
        title: "Off-the-shelf tools that don't fit",
        body: "Generic software forces your team to work around it, with spreadsheets filling every gap.",
      },
      {
        icon: "clock",
        title: "Ageing systems slowing you down",
        body: "Legacy platforms are fragile, expensive to change, and hard to hire for.",
      },
      {
        icon: "arrow-left-right",
        title: "Disconnected systems",
        body: "Data trapped in separate tools means manual re-entry, errors, and no single source of truth.",
      },
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      ".NET",
      "React",
      "Next.js",
      "PostgreSQL",
      "Docker",
      "AWS",
    ],
    benefits: [
      {
        icon: "blocks",
        title: "Software that fits your workflow",
        body: "Built around how you actually operate — no compromises forced by a vendor's roadmap.",
      },
      {
        icon: "gauge",
        title: "Faster, error-free operations",
        body: "Automate the manual steps and reconciliations that slow your team down today.",
      },
      {
        icon: "layers",
        title: "A codebase you own",
        body: "Clean, documented, well-tested software your team can maintain and extend.",
      },
    ],
    industries: ["fintech", "manufacturing", "real-estate"],
    caseStudies: ["operations-automation-for-logistics", "payments-platform-rebuilt-for-scale"],
    faqs: [
      {
        q: "Do we own the source code?",
        a: "Yes. You own all the code, infrastructure, and documentation outright — there is no lock-in to us.",
      },
      {
        q: "Can you modernize our existing system?",
        a: "Yes. We re-platform and refactor legacy systems incrementally, keeping the business running while we reduce risk step by step.",
      },
      {
        q: "How do you handle integrations with our other tools?",
        a: "We build secure, well-documented connections to your existing services, payments, and data providers so everything shares one source of truth.",
      },
    ],
  },
  {
    slug: "saas-development",
    category: "Services",
    label: "SaaS Development",
    title: "SaaS Development",
    icon: "layout-dashboard",
    summary: "Multi-tenant, subscription-ready",
    intro:
      "End-to-end SaaS builds — multi-tenancy, authentication, and billing-ready architecture engineered to scale from first customer to thousands.",
    overview:
      "We take SaaS products from idea to production: secure multi-tenant foundations, subscription-ready billing architecture, and features engineered for reliability and growth — with a codebase your team can own.",
    capabilities: [
      {
        icon: "layout-dashboard",
        title: "Multi-tenant foundations",
        body: "Tenant isolation, roles, and permissions designed in from the start.",
      },
      {
        icon: "gauge",
        title: "Built to scale",
        body: "Architecture and infrastructure that stay fast and reliable as usage grows.",
      },
      {
        icon: "shield-check",
        title: "Secure & billing-ready",
        body: "Authentication, subscription hooks, and security best practices baked in.",
      },
    ],
    problems: [
      {
        icon: "rocket",
        title: "An idea that needs to reach market",
        body: "You have a validated concept but need a team that can ship a real product, fast.",
      },
      {
        icon: "gauge",
        title: "An MVP that can't scale",
        body: "The prototype that won early customers now buckles under growth and new requirements.",
      },
      {
        icon: "shield-check",
        title: "Multi-tenancy and billing are hard",
        body: "Tenant isolation, roles, and subscriptions are easy to get wrong and painful to retrofit.",
      },
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Stripe",
      "Clerk",
      "Redis",
      "AWS",
    ],
    benefits: [
      {
        icon: "rocket",
        title: "From idea to launch, faster",
        body: "A focused build that gets a real, revenue-ready product in front of customers.",
      },
      {
        icon: "gauge",
        title: "Ready to scale from day one",
        body: "Foundations engineered so growth is a config change, not a rewrite.",
      },
      {
        icon: "layout-dashboard",
        title: "Subscription-ready",
        body: "Billing, plans, and tenant management wired in so you can monetise from launch.",
      },
    ],
    industries: ["fintech", "education", "real-estate"],
    caseStudies: ["multi-tenant-saas-from-mvp-to-scale", "ai-agent-triages-support-at-scale"],
    faqs: [
      {
        q: "Can you take a product from scratch to launch?",
        a: "Yes — we take SaaS products from concept through MVP to a billing-ready, multi-tenant platform, and can keep building alongside you afterwards.",
      },
      {
        q: "How do you handle multi-tenancy?",
        a: "We design tenant isolation, roles, and permissions in from the start, so each customer's data is separated and access is controlled by design.",
      },
      {
        q: "Which billing provider do you use?",
        a: "We most often integrate Stripe for subscriptions and metering, but can wire in whichever provider fits your pricing and region.",
      },
    ],
  },
  {
    slug: "web-development",
    category: "Services",
    label: "Web Development",
    title: "Web Development",
    icon: "globe",
    summary: "Fast, SEO-ready web platforms",
    intro:
      "Fast, SEO-ready websites and web apps built on modern frameworks — from marketing sites to full-stack products.",
    overview:
      "We build web experiences that are fast by default and easy to maintain: modern, component-driven frontends, robust APIs, and rendering strategies chosen per page for speed, SEO, and great Core Web Vitals.",
    capabilities: [
      {
        icon: "code-xml",
        title: "Modern frontends",
        body: "Component-driven UIs with React, Next.js, and TypeScript — fast, accessible, and testable.",
      },
      {
        icon: "server",
        title: "Full-stack engineering",
        body: "Robust APIs, data models, and services that power the experience behind the scenes.",
      },
      {
        icon: "search",
        title: "SEO & performance",
        body: "Structured data, metadata, and tuning for excellent Core Web Vitals.",
      },
    ],
    problems: [
      {
        icon: "gauge",
        title: "A slow site losing visitors",
        body: "Sluggish load times hurt conversions, SEO rankings, and how the brand is perceived.",
      },
      {
        icon: "search",
        title: "Invisible in search",
        body: "Poor structure and metadata keep the right customers from ever finding you.",
      },
      {
        icon: "monitor-smartphone",
        title: "A dated, hard-to-update site",
        body: "Every change needs a developer, and the experience breaks on phones and tablets.",
      },
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Vercel",
      "Sanity",
      "GraphQL",
    ],
    benefits: [
      {
        icon: "zap",
        title: "Fast by default",
        body: "Excellent Core Web Vitals that lift conversions and search rankings together.",
      },
      {
        icon: "search-check",
        title: "Built to be found",
        body: "Structured data, clean metadata, and semantic markup that search engines reward.",
      },
      {
        icon: "monitor-smartphone",
        title: "Flawless on every device",
        body: "Responsive, accessible experiences that look right from phone to widescreen.",
      },
    ],
    industries: ["retail-ecommerce", "hospitality", "real-estate"],
    caseStudies: ["headless-storefront-for-a-growing-retailer", "multi-tenant-saas-from-mvp-to-scale"],
    faqs: [
      {
        q: "Do you build marketing sites or web apps?",
        a: "Both — from fast, SEO-ready marketing sites to full-stack web applications, choosing the right rendering strategy per page for speed and search.",
      },
      {
        q: "Will the site be easy for our team to update?",
        a: "Yes. Where you need editable content we integrate a headless CMS so your team can update pages without a developer.",
      },
      {
        q: "How do you ensure good performance and SEO?",
        a: "We tune for Core Web Vitals, add structured data and metadata, and use semantic, accessible markup so pages are fast and easy for search engines to understand.",
      },
    ],
  },
  {
    slug: "mobile-development",
    category: "Services",
    label: "Mobile Development",
    title: "Mobile Development",
    icon: "smartphone",
    summary: "iOS, Android & cross-platform",
    intro:
      "Polished mobile apps for iOS and Android — cross-platform from one codebase or fully native where it counts.",
    overview:
      "We build mobile apps that feel native and ship efficiently: Flutter and React Native for shared codebases, or native Swift and Kotlin when performance and platform depth demand it — always store-ready and maintainable.",
    capabilities: [
      {
        icon: "feather",
        title: "Cross-platform",
        body: "One codebase targeting iOS and Android with Flutter or React Native.",
      },
      {
        icon: "apple",
        title: "Native when it matters",
        body: "Swift and Kotlin builds where performance or device APIs demand it.",
      },
      {
        icon: "zap",
        title: "Polished & performant",
        body: "Smooth, brand-accurate interfaces ready for the App Store and Play Store.",
      },
    ],
    problems: [
      {
        icon: "smartphone",
        title: "No presence in your users' pockets",
        body: "Your customers live on mobile, but you have no app to meet them there.",
      },
      {
        icon: "refresh-cw",
        title: "Two codebases, double the cost",
        body: "Maintaining separate iOS and Android builds slows every release and doubles the bugs.",
      },
      {
        icon: "zap",
        title: "A janky app that gets uninstalled",
        body: "Slow, clunky experiences earn one-star reviews and drive users away.",
      },
    ],
    technologies: [
      "Flutter",
      "React Native",
      "Swift",
      "Kotlin",
      "Firebase",
      "TypeScript",
      "GraphQL",
      "Fastlane",
    ],
    benefits: [
      {
        icon: "feather",
        title: "One codebase, both stores",
        body: "Ship to iOS and Android together, cutting cost and time to market.",
      },
      {
        icon: "zap",
        title: "Native-quality feel",
        body: "Smooth, responsive interfaces that earn great reviews and keep users engaged.",
      },
      {
        icon: "rocket",
        title: "Store-ready delivery",
        body: "We handle the build, signing, and submission so launch day is routine.",
      },
    ],
    industries: ["retail-ecommerce", "healthcare", "hospitality"],
    caseStudies: ["clinical-portal-for-a-healthcare-provider", "headless-storefront-for-a-growing-retailer"],
    faqs: [
      {
        q: "Should we go cross-platform or native?",
        a: "Cross-platform with Flutter or React Native covers most needs from one codebase; we go native with Swift or Kotlin when performance or deep device APIs demand it.",
      },
      {
        q: "Can you publish to the App Store and Play Store for us?",
        a: "Yes — we handle builds, code signing, and submission to both stores, and can set up automated release pipelines.",
      },
      {
        q: "Can the app share a backend with our web product?",
        a: "Absolutely. We commonly build a shared API so your web and mobile apps work from the same data and business logic.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    category: "Services",
    label: "UI/UX Design",
    title: "UI/UX Design",
    icon: "pen-tool",
    summary: "Research, product & interface design",
    intro:
      "Product and interface design that turns complex problems into clear, accessible, and beautiful experiences.",
    overview:
      "We design experiences grounded in real user needs: research and flows, design systems, and pixel-accurate interfaces with premium interactions — then implement them faithfully, accessible and responsive across every device.",
    capabilities: [
      {
        icon: "search",
        title: "Research & flows",
        body: "User research, journeys, and information architecture that shape the right product.",
      },
      {
        icon: "pen-tool",
        title: "Interface & design systems",
        body: "Cohesive design systems and pixel-accurate, on-brand interfaces.",
      },
      {
        icon: "monitor-smartphone",
        title: "Accessible & responsive",
        body: "Interfaces that work for everyone, on every screen size.",
      },
    ],
    problems: [
      {
        icon: "eye",
        title: "Users confused by the product",
        body: "Unclear flows and cluttered screens drive drop-off, support tickets, and churn.",
      },
      {
        icon: "blocks",
        title: "Inconsistent, ad-hoc interfaces",
        body: "Without a design system, every screen looks and behaves differently, slowing the team.",
      },
      {
        icon: "shield-check",
        title: "Inaccessible experiences",
        body: "Designs that ignore accessibility exclude users and create legal and reputational risk.",
      },
    ],
    technologies: [
      "Figma",
      "Framer",
      "Storybook",
      "Radix UI",
      "Tailwind CSS",
      "Adobe CC",
      "Lottie",
      "Maze",
    ],
    benefits: [
      {
        icon: "gauge",
        title: "Higher conversion & retention",
        body: "Clear, intuitive flows that move users toward the actions that matter.",
      },
      {
        icon: "blocks",
        title: "A design system that scales",
        body: "Reusable components keep the product consistent and the team fast.",
      },
      {
        icon: "shield-check",
        title: "Accessible to everyone",
        body: "Interfaces that meet accessibility standards and work for all your users.",
      },
    ],
    industries: ["fintech", "healthcare", "education"],
    caseStudies: ["clinical-portal-for-a-healthcare-provider", "multi-tenant-saas-from-mvp-to-scale"],
    faqs: [
      {
        q: "Do you only design, or do you build too?",
        a: "Both. We design research-grounded interfaces and then implement them faithfully in code, so nothing is lost between design and production.",
      },
      {
        q: "Do you create a design system?",
        a: "Yes — for products of any size we build a cohesive design system of reusable components so the experience stays consistent as it grows.",
      },
      {
        q: "How do you approach accessibility?",
        a: "Accessibility is designed in from the start — colour contrast, keyboard flows, and semantics — and verified against WCAG standards, not bolted on at the end.",
      },
    ],
  },
  {
    slug: "cloud-devops",
    category: "Services",
    label: "Cloud & DevOps",
    title: "Cloud & DevOps",
    icon: "cloud",
    summary: "Infrastructure, CI/CD & scale",
    intro:
      "Scalable, secure cloud infrastructure and automated delivery — so shipping is fast, safe, and repeatable.",
    overview:
      "We design and operate cloud environments as infrastructure-as-code, containerize and orchestrate your services, and set up CI/CD that turns releases from a risky event into a routine, reversible one.",
    capabilities: [
      {
        icon: "cloud",
        title: "Cloud architecture",
        body: "Well-architected AWS and Azure environments — secure, scalable, and cost-aware.",
      },
      {
        icon: "ship-wheel",
        title: "Containers & orchestration",
        body: "Docker and Kubernetes for resilient, self-healing, autoscaling workloads.",
      },
      {
        icon: "git-branch",
        title: "CI/CD pipelines",
        body: "Automated build, test, and deploy with quality gates and fast rollback.",
      },
    ],
    problems: [
      {
        icon: "clock",
        title: "Slow, risky, manual releases",
        body: "Deploys are a stressful event, done rarely because every one might break production.",
      },
      {
        icon: "gauge",
        title: "Infrastructure that can't keep up",
        body: "Traffic spikes cause outages, while idle capacity quietly runs up the cloud bill.",
      },
      {
        icon: "shield-check",
        title: "Fragile, undocumented environments",
        body: "Hand-configured servers that no one fully understands and no one can reproduce.",
      },
    ],
    technologies: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
    ],
    benefits: [
      {
        icon: "git-branch",
        title: "Ship often, ship safely",
        body: "Automated pipelines with quality gates and fast rollback turn releases into routine.",
      },
      {
        icon: "gauge",
        title: "Scales with demand",
        body: "Autoscaling, resilient infrastructure that stays fast under load and cost-aware when idle.",
      },
      {
        icon: "refresh-cw",
        title: "Reproducible by design",
        body: "Infrastructure-as-code means every environment is versioned, auditable, and rebuildable.",
      },
    ],
    industries: ["fintech", "retail-ecommerce", "manufacturing"],
    caseStudies: ["payments-platform-rebuilt-for-scale", "multi-tenant-saas-from-mvp-to-scale"],
    faqs: [
      {
        q: "Which cloud providers do you work with?",
        a: "Primarily AWS and Azure, provisioned as infrastructure-as-code with Terraform so your environment is versioned and reproducible.",
      },
      {
        q: "Can you improve our existing deployment process?",
        a: "Yes. We often come in to add CI/CD, containerize services, and set up monitoring for teams whose current process is slow or manual.",
      },
      {
        q: "Do you help control cloud costs?",
        a: "Yes — right-sizing, autoscaling, and well-architected environments keep infrastructure cost-aware without sacrificing reliability.",
      },
    ],
  },
  {
    slug: "qa-testing",
    category: "Services",
    label: "QA & Testing",
    title: "QA & Testing",
    icon: "list-checks",
    summary: "Automated & manual quality assurance",
    intro:
      "Rigorous quality assurance — automated and manual — so what ships is reliable, accessible, and secure across every device.",
    overview:
      "We build confidence into your product with layered testing: automated unit, integration, and end-to-end suites wired into CI, plus manual, exploratory, and accessibility testing that catches what automation can't.",
    capabilities: [
      {
        icon: "list-checks",
        title: "Test automation",
        body: "Unit, integration, and end-to-end suites that run on every change.",
      },
      {
        icon: "eye",
        title: "Manual & exploratory",
        body: "Human testing across devices and edge cases to catch what automation misses.",
      },
      {
        icon: "shield-check",
        title: "Accessibility & security",
        body: "Checks that keep your product usable for everyone and safe by default.",
      },
    ],
    problems: [
      {
        icon: "refresh-cw",
        title: "Bugs reaching your customers",
        body: "Regressions slip into production because there's no safety net catching them first.",
      },
      {
        icon: "clock",
        title: "Slow, manual test cycles",
        body: "Every release needs days of hand-testing, delaying features and burning out the team.",
      },
      {
        icon: "shield-check",
        title: "Untested accessibility & security",
        body: "Gaps that expose you to real users being locked out — and to real risk.",
      },
    ],
    technologies: [
      "Playwright",
      "Cypress",
      "Jest",
      "Vitest",
      "k6",
      "Axe",
      "Appium",
      "GitHub Actions",
    ],
    benefits: [
      {
        icon: "list-checks",
        title: "Confidence on every release",
        body: "Automated suites catch regressions before they ever reach your customers.",
      },
      {
        icon: "gauge",
        title: "Faster, calmer releases",
        body: "Replace days of manual testing with checks that run in minutes on every change.",
      },
      {
        icon: "shield-check",
        title: "Quality that's provable",
        body: "Accessibility, performance, and security verified — not assumed.",
      },
    ],
    industries: ["fintech", "healthcare", "retail-ecommerce"],
    caseStudies: ["payments-platform-rebuilt-for-scale", "clinical-portal-for-a-healthcare-provider"],
    faqs: [
      {
        q: "Can you add tests to an existing codebase?",
        a: "Yes. We commonly introduce automated testing to products that have little or none, prioritising the highest-risk paths first.",
      },
      {
        q: "Do you do manual testing as well as automated?",
        a: "Both. Automated suites cover regressions on every change, while manual and exploratory testing catches the edge cases automation misses.",
      },
      {
        q: "Do you test accessibility and performance?",
        a: "Yes — we verify accessibility against WCAG, run performance and load testing, and add security checks so quality is provable, not assumed.",
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

/** Other services — used by the "related" grid on each detail page. */
export function relatedServices(slug: string, limit = 3): ServiceRecord[] {
  return services.filter((s) => s.slug !== slug).slice(0, limit);
}

/**
 * Resolve a service's `industries` slugs into linkable cards for the detail
 * page's "Industries we serve" grid. Unknown slugs are skipped so a typo can
 * never produce a dead link.
 */
export function serviceIndustries(service: ServiceRecord) {
  return (service.industries ?? [])
    .map((slug) => industrySectors.find((s) => s.slug === slug))
    .filter((s): s is (typeof industrySectors)[number] => Boolean(s))
    .map((s) => ({
      icon: s.icon,
      title: s.label,
      body: s.summary,
      href: `/industries/${s.slug}`,
    }));
}

/**
 * Resolve a service's featured `caseStudies` slugs into full study records for
 * the detail page's proof section. Falls back to nothing (the section hides)
 * when a service has no featured studies.
 */
export function serviceCaseStudies(service: ServiceRecord): CaseStudy[] {
  return (service.caseStudies ?? [])
    .map((slug) => caseStudies.find((c) => c.slug === slug))
    .filter((c): c is CaseStudy => Boolean(c));
}

/**
 * The delivery process shown on every service detail page. A single shared
 * model keeps the "how we work" story consistent across offerings.
 */
export const serviceProcess = [
  {
    icon: "1",
    title: "Discover",
    body: "We learn your goals, users, and constraints, then scope the work and success measures clearly.",
  },
  {
    icon: "2",
    title: "Architect",
    body: "We shape the architecture, data model, and experience before any production code is written.",
  },
  {
    icon: "3",
    title: "Build",
    body: "We ship in reviewable increments with tests, code review, and regular demos built in.",
  },
  {
    icon: "4",
    title: "Assure",
    body: "We verify quality, performance, accessibility, and security before anything reaches your users.",
  },
  {
    icon: "5",
    title: "Launch & iterate",
    body: "We deploy, monitor, and keep improving the product alongside your business.",
  },
] as const;

/**
 * The Services mega-menu panel — a flat list of the eight offerings, each
 * resolving to its real `/services/[slug]` detail page. Mirrors the flat
 * Industries panel so the nav stays consistent and there is no nav copy to
 * keep in sync separately from the collection.
 */
export const servicesMenu: MegaItem = {
  label: "Services",
  href: "/services",
  flat: true,
  links: services.map((s) => ({
    label: s.label,
    href: `/services/${s.slug}`,
    icon: s.icon,
    desc: s.summary,
  })),
};

/**
 * High-level service offerings shown on the `/services` hub page. Mirrors the
 * eight-service taxonomy above so the hub grid and the nav stay aligned; each
 * card links to its detail page.
 */
export const serviceOfferings = services.map((s) => ({
  icon: s.icon,
  title: s.title,
  body: s.summary,
  href: `/services/${s.slug}`,
}));

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
