import Link from "next/link";
import { Ico } from "@/components/icon";
import { Tabs } from "@/components/ui/tabs";
import type { IndustrySector } from "@/content/industries";

/**
 * Industries as a tabbed explorer: a sector rail beside a detail panel with
 * the sector's overview, what we build, and a link to its page. Replaces a
 * uniform card grid; every sector's copy comes from the industries collection.
 */
export function IndustryTabs({ sectors }: { sectors: IndustrySector[] }) {
  return (
    <Tabs
      label="Industries"
      className="tabs-rail"
      items={sectors.map((s) => ({
        id: s.slug,
        label: s.label,
        icon: <Ico name={s.icon} />,
        panel: (
          <div className="ind-panel">
            <div className="ind-panel-head">
              <span className="ind-panel-ico" aria-hidden>
                <Ico name={s.icon} />
              </span>
              <h3>{s.title}</h3>
            </div>
            <p>{s.overview}</p>
            <ul className="ind-caps">
              {s.capabilities.map((c) => (
                <li key={c.title}>
                  <Ico name={c.icon} />
                  <div>
                    <strong>{c.title}</strong>
                    <span>{c.body}</span>
                  </div>
                </li>
              ))}
            </ul>
            <Link className="text-link" href={`/industries/${s.slug}`}>
              Explore {s.label} <span aria-hidden>→</span>
            </Link>
          </div>
        ),
      }))}
    />
  );
}
