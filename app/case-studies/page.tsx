import type { Metadata } from "next";
import { Ico } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import {
  PageHero,
  MetricStat,
  Tag,
  DualCta,
} from "@/components/sections/pieces";
import { caseStudies } from "@/content/case-studies";
import { JsonLd } from "@/components/seo/json-ld";
import { webPageJsonLd } from "@/lib/structured-data";

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
      {/* No ItemList until Phase G ships `/case-studies/[slug]`; listing items
          that have no URL of their own would add nothing a crawler can follow. */}
      <JsonLd
        data={webPageJsonLd({
          name: "Case Studies",
          description,
          path: "/case-studies",
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
              <Reveal className="card case-card" key={c.title} delay={i * 0.05}>
                <div className="case-top">
                  <span className="ico">
                    <Ico name={c.icon} />
                  </span>
                  <Tag className="case-cat">{c.category}</Tag>
                </div>
                <h3>{c.title}</h3>
                <p className="case-client">{c.client}</p>
                <p>{c.summary}</p>
                <div className="case-metrics">
                  {c.metrics.map((m) => (
                    <MetricStat key={m.label} value={m.value} label={m.label} />
                  ))}
                </div>
              </Reveal>
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
