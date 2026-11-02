import type { CSSProperties } from "react";
import { v2Radar, type RadarRing } from "@/content/v2-home";
import { cn } from "@/lib/utils";
import { SectionHead } from "./section-head";

/** Radius of each ring's blips, as % of the disc (centre = 50%). */
const RING_RADIUS: Record<RadarRing, number> = {
  adopt: 12,
  trial: 26,
  assess: 41,
};
/** One sweep, in seconds — must match `.v2-radar-sweep` in v2.css. */
const SWEEP_S = 6;

/**
 * Tech radar. The disc is decorative (a conic sweep that flashes each blip
 * as it passes); the same information is the visible legend beside it, which
 * is also what assistive tech reads.
 */
export function V2TechRadar() {
  const blips = v2Radar.entries.map((e) => {
    const rad = (e.angle * Math.PI) / 180;
    const r = RING_RADIUS[e.ring];
    const x = 50 + r * Math.sin(rad);
    return {
      ...e,
      flip: x > 55,
      style: {
        left: `${x.toFixed(2)}%`,
        top: `${(50 - r * Math.cos(rad)).toFixed(2)}%`,
      } satisfies CSSProperties,
      // Flash exactly when the clockwise sweep (starting at 12 o'clock) arrives.
      delay: `${((e.angle / 360) * SWEEP_S).toFixed(2)}s`,
    };
  });

  return (
    <section
      id="stack"
      className="v2-container v2-section"
      aria-labelledby="v2-radar-title"
    >
      <div className="v2-radar-layout">
        <div className="v2-radar-copy">
          <SectionHead
            id="v2-radar-title"
            eyebrow={v2Radar.eyebrow}
            title={v2Radar.title}
            highlight={v2Radar.highlight}
            lead={v2Radar.lead}
          >
            <ul className="v2-legend">
              {v2Radar.rings.map((ring) => (
                <li key={ring.id} className="v2-legend-ring">
                  <span
                    className={`v2-legend-dot v2-ring-${ring.id}`}
                    aria-hidden="true"
                  />
                  <strong>{ring.label}</strong>
                  <span className="v2-legend-note">— {ring.note}</span>
                  <span className="v2-legend-items">
                    {v2Radar.entries
                      .filter((e) => e.ring === ring.id)
                      .map((e) => e.label)
                      .join(" · ")}
                  </span>
                </li>
              ))}
            </ul>
          </SectionHead>
        </div>

        <div className="v2-radar-wrap v2-reveal" aria-hidden="true">
          <div className="v2-radar">
            <span className="v2-radar-ring v2-radar-ring--1" />
            <span className="v2-radar-ring v2-radar-ring--2" />
            <span className="v2-radar-axis v2-radar-axis--v" />
            <span className="v2-radar-axis v2-radar-axis--h" />
            <span className="v2-radar-sweep" />
            {blips.map((b) => (
              <span
                key={b.label}
                className={cn("v2-blip", b.flip && "v2-blip--flip")}
                style={b.style}
              >
                <span
                  className={`v2-blip-dot v2-ring-${b.ring}`}
                  style={{ animationDelay: b.delay }}
                />
                <span className="v2-blip-label">{b.label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
