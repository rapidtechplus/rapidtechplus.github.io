/**
 * Central static content for the site. Editing copy, nav, services, or
 * products here updates every page that consumes it — no component changes
 * required. This is the single source of truth for verification-relevant
 * details (company name, contact info).
 */

export const site = {
  name: "Rapid Tech Plus",
  shortName: "Rapid Tech Plus",
  logoLetter: "R",
  url: "https://rapidtechplus.github.io",
  tagline:
    "Modern software products, web platforms, and digital systems for growing businesses.",
  description:
    "Rapid Tech Plus builds modern software products, web platforms, and digital systems for growing businesses. Custom web apps, SaaS development, and engineering.",
  email: "hello@rapidtechplus.com",
  supportEmail: "support@rapidtechplus.com",
  location: "India — serving clients worldwide",
  hours: "Monday – Friday, 9:00 – 18:00 IST",
  footerNote: "Building software for growing businesses.",
} as const;

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Technologies", href: "/technologies" },
  { label: "Contact", href: "/contact" },
];

export const footerColumns: { title: string; links: NavItem[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Products", href: "/products" },
      { label: "Industries", href: "/industries" },
      { label: "Technologies", href: "/technologies" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact", href: "/contact" },
      { label: site.email, href: `mailto:${site.email}` },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
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
    icon: "◆",
    title: "Custom Web Applications",
    body: "Bespoke web platforms tailored to your workflows, from dashboards to customer portals.",
  },
  {
    icon: "▲",
    title: "SaaS Product Development",
    body: "Multi-tenant, subscription-ready products engineered for growth and reliability.",
  },
  {
    icon: "●",
    title: "UI/UX Implementation",
    body: "Pixel-accurate, accessible interfaces that turn designs into polished experiences.",
  },
  {
    icon: "⬡",
    title: "Frontend & Backend Engineering",
    body: "Full-stack development with modern frameworks and robust, scalable APIs.",
  },
  {
    icon: "⇄",
    title: "API Integration",
    body: "Connect your systems to payments, data providers, and third-party services.",
  },
  {
    icon: "↻",
    title: "Software Modernization",
    body: "Refactor and re-platform legacy systems into fast, maintainable applications.",
  },
];

export const whyUs = [
  {
    icon: "⚡",
    title: "Fast, focused delivery",
    body: "Lean process, quick iterations, and momentum from day one.",
  },
  {
    icon: "🛡",
    title: "Quality & security",
    body: "Best-practice engineering with security and accessibility built in.",
  },
  {
    icon: "🤝",
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

export const industries = [
  {
    icon: "◆",
    title: "Startups & Scaleups",
    body: "MVPs and production platforms built to validate fast and scale cleanly as you grow.",
  },
  {
    icon: "▲",
    title: "SaaS & Software",
    body: "Multi-tenant products, dashboards, and developer tooling engineered for reliability.",
  },
  {
    icon: "●",
    title: "E-commerce & Retail",
    body: "Storefronts, catalogs, and back-office tools with fast, conversion-focused experiences.",
  },
  {
    icon: "⬡",
    title: "Fintech",
    body: "Secure, well-integrated financial applications with careful attention to correctness.",
  },
  {
    icon: "⚙",
    title: "Logistics & Operations",
    body: "Internal tools and automation that streamline day-to-day operational workflows.",
  },
  {
    icon: "⇄",
    title: "Professional Services",
    body: "Client portals, booking systems, and custom platforms tailored to service businesses.",
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
    icon: "◆",
    title: "Craftsmanship",
    body: "We care about the details — clean code, thoughtful design, and durable systems.",
  },
  {
    icon: "⚡",
    title: "Momentum",
    body: "We ship in small, meaningful increments and keep projects moving.",
  },
  {
    icon: "🤝",
    title: "Partnership",
    body: "Your goals are our goals. We communicate openly and honestly.",
  },
  {
    icon: "🛡",
    title: "Reliability",
    body: "Security, accessibility, and quality are built in — not bolted on.",
  },
  {
    icon: "↻",
    title: "Adaptability",
    body: "We meet you where you are and adjust as your needs evolve.",
  },
  {
    icon: "●",
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

export const services = [
  {
    icon: "◆",
    title: "Custom Web Applications",
    body: "Tailored web platforms built around your workflows — internal tools, dashboards, customer portals, and everything in between.",
  },
  {
    icon: "▲",
    title: "SaaS Product Development",
    body: "End-to-end SaaS builds: authentication, multi-tenancy, billing-ready architecture, and features engineered to scale.",
  },
  {
    icon: "●",
    title: "UI/UX Implementation",
    body: "We turn designs into accessible, pixel-accurate, responsive interfaces with smooth, premium interactions.",
  },
  {
    icon: "◧",
    title: "Frontend Engineering",
    body: "Modern, component-driven frontends with React, Next.js, and TypeScript — fast, maintainable, and testable.",
  },
  {
    icon: "⬡",
    title: "Backend Engineering",
    body: "Robust APIs, data models, and services built for reliability, performance, and clean integration.",
  },
  {
    icon: "⇄",
    title: "API Integration",
    body: "Connect payments, messaging, analytics, and third-party platforms with secure, well-documented integrations.",
  },
  {
    icon: "↻",
    title: "Software Modernization",
    body: "Re-platform and refactor legacy systems into fast, secure, maintainable applications without the risk.",
  },
  {
    icon: "⚙",
    title: "Business Automation",
    body: "Streamline manual processes with custom automation, integrations, and internal tooling that saves time.",
  },
];

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
];

export const products = [
  {
    icon: "◧",
    title: "Web Platforms",
    body: "Customer-facing platforms and marketplaces with clean UX and scalable architecture.",
  },
  {
    icon: "▲",
    title: "SaaS Applications",
    body: "Subscription products with dashboards, roles, and billing-ready foundations.",
  },
  {
    icon: "⚙",
    title: "Internal Tools",
    body: "Admin panels and operational tooling that streamline day-to-day business.",
  },
  {
    icon: "⇄",
    title: "Integration Systems",
    body: "Middleware and API layers that connect the services a business depends on.",
  },
  {
    icon: "●",
    title: "Landing & Marketing Sites",
    body: "Fast, polished, SEO-friendly sites that represent brands with credibility.",
  },
  {
    icon: "↻",
    title: "Automation Solutions",
    body: "Workflow automation that removes repetitive manual work and reduces errors.",
  },
];
