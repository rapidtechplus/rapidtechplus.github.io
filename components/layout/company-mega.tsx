"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Ico } from "@/components/icon";
import { MegaLink } from "@/components/layout/mega-link";
import type { MegaItem } from "@/content/site";

/**
 * Strips the trailing slash so a content href (`/about`) compares equal to the
 * pathname Next serves it at (`/about/` — the export sets `trailingSlash`).
 */
const normalize = (path: string) => path.replace(/\/+$/, "") || "/";

/**
 * The Company panel — a three-column trust surface: navigation sidebar,
 * highlights + stats, and the company story. A promotional banner closes it.
 *
 * The columns collapse progressively (see `.mega.is-company` in globals.css):
 * three at ≥1201px, two once the story column drops, and on mobile the shared
 * accordion rules leave the sidebar and stats only — the sidebar *is* the
 * navigation, so it is the one column that must always survive.
 */
export function CompanyMega({
  item,
  onNavigate,
}: {
  item: MegaItem;
  onNavigate: () => void;
}) {
  const pathname = usePathname();
  const panel = item.company;
  if (!panel || !item.links) return null;

  const { feature, banner } = panel;
  const [primary, ...secondary] = feature.actions;
  const current = normalize(pathname);

  return (
    <div className="mega is-company">
      <div className="mega-inner">
        {/* Left — company navigation. */}
        <nav className="mm-co-nav" aria-label={`${item.label} navigation`}>
          <p className="mm-co-label">{panel.navLabel}</p>
          {item.links.map((link) => (
            <MegaLink
              key={link.label}
              link={link}
              active={normalize(link.href) === current}
              onNavigate={onNavigate}
            />
          ))}
        </nav>

        {/* Middle — what we build, then the trust indicators. */}
        <div className="mm-co-mid">
          <p className="mm-co-label">{panel.highlightsLabel}</p>
          <ul className="mm-co-cards">
            {panel.highlights.map((h) => (
              <li className="mm-co-card" key={h.title}>
                <span className="mm-co-card-head">
                  <span className="mm-co-card-ico" aria-hidden>
                    <Ico name={h.icon} />
                  </span>
                  <span className="mm-co-card-title">{h.title}</span>
                </span>
                <span className="mm-co-card-body">{h.body}</span>
              </li>
            ))}
          </ul>

          <p className="mm-co-label mm-co-label-stats">{panel.statsLabel}</p>
          <dl className="mm-co-stats">
            {panel.stats.map((s) => (
              <div className="mm-co-stat" key={s.label}>
                <dt className="mm-co-stat-label">{s.label}</dt>
                <dd className="mm-co-stat-value">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right — the company story and its conversion actions. */}
        <aside className="mm-co-feature">
          <div className="mm-co-viz" aria-hidden>
            <span className="mm-co-orb">
              <Ico name={feature.icon} />
            </span>
          </div>
          <p className="mm-co-eyebrow">{feature.eyebrow}</p>
          <h4 className="mm-co-title">{feature.title}</h4>
          <p className="mm-co-body">{feature.body}</p>
          <div className="mm-co-actions">
            <Link
              className="mm-co-cta"
              href={primary.href}
              onClick={onNavigate}
            >
              {primary.label}
              <span aria-hidden>→</span>
            </Link>
            {secondary.map((action) => (
              <Link
                key={action.label}
                className="mm-co-ghost"
                href={action.href}
                onClick={onNavigate}
              >
                {action.label}
              </Link>
            ))}
          </div>
        </aside>

        {/* Foot — promotional banner across all columns. */}
        <div className="mm-co-banner">
          <div className="mm-co-banner-text">
            <p className="mm-co-banner-title">{banner.title}</p>
            <p className="mm-co-banner-body">{banner.body}</p>
          </div>
          <Link
            className={cn("mm-co-cta", "mm-co-banner-cta")}
            href={banner.cta.href}
            onClick={onNavigate}
          >
            {banner.cta.label}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
