import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { SectionHead, IconCard, CtaBanner } from "@/components/sections/pieces";
import {
  homeStats,
  homeFeatures,
  homeServices,
  whyUs,
  techStack,
  products,
  process,
  faqs,
} from "@/content/site";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <span className="badge">
            <span className="dot" /> Software studio for growing businesses
          </span>
          <h1>
            We build <span className="grad-text">modern software</span> that
            moves your business forward
          </h1>
          <p className="lead">
            Rapid Tech Plus designs and engineers software products, web
            platforms, and digital systems — crafted with precision, built to
            scale, and delivered fast.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/contact">Start a project →</ButtonLink>
            <ButtonLink href="/services" variant="ghost">
              View services
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="stats">
            {homeStats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="num">{s.num}</div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section>
        <div className="split container">
          <Reveal>
            <span className="eyebrow">Who we are</span>
            <h2>A software partner built for the way modern businesses work</h2>
            <p>
              Rapid Tech Plus is a software studio focused on building reliable,
              well-crafted digital products. We partner with startups and
              growing companies to turn ideas into production-ready platforms.
            </p>
            <p>
              From the first line of code to launch and beyond, we bring
              engineering discipline, thoughtful design, and a bias for
              shipping. Our work spans custom web applications, SaaS products,
              and business automation.
            </p>
            <ButtonLink href="/about" variant="ghost">
              More about us →
            </ButtonLink>
          </Reveal>

          <Reveal className="panel">
            {homeFeatures.map((f, i) => (
              <div
                className="feature"
                key={f.title}
                style={
                  i < homeFeatures.length - 1 ? { marginBottom: 22 } : undefined
                }
              >
                <span className="check">✓</span>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: "var(--bg-elev)" }}>
        <div className="container">
          <SectionHead eyebrow="What we do" title="Core services">
            End-to-end software capabilities to design, build, and evolve your
            digital products.
          </SectionHead>
          <div className="grid-3 grid">
            {homeServices.map((s) => (
              <IconCard
                key={s.title}
                icon={s.icon}
                title={s.title}
                body={s.body}
              />
            ))}
          </div>
          <Reveal className="section-head">
            <div style={{ marginTop: 8 }}>
              <ButtonLink href="/services" variant="ghost">
                Explore all services →
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section>
        <div className="container">
          <SectionHead eyebrow="What we build" title="Products & platforms">
            The kinds of software we deliver — from customer-facing platforms to
            internal tools and automation.
          </SectionHead>
          <div className="grid-3 grid">
            {products.slice(0, 3).map((p) => (
              <IconCard
                key={p.title}
                icon={p.icon}
                title={p.title}
                body={p.body}
              />
            ))}
          </div>
          <Reveal className="section-head">
            <div style={{ marginTop: 8 }}>
              <ButtonLink href="/products" variant="ghost">
                View all products →
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TECH */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead
            eyebrow="Our toolkit"
            title="Technologies we work with"
          />
          <Reveal className="chips">
            {techStack.map((t) => (
              <span className="chip" key={t}>
                {t}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: "var(--bg-elev)" }}>
        <div className="container">
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

      {/* WHY US */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Why Rapid Tech Plus"
            title="Engineering you can rely on"
          />
          <div className="grid-3 grid">
            {whyUs.map((w) => (
              <IconCard
                key={w.title}
                icon={w.icon}
                title={w.title}
                body={w.body}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--bg-elev)" }}>
        <div className="container">
          <SectionHead eyebrow="FAQ" title="Frequently asked questions">
            Answers to the questions we hear most from new clients.
          </SectionHead>
          <div className="faq-list">
            {faqs.map((f) => (
              <Reveal className="faq-item" key={f.q}>
                <details>
                  <summary>{f.q}</summary>
                  <div className="faq-body">{f.a}</div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        title="Have a project in mind?"
        body="Tell us what you're building. We'll help you scope it, design it, and ship it."
        ctaLabel="Contact us →"
      />
    </>
  );
}
