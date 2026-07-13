import type { ReactNode } from "react";
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
      <div className="ico">{icon}</div>
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

/** Full-width call-to-action banner. */
export function CtaBanner({
  title,
  body,
  ctaLabel,
  ctaHref = "/contact",
}: {
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref?: string;
}) {
  return (
    <section>
      <div className="container">
        <Reveal className="cta-banner">
          <h2>{title}</h2>
          <p>{body}</p>
          <ButtonLink href={ctaHref}>{ctaLabel}</ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
