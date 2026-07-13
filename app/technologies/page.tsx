import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { CtaBanner } from "@/components/sections/pieces";
import { techGroups } from "@/content/site";

export const metadata: Metadata = {
  title: "Technologies",
  description:
    "The modern stack Rapid Tech Plus builds with — TypeScript, React, Next.js, Node.js, PostgreSQL, AWS, Docker, and more across frameworks, data, and cloud.",
  alternates: { canonical: "/technologies" },
};

export default function TechnologiesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Technologies</span>
          <h1>
            A modern, <span className="grad-text">proven stack</span>
          </h1>
          <p>
            We choose reliable, well-supported tools that keep projects fast to
            build, easy to maintain, and ready to scale.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: "clamp(24px,4vw,48px)" }}>
        <div className="container-wide container">
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
