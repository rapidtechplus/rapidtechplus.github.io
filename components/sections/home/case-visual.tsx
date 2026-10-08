/**
 * Abstract, animated SVG illustrations for case-study rows — one motif per
 * kind of outcome, drawn in theme tokens (currentColor + CSS vars). Purely
 * decorative; all motion is CSS and stops under reduced motion.
 */
export type CaseVisualKind = "chart" | "network" | "grid";

export function CaseVisual({
  kind,
  highlight,
}: {
  kind: CaseVisualKind;
  /** Headline metric value for the chart badge (e.g. "3×"), from the study. */
  highlight?: string;
}) {
  return (
    <svg
      className={`case-vis case-vis-${kind}`}
      viewBox="0 0 480 320"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`cv-fill-${kind}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--accent)" stopOpacity="0.35" />
          <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Window chrome */}
      <rect
        className="cv-frame"
        x="16"
        y="16"
        width="448"
        height="288"
        rx="16"
      />
      <circle className="cv-dot" cx="40" cy="38" r="4" />
      <circle className="cv-dot" cx="54" cy="38" r="4" />
      <circle className="cv-dot" cx="68" cy="38" r="4" />
      <line className="cv-rule" x1="16" y1="58" x2="464" y2="58" />

      {kind === "chart" && (
        <g>
          {[0, 1, 2, 3].map((i) => (
            <line
              key={i}
              className="cv-grid"
              x1="48"
              x2="440"
              y1={110 + i * 44}
              y2={110 + i * 44}
            />
          ))}
          <path
            className="cv-area"
            fill={`url(#cv-fill-${kind})`}
            d="M48 250 L104 236 L160 240 L216 204 L272 196 L328 150 L384 132 L440 96 L440 262 L48 262 Z"
          />
          <path
            className="cv-line"
            pathLength={1}
            d="M48 250 L104 236 L160 240 L216 204 L272 196 L328 150 L384 132 L440 96"
          />
          <circle className="cv-head" cx="440" cy="96" r="6" />
          {highlight ? (
            <>
              <rect
                className="cv-pill"
                x="356"
                y="72"
                width="76"
                height="26"
                rx="13"
              />
              <text className="cv-pill-text" x="394" y="89" textAnchor="middle">
                {highlight}
              </text>
            </>
          ) : null}
        </g>
      )}

      {kind === "network" && (
        <g>
          {[
            [240, 180, 120, 110],
            [240, 180, 360, 110],
            [240, 180, 110, 250],
            [240, 180, 370, 250],
            [240, 180, 240, 90],
          ].map(([x1, y1, x2, y2], i) => (
            <line
              key={i}
              className="cv-edge"
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          ))}
          {[
            [120, 110],
            [360, 110],
            [110, 250],
            [370, 250],
            [240, 90],
          ].map(([cx, cy], i) => (
            <circle
              key={i}
              className="cv-node"
              cx={cx}
              cy={cy}
              r="10"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          ))}
          <circle className="cv-core-ring" cx="240" cy="180" r="34" />
          <circle className="cv-core" cx="240" cy="180" r="20" />
        </g>
      )}

      {kind === "grid" && (
        <g>
          {[0, 1, 2].map((col) =>
            [0, 1].map((row) => (
              <g
                key={`${col}-${row}`}
                className="cv-card"
                style={{ animationDelay: `${(col + row * 3) * 0.18}s` }}
              >
                <rect
                  x={48 + col * 134}
                  y={80 + row * 108}
                  width="118"
                  height="92"
                  rx="10"
                />
                <rect
                  className="cv-card-img"
                  x={58 + col * 134}
                  y={90 + row * 108}
                  width="98"
                  height="44"
                  rx="6"
                />
                <rect
                  className="cv-card-line"
                  x={58 + col * 134}
                  y={144 + row * 108}
                  width="70"
                  height="8"
                  rx="4"
                />
                <rect
                  className="cv-card-line short"
                  x={58 + col * 134}
                  y={158 + row * 108}
                  width="44"
                  height="6"
                  rx="3"
                />
              </g>
            )),
          )}
        </g>
      )}
    </svg>
  );
}
