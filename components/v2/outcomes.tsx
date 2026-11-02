import { getCaseStudy } from "@/content/case-studies";
import { v2Outcomes } from "@/content/v2-home";
import { CountUp } from "./count-up";

/** Stat strip under the hero: one real metric per representative case study. */
export function V2Outcomes() {
  const stats = v2Outcomes.flatMap(({ caseSlug, metric }) => {
    const study = getCaseStudy(caseSlug);
    const m = study?.metrics[metric];
    return study && m ? [{ key: caseSlug, client: study.client, ...m }] : [];
  });

  return (
    <section
      className="v2-container v2-outcomes-section"
      aria-labelledby="v2-outcomes-title"
    >
      <h2 id="v2-outcomes-title" className="v2-sr-only">
        Client outcomes
      </h2>
      <dl className="v2-outcomes">
        {stats.map((s) => (
          <div key={s.key} className="v2-stat v2-glass v2-reveal">
            <dt className="v2-stat-label">{s.label}</dt>
            <dd className="v2-stat-value v2-text-grad">
              <CountUp value={s.value} />
            </dd>
            <dd className="v2-mono-label">{s.client}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
