import type { ReactNode } from "react";
import Link from "next/link";
import { Ico } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Breadcrumbs, type Crumb } from "@/components/sections/breadcrumbs";
import { CONTACT_HREF } from "@/config/site";

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

/**
 * Inner-page hero: breadcrumb trail + eyebrow + h1 + optional lead. Extracted
 * from the near-identical `.page-hero` block that was inlined on every inner
 * page. `title` accepts rich nodes so pages keep their `.grad-text` highlight.
 * `container` lets legal/prose pages use the narrower reading width.
 */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
  container = "container",
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  container?: string;
}) {
  return (
    <section className="page-hero">
      <div className={`${container} container`}>
        <Breadcrumbs items={crumbs} />
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {lead ? <p>{lead}</p> : null}
      </div>
    </section>
  );
}

/**
 * Icon + title + body card, wrapped in a reveal. When `href` is supplied the
 * whole card becomes a link with a hover arrow (used by `RelatedGrid`).
 */
export function IconCard({
  icon,
  title,
  body,
  href,
  delay = 0,
}: {
  icon: string;
  title: string;
  body: string;
  href?: string;
  delay?: number;
}) {
  const inner = (
    <>
      <div className="ico">
        <Ico name={icon} />
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
      {href ? (
        <span className="card-more" aria-hidden>
          →
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Reveal className="card card-link" delay={delay}>
        <Link href={href} className="card-link-a">
          {inner}
        </Link>
      </Reveal>
    );
  }

  return (
    <Reveal className="card" delay={delay}>
      {inner}
    </Reveal>
  );
}

/**
 * A grid of cross-linked cards ("related services", "related industries", …).
 * Each item links to its own detail page.
 */
export function RelatedGrid({
  eyebrow,
  title,
  items,
  columns = 3,
}: {
  eyebrow: string;
  title: string;
  items: { icon: string; title: string; body: string; href: string }[];
  columns?: 2 | 3 | 4;
}) {
  if (items.length === 0) return null;
  return (
    <section className="band">
      <div className="container-wide container">
        <SectionHead eyebrow={eyebrow} title={title} />
        <div className={`grid-${columns} grid`}>
          {items.map((it, i) => (
            <IconCard
              key={it.href}
              icon={it.icon}
              title={it.title}
              body={it.body}
              href={it.href}
              delay={i * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/** A single "value + label" metric stat (e.g. case-study outcomes). */
export function MetricStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="case-metric">
      <span className="case-metric-value">{value}</span>
      <span className="case-metric-label">{label}</span>
    </div>
  );
}

/** A short pill/tag label (categories, chips). Defaults to the `.chip` style. */
export function Tag({
  children,
  className = "chip",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={className}>{children}</span>;
}

/** A testimonial / pull quote card. */
export function Quote({
  quote,
  name,
  role,
  delay = 0,
}: {
  quote: string;
  name: string;
  role: string;
  delay?: number;
}) {
  return (
    <Reveal className="quote" delay={delay}>
      <span className="mark" aria-hidden>
        &ldquo;
      </span>
      <p>{quote}</p>
      <div className="who">
        <div className="name">{name}</div>
        <div className="role">{role}</div>
      </div>
    </Reveal>
  );
}

/**
 * Accessible FAQ accordion built on native details/summary (no JS). Extracted
 * from the homepage so any page (and future `/resources/faq`) can reuse it.
 */
export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq-list">
      {items.map((f) => (
        <Reveal className="faq-item" key={f.q}>
          <details>
            <summary>{f.q}</summary>
            <div className="faq-body">{f.a}</div>
          </details>
        </Reveal>
      ))}
    </div>
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
      <ButtonLink href={CONTACT_HREF}>Get A Quote →</ButtonLink>
      <ButtonLink href={CONTACT_HREF} variant="ghost">
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
