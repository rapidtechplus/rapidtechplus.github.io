/**
 * Hire Expert collection. Slug-keyed role records grouped by team. The Hire
 * Expert mega-menu panel is derived from this data. Dedicated `/hire/[slug]`
 * role pages arrive in Phase C — until then the links resolve to the contact
 * hub, but the copy already lives here so nothing is duplicated when they land.
 */

import { CONTACT_HREF } from "@/config/site";
import type { MegaColumn } from "@/content/types";

export type HireRole = {
  slug: string;
  category: string;
  label: string;
  icon: string;
  summary: string;
};

export const hireCategories = [
  "AI Engineers",
  "Frontend Developers",
  "Backend Developers",
  "Mobile Developers",
  "DevOps Engineers",
  "UI/UX Designers",
  "QA Engineers",
  "Dedicated Teams",
] as const;

export const hireRoles: HireRole[] = [
  // AI Engineers
  { slug: "ai-agent-engineers", category: "AI Engineers", label: "AI Agent Engineers", icon: "bot", summary: "Build autonomous, tool-using agents" },
  { slug: "llm-rag-engineers", category: "AI Engineers", label: "LLM & RAG Engineers", icon: "database", summary: "Grounded, production-grade LLM apps" },
  { slug: "ml-engineers", category: "AI Engineers", label: "ML Engineers", icon: "brain-circuit", summary: "Predictive models and pipelines" },
  { slug: "mcp-integration-engineers", category: "AI Engineers", label: "MCP Integration Engineers", icon: "plug-zap", summary: "Wire models into your systems" },
  // Frontend Developers
  { slug: "react-developers", category: "Frontend Developers", label: "React Developers", icon: "atom", summary: "High-performing interfaces" },
  { slug: "nextjs-developers", category: "Frontend Developers", label: "Next.js Developers", icon: "triangle", summary: "Fast, SEO-ready web apps" },
  { slug: "angular-developers", category: "Frontend Developers", label: "Angular Developers", icon: "shield", summary: "Enterprise-grade frontends" },
  { slug: "vue-developers", category: "Frontend Developers", label: "Vue.js Developers", icon: "diamond", summary: "Reactive, lightweight UIs" },
  // Backend Developers
  { slug: "nodejs-developers", category: "Backend Developers", label: "Node.js Developers", icon: "hexagon", summary: "Scalable APIs and services" },
  { slug: "python-developers", category: "Backend Developers", label: "Python Developers", icon: "code-xml", summary: "Data, AI, and backend systems" },
  { slug: "dotnet-developers", category: "Backend Developers", label: ".NET Developers", icon: "circle-dot", summary: "Robust enterprise systems" },
  { slug: "laravel-developers", category: "Backend Developers", label: "Laravel Developers", icon: "layers", summary: "Rapid PHP application builds" },
  // Mobile Developers
  { slug: "react-native-developers", category: "Mobile Developers", label: "React Native Developers", icon: "smartphone", summary: "Cross-platform apps" },
  { slug: "flutter-developers", category: "Mobile Developers", label: "Flutter Developers", icon: "feather", summary: "One codebase, every platform" },
  { slug: "ios-developers", category: "Mobile Developers", label: "iOS Developers", icon: "apple", summary: "Native Swift applications" },
  { slug: "android-developers", category: "Mobile Developers", label: "Android Developers", icon: "tablet-smartphone", summary: "Native Kotlin applications" },
  // DevOps Engineers
  { slug: "cloud-engineers", category: "DevOps Engineers", label: "Cloud Engineers", icon: "cloud", summary: "AWS, Azure, and GCP delivery" },
  { slug: "kubernetes-engineers", category: "DevOps Engineers", label: "Kubernetes Engineers", icon: "ship-wheel", summary: "Orchestration at scale" },
  { slug: "cicd-engineers", category: "DevOps Engineers", label: "CI/CD Engineers", icon: "git-branch", summary: "Automated build & release" },
  { slug: "sre", category: "DevOps Engineers", label: "Site Reliability (SRE)", icon: "activity", summary: "Observability and uptime" },
  // UI/UX Designers
  { slug: "product-designers", category: "UI/UX Designers", label: "Product Designers", icon: "pen-tool", summary: "End-to-end product design" },
  { slug: "ux-researchers", category: "UI/UX Designers", label: "UX Researchers", icon: "search", summary: "Insight-driven decisions" },
  { slug: "design-systems", category: "UI/UX Designers", label: "Design Systems", icon: "blocks", summary: "Scalable, consistent UI" },
  // QA Engineers
  { slug: "automation-qa", category: "QA Engineers", label: "Automation QA", icon: "list-checks", summary: "Fast, reliable test suites" },
  { slug: "manual-qa", category: "QA Engineers", label: "Manual QA", icon: "search-check", summary: "Thorough exploratory testing" },
  { slug: "performance-qa", category: "QA Engineers", label: "Performance QA", icon: "gauge", summary: "Load and stress testing" },
  // Dedicated Teams
  { slug: "full-product-team", category: "Dedicated Teams", label: "Full Product Team", icon: "users", summary: "Design, build, and ship end-to-end" },
  { slug: "staff-augmentation", category: "Dedicated Teams", label: "Staff Augmentation", icon: "user-plus", summary: "Extend your in-house team" },
  { slug: "managed-delivery", category: "Dedicated Teams", label: "Managed Delivery", icon: "rocket", summary: "We own the outcome" },
];

/**
 * Hire Expert mega-menu columns, derived from the role collection. Links point
 * at the contact hub until the `/hire` pages ship (Phase C).
 */
export const hireMenuColumns: MegaColumn[] = hireCategories.map((category) => ({
  title: category,
  links: hireRoles
    .filter((r) => r.category === category)
    .map((r) => ({
      label: r.label,
      href: CONTACT_HREF,
      icon: r.icon,
      desc: r.summary,
    })),
}));
