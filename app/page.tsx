import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { Ico } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/counter";
import { HeroVisual } from "@/components/hero-visual";
import { Magnetic } from "@/components/magnetic";
import { TextReveal } from "@/components/text-reveal";
import { TechMarquee } from "@/components/sections/home/tech-marquee";
import { CapabilityBento } from "@/components/sections/home/capability-bento";
import { ProcessScroll } from "@/components/sections/home/process-scroll";
import {
  SectionHead,
  IconCard,
  Quote,
  FaqAccordion,
  CtaBanner,
  CtaActions,
} from "@/components/sections/pieces";
import {
  homeStats,
  homeFeatures,
  homeServices,
  whyChoose,
  aiExpertise,
  techStack,
  industries,
  products,
  tailoredProcess,
  testimonials,
  blogPosts,
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

const trust = [
  "AI-first engineering",
  "TypeScript everywhere",
  "Ship in weeks, not quarters",
];

export default function HomePage() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <section className="hero hero-split">
        <div className="container-wide container">
          <div className="hero-grid">
            <div className="hero-copy">
              {/* `eager`: this block holds the LCP text — it must paint with
                  the first frame, not after hydration. */}
              <Reveal eager>
                <span className="badge">
                  <span className="dot" /> AI-first software engineering studio
                </span>
                <h1>
                  <TextReveal
                    text="Software that thinks ahead of your roadmap"
                    accent="ahead"
                  />
                </h1>
                <p className="lead">
                  Rapid Tech Plus designs and engineers production-grade
                  products, platforms, and internal systems — blending senior
                  craft with an AI-accelerated workflow to ship faster without
                  cutting corners.
                </p>
                <div className="hero-actions">
                  <Magnetic>
                    <ButtonLink href="/contact" className="btn-lg">
                      Get A Quote →
                    </ButtonLink>
                  </Magnetic>
                  <ButtonLink
                    href="/contact"
                    variant="ghost"
                    className="btn-lg"
                  >
                    Book a free consultation
                  </ButtonLink>
                </div>
                <div className="trust-row">
                  {trust.map((t, i) => (
                    <span key={t} style={{ display: "contents" }}>
                      {i > 0 && <span className="sep" />}
                      <span>{t}</span>
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <HeroVisual />
            </Reveal>
          </div>
        </div>
      </section>

      {/* TOOLKIT MARQUEE */}
      <section className="marquee-section">
        <div className="container-wide container">
          <TechMarquee
            label="Built with a modern, battle-tested stack"
            items={techStack}
          />
        </div>
      </section>

      {/* PROOF STATS */}
      <section style={{ paddingTop: 0 }}>
        <div className="container-wide container">
          <Reveal className="stats">
            {homeStats.map((s) => (
              <div className="stat" key={s.label}>
                <Counter value={s.num} />
                <div className="label">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section>
        <div className="split container">
          <Reveal>
            <span className="eyebrow">Who we are</span>
            <h2>An engineering partner built for the AI era</h2>
            <p>
              We are a compact team of senior engineers and designers who treat
              your product like our own. AI accelerates our workflow — from
              scoping to scaffolding to review — but every decision is made by
              people who care about the details.
            </p>
            <p>
              From the first commit to launch and beyond, we bring engineering
              discipline, thoughtful design, and a bias for shipping. Our work
              spans custom web applications, SaaS platforms, and business
              automation.
            </p>
            <ButtonLink href="/about" variant="ghost">
              More about us →
            </ButtonLink>
          </Reveal>

          <Reveal className="panel" delay={0.1}>
            {homeFeatures.map((f, i) => (
              <div
                className="feature"
                key={f.title}
                style={
                  i < homeFeatures.length - 1 ? { marginBottom: 24 } : undefined
                }
              >
                <span className="check">
                  <Ico name="check" />
                </span>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="band">
        <div className="container-wide container">
          <SectionHead
            eyebrow="Why Rapid Tech Plus"
            title="A partner you can build the next decade with"
          >
            The reasons teams choose us — and stay with us — long after the
            first launch.
          </SectionHead>
          <div className="grid-4 grid">
            {whyChoose.map((w, i) => (
              <IconCard
                key={w.title}
                icon={w.icon}
                title={w.title}
                body={w.body}
                delay={i * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES — one asymmetric grid for services + AI. */}
      <section>
        <div className="container-wide container">
          <SectionHead eyebrow="What we do" title="Capabilities, end to end">
            Everything needed to design, build, and evolve a modern digital
            product — under one roof, with one accountable team.
          </SectionHead>
          <CapabilityBento ai={aiExpertise} services={homeServices} />
        </div>
      </section>

      {/* PROCESS — scroll-told, five numbered stages. */}
      <section>
        <div className="container-wide container">
          <ProcessScroll
            eyebrow="How we work"
            title="Our process for tailored IT solutions"
            lead="No black boxes. Every engagement moves through five transparent, reviewable stages — from first conversation to lasting support."
            steps={tailoredProcess}
            actions={<CtaActions />}
          />
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="band">
        <div className="container-wide container">
          <SectionHead
            eyebrow="Industries"
            title="Spurring digital growth across domains"
          >
            We adapt our craft to the realities of your industry — its users,
            constraints, and pace — to drive measurable growth.
          </SectionHead>
          <div className="grid-3 grid">
            {industries.map((it, i) => (
              <IconCard
                key={it.title}
                icon={it.icon}
                title={it.title}
                body={it.body}
                delay={i * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section>
        <div className="container-wide container">
          <SectionHead
            eyebrow="Featured products"
            title="Platforms we design and ship"
          >
            A sample of the kinds of products we build — from customer-facing
            platforms to internal tooling.
          </SectionHead>
          <div className="grid-3 grid">
            {products.slice(0, 3).map((p, i) => (
              <IconCard
                key={p.title}
                icon={p.icon}
                title={p.title}
                body={p.body}
                delay={i * 0.05}
              />
            ))}
          </div>
          <Reveal className="section-actions">
            <ButtonLink href="/products" variant="ghost">
              See all products →
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="band">
        <div className="container-wide container">
          <SectionHead
            eyebrow="What clients say"
            title="Trusted to build and to keep improving"
          >
            Representative of the partnerships we build. Real client quotes land
            here as we collect them.
          </SectionHead>
          <div className="quote-grid">
            {testimonials.map((t, i) => (
              <Quote
                key={t.name + t.role}
                quote={t.quote}
                name={t.name}
                role={t.role}
                delay={i * 0.06}
              />
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="band">
        <div className="container-wide container">
          <SectionHead eyebrow="Insights" title="From our engineering desk">
            Notes on AI, web development, and shipping durable software.
          </SectionHead>
          <div className="post-grid">
            {featuredPosts.map((post, i) => (
              <Reveal className="post" key={post.slug} delay={i * 0.06}>
                <div className="post-meta">
                  <span className="post-cat">{post.category}</span>
                  <span>{post.readingTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link className="post-more" href="/blog">
                  Read more →
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="section-actions">
            <ButtonLink href="/blog" variant="ghost">
              Read all insights →
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        style={{ scrollMarginTop: "calc(var(--nav-h) + 24px)" }}
      >
        <div className="container">
          <SectionHead eyebrow="FAQ" title="Frequently asked questions">
            Answers to the questions we hear most from new clients.
          </SectionHead>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        title="Have something worth building?"
        body="Tell us what you're building. We'll help you scope it, design it, and ship it — fast."
      />
    </>
  );
}
