import type { Metadata } from "next";
import {
  PageHero,
  SectionHead,
  IconCard,
  CtaBanner,
} from "@/components/sections/pieces";
import { industries, industrySectors } from "@/content/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Rapid Tech Plus builds software for startups, SaaS companies, e-commerce, fintech, logistics, and professional services — tailored to each industry's needs.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
        eyebrow="Industries"
        title={
          <>
            Software built for{" "}
            <span className="grad-text">the way you work</span>
          </>
        }
        lead="We partner with businesses across industries, adapting our engineering and design to the goals, users, and constraints of each one."
      />

      <section style={{ paddingTop: "clamp(24px,4vw,48px)" }}>
        <div className="container-wide container">
          <SectionHead
            eyebrow="Sectors"
            title="Industries we build for"
          >
            Deep, sector-specific engineering — each with its own approach to
            workflows, compliance, and integration.
          </SectionHead>
          <div className="grid-3 grid">
            {industrySectors.map((s, idx) => (
              <IconCard
                key={s.slug}
                icon={s.icon}
                title={s.label}
                body={s.summary}
                href={`/industries/${s.slug}`}
                delay={idx * 0.04}
              />
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-elev)" }}>
        <div className="container-wide container">
          <SectionHead
            eyebrow="Who we work with"
            title="Teams we partner with"
          >
            Beyond specific sectors, we adapt to the goals and constraints of
            businesses at every stage.
          </SectionHead>
          <div className="grid-3 grid">
            {industries.map((i) => (
              <IconCard
                key={i.title}
                icon={i.icon}
                title={i.title}
                body={i.body}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Don't see your industry?"
        body="We work across sectors. Tell us about your business and the software you need."
      />
    </>
  );
}
