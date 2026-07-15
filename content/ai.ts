/**
 * AI collection — the single source of truth for the dedicated AI section: the
 * `/ai` hub, the `/ai/[slug]` deep landing pages, and the AI mega-menu panel.
 *
 * This is the company's flagship differentiator, so each capability gets a full
 * landing page (the same rich `ServiceLanding` template used by `/services`),
 * not a light detail stub. The section reads as a funnel:
 *
 *   Artificial Intelligence → AI Agents → LLM Integration → RAG → MCP Servers →
 *   Automation → Enterprise AI → AI Consulting
 *
 * `/ai` is the "Artificial Intelligence" hub that frames the whole capability; the seven
 * records below are its deep sub-pages. Editing a record here updates the nav,
 * the sitemap, the hub grid, and the detail page together — no duplicated copy.
 */

import { CONTACT_HREF } from "@/config/site";
import type { MegaItem, ServiceRecord } from "@/content/types";
import { caseStudies, type CaseStudy } from "@/content/case-studies";
import { industrySectors } from "@/content/industries";

/**
 * An AI capability shares the rich `ServiceRecord` shape (intro, overview,
 * capabilities, problems, technologies, benefits, industries, caseStudies,
 * faqs) so it can render through the same landing template as a service.
 */
export type AiCapability = ServiceRecord;

export const aiCapabilities: AiCapability[] = [
  {
    slug: "ai-agents",
    category: "AI",
    label: "AI Agents",
    title: "AI Agents",
    icon: "bot",
    summary: "Autonomous assistants that take action",
    intro:
      "Tool-using agents that plan and take real action inside your systems — triaging work, answering from your data, and completing multi-step tasks under your rules.",
    overview:
      "We build agents that go beyond chat: they read your data, call your APIs, and complete multi-step work autonomously — always within the permissions and policy you define, with a full audit trail. Every agent ships with guardrails, evaluation, and human-in-the-loop controls so autonomy stays safe and reviewable.",
    capabilities: [
      {
        icon: "workflow",
        title: "Plan & act",
        body: "Agents that break a goal into steps and use your tools to complete real work end to end.",
      },
      {
        icon: "plug-zap",
        title: "Tool & data access",
        body: "Secure, governed connections to your APIs, databases, and third-party services.",
      },
      {
        icon: "shield-check",
        title: "Guardrails & oversight",
        body: "Permission boundaries, approvals, and logging so autonomy stays safe and reviewable.",
      },
    ],
    problems: [
      {
        icon: "clock",
        title: "Teams buried in repetitive work",
        body: "Manual triage, research, and coordination eat hours that an agent can handle reliably.",
      },
      {
        icon: "arrow-left-right",
        title: "Work stuck between systems",
        body: "Tasks stall as people copy data between tools an agent could orchestrate directly.",
      },
      {
        icon: "shield-check",
        title: "Fear of letting AI act",
        body: "Autonomy feels risky without permissions, approvals, and a trail — so we build those in first.",
      },
    ],
    technologies: [
      "Anthropic Claude",
      "OpenAI",
      "LangGraph",
      "LangChain",
      "Model Context Protocol",
      "TypeScript",
      "Python",
      "Temporal",
    ],
    benefits: [
      {
        icon: "gauge",
        title: "Hours returned to your team",
        body: "Agents absorb judgement-heavy busywork so people focus on the work that needs them.",
      },
      {
        icon: "shield-check",
        title: "Autonomy you can trust",
        body: "Scoped permissions, approvals, and full logs keep every action within policy.",
      },
      {
        icon: "search-check",
        title: "Grounded, accountable",
        body: "Agents act on your real data and cite what they used — no black-box decisions.",
      },
    ],
    industries: ["fintech", "healthcare", "retail-ecommerce"],
    caseStudies: ["ai-agent-triages-support-at-scale", "operations-automation-for-logistics"],
    faqs: [
      {
        q: "How do you stop an agent doing something it shouldn't?",
        a: "Every agent runs inside explicit permission boundaries with approval steps for sensitive actions and full logging, so it can only act within the policy you define — and you can review everything it did.",
      },
      {
        q: "Can an agent work with our existing tools?",
        a: "Yes. We connect agents to your APIs, databases, and SaaS tools — often over the Model Context Protocol — so they act inside the systems you already run.",
      },
      {
        q: "How do you keep agent behaviour reliable over time?",
        a: "We add evaluation suites that measure the agent against real tasks, so we catch regressions before they reach production and can improve behaviour with confidence.",
      },
    ],
  },
  {
    slug: "llm-integration",
    category: "AI",
    label: "LLM Integration",
    title: "LLM Integration",
    icon: "plug-zap",
    summary: "Language models wired into your app",
    intro:
      "Securely wire large language models into your product and workflows — with robust prompt design, structured outputs, evaluation, and cost controls built in.",
    overview:
      "We integrate LLMs into real products the right way: prompt and context pipelines engineered for accuracy, structured outputs your code can trust, evaluation to catch regressions, and caching plus model routing so quality and spend stay predictable. Your data stays private — architected around enterprise endpoints, never used to train third-party models.",
    capabilities: [
      {
        icon: "plug-zap",
        title: "Robust integration",
        body: "Structured outputs, retries, and fallbacks so language models behave reliably in production code.",
      },
      {
        icon: "brain-circuit",
        title: "Prompt & context design",
        body: "Prompts and context pipelines engineered and versioned for accuracy and consistency.",
      },
      {
        icon: "gauge",
        title: "Cost & quality controls",
        body: "Caching, model routing, and evaluation to keep spend down and quality measurable.",
      },
    ],
    problems: [
      {
        icon: "eye",
        title: "Demos that never reach production",
        body: "A prompt that works in a notebook falls over on real traffic, edge cases, and cost.",
      },
      {
        icon: "search-check",
        title: "Outputs your code can't trust",
        body: "Free-text responses break downstream logic without structure, validation, and fallbacks.",
      },
      {
        icon: "gauge",
        title: "Runaway or unpredictable cost",
        body: "Naïve calls to the biggest model for everything make spend impossible to forecast.",
      },
    ],
    technologies: [
      "Anthropic Claude",
      "OpenAI",
      "Azure OpenAI",
      "Vercel AI SDK",
      "LangChain",
      "TypeScript",
      "Python",
      "Zod",
    ],
    benefits: [
      {
        icon: "shield-check",
        title: "Production-grade reliability",
        body: "Structured outputs, retries, and fallbacks so AI features behave like the rest of your code.",
      },
      {
        icon: "gauge",
        title: "Predictable spend",
        body: "Model routing and caching route each task to the right-sized model, not the most expensive one.",
      },
      {
        icon: "search-check",
        title: "Measurable quality",
        body: "Evaluation suites turn 'it seems better' into numbers you can track release over release.",
      },
    ],
    industries: ["fintech", "education", "retail-ecommerce"],
    caseStudies: ["ai-agent-triages-support-at-scale", "multi-tenant-saas-from-mvp-to-scale"],
    faqs: [
      {
        q: "Which model providers do you work with?",
        a: "We work across Anthropic Claude, OpenAI, and Azure OpenAI, and design for model routing so we can send each task to the best-fit model rather than locking you to one vendor.",
      },
      {
        q: "Will our data be used to train external models?",
        a: "No. We architect around enterprise endpoints and your own infrastructure so your data stays private and is never used to train third-party models.",
      },
      {
        q: "Can you add AI to our existing product?",
        a: "Yes — most LLM work wires into existing systems through your APIs and data, adding capability without a rewrite.",
      },
    ],
  },
  {
    slug: "rag",
    category: "AI",
    label: "RAG",
    title: "RAG — Retrieval-Augmented Generation",
    icon: "database",
    summary: "Answers grounded in your own data",
    intro:
      "Retrieval-augmented pipelines that ground every answer in your own content — documents, wikis, tickets, code — so responses stay accurate, current, and citable instead of hallucinated.",
    overview:
      "We build retrieval systems that answer from your knowledge, not the model's guesswork. Ingestion turns your sources into clean, searchable knowledge; tuned retrieval and ranking put the right context in front of the model; and every answer links back to its source, with access controls that respect who can see what.",
    capabilities: [
      {
        icon: "database",
        title: "Ingestion & indexing",
        body: "Pipelines that turn your documents and data into clean, searchable, up-to-date knowledge.",
      },
      {
        icon: "search-check",
        title: "Accurate retrieval",
        body: "Tuned search, ranking, and re-ranking so the model sees the right context for every question.",
      },
      {
        icon: "shield-check",
        title: "Citable & governed",
        body: "Answers link back to sources, with access controls that respect who can see what.",
      },
    ],
    problems: [
      {
        icon: "search",
        title: "Knowledge locked in silos",
        body: "Answers live scattered across docs, tickets, and wikis that nobody can search quickly.",
      },
      {
        icon: "eye",
        title: "AI that makes things up",
        body: "Ungrounded models invent confident, wrong answers — unacceptable when accuracy matters.",
      },
      {
        icon: "shield-check",
        title: "Answers that ignore permissions",
        body: "A knowledge assistant that surfaces content a user shouldn't see is a security incident.",
      },
    ],
    technologies: [
      "Pinecone",
      "pgvector",
      "Weaviate",
      "LlamaIndex",
      "LangChain",
      "Anthropic Claude",
      "OpenAI Embeddings",
      "PostgreSQL",
    ],
    benefits: [
      {
        icon: "search-check",
        title: "Answers you can trust",
        body: "Every response is grounded in your data and citable — no hallucinated guesses.",
      },
      {
        icon: "refresh-cw",
        title: "Always current",
        body: "Ingestion keeps the knowledge base fresh so answers reflect your latest content.",
      },
      {
        icon: "shield-check",
        title: "Access-aware",
        body: "Retrieval respects your permissions, so users only ever see what they're allowed to.",
      },
    ],
    industries: ["healthcare", "fintech", "education"],
    caseStudies: ["ai-agent-triages-support-at-scale", "clinical-portal-for-a-healthcare-provider"],
    faqs: [
      {
        q: "How is RAG different from just asking a chatbot?",
        a: "A plain chatbot answers from what the model already 'knows'. RAG retrieves the relevant passages from your own content first, so answers are grounded in your data, current, and citable — not invented.",
      },
      {
        q: "Which vector database do you use?",
        a: "We choose per project — Pinecone or Weaviate for managed scale, or pgvector when you'd rather keep everything in PostgreSQL. The retrieval quality matters more than the store.",
      },
      {
        q: "Can retrieval respect our access controls?",
        a: "Yes. We enforce your permissions at retrieval time so the model only ever sees content the current user is allowed to access.",
      },
    ],
  },
  {
    slug: "mcp-servers",
    category: "AI",
    label: "MCP Servers",
    title: "MCP Servers",
    icon: "server",
    summary: "Connect AI to your tools & data",
    intro:
      "Custom Model Context Protocol servers that give AI assistants secure, governed access to your tools and data — so any MCP-capable client can act on your systems safely.",
    overview:
      "We build MCP servers that expose your tools and data to AI clients through a clean, standards-based interface. Well-designed tools and resources, authentication and permission scoping, and broad compatibility mean any MCP-capable assistant — Claude, agents, IDEs — can work with your systems under controlled, auditable access.",
    capabilities: [
      {
        icon: "server",
        title: "Custom MCP servers",
        body: "Well-designed tools and resources that expose your systems to AI clients over MCP.",
      },
      {
        icon: "shield-check",
        title: "Secure & governed",
        body: "Authentication, scoping, and permission boundaries so access stays controlled and auditable.",
      },
      {
        icon: "plug-zap",
        title: "Broad compatibility",
        body: "Standards-based servers that work with any MCP-capable assistant or agent.",
      },
    ],
    problems: [
      {
        icon: "arrow-left-right",
        title: "Every AI tool a bespoke integration",
        body: "Wiring each assistant to your systems separately is slow, brittle, and never reused.",
      },
      {
        icon: "shield-check",
        title: "Ungoverned access to internal systems",
        body: "Letting AI touch your data without scoping and auditing is a risk you can't sign off.",
      },
      {
        icon: "plug-zap",
        title: "Locked to one vendor's ecosystem",
        body: "Proprietary plugins tie your AI access to a single client instead of an open standard.",
      },
    ],
    technologies: [
      "Model Context Protocol",
      "TypeScript",
      "Python",
      "Node.js",
      "OAuth 2.0",
      "JSON-RPC",
      "Docker",
      "Anthropic Claude",
    ],
    benefits: [
      {
        icon: "plug-zap",
        title: "Write once, use everywhere",
        body: "One MCP server serves every MCP-capable client, instead of a bespoke integration each time.",
      },
      {
        icon: "shield-check",
        title: "Access on your terms",
        body: "Scoped authentication and audit trails mean AI touches only what you allow, on record.",
      },
      {
        icon: "refresh-cw",
        title: "Future-proof & open",
        body: "A standards-based interface keeps you portable as the AI-client landscape evolves.",
      },
    ],
    industries: ["fintech", "manufacturing", "retail-ecommerce"],
    caseStudies: ["operations-automation-for-logistics", "payments-platform-rebuilt-for-scale"],
    faqs: [
      {
        q: "What is the Model Context Protocol?",
        a: "MCP is an open standard for connecting AI assistants to external tools and data through a consistent interface. Build one MCP server and any MCP-capable client can use it — no bespoke integration per assistant.",
      },
      {
        q: "How do you keep an MCP server secure?",
        a: "We put authentication, permission scoping, and audit logging around every tool and resource, so an assistant can only reach what you've explicitly granted — and every access is recorded.",
      },
      {
        q: "Which clients can use the servers you build?",
        a: "Any MCP-capable client — Claude, MCP-aware agents and IDEs, and your own applications — because the servers follow the open protocol rather than a proprietary plugin format.",
      },
    ],
  },
  {
    slug: "automation",
    category: "AI",
    label: "Automation",
    title: "AI Automation",
    icon: "workflow",
    summary: "AI judgement inside reliable pipelines",
    intro:
      "Combine dependable automation with AI judgement to handle the grey-area work rules alone can't — classifying, extracting, and deciding at scale, with human review where it matters.",
    overview:
      "We blend reliable pipelines with AI judgement so processes that used to need a person run automatically — classification, extraction, routing, and decisions — with confidence thresholds and review queues so people handle only the edge cases that need them. Throughput rises without losing control or accuracy.",
    capabilities: [
      {
        icon: "cpu",
        title: "AI-driven decisions",
        body: "Classification, extraction, and routing that used to need a person, handled automatically.",
      },
      {
        icon: "workflow",
        title: "Reliable pipelines",
        body: "Automation with retries, monitoring, and alerts so processes run correctly around the clock.",
      },
      {
        icon: "shield-check",
        title: "Human-in-the-loop",
        body: "Confidence thresholds and review queues so people handle the edge cases that need them.",
      },
    ],
    problems: [
      {
        icon: "clock",
        title: "Repetitive, judgement-heavy work",
        body: "Sorting, tagging, and routing consume hours of skilled time on largely predictable decisions.",
      },
      {
        icon: "arrow-left-right",
        title: "Rules-only automation that breaks",
        body: "Rigid rules can't handle messy, real-world inputs — so the work falls back to humans.",
      },
      {
        icon: "eye",
        title: "No visibility into what ran",
        body: "Automations that fail silently erode trust and quietly let work slip through the cracks.",
      },
    ],
    technologies: [
      "Anthropic Claude",
      "OpenAI",
      "Temporal",
      "n8n",
      "Python",
      "TypeScript",
      "AWS Lambda",
      "PostgreSQL",
    ],
    benefits: [
      {
        icon: "gauge",
        title: "Higher throughput",
        body: "Work flows through automatically, so volume no longer means more headcount.",
      },
      {
        icon: "shield-check",
        title: "Control where it counts",
        body: "Confidence thresholds route only the uncertain cases to people, keeping accuracy high.",
      },
      {
        icon: "eye",
        title: "Full visibility",
        body: "Monitoring and audit trails show exactly what ran, what decided, and what needs review.",
      },
    ],
    industries: ["fintech", "manufacturing", "healthcare"],
    caseStudies: ["operations-automation-for-logistics", "payments-platform-rebuilt-for-scale"],
    faqs: [
      {
        q: "How is this different from traditional automation?",
        a: "Rules-based automation only handles cases you can fully specify. AI automation adds judgement — classifying, extracting, and deciding on messy real-world inputs — with confidence thresholds so uncertain cases still go to a human.",
      },
      {
        q: "How do you keep AI decisions accurate?",
        a: "We set confidence thresholds and review queues so the system only acts autonomously when it's sure, and routes everything else to people. Evaluation and monitoring keep accuracy measurable over time.",
      },
      {
        q: "Can this run against our existing systems?",
        a: "Yes. We integrate with the tools and data you already run, so automations move work through your current stack rather than replacing it.",
      },
    ],
  },
  {
    slug: "enterprise-ai",
    category: "AI",
    label: "Enterprise AI",
    title: "Enterprise AI",
    icon: "building-2",
    summary: "AI at scale, securely governed",
    intro:
      "Roll AI out across the organisation the way enterprises need it — with security, compliance, governance, and observability designed in, so adoption scales without new risk.",
    overview:
      "We help larger organisations move AI from scattered pilots to a governed platform: private, compliant model access; a shared foundation for agents, RAG, and automation; role-based controls and audit trails; and the observability and cost governance that make AI safe to scale. Real capability across teams, under the controls your risk and compliance functions require.",
    capabilities: [
      {
        icon: "shield-check",
        title: "Security & compliance",
        body: "Private model access, data residency, and audit trails aligned to your compliance needs.",
      },
      {
        icon: "layers",
        title: "A shared AI platform",
        body: "One governed foundation for agents, RAG, and automation that every team can build on.",
      },
      {
        icon: "gauge",
        title: "Governance & observability",
        body: "Role-based controls, usage monitoring, and cost governance so scale stays under control.",
      },
    ],
    problems: [
      {
        icon: "eye",
        title: "Pilots that never scale",
        body: "Promising experiments stall because there's no secure, governed platform to run them on.",
      },
      {
        icon: "shield-check",
        title: "Security & compliance blockers",
        body: "Data residency, access control, and auditability concerns freeze rollout across the org.",
      },
      {
        icon: "gauge",
        title: "Cost and usage out of control",
        body: "Ungoverned AI spend and shadow usage make adoption impossible to budget or approve.",
      },
    ],
    technologies: [
      "Azure OpenAI",
      "Anthropic Claude",
      "AWS Bedrock",
      "Kubernetes",
      "Terraform",
      "PostgreSQL",
      "OpenTelemetry",
      "Okta",
    ],
    benefits: [
      {
        icon: "shield-check",
        title: "Compliance-ready by design",
        body: "Private endpoints, access control, and audit trails your risk and compliance teams can sign off.",
      },
      {
        icon: "layers",
        title: "One foundation, many teams",
        body: "A shared platform means each new AI use case builds on governed rails, not from scratch.",
      },
      {
        icon: "gauge",
        title: "Scale with control",
        body: "Usage, cost, and quality stay observable and governed as adoption grows across the business.",
      },
    ],
    industries: ["fintech", "healthcare", "manufacturing"],
    caseStudies: ["payments-platform-rebuilt-for-scale", "multi-tenant-saas-from-mvp-to-scale"],
    faqs: [
      {
        q: "How do you handle data security and compliance?",
        a: "We use private, enterprise model endpoints with data residency and access controls, add audit logging throughout, and align the architecture to your compliance requirements so your data never leaves your control.",
      },
      {
        q: "How do you control AI cost across the organisation?",
        a: "We put usage monitoring, model routing, and per-team budgets in place so spend is observable and governed, and we route each task to the right-sized model instead of the most expensive one.",
      },
      {
        q: "Can you build on top of our existing cloud?",
        a: "Yes — we deploy on your AWS, Azure, or GCP estate, using services like Bedrock or Azure OpenAI, so AI runs inside the environment you already secure and govern.",
      },
    ],
  },
  {
    slug: "ai-consulting",
    category: "AI",
    label: "AI Consulting",
    title: "AI Consulting",
    icon: "brain-circuit",
    summary: "Strategy, roadmap & readiness",
    intro:
      "Practical AI strategy that finds the highest-value use cases, assesses your data and readiness, and turns them into a prioritised, deliverable roadmap — not a slide deck.",
    overview:
      "We help you decide where AI genuinely pays off and how to get there. Working with your teams, we identify and prioritise use cases by value and feasibility, assess your data and technical readiness, and produce a roadmap with clear first steps, guardrails, and success measures — then we can build it with you. Vendor-neutral advice grounded in shipping real systems.",
    capabilities: [
      {
        icon: "search",
        title: "Opportunity assessment",
        body: "We map where AI creates real value in your business and prioritise by impact and feasibility.",
      },
      {
        icon: "database",
        title: "Data & readiness review",
        body: "An honest look at your data, systems, and skills — what's ready and what needs work first.",
      },
      {
        icon: "workflow",
        title: "Roadmap & guardrails",
        body: "A prioritised, deliverable plan with first steps, success measures, and safety guardrails.",
      },
    ],
    problems: [
      {
        icon: "eye",
        title: "Pressure to 'do something with AI'",
        body: "Board-level urgency without a clear, grounded plan leads to scattered, low-value experiments.",
      },
      {
        icon: "search",
        title: "Too many possibilities, no priorities",
        body: "Every function wants AI — without a value-and-feasibility lens, effort spreads too thin.",
      },
      {
        icon: "shield-check",
        title: "Unclear risk and readiness",
        body: "Data gaps, security questions, and skills gaps stall decisions and quietly kill momentum.",
      },
    ],
    technologies: [
      "Anthropic Claude",
      "OpenAI",
      "Azure OpenAI",
      "AWS Bedrock",
      "LangChain",
      "Python",
      "TypeScript",
      "PostgreSQL",
    ],
    benefits: [
      {
        icon: "search-check",
        title: "Clarity on where to start",
        body: "A prioritised shortlist of use cases ranked by value and feasibility — not a wish list.",
      },
      {
        icon: "workflow",
        title: "A plan you can deliver",
        body: "Concrete first steps, success measures, and guardrails, ready to execute — with us or your team.",
      },
      {
        icon: "handshake",
        title: "Vendor-neutral advice",
        body: "Guidance grounded in shipping real systems, not tied to any single model or platform.",
      },
    ],
    industries: ["fintech", "healthcare", "retail-ecommerce"],
    caseStudies: ["ai-agent-triages-support-at-scale", "operations-automation-for-logistics"],
    faqs: [
      {
        q: "What do we get out of a consulting engagement?",
        a: "A prioritised set of AI use cases ranked by value and feasibility, an honest read on your data and readiness, and a deliverable roadmap with first steps, guardrails, and success measures.",
      },
      {
        q: "Do you only advise, or can you build it too?",
        a: "Both. We produce the strategy and roadmap, and because we ship AI systems ourselves, we can move straight into building the prioritised use cases with you.",
      },
      {
        q: "Are you tied to a particular AI vendor?",
        a: "No. Our advice is vendor-neutral — we recommend the models and platforms that fit your problem, security needs, and budget, not a partner we're obliged to push.",
      },
    ],
  },
];

/** Fast slug → record lookup for the detail route. */
const bySlug = new Map(aiCapabilities.map((c) => [c.slug, c]));

/** All AI capability slugs — powers `generateStaticParams` and the sitemap. */
export const aiSlugs = aiCapabilities.map((c) => c.slug);

/** Look up a single AI capability by slug (undefined → the route calls notFound). */
export function getAiCapability(slug: string): AiCapability | undefined {
  return bySlug.get(slug);
}

/** Other AI capabilities — used by the "related" grid on each detail page. */
export function relatedAiCapabilities(slug: string, limit = 3): AiCapability[] {
  return aiCapabilities.filter((c) => c.slug !== slug).slice(0, limit);
}

/**
 * Resolve a capability's `industries` slugs into linkable cards for the detail
 * page's "Industries we serve" grid. Unknown slugs are skipped so a typo can
 * never produce a dead link.
 */
export function aiIndustries(capability: AiCapability) {
  return (capability.industries ?? [])
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
 * Resolve a capability's featured `caseStudies` slugs into full study records
 * for the detail page's proof section. Unknown slugs are skipped.
 */
export function aiCaseStudies(capability: AiCapability): CaseStudy[] {
  return (capability.caseStudies ?? [])
    .map((slug) => caseStudies.find((c) => c.slug === slug))
    .filter((c): c is CaseStudy => Boolean(c));
}

/**
 * The AI delivery process shown on every AI capability detail page — a shared,
 * AI-flavoured five-stage model so the "how we work" story stays consistent.
 */
export const aiProcess = [
  {
    icon: "1",
    title: "Discover & scope",
    body: "We identify the highest-value use case, define success measures, and agree the guardrails up front.",
  },
  {
    icon: "2",
    title: "Ground in your data",
    body: "We connect the data and tools the system needs, and shape the retrieval and context it will rely on.",
  },
  {
    icon: "3",
    title: "Build & evaluate",
    body: "We build in increments with evaluation suites, so accuracy is measured against real examples, not vibes.",
  },
  {
    icon: "4",
    title: "Harden & secure",
    body: "We add guardrails, permissions, monitoring, and cost controls so it's safe to run in production.",
  },
  {
    icon: "5",
    title: "Ship & improve",
    body: "We deploy, observe real usage, and keep tuning quality, safety, and cost alongside your team.",
  },
] as const;

/**
 * The eight-stage capability chain shown on the `/ai` hub — the AI funnel from
 * the section's framing. "Artificial Intelligence" is the hub itself (`/ai`); the rest
 * link to their deep sub-pages.
 */
export const aiChain: { label: string; href: string }[] = [
  { label: "Artificial Intelligence", href: "/ai" },
  ...aiCapabilities.map((c) => ({ label: c.label, href: `/ai/${c.slug}` })),
];

/**
 * The AI mega-menu panel — a flat list of the capabilities, each resolving to
 * its real `/ai/[slug]` detail page. Mirrors the flat Services/Industries
 * panels so the nav stays consistent with one source of truth.
 */
export const aiMenu: MegaItem = {
  label: "Artificial Intelligence",
  href: "/ai",
  flat: true,
  links: aiCapabilities.map((c) => ({
    label: c.label,
    href: `/ai/${c.slug}`,
    icon: c.icon,
    desc: c.summary,
  })),
};

/**
 * Cards shown on the `/ai` hub grid — every capability, in funnel order, each
 * linking to its detail page.
 */
export const aiOfferings = aiCapabilities.map((c) => ({
  icon: c.icon,
  title: c.title,
  body: c.summary,
  href: `/ai/${c.slug}`,
}));

/** Re-exported for detail-page CTAs that link to the contact hub. */
export { CONTACT_HREF };
