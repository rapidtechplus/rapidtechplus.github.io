import type { Metadata } from "next";
import { PageHero, CaseCard, DualCta } from "@/components/sections/pieces";
import {
  caseStudies,
  caseStudyCards,
  caseStudyHref,
} from "@/content/case-studies";
import { JsonLd } from "@/components/seo/json-ld";
import { collectionPageJsonLd, toListItems } from "@/lib/structured-data";

const description =
  "Representative engagements from Rapid Tech Plus — FinTech, healthcare, retail, SaaS, and automation projects with measurable outcomes.";

export const metadata: Metadata = {
  title: "Case Studies",
  description,
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Phase G gave every study its own route, so the ItemList withheld in
          Phase L is now real: each entry resolves to a page a crawler can
          follow. Derived from the same array as the grid, so it cannot drift. */}
      <JsonLd
        data={collectionPageJsonLd({
          name: "Case Studies",
          description,
          path: "/case-studies",
          items: toListItems(caseStudyCards),
        })}
      />

      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Case Studies" }]}
        eyebrow="Case studies"
        title={
          <>
            Outcomes we&apos;ve <span className="grad-text">delivered</span>
          </>
        }
        lead="A look at the kinds of engagements we take on — the problem, the build, and the measurable results. Representative until each client-approved study is published in full."
      />

      <section style={{ paddingTop: "clamp(24px,4vw,48px)" }}>
        <div className="container-wide container">
          <div className="grid-3 grid">
            {caseStudies.map((c, i) => (
              <CaseCard
                key={c.slug}
                icon={c.icon}
                title={c.title}
                client={c.client}
                category={c.category}
                summary={c.summary}
                metrics={c.metrics}
                href={caseStudyHref(c.slug)}
                delay={i * 0.05}
              />
            ))}
          </div>

          <DualCta
            title="Want results like these?"
            body="Tell us what you're building and we'll scope the fastest, most reliable path to shipping it."
          />
        </div>
      </section>
    </>
  );
}
