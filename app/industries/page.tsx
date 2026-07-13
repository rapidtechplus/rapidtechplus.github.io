import type { Metadata } from "next";
import { IconCard, CtaBanner } from "@/components/sections/pieces";
import { industries } from "@/content/site";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Rapid Tech Plus builds software for startups, SaaS companies, e-commerce, fintech, logistics, and professional services — tailored to each industry's needs.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Industries</span>
          <h1>
            Software built for{" "}
            <span className="grad-text">the way you work</span>
          </h1>
          <p>
            We partner with businesses across industries, adapting our
            engineering and design to the goals, users, and constraints of each
            one.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: "clamp(24px,4vw,48px)" }}>
        <div className="container-wide container">
          <div className="grid-3 grid">
            {industries.map((i) => (
              <IconCard
                key={i.title}
                icon={i.icon}
                title={i.title}
                body={i.body}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Don't see your industry?"
        body="We work across sectors. Tell us about your business and the software you need."
        ctaLabel="Contact us →"
      />
    </>
  );
}
