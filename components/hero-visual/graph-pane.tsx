"use client";

import { useMemo } from "react";

import { CHIPS, CX, CY, RINGS, VH, VW } from "./data";

type Sat = { x: number; y: number; r: number; key: string };

/** Round to 2dp — trig output differs in the last float bits between the
    server and browser math libraries, which caused hydration mismatches. */
const r2 = (n: number) => Math.round(n * 100) / 100;

function ringSats(rx: number, ry: number, angles: number[], ri: number): Sat[] {
  return angles.map((deg, i) => {
    const t = (deg * Math.PI) / 180;
    return {
      x: r2(CX + rx * Math.cos(t)),
      y: r2(CY + ry * Math.sin(t)),
      r: 4 + ((ri + i) % 2) * 1.6,
      key: `${ri}-${i}`,
    };
  });
}

/**
 * Graph pane — a luminous neural core: a pulsing central intelligence ringed by
 * three tilted orbital paths carrying satellite nodes, with signal spokes
 * flowing outward and technology cards drifting over the corners.
 */
export function GraphPane({ reduce }: { reduce: boolean }) {
  // Signal spokes radiate from the core toward evenly-spaced outer points.
  const spokes = useMemo(() => {
    const count = 10;
    return Array.from({ length: count }, (_, i) => {
      const t = (i / count) * Math.PI * 2;
      return {
        x2: r2(CX + 290 * Math.cos(t)),
        y2: r2(CY + 140 * Math.sin(t)),
        delay: (i % 5) * 0.5,
        key: `spoke-${i}`,
      };
    });
  }, []);

  return (
    <>
      <svg
        viewBox={`0 0 ${VW} ${VH}`}
        role="presentation"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="hv-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--spark)" />
            <stop offset="55%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--accent-2)" stopOpacity="0.15" />
          </radialGradient>
          <radialGradient id="hv-sat" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--spark)" />
            <stop offset="100%" stopColor="var(--accent-2)" />
          </radialGradient>
          <linearGradient id="hv-spoke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--accent-2)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Radiating signal spokes */}
        <g className="hv-spokes">
          {spokes.map((s) => (
            <line
              key={s.key}
              x1={CX}
              y1={CY}
              x2={s.x2}
              y2={s.y2}
              stroke="url(#hv-spoke)"
              strokeWidth="1.5"
              strokeLinecap="round"
              className={reduce ? undefined : "hv-spoke"}
              style={reduce ? undefined : { animationDelay: `${s.delay}s` }}
            />
          ))}
        </g>

        {/* Orbital rings — each group spins around the core */}
        {RINGS.map((ring, ri) => (
          <g
            key={ri}
            className={reduce ? "hv-orbit" : "hv-orbit hv-spin"}
            style={
              reduce
                ? undefined
                : {
                    animationDuration: `${ring.dur}s`,
                    animationDirection: ring.reverse ? "reverse" : "normal",
                  }
            }
          >
            <ellipse
              cx={CX}
              cy={CY}
              rx={ring.rx}
              ry={ring.ry}
              fill="none"
              stroke="var(--border-strong)"
              strokeWidth="1"
              opacity="0.7"
            />
            {ringSats(ring.rx, ring.ry, ring.sats, ri).map((sat) => (
              <circle
                key={sat.key}
                cx={sat.x}
                cy={sat.y}
                r={sat.r}
                fill="url(#hv-sat)"
                className={reduce ? undefined : "hv-node"}
              />
            ))}
          </g>
        ))}

        {/* Pulsing core */}
        <g className="hv-core-group">
          <circle
            cx={CX}
            cy={CY}
            r="46"
            fill="var(--accent-soft)"
            className={reduce ? undefined : "hv-halo"}
          />
          <circle cx={CX} cy={CY} r="20" fill="url(#hv-core)" />
          <circle
            cx={CX}
            cy={CY}
            r="9"
            fill="var(--spark)"
            className={reduce ? undefined : "hv-core-dot"}
          />
        </g>
      </svg>

      {/* Floating technology cards */}
      <div className="hv-chips">
        {CHIPS.map((c) => (
          <span
            key={c.label}
            className={`hv-chip hv-chip--${c.pos}`}
            style={reduce ? undefined : { animationDelay: `${c.delay}s` }}
          >
            <span className="hv-chip-dot" />
            {c.label}
          </span>
        ))}
      </div>
    </>
  );
}
