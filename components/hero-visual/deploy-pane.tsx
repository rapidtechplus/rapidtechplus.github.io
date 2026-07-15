"use client";

import { DEPLOY_BARS, DEPLOY_STATS, DEPLOY_STEPS } from "./data";

/**
 * Deploy pane — a product mockup of the console's release view: a headline
 * metric row, a throughput chart whose bars grow in, and a pipeline checklist
 * with the final stage still running.
 *
 * Under reduced motion the bars are simply at their final height and the
 * running stage stops shimmering.
 */
export function DeployPane({ reduce }: { reduce: boolean }) {
  return (
    <div className="hv-deploy">
      <div className="hv-dep-head">
        <span className="hv-dep-env">production · eu-west-1</span>
        <span className="hv-dep-health">healthy</span>
      </div>

      <div className="hv-dep-stats">
        {DEPLOY_STATS.map((s) => (
          <div className="hv-dep-stat" key={s.label}>
            <b className="hv-dep-val">{s.value}</b>
            <span className="hv-dep-label">{s.label}</span>
            <span className={`hv-dep-delta hv-dep-delta--${s.trend}`}>
              {s.delta}
            </span>
          </div>
        ))}
      </div>

      <div className="hv-dep-chart">
        {DEPLOY_BARS.map((h, i) => (
          <span
            className={reduce ? "hv-dep-bar" : "hv-dep-bar hv-dep-grow"}
            key={i}
            style={{
              // Custom prop is the animation's target height, so the growth
              // keyframe stays generic and every bar shares one animation.
              ["--h" as string]: `${h}%`,
              ...(reduce ? {} : { animationDelay: `${i * 0.05}s` }),
            }}
          />
        ))}
      </div>

      <div className="hv-dep-steps">
        {DEPLOY_STEPS.map((s) => (
          <span className={`hv-dep-step hv-dep-step--${s.state}`} key={s.label}>
            <i className="hv-dep-tick" />
            {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}
