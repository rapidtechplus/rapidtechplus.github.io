import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

type Step = { icon: string; title: string; body: string };

/**
 * Scroll-told process: a sticky intro column beside a vertical list of
 * stages. A rail (`.proc-steps::before/::after`) fills as the section scrolls through the
 * viewport (CSS scroll-driven animation where supported; a static full rail
 * elsewhere — see `.proc-steps` in globals.css). No JS scroll listeners.
 */
export function ProcessScroll({
  eyebrow,
  title,
  lead,
  steps,
  actions,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  steps: readonly Step[];
  actions?: ReactNode;
}) {
  return (
    <div className="proc">
      <div className="proc-intro">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{lead}</p>
        {actions}
      </div>
      <ol className="proc-steps">
        {steps.map((s, i) => (
          <li key={s.title}>
            <Reveal className="proc-step" delay={0.04 * i}>
              <span className="proc-n">{s.icon}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
