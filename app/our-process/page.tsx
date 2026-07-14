import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import {
  PageHero,
  SectionHead,
  IconCard,
  TimelineStep,
  FaqAccordion,
  CtaBanner,
} from "@/components/sections/pieces";
import { tailoredProcess, processPrinciples, processFaqs } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "How Rapid Tech Plus works — a transparent, iterative five-stage process from discovery and design through agile development, QA, launch, and ongoing support.",
  alternates: { canonical: "/our-process" },
};

export default function OurProcessPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Our Process" }]}
        eyebrow="Our process"
        title={
          <>
            From idea to launch, <span className="grad-text">without surprises</span>
          </>
        }
        lead="We work in clear, reviewable stages so you can see progress, steer early, and trust what ships."
      />

      <section style={{ paddingTop: "clamp(24px,4vw,48px)" }}>
        <div className="container-wide container">
          <SectionHead
            eyebrow="How we work"
            title="Five stages, one accountable partner"
          >
            A tailored engagement, not a template — each stage builds on the last
            with quality and communication built in.
          </SectionHead>
          <div className="timeline timeline-5">
            {tailoredProcess.map((step, i) => (
              <TimelineStep
                key={step.title}
                n={step.icon}
                title={step.title}
                body={step.body}
                delay={i * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-elev)" }}>
        <div className="container-wide container">
          <SectionHead
            eyebrow="What guides us"
            title="Principles behind every engagement"
          />
          <div className="grid-2 grid">
            {processPrinciples.map((p) => (
              <IconCard key={p.title} icon={p.icon} title={p.title} body={p.body} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHead eyebrow="FAQ" title="Working with us" />
          <Reveal>
            <FaqAccordion items={processFaqs} />
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Ready to get started?"
        body="Tell us what you're building and we'll help you scope it and recommend the right approach."
      />
    </>
  );
}
