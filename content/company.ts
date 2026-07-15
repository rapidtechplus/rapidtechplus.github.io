/**
 * Company mega-menu content. Unlike the other menus this one is not backed by a
 * single collection — it is the studio's own story — so it lives here rather
 * than in `site.ts`, keeping that module to cross-page content.
 *
 * The stats below are deliberately *derived* from the content collections
 * instead of asserted. Every number therefore counts pages that actually exist
 * and stays correct as the collections grow. Claims we cannot back with a page
 * (years trading, projects delivered, headcount) are intentionally absent —
 * see the note on `CompanyPanel["stats"]`.
 */

import { CONTACT_HREF } from "@/config/site";
import type { CompanyPanel, MegaItem } from "@/content/types";
import { aiSlugs } from "@/content/ai";
import { hireSlugs } from "@/content/hire";
import { industrySlugs } from "@/content/industries";
import { serviceSlugs } from "@/content/services";
import { techSlugs } from "@/content/technologies";

/** What visitors most often want to know about us, in that order. */
const companyLinks: MegaItem["links"] = [
  {
    label: "About Rapid Tech Plus",
    href: "/about",
    icon: "building-2",
  },
  {
    label: "Why Choose Us",
    href: "/why-us",
    icon: "sparkles",
  },
  {
    label: "Our Engineering Process",
    href: "/our-process",
    icon: "workflow",
  },
  {
    label: "Engineering Practices",
    href: "/engineering",
    icon: "code-xml",
  },
  {
    label: "Engineering Culture",
    href: "/culture",
    icon: "heart",
  },
  {
    label: "Careers",
    href: "/careers",
    icon: "briefcase",
  },
  {
    label: "Contact",
    href: CONTACT_HREF,
    icon: "mail",
  },
];

const companyPanel: CompanyPanel = {
  navLabel: "Company",
  highlightsLabel: "What we build",
  highlights: [
    {
      icon: "brain-circuit",
      title: "AI-First Engineering",
      body: "Agents, LLMs, and retrieval built into products as core architecture.",
    },
    {
      icon: "rocket",
      title: "Product Engineering",
      body: "From first prototype to a platform that carries real production load.",
    },
    {
      icon: "layers",
      title: "Modern Stack",
      body: "TypeScript, React, Next.js, and Node — chosen to stay maintainable.",
    },
    {
      icon: "cloud",
      title: "Cloud Native",
      body: "Containers, CI/CD, and infrastructure as code from the first commit.",
    },
    {
      icon: "shield-check",
      title: "Enterprise Security",
      body: "Least privilege, audited dependencies, and reviewable change history.",
    },
    {
      icon: "globe",
      title: "Global Delivery",
      body: "Remote-first delivery across time zones, with work you can follow daily.",
    },
    {
      icon: "workflow",
      title: "Automation",
      body: "Manual workflows replaced by systems that quietly run themselves.",
    },
    {
      icon: "handshake",
      title: "Long-Term Partnership",
      body: "We stay past launch — most of our work is with returning clients.",
    },
  ],
  statsLabel: "By the numbers",
  stats: [
    { value: `${serviceSlugs.length}`, label: "Core services" },
    { value: `${aiSlugs.length}`, label: "AI capabilities" },
    { value: `${industrySlugs.length}`, label: "Industries served" },
    { value: `${hireSlugs.length}`, label: "Specialist roles" },
    { value: `${techSlugs.length}`, label: "Core technologies" },
    { value: "Global", label: "Delivery reach" },
  ],
  feature: {
    eyebrow: "Our story",
    icon: "brain-circuit",
    title: "Building Modern Software with AI",
    body: "Rapid Tech Plus helps startups and enterprises build scalable AI-powered products, enterprise platforms, and cloud-native applications — engineered to last.",
    actions: [
      { label: "Learn About Us", href: "/about" },
      { label: "View Our Process", href: "/our-process" },
      { label: "Schedule Consultation", href: CONTACT_HREF },
    ],
  },
  banner: {
    title: "Ready to accelerate your software journey?",
    body: "Tell us what you are building. We will tell you how we would build it.",
    cta: { label: "Get a free consultation", href: CONTACT_HREF },
  },
};

/** Company mega-menu — a three-column trust panel (see `MegaItem.company`). */
export const companyMenu: MegaItem = {
  label: "Company",
  href: "/about",
  overview: "Explore the company",
  links: companyLinks,
  company: companyPanel,
};
