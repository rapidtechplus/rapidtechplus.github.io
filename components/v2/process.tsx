import { serviceProcess } from "@/content/services";
import { v2Process } from "@/content/v2-home";
import { SectionHead } from "./section-head";

/**
 * The shared delivery process (`serviceProcess`, also used on every service
 * page): a track with a travelling pulse, and steps that light up in turn.
 */
export function V2Process() {
  return (
    <section
      id="process"
      className="v2-container v2-section"
      aria-labelledby="v2-process-title"
    >
      <SectionHead
        id="v2-process-title"
        eyebrow={v2Process.eyebrow}
        title={v2Process.title}
        highlight={v2Process.highlight}
      />
      <div className="v2-track" aria-hidden="true">
        <span className="v2-track-dot" />
      </div>
      <ol className="v2-steps">
        {serviceProcess.map((step, i) => (
          <li key={step.title} className="v2-step v2-glass v2-reveal">
            <span className="v2-step-num" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="v2-step-title">{step.title}</h3>
            <p className="v2-step-body">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
