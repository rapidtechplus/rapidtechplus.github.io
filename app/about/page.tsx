import type { Metadata } from "next";
import Link from "next/link";
import { Ico } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import {
  PageHero,
  SectionHead,
  IconCard,
  CtaBanner,
} from "@/components/sections/pieces";
import {
  aboutValues,
  aboutGlance,
  companyTimeline,
  engineeringPrinciples,
  qualityStandards,
} from "@/content/site";
import { engagementModels } from "@/content/hire";

export const metadata: Metadata = {
  title: "About",
  description:
    "Rapid Tech Plus is a modern software studio building web platforms, SaaS products, and digital systems for growing businesses.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="About us"
        title={
          <>
            Building software with{" "}
            <span className="grad-text">craft and clarity</span>
          </>
        }
        lead="Rapid Tech Plus is a software studio helping growing businesses design, build, and scale modern digital products."
      />

      <section style={{ paddingTop: "clamp(24px,4vw,48px)" }}>
        <div className="split container">
          <Reveal>
            <span className="eyebrow">Our story</span>
            <h2>A modern studio, built on engineering discipline</h2>
            <p>
              Rapid Tech Plus was founded on a simple belief: great software
              comes from combining strong engineering with genuine care for the
              people who use it. We work as an extension of your team — scoping
              problems carefully, building thoughtfully, and shipping reliably.
            </p>
            <p>
              Whether you&apos;re launching a new product or modernizing an
              existing platform, we bring the technical depth and the practical
              judgment to get it done right.
            </p>
          </Reveal>

          <Reveal className="panel">
            <span className="eyebrow">At a glance</span>
            {aboutGlance.map((g, i) => (
              <div
                className="feature"
                key={g.title}
                style={
                  i < aboutGlance.length - 1 ? { margin: "18px 0" } : undefined
                }
              >
                <span className="check">
                  <Ico name="check" />
                </span>
                <div>
                  <h3>{g.title}</h3>
                  <p>{g.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHead
            eyebrow="Our journey"
            title="From first commit to AI-native engineering"
          >
            An honest look at where we&apos;ve come from and where we&apos;re
            headed — milestones, not marketing.
          </SectionHead>
          <div className="milestones">
            {companyTimeline.map((m, i) => (
              <Reveal className="milestone" key={m.title} delay={i * 0.05}>
                <span className="milestone-year">{m.year}</span>
                <div className="milestone-body">
                  <h3>{m.title}</h3>
                  <p>{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-elev)" }}>
        <div className="container-wide container">
          <SectionHead eyebrow="What drives us" title="Our values" />
          <div className="grid-3 grid">
            {aboutValues.map((v) => (
              <IconCard
                key={v.title}
                icon={v.icon}
                title={v.title}
                body={v.body}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container-wide container">
          <SectionHead
            eyebrow="How we build"
            title="Engineering principles"
          >
            The technical standards behind every project — the same whether we
            ship a landing page or a platform.
          </SectionHead>
          <div className="grid-3 grid">
            {engineeringPrinciples.map((p) => (
              <IconCard key={p.title} icon={p.icon} title={p.title} body={p.body} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-elev)" }}>
        <div className="container-wide container">
          <SectionHead
            eyebrow="Quality standards"
            title="What we hold ourselves to"
          >
            Commitments we apply on every engagement. We don&apos;t claim
            certifications we haven&apos;t earned — these are practices, verified
            in our workflow.
          </SectionHead>
          <div className="grid-2 grid">
            {qualityStandards.map((q) => (
              <IconCard key={q.title} icon={q.icon} title={q.title} body={q.body} />
            ))}
          </div>
          <p className="about-links">
            See our{" "}
            <Link href="/our-process">development process</Link> for how these
            standards play out stage by stage, or our{" "}
            <Link href="/open-source">open-source work</Link> and{" "}
            <a
              href="https://github.com/rapidtechplus"
              target="_blank"
              rel="noreferrer"
            >
              GitHub organization
            </a>
            .
          </p>
        </div>
      </section>

      <section>
        <div className="container-wide container">
          <SectionHead
            eyebrow="Ways to work with us"
            title="Client engagement models"
          >
            Flexible ways to bring us in — from extending your team to owning a
            defined outcome end to end.
          </SectionHead>
          <div className="grid-3 grid">
            {engagementModels.map((m) => (
              <IconCard key={m.title} icon={m.icon} title={m.title} body={m.body} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Let's build something great together"
        body="We'd love to hear about your project and explore how we can help."
      />
    </>
  );
}
