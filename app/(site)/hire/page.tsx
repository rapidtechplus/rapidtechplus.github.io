import type { Metadata } from "next";
import {
  PageHero,
  SectionHead,
  IconCard,
  CtaBanner,
} from "@/components/sections/pieces";
import { hireGroups, engagementModels } from "@/content/hire";
import { JsonLd } from "@/components/seo/json-ld";
import { collectionPageJsonLd } from "@/lib/structured-data";

const description =
  "Hire senior, vetted developers and engineers — React, Next.js, Node.js, AI engineers, mobile, DevOps, UI/UX, and QA — through staff augmentation, dedicated teams, or managed delivery.";

export const metadata: Metadata = {
  title: "Hire Expert Developers & Engineers",
  description,
  alternates: { canonical: "/hire" },
};

export default function HirePage() {
  return (
    <>
      <JsonLd
        data={collectionPageJsonLd({
          name: "Hire Expert Developers & Engineers",
          description,
          path: "/hire",
          items: hireGroups.flatMap((g) =>
            g.roles.map((r) => ({
              name: r.label,
              description: r.summary,
              path: `/hire/${r.slug}`,
            })),
          ),
        })}
      />
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Hire Expert" }]}
        eyebrow="Hire Expert"
        title={
          <>
            Hire <span className="grad-text">expert developers</span> and
            engineers
          </>
        }
        lead="Add senior, vetted specialists to your team — or hand us the whole build. Choose the roles you need across engineering, AI, design, and QA, and the engagement model that fits."
      />

      <section style={{ paddingTop: "clamp(24px,4vw,48px)" }}>
        <div className="container-wide container">
          <SectionHead
            eyebrow="How you can work with us"
            title="Flexible engagement models"
          >
            Bring in individual specialists or a full team — scale up or down as
            your roadmap changes.
          </SectionHead>
          <div className="grid-3 grid">
            {engagementModels.map((m, i) => (
              <IconCard
                key={m.title}
                icon={m.icon}
                title={m.title}
                body={m.body}
                delay={i * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {hireGroups.map((group) => (
        <section key={group.category} style={{ background: "var(--bg-elev)" }}>
          <div className="container-wide container">
            <SectionHead eyebrow="Roles" title={group.category} />
            <div className="grid-3 grid">
              {group.roles.map((r, i) => (
                <IconCard
                  key={r.slug}
                  icon={r.icon}
                  title={r.label}
                  body={r.summary}
                  href={`/hire/${r.slug}`}
                  delay={i * 0.04}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBanner
        title="Ready to build your team?"
        body="Tell us the roles you need and how you'd like to work — we'll help you assemble the right team fast."
      />
    </>
  );
}
