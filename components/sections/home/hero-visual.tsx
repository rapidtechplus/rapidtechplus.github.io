import { HeroScene } from "@/components/hero-scene";

/**
 * The hero's "connected systems" composition (Phase 40): a glass core with the
 * canvas globe inside, three orbital rings, four floating interface panels
 * (analytics, capability list, code editor, idea → impact), isometric cubes,
 * particles, and dashed connection lines.
 *
 * Server-rendered markup styled entirely by `.tv-*` rules in globals.css —
 * CSS transforms and keyframes, no 3D library. Purely decorative, so the whole
 * figure is hidden from assistive tech; the copy beside it carries the
 * meaning. Under reduced motion every drift stops and the composition is a
 * still illustration.
 */

/** Bar heights (percent) for the analytics panel. */
const BARS = [34, 48, 42, 60, 54, 72, 66, 88];

/** Three-face isometric cube in the brand ramp. */
function Cube({ className, size }: { className: string; size: number }) {
  return (
    <span
      className={`tv-cube ${className}`}
      style={{ "--w": `${size}px` } as React.CSSProperties}
    >
      <svg viewBox="0 0 24 28" aria-hidden="true">
        <path
          d="M12 1 23 7.5v13L12 27 1 20.5v-13Z"
          fill="var(--brand-sky-light)"
        />
        <path d="M12 14 23 7.5v13L12 27Z" fill="var(--brand-blue)" />
        <path d="M12 14 1 7.5v13L12 27Z" fill="var(--brand-navy)" />
        <path d="M12 1 23 7.5 12 14 1 7.5Z" fill="var(--brand-sky-light)" />
      </svg>
    </span>
  );
}

function Avatar() {
  return (
    <span className="tv-avatar">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    </span>
  );
}

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function HeroVisual() {
  return (
    <div className="tv" aria-hidden="true">
      {/* Connection lines (viewBox coordinates are percentages of the box). */}
      <svg
        className="tv-lines"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M36 22 C 40 30, 44 36, 50 44" />
        <path d="M69 30 C 64 36, 60 40, 56 46" />
        <path d="M30 62 C 36 60, 42 56, 48 52" />
        <path d="M58 56 C 62 64, 66 72, 72 80" />
      </svg>

      <div className="tv-stage">
        <span className="tv-ring r3" />
        <span className="tv-ring r2" />
        {/* The core is a dark surface, so the globe uses its dark palette. */}
        <div className="tv-core surface-dark">
          <HeroScene />
          <span className="tv-core-gloss" />
        </div>
        <span className="tv-ring r1" />
      </div>

      {/* Analytics */}
      <div className="tv-panel is-ai">
        <div className="tv-panel-head">
          <span>AI insights</span>
          <span className="arrow">→</span>
        </div>
        <div className="tv-bars">
          {BARS.map((h, i) => (
            <i
              key={i}
              style={
                {
                  "--h": `${h}%`,
                  "--d": `${-i * 0.35}s`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      </div>

      {/* Capability list */}
      <div className="tv-panel is-build">
        <p className="tv-big">
          Build
          <br />
          Innovate
          <br />
          Scale
        </p>
        <div className="tv-row">
          <Avatar />
          <span>
            <b>Platforms</b>
            <small>Multi-tenant SaaS</small>
          </span>
        </div>
        <div className="tv-row">
          <Avatar />
          <span>
            <b>Agents</b>
            <small>Grounded, evaluated</small>
          </span>
        </div>
      </div>

      {/* Code editor */}
      <div className="tv-panel is-code surface-dark">
        <div className="tv-code-dots">
          <i />
          <i />
          <i />
        </div>
        <pre>
          <span className="k">const</span> agent ={" "}
          <span className="k">await</span> <span className="f">deploy</span>(
          {"{"}
          {"\n"} model: <span className="s">&quot;production&quot;</span>,{"\n"}{" "}
          tools: [<span className="f">search</span>,{" "}
          <span className="f">crm</span>],
          {"\n"} guardrails: <span className="k">true</span>,{"\n"}
          {"}"});
        </pre>
      </div>

      {/* Idea → impact */}
      <div className="tv-panel is-impact">
        <div className="tv-panel-head">
          <p className="tv-big">
            From idea
            <br />
            to impact
          </p>
          <span className="tv-go">
            <ArrowUpRight />
          </span>
        </div>
        <svg
          className="tv-line"
          viewBox="0 0 120 44"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="tv-area" x1="0" x2="0" y1="0" y2="1">
              <stop
                offset="0"
                stopColor="var(--brand-sky)"
                stopOpacity="0.35"
              />
              <stop offset="1" stopColor="var(--brand-sky)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 36 C 14 34, 22 30, 34 26 S 56 24, 68 18 S 92 12, 120 4 V44 H0 Z"
            fill="url(#tv-area)"
          />
          <path
            d="M0 36 C 14 34, 22 30, 34 26 S 56 24, 68 18 S 92 12, 120 4"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <span className="tv-pill">
        <i /> pipeline · passing
      </span>

      <Cube className="c1" size={30} />
      <Cube className="c2" size={22} />
      <Cube className="c3" size={18} />
      <Cube className="c4" size={26} />

      <span className="tv-dot d1" />
      <span className="tv-dot d2" />
      <span className="tv-dot d3" />
      <span className="tv-dot d4" />
    </div>
  );
}
