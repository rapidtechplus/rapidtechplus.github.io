/**
 * Case studies collection. Slug-keyed study records power the `/case-studies`
 * hub grid and their own `/case-studies/[slug]` detail pages. The mega-menu
 * panel lists the studies themselves, so every link resolves to a real route.
 *
 * These engagements are **representative** — they describe the shape of work we
 * take on, not named client projects. Every record must stay that way until a
 * study is client-approved for publication: no invented logos, testimonials, or
 * attributed claims. `CASE_STUDY_DISCLOSURE` is rendered on each detail page so
 * the framing travels with the content rather than living only on the hub.
 */

import type { Faq, Feature, MegaItem, Metric, NavLink } from "@/content/types";

/**
 * One chapter of the narrative (challenge / approach / outcome). `body` is the
 * prose paragraph; `points` are the supporting cards beside it. The headings are
 * fixed by the template, so records carry content only.
 */
export type CaseStudyChapter = {
  body: string;
  points: Feature[];
};

export type CaseStudy = {
  slug: string;
  icon: string;
  title: string;
  client: string;
  category: string;
  /** One-line description shown in menus and card grids. */
  summary: string;
  metrics: Metric[];
  /** Hero lead paragraph on the detail page. */
  intro: string;
  /** The situation we were brought in to fix. */
  challenge: CaseStudyChapter;
  /** How we approached the build. */
  approach: CaseStudyChapter;
  /** What shipping it changed. */
  outcome: CaseStudyChapter;
  /** Technology names rendered as a chip cloud. */
  technologies?: string[];
  /** Service slugs this engagement drew on (links to `/services/[slug]`). */
  services?: string[];
  /** Industry slugs this engagement sits in (links to `/industries/[slug]`). */
  industries?: string[];
  /** Optional per-study FAQs. */
  faqs?: Faq[];
};

/**
 * Shown on every detail page. States plainly that the studies are
 * representative — the same promise the hub makes, kept with the record.
 */
export const CASE_STUDY_DISCLOSURE =
  "This is a representative engagement: it reflects the problems we solve and how we solve them, with details generalised. Named, client-approved studies are published here as they are cleared.";

export const caseStudies: CaseStudy[] = [
  {
    slug: "payments-platform-rebuilt-for-scale",
    icon: "landmark",
    title: "Payments platform rebuilt for scale",
    client: "FinTech scaleup",
    category: "FinTech",
    summary:
      "Re-platformed a legacy payments dashboard into a fast, multi-tenant system with real-time reconciliation and audit-grade correctness.",
    metrics: [
      { value: "3×", label: "Faster load times" },
      { value: "99.9%", label: "Uptime at launch" },
    ],
    intro:
      "A payments business had outgrown the dashboard it launched on. Every new client made it slower, reconciliation ran overnight in a script nobody wanted to touch, and correctness rested on manual checks. We re-platformed it without pausing the business.",
    challenge: {
      body: "The original system was built for one tenant and stretched to serve dozens. Data for every client lived in shared tables with filtering applied in application code, so a single missed clause was a compliance incident waiting to happen. Reporting queries scanned years of transactions on every page load, and the finance team reconciled balances from an overnight job whose output they had learned not to fully trust.",
      points: [
        {
          icon: "gauge",
          title: "Slowing under its own data",
          body: "Dashboard queries scanned the full transaction history on every load, so response times degraded with each new client onboarded.",
        },
        {
          icon: "shield",
          title: "Tenant isolation by convention",
          body: "Separation between clients was enforced in application code rather than the data layer — one missing filter away from exposure.",
        },
        {
          icon: "refresh-cw",
          title: "Reconciliation nobody trusted",
          body: "An overnight batch job produced balances that the finance team re-checked by hand before acting on them.",
        },
      ],
    },
    approach: {
      body: "We rebuilt the data layer around tenant isolation enforced at the database, not in application code, so correctness stopped depending on developer discipline. Reconciliation moved from an overnight batch to an event-driven ledger that reconciles continuously and is append-only, giving finance a balance they can audit line by line. We ran the new platform alongside the old one, migrating tenants in batches and comparing outputs against the legacy system until they agreed exactly.",
      points: [
        {
          icon: "database",
          title: "Isolation enforced at the data layer",
          body: "Row-level security and per-tenant keys made cross-tenant reads impossible by construction, not by convention.",
        },
        {
          icon: "activity",
          title: "An append-only ledger",
          body: "Continuous, event-driven reconciliation replaced the nightly batch — every balance traces to the events that produced it.",
        },
        {
          icon: "git-branch",
          title: "Migrated tenant by tenant",
          body: "Both systems ran in parallel with outputs compared until they matched, so no cutover needed a big-bang weekend.",
        },
      ],
    },
    outcome: {
      body: "Dashboards that took seconds now render in well under a second, and the platform holds that speed as tenants are added rather than degrading with each one. Finance reads balances directly from the ledger instead of re-deriving them, and the audit trail answers questions that previously took a developer and a query console. The team ships to it without the release-night dread the old system carried.",
      points: [
        {
          icon: "zap",
          title: "Fast, and stays fast",
          body: "Roughly 3× faster page loads, with response times that no longer scale with the size of the transaction history.",
        },
        {
          icon: "shield-check",
          title: "Audit-grade by default",
          body: "Every balance traces to its underlying events, so audit questions are answered from the product rather than from a console.",
        },
        {
          icon: "rocket",
          title: "Room to grow",
          body: "Onboarding a new tenant is a configuration change, not an engineering project.",
        },
      ],
    },
    technologies: [
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Node.js",
      "Redis",
      "AWS",
      "Terraform",
      "Playwright",
    ],
    services: ["custom-software-development", "cloud-devops", "qa-testing"],
    industries: ["fintech"],
    faqs: [
      {
        q: "How do you re-platform without stopping the business?",
        a: "We run the new system alongside the old one and migrate in batches, comparing outputs between the two until they agree. Each batch is reversible, so there is never a single weekend where everything has to work first time.",
      },
      {
        q: "Why enforce tenant isolation in the database rather than the app?",
        a: "Application-level filtering is one forgotten clause away from a data breach, and no amount of code review makes that risk zero. Pushing isolation into the data layer means a query that would cross tenants fails rather than silently returning the wrong rows.",
      },
    ],
  },
  {
    slug: "ai-agent-triages-support-at-scale",
    icon: "bot",
    title: "AI agent that triages support at scale",
    client: "SaaS company",
    category: "AI & Automation",
    summary:
      "Shipped a retrieval-grounded AI agent wired into the product and knowledge base, deflecting routine tickets and routing the rest.",
    metrics: [
      { value: "40%", label: "Tickets deflected" },
      { value: "24/7", label: "First-response cover" },
    ],
    intro:
      "A SaaS support team was spending most of its day on questions the documentation already answered, while genuinely hard tickets waited behind them. We built an agent that handles the repetitive tier and hands everything else to a human with the context already gathered.",
    challenge: {
      body: "Support volume grew with the customer base, but the mix did not: a large share of tickets were variations on the same handful of questions, each one answered from scratch. Complex tickets — the ones where response time actually mattered — queued behind them. The team had tried a keyword chatbot, and it had damaged trust: it answered confidently and wrongly, so customers learned to skip straight to a human.",
      points: [
        {
          icon: "messages-square",
          title: "The same questions, endlessly",
          body: "A large share of the queue was repeat questions the documentation already answered, each handled manually.",
        },
        {
          icon: "clock",
          title: "Hard tickets waited longest",
          body: "Complex issues queued behind routine ones, so response time was worst exactly where it mattered most.",
        },
        {
          icon: "triangle",
          title: "A chatbot that had lost trust",
          body: "An earlier keyword bot answered confidently and incorrectly, teaching customers to bypass it entirely.",
        },
      ],
    },
    approach: {
      body: "We grounded the agent in retrieval over the product documentation and past resolved tickets, so answers come from real source material and cite it rather than being generated from the model's own recall. The agent is scoped to answer or escalate — it does not act on the customer's account. Anything it is not confident about, or that touches billing or account changes, goes to a human with the retrieved context and a draft attached. We shipped to a narrow question set first and widened it only where the evaluation set showed the agent was reliably right.",
      points: [
        {
          icon: "search-check",
          title: "Grounded in real sources",
          body: "Retrieval over documentation and resolved tickets means every answer cites where it came from and can be checked.",
        },
        {
          icon: "workflow",
          title: "Answer or escalate — nothing else",
          body: "The agent has no write access to accounts. Low-confidence, billing, and account-change tickets route to a human with context attached.",
        },
        {
          icon: "list-checks",
          title: "Widened only on evidence",
          body: "An evaluation set gated each expansion of scope, so coverage grew only where accuracy was demonstrated.",
        },
      ],
    },
    outcome: {
      body: "Around 40% of incoming tickets are now resolved without a human, and — more importantly to the team — the ones that do reach a human arrive with the relevant context already gathered. Customers get a useful first response at any hour instead of waiting for the team's working day. Because answers cite their sources, the team can see why the agent said what it said, which is what rebuilt the trust the previous bot had spent.",
      points: [
        {
          icon: "zap",
          title: "Routine tier handled",
          body: "About 40% of tickets resolved without a human, freeing the team for the work that needs judgement.",
        },
        {
          icon: "clock",
          title: "Answers at any hour",
          body: "First-response cover runs around the clock rather than starting when the team logs on.",
        },
        {
          icon: "eye",
          title: "Answers you can check",
          body: "Every response cites its source, so the team can audit the agent's reasoning instead of trusting it blindly.",
        },
      ],
    },
    technologies: [
      "TypeScript",
      "Python",
      "OpenAI",
      "Anthropic",
      "pgvector",
      "PostgreSQL",
      "Next.js",
      "AWS",
    ],
    services: ["ai-development", "custom-software-development"],
    industries: ["fintech", "retail-ecommerce"],
    faqs: [
      {
        q: "How do you stop the agent inventing answers?",
        a: "It answers from retrieved documentation and past tickets rather than from the model's own recall, and it cites what it used. When retrieval finds nothing relevant, the agent escalates instead of improvising — a handoff is a correct outcome, not a failure.",
      },
      {
        q: "What stops it doing something irreversible?",
        a: "Scope. The agent can answer or escalate, and it has no write access to customer accounts. Anything touching billing or account changes goes to a human by rule, regardless of how confident the model is.",
      },
    ],
  },
  {
    slug: "headless-storefront-for-a-growing-retailer",
    icon: "shopping-cart",
    title: "Headless storefront for a growing retailer",
    client: "Retail brand",
    category: "Retail & eCommerce",
    summary:
      "Designed and built a headless commerce storefront with fast search, streamlined checkout, and an operations back office.",
    metrics: [
      { value: "+28%", label: "Conversion lift" },
      { value: "0.9s", label: "Median page load" },
    ],
    intro:
      "A retailer's storefront was fast enough on the office wifi and painful on a phone. Search returned near-misses, checkout leaked customers at every step, and the merchandising team could not change a thing without a developer.",
    challenge: {
      body: "The theme-based storefront had accumulated years of plugins, and each one added scripts to every page. On a mid-range phone over mobile data, the product page took long enough that a meaningful share of visitors left before it rendered. Search matched on exact strings, so a plural or a typo returned nothing. Checkout ran five steps and asked for account creation before it asked for payment. Behind the scenes, merchandising changes queued behind the development backlog.",
      points: [
        {
          icon: "smartphone",
          title: "Slow where the customers were",
          body: "Years of accumulated plugin scripts made product pages painful on a mid-range phone over mobile data.",
        },
        {
          icon: "search",
          title: "Search that missed",
          body: "Exact string matching meant a plural or a typo returned an empty result set instead of the product.",
        },
        {
          icon: "shopping-cart",
          title: "Checkout leaked customers",
          body: "Five steps, with forced account creation before payment — abandonment climbed at every one.",
        },
      ],
    },
    approach: {
      body: "We separated the storefront from the commerce backend, rendering pages statically at the edge so the customer's phone downloads a page rather than assembling one. Search moved to a typo-tolerant index with faceted filtering that returns results as you type. Checkout was rebuilt as a single guest-first step, with the account offered after payment rather than demanded before it. The operations back office gave merchandising direct control over collections and copy, taking those changes off the development backlog entirely.",
      points: [
        {
          icon: "layers",
          title: "Storefront split from backend",
          body: "Statically rendered pages served from the edge — the phone downloads a page instead of assembling one.",
        },
        {
          icon: "search-check",
          title: "Search that tolerates typos",
          body: "A dedicated index with faceted filtering returns forgiving, relevant results as the customer types.",
        },
        {
          icon: "pen-tool",
          title: "Guest-first checkout",
          body: "One step, with the account offered after payment rather than demanded before it.",
        },
      ],
    },
    outcome: {
      body: "Median page load landed at 0.9 seconds and conversion rose about 28%, with most of that gain coming from mobile — the segment the old storefront served worst. Search now returns the product rather than an empty state, which removed a whole category of support contact. The merchandising team runs campaigns without filing a ticket, so the development backlog is spent on product work instead of copy changes.",
      points: [
        {
          icon: "gauge",
          title: "0.9s median load",
          body: "Fast on the mid-range phones and mobile data that most customers actually shop on.",
        },
        {
          icon: "target",
          title: "+28% conversion",
          body: "Driven mostly by mobile — the segment the previous storefront served worst.",
        },
        {
          icon: "users",
          title: "Merchandising unblocked",
          body: "Campaigns and collections ship without a developer, freeing the backlog for product work.",
        },
      ],
    },
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Stripe",
      "Algolia",
      "Vercel",
      "PostgreSQL",
    ],
    services: ["web-development", "ui-ux-design", "custom-software-development"],
    industries: ["retail-ecommerce"],
    faqs: [
      {
        q: "Why go headless rather than fix the existing theme?",
        a: "The theme's performance problem was structural: every plugin added scripts to every page, and no amount of tuning changes that. Separating the storefront from the backend let us control exactly what ships to the browser while keeping the commerce engine the business already ran on.",
      },
      {
        q: "Does a static storefront handle stock and pricing changes?",
        a: "Yes. Pages are statically rendered but revalidate on change, and genuinely live data — stock levels, cart, pricing — is fetched client-side. Customers get static-page speed with accurate numbers.",
      },
    ],
  },
  {
    slug: "operations-automation-for-logistics",
    icon: "truck",
    title: "Operations automation for logistics",
    client: "Logistics operator",
    category: "Automation",
    summary:
      "Replaced manual, spreadsheet-driven workflows with automated pipelines and dashboards that surface exceptions in real time.",
    metrics: [
      { value: "12h", label: "Saved per week" },
      { value: "−65%", label: "Manual errors" },
    ],
    intro:
      "A logistics operator ran its day out of a shared spreadsheet: copied from three systems each morning, reconciled by hand, and already stale by mid-afternoon. We replaced the copying, not the judgement.",
    challenge: {
      body: "Every morning, a coordinator exported data from the carrier portal, the warehouse system, and the ordering system, then pasted it into a workbook that had grown its own formula layer over several years. The result was the operational picture for the day — and it was wrong by lunchtime. Exceptions surfaced only when someone happened to scroll past the right row, so problems were usually found by the customer first. The workbook's logic lived in one person's head, which made holidays genuinely risky.",
      points: [
        {
          icon: "file-text",
          title: "A day that began with copy-paste",
          body: "Three systems exported and pasted into a workbook by hand every morning — stale before the afternoon.",
        },
        {
          icon: "eye",
          title: "Exceptions found by customers",
          body: "Problems surfaced only if someone scrolled past the right row, so customers often noticed first.",
        },
        {
          icon: "users",
          title: "Logic in one person's head",
          body: "Years of accumulated spreadsheet formulas were understood by exactly one coordinator.",
        },
      ],
    },
    approach: {
      body: "We integrated the three source systems directly so the data arrives continuously instead of being fetched by hand. The rules buried in the spreadsheet's formula layer were extracted, written down, confirmed with the coordinators who actually knew them, and implemented as an explicit, tested pipeline. Rather than another dashboard to watch, exceptions push to the people who can act on them. Deliberately, the automation handles gathering and flagging — the operational decisions stayed with the team, which is what made them willing to trust it.",
      points: [
        {
          icon: "plug-zap",
          title: "Systems integrated at the source",
          body: "Carrier, warehouse, and ordering data flow in continuously — no morning export, no paste.",
        },
        {
          icon: "list-checks",
          title: "Spreadsheet rules made explicit",
          body: "The workbook's implicit logic was extracted, confirmed with the coordinators, and covered by tests.",
        },
        {
          icon: "zap",
          title: "Exceptions come to you",
          body: "Rather than a dashboard someone must remember to watch, exceptions push to whoever can act on them.",
        },
      ],
    },
    outcome: {
      body: "The team got back around twelve hours a week that had gone into copying and reconciling, and manual errors fell by roughly 65% — the ones that remain are judgement calls rather than transcription slips. Exceptions now reach a coordinator in minutes instead of surfacing as a customer complaint. The rules are in version control and covered by tests, so the operation no longer depends on one person's memory of what a formula was for.",
      points: [
        {
          icon: "clock",
          title: "12 hours a week back",
          body: "Time that went into copying and reconciling now goes into the exceptions that need a person.",
        },
        {
          icon: "shield-check",
          title: "65% fewer manual errors",
          body: "The errors that remain are judgement calls, not transcription mistakes.",
        },
        {
          icon: "git-branch",
          title: "Knowledge out of one head",
          body: "The operational rules live in version control with tests, not in a workbook only one person understands.",
        },
      ],
    },
    technologies: [
      "TypeScript",
      "Python",
      "PostgreSQL",
      "Node.js",
      "Docker",
      "AWS",
      "Grafana",
    ],
    services: ["custom-software-development", "cloud-devops", "ai-development"],
    industries: ["manufacturing", "retail-ecommerce"],
    faqs: [
      {
        q: "Do we have to replace our existing systems?",
        a: "No. We integrated with the carrier, warehouse, and ordering systems already in use. Replacing working systems adds risk and cost without addressing the actual problem, which was the manual copying between them.",
      },
      {
        q: "What happens to the people whose job this automated?",
        a: "The automation took over gathering and flagging, not deciding. The coordinators still make the operational calls — they just get twelve hours a week back from copy-paste to make them properly.",
      },
    ],
  },
  {
    slug: "clinical-portal-for-a-healthcare-provider",
    icon: "heart-pulse",
    title: "Clinical portal for a healthcare provider",
    client: "Healthcare provider",
    category: "Healthcare",
    summary:
      "Built a compliant patient and clinician portal with secure records, scheduling, and integrations to existing systems.",
    metrics: [
      { value: "HIPAA", label: "Aligned by design" },
      { value: "4.8★", label: "User satisfaction" },
    ],
    intro:
      "Patients phoned to book because the portal was harder than the phone. Clinicians retyped the same details into three systems. We built one portal that both groups would actually use — with compliance designed in rather than audited on afterwards.",
    challenge: {
      body: "The existing portal had been bought, not designed: patients could technically book online, but enough of them gave up and phoned that reception treated the portal as a rounding error. Clinicians fared no better, moving between a records system, a scheduling tool, and a spreadsheet, retyping the same details into each. Every integration idea ran into the same wall — patient data could not simply be moved around, and the team had no confidence about what was permitted, so the safest answer was always no.",
      points: [
        {
          icon: "phone",
          title: "Patients phoned instead",
          body: "Booking online was harder than calling, so reception absorbed the volume the portal was meant to remove.",
        },
        {
          icon: "refresh-cw",
          title: "The same details, three times",
          body: "Clinicians retyped patient information across a records system, a scheduling tool, and a spreadsheet.",
        },
        {
          icon: "shield",
          title: "Compliance as a blocker",
          body: "With no clear picture of what was permitted, every integration proposal defaulted to no.",
        },
      ],
    },
    approach: {
      body: "We started with the compliance model rather than retrofitting it: data classification, access rules, encryption, audit logging, and retention were designed before the first screen. Patient-facing booking was rebuilt around what patients actually do — see real availability, book, reschedule, and cancel without a phone call. The portal integrates with the existing records system through a governed interface, so clinicians enter details once and the audit trail records every access. We tested with real patients and real clinicians, including the ones who had given up on the old portal.",
      points: [
        {
          icon: "shield-check",
          title: "Compliance designed in first",
          body: "Data classification, access rules, encryption, audit logging, and retention preceded the first screen.",
        },
        {
          icon: "handshake",
          title: "Enter it once",
          body: "A governed interface to the existing records system ended the retyping, with every access logged.",
        },
        {
          icon: "users",
          title: "Tested with real users",
          body: "Sessions with actual patients and clinicians — including those who had abandoned the old portal.",
        },
      ],
    },
    outcome: {
      body: "Patients book, reschedule, and cancel themselves, which took a substantial call volume off reception and gave that time back to the people in the waiting room. Clinicians enter details once. Satisfaction sits at 4.8 out of 5 across both groups — the number we watch hardest, because a portal nobody uses is worth nothing regardless of its uptime. Because the compliance model was designed in, the audit trail answers access questions directly instead of triggering an investigation.",
      points: [
        {
          icon: "star",
          title: "4.8★ across both groups",
          body: "Measured with patients and clinicians alike — a portal people choose over the phone.",
        },
        {
          icon: "clock",
          title: "Reception freed up",
          body: "Self-service booking removed a substantial share of the call volume the old portal had pushed to staff.",
        },
        {
          icon: "shield-check",
          title: "Audit answers on demand",
          body: "Access questions are answered from the audit trail rather than by launching an investigation.",
        },
      ],
    },
    technologies: [
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Node.js",
      "HL7 FHIR",
      "AWS",
      "Terraform",
      "Playwright",
    ],
    services: ["custom-software-development", "ui-ux-design", "qa-testing"],
    industries: ["healthcare"],
    faqs: [
      {
        q: "What does “HIPAA aligned by design” actually mean here?",
        a: "That the data classification, access control, encryption, audit logging, and retention model were designed before the first screen was built, rather than assessed at the end. It describes how the system was engineered — a formal compliance determination is the provider's to make with their own auditor, and we build to support that review rather than substitute for it.",
      },
      {
        q: "Do we have to replace our records system?",
        a: "No. The portal integrates with the existing records system through a governed interface. Replacing a working clinical records system is a far larger risk than the problem the portal was solving.",
      },
    ],
  },
  {
    slug: "multi-tenant-saas-from-mvp-to-scale",
    icon: "layout-dashboard",
    title: "Multi-tenant SaaS from MVP to scale",
    client: "B2B SaaS startup",
    category: "SaaS Platforms",
    summary:
      "Took a SaaS product from first MVP to a billing-ready, role-based platform engineered to grow with the business.",
    metrics: [
      { value: "6 wks", label: "To first launch" },
      { value: "10×", label: "Headroom to scale" },
    ],
    intro:
      "A founding team had a validated idea, a deadline, and no platform. We shipped an MVP in six weeks that was narrow on features and honest about its foundations — so the second year of the product did not require throwing away the first.",
    challenge: {
      body: "The team needed something real in front of design partners quickly, which is the point at which most products acquire the decisions that haunt them. The common failure is to hard-code a single customer's assumptions into the schema, then discover at customer ten that tenancy, roles, and billing cannot be retrofitted without a rewrite. The opposite failure is just as expensive: architecting for a scale the product may never reach and missing the window entirely.",
      points: [
        {
          icon: "clock",
          title: "A real deadline",
          body: "Design partners were waiting, and a validated idea has a window that does not stay open.",
        },
        {
          icon: "layers",
          title: "Tenancy cannot be retrofitted",
          body: "Single-customer assumptions baked into the schema become a rewrite at around customer ten.",
        },
        {
          icon: "triangle",
          title: "Over-engineering costs the same",
          body: "Building for a scale the product may never reach misses the window just as effectively.",
        },
      ],
    },
    approach: {
      body: "We drew the line by deciding which things are cheap now and ruinous later. Tenancy, identity, and the permissions model went in from day one, because retrofitting them is a rewrite. Everything else was deferred: the MVP shipped with one plan, no billing engine, and a deliberately narrow feature set. Billing arrived once real customers had shown us what they would actually pay for, and it slotted into a data model that already knew what a tenant was. Six weeks bought a product in front of design partners with foundations that did not need apologising for.",
      points: [
        {
          icon: "database",
          title: "Tenancy from day one",
          body: "Isolation, identity, and roles were in the first schema — the decisions that are cheap now and ruinous later.",
        },
        {
          icon: "feather",
          title: "Everything else deferred",
          body: "One plan, no billing engine, a narrow feature set — scope was cut hard so the foundation could be right.",
        },
        {
          icon: "target",
          title: "Billing after the evidence",
          body: "Added once real customers showed what they would pay for, into a model that already understood tenants.",
        },
      ],
    },
    outcome: {
      body: "The product reached design partners six weeks in and started returning the feedback that shaped everything after. Billing and role-based access were added later as planned, without touching the core schema — the retrofit that usually costs a quarter cost a sprint. Load testing puts current headroom at roughly 10× present usage, which is the useful kind of headroom: enough that growth is not an emergency, not so much that the team paid for capacity it never used.",
      points: [
        {
          icon: "rocket",
          title: "Six weeks to design partners",
          body: "Real feedback arrived early enough to shape the product rather than validate it after the fact.",
        },
        {
          icon: "blocks",
          title: "Billing added without a rewrite",
          body: "Plans and role-based access slotted into the existing schema — a sprint, not a quarter.",
        },
        {
          icon: "gauge",
          title: "10× headroom, measured",
          body: "Load testing confirms room to grow well past current usage without re-architecting.",
        },
      ],
    },
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "PostgreSQL",
      "Node.js",
      "Stripe",
      "AWS",
      "Terraform",
    ],
    services: ["saas-development", "custom-software-development", "cloud-devops"],
    industries: ["fintech", "education"],
    faqs: [
      {
        q: "How do you ship in six weeks without building something disposable?",
        a: "By separating the decisions that are cheap now and ruinous later from the ones that can wait. Tenancy, identity, and permissions went in from day one because retrofitting them is a rewrite. Features, plans, and billing were deferred until customers showed us what mattered.",
      },
      {
        q: "Is an MVP that narrow actually useful?",
        a: "That is what makes it useful. A narrow product gets in front of design partners while the idea is still worth testing, and their feedback shapes what gets built next — which is worth considerably more than the features we would have guessed at.",
      },
    ],
  },
];

/** Every case-study slug, in display order. Consumed by the sitemap and route. */
export const caseStudySlugs = caseStudies.map((c) => c.slug);

/** Look up one study by slug. Returns `undefined` for unknown slugs (→ 404). */
export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

/**
 * Other studies to cross-link from a detail page — same category first, then
 * the rest in display order, so the grid is always full even when a category
 * has only one study.
 */
export function relatedCaseStudies(slug: string, limit = 3): CaseStudy[] {
  const current = getCaseStudy(slug);
  if (!current) return [];
  const others = caseStudies.filter((c) => c.slug !== slug);
  const sameCategory = others.filter((c) => c.category === current.category);
  const rest = others.filter((c) => c.category !== current.category);
  return [...sameCategory, ...rest].slice(0, limit);
}

/** The route a study's card and menu entry points at. */
export const caseStudyHref = (slug: string) => `/case-studies/${slug}`;

/**
 * The hub grid's card shape, also the source of the hub's `ItemList` JSON-LD —
 * derived from `caseStudies` so the markup cannot drift from the visible grid.
 */
export const caseStudyCards = caseStudies.map((c) => ({
  title: c.title,
  body: c.summary,
  href: caseStudyHref(c.slug),
}));

/**
 * The Case Studies mega-menu (flat panel). Lists the studies themselves rather
 * than category filters, so every entry resolves to a real page — the site does
 * not advertise destinations that do not exist.
 */
export const caseStudiesMenu: MegaItem = {
  label: "Case Studies",
  href: "/case-studies",
  flat: true,
  overview: "Explore all case studies",
  links: caseStudies.map(
    (c): NavLink => ({
      label: c.title,
      href: caseStudyHref(c.slug),
      icon: c.icon,
      desc: c.client,
    }),
  ),
};
