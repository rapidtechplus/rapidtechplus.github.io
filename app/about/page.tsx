import type { Metadata } from "next";
import { Ico } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import {
  PageHero,
  SectionHead,
  IconCard,
  CtaBanner,
} from "@/components/sections/pieces";
import { aboutValues, aboutGlance } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Rapid Tech Plus is a modern software studio building web platforms, SaaS products, and digital systems for growing businesses.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="About us"
        title={
          <>
            Building software with{" "}
            <span className="grad-text">craft and clarity</span>
          </>
        }
        lead="Rapid Tech Plus is a software studio helping growing businesses design, build, and scale modern digital products."
      />

      <section style={{ paddingTop: "clamp(24px,4vw,48px)" }}>
        <div className="split container">
          <Reveal>
            <span className="eyebrow">Our story</span>
            <h2>A modern studio, built on engineering discipline</h2>
            <p>
              Rapid Tech Plus was founded on a simple belief: great software
              comes from combining strong engineering with genuine care for the
              people who use it. We work as an extension of your team — scoping
              problems carefully, building thoughtfully, and shipping reliably.
            </p>
            <p>
              Whether you&apos;re launching a new product or modernizing an
              existing platform, we bring the technical depth and the practical
              judgment to get it done right.
            </p>
          </Reveal>

          <Reveal className="panel">
            <span className="eyebrow">At a glance</span>
            {aboutGlance.map((g, i) => (
              <div
                className="feature"
                key={g.title}
                style={
                  i < aboutGlance.length - 1 ? { margin: "18px 0" } : undefined
                }
              >
                <span className="check">
                  <Ico name="check" />
                </span>
                <div>
                  <h3>{g.title}</h3>
                  <p>{g.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section style={{ background: "var(--bg-elev)" }}>
        <div className="container-wide container">
          <SectionHead eyebrow="What drives us" title="Our values" />
          <div className="grid-3 grid">
            {aboutValues.map((v) => (
              <IconCard
                key={v.title}
                icon={v.icon}
                title={v.title}
                body={v.body}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Let's build something great together"
        body="We'd love to hear about your project and explore how we can help."
      />
    </>
  );
}
