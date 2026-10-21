import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { TextReveal } from "@/components/text-reveal";
import { HeroVisual } from "@/components/sections/home/hero-visual";
import { TechBadges } from "@/components/sections/home/tech-badges";
import { ProductShowcase } from "@/components/sections/home/product-showcase";
import { ProcessScroll } from "@/components/sections/process-scroll";
import {
  SectionHead,
  ArrowLink,
  IconCard,
  FaqAccordion,
  CtaBanner,
  CtaActions,
} from "@/components/sections/pieces";
import { caseStudyHref } from "@/content/case-studies";
import {
  homeHero,
  homeTech,
  homeServiceCards,
  featuredProject,
  homeCta,
  whyChoose,
  tailoredProcess,
  faqs,
} from "@/content/site";
import { CONTACT_HREF, CTA_LABEL } from "@/config/site";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/**
 * Homepage — the approved enterprise-light concept (Phase 40): hero with the
 * technology composition, four services, the featured project, why us, the
 * process, FAQ and the closing CTA. Copy lives in `content/site.ts`.
 */
export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <section className="hero hero-split">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              {/* `eager`: this block holds the LCP text — it must paint with
                  the first frame, not after hydration. */}
              <Reveal eager>
                <span className="eyebrow">{homeHero.eyebrow}</span>
                <h1>
                  <TextReveal text={homeHero.title} accent={homeHero.accent} />
                </h1>
                <p className="lead">{homeHero.lead}</p>
                <div className="hero-actions">
                  <ButtonLink href={CONTACT_HREF} className="btn-lg">
                    {CTA_LABEL}
                    <span className="btn-arrow" aria-hidden>
                      →
                    </span>
                  </ButtonLink>
                  <ButtonLink
                    href={homeHero.secondary.href}
                    variant="ghost"
                    className="btn-lg"
                  >
                    {homeHero.secondary.label}
                  </ButtonLink>
                </div>
                <TechBadges label={homeHero.techLabel} items={homeTech} />
              </Reveal>
            </div>
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Our services"
            title="End-to-end technology services for modern businesses"
            action={<ArrowLink href="/services">View all services</ArrowLink>}
          >
            From AI engineering to custom software and cloud platforms, we help
            you design, build and scale solutions that solve real business
            problems.
          </SectionHead>
          <div className="grid-4 grid">
            {homeServiceCards.map((s, i) => (
              <IconCard
                key={s.href}
                icon={s.icon}
                title={s.title}
                body={s.body}
                href={s.href}
                delay={i * 0.06}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="band feat">
        <div className="container">
          <div className="feat-grid">
            <Reveal className="feat-copy">
              <span className="eyebrow">{featuredProject.eyebrow}</span>
              <h2>
                <TextReveal text={featuredProject.title} />
              </h2>
              <p>{featuredProject.body}</p>
              <ButtonLink href={caseStudyHref(featuredProject.study.slug)}>
                {featuredProject.cta}
                <span className="btn-arrow" aria-hidden>
                  →
                </span>
              </ButtonLink>
            </Reveal>
            <Reveal delay={0.1}>
              <ProductShowcase note={featuredProject.note} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section>
        <div className="container">
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
      <section className="band">
        <div className="container">
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
        eyebrow={homeCta.eyebrow}
        title={homeCta.title}
        body={homeCta.body}
        points={homeCta.points}
        secondary={homeCta.secondary}
      />
    </>
  );
}
