import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import {
  PageHero,
  SectionHead,
  IconCard,
  CtaBanner,
} from "@/components/sections/pieces";
import { site, careerBenefits, careerRoles } from "@/content/site";
import { JsonLd } from "@/components/seo/json-ld";
import { webPageJsonLd } from "@/lib/structured-data";

const description =
  "Join Rapid Tech Plus — a remote-first software studio building AI-native products. Explore open roles in engineering and design, and how to apply.";

export const metadata: Metadata = {
  title: "Careers",
  description,
  alternates: { canonical: "/careers" },
};

const careersEmail = site.contact.hrEmail;

export default function CareersPage() {
  return (
    <>
      {/* Deliberately not JobPosting: the listed roles are representative, not
          live vacancies, and marking them up as real openings would be false. */}
      <JsonLd
        data={webPageJsonLd({ name: "Careers", description, path: "/careers" })}
      />

      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
        eyebrow="Careers"
        title={
          <>
            Build things that <span className="grad-text">actually ship</span>
          </>
        }
        lead="We're a small, senior, remote-first team building modern, AI-native software. If you care about craft and outcomes, you'll fit right in."
      />

      <section style={{ paddingTop: "clamp(24px,4vw,48px)" }}>
        <div className="container-wide container">
          <SectionHead
            eyebrow="Why join us"
            title="What working here is like"
          />
          <div className="grid-2 grid">
            {careerBenefits.map((b) => (
              <IconCard
                key={b.title}
                icon={b.icon}
                title={b.title}
                body={b.body}
              />
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-elev)" }}>
        <div className="container-wide container">
          <SectionHead eyebrow="Open roles" title="Where we're hiring">
            Don&apos;t see a perfect match? We&apos;re always glad to hear from
            exceptional people — introduce yourself below.
          </SectionHead>
          <div className="grid-2 grid">
            {careerRoles.map((role, i) => (
              <Reveal className="panel" key={role.title} delay={i * 0.05}>
                <div className="chips" style={{ marginBottom: 14 }}>
                  <span className="chip">{role.dept}</span>
                  <span className="chip">{role.mode}</span>
                  <span className="chip">{role.type}</span>
                </div>
                <h3>{role.title}</h3>
                <p style={{ marginTop: 8 }}>{role.body}</p>
                <div style={{ marginTop: 20 }}>
                  <ButtonLink
                    href={`mailto:${careersEmail}?subject=${encodeURIComponent(
                      `Application: ${role.title}`,
                    )}`}
                    variant="ghost"
                  >
                    Apply for this role
                  </ButtonLink>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal className="panel" style={{ textAlign: "center" }}>
            <span className="eyebrow">How to apply</span>
            <h2 style={{ fontSize: "1.7rem" }}>Introduce yourself</h2>
            <p style={{ maxWidth: "56ch", margin: "0 auto 22px" }}>
              Send us a short note about what you do and a link to your work or
              GitHub. We read every message and reply to strong fits.
            </p>
            <ButtonLink
              href={`mailto:${careersEmail}?subject=${encodeURIComponent(
                "Introduction — Careers",
              )}`}
            >
              Email {careersEmail} →
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Not the right time?"
        body="Follow along or reach out about your project — we're always happy to connect."
      />
    </>
  );
}
