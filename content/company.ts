/**
 * Company mega-menu content. Unlike the other menus this one is not backed by a
 * single collection — it is the studio's own story — so it lives here rather
 * than in `site.ts`, keeping that module to cross-page content.
 */

import { CONTACT_HREF } from "@/config/site";
import type { CompanyPanel, MegaItem } from "@/content/types";

/** What visitors most often want to know about us, in that order. */
const companyLinks: MegaItem["links"] = [
  {
    label: "About Us",
    href: "/about",
    icon: "building-2",
  },
  {
    label: "Why Choose Us",
    href: "/why-us",
    icon: "sparkles",
  },
  {
    label: "Our Process",
    href: "/our-process",
    icon: "workflow",
  },
  {
    label: "Engineering & Culture",
    href: "/engineering",
    icon: "code-xml",
  },
  {
    label: "Open Source",
    href: "/open-source",
    icon: "git-branch",
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
  storyLabel: "Who we are",
  /**
   * Statements of intent — how we work and what we are aiming at. Deliberately
   * not claims about scale or history (years trading, projects delivered,
   * headcount): nothing here asserts a number no page on the site could back up.
   */
  story: [
    {
      icon: "target",
      title: "Our mission",
      body: "To help teams ship software that earns trust — built with AI where it genuinely helps, and engineered so it stays maintainable long after launch.",
    },
    {
      icon: "eye",
      title: "Our vision",
      body: "A world where AI-native software is the normal way to build: practical systems that quietly remove manual work, not demos that never reach production.",
    },
    {
      icon: "handshake",
      title: "Our promise",
      body: "Senior engineers on your work, progress you can follow week to week, and code your own team can pick up and own from day one.",
    },
  ],
  actions: [
    { label: "Learn About Us", href: "/about" },
    { label: "View Our Process", href: "/our-process" },
  ],
  banner: {
    title: "Ready to accelerate your software journey?",
    body: "Tell us what you are building. We will tell you how we would build it.",
    cta: { label: "Get a free consultation", href: CONTACT_HREF },
  },
};

/** Company mega-menu — a two-column trust panel (see `MegaItem.company`). */
export const companyMenu: MegaItem = {
  label: "Company",
  href: "/about",
  overview: "Explore the company",
  links: companyLinks,
  company: companyPanel,
};
