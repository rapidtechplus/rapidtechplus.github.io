import type { ReactNode } from "react";
import { Ico } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";

/** Centered eyebrow + heading + optional lead used above card grids. */
export function SectionHead({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <Reveal className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </Reveal>
  );
}

/** Icon + title + body card, wrapped in a reveal. */
export function IconCard({
  icon,
  title,
  body,
  delay = 0,
}: {
  icon: string;
  title: string;
  body: string;
  delay?: number;
}) {
  return (
    <Reveal className="card" delay={delay}>
      <div className="ico">
        <Ico name={icon} />
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
    </Reveal>
  );
}

/** Connected, numbered process step for the .timeline grid. */
export function TimelineStep({
  n,
  title,
  body,
  delay = 0,
}: {
  n: number | string;
  title: string;
  body: string;
  delay?: number;
}) {
  return (
    <Reveal className="step" delay={delay}>
      <div className="n">{n}</div>
      <h3>{title}</h3>
      <p>{body}</p>
    </Reveal>
  );
}

/**
 * Paired primary actions used across the site — "Get A Quote" (project work)
 * and "Hire Us" (dedicated talent/teams). Rendered as a compact action row so
 * it can drop into any section's closing "desire" moment.
 */
export function CtaActions({ className }: { className?: string }) {
  return (
    <div className={["cta-actions", className].filter(Boolean).join(" ")}>
      <ButtonLink href="/contact">Get A Quote →</ButtonLink>
      <ButtonLink href="/contact" variant="ghost">
        Hire Us
      </ButtonLink>
    </div>
  );
}

/**
 * Section-level dual call-to-action panel. Drops a heading, supporting line,
 * and the paired Get A Quote / Hire Us actions at the end of a section.
 */
export function DualCta({ title, body }: { title: string; body: string }) {
  return (
    <Reveal className="panel dual-cta" style={{ marginTop: 44 }}>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "1.7rem" }}>{title}</h2>
        <p style={{ maxWidth: "56ch", margin: "0 auto 22px" }}>{body}</p>
        <CtaActions className="cta-actions-center" />
      </div>
    </Reveal>
  );
}

/** Full-width call-to-action banner with the paired primary actions. */
export function CtaBanner({ title, body }: { title: string; body: string }) {
  return (
    <section>
      <div className="container">
        <Reveal className="cta-banner">
          <h2>{title}</h2>
          <p>{body}</p>
          <CtaActions className="cta-actions-center" />
        </Reveal>
      </div>
    </section>
  );
}
