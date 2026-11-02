import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Ico } from "@/components/icon";
import {
  PageHero,
  SectionHead,
  IconCard,
  FaqAccordion,
  CtaActions,
  CtaBanner,
  TimelineStep,
} from "@/components/sections/pieces";
import { aiOfferings, aiProcess, aiChain } from "@/content/ai";
import { SITE_URL } from "@/config/site";
import { JsonLd } from "@/components/seo/json-ld";
import {
  ORGANIZATION_ID,
  collectionPageJsonLd,
  faqPageJsonLd,
  toListItems,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Artificial Intelligence",
  description:
    "Production AI that does real work — AI agents, LLM integration, RAG, MCP servers, automation, enterprise AI, and AI consulting, built with guardrails and evaluation from day one.",
  alternates: { canonical: "/ai" },
  openGraph: {
    title: "Artificial Intelligence — Rapid Tech Plus",
    description:
      "Agents, LLMs, RAG, MCP servers, automation, and enterprise AI — production-grade, secure, and evaluated.",
    url: "/ai",
  },
};

/** What sets our AI work apart — the hub's "overview" panel. */
const differentiators = [
  {
    icon: "shield-check",
    title: "Built for production, not demos",
    body: "Guardrails, evaluation, and observability from day one — so AI ships and keeps working.",
  },
  {
    icon: "search-check",
    title: "Grounded and accountable",
    body: "Answers and actions grounded in your own data and tools, citable and audited.",
  },
  {
    icon: "layers",
    title: "Your data stays yours",
    body: "Private, enterprise endpoints — your data is never used to train third-party models.",
  },
];

/** Hub-level FAQs spanning the whole AI capability. */
const aiHubFaqs = [
  {
    q: "Where should we start with AI?",
    a: "Most engagements start with a short discovery to find the highest-value, most feasible use case — often an agent, a RAG assistant, or an automation. Our AI Consulting can produce a prioritised roadmap first if you'd like a wider view before building.",
  },
  {
    q: "How do you keep AI accurate and safe?",
    a: "We ground responses in your own data with retrieval, add evaluation suites that measure accuracy against real examples, and put guardrails, permissions, and monitoring around what the system can do.",
  },
  {
    q: "Will our data be used to train external models?",
    a: "No. We architect around enterprise model endpoints and your own infrastructure, so your data stays private and is never used to train third-party models.",
  },
  {
    q: "Can you add AI to our existing product?",
    a: "Yes — most of our AI work wires into systems you already run through your APIs and data, often over the Model Context Protocol, rather than replacing what you have.",
  },
];

export default function AiHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Artificial Intelligence",
    description:
      "Production AI — agents, LLM integration, RAG, MCP servers, automation, enterprise AI, and AI consulting.",
    serviceType: "Artificial Intelligence",
    url: `${SITE_URL}/ai`,
    provider: { "@id": ORGANIZATION_ID },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd
        data={collectionPageJsonLd({
          name: "Artificial Intelligence",
          description:
            "Production AI — agents, LLM integration, RAG, MCP servers, automation, enterprise AI, and AI consulting.",
          path: "/ai",
          items: toListItems(aiOfferings),
        })}
      />
      {/* The hub renders these answers, so they are eligible for FAQ markup. */}
      <JsonLd data={faqPageJsonLd(aiHubFaqs)} />

      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Artificial Intelligence" },
        ]}
        eyebrow="Artificial Intelligence"
        title={
          <>
            Production AI that does <span className="grad-text">real work</span>
          </>
        }
        lead="Agents, LLM features, retrieval, and automation — engineered with the guardrails, evaluation, and observability production demands. This is our biggest differentiator, and we build it end to end."
      />

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <CtaActions />
        </div>
      </section>

      {/* Overview + what makes it different */}
      <section style={{ paddingTop: "clamp(24px,4vw,48px)" }}>
        <div className="split container">
          <Reveal>
            <span className="eyebrow">Overview</span>
            <h2>AI, built to be trusted in production</h2>
            <p>
              Plenty of teams can produce an AI demo. We build AI that survives
              real users: autonomous agents that use your tools, retrieval
              grounded in your own data, and automation that removes real work —
              all with the security, evaluation, and observability that keep it
              trustworthy once your business depends on it.
            </p>
            <p>
              Explore each capability below, or start with a consulting
              conversation and we&apos;ll help you find the highest-value place
              to begin.
            </p>
          </Reveal>
          <Reveal className="panel" delay={0.1}>
            {differentiators.map((d, i) => (
              <div
                className="feature"
                key={d.title}
                style={
                  i < differentiators.length - 1
                    ? { marginBottom: 22 }
                    : undefined
                }
              >
                <span className="check">
                  <Ico name={d.icon} />
                </span>
                <div>
                  <h3>{d.title}</h3>
                  <p>{d.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Capabilities grid — the funnel, each linking to its deep page */}
      <section className="band">
        <div className="container-wide container">
          <SectionHead eyebrow="Capabilities" title="Our AI capabilities">
            A connected set of capabilities — from first integration to
            enterprise rollout. Each is a full engagement in its own right.
          </SectionHead>
          <div className="grid-3 grid">
            {aiOfferings.map((c, i) => (
              <IconCard
                key={c.href}
                icon={c.icon}
                title={c.title}
                body={c.body}
                href={c.href}
                delay={i * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* The AI capability chain */}
      <section>
        <div className="container">
          <SectionHead eyebrow="The path" title="How the capabilities connect">
            Teams typically move along this path — but you can start anywhere
            that delivers value fastest.
          </SectionHead>
          <div className="chips" style={{ justifyContent: "center" }}>
            {aiChain.map((stage, i) => (
              <span
                key={stage.href + i}
                style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
              >
                <Link href={stage.href} className="chip">
                  {stage.label}
                </Link>
                {i < aiChain.length - 1 ? (
                  <span aria-hidden style={{ opacity: 0.5 }}>
                    →
                  </span>
                ) : null}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How we build AI */}
      <section className="band">
        <div className="container-wide container">
          <SectionHead eyebrow="How we work" title="How we build AI">
            A clear path from first conversation to a system that&apos;s safe to
            run in production.
          </SectionHead>
          <div className="timeline timeline-5">
            {aiProcess.map((p, i) => (
              <TimelineStep
                key={p.title}
                n={p.icon}
                title={p.title}
                body={p.body}
                delay={i * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="container">
          <SectionHead eyebrow="FAQ" title="Frequently asked questions" />
          <FaqAccordion items={aiHubFaqs} />
        </div>
      </section>

      <CtaBanner
        title="Ready to put AI to work?"
        body="Tell us what you're trying to achieve and we'll help you find the highest-value, production-ready place to start."
      />
    </>
  );
}
