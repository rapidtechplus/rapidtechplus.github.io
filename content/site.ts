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
import { serviceMenuColumns } from "@/content/services";
import { hireMenuColumns } from "@/content/hire";
import { solutionMenuColumns } from "@/content/solutions";
import { industriesMenu } from "@/content/industries";
import { caseStudiesMenu } from "@/content/case-studies";

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

/** Company mega-menu (compact, single-column). Not backed by a collection. */
const companyMenu: MegaItem = {
  label: "Company",
  href: "/about",
  flat: true,
  compact: true,
  links: [
    { label: "About", href: "/about", icon: "building-2", desc: "Who we are and how we work" },
    { label: "Our Process", href: "/about", icon: "workflow", desc: "Discover, design, build, launch" },
    { label: "Technologies", href: "/technologies", icon: "cpu", desc: "The stack we build on" },
    { label: "Contact", href: CONTACT_HREF, icon: "mail", desc: "Start a conversation" },
    { label: "Careers", href: "/about", icon: "star", soon: true },
    { label: "Culture", href: "/about", icon: "heart", soon: true },
  ],
};

/**
 * Top-level navigation, composed from the content collections. Every entry's
 * copy comes from a collection (or, for Company, the literal above) so there is
 * one source of truth shared by the nav and the pages.
 */
export const megaMenu: MegaItem[] = [
  { label: "Services", href: "/services", columns: serviceMenuColumns },
  {
    label: "Hire Expert",
    href: CONTACT_HREF,
    overview: "Talk to us about hiring",
    columns: hireMenuColumns,
  },
  { label: "Solutions", href: "/solutions", columns: solutionMenuColumns },
  industriesMenu,
  caseStudiesMenu,
  companyMenu,
  { label: "Blogs", href: "/blog" },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Custom Web Applications", href: "/services" },
      { label: "SaaS Product Development", href: "/services" },
      { label: "Frontend Engineering", href: "/services" },
      { label: "Backend Engineering", href: "/services" },
      { label: "Software Modernization", href: "/services" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "AI Agents", href: "/solutions" },
      { label: "Workflow Automation", href: "/solutions" },
      { label: "Cloud Solutions", href: "/solutions" },
      { label: "Data & Integrations", href: "/solutions" },
      { label: "Hire an Expert", href: CONTACT_HREF },
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
      { label: "Case Studies", href: "/case-studies" },
      { label: "Technologies", href: "/technologies" },
      { label: "Contact", href: CONTACT_HREF },
      { label: "Careers", href: "/about", soon: true },
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
    title: "Main",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Contact", href: CONTACT_HREF },
    ],
  },
  {
    title: "What We Do",
    links: [
      { label: "Services", href: "/services" },
      { label: "Solutions", href: "/solutions" },
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
