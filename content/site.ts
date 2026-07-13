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
  slogan: "The Way to Web Presence",
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
 * A single navigable entry. `soon` renders the label as a non-clickable
 * "coming soon" item so the information architecture can show its full,
 * intended shape without shipping dead links. `desc` is an optional
 * one-line hint shown inside mega-menu panels.
 */
export type NavLink = {
  label: string;
  href: string;
  desc?: string;
  soon?: boolean;
  /** Optional glyph shown beside the label inside mega-menu panels. */
  icon?: string;
};

export type MegaColumn = { title: string; links: NavLink[] };

/**
 * Top-level navigation entry. When `columns` is present the item renders a
 * mega-menu panel; otherwise it is a plain link. `href` is always a real,
 * existing destination (the section's hub page) so the top-level label and
 * the panel's "overview" link never 404. Deeper links point at real pages
 * today and gain their own detail routes as the site grows — the structure
 * is designed to scale without touching the Nav component.
 */
export type MegaItem = {
  label: string;
  href: string;
  /** Master–detail mode: a left category rail drives the right service panel. */
  columns?: MegaColumn[];
  /** Flat mode: a single grid of items with no second-level category rail. */
  links?: NavLink[];
  flat?: boolean;
  /** Overrides the panel's default "Explore all {label}" footer link text. */
  overview?: string;
};

export const megaMenu: MegaItem[] = [
  {
    label: "Services",
    href: "/services",
    columns: [
      {
        title: "AI Development",
        links: [
          {
            label: "AI Agents",
            href: "/solutions",
            icon: "✦",
            desc: "Autonomous, tool-using assistants",
          },
          {
            label: "LLM Integration",
            href: "/solutions",
            icon: "✧",
            desc: "Language models in your product",
          },
          {
            label: "RAG Solutions",
            href: "/solutions",
            icon: "⬗",
            desc: "Answers grounded in your data",
          },
          {
            label: "MCP Servers",
            href: "/solutions",
            icon: "⬖",
            desc: "Connect models to your systems",
          },
          {
            label: "AI Automation",
            href: "/solutions",
            icon: "↻",
            desc: "Intelligent workflow automation",
          },
          {
            label: "AI Chatbots",
            href: "/solutions",
            icon: "◍",
            desc: "Conversational support & sales",
          },
        ],
      },
      {
        title: "Frontend Development",
        links: [
          {
            label: "React.js",
            href: "/services",
            icon: "◆",
            desc: "Interactive, component-driven UIs",
          },
          {
            label: "Next.js",
            href: "/services",
            icon: "▲",
            desc: "Fast, SEO-ready web apps",
          },
          {
            label: "Angular",
            href: "/services",
            icon: "◈",
            desc: "Enterprise-grade frontends",
          },
          {
            label: "Vue.js",
            href: "/services",
            icon: "◇",
            desc: "Lightweight, reactive interfaces",
          },
        ],
      },
      {
        title: "Backend Development",
        links: [
          {
            label: "Node.js",
            href: "/services",
            icon: "⬢",
            desc: "Scalable APIs and services",
          },
          {
            label: "NestJS",
            href: "/services",
            icon: "⬡",
            desc: "Structured, typed backends",
          },
          {
            label: "Laravel",
            href: "/services",
            icon: "◐",
            desc: "Rapid PHP application builds",
          },
          {
            label: ".NET",
            href: "/services",
            icon: "◑",
            desc: "Robust enterprise systems",
          },
        ],
      },
      {
        title: "Cloud & DevOps",
        links: [
          {
            label: "AWS",
            href: "/services",
            icon: "☁",
            desc: "Scalable cloud infrastructure",
          },
          {
            label: "Azure",
            href: "/services",
            icon: "◫",
            desc: "Enterprise cloud delivery",
          },
          {
            label: "Docker",
            href: "/services",
            icon: "⬚",
            desc: "Portable, containerized apps",
          },
          {
            label: "Kubernetes",
            href: "/services",
            icon: "⎔",
            desc: "Orchestration at scale",
          },
          {
            label: "CI/CD",
            href: "/services",
            icon: "↻",
            desc: "Automated build & release",
          },
        ],
      },
      {
        title: "Mobile Development",
        links: [
          {
            label: "Flutter",
            href: "/services",
            icon: "❖",
            desc: "Cross-platform from one codebase",
          },
          {
            label: "React Native",
            href: "/services",
            icon: "◆",
            desc: "Native feel, shared logic",
          },
          {
            label: "Native Android",
            href: "/services",
            icon: "▲",
            desc: "Kotlin apps built for Android",
          },
          {
            label: "Native iOS",
            href: "/services",
            icon: "●",
            desc: "Swift apps built for iOS",
          },
        ],
      },
    ],
  },
  {
    label: "Hire Expert",
    href: "/contact",
    overview: "Talk to us about hiring",
    columns: [
      {
        title: "AI Engineers",
        links: [
          {
            label: "AI Agent Engineers",
            href: "/contact",
            icon: "✦",
            desc: "Build autonomous, tool-using agents",
          },
          {
            label: "LLM & RAG Engineers",
            href: "/contact",
            icon: "⬗",
            desc: "Grounded, production-grade LLM apps",
          },
          {
            label: "ML Engineers",
            href: "/contact",
            icon: "✧",
            desc: "Predictive models and pipelines",
          },
          {
            label: "MCP Integration Engineers",
            href: "/contact",
            icon: "⬖",
            desc: "Wire models into your systems",
          },
        ],
      },
      {
        title: "Frontend Developers",
        links: [
          {
            label: "React Developers",
            href: "/contact",
            icon: "◆",
            desc: "High-performing interfaces",
          },
          {
            label: "Next.js Developers",
            href: "/contact",
            icon: "▲",
            desc: "Fast, SEO-ready web apps",
          },
          {
            label: "Angular Developers",
            href: "/contact",
            icon: "◈",
            desc: "Enterprise-grade frontends",
          },
          {
            label: "Vue.js Developers",
            href: "/contact",
            icon: "◇",
            desc: "Reactive, lightweight UIs",
          },
        ],
      },
      {
        title: "Backend Developers",
        links: [
          {
            label: "Node.js Developers",
            href: "/contact",
            icon: "⬢",
            desc: "Scalable APIs and services",
          },
          {
            label: "Python Developers",
            href: "/contact",
            icon: "⬡",
            desc: "Data, AI, and backend systems",
          },
          {
            label: ".NET Developers",
            href: "/contact",
            icon: "◑",
            desc: "Robust enterprise systems",
          },
          {
            label: "Laravel Developers",
            href: "/contact",
            icon: "◐",
            desc: "Rapid PHP application builds",
          },
        ],
      },
      {
        title: "Mobile Developers",
        links: [
          {
            label: "React Native Developers",
            href: "/contact",
            icon: "◆",
            desc: "Cross-platform apps",
          },
          {
            label: "Flutter Developers",
            href: "/contact",
            icon: "❖",
            desc: "One codebase, every platform",
          },
          {
            label: "iOS Developers",
            href: "/contact",
            icon: "●",
            desc: "Native Swift applications",
          },
          {
            label: "Android Developers",
            href: "/contact",
            icon: "▲",
            desc: "Native Kotlin applications",
          },
        ],
      },
      {
        title: "DevOps Engineers",
        links: [
          {
            label: "Cloud Engineers",
            href: "/contact",
            icon: "☁",
            desc: "AWS, Azure, and GCP delivery",
          },
          {
            label: "Kubernetes Engineers",
            href: "/contact",
            icon: "⎔",
            desc: "Orchestration at scale",
          },
          {
            label: "CI/CD Engineers",
            href: "/contact",
            icon: "↻",
            desc: "Automated build & release",
          },
          {
            label: "Site Reliability (SRE)",
            href: "/contact",
            icon: "⬚",
            desc: "Observability and uptime",
          },
        ],
      },
      {
        title: "UI/UX Designers",
        links: [
          {
            label: "Product Designers",
            href: "/contact",
            icon: "◆",
            desc: "End-to-end product design",
          },
          {
            label: "UX Researchers",
            href: "/contact",
            icon: "◇",
            desc: "Insight-driven decisions",
          },
          {
            label: "Design Systems",
            href: "/contact",
            icon: "◈",
            desc: "Scalable, consistent UI",
          },
        ],
      },
      {
        title: "QA Engineers",
        links: [
          {
            label: "Automation QA",
            href: "/contact",
            icon: "↻",
            desc: "Fast, reliable test suites",
          },
          {
            label: "Manual QA",
            href: "/contact",
            icon: "◐",
            desc: "Thorough exploratory testing",
          },
          {
            label: "Performance QA",
            href: "/contact",
            icon: "⬢",
            desc: "Load and stress testing",
          },
        ],
      },
      {
        title: "Dedicated Teams",
        links: [
          {
            label: "Full Product Team",
            href: "/contact",
            icon: "✦",
            desc: "Design, build, and ship end-to-end",
          },
          {
            label: "Staff Augmentation",
            href: "/contact",
            icon: "⬡",
            desc: "Extend your in-house team",
          },
          {
            label: "Managed Delivery",
            href: "/contact",
            icon: "▲",
            desc: "We own the outcome",
          },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    columns: [
      {
        title: "AI & Automation",
        links: [
          {
            label: "AI Agents",
            href: "/solutions",
            icon: "✦",
            desc: "Autonomous assistants wired into your stack",
          },
          {
            label: "Workflow Automation",
            href: "/solutions",
            icon: "↻",
            desc: "Remove repetitive manual steps",
          },
          {
            label: "Business Automation",
            href: "/solutions",
            icon: "⚙",
            desc: "Connect the tools your team relies on",
          },
        ],
      },
      {
        title: "Platform",
        links: [
          {
            label: "Enterprise Software",
            href: "/solutions",
            icon: "⬢",
            desc: "Reliable systems built to scale",
          },
          {
            label: "Cloud Solutions",
            href: "/solutions",
            icon: "☁",
            desc: "Scalable, secure cloud delivery",
          },
          {
            label: "Data & Integrations",
            href: "/solutions",
            icon: "⇄",
            desc: "Unified data across your services",
          },
        ],
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    flat: true,
    links: [
      {
        label: "Healthcare",
        href: "/industries",
        icon: "✚",
        desc: "Compliant patient & clinical tools",
      },
      {
        label: "FinTech",
        href: "/industries",
        icon: "◈",
        desc: "Secure, correct financial apps",
      },
      {
        label: "Retail & eCommerce",
        href: "/industries",
        icon: "▲",
        desc: "Storefronts and back-office",
      },
      {
        label: "Manufacturing",
        href: "/industries",
        icon: "⚙",
        desc: "Operations & process tooling",
      },
      {
        label: "Education",
        href: "/industries",
        icon: "◇",
        desc: "Learning platforms and LMS",
      },
      {
        label: "Real Estate",
        href: "/industries",
        icon: "⌂",
        desc: "Listings, CRMs, and portals",
      },
      {
        label: "Hospitality",
        href: "/industries",
        icon: "●",
        desc: "Guest and property platforms",
      },
      {
        label: "Travel",
        href: "/industries",
        icon: "✈",
        desc: "Booking and itinerary systems",
      },
      {
        label: "Food & Beverage",
        href: "/industries",
        icon: "◐",
        desc: "Ordering and supply platforms",
      },
      {
        label: "Cleantech",
        href: "/industries",
        icon: "❋",
        desc: "Sustainability & energy software",
      },
    ],
  },
  {
    label: "Case Studies",
    href: "/case-studies",
    overview: "Explore all case studies",
    columns: [
      {
        title: "By Industry",
        links: [
          {
            label: "FinTech Platforms",
            href: "/case-studies",
            icon: "◈",
            desc: "Secure, correct financial products",
          },
          {
            label: "Healthcare Systems",
            href: "/case-studies",
            icon: "✚",
            desc: "Compliant patient & clinical tools",
          },
          {
            label: "Retail & eCommerce",
            href: "/case-studies",
            icon: "▲",
            desc: "Storefronts and back-office",
          },
          {
            label: "Logistics & Operations",
            href: "/case-studies",
            icon: "⚙",
            desc: "Automation for daily workflows",
          },
        ],
      },
      {
        title: "By Capability",
        links: [
          {
            label: "AI & Automation",
            href: "/case-studies",
            icon: "✦",
            desc: "Agents and workflow automation",
          },
          {
            label: "SaaS Platforms",
            href: "/case-studies",
            icon: "⬢",
            desc: "Multi-tenant products at scale",
          },
          {
            label: "Web Applications",
            href: "/case-studies",
            icon: "◆",
            desc: "Bespoke, high-performance apps",
          },
          {
            label: "Modernization",
            href: "/case-studies",
            icon: "↻",
            desc: "Legacy re-platforming, de-risked",
          },
        ],
      },
      {
        title: "Outcomes",
        links: [
          {
            label: "Featured Results",
            href: "/case-studies",
            icon: "★",
            desc: "Measured impact and delivery",
          },
          {
            label: "Client Stories",
            href: "/case-studies",
            icon: "◍",
            desc: "Partnerships from idea to launch",
          },
        ],
      },
    ],
  },
  {
    label: "Company",
    href: "/about",
    columns: [
      {
        title: "Rapid Tech Plus",
        links: [
          {
            label: "About",
            href: "/about",
            icon: "◆",
            desc: "Who we are and how we work",
          },
          {
            label: "Our Process",
            href: "/about",
            icon: "↻",
            desc: "Discover, design, build, launch",
          },
          {
            label: "Technologies",
            href: "/technologies",
            icon: "⬡",
            desc: "The stack we build on",
          },
          {
            label: "Contact",
            href: "/contact",
            icon: "✉",
            desc: "Start a conversation",
          },
        ],
      },
      {
        title: "More",
        links: [
          { label: "Careers", href: "/about", icon: "★", soon: true },
          { label: "Culture", href: "/about", icon: "❋", soon: true },
        ],
      },
    ],
  },
  { label: "Blogs", href: "/blog" },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Our Process", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/about", soon: true },
    ],
  },
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
    title: "Top Trending Insights",
    links: [
      { label: "Shipping AI Agents in Production", href: "/blog" },
      { label: "RAG That Grounds Answers", href: "/blog" },
      { label: "Why TypeScript Everywhere", href: "/blog" },
      { label: "Static-First That Scales", href: "/blog" },
      { label: "All Articles", href: "/blog" },
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
  icon: "github" | "linkedin" | "x" | "email";
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/rapidtechplus", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/rapidtechplus",
    icon: "linkedin",
  },
  { label: "X", href: "https://x.com/rapidtechplus", icon: "x" },
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

export const solutions = [
  {
    icon: "◆",
    title: "AI Agents",
    body: "Autonomous assistants wired into your data and tools — answering questions, triaging work, and taking action under your rules.",
  },
  {
    icon: "↻",
    title: "Workflow Automation",
    body: "Replace repetitive, error-prone manual steps with reliable automated pipelines that run around the clock.",
  },
  {
    icon: "⚙",
    title: "Business Automation",
    body: "Connect the tools your team already uses so information and tasks flow between them without copy-paste.",
  },
  {
    icon: "⬡",
    title: "Cloud Solutions",
    body: "Scalable, secure cloud infrastructure and delivery — from architecture to CI/CD and observability.",
  },
  {
    icon: "⇄",
    title: "Data & Integrations",
    body: "Unify data across your services with well-designed APIs, sync layers, and a single source of truth.",
  },
  {
    icon: "▲",
    title: "Managed Delivery",
    body: "We scope, build, ship, and keep improving — an accountable team that owns outcomes, not just tickets.",
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

/** "Why choose us" pillars — value props with a supporting stat. */
export const whyChoose = [
  {
    icon: "✦",
    title: "AI-first by default",
    body: "AI is woven through how we scope, build, and review — not bolted on as a demo.",
  },
  {
    icon: "⚡",
    title: "Ship in weeks, not quarters",
    body: "A lean senior team and an accelerated workflow move you from idea to production fast.",
  },
  {
    icon: "🛡",
    title: "Engineering you can trust",
    body: "TypeScript everywhere, tested and reviewed, with security and accessibility built in.",
  },
  {
    icon: "🤝",
    title: "A partner, not a vendor",
    body: "We own outcomes, communicate openly, and keep improving what we build with you.",
  },
];

/** AI capabilities highlighted on the homepage AI-expertise section. */
export const aiExpertise = [
  {
    icon: "✦",
    title: "AI Agents",
    body: "Autonomous assistants that use your tools and data to take real work off your team.",
  },
  {
    icon: "⬗",
    title: "RAG & Knowledge",
    body: "Answers grounded in your own content, with retrieval pipelines you can trust.",
  },
  {
    icon: "⬖",
    title: "LLM & MCP Integration",
    body: "Language models and MCP servers wired securely into your existing systems.",
  },
  {
    icon: "◍",
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

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
};

/**
 * Placeholder editorial index for the Insights page. Static, no CMS — real
 * posts replace these as they are written. Not yet individually routed, so
 * cards link to the Insights index rather than dead per-post URLs.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "shipping-ai-agents-in-production",
    title: "Shipping AI agents that actually hold up in production",
    excerpt:
      "What it takes to move an AI agent from a convincing demo to a dependable system — guardrails, evaluation, and the boring reliability work that matters.",
    category: "AI",
    date: "2026-06-18",
    readingTime: "8 min read",
  },
  {
    slug: "rag-that-doesnt-hallucinate",
    title: "Building RAG that grounds answers in your own data",
    excerpt:
      "A practical look at retrieval pipelines: chunking, embeddings, and the retrieval quality checks that keep responses honest.",
    category: "AI",
    date: "2026-05-30",
    readingTime: "6 min read",
  },
  {
    slug: "why-typescript-everywhere",
    title: "Why we run TypeScript across the whole stack",
    excerpt:
      "End-to-end type safety changes how teams ship. Here's how a shared type layer reduces bugs and speeds up delivery.",
    category: "Web Development",
    date: "2026-05-12",
    readingTime: "5 min read",
  },
  {
    slug: "static-sites-that-scale",
    title: "Static-first architecture that still scales",
    excerpt:
      "How a statically-exported Next.js site stays fast, cheap, and secure — and where to draw the line before you need a server.",
    category: "Web Development",
    date: "2026-04-27",
    readingTime: "7 min read",
  },
  {
    slug: "design-systems-that-last",
    title: "Design systems that survive the second year",
    excerpt:
      "A class-driven, token-based approach to UI that keeps a product visually coherent as it grows.",
    category: "Product Engineering",
    date: "2026-04-09",
    readingTime: "6 min read",
  },
  {
    slug: "from-idea-to-launch-in-weeks",
    title: "From idea to launch in weeks: how our process works",
    excerpt:
      "The four-phase engagement model we use to move from a first conversation to a live, production product.",
    category: "Product Engineering",
    date: "2026-03-22",
    readingTime: "5 min read",
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
 * "Spurring Digital Growth Across Domains" — industry domains we serve, shown
 * as a homepage grid mirroring the techalmas-style domains section.
 */
export const growthDomains = [
  {
    icon: "◈",
    title: "FinTech & Banking",
    body: "Secure, correct financial products — payments, dashboards, and compliant back-office systems.",
  },
  {
    icon: "✚",
    title: "Healthcare & MedTech",
    body: "Patient portals, clinical tools, and data platforms built with privacy and compliance in mind.",
  },
  {
    icon: "▲",
    title: "Retail & eCommerce",
    body: "Conversion-focused storefronts, catalogs, and operations tooling that scale with demand.",
  },
  {
    icon: "⚙",
    title: "Manufacturing & Logistics",
    body: "Operations dashboards and automation that streamline supply, inventory, and fulfilment.",
  },
  {
    icon: "◇",
    title: "Education & eLearning",
    body: "Learning platforms, LMS, and assessment tools designed for engagement and reach.",
  },
  {
    icon: "⌂",
    title: "Real Estate & PropTech",
    body: "Listings, CRMs, and portals that connect buyers, sellers, and agents seamlessly.",
  },
];

export type CaseStudy = {
  icon: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  metrics: { value: string; label: string }[];
};

/**
 * Illustrative case studies for the Case Studies page. Representative of the
 * engagements we take on until real, client-approved studies are published.
 */
export const caseStudies: CaseStudy[] = [
  {
    icon: "◈",
    title: "Payments platform rebuilt for scale",
    client: "FinTech scaleup",
    category: "FinTech",
    summary:
      "Re-platformed a legacy payments dashboard into a fast, multi-tenant system with real-time reconciliation and audit-grade correctness.",
    metrics: [
      { value: "3×", label: "Faster load times" },
      { value: "99.9%", label: "Uptime at launch" },
    ],
  },
  {
    icon: "✦",
    title: "AI agent that triages support at scale",
    client: "SaaS company",
    category: "AI & Automation",
    summary:
      "Shipped a retrieval-grounded AI agent wired into the product and knowledge base, deflecting routine tickets and routing the rest.",
    metrics: [
      { value: "40%", label: "Tickets deflected" },
      { value: "24/7", label: "First-response cover" },
    ],
  },
  {
    icon: "▲",
    title: "Headless storefront for a growing retailer",
    client: "Retail brand",
    category: "Retail & eCommerce",
    summary:
      "Designed and built a headless commerce storefront with fast search, streamlined checkout, and an operations back office.",
    metrics: [
      { value: "+28%", label: "Conversion lift" },
      { value: "0.9s", label: "Median page load" },
    ],
  },
  {
    icon: "⚙",
    title: "Operations automation for logistics",
    client: "Logistics operator",
    category: "Automation",
    summary:
      "Replaced manual, spreadsheet-driven workflows with automated pipelines and dashboards that surface exceptions in real time.",
    metrics: [
      { value: "12h", label: "Saved per week" },
      { value: "−65%", label: "Manual errors" },
    ],
  },
  {
    icon: "✚",
    title: "Clinical portal for a healthcare provider",
    client: "Healthcare provider",
    category: "Healthcare",
    summary:
      "Built a compliant patient and clinician portal with secure records, scheduling, and integrations to existing systems.",
    metrics: [
      { value: "HIPAA", label: "Aligned by design" },
      { value: "4.8★", label: "User satisfaction" },
    ],
  },
  {
    icon: "⬢",
    title: "Multi-tenant SaaS from MVP to scale",
    client: "B2B SaaS startup",
    category: "SaaS Platforms",
    summary:
      "Took a SaaS product from first MVP to a billing-ready, role-based platform engineered to grow with the business.",
    metrics: [
      { value: "6 wks", label: "To first launch" },
      { value: "10×", label: "Headroom to scale" },
    ],
  },
];
