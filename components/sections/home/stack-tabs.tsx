import Link from "next/link";
import { Ico } from "@/components/icon";
import { Tabs } from "@/components/ui/tabs";
import type { ServiceRecord } from "@/content/types";

/**
 * Tech stack by discipline. Derived from each service's own `technologies`
 * list, so the homepage and the service pages can never disagree. A tech that
 * has its own landing page (`techLinks`) renders as a link.
 */
export function StackTabs({
  services,
  techLinks,
}: {
  services: ServiceRecord[];
  /** Lower-cased tech label → `/technologies/[slug]` href. */
  techLinks: Record<string, string>;
}) {
  return (
    <Tabs
      label="Tech stack by discipline"
      className="tabs-top"
      items={services
        .filter((s) => s.technologies?.length)
        .map((s) => ({
          id: s.slug,
          label: s.label,
          panel: (
            <div className="stack-panel">
              <div className="stack-panel-copy">
                <span className="stack-panel-ico" aria-hidden>
                  <Ico name={s.icon} />
                </span>
                <h3>{s.label}</h3>
                <p>{s.summary}</p>
                <Link className="text-link" href={`/services/${s.slug}`}>
                  Explore {s.label} <span aria-hidden>→</span>
                </Link>
              </div>
              <ul className="stack-chips">
                {s.technologies!.map((t) => {
                  const href = techLinks[t.toLowerCase()];
                  return (
                    <li key={t}>
                      {href ? (
                        <Link href={href}>
                          {t} <span aria-hidden>↗</span>
                        </Link>
                      ) : (
                        <span>{t}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ),
        }))}
    />
  );
}
