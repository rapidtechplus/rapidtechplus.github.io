import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { Ico } from "@/components/icon";
import type { Crumb } from "@/components/sections/breadcrumbs";
import type { Feature, Faq } from "@/content/types";
import {
  PageHero,
  SectionHead,
  IconCard,
  RelatedGrid,
  FaqAccordion,
  CtaBanner,
} from "@/components/sections/pieces";

export type RelatedItem = {
  icon: string;
  title: string;
  body: string;
  href: string;
};

/**
 * Reusable detail-page scaffold: hero + breadcrumb, an overview split with a
 * "what's included" panel, a capability card grid, an optional FAQ, a related
 * grid of cross-links, and a closing CTA banner. Shared by every `[slug]`
 * detail template so pages stay declarative and visually consistent.
 */
export function DetailLayout({
  crumbs,
  eyebrow,
  title,
  lead,
  overview,
  capabilities,
  capabilitiesEyebrow = "What's included",
  capabilitiesTitle,
  faqs,
  related,
  relatedEyebrow = "Related",
  relatedTitle,
  cta,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  overview?: ReactNode;
  capabilities: Feature[];
  capabilitiesEyebrow?: string;
  capabilitiesTitle: string;
  faqs?: Faq[];
  related?: RelatedItem[];
  relatedEyebrow?: string;
  relatedTitle?: string;
  cta: { title: string; body: string };
}) {
  return (
    <>
      <PageHero crumbs={crumbs} eyebrow={eyebrow} title={title} lead={lead} />

      {overview ? (
        <section style={{ paddingTop: "clamp(24px,4vw,48px)" }}>
          <div className="split container">
            <Reveal>
              <span className="eyebrow">Overview</span>
              <h2>{capabilitiesTitle}</h2>
              <p>{overview}</p>
            </Reveal>
            <Reveal className="panel" delay={0.1}>
              {capabilities.map((c, i) => (
                <div
                  className="feature"
                  key={c.title}
                  style={
                    i < capabilities.length - 1
                      ? { marginBottom: 22 }
                      : undefined
                  }
                >
                  <span className="check">
                    <Ico name={c.icon} />
                  </span>
                  <div>
                    <h3>{c.title}</h3>
                    <p>{c.body}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>
      ) : (
        <section style={{ paddingTop: "clamp(24px,4vw,48px)" }}>
          <div className="container-wide container">
            <SectionHead
              eyebrow={capabilitiesEyebrow}
              title={capabilitiesTitle}
            />
            <div className="grid-3 grid">
              {capabilities.map((c, i) => (
                <IconCard
                  key={c.title}
                  icon={c.icon}
                  title={c.title}
                  body={c.body}
                  delay={i * 0.05}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {faqs && faqs.length > 0 ? (
        <section className="band">
          <div className="container">
            <SectionHead eyebrow="FAQ" title="Frequently asked questions" />
            <FaqAccordion items={faqs} />
          </div>
        </section>
      ) : null}

      {related && related.length > 0 ? (
        <RelatedGrid
          eyebrow={relatedEyebrow}
          title={relatedTitle ?? "Related"}
          items={related}
        />
      ) : null}

      <CtaBanner title={cta.title} body={cta.body} />
    </>
  );
}
