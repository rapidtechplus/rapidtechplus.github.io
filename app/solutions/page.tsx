import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { IconCard, CtaBanner } from "@/components/sections/pieces";
import { solutions } from "@/content/site";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "AI agents, workflow and business automation, cloud solutions, data integrations, and managed delivery — outcome-focused solutions from Rapid Tech Plus.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Solutions" }]}
          />
          <span className="eyebrow">Solutions</span>
          <h1>
            AI-powered solutions that{" "}
            <span className="grad-text">do the work</span>
          </h1>
          <p>
            Beyond building software, we solve business problems — pairing
            senior engineering with AI and automation to remove manual work and
            unlock new capabilities.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: "clamp(24px,4vw,48px)" }}>
        <div className="container-wide container">
          <div className="grid-3 grid">
            {solutions.map((s) => (
              <IconCard
                key={s.title}
                icon={s.icon}
                title={s.title}
                body={s.body}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Have a process worth automating?"
        body="Tell us where your team loses time. We'll design a solution that gives it back."
      />
    </>
  );
}
