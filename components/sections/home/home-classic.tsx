import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { HeroScene } from "@/components/hero-scene";
import { TextReveal } from "@/components/text-reveal";
import { CapabilityBento } from "@/components/sections/home/capability-bento";
import { ProcessScroll } from "@/components/sections/process-scroll";
import {
  SectionHead,
  IconCard,
  FaqAccordion,
  CtaBanner,
  CtaActions,
} from "@/components/sections/pieces";
import { FaqJsonLd } from "@/components/sections/home/faq-json-ld";
import {
  homeServices,
  whyChoose,
  aiExpertise,
  tailoredProcess,
  faqs,
} from "@/content/site";
import { CONTACT_HREF, CTA_LABEL } from "@/config/site";

const trust = [
  "AI-first engineering",
  "TypeScript everywhere",
  "Ship in weeks, not quarters",
];

/**
 * The Phase 39 homepage, kept as a switchable variant while the owner
 * decides between it and `HomeConcept` (see `HOME_VARIANT` in
 * `config/site.ts`). Trimmed to the essentials: a navy hero band with the
 * canvas globe and capability chips, the capability bento, why-us cards,
 * the scroll-told process, FAQ and CTA. Everything else (stack marquee,
 * placeholder stats and testimonials, who-we-are, industries, products,
 * insights) is reachable from the nav and was removed to keep the page
 * focused and honest. Runs on today's shared primitives (light CTA banner,
 * `CTA_LABEL`).
 */
export function HomeClassic() {
  return (
    <>
      <FaqJsonLd />

      {/* HERO */}
      <section className="hero hero-split surface-dark">
        <div className="container-wide container">
          <div className="hero-grid">
            <div className="hero-copy">
              {/* `eager`: this block holds the LCP text — it must paint with
                  the first frame, not after hydration. */}
              <Reveal eager>
                <span className="badge">
                  <span className="dot" /> AI-first software engineering studio
                </span>
                <h1>
                  <TextReveal
                    text="Software that thinks ahead of your roadmap"
                    accent="ahead"
                  />
                </h1>
                <p className="lead">
                  Rapid Tech Plus designs and engineers production-grade
                  products, platforms, and internal systems — blending senior
                  craft with an AI-accelerated workflow to ship faster without
                  cutting corners.
                </p>
                <div className="hero-actions">
                  <ButtonLink href={CONTACT_HREF} className="btn-lg">
                    {CTA_LABEL}
                    <span className="btn-arrow" aria-hidden>
                      →
                    </span>
                  </ButtonLink>
                  <ButtonLink
                    href="/services"
                    variant="ghost"
                    className="btn-lg"
                  >
                    Explore services
                  </ButtonLink>
                </div>
                <div className="trust-row">
                  {trust.map((t, i) => (
                    <span key={t} style={{ display: "contents" }}>
                      {i > 0 && <span className="sep" />}
                      <span>{t}</span>
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
            {/* Decorative: the canvas globe + capability chips. */}
            <div className="hero-stage" aria-hidden="true">
              <HeroScene />
              <span className="hero-chip c1">
                <span className="dot" /> AI agents <b>in production</b>
              </span>
              <span className="hero-chip c2">
                <span className="dot" /> cloud-native <b>platforms</b>
              </span>
              <span className="hero-chip ok c3">
                <span className="dot" /> shipped, then supported
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES — one asymmetric grid for services + AI. */}
      <section>
        <div className="container-wide container">
          <SectionHead eyebrow="What we do" title="Capabilities, end to end">
            Everything needed to design, build, and evolve a modern digital
            product — under one roof, with one accountable team.
          </SectionHead>
          <CapabilityBento ai={aiExpertise} services={homeServices} />
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="band">
        <div className="container-wide container">
          <SectionHead
            eyebrow="Why Rapid Tech Plus"
            title="A partner you can build the next decade with"
          >
            The reasons teams choose us — and stay with us — long after the
            first launch.
          </SectionHead>
          <div className="grid-4 grid">
            {whyChoose.map((w, i) => (
              <IconCard
                key={w.title}
                icon={w.icon}
                title={w.title}
                body={w.body}
                delay={i * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — scroll-told, five numbered stages. */}
      <section>
        <div className="container-wide container">
          <ProcessScroll
            eyebrow="How we work"
            title="Our process for tailored IT solutions"
            lead="No black boxes. Every engagement moves through five transparent, reviewable stages — from first conversation to lasting support."
            steps={tailoredProcess}
            actions={<CtaActions />}
          />
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        style={{ scrollMarginTop: "calc(var(--nav-h) + 24px)" }}
      >
        <div className="container">
          <SectionHead eyebrow="FAQ" title="Frequently asked questions">
            Answers to the questions we hear most from new clients.
          </SectionHead>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        title="Have something worth building?"
        body="Tell us what you're building. We'll help you scope it, design it, and ship it — fast."
      />
    </>
  );
}
