import type { Metadata } from "next";
import {
  PageHero,
  SectionHead,
  IconCard,
  CtaBanner,
} from "@/components/sections/pieces";
import { culturePrinciples, cultureRituals, aboutValues } from "@/content/site";

export const metadata: Metadata = {
  title: "Culture",
  description:
    "How we work at Rapid Tech Plus — a remote-first, transparent, low-ego team that values ownership, craft, and continuous learning.",
  alternates: { canonical: "/culture" },
};

export default function CulturePage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Culture" }]}
        eyebrow="Culture"
        title={
          <>
            A team that values{" "}
            <span className="grad-text">craft and ownership</span>
          </>
        }
        lead="We're a small, senior, remote-first team. We move fast without cutting corners, write more than we talk, and give people the room to do their best work."
      />

      <section style={{ paddingTop: "clamp(24px,4vw,48px)" }}>
        <div className="container-wide container">
          <SectionHead
            eyebrow="How we work"
            title="The principles behind the team"
          />
          <div className="grid-3 grid">
            {culturePrinciples.map((p) => (
              <IconCard key={p.title} icon={p.icon} title={p.title} body={p.body} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-elev)" }}>
        <div className="container-wide container">
          <SectionHead
            eyebrow="In practice"
            title="Everyday habits that make it real"
          >
            Culture isn&apos;t a poster on a wall — it&apos;s the small rituals we
            repeat every week.
          </SectionHead>
          <div className="grid-2 grid">
            {cultureRituals.map((r) => (
              <IconCard key={r.title} icon={r.icon} title={r.title} body={r.body} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container-wide container">
          <SectionHead eyebrow="What we value" title="Shared values" />
          <div className="grid-3 grid">
            {aboutValues.map((v) => (
              <IconCard key={v.title} icon={v.icon} title={v.title} body={v.body} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Like how we work?"
        body="We're always glad to meet thoughtful engineers and designers. See where you'd fit."
      />
    </>
  );
}
