import type { ReactNode } from "react";
import type { Crumb } from "@/components/sections/breadcrumbs";
import type { Feature, Faq } from "@/content/types";
import {
  PageHero,
  SectionHead,
  IconCard,
  RelatedGrid,
  FaqAccordion,
  CtaBanner,
  CtaActions,
  Tag,
  TimelineStep,
} from "@/components/sections/pieces";
import type { RelatedItem } from "@/components/sections/detail-layout";

type ProcessStep = { icon: string; title: string; body: string };

/**
 * Rich Hire Expert landing template. Each role `/hire/[slug]` reads like a
 * dedicated hire-a-specialist landing page, following the high-converting flow:
 * hero → why Rapid Tech Plus → developer skills → hiring models → technology
 * stack → development process → FAQs → related roles → contact CTA. Every
 * optional section hides gracefully when its data is absent.
 */
export function HireLanding({
  crumbs,
  eyebrow,
  title,
  lead,
  overview,
  overviewTitle,
  reasons,
  skills,
  skillsTitle,
  models,
  technologies,
  process,
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
  reasons: Feature[];
  skills: Feature[];
  skillsTitle: string;
  models: Feature[];
  technologies?: string[];
  process: readonly ProcessStep[];
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

      {/* Overview */}
      {overview ? (
        <section style={{ paddingTop: "clamp(24px,4vw,48px)" }}>
          <div className="container">
            <SectionHead eyebrow="Overview" title={overviewTitle}>
              {overview}
            </SectionHead>
          </div>
        </section>
      ) : null}

      {/* Why Rapid Tech Plus */}
      {reasons.length > 0 ? (
        <section className="band">
          <div className="container-wide container">
            <SectionHead eyebrow="Why us" title="Why hire through Rapid Tech Plus">
              Senior specialists, matched fast, working the way your team already
              does.
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

      {/* Developer skills */}
      {skills.length > 0 ? (
        <section>
          <div className="container-wide container">
            <SectionHead eyebrow="Skills" title={skillsTitle}>
              The core strengths this specialist brings to your team from day one.
            </SectionHead>
            <div className="grid-3 grid">
              {skills.map((s, i) => (
                <IconCard
                  key={s.title}
                  icon={s.icon}
                  title={s.title}
                  body={s.body}
                  delay={i * 0.05}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Hiring models */}
      {models.length > 0 ? (
        <section className="band">
          <div className="container-wide container">
            <SectionHead eyebrow="Hiring models" title="Ways to hire">
              Choose the engagement that fits how you want to work — switch as
              your needs change.
            </SectionHead>
            <div className="grid-3 grid">
              {models.map((m, i) => (
                <IconCard
                  key={m.title}
                  icon={m.icon}
                  title={m.title}
                  body={m.body}
                  delay={i * 0.05}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Technology stack */}
      {technologies && technologies.length > 0 ? (
        <section>
          <div className="container">
            <SectionHead eyebrow="Technology stack" title="Tools they work with">
              A modern, proven stack — matched to your project, not forced onto
              it.
            </SectionHead>
            <div className="chips">
              {technologies.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Development / hiring process */}
      <section className="band">
        <div className="container-wide container">
          <SectionHead eyebrow="How it works" title="From first call to shipping">
            A clear, low-friction path from telling us your needs to a specialist
            delivering in your team.
          </SectionHead>
          <div className={`timeline${process.length === 5 ? " timeline-5" : ""}`}>
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

      {/* FAQs */}
      {faqs && faqs.length > 0 ? (
        <section>
          <div className="container">
            <SectionHead eyebrow="FAQ" title="Frequently asked questions" />
            <FaqAccordion items={faqs} />
          </div>
        </section>
      ) : null}

      {/* Related roles */}
      {related && related.length > 0 ? (
        <RelatedGrid
          eyebrow="Related roles"
          title={relatedTitle ?? "More roles"}
          items={related}
        />
      ) : null}

      <CtaBanner title={cta.title} body={cta.body} />
    </>
  );
}
