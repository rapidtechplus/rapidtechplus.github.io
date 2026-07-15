"use client";

import { useMemo } from "react";
import { useReducedMotion } from "motion/react";

/**
 * AI hero visual — a running "rapidcore" console. A luminous neural core (a
 * pulsing central intelligence ringed by three tilted orbital paths carrying
 * satellite nodes, with signal spokes flowing outward) sits under a mono status
 * bar, is overlaid by gently-drifting technology cards, and is grounded by a
 * live terminal log that streams build output beneath.
 *
 * Pure SVG + CSS, fully decorative (aria-hidden) and reduced-motion safe — under
 * reduced motion nothing rotates, pulses, drifts, or streams; the static
 * composition still reads as an AI system diagram with its stack and console.
 *
 * Geometry and copy are deterministic (fixed rings/angles, static markup) so
 * server and client output match and there is no hydration drift.
 */
const VW = 640;
const VH = 320;
const CX = VW / 2;
const CY = VH / 2;

/** Tilted orbital rings — rx/ry give the 3-D ellipse, dur drives spin speed. */
const RINGS = [
  { rx: 104, ry: 38, dur: 26, reverse: false, sats: [0, 128, 232] },
  { rx: 168, ry: 62, dur: 40, reverse: true, sats: [40, 150, 262, 330] },
  { rx: 236, ry: 88, dur: 58, reverse: false, sats: [18, 96, 200, 300] },
];

/** Technology cards that float over the core — corner-anchored so they never
    crowd the center. `pos` maps to a `.hv-chip--*` placement class. */
const CHIPS = [
  { label: "Next.js", pos: "tl", delay: 0 },
  { label: "Python", pos: "tr", delay: 1.1 },
  { label: "AWS", pos: "bl", delay: 0.6 },
  { label: "PyTorch", pos: "br", delay: 1.7 },
] as const;

/** Terminal log lines — a deterministic build/agent transcript. `tone` styles
    the leading glyph (prompt / info / success). */
const LOG = [
  { tone: "prompt", glyph: "$", text: "rapidcore deploy --agent orchestrator" },
  { tone: "info", glyph: "→", text: "building graph · 128 nodes resolved" },
  { tone: "info", glyph: "→", text: "training pass 04 · loss 0.0142" },
  { tone: "ok", glyph: "✓", text: "shipped to production · p95 42ms" },
] as const;

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

export function HeroVisual() {
  const reduce = useReducedMotion();

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
    <div className="hero-visual" aria-hidden="true">
      {/* Console chrome — frames the core as a running system, not an
          illustration. Copy is decorative telemetry, hidden from AT. */}
      <div className="hv-bar">
        <span className="hv-bar-left">
          <span className="hv-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="hv-title">rapidcore · agent orchestration</span>
        </span>
        <span className="hv-live">live</span>
      </div>

      {/* Stage — the neural core with floating technology cards over it. */}
      <div className="hv-stage">
        <svg
          viewBox={`0 0 ${VW} ${VH}`}
          role="presentation"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <radialGradient id="hv-core" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--spark)" />
              <stop offset="55%" stopColor="var(--accent)" />
              <stop
                offset="100%"
                stopColor="var(--accent-2)"
                stopOpacity="0.15"
              />
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
      </div>

      {/* Live terminal log — streams a deterministic build transcript. */}
      <div className="hv-term">
        {LOG.map((l, i) => (
          <span
            key={l.text}
            className="hv-term-line"
            style={reduce ? undefined : { animationDelay: `${0.4 + i * 1.1}s` }}
          >
            <b className={`hv-term-glyph hv-term-glyph--${l.tone}`}>{l.glyph}</b>
            {l.text}
          </span>
        ))}
        <span className="hv-term-caret" aria-hidden="true" />
      </div>
    </div>
  );
}
