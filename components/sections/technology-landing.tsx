import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { Ico } from "@/components/icon";
import type { Crumb } from "@/components/sections/breadcrumbs";
import type { Feature, Faq } from "@/content/types";
import type { TechProject } from "@/content/technologies";
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
} from "@/components/sections/pieces";
import type { RelatedItem } from "@/components/sections/detail-layout";

/**
 * Technology landing template. Each `/technologies/[slug]` reads like a
 * dedicated landing page, following the Priority 6 flow:
 * hero ([Tech] Development) → overview → Why [Tech] → Why Rapid Tech Plus →
 * Projects → FAQs → related technologies → CTA. Every optional section hides
 * gracefully when its data is absent.
 */
export function TechnologyLanding({
  crumbs,
  eyebrow,
  title,
  lead,
  overview,
  overviewTitle,
  label,
  reasons,
  whyUs,
  projects,
  faqs,
  related,
  cta,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  overview?: ReactNode;
  overviewTitle: string;
  label: string;
  reasons: Feature[];
  whyUs: Feature[];
  projects?: TechProject[];
  faqs?: Faq[];
  related?: RelatedItem[];
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

      {/* Overview */}
      {overview ? (
        <section style={{ paddingTop: "clamp(24px,4vw,48px)" }}>
          <div className="container-content container">
            <Reveal>
              <span className="eyebrow">Overview</span>
              <h2>{overviewTitle}</h2>
              <p>{overview}</p>
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* Why [Tech] */}
      {reasons.length > 0 ? (
        <section className="band">
          <div className="container-wide container">
            <SectionHead eyebrow={`Why ${label}`} title={`Why build with ${label}`}>
              What makes {label} the right foundation for the product you&rsquo;re
              building.
            </SectionHead>
            <div className="grid-3 grid">
              {reasons.map((r, i) => (
                <IconCard
                  key={r.title}
                  icon={r.icon}
                  title={r.title}
                  body={r.body}
                  delay={i * 0.05}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Why Rapid Tech Plus */}
      {whyUs.length > 0 ? (
        <section>
          <div className="container-wide container">
            <SectionHead
              eyebrow="Why us"
              title="Why Rapid Tech Plus"
            >
              Senior engineering, delivered the way your team already works.
            </SectionHead>
            <div className="grid-3 grid">
              {whyUs.map((w, i) => (
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
      ) : null}

      {/* Projects */}
      {projects && projects.length > 0 ? (
        <section className="band">
          <div className="container-wide container">
            <SectionHead eyebrow="Projects" title={`${label} in action`}>
              Representative builds that show what {label} delivers in production.
            </SectionHead>
            <div className="grid-3 grid">
              {projects.map((p, i) => (
                <Reveal className="card case-card" key={p.title} delay={i * 0.05}>
                  <div className="case-top">
                    <span className="ico">
                      <Ico name={p.icon} />
                    </span>
                    <Tag className="case-cat">{p.kind}</Tag>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  <div className="case-metrics">
                    {p.metrics.map((m) => (
                      <MetricStat key={m.label} value={m.value} label={m.label} />
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
        <section>
          <div className="container">
            <SectionHead eyebrow="FAQ" title="Frequently asked questions" />
            <FaqAccordion items={faqs} />
          </div>
        </section>
      ) : null}

      {/* Related technologies */}
      {related && related.length > 0 ? (
        <RelatedGrid
          eyebrow="Technologies"
          title="Explore more technologies"
          items={related}
        />
      ) : null}

      <CtaBanner title={cta.title} body={cta.body} />
    </>
  );
}
