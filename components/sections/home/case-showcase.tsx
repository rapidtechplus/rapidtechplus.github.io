import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { InView } from "@/components/in-view";
import { caseStudyHref, type CaseStudy } from "@/content/case-studies";
import { CaseVisual, type CaseVisualKind } from "./case-visual";

const VISUALS: CaseVisualKind[] = ["chart", "network", "grid"];

/**
 * "Selected work": large alternating rows, each pairing a case study's
 * headline outcomes with an animated SVG illustration. Leads with proof, as
 * agency sites do, and links through to the full study.
 */
export function CaseShowcase({
  studies,
  disclosure,
}: {
  studies: CaseStudy[];
  /** Shown once under the rows — case studies are representative. */
  disclosure: string;
}) {
  return (
    <div className="case-show">
      {studies.map((c, i) => (
        <Reveal key={c.slug} className={`case-row${i % 2 ? "is-flipped" : ""}`}>
          <div className="case-row-copy">
            <span className="case-row-cat">{c.category}</span>
            <h3>{c.title}</h3>
            <p className="case-row-client">{c.client}</p>
            <p>{c.summary}</p>
            <dl className="case-row-metrics">
              {c.metrics.slice(0, 3).map((m) => (
                <div key={m.label}>
                  <dt>{m.label}</dt>
                  <dd>{m.value}</dd>
                </div>
              ))}
            </dl>
            <Link className="text-link" href={caseStudyHref(c.slug)}>
              Read the case study <span aria-hidden>→</span>
            </Link>
          </div>
          <InView className="case-row-vis">
            <CaseVisual
              kind={VISUALS[i % VISUALS.length]}
              highlight={c.metrics[0]?.value}
            />
          </InView>
        </Reveal>
      ))}
      <p className="case-show-note">{disclosure}</p>
    </div>
  );
}
