import type { ReactNode } from "react";
import Link from "next/link";
import { Ico } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { TextReveal } from "@/components/text-reveal";
import { ButtonLink } from "@/components/ui/button";
import { Breadcrumbs, type Crumb } from "@/components/sections/breadcrumbs";
import { CONTACT_HREF, CTA_LABEL } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Editorial section head: eyebrow + heading, with the lead beside it. With
 * `action` (an inline link such as "View all services") the lead moves under
 * the heading and the action aligns with the heading's baseline.
 */
export function SectionHead({
  eyebrow,
  title,
  children,
  action,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <Reveal className={cn("section-head", action && "has-action")}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>
        <TextReveal text={title} />
      </h2>
      {children ? <p>{children}</p> : null}
      {action ? <div className="section-head-action">{action}</div> : null}
    </Reveal>
  );
}

/** Inline text link with a nudging arrow ("View all services"). */
export function ArrowLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className="link-arrow">
      {children}
      <span className="arrow" aria-hidden>
        →
      </span>
    </Link>
  );
}

/**
 * Inner-page hero: breadcrumb trail + eyebrow + h1 + optional lead. Extracted
 * from the near-identical `.page-hero` block that was inlined on every inner
 * page. `title` accepts rich nodes so pages keep their `.grad-text` highlight.
 * `container` lets legal/prose pages use the narrower reading width.
 *
 * `tone` — "light" (default, Phase 40) keeps the hero on the page surface
 * with the sky glow and grid behind it — the enterprise-light composition
 * every page opens with; "dark" renders it as a navy band for the rare page
 * that wants the contrast.
 */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
  actions,
  container = "container",
  tone = "light",
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  /** Optional CTA row rendered inside the hero, under the lead. */
  actions?: ReactNode;
  container?: string;
  tone?: "dark" | "light";
}) {
  return (
    <section className={cn("page-hero", tone === "dark" && "surface-dark")}>
      <div className={`${container} container`}>
        <Breadcrumbs items={crumbs} />
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {lead ? <p>{lead}</p> : null}
        {actions ? <div className="page-hero-actions">{actions}</div> : null}
      </div>
    </section>
  );
}

/**
 * Icon + title + body card, wrapped in a reveal. When `href` is supplied the
 * whole card becomes a link, with a "Learn more" cue pinned to its foot
 * (used by `RelatedGrid` and the homepage services grid).
 */
export function IconCard({
  icon,
  title,
  body,
  href,
  more = "Learn more",
  delay = 0,
}: {
  icon: string;
  title: string;
  body: string;
  href?: string;
  /** Label of the link cue shown when `href` is set. */
  more?: string;
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
        <span className="card-more">
          {more}
          <span className="arrow" aria-hidden>
            →
          </span>
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

/**
 * A case-study card — icon + category, title, client, summary, and the outcome
 * metrics. Shared by the `/case-studies` hub, the service/AI landing "proof"
 * sections, and the related grid on a study's own page, so the card has one
 * definition rather than three copies. Supplying `href` makes the whole card a
 * link to the study's detail page.
 */
export function CaseCard({
  icon,
  title,
  client,
  category,
  summary,
  metrics,
  href,
  delay = 0,
}: {
  icon: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  metrics: readonly { value: string; label: string }[];
  href?: string;
  delay?: number;
}) {
  const inner = (
    <>
      <div className="case-top">
        <span className="ico">
          <Ico name={icon} />
        </span>
        <Tag className="case-cat">{category}</Tag>
      </div>
      <h3>{title}</h3>
      <p className="case-client">{client}</p>
      <p>{summary}</p>
      <div className="case-metrics">
        {metrics.map((m) => (
          <MetricStat key={m.label} value={m.value} label={m.label} />
        ))}
      </div>
    </>
  );

  if (href) {
    return (
      <Reveal className="card case-card card-link" delay={delay}>
        <Link href={href} className="card-link-a">
          {inner}
        </Link>
      </Reveal>
    );
  }

  return (
    <Reveal className="card case-card" delay={delay}>
      {inner}
    </Reveal>
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
 * Paired primary actions used across the site — the primary conversion
 * (`CTA_LABEL`, project work) and "Hire Us" (dedicated talent/teams).
 * Rendered as a compact action row so it can drop into any section's closing
 * "desire" moment. `secondary` swaps the second action for a custom one.
 */
export function CtaActions({
  className,
  consult = false,
  secondary,
}: {
  className?: string;
  /** Frame the secondary action as a lower-friction "Book a free consultation"
   * instead of "Hire Us" — used on the CTA banner and hero. */
  consult?: boolean;
  /** A custom secondary action; overrides `consult`. */
  secondary?: { label: string; href: string };
}) {
  const second = secondary ?? {
    label: consult ? "Book a free consultation" : "Hire Us",
    href: CONTACT_HREF,
  };
  return (
    <div className={cn("cta-actions", className)}>
      <ButtonLink href={CONTACT_HREF}>
        {CTA_LABEL}
        <span className="btn-arrow" aria-hidden>
          →
        </span>
      </ButtonLink>
      <ButtonLink href={second.href} variant="ghost">
        {second.label}
      </ButtonLink>
    </div>
  );
}

/**
 * Section-level dual call-to-action panel. Drops a heading, supporting line,
 * and the paired primary / Hire Us actions at the end of a section.
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

/** Flowing shapes along the CTA banner's foot — decorative only. */
function CtaWaves() {
  return (
    <svg
      className="cta-waves"
      viewBox="0 0 1200 300"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 210 C 180 150, 300 260, 480 210 S 780 120, 960 190 S 1120 240, 1200 200 V300 H0 Z"
        fill="currentColor"
        opacity="0.08"
      />
      <path
        d="M0 260 C 200 220, 360 300, 560 250 S 860 190, 1040 250 S 1160 280, 1200 260 V300 H0 Z"
        fill="currentColor"
        opacity="0.12"
      />
    </svg>
  );
}

/**
 * Closing call-to-action banner with the paired primary actions. A light
 * surface (Phase 40): soft sky glows, a dot grid and flowing shapes. With
 * `points` it becomes the homepage's two-column band — copy on the left, the
 * value points on the right; `secondary` relabels the second action.
 */
export function CtaBanner({
  eyebrow,
  title,
  body,
  points,
  secondary,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  points?: readonly { icon: string; title: string; body: string }[];
  secondary?: { label: string; href: string };
}) {
  const hasPoints = Boolean(points?.length);
  return (
    <section>
      <div className="container">
        <Reveal className={cn("cta-banner", hasPoints && "has-points")}>
          <CtaWaves />
          <div>
            {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
            <h2>{title}</h2>
            <p>{body}</p>
            <CtaActions
              className={cn(!hasPoints && "cta-actions-center")}
              consult
              secondary={secondary}
            />
          </div>
          {hasPoints ? (
            <ul className="cta-points">
              {points!.map((pt) => (
                <li key={pt.title} className="cta-point">
                  <span className="ico" aria-hidden="true">
                    <Ico name={pt.icon} />
                  </span>
                  <span>
                    <b>{pt.title}</b>
                    <span>{pt.body}</span>
                  </span>
                </li>
              ))}
            </ul>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
