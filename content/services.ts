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

export const services: ServiceRecord[] = [
  {
    slug: "ai-development",
    category: "Services",
    label: "AI Development",
    title: "AI Development",
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
