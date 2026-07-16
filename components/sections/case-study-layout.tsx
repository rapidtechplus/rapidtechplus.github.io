import { Reveal } from "@/components/reveal";
import { Ico } from "@/components/icon";
import type { Crumb } from "@/components/sections/breadcrumbs";
import {
  CASE_STUDY_DISCLOSURE,
  caseStudyHref,
  type CaseStudy,
  type CaseStudyChapter,
} from "@/content/case-studies";
import {
  PageHero,
  SectionHead,
  IconCard,
  RelatedGrid,
  FaqAccordion,
  CaseCard,
  CtaBanner,
  CtaActions,
  MetricStat,
  Tag,
} from "@/components/sections/pieces";
import type { RelatedItem } from "@/components/sections/detail-layout";

/**
 * One narrative chapter: prose on one side, supporting cards on the other.
 * Alternating `band` backgrounds give the page a readable challenge → approach
 * → outcome rhythm without three near-identical section blocks.
 */
function Chapter({
  eyebrow,
  title,
  chapter,
  band,
}: {
  eyebrow: string;
  title: string;
  chapter: CaseStudyChapter;
  band?: boolean;
}) {
  return (
    <section className={band ? "band" : undefined}>
      <div className="container-wide container">
        <SectionHead eyebrow={eyebrow} title={title} />
        <Reveal>
          <p className="case-chapter-body">{chapter.body}</p>
        </Reveal>
        <div className="grid-3 grid">
          {chapter.points.map((p, i) => (
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
  );
}

/**
 * Case-study detail template. Reads as a narrative: hero → outcome metrics →
 * challenge → approach → outcome → technologies → the services and industries
 * the engagement drew on → related studies → CTA. Optional sections hide when
 * their data is absent, so a lightly-authored record still renders cleanly.
 *
 * The disclosure strip is not optional: these studies are representative, and
 * the page says so where a reader will actually see it.
 */
export function CaseStudyLanding({
  study,
  crumbs,
  services,
  industries,
  related,
}: {
  study: CaseStudy;
  crumbs: Crumb[];
  services: RelatedItem[];
  industries: RelatedItem[];
  related: CaseStudy[];
}) {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow={study.category}
        title={study.title}
        lead={study.intro}
      />

      {/* Outcome metrics + who it was for, lifted to the top: the reader's first
          question is what changed, not how. */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="panel case-summary">
            <div className="case-summary-who">
              <span className="ico">
                <Ico name={study.icon} />
              </span>
              <div>
                <span className="eyebrow">Client</span>
                <p className="case-client">{study.client}</p>
              </div>
            </div>
            <div className="case-metrics">
              {study.metrics.map((m) => (
                <MetricStat key={m.label} value={m.value} label={m.label} />
              ))}
            </div>
          </Reveal>
          <p className="case-disclosure">{CASE_STUDY_DISCLOSURE}</p>
          <CtaActions />
        </div>
      </section>

      <Chapter
        eyebrow="Challenge"
        title="The problem we were brought in to solve"
        chapter={study.challenge}
        band
      />
      <Chapter
        eyebrow="Approach"
        title="How we built it"
        chapter={study.approach}
      />
      <Chapter
        eyebrow="Outcome"
        title="What shipping it changed"
        chapter={study.outcome}
        band
      />

      {study.technologies && study.technologies.length > 0 ? (
        <section>
          <div className="container">
            <SectionHead eyebrow="Technologies" title="What we built it with">
              The stack chosen for this engagement — picked to fit the job.
            </SectionHead>
            <div className="chips">
              {study.technologies.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {services.length > 0 ? (
        <RelatedGrid
          eyebrow="Services"
          title="Services this engagement drew on"
          items={services}
        />
      ) : null}

      {industries.length > 0 ? (
        <RelatedGrid
          eyebrow="Industries"
          title="Where this work applies"
          items={industries}
        />
      ) : null}

      {study.faqs && study.faqs.length > 0 ? (
        <section className="band">
          <div className="container">
            <SectionHead eyebrow="FAQ" title="Frequently asked questions" />
            <FaqAccordion items={study.faqs} />
          </div>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section>
          <div className="container-wide container">
            <SectionHead eyebrow="More work" title="Related case studies">
              Other engagements that tackle a similar shape of problem.
            </SectionHead>
            <div className="grid-3 grid">
              {related.map((c, i) => (
                <CaseCard
                  key={c.slug}
                  icon={c.icon}
                  title={c.title}
                  client={c.client}
                  category={c.category}
                  summary={c.summary}
                  metrics={c.metrics}
                  href={caseStudyHref(c.slug)}
                  delay={i * 0.05}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBanner
        title="Have a problem that looks like this?"
        body={`Tell us what you're building and we'll scope the fastest, most reliable path to shipping it.`}
      />
    </>
  );
}
