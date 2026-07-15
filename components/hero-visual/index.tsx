"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

import { CodePane } from "./code-pane";
import { DeployPane } from "./deploy-pane";
import { GraphPane } from "./graph-pane";
import { PANE_INTERVAL_MS, PANES } from "./data";

/** Terminal log lines — a deterministic build/agent transcript. `tone` styles
    the leading glyph (prompt / info / success). */
const LOG = [
  { tone: "prompt", glyph: "$", text: "rapidcore deploy --agent orchestrator" },
  { tone: "info", glyph: "→", text: "building graph · 128 nodes resolved" },
  { tone: "info", glyph: "→", text: "training pass 04 · loss 0.0142" },
  { tone: "ok", glyph: "✓", text: "shipped to production · p95 42ms" },
] as const;

/**
 * AI hero visual — a running "rapidcore" console. Under a mono status bar sits a
 * tab strip that cycles itself through three panes: the neural **Graph**, a
 * self-typing **Code** snippet, and a **Deploy** dashboard. A live terminal log
 * streams build output beneath, grounding the whole thing as a real system
 * rather than an illustration.
 *
 * Pure SVG + CSS and fully decorative (`aria-hidden`), so the tab strip is a
 * picture of tabs, not a real one — there is nothing here for a keyboard or
 * screen reader to reach, and the hero's meaning lives entirely in the adjacent
 * copy. That is also why the tabs are non-interactive: a control that looks
 * clickable but is hidden from assistive tech would be a trap.
 *
 * Reduced-motion safe: nothing rotates, pulses, drifts, types, grows, or
 * cycles — the console holds on the Graph pane and every pane's content is
 * shown in its final, settled state.
 */
export function HeroVisual() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % PANES.length),
      PANE_INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div className="hero-visual" aria-hidden="true">
      {/* Console chrome — frames the panes as a running system. Copy is
          decorative telemetry, hidden from AT. */}
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

      {/* Tab strip — the moving underline tracks the auto-cycling pane. */}
      <div className="hv-tabs">
        {PANES.map((p, i) => (
          <span
            key={p.id}
            className={`hv-tab${i === active ? " is-active" : ""}`}
          >
            {p.label}
          </span>
        ))}
        <span
          className="hv-tab-ink"
          style={{ ["--i" as string]: active }}
        />
      </div>

      {/* Panes — all three stay mounted so their CSS animations restart on each
          visit and the box never reflows as content swaps. */}
      <div className="hv-panes">
        <div className={`hv-pane${active === 0 ? " is-active" : ""}`}>
          <GraphPane reduce={!!reduce} />
        </div>
        <div className={`hv-pane${active === 1 ? " is-active" : ""}`}>
          {/* Keyed on visit so the typing animation replays each cycle. */}
          <CodePane key={`code-${active === 1}`} reduce={!!reduce} />
        </div>
        <div className={`hv-pane${active === 2 ? " is-active" : ""}`}>
          <DeployPane key={`deploy-${active === 2}`} reduce={!!reduce} />
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
