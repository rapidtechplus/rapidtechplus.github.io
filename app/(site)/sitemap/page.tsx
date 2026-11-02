import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { CtaBanner } from "@/components/sections/pieces";
import { sitemapGroups } from "@/content/site";

export const metadata: Metadata = {
  title: "Sitemap",
  description:
    "A complete map of every page on the Rapid Tech Plus website — services, solutions, industries, case studies, insights, and legal information.",
  alternates: { canonical: "/sitemap" },
};

export default function SitemapPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Sitemap" }]}
          />
          <span className="eyebrow">Sitemap</span>
          <h1>
            Everything on <span className="grad-text">Rapid Tech Plus</span>
          </h1>
          <p>
            A complete map of our website. Jump straight to any page below.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: "clamp(24px,4vw,48px)" }}>
        <div className="container-wide container">
          <div className="grid grid-4">
            {sitemapGroups.map((group, i) => (
              <Reveal className="card" key={group.title} delay={i * 0.05}>
                <h3>{group.title}</h3>
                <ul className="sitemap-links">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Can't find what you're looking for?"
        body="Tell us what you need and we'll point you in the right direction."
      />
    </>
  );
}
