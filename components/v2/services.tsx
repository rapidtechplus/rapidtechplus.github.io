import { ArrowRight } from "lucide-react";
import { Ico } from "@/components/icon";
import { getService } from "@/content/services";
import type { ServiceRecord } from "@/content/types";
import { v2Services } from "@/content/v2-home";
import { documentHref } from "@/lib/document-href";
import { cn } from "@/lib/utils";
import { SectionHead } from "./section-head";

const serviceHref = (s: ServiceRecord) => documentHref(`/services/${s.slug}`);

function resolve(slugs: string[]): ServiceRecord[] {
  return slugs.flatMap((slug) => {
    const s = getService(slug);
    return s ? [s] : [];
  });
}

/** Services: a flagship AI card with a live network figure, its companion, then the grid. */
export function V2Services() {
  const [flagship] = resolve([v2Services.flagship]);
  const [companion] = resolve([v2Services.companion]);
  const grid = resolve(v2Services.grid);

  return (
    <section
      id="services"
      className="v2-container v2-section"
      aria-labelledby="v2-services-title"
    >
      <SectionHead
        id="v2-services-title"
        eyebrow={v2Services.eyebrow}
        title={v2Services.title}
        highlight={v2Services.highlight}
      />

      <div className="v2-feature-row">
        {flagship && (
          <a
            className="v2-card v2-card--flagship v2-beam v2-reveal"
            href={serviceHref(flagship)}
          >
            <div className="v2-card-main">
              <span className="v2-card-ico">
                <Ico name={flagship.icon} size={22} />
              </span>
              <span className="v2-eyebrow">Flagship</span>
              <h3 className="v2-card-title">{flagship.title}</h3>
              <p className="v2-card-body">{flagship.intro}</p>
              <span className="v2-card-more">
                Explore AI
                <ArrowRight className="v2-card-arrow" size={16} aria-hidden />
              </span>
            </div>
            <NeuralFigure />
          </a>
        )}
        {companion && <ServiceCard service={companion} variant="companion" />}
      </div>

      <div className="v2-grid-3">
        {grid.map((s) => (
          <ServiceCard key={s.slug} service={s} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  variant,
}: {
  service: ServiceRecord;
  variant?: "companion";
}) {
  return (
    <a
      className={cn("v2-card v2-reveal", variant && `v2-card--${variant}`)}
      href={serviceHref(service)}
    >
      <span className="v2-card-ico">
        <Ico name={service.icon} size={20} />
      </span>
      <h3 className="v2-card-title">{service.title}</h3>
      <p className="v2-card-body">{service.intro}</p>
      <span className="v2-card-more">
        Explore
        <ArrowRight className="v2-card-arrow" size={16} aria-hidden />
      </span>
    </a>
  );
}

/** Decorative agent network: pulsing nodes, data flowing along the edges. */
function NeuralFigure() {
  const nodes = [
    { cx: 40, cy: 40, r: 7, fill: "var(--v2-sky)", delay: 0 },
    { cx: 240, cy: 40, r: 7, fill: "var(--v2-sky)", delay: 0.4 },
    { cx: 40, cy: 170, r: 7, fill: "var(--v2-sky)", delay: 0.8 },
    { cx: 240, cy: 170, r: 7, fill: "var(--v2-sky)", delay: 1.2 },
    { cx: 140, cy: 20, r: 5, fill: "var(--v2-steel)", delay: 0.4 },
    { cx: 140, cy: 190, r: 5, fill: "var(--v2-steel)", delay: 0.8 },
  ];
  return (
    <svg
      className="v2-neural"
      viewBox="0 0 280 210"
      width="280"
      height="210"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="v2-flow"
        d="M40 40 L140 105 L240 40 M40 170 L140 105 L240 170 M40 40 L40 170 M240 40 L240 170 M140 20 L140 105 L140 190"
        stroke="var(--v2-line-2)"
        strokeWidth="1.2"
      />
      {nodes.map((n) => (
        <circle
          key={`${n.cx}-${n.cy}`}
          className="v2-node"
          cx={n.cx}
          cy={n.cy}
          r={n.r}
          fill={n.fill}
          style={{ animationDelay: `${n.delay}s` }}
        />
      ))}
      <rect
        x="110"
        y="75"
        width="60"
        height="60"
        rx="18"
        fill="var(--v2-surface-2)"
        stroke="var(--v2-sky)"
        strokeWidth="1.5"
      />
      <path
        d="M128 105h24M140 93v24"
        stroke="var(--v2-sky)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
