import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import {
  PageHero,
  SectionHead,
  IconCard,
  CtaBanner,
} from "@/components/sections/pieces";
import { techGroups } from "@/content/site";
import { technologies } from "@/content/technologies";
import { JsonLd } from "@/components/seo/json-ld";
import { collectionPageJsonLd } from "@/lib/structured-data";

const description =
  "The modern stack Rapid Tech Plus builds with — TypeScript, React, Next.js, Node.js, PostgreSQL, AWS, Docker, and more across frameworks, data, and cloud.";

export const metadata: Metadata = {
  title: "Technologies",
  description,
  alternates: { canonical: "/technologies" },
};

export default function TechnologiesPage() {
  return (
    <>
      <JsonLd
        data={collectionPageJsonLd({
          name: "Technologies",
          description,
          path: "/technologies",
          items: technologies.map((t) => ({
            name: t.title,
            description: t.summary,
            path: `/technologies/${t.slug}`,
          })),
        })}
      />
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Technologies" }]}
        eyebrow="Technologies"
        title={
          <>
            A modern, <span className="grad-text">proven stack</span>
          </>
        }
        lead="We choose reliable, well-supported tools that keep projects fast to build, easy to maintain, and ready to scale."
      />

      <section style={{ paddingTop: "clamp(24px,4vw,48px)" }}>
        <div className="container-wide container">
          <SectionHead
            eyebrow="Core stacks"
            title="Technologies we specialise in"
          >
            Deep expertise in the frameworks and platforms that power modern
            products — each with a dedicated engineering practice.
          </SectionHead>
          <div className="grid-3 grid">
            {technologies.map((t, i) => (
              <IconCard
                key={t.slug}
                icon={t.icon}
                title={`${t.label} Development`}
                body={t.summary}
                href={`/technologies/${t.slug}`}
                delay={i * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container-wide container">
          <SectionHead eyebrow="Full stack" title="The broader toolkit">
            The wider set of languages, tools, and platforms we build and ship
            with every day.
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
        title="Have a stack in mind?"
        body="Whether you're starting fresh or extending an existing system, we'll help you choose the right tools."
      />
    </>
  );
}
