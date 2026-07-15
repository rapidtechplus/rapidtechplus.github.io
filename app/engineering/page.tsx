import type { Metadata } from "next";
import { Ico } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import {
  PageHero,
  SectionHead,
  IconCard,
  CtaBanner,
} from "@/components/sections/pieces";
import {
  engineeringPractices,
  engineeringPrinciples,
  engineeringStandards,
  techGroups,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "How Rapid Tech Plus builds software — strict TypeScript, tested and reviewed code, CI/CD, security and accessibility by default, on a modern, proven stack.",
  alternates: { canonical: "/engineering" },
};

export default function EngineeringPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Engineering" }]}
        eyebrow="Engineering"
        title={
          <>
            Software built with{" "}
            <span className="grad-text">discipline and care</span>
          </>
        }
        lead="Our engineering culture is simple: type-safe, tested, reviewed, and shipped in small increments. Quality, security, and accessibility are built in from the first commit."
      />

      <section style={{ paddingTop: "clamp(24px,4vw,48px)" }}>
        <div className="container-wide container">
          <SectionHead
            eyebrow="How we build"
            title="Practices behind every release"
          />
          <div className="grid-3 grid">
            {engineeringPractices.map((p) => (
              <IconCard key={p.title} icon={p.icon} title={p.title} body={p.body} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-elev)" }}>
        <div className="container-wide container">
          <SectionHead
            eyebrow="How we decide"
            title="Engineering principles"
          />
          <div className="grid-2 grid">
            {engineeringPrinciples.map((p) => (
              <IconCard key={p.title} icon={p.icon} title={p.title} body={p.body} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="split container">
          <Reveal>
            <span className="eyebrow">The quality bar</span>
            <h2>What &ldquo;done&rdquo; means here</h2>
            <p>
              Every change clears the same bar before it ships. It&apos;s how we
              keep quality high while still moving fast — the standard doesn&apos;t
              bend under a deadline.
            </p>
            <div style={{ marginTop: 24 }}>
              <ButtonLink href="/our-process">See our process →</ButtonLink>
            </div>
          </Reveal>

          <Reveal className="panel">
            {engineeringStandards.map((item, i) => (
              <div
                className="feature"
                key={item}
                style={
                  i < engineeringStandards.length - 1
                    ? { margin: "14px 0" }
                    : undefined
                }
              >
                <span className="check">
                  <Ico name="check" />
                </span>
                <div>
                  <h3 style={{ marginBottom: 0 }}>{item}</h3>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section style={{ background: "var(--bg-elev)" }}>
        <div className="container-wide container">
          <SectionHead eyebrow="Our stack" title="Tools we build with">
            A modern, proven toolkit chosen for reliability and developer speed —
            not novelty for its own sake.
          </SectionHead>
          <div className="grid-2 grid">
            {techGroups.map((group) => (
              <Reveal className="panel" key={group.title}>
                <h3>{group.title}</h3>
                <div className="chips" style={{ marginTop: 16 }}>
                  {group.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Have a project that demands solid engineering?"
        body="Tell us what you're building and we'll bring the technical depth to get it right."
      />
    </>
  );
}
