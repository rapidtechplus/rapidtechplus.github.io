import type { Metadata } from "next";
import { PageHero, IconCard, CtaBanner } from "@/components/sections/pieces";
import { solutions } from "@/content/solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "AI agents, workflow and business automation, cloud solutions, data integrations, and managed delivery — outcome-focused solutions from Rapid Tech Plus.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Solutions" }]}
        eyebrow="Solutions"
        title={
          <>
            AI-powered solutions that{" "}
            <span className="grad-text">do the work</span>
          </>
        }
        lead="Beyond building software, we solve business problems — pairing senior engineering with AI and automation to remove manual work and unlock new capabilities."
      />

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
