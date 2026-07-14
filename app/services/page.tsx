import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { SectionHead, IconCard, CtaBanner } from "@/components/sections/pieces";
import { services, process } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom web applications, SaaS development, UI/UX implementation, frontend and backend engineering, API integration, software modernization, and business automation.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Services" }]}
          />
          <span className="eyebrow">Services</span>
          <h1>
            Everything you need to{" "}
            <span className="grad-text">build and scale</span> software
          </h1>
          <p>
            From first concept to production and beyond, we cover the full
            software lifecycle with modern engineering and thoughtful design.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: "clamp(24px,4vw,48px)" }}>
        <div className="container">
          <div className="grid-2 grid">
            {services.map((s) => (
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

      <section style={{ background: "var(--bg-elev)" }}>
        <div className="container-wide container">
          <SectionHead
            eyebrow="How we work"
            title="A clear, collaborative process"
          />
          <div className="grid-4 grid">
            {process.map((p) => (
              <IconCard
                key={p.title}
                icon={p.icon}
                title={p.title}
                body={p.body}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to get started?"
        body="Tell us about your project and we'll help you plan the right approach."
      />
    </>
  );
}
