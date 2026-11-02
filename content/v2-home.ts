/**
 * Copy and presentation data for the v2 homepage preview (`/v2`, the
 * approved "Orbit+" concept). Facts — services, case-study metrics, the
 * delivery process, contact details — are *referenced* from the existing
 * collections by slug, never restated, so v1 and v2 cannot drift apart.
 * Only what is unique to the v2 composition lives here.
 */

/** Hero: headline, the rotating "We build …" phrases, lead and trust points. */
export const v2Hero = {
  eyebrow: "AI-native software studio",
  status: "Now booking",
  titleLines: ["Software that thinks.", "Engineering that scales."] as const,
  buildPrefix: "We build",
  buildWords: [
    "AI agents.",
    "SaaS platforms.",
    "web experiences.",
    "mobile apps.",
    "cloud systems.",
  ],
  lead: "Rapid Tech Plus is a senior engineering studio for AI agents, SaaS platforms and custom systems — designed, built and run so your team can own them from day one.",
  primaryCta: "Get a free consultation",
  secondaryCta: { label: "See our work", href: "#work" },
  trust: ["Senior engineers only", "Weekly demos", "Code you own"],
};

/** Capability tags orbiting the hero globe. `icon` keys resolve via `components/icon.tsx`. */
export const v2OrbitChips = [
  { icon: "brain-circuit", title: "AI agents", meta: "grounded · evaluated" },
  {
    icon: "layout-dashboard",
    title: "SaaS platforms",
    meta: "multi-tenant · billing",
  },
  { icon: "cloud", title: "Cloud & DevOps", meta: "IaC · zero-downtime" },
  { icon: "smartphone", title: "Mobile apps", meta: "iOS · Android" },
] as const;

/**
 * Hero stat strip: one metric from each representative case study, by slug
 * and index into that study's `metrics`. The numbers count up on scroll.
 */
export const v2Outcomes = [
  { caseSlug: "payments-platform-rebuilt-for-scale", metric: 0 },
  { caseSlug: "ai-agent-triages-support-at-scale", metric: 0 },
  { caseSlug: "headless-storefront-for-a-growing-retailer", metric: 0 },
  { caseSlug: "operations-automation-for-logistics", metric: 1 },
] as const;

/** Services section: the flagship card, its companion, then the grid. */
export const v2Services = {
  eyebrow: "What we do",
  title: "End-to-end engineering,",
  highlight: "from first idea to global scale.",
  flagship: "ai-development",
  companion: "custom-software-development",
  grid: [
    "saas-development",
    "web-development",
    "mobile-development",
    "ui-ux-design",
    "cloud-devops",
    "qa-testing",
  ],
};

/** "How we build" — a reference architecture with data flowing between layers. */
export const v2Architecture = {
  eyebrow: "How we build",
  title: "Systems designed to be",
  highlight: "observed, scaled and owned.",
  lead: "A typical platform we deliver — every layer typed, tested, monitored and documented in your own accounts.",
  layers: [
    { code: "L1 · Client", title: "Web & mobile", tech: "Next.js · Flutter" },
    { code: "L2 · Edge", title: "Edge & CDN", tech: "Cloudflare · WAF" },
    { code: "L3 · API", title: "API gateway", tech: "GraphQL · REST" },
    { code: "L4 · Core", title: "Services & AI", tech: "Node · Python · LLMs" },
    { code: "L5 · Data", title: "Data & search", tech: "Postgres · pgvector" },
  ],
  guarantees: [
    { code: "OBS", text: "Logs, metrics and traces on every layer" },
    { code: "SEC", text: "Least-privilege access, secrets managed" },
    { code: "CI/CD", text: "Tested, reviewed, deployable on every merge" },
  ],
};

/**
 * Work showcase: case studies by slug, each with a decorative bar series for
 * its illustration (relative heights in %, last three drawn in the accent).
 */
export const v2Work = {
  eyebrow: "Selected work",
  title: "Real systems.",
  highlight: "Measurable results.",
  items: [
    {
      slug: "payments-platform-rebuilt-for-scale",
      bars: [28, 40, 36, 52, 48, 66, 78, 88, 96],
    },
    {
      slug: "ai-agent-triages-support-at-scale",
      bars: [90, 84, 76, 70, 62, 58, 54, 50, 48],
    },
    {
      slug: "headless-storefront-for-a-growing-retailer",
      bars: [40, 46, 44, 52, 58, 64, 70, 76, 84],
    },
    {
      slug: "operations-automation-for-logistics",
      bars: [80, 72, 66, 54, 46, 38, 30, 26, 22],
    },
  ],
};

export type RadarRing = "adopt" | "trial" | "assess";

/**
 * Tech radar. `angle` is degrees clockwise from 12 o'clock; it also times
 * each blip's flash to the moment the sweep passes it.
 */
export const v2Radar = {
  eyebrow: "Tech radar",
  title: "Proven where it matters.",
  highlight: "New where it earns it.",
  lead: "An opinionated radar of the tools we trust in production, the ones we are trialling, and the ones we are watching.",
  rings: [
    { id: "adopt", label: "Adopt", note: "our production defaults" },
    { id: "trial", label: "Trial", note: "shipping on selected projects" },
    { id: "assess", label: "Assess", note: "evaluating for clients" },
  ] satisfies { id: RadarRing; label: string; note: string }[],
  entries: [
    { label: "Next.js", ring: "adopt", angle: 20 },
    { label: "TypeScript", ring: "adopt", angle: 110 },
    { label: "PostgreSQL", ring: "adopt", angle: 200 },
    { label: "AWS", ring: "adopt", angle: 290 },
    { label: "Python", ring: "trial", angle: 60 },
    { label: "Kubernetes", ring: "trial", angle: 150 },
    { label: "LangChain", ring: "trial", angle: 235 },
    { label: "Flutter", ring: "trial", angle: 320 },
    { label: "pgvector", ring: "assess", angle: 35 },
    { label: "MCP", ring: "assess", angle: 125 },
    { label: "Edge AI", ring: "assess", angle: 215 },
    { label: "WebGPU", ring: "assess", angle: 300 },
  ] satisfies { label: string; ring: RadarRing; angle: number }[],
};

/** Process heading; the steps themselves come from `serviceProcess`. */
export const v2Process = {
  eyebrow: "How we work",
  title: "A process you can",
  highlight: "watch, every week.",
};

/** Closing call to action. */
export const v2Cta = {
  title: "Ready to accelerate your",
  highlight: "software journey?",
  body: "Tell us what you are building. We will tell you how we would build it.",
  primary: "Get a free consultation",
};

/** In-page navigation for the v2 header. */
export const v2Nav = [
  { label: "Services", href: "#services" },
  { label: "Architecture", href: "#architecture" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Process", href: "#process" },
];
