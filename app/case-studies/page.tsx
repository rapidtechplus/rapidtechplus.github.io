import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { DualCta } from "@/components/sections/pieces";
import { caseStudies } from "@/content/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Representative engagements from Rapid Tech Plus — FinTech, healthcare, retail, SaaS, and automation projects with measurable outcomes.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Case studies</span>
          <h1>
            Outcomes we&apos;ve <span className="grad-text">delivered</span>
          </h1>
          <p>
            A look at the kinds of engagements we take on — the problem, the
            build, and the measurable results. Representative until each
            client-approved study is published in full.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: "clamp(24px,4vw,48px)" }}>
        <div className="container-wide container">
          <div className="grid-3 grid">
            {caseStudies.map((c, i) => (
              <Reveal className="card case-card" key={c.title} delay={i * 0.05}>
                <div className="case-top">
                  <span className="ico">{c.icon}</span>
                  <span className="case-cat">{c.category}</span>
                </div>
                <h3>{c.title}</h3>
                <p className="case-client">{c.client}</p>
                <p>{c.summary}</p>
                <div className="case-metrics">
                  {c.metrics.map((m) => (
                    <div className="case-metric" key={m.label}>
                      <span className="case-metric-value">{m.value}</span>
                      <span className="case-metric-label">{m.label}</span>
                    </div>
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
