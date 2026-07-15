import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { Ico } from "@/components/icon";
import type { Crumb } from "@/components/sections/breadcrumbs";
import type { Feature, Faq } from "@/content/types";
import type { CaseStudy } from "@/content/case-studies";
import {
  PageHero,
  SectionHead,
  IconCard,
  RelatedGrid,
  FaqAccordion,
  CtaBanner,
  CtaActions,
  MetricStat,
  Tag,
  TimelineStep,
} from "@/components/sections/pieces";
import type { RelatedItem } from "@/components/sections/detail-layout";

type ProcessStep = { icon: string; title: string; body: string };

/**
 * Rich service landing template. Each service `/services/[slug]` reads like a
 * dedicated landing page: hero → overview → business problems → technologies →
 * development process → benefits → industries → case studies → FAQs → CTA.
 * Every section hides gracefully when its data is absent, so the same template
 * serves both fully-authored and lightly-authored records.
 */
export function ServiceLanding({
  crumbs,
  eyebrow,
  title,
  lead,
  overview,
  overviewTitle,
  capabilities,
  problems,
  technologies,
  process,
  benefits,
  industries,
  caseStudies,
  faqs,
  related,
  relatedTitle,
  cta,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  overview?: ReactNode;
  overviewTitle: string;
  capabilities: Feature[];
  problems?: Feature[];
  technologies?: string[];
  process: readonly ProcessStep[];
  benefits?: Feature[];
  industries?: RelatedItem[];
  caseStudies?: CaseStudy[];
  faqs?: Faq[];
  related?: RelatedItem[];
  relatedTitle?: string;
  cta: { title: string; body: string };
}) {
  return (
    <>
      <PageHero crumbs={crumbs} eyebrow={eyebrow} title={title} lead={lead} />

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <CtaActions />
        </div>
      </section>

      {/* Overview + what we deliver */}
      <section style={{ paddingTop: "clamp(24px,4vw,48px)" }}>
        <div className="split container">
          <Reveal>
            <span className="eyebrow">Overview</span>
            <h2>{overviewTitle}</h2>
            {overview ? <p>{overview}</p> : null}
          </Reveal>
          <Reveal className="panel" delay={0.1}>
            {capabilities.map((c, i) => (
              <div
                className="feature"
                key={c.title}
                style={
                  i < capabilities.length - 1 ? { marginBottom: 22 } : undefined
                }
              >
                <span className="check">
                  <Ico name={c.icon} />
                </span>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Business problems solved */}
      {problems && problems.length > 0 ? (
        <section className="band">
          <div className="container-wide container">
            <SectionHead
              eyebrow="Business problems"
              title="Problems we solve"
            >
              Where teams get stuck — and where this service makes the
              difference.
            </SectionHead>
            <div className="grid-3 grid">
              {problems.map((p, i) => (
                <IconCard
                  key={p.title}
                  icon={p.icon}
                  title={p.title}
                  body={p.body}
                  delay={i * 0.05}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Technologies */}
      {technologies && technologies.length > 0 ? (
        <section>
          <div className="container">
            <SectionHead eyebrow="Technologies" title="Our toolkit">
              A modern, proven stack chosen to fit the job — not the other way
              round.
            </SectionHead>
            <div className="chips">
              {technologies.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Development process */}
      <section className="band">
        <div className="container-wide container">
          <SectionHead eyebrow="How we work" title="Our development process">
            A clear, collaborative path from first conversation to launch and
            beyond.
          </SectionHead>
          <div
            className={`timeline${process.length === 5 ? " timeline-5" : ""}`}
          >
            {process.map((p, i) => (
              <TimelineStep
                key={p.title}
                n={p.icon}
                title={p.title}
                body={p.body}
                delay={i * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      {benefits && benefits.length > 0 ? (
        <section>
          <div className="container-wide container">
            <SectionHead eyebrow="Benefits" title="What you get out of it">
              The outcomes this service is built to deliver for your business.
            </SectionHead>
            <div className="grid-3 grid">
              {benefits.map((b, i) => (
                <IconCard
                  key={b.title}
                  icon={b.icon}
                  title={b.title}
                  body={b.body}
                  delay={i * 0.05}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Industries */}
      {industries && industries.length > 0 ? (
        <RelatedGrid
          eyebrow="Industries"
          title="Industries we serve"
          items={industries}
        />
      ) : null}

      {/* Case studies */}
      {caseStudies && caseStudies.length > 0 ? (
        <section>
          <div className="container-wide container">
            <SectionHead eyebrow="Proof" title="Related case studies">
              Representative engagements that put this work into practice.
            </SectionHead>
            <div className="grid-3 grid">
              {caseStudies.map((c, i) => (
                <Reveal
                  className="card case-card"
                  key={c.slug}
                  delay={i * 0.05}
                >
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
                      <MetricStat
                        key={m.label}
                        value={m.value}
                        label={m.label}
                      />
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* FAQs */}
      {faqs && faqs.length > 0 ? (
        <section className="band">
          <div className="container">
            <SectionHead eyebrow="FAQ" title="Frequently asked questions" />
            <FaqAccordion items={faqs} />
          </div>
        </section>
      ) : null}

      {/* Related services */}
      {related && related.length > 0 ? (
        <RelatedGrid
          eyebrow="Related services"
          title={relatedTitle ?? "More services"}
          items={related}
        />
      ) : null}

      <CtaBanner title={cta.title} body={cta.body} />
    </>
  );
}
