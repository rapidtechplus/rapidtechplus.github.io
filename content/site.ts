/**
 * Site-wide content and navigation. The large domain datasets now live in
 * dedicated, slug-keyed collections under `content/` (services, hire,
 * solutions, industries, products, case-studies, blog). This module composes
 * the navigation from those collections — so the mega menu and the pages read
 * from the same source — and holds the remaining cross-page content (company
 * details, homepage sections, footer, socials).
 */

import { CONTACT_HREF, SITE_URL } from "@/config/site";
import type { MegaItem, NavLink } from "@/content/types";
import { aiMenu } from "@/content/ai";
import { servicesMenu } from "@/content/services";
import { hireMenuColumns } from "@/content/hire";
import { solutionMenuColumns } from "@/content/solutions";
import { industriesMenu } from "@/content/industries";
import { caseStudiesMenu } from "@/content/case-studies";
import { companyMenu } from "@/content/company";

// Re-export shared content types so existing `@/content/site` importers keep
// working without reaching into `content/types` directly.
export type { NavLink, MegaColumn, MegaItem } from "@/content/types";

// Re-export the collections' page-facing data so pages can continue importing
// from `@/content/site` (single source of truth, transitively).
export { industries } from "@/content/industries";
export { solutions } from "@/content/solutions";
export { products } from "@/content/products";
export { caseStudies, type CaseStudy } from "@/content/case-studies";
export { blogPosts, type BlogPost } from "@/content/blog";
export { serviceOfferings, process } from "@/content/services";

export const site = {
  name: "Rapid Tech Plus",
  shortName: "Rapid Tech Plus",
  logoLetter: "R",
  slogan: "AI-Native Engineering",
  url: SITE_URL,
  tagline:
    "Modern software products, web platforms, and digital systems for growing businesses.",
  description:
    "Rapid Tech Plus builds modern software products, web platforms, and digital systems for growing businesses. Custom web apps, SaaS development, and engineering.",
  email: "hello@rapidtechplus.com",
  supportEmail: "support@rapidtechplus.com",
  location: "India — serving clients worldwide",
  hours: "Monday – Friday, 9:00 – 18:00 IST",
  footerNote: "Building software for growing businesses.",
  /**
   * Footer contact details. Placeholder values — swap in the real sales/HR
   * inboxes, phone number, and postal address before launch.
   */
  contact: {
    salesName: "Sales Team",
    salesEmail: "hello@rapidtechplus.com",
    hrName: "People & Talent",
    hrEmail: "careers@rapidtechplus.com",
    phone: "+91 79 4000 1234",
    phoneHref: "+917940001234",
    address: "Ahmedabad, Gujarat, India — serving clients worldwide",
  },
} as const;

export type NavItem = { label: string; href: string };

/**
 * Top-level navigation, composed from the content collections. Every entry's
 * copy comes from a collection so there is one source of truth shared by the
 * nav and the pages.
 */
export const megaMenu: MegaItem[] = [
  aiMenu,
  servicesMenu,
  {
    label: "Hire Expert",
    href: "/hire",
    overview: "Explore all roles",
    columns: hireMenuColumns,
  },
  {
    label: "Solutions",
    href: "/solutions",
    overview: "Explore all solutions",
    showcase: true,
    columns: solutionMenuColumns,
  },
  industriesMenu,
  caseStudiesMenu,
  companyMenu,
  { label: "Blogs", href: "/blog" },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Artificial Intelligence",
    links: [
      { label: "Artificial Intelligence", href: "/ai" },
      { label: "AI Agents", href: "/ai/ai-agents" },
      { label: "LLM Integration", href: "/ai/llm-integration" },
      { label: "RAG", href: "/ai/rag" },
      { label: "MCP Servers", href: "/ai/mcp-servers" },
      { label: "AI Consulting", href: "/ai/ai-consulting" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Artificial Intelligence", href: "/services/ai-development" },
      { label: "Custom Software Development", href: "/services/custom-software-development" },
      { label: "SaaS Development", href: "/services/saas-development" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile Development", href: "/services/mobile-development" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Enterprise Solutions", href: "/solutions/enterprise-software" },
      { label: "Business Automation", href: "/solutions/workflow-automation" },
      { label: "Cloud Solutions", href: "/solutions/cloud-solutions" },
      {
        label: "Data & Analytics",
        href: "/solutions/data-analytics-solutions",
      },
      { label: "Commerce Solutions", href: "/solutions/ecommerce-solutions" },
      {
        label: "Digital Transformation",
        href: "/solutions/digital-transformation",
      },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Healthcare", href: "/industries" },
      { label: "FinTech", href: "/industries" },
      { label: "Manufacturing", href: "/industries" },
      { label: "Retail & eCommerce", href: "/industries" },
      { label: "Education", href: "/industries" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Why Us", href: "/why-us" },
      { label: "Culture", href: "/culture" },
      { label: "Engineering", href: "/engineering" },
      { label: "Careers", href: "/careers" },
      { label: "Our Process", href: "/our-process" },
      { label: "Contact", href: CONTACT_HREF },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Products", href: "/products" },
      { label: "Sitemap", href: "/sitemap" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];

/**
 * Legal links surfaced in the footer bottom bar (before the theme toggle).
 * Kept here so the footer and the /sitemap page share one source of truth.
 */
export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

/**
 * Grouped index of every public route, powering the human-readable
 * `/sitemap` page. Mirrors the machine-readable `app/sitemap.ts`.
 */
export const sitemapGroups: { title: string; links: NavLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Why Us", href: "/why-us" },
      { label: "Culture", href: "/culture" },
      { label: "Engineering", href: "/engineering" },
      { label: "Careers", href: "/careers" },
      { label: "Our Process", href: "/our-process" },
      { label: "Open Source", href: "/open-source" },
      { label: "Contact", href: CONTACT_HREF },
    ],
  },
  {
    title: "What We Do",
    links: [
      { label: "Artificial Intelligence", href: "/ai" },
      { label: "Services", href: "/services" },
      { label: "Solutions", href: "/solutions" },
      { label: "Hire an Expert", href: "/hire" },
      { label: "Products", href: "/products" },
      { label: "Industries", href: "/industries" },
      { label: "Technologies", href: "/technologies" },
    ],
  },
  {
    title: "Work & Insights",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blogs", href: "/blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];

export type SocialLink = {
  label: string;
  href: string;
  /** Icon key resolved to an inline SVG in the footer. */
  icon:
  | "github"
  | "linkedin"
  | "x"
  | "email"
  | "instagram"
  | "facebook"
  | "youtube"
  | "whatsapp";
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/rapidtechplus", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/rapidtechplus",
    icon: "linkedin",
  },
  { label: "X", href: "https://x.com/rapidtechplus", icon: "x" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/rapidtechplus",
    icon: "instagram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/rapidtechplus",
    icon: "facebook",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@rapidtechplus",
    icon: "youtube",
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${site.contact.phoneHref.replace(/[^0-9]/g, "")}`,
    icon: "whatsapp",
  },
  { label: "Email", href: `mailto:${site.email}`, icon: "email" },
];

export const homeStats = [
  { num: "10+", label: "Years combined experience" },
  { num: "100%", label: "Focus on quality" },
  { num: "24/7", label: "Reliable delivery" },
  { num: "∞", label: "Room to scale" },
];

export const homeFeatures = [
  {
    title: "Product-minded engineering",
    body: "We think about users and outcomes, not just tickets.",
  },
  {
    title: "Modern, maintainable code",
    body: "TypeScript-first, tested, and documented for the long run.",
  },
  {
    title: "Transparent collaboration",
    body: "Clear communication and reviewable, incremental progress.",
  },
  {
    title: "Built to scale",
    body: "Architecture that grows with your business, not against it.",
  },
];

export const homeServices = [
  {
    icon: "app-window",
    title: "Custom Web Applications",
    body: "Bespoke web platforms tailored to your workflows, from dashboards to customer portals.",
  },
  {
    icon: "layout-dashboard",
    title: "SaaS Product Development",
    body: "Multi-tenant, subscription-ready products engineered for growth and reliability.",
  },
  {
    icon: "pen-tool",
    title: "UI/UX Implementation",
    body: "Pixel-accurate, accessible interfaces that turn designs into polished experiences.",
  },
  {
    icon: "code-xml",
    title: "Frontend & Backend Engineering",
    body: "Full-stack development with modern frameworks and robust, scalable APIs.",
  },
  {
    icon: "arrow-left-right",
    title: "API Integration",
    body: "Connect your systems to payments, data providers, and third-party services.",
  },
  {
    icon: "refresh-cw",
    title: "Software Modernization",
    body: "Refactor and re-platform legacy systems into fast, maintainable applications.",
  },
];

export const whyUs = [
  {
    icon: "zap",
    title: "Fast, focused delivery",
    body: "Lean process, quick iterations, and momentum from day one.",
  },
  {
    icon: "shield-check",
    title: "Quality & security",
    body: "Best-practice engineering with security and accessibility built in.",
  },
  {
    icon: "handshake",
    title: "Long-term partnership",
    body: "We support what we build and grow alongside your business.",
  },
];

export const techStack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Astro",
  "Tailwind CSS",
  "PostgreSQL",
  "REST & GraphQL",
  "AWS",
  "Docker",
  "CI/CD",
  "Cloudflare",
];

export const faqs = [
  {
    q: "What kind of projects does Rapid Tech Plus take on?",
    a: "We build custom web applications, SaaS products, internal tools, and API integrations for startups and growing businesses — from first MVP to production platforms.",
  },
  {
    q: "How do you work with clients?",
    a: "We work in clear, reviewable milestones: discover, design, build, and launch. You get transparent estimates, regular communication, and incremental progress you can see.",
  },
  {
    q: "Which technologies do you use?",
    a: "A modern, well-supported stack — TypeScript, React, Next.js, Node.js, PostgreSQL, and cloud tooling like AWS, Docker, and Cloudflare. See our Technologies page for the full list.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes. We're based in India and work with clients worldwide, collaborating remotely across time zones.",
  },
  {
    q: "Can you improve or modernize an existing system?",
    a: "Absolutely. We refactor and re-platform legacy applications into faster, more maintainable systems, without disrupting what already works.",
  },
  {
    q: "How do we get started?",
    a: "Reach out through our contact page with a short description of what you're building. We'll help you scope it and recommend the right approach.",
  },
];

export const techGroups = [
  {
    title: "Languages & Frameworks",
    items: ["TypeScript", "React", "Next.js", "Node.js", "Astro"],
  },
  {
    title: "Styling & UI",
    items: ["Tailwind CSS", "shadcn/ui", "Motion", "Radix UI"],
  },
  {
    title: "Data & APIs",
    items: ["PostgreSQL", "REST & GraphQL", "Prisma", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Docker", "CI/CD", "Cloudflare"],
  },
];

export const aboutValues = [
  {
    icon: "gem",
    title: "Craftsmanship",
    body: "We care about the details — clean code, thoughtful design, and durable systems.",
  },
  {
    icon: "zap",
    title: "Momentum",
    body: "We ship in small, meaningful increments and keep projects moving.",
  },
  {
    icon: "handshake",
    title: "Partnership",
    body: "Your goals are our goals. We communicate openly and honestly.",
  },
  {
    icon: "shield-check",
    title: "Reliability",
    body: "Security, accessibility, and quality are built in — not bolted on.",
  },
  {
    icon: "refresh-cw",
    title: "Adaptability",
    body: "We meet you where you are and adjust as your needs evolve.",
  },
  {
    icon: "eye",
    title: "Transparency",
    body: "Clear estimates, clear progress, and no surprises.",
  },
];

export const aboutGlance = [
  {
    title: "Software studio",
    body: "Focused on web platforms, SaaS, and custom applications.",
  },
  {
    title: "Full-stack expertise",
    body: "Design, frontend, backend, and infrastructure under one roof.",
  },
  {
    title: "Client-first delivery",
    body: "Transparent, reviewable progress in logical milestones.",
  },
];

/**
 * Company milestones for the About-page timeline. These are illustrative
 * markers of the studio's direction rather than audited historical records —
 * the copy is written so nothing reads as a fabricated, specific claim. Swap in
 * confirmed dates and events as they are finalised.
 */
export const companyTimeline = [
  {
    year: "Founded",
    title: "A studio built on engineering discipline",
    body: "Rapid Tech Plus started with a simple conviction: durable software comes from strong engineering paired with genuine care for the people who use it.",
  },
  {
    year: "Early work",
    title: "Web platforms & custom applications",
    body: "We honed a full-stack practice — design, frontend, backend, and infrastructure under one roof — delivering reviewable progress in clear milestones.",
  },
  {
    year: "Growth",
    title: "SaaS products & dedicated teams",
    body: "Engagements grew from single builds into long-running partnerships, with dedicated teams operating as an extension of our clients' own.",
  },
  {
    year: "Today",
    title: "AI-native engineering",
    body: "AI is woven through how we scope, build, and review — an accelerant on top of the same engineering standards, not a bolt-on demo.",
  },
];

/**
 * Quality standards — the practices we hold ourselves to on every engagement.
 * Framed as commitments (not certifications), per an intentional decision to
 * avoid implying credentials the studio does not yet hold.
 */
export const qualityStandards = [
  {
    icon: "search-check",
    title: "Code review on every change",
    body: "No change reaches production without a second set of eyes and passing automated checks.",
  },
  {
    icon: "gauge",
    title: "Performance budgets",
    body: "We target Lighthouse ≥95 and treat speed as a feature, measuring it rather than assuming it.",
  },
  {
    icon: "eye",
    title: "Accessibility to WCAG guidelines",
    body: "Keyboard support, focus management, contrast, and semantic markup are verified, not hoped for.",
  },
  {
    icon: "refresh-cw",
    title: "Continuous integration",
    body: "Lint, type-check, and build run on every push so the main branch stays releasable at all times.",
  },
];

/** "Why choose us" pillars — value props with a supporting stat. */
export const whyChoose = [
  {
    icon: "sparkles",
    title: "AI-first by default",
    body: "AI is woven through how we scope, build, and review — not bolted on as a demo.",
  },
  {
    icon: "zap",
    title: "Ship in weeks, not quarters",
    body: "A lean senior team and an accelerated workflow move you from idea to production fast.",
  },
  {
    icon: "shield-check",
    title: "Engineering you can trust",
    body: "TypeScript everywhere, tested and reviewed, with security and accessibility built in.",
  },
  {
    icon: "handshake",
    title: "A partner, not a vendor",
    body: "We own outcomes, communicate openly, and keep improving what we build with you.",
  },
];

/** AI capabilities highlighted on the homepage AI-expertise section. */
export const aiExpertise = [
  {
    icon: "bot",
    title: "AI Agents",
    body: "Autonomous assistants that use your tools and data to take real work off your team.",
  },
  {
    icon: "database",
    title: "RAG & Knowledge",
    body: "Answers grounded in your own content, with retrieval pipelines you can trust.",
  },
  {
    icon: "plug-zap",
    title: "LLM & MCP Integration",
    body: "Language models and MCP servers wired securely into your existing systems.",
  },
  {
    icon: "bot-message-square",
    title: "Conversational Interfaces",
    body: "Chatbots and copilots that support customers and streamline internal workflows.",
  },
];

/**
 * Placeholder testimonials. Clearly representative until real client quotes
 * are collected — copy is illustrative, not attributed to real individuals.
 */
export const testimonials = [
  {
    quote:
      "They moved faster than any team we'd worked with, and the code was clean enough that our engineers could pick it up on day one.",
    name: "Product Lead",
    role: "SaaS platform",
  },
  {
    quote:
      "The AI automation they built quietly removed hours of manual work every week. It just runs.",
    name: "Operations Director",
    role: "Logistics",
  },
  {
    quote:
      "Thoughtful, senior, and genuinely invested in the outcome. It felt like an extension of our own team.",
    name: "Founder",
    role: "Fintech startup",
  },
];

/**
 * "Our Process For Tailored IT Solutions" — a five-stage delivery model shown
 * on the homepage. Distinct from the four-phase `process` timeline: this is the
 * consulting-flavoured, tailored-engagement narrative.
 */
export const tailoredProcess = [
  {
    icon: "01",
    title: "Discovery & Consulting",
    body: "We map your goals, users, and constraints, then shape a plan tailored to your business — not a template.",
  },
  {
    icon: "02",
    title: "Solution Design",
    body: "We architect the right system and experience, choosing the stack and approach that fit your problem.",
  },
  {
    icon: "03",
    title: "Agile Development",
    body: "We build in reviewable increments with quality, testing, and communication built into every sprint.",
  },
  {
    icon: "04",
    title: "Quality Assurance",
    body: "We test rigorously across devices and edge cases so what ships is reliable, accessible, and secure.",
  },
  {
    icon: "05",
    title: "Launch & Support",
    body: "We deploy, monitor, and keep improving — an accountable partner well beyond go-live.",
  },
];

/**
 * "Our Process" page — the operating principles that sit behind the five-stage
 * `tailoredProcess` timeline. Reused by `/our-process`.
 */
export const processPrinciples = [
  {
    icon: "eye",
    title: "Transparent by default",
    body: "Clear estimates, reviewable milestones, and open communication — you always know where things stand.",
  },
  {
    icon: "refresh-cw",
    title: "Iterative, not big-bang",
    body: "We ship in small, working increments so you can see progress and steer early, instead of waiting for a reveal.",
  },
  {
    icon: "shield-check",
    title: "Quality built in",
    body: "Testing, accessibility, and security are part of every sprint — not a phase we bolt on at the end.",
  },
  {
    icon: "handshake",
    title: "Outcomes over output",
    body: "We measure success by the results you get, and stay accountable well beyond go-live.",
  },
];

export const processFaqs = [
  {
    q: "How long does a typical engagement take?",
    a: "It depends on scope, but most first releases land in weeks, not quarters. We start with a short discovery to size the work and agree on clear milestones before building.",
  },
  {
    q: "How do you keep us involved during development?",
    a: "You get reviewable increments, regular check-ins, and transparent progress. We work in short cycles so you can give feedback early and often.",
  },
  {
    q: "What happens after launch?",
    a: "We deploy, monitor, and keep improving. Support and iteration are part of how we work — we stay an accountable partner beyond go-live.",
  },
];

/**
 * Careers page content. Roles are representative of the disciplines we
 * regularly hire for; applications go to the careers inbox via mailto. Update
 * with live openings before launch.
 */
export const careerBenefits = [
  {
    icon: "globe",
    title: "Remote-first",
    body: "Work from anywhere. We collaborate asynchronously and value output over hours at a desk.",
  },
  {
    icon: "sparkles",
    title: "Work on modern problems",
    body: "AI-native products, real engineering challenges, and a stack you'll be glad to work in.",
  },
  {
    icon: "zap",
    title: "Real ownership",
    body: "Small, senior teams mean your work ships and matters — no busywork, no bottlenecks.",
  },
  {
    icon: "gem",
    title: "Craft over churn",
    body: "We care about clean code and thoughtful design, and we give you the room to do it well.",
  },
];

export const careerRoles = [
  {
    title: "Senior Full-Stack Engineer",
    dept: "Engineering",
    mode: "Remote",
    type: "Full-time",
    body: "Build products end to end with TypeScript, React, Next.js, and Node — from data model to polished UI.",
  },
  {
    title: "AI / ML Engineer",
    dept: "Engineering",
    mode: "Remote",
    type: "Full-time",
    body: "Design agents, RAG pipelines, and LLM integrations that put real AI capability into production.",
  },
  {
    title: "Product Designer (UI/UX)",
    dept: "Design",
    mode: "Remote",
    type: "Full-time",
    body: "Shape accessible, premium interfaces and turn complex problems into clear, usable products.",
  },
  {
    title: "DevOps / Cloud Engineer",
    dept: "Engineering",
    mode: "Remote",
    type: "Contract",
    body: "Own CI/CD, infrastructure, and reliability across AWS, Docker, and modern cloud tooling.",
  },
];

/**
 * Open Source page content. We contribute to and maintain projects across the
 * stack we build on; explore the org for the live list. Categories below are
 * illustrative of where we invest, not a fixed catalogue.
 */
export const openSourcePrinciples = [
  {
    icon: "code-xml",
    title: "Build in the open",
    body: "Where it helps the wider community, we open-source the tooling and libraries we rely on internally.",
  },
  {
    icon: "handshake",
    title: "Contribute upstream",
    body: "We report issues, send fixes, and improve the frameworks and libraries our work is built on.",
  },
  {
    icon: "book-open",
    title: "Share what we learn",
    body: "Starters, examples, and write-ups that help other teams build faster and better.",
  },
];

export const openSourceProjects = [
  {
    icon: "layout-dashboard",
    title: "Starters & templates",
    body: "Production-ready Next.js and TypeScript starters wired for static export, accessibility, and modern tooling.",
  },
  {
    icon: "plug-zap",
    title: "Integrations & utilities",
    body: "Small, focused libraries for the APIs, AI tooling, and cloud services we integrate every day.",
  },
  {
    icon: "bot",
    title: "AI building blocks",
    body: "Examples and helpers for agents, RAG, and MCP that make LLM features easier to ship safely.",
  },
];

/* -------------------------------------------------------------------------- */
/* Why Us — differentiators, proof, and how we're different                    */
/* -------------------------------------------------------------------------- */

/** Headline reasons to choose Rapid Tech Plus (Why Us page hero grid). */
export const whyUsPillars = [
  {
    icon: "sparkles",
    title: "AI-native, not AI-labelled",
    body: "AI is woven into how we scope, build, and review — from agents and RAG to LLM-assisted delivery — instead of bolted on as a demo.",
  },
  {
    icon: "zap",
    title: "Weeks, not quarters",
    body: "A lean, senior team and an accelerated workflow move you from idea to production fast, without cutting engineering corners.",
  },
  {
    icon: "shield-check",
    title: "Engineering you can trust",
    body: "TypeScript everywhere, tested and reviewed, with security and accessibility built into every increment — not bolted on at the end.",
  },
  {
    icon: "handshake",
    title: "A partner, not a vendor",
    body: "We own outcomes, communicate openly, and stay accountable well beyond go-live — your goals drive the roadmap.",
  },
  {
    icon: "users",
    title: "Senior people on your work",
    body: "You work directly with the engineers and designers building your product — no hand-offs to junior teams behind the scenes.",
  },
  {
    icon: "gem",
    title: "Craft over churn",
    body: "Clean code, thoughtful design, and durable systems you can build on — not throwaway work that becomes someone else's problem.",
  },
];

/** Illustrative proof stats shown on the Why Us page (MetricStat cards). */
export const whyUsStats = [
  { value: "10+", label: "Years combined senior experience per team" },
  { value: "100%", label: "TypeScript, tested and reviewed" },
  { value: "Weeks", label: "Typical time to first production release" },
  { value: "AI-first", label: "Built into every engagement by default" },
];

/** "The difference" — typical agency vs. Rapid Tech Plus. */
export const whyUsDifference = [
  {
    them: "Work handed off to rotating junior teams",
    us: "Senior engineers and designers on your product start to finish",
  },
  {
    them: "Big-bang delivery with a reveal at the end",
    us: "Reviewable increments you can steer every week",
  },
  {
    them: "AI treated as a bolt-on feature",
    us: "AI woven through delivery and into what we build",
  },
  {
    them: "Quality and accessibility as an afterthought",
    us: "Testing, security, and a11y built into every sprint",
  },
  {
    them: "Code you can't maintain after launch",
    us: "Clean, documented systems your team can own",
  },
];

export const whyUsFaqs = [
  {
    q: "What makes you different from a typical agency?",
    a: "Senior people do the work, we ship in reviewable increments instead of a big reveal, and AI is part of how we build — not a marketing label. You get engineering you can maintain and a partner accountable for outcomes.",
  },
  {
    q: "Do you only work with startups, or enterprises too?",
    a: "Both. Our process scales from a first product release for a growing business to modernizing an established platform. We size the engagement and team to fit the problem.",
  },
  {
    q: "How do you keep quality high while moving fast?",
    a: "Speed comes from a lean senior team, a strong stack, and AI-assisted delivery — not from skipping tests or review. Quality, accessibility, and security are built into every increment.",
  },
];

/* -------------------------------------------------------------------------- */
/* Culture — how we work and what we value as a team                           */
/* -------------------------------------------------------------------------- */

/** The principles that shape how the team works day to day (Culture page). */
export const culturePrinciples = [
  {
    icon: "globe",
    title: "Remote-first, async by default",
    body: "We collaborate across time zones and value clear writing and output over hours at a desk. Deep work is protected.",
  },
  {
    icon: "eye",
    title: "Default to transparency",
    body: "Decisions, trade-offs, and progress are shared openly — internally and with clients. No surprises, no politics.",
  },
  {
    icon: "user-plus",
    title: "Ownership, not tickets",
    body: "Small, senior teams mean people own outcomes end to end. Your work ships and matters, and you have the room to do it well.",
  },
  {
    icon: "graduation-cap",
    title: "Always learning",
    body: "New tools, better patterns, and shared write-ups keep us sharp. We invest in growth because the field never stands still.",
  },
  {
    icon: "heart",
    title: "Respect and low ego",
    body: "The best idea wins, feedback is kind and direct, and we assume good intent. We build software and each other up.",
  },
  {
    icon: "gem",
    title: "Craft as a habit",
    body: "We care about the details — clean code, thoughtful design, and durable systems — because craft compounds over time.",
  },
];

/** Everyday practices and rituals that make the culture real. */
export const cultureRituals = [
  {
    icon: "refresh-cw",
    title: "Short, reviewable cycles",
    body: "We plan in small increments and review often, so progress is visible and course-corrections are cheap.",
  },
  {
    icon: "messages-square",
    title: "Written over verbal",
    body: "Proposals, decisions, and context live in writing — so anyone can catch up without needing to be in the room.",
  },
  {
    icon: "search-check",
    title: "Everything gets reviewed",
    body: "Code, design, and copy go through review. It's how we keep quality high and share knowledge across the team.",
  },
  {
    icon: "sparkles",
    title: "Space to explore",
    body: "We make room to try new tools and AI approaches, then bring what works back into how we deliver.",
  },
];

/* -------------------------------------------------------------------------- */
/* Engineering — how we build, our stack, and our quality bar                  */
/* -------------------------------------------------------------------------- */

/** Core engineering practices (Engineering page). */
export const engineeringPractices = [
  {
    icon: "code-xml",
    title: "TypeScript everywhere",
    body: "Strict, end-to-end type safety across frontend, backend, and shared code catches whole classes of bugs before they ship.",
  },
  {
    icon: "search-check",
    title: "Reviewed and tested",
    body: "Every change is peer-reviewed and covered by tests appropriate to the risk — from unit to end-to-end — so regressions surface early.",
  },
  {
    icon: "git-branch",
    title: "Continuous integration",
    body: "Automated lint, type-check, test, and build gates run on every change, so what merges is always releasable.",
  },
  {
    icon: "shield-check",
    title: "Secure by design",
    body: "Least-privilege access, dependency hygiene, and secure defaults are part of the design — not a late-stage audit.",
  },
  {
    icon: "gauge",
    title: "Built for performance",
    body: "We budget for speed — fast loads, lean bundles, and efficient data access — and measure it, so performance doesn't drift.",
  },
  {
    icon: "life-buoy",
    title: "Accessible by default",
    body: "Semantic markup, keyboard support, and WCAG-minded contrast are baked into components, so accessibility is the default state.",
  },
];

/** Engineering principles — how we make technical decisions. */
export const engineeringPrinciples = [
  {
    icon: "layers",
    title: "Simple over clever",
    body: "We favour readable, maintainable solutions over premature abstraction. Code is read far more often than it's written.",
  },
  {
    icon: "refresh-cw",
    title: "Ship small, ship often",
    body: "Incremental delivery keeps risk low and feedback fast. Big-bang releases hide problems until they're expensive.",
  },
  {
    icon: "bot",
    title: "AI-assisted delivery",
    body: "We use AI to accelerate scaffolding, review, and testing — freeing senior engineers to focus on judgment and design.",
  },
  {
    icon: "book-open",
    title: "Document the why",
    body: "Decisions and trade-offs are written down, so systems stay understandable long after the original authors move on.",
  },
];

/** The quality bar every release clears (Engineering page checklist). */
export const engineeringStandards = [
  "Passes strict TypeScript type-checking",
  "Linted and formatted to a shared standard",
  "Peer-reviewed before it merges",
  "Covered by tests proportional to the risk",
  "Responsive across mobile, tablet, and desktop",
  "Accessible — keyboard, semantics, and contrast",
  "Performance-budgeted and measured",
  "Deployed through automated CI/CD",
];
