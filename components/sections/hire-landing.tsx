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
} from "@/components/sections/pieces";
import type { RelatedItem } from "@/components/sections/detail-layout";
import { ProcessScroll } from "@/components/sections/process-scroll";
import {
  SectionNav,
  type SectionLink,
} from "@/components/sections/section-nav";

type ProcessStep = { icon: string; title: string; body: string };

/**
 * Rich Hire Expert landing template. Each role `/hire/[slug]` reads like a
 * dedicated hire-a-specialist landing page, following the high-converting flow:
 * hero → why Rapid Tech Plus → developer skills → hiring models → technology
 * stack → development process → FAQs → related roles → contact CTA. Every
 * optional section hides gracefully when its data is absent. A sticky section
 * nav lists the sections that render; `assistant` is an optional slot for the
 * page's guided assistant.
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
  assistant,
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
  assistant?: ReactNode;
}) {
  const sections: SectionLink[] = [
    ...(overview ? [{ id: "overview", label: "Overview" }] : []),
    ...(reasons.length ? [{ id: "why-us", label: "Why us" }] : []),
    ...(skills.length ? [{ id: "skills", label: "Skills" }] : []),
    ...(models.length ? [{ id: "models", label: "Hiring models" }] : []),
    ...(technologies?.length ? [{ id: "stack", label: "Stack" }] : []),
    { id: "process", label: "Process" },
    ...(faqs?.length ? [{ id: "faq", label: "FAQ" }] : []),
  ];

  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow={eyebrow}
        title={title}
        lead={lead}
        actions={<CtaActions />}
      />

      <SectionNav sections={sections} />

      {/* Overview */}
      {overview ? (
        <section id="overview">
          <div className="container">
            <SectionHead eyebrow="Overview" title={overviewTitle}>
              {overview}
            </SectionHead>
          </div>
        </section>
      ) : null}

      {/* Why Rapid Tech Plus */}
      {reasons.length > 0 ? (
        <section id="why-us" className="band">
          <div className="container-wide container">
            <SectionHead
              eyebrow="Why us"
              title="Why hire through Rapid Tech Plus"
            >
              Senior specialists, matched fast, working the way your team
              already does.
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
        <section id="skills">
          <div className="container-wide container">
            <SectionHead eyebrow="Skills" title={skillsTitle}>
              The core strengths this specialist brings to your team from day
              one.
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
        <section id="models" className="band">
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
        <section id="stack">
          <div className="container">
            <SectionHead
              eyebrow="Technology stack"
              title="Tools they work with"
            >
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

      {/* Hiring process — scroll-told */}
      <section id="process" className="band">
        <div className="container-wide container">
          <ProcessScroll
            eyebrow="How it works"
            title="From first call to shipping"
            lead="A clear, low-friction path from telling us your needs to a specialist delivering in your team."
            steps={process}
            actions={<CtaActions />}
          />
        </div>
      </section>

      {/* FAQs */}
      {faqs && faqs.length > 0 ? (
        <section id="faq">
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
      {assistant}
    </>
  );
}
