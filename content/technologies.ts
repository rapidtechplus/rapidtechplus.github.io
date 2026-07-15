/**
 * Technologies collection — the single source of truth for the Technologies
 * mega-menu panel, the `/technologies` hub's featured grid, and the
 * statically-exported `/technologies/[slug]` landing pages (Priority 6).
 *
 * Each record carries enough copy for its own dedicated landing page, following
 * the flow: [Tech] Development → Why [Tech] → Why Rapid Tech Plus → Projects →
 * FAQs. The "why us" reasons and closing CTA are shared across every page.
 *
 * Everything here is serializable — icons are referenced by string name
 * (resolved by `components/icon.tsx`) — so records render statically.
 */

import type { MegaItem, DetailRecord, Feature, Faq, Metric } from "@/content/types";

/** An illustrative project rendered as a metric card on a technology page. */
export type TechProject = {
  icon: string;
  /** Short project label. */
  title: string;
  /** The kind of build (e.g. "SaaS platform"). */
  kind: string;
  /** One or two lines describing the work. */
  summary: string;
  /** Representative outcome metrics. */
  metrics: Metric[];
};

/** A technology with a static landing page at `/technologies/[slug]`. */
export type TechRecord = DetailRecord & {
  /** Hero lead paragraph on the landing page. */
  intro: string;
  /** Opening body paragraph beneath the hero (the "development" overview). */
  overview: string;
  /** Why this technology — rendered as a capability/reasons card grid. */
  reasons: Feature[];
  /** Representative projects — rendered as metric cards. */
  projects: TechProject[];
  /** Technology-specific FAQs. */
  faqs: Faq[];
};

export const technologies: TechRecord[] = [
  {
    slug: "react",
    label: "React",
    title: "React Development",
    icon: "atom",
    summary: "Fast, component-driven interfaces",
    intro:
      "React development that turns complex product ideas into fast, accessible, component-driven interfaces your users love and your team can maintain.",
    overview:
      "We build web applications with React the way it's meant to be built: a well-structured component architecture, typed props and state, and rendering tuned for performance. From dashboards to customer-facing products, our React work stays fast under real-world load and easy to extend as your roadmap grows.",
    reasons: [
      { icon: "blocks", title: "Component architecture", body: "Reusable, typed components and a design-system approach that scale cleanly as your product grows." },
      { icon: "zap", title: "Performance by default", body: "Code-splitting, memoization, and render tuning that keep interactions smooth even in large apps." },
      { icon: "arrow-left-right", title: "Rich ecosystem", body: "A mature ecosystem of state, data-fetching, and testing tools — chosen to fit your project, not forced onto it." },
      { icon: "monitor-smartphone", title: "Accessible & responsive", body: "Interfaces built to WCAG standards that work on every screen size and input method." },
    ],
    projects: [
      { icon: "layout-dashboard", kind: "Analytics dashboard", title: "Real-time operations console", summary: "A data-dense React dashboard streaming live metrics with virtualized tables and charts.", metrics: [ { value: "60fps", label: "Smooth scrolling" }, { value: "10k+", label: "Live rows" } ] },
      { icon: "shopping-cart", kind: "eCommerce storefront", title: "Headless commerce frontend", summary: "A component-driven storefront with instant search and an optimistic cart.", metrics: [ { value: "1.2s", label: "Time to interactive" }, { value: "+28%", label: "Conversion" } ] },
      { icon: "users", kind: "SaaS product", title: "Multi-tenant admin app", summary: "A role-aware React app with a shared component library across three products.", metrics: [ { value: "3", label: "Products, one UI kit" }, { value: "40%", label: "Faster feature delivery" } ] },
    ],
    faqs: [
      { q: "Do you build with React or Next.js?", a: "Both. We use plain React (with Vite) for embedded widgets and single-page apps, and Next.js when server rendering, routing, and SEO matter. We'll recommend the right fit for your project." },
      { q: "Can you work with our existing React codebase?", a: "Yes. We regularly join existing React projects — auditing structure and performance, then improving architecture and shipping features without a rewrite." },
      { q: "How do you keep large React apps maintainable?", a: "TypeScript throughout, a documented component library, clear state boundaries, and tests wired into CI — so the app stays understandable as it and the team grow." },
    ],
  },
  {
    slug: "nextjs",
    label: "Next.js",
    title: "Next.js Development",
    icon: "triangle",
    summary: "SEO-ready, full-stack React apps",
    intro:
      "Next.js development that pairs the productivity of React with the speed and SEO of the right rendering strategy for every page.",
    overview:
      "We build production Next.js applications that choose rendering per route — static, server, or client — for the best mix of speed, SEO, and freshness. Backed by robust data fetching, caching, and excellent Core Web Vitals, our Next.js builds rank well, share well, and stay fast as they scale.",
    reasons: [
      { icon: "triangle", title: "Rendering per route", body: "Static, server, and client rendering chosen page by page for the best speed and freshness." },
      { icon: "search", title: "Built-in SEO", body: "Structured data, canonical URLs, and metadata handled properly so pages rank and share cleanly." },
      { icon: "gauge", title: "Core Web Vitals", body: "Image, font, and bundle optimization tuned for excellent load, interactivity, and stability scores." },
      { icon: "server", title: "Full-stack in one", body: "Route handlers and server actions let us build API and UI together, with less glue code." },
    ],
    projects: [
      { icon: "globe", kind: "Marketing site", title: "Statically-exported brand site", summary: "A fully static Next.js site with per-page metadata and a perfect Lighthouse SEO score.", metrics: [ { value: "100", label: "Lighthouse SEO" }, { value: "0", label: "Server cost" } ] },
      { icon: "app-window", kind: "SaaS platform", title: "Hybrid-rendered product app", summary: "Marketing pages statically generated, the app server-rendered — one Next.js codebase.", metrics: [ { value: "95+", label: "Mobile performance" }, { value: "1", label: "Deploy pipeline" } ] },
      { icon: "book-open", kind: "Content platform", title: "Editorial publishing site", summary: "Incrementally-rendered articles with tag and author archives and instant search.", metrics: [ { value: "5k+", label: "Pages" }, { value: "<1s", label: "Cached load" } ] },
    ],
    faqs: [
      { q: "Can Next.js be exported as a fully static site?", a: "Yes. With static export a Next.js app builds to plain HTML/CSS/JS you can host anywhere — this very site is built that way. We use it whenever a backend runtime isn't required." },
      { q: "How does Next.js help SEO?", a: "Server and static rendering deliver fully-formed HTML to crawlers, and the metadata API makes titles, canonical URLs, Open Graph, and structured data straightforward — so pages are indexed and shared correctly." },
      { q: "Should we migrate our React app to Next.js?", a: "Often, yes — especially if SEO, initial load, or routing are pain points. We assess the trade-offs first and migrate incrementally rather than rewriting from scratch." },
    ],
  },
  {
    slug: "angular",
    label: "Angular",
    title: "Angular Development",
    icon: "shield",
    summary: "Structured, enterprise-grade frontends",
    intro:
      "Angular development for structured, enterprise-grade applications that stay maintainable and consistent as teams and features grow.",
    overview:
      "We use Angular's opinionated structure — modules, typed services, dependency injection, and RxJS — to build large front-end applications that stay organised, testable, and predictable across big teams. It's our go-to when long-term maintainability and consistency matter more than minimal footprint.",
    reasons: [
      { icon: "shield", title: "Structured by design", body: "Modules, services, and typed patterns give large, long-lived apps a consistent shape." },
      { icon: "arrow-left-right", title: "Reactive data flow", body: "RxJS-driven state and data flows that stay predictable even at enterprise scale." },
      { icon: "list-checks", title: "Testable out of the box", body: "First-class testing tools and dependency injection make unit and integration tests natural." },
      { icon: "blocks", title: "Batteries included", body: "Routing, forms, HTTP, and i18n ship with the framework — fewer third-party decisions to maintain." },
    ],
    projects: [
      { icon: "landmark", kind: "Enterprise portal", title: "Back-office operations suite", summary: "A modular Angular workspace unifying five internal tools behind one navigation shell.", metrics: [ { value: "5", label: "Tools unified" }, { value: "30%", label: "Less duplicate code" } ] },
      { icon: "shield-check", kind: "FinTech console", title: "Regulated trading dashboard", summary: "A typed, reactive Angular front end with strict access control and audit logging.", metrics: [ { value: "99.9%", label: "Uptime" }, { value: "0", label: "Type-related regressions" } ] },
      { icon: "graduation-cap", kind: "Education platform", title: "Institutional LMS front end", summary: "A large Angular app with lazy-loaded modules for courses, grading, and reporting.", metrics: [ { value: "50+", label: "Feature modules" }, { value: "2s", label: "Initial load" } ] },
    ],
    faqs: [
      { q: "When is Angular the right choice over React?", a: "Angular suits large teams and enterprise apps that benefit from a strong, consistent structure and batteries-included framework. React suits lighter, more flexible builds. We'll advise based on your team and roadmap." },
      { q: "Do you work with older AngularJS or legacy Angular versions?", a: "Yes. We maintain and modernise existing Angular applications, including incremental upgrades to current versions and RxJS best practices." },
      { q: "How do you keep RxJS from getting complex?", a: "Clear conventions for state and subscriptions, judicious use of operators, and code review focused on data flow keep reactive code readable rather than clever." },
    ],
  },
  {
    slug: "nodejs",
    label: "Node.js",
    title: "Node.js Development",
    icon: "hexagon",
    summary: "Scalable APIs and backend services",
    intro:
      "Node.js development for scalable, well-typed APIs and backend services that stay fast and reliable under real production load.",
    overview:
      "We build robust Node.js backends with TypeScript throughout: clean REST and GraphQL APIs, solid data models, and asynchronous services designed for reliability and horizontal scale. From real-time systems to high-throughput APIs, our Node.js work is engineered to be secure, observable, and easy to operate.",
    reasons: [
      { icon: "hexagon", title: "Typed APIs", body: "Clean, versioned REST and GraphQL APIs with TypeScript contracts shared across the stack." },
      { icon: "server", title: "Built to scale", body: "Asynchronous, stateless services designed to scale horizontally behind a load balancer." },
      { icon: "arrow-left-right", title: "One language, end to end", body: "JavaScript/TypeScript across front and back speeds delivery and simplifies hiring." },
      { icon: "shield-check", title: "Secure & tested", body: "Auth, input validation, and test coverage baked into every endpoint from the start." },
    ],
    projects: [
      { icon: "arrow-left-right", kind: "Public API", title: "High-throughput REST API", summary: "A TypeScript Node.js API serving partner integrations with rate limiting and caching.", metrics: [ { value: "5k", label: "Req/sec sustained" }, { value: "40ms", label: "p95 latency" } ] },
      { icon: "messages-square", kind: "Real-time service", title: "Live collaboration backend", summary: "WebSocket services on Node.js powering presence and live document editing.", metrics: [ { value: "20k", label: "Concurrent sockets" }, { value: "<100ms", label: "Sync latency" } ] },
      { icon: "workflow", kind: "Integration layer", title: "Event-driven middleware", summary: "A Node.js service orchestrating queues and webhooks between third-party systems.", metrics: [ { value: "1M+", label: "Events/day" }, { value: "99.95%", label: "Delivery rate" } ] },
    ],
    faqs: [
      { q: "Do you use plain Node.js or a framework?", a: "Both, depending on the job. We use Express for lightweight services and NestJS when a larger app benefits from structure and dependency injection. Everything is TypeScript-first." },
      { q: "Can Node.js handle high traffic?", a: "Yes. Node's asynchronous model is well suited to I/O-heavy, high-concurrency workloads. We design stateless services with caching and horizontal scaling so throughput grows with your infrastructure." },
      { q: "How do you keep a Node.js backend maintainable?", a: "Strong typing, a clear module structure, documented API contracts, and automated tests — so the codebase stays understandable as it grows." },
    ],
  },
  {
    slug: "nestjs",
    label: "NestJS",
    title: "NestJS Development",
    icon: "server",
    summary: "Structured, scalable Node.js backends",
    intro:
      "NestJS development for structured, scalable backends that bring enterprise-grade architecture to the Node.js ecosystem.",
    overview:
      "We build NestJS applications that combine Node.js performance with a clean, opinionated architecture: modules, dependency injection, and typed providers that keep large backends organised and testable. It's our framework of choice when a Node.js service needs the structure and long-term maintainability of an enterprise codebase.",
    reasons: [
      { icon: "server", title: "Opinionated structure", body: "Modules, controllers, and providers give backends a consistent, discoverable shape." },
      { icon: "plug-zap", title: "Dependency injection", body: "First-class DI makes services testable and decoupled, without hand-rolled wiring." },
      { icon: "arrow-left-right", title: "REST & GraphQL ready", body: "Build REST APIs, GraphQL, WebSockets, and microservices within one consistent framework." },
      { icon: "list-checks", title: "Testable by design", body: "The architecture and tooling make unit and end-to-end tests a natural part of every module." },
    ],
    projects: [
      { icon: "landmark", kind: "Enterprise API", title: "Modular banking backend", summary: "A NestJS service layer with clearly separated domains, guards, and audit interceptors.", metrics: [ { value: "12", label: "Bounded modules" }, { value: "90%+", label: "Test coverage" } ] },
      { icon: "cloud", kind: "Microservices", title: "Event-driven microservice mesh", summary: "NestJS microservices communicating over a message broker with typed contracts.", metrics: [ { value: "8", label: "Services" }, { value: "0", label: "Shared-DB coupling" } ] },
      { icon: "bot", kind: "AI backend", title: "LLM orchestration API", summary: "A NestJS backend exposing typed endpoints over retrieval and model-calling pipelines.", metrics: [ { value: "3", label: "Model providers" }, { value: "1", label: "Clean API surface" } ] },
    ],
    faqs: [
      { q: "Why NestJS instead of Express?", a: "Express is minimal and unopinionated; NestJS adds structure — modules, DI, and conventions — that pays off on larger, longer-lived backends. For small services we may still use Express." },
      { q: "Does NestJS work with our existing database and tools?", a: "Yes. NestJS integrates cleanly with TypeORM, Prisma, and most databases and message brokers, so it fits into your existing stack rather than dictating it." },
      { q: "Is NestJS good for microservices?", a: "Very. It has first-class support for microservice transports and typed contracts, making it a strong choice for event-driven and distributed backends." },
    ],
  },
  {
    slug: "laravel",
    label: "Laravel",
    title: "Laravel Development",
    icon: "layers",
    summary: "Rapid, polished PHP applications",
    intro:
      "Laravel development for polished PHP web applications built quickly — without cutting corners on quality or maintainability.",
    overview:
      "We use Laravel's conventions and rich ecosystem to move fast: clean MVC structure, expressive Eloquent data models, and well-tested features that ship on a predictable timeline. From dashboards to full web platforms, our Laravel builds are elegant, secure, and easy for your team to own.",
    reasons: [
      { icon: "layers", title: "Rapid delivery", body: "Convention-driven builds and a rich ecosystem get features to production quickly." },
      { icon: "database", title: "Expressive data layer", body: "Eloquent models, migrations, and query building keep the data layer clean and maintainable." },
      { icon: "shield-check", title: "Secure foundations", body: "Authentication, authorization, validation, and CSRF protection handled the right way by default." },
      { icon: "list-checks", title: "Tested features", body: "Laravel's testing tools make feature and unit tests a natural part of every build." },
    ],
    projects: [
      { icon: "layout-dashboard", kind: "Admin platform", title: "Operations back office", summary: "A Laravel application with role-based access, reporting, and a clean Blade admin UI.", metrics: [ { value: "6 wks", label: "To first release" }, { value: "40+", label: "Admin workflows" } ] },
      { icon: "shopping-cart", kind: "Marketplace", title: "Multi-vendor marketplace", summary: "A Laravel marketplace with vendor onboarding, payments, and order management.", metrics: [ { value: "500+", label: "Vendors" }, { value: "99.9%", label: "Uptime" } ] },
      { icon: "concierge-bell", kind: "SaaS app", title: "Subscription SaaS platform", summary: "A Laravel SaaS with billing, tenanted data, and an API for integrations.", metrics: [ { value: "3", label: "Pricing tiers" }, { value: "1", label: "Clean codebase" } ] },
    ],
    faqs: [
      { q: "Is Laravel a good choice for a modern web app?", a: "Yes. Laravel is a mature, actively maintained framework with excellent tooling for building secure, feature-rich web applications quickly. It's a strong fit when a PHP backend suits your team and hosting." },
      { q: "Can you pair Laravel with a React or Vue front end?", a: "Absolutely. We build Laravel APIs behind React or Vue front ends, or use Inertia/Livewire for a tighter full-stack workflow — whichever fits your product best." },
      { q: "Can you maintain or upgrade our existing Laravel app?", a: "Yes. We take on existing Laravel projects, upgrade them to current versions, improve structure and test coverage, and ship new features safely." },
    ],
  },
  {
    slug: "flutter",
    label: "Flutter",
    title: "Flutter Development",
    icon: "feather",
    summary: "One codebase, every platform",
    intro:
      "Flutter development that delivers beautiful, high-performance apps for mobile, web, and desktop from a single, maintainable codebase.",
    overview:
      "We use Flutter's single Dart codebase and pixel-accurate widget system to ship consistent, expressive apps across platforms — with the performance of compiled, natively-rendered software. It's our go-to when you want one team and one codebase to reach iOS, Android, and beyond without compromising on feel.",
    reasons: [
      { icon: "feather", title: "One codebase, everywhere", body: "iOS, Android, web, and desktop from a single Dart codebase — one team, one roadmap." },
      { icon: "pen-tool", title: "Expressive, brand-accurate UI", body: "A pixel-perfect widget system delivers custom, on-brand interfaces without platform compromises." },
      { icon: "zap", title: "Native performance", body: "Compiled, natively-rendered apps stay smooth at 60–120fps, even with rich animation." },
      { icon: "gauge", title: "Fast iteration", body: "Hot reload and a rich widget catalogue keep development quick and prototyping cheap." },
    ],
    projects: [
      { icon: "smartphone", kind: "Consumer app", title: "Cross-platform lifestyle app", summary: "A Flutter app launched on iOS and Android from one codebase with a custom design system.", metrics: [ { value: "2", label: "Stores, one build" }, { value: "4.8★", label: "App rating" } ] },
      { icon: "heart-pulse", kind: "Health app", title: "Patient companion app", summary: "A Flutter app with offline support, secure sync, and accessible, branded UI.", metrics: [ { value: "100%", label: "Feature parity" }, { value: "-45%", label: "Dev cost vs native" } ] },
      { icon: "shopping-cart", kind: "Commerce app", title: "Mobile shopping experience", summary: "A Flutter storefront with smooth animation, deep links, and native payments.", metrics: [ { value: "60fps", label: "Scrolling" }, { value: "1", label: "Shared codebase" } ] },
    ],
    faqs: [
      { q: "Does a Flutter app feel as good as native?", a: "Yes. Flutter compiles to native code and renders its own pixels, so apps are fast and smooth. For most products the experience is indistinguishable from native, at a fraction of the cost of building twice." },
      { q: "Can Flutter target web and desktop too?", a: "It can. The same Dart codebase can target iOS, Android, web, and desktop. We'll advise where a shared build makes sense and where a platform deserves dedicated attention." },
      { q: "How does Flutter reduce cost?", a: "One codebase and one team serve every platform, so you build and maintain a single app instead of separate iOS and Android projects — typically a large saving in time and budget." },
    ],
  },
];

/**
 * Why teams choose Rapid Tech Plus for engineering — shared across every
 * technology landing page (the "Why Rapid Tech Plus" section). Framed around
 * delivery quality rather than any single technology.
 */
export const whyRapidTechPlus: Feature[] = [
  { icon: "users", title: "Senior engineers only", body: "Every developer is senior, vetted, and proven on production systems — no juniors billed as experts." },
  { icon: "shield-check", title: "Quality built in", body: "TypeScript-first engineering, code review, and automated testing baked into every engagement." },
  { icon: "gauge", title: "Performance & accessibility", body: "We build for speed, Core Web Vitals, and WCAG accessibility as a default, not an afterthought." },
  { icon: "arrow-left-right", title: "Flexible engagement", body: "Fixed-scope delivery, a dedicated team, or staff augmentation — matched to how you want to work." },
  { icon: "eye", title: "Transparent progress", body: "Reviewable, incremental delivery and direct communication — you always see how the work is going." },
  { icon: "rocket", title: "Built to scale", body: "Architecture and infrastructure chosen so your product grows without a rewrite down the line." },
];

/** Closing CTA copy shared across every technology page. */
export const technologyCta = {
  title: "Have a project in mind?",
  body: "Tell us what you're building and the stack you're considering — we'll help you choose the right approach and the right team.",
};

/** Fast slug → record lookup for the detail route. */
const bySlug = new Map(technologies.map((t) => [t.slug, t]));

/** All technology slugs — powers `generateStaticParams` and the sitemap. */
export const techSlugs = technologies.map((t) => t.slug);

/** Look up a single technology by slug (undefined → the route calls notFound). */
export function getTechnology(slug: string): TechRecord | undefined {
  return bySlug.get(slug);
}

/** Other technologies — used by the "related" grid at the foot of each page. */
export function relatedTechnologies(slug: string, limit = 3): TechRecord[] {
  return technologies.filter((t) => t.slug !== slug).slice(0, limit);
}

/**
 * Technologies mega-menu — a flat panel of the featured technology pages. Each
 * link resolves to its real `/technologies/[slug]` landing page; an overview
 * link points at the `/technologies` hub.
 */
export const technologiesMenu: MegaItem = {
  label: "Technologies",
  href: "/technologies",
  flat: true,
  overview: "All technologies",
  links: technologies.map((t) => ({
    label: t.label,
    href: `/technologies/${t.slug}`,
    icon: t.icon,
    desc: t.summary,
  })),
};
