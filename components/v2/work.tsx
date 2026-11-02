import { caseStudyHref, getCaseStudy } from "@/content/case-studies";
import { v2Work } from "@/content/v2-home";
import { documentHref } from "@/lib/document-href";
import { SectionHead } from "./section-head";
import { WorkTabs, type WorkItem } from "./work-tabs";

/**
 * Selected work. Resolves the case studies on the server and hands the client
 * island only the fields it renders, so the full case-study bodies never ship
 * in the client bundle.
 */
export function V2Work() {
  const items: WorkItem[] = v2Work.items.flatMap(({ slug, bars }) => {
    const study = getCaseStudy(slug);
    if (!study) return [];
    return [
      {
        slug,
        href: documentHref(caseStudyHref(slug)),
        title: study.title,
        client: study.client,
        category: study.category,
        summary: study.summary,
        metrics: study.metrics.slice(0, 2),
        bars,
      },
    ];
  });

  return (
    <section
      id="work"
      className="v2-container v2-section"
      aria-labelledby="v2-work-title"
    >
      <SectionHead
        id="v2-work-title"
        eyebrow={v2Work.eyebrow}
        title={v2Work.title}
        highlight={v2Work.highlight}
      />
      {items.length > 0 && <WorkTabs items={items} />}
    </section>
  );
}
