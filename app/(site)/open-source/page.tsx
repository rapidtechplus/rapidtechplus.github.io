import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import {
  PageHero,
  SectionHead,
  IconCard,
  CtaBanner,
} from "@/components/sections/pieces";
import { openSourcePrinciples, openSourceProjects } from "@/content/site";

const GITHUB_ORG = "https://github.com/rapidtechplus";

export const metadata: Metadata = {
  title: "Open Source",
  description:
    "How Rapid Tech Plus gives back — the starters, libraries, and AI building blocks we open-source, and how we contribute upstream to the tools we build on.",
  alternates: { canonical: "/open-source" },
};

export default function OpenSourcePage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Open Source" }]}
        eyebrow="Open source"
        title={
          <>
            Building in the open, <span className="grad-text">giving back</span>
          </>
        }
        lead="The tools we build on are open source, so we invest back into them — with libraries, starters, upstream fixes, and what we learn along the way."
      />

      <section style={{ paddingTop: "clamp(24px,4vw,48px)" }}>
        <div className="container-wide container">
          <SectionHead eyebrow="Our approach" title="How we engage" />
          <div className="grid-3 grid">
            {openSourcePrinciples.map((p) => (
              <IconCard key={p.title} icon={p.icon} title={p.title} body={p.body} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-elev)" }}>
        <div className="container-wide container">
          <SectionHead
            eyebrow="What we share"
            title="Where we invest"
          >
            A snapshot of the kinds of projects we maintain and contribute to.
            Explore the organization on GitHub for the live list.
          </SectionHead>
          <div className="grid-3 grid">
            {openSourceProjects.map((p) => (
              <IconCard key={p.title} icon={p.icon} title={p.title} body={p.body} />
            ))}
          </div>
          <Reveal style={{ marginTop: 32, textAlign: "center" }}>
            <ButtonLink href={GITHUB_ORG}>View our GitHub →</ButtonLink>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Want to collaborate?"
        body="Found a bug, have an idea, or want to contribute? Open an issue on GitHub or get in touch — we'd love to hear from you."
      />
    </>
  );
}
