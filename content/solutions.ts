/**
 * Solutions collection. Slug-keyed records power the Solutions mega-menu panel
 * and the `/solutions` hub grid from one source. Each record carries a short
 * `summary` (used in the menu) and a longer `body` (used on the hub card), so
 * there is no duplicated copy. `/solutions/[slug]` detail pages arrive in
 * Phase E — the links resolve to the hub until then.
 */

import type { MegaColumn, DetailRecord } from "@/content/types";

export type SolutionRecord = DetailRecord & {
  /** Mega-menu category grouping. */
  category: string;
  /** Longer description used on the hub card. */
  body: string;
};

export const solutionRecords: SolutionRecord[] = [
  {
    slug: "ai-agents",
    category: "AI & Automation",
    label: "AI Agents",
    title: "AI Agents",
    icon: "bot",
    summary: "Autonomous assistants in your stack",
    body: "Autonomous assistants wired into your data and tools — answering questions, triaging work, and taking action under your rules.",
  },
  {
    slug: "workflow-automation",
    category: "AI & Automation",
    label: "Workflow Automation",
    title: "Workflow Automation",
    icon: "workflow",
    summary: "Remove repetitive manual steps",
    body: "Replace repetitive, error-prone manual steps with reliable automated pipelines that run around the clock.",
  },
  {
    slug: "business-automation",
    category: "AI & Automation",
    label: "Business Automation",
    title: "Business Automation",
    icon: "settings",
    summary: "Connect the tools your team relies on",
    body: "Connect the tools your team already uses so information and tasks flow between them without copy-paste.",
  },
  {
    slug: "enterprise-software",
    category: "Platform",
    label: "Enterprise Software",
    title: "Enterprise Software",
    icon: "building-2",
    summary: "Reliable systems built to scale",
    body: "Reliable, well-architected enterprise systems designed to scale with your organisation and its processes.",
  },
  {
    slug: "cloud-solutions",
    category: "Platform",
    label: "Cloud Solutions",
    title: "Cloud Solutions",
    icon: "cloud",
    summary: "Scalable, secure cloud delivery",
    body: "Scalable, secure cloud infrastructure and delivery — from architecture to CI/CD and observability.",
  },
  {
    slug: "data-integrations",
    category: "Platform",
    label: "Data & Integrations",
    title: "Data & Integrations",
    icon: "arrow-left-right",
    summary: "Unified data across your services",
    body: "Unify data across your services with well-designed APIs, sync layers, and a single source of truth.",
  },
  {
    slug: "managed-delivery",
    category: "Platform",
    label: "Managed Delivery",
    title: "Managed Delivery",
    icon: "rocket",
    summary: "An accountable team that owns outcomes",
    body: "We scope, build, ship, and keep improving — an accountable team that owns outcomes, not just tickets.",
  },
];

/** Ordered mega-menu categories for the Solutions panel. */
export const solutionCategories = ["AI & Automation", "Platform"] as const;

/**
 * Solutions mega-menu columns, derived from the collection. Links resolve to
 * the hub until per-solution detail pages ship (Phase E).
 */
export const solutionMenuColumns: MegaColumn[] = solutionCategories.map(
  (category) => ({
    title: category,
    links: solutionRecords
      .filter((s) => s.category === category)
      .map((s) => ({
        label: s.label,
        href: "/solutions",
        icon: s.icon,
        desc: s.summary,
      })),
  }),
);

/**
 * Cards shown on the `/solutions` hub, in the original order. Managed Delivery
 * replaces Enterprise Software here, matching the previous hub content.
 */
export const solutions = [
  "ai-agents",
  "workflow-automation",
  "business-automation",
  "cloud-solutions",
  "data-integrations",
  "managed-delivery",
]
  .map((slug) => solutionRecords.find((s) => s.slug === slug))
  .filter((s): s is SolutionRecord => Boolean(s))
  .map((s) => ({ icon: s.icon, title: s.title, body: s.body }));
