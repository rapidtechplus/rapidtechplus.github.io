import type { ReactNode } from "react";

/**
 * Eyebrow + two-tone heading (+ optional lead) used by every v2 section. The
 * `highlight` half of the title takes the brand gradient.
 */
export function SectionHead({
  id,
  eyebrow,
  title,
  highlight,
  lead,
  children,
}: {
  /** id of the `<h2>`, referenced by the section's `aria-labelledby`. */
  id: string;
  eyebrow: string;
  title: string;
  highlight?: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <div className="v2-section-head v2-reveal">
      <span className="v2-eyebrow">{eyebrow}</span>
      <h2 id={id} className="v2-h2">
        {title}
        {highlight && (
          <>
            {" "}
            <span className="v2-text-grad">{highlight}</span>
          </>
        )}
      </h2>
      {lead && <p className="v2-lead">{lead}</p>}
      {children}
    </div>
  );
}
