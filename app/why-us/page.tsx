import type { Metadata } from "next";
import { Ico } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import {
  PageHero,
  SectionHead,
  IconCard,
  MetricStat,
  FaqAccordion,
  CtaBanner,
} from "@/components/sections/pieces";
import { whyUsPillars, whyUsStats, whyUsDifference, whyUsFaqs } from "@/content/site";

export const metadata: Metadata = {
  title: "Why Us",
  description:
    "Why growing businesses choose Rapid Tech Plus — an AI-native, senior team that ships in weeks, builds engineering you can trust, and stays accountable well beyond launch.",
  alternates: { canonical: "/why-us" },
};

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Why Us" }]}
        eyebrow="Why us"
        title={
          <>
            Reasons teams build with{" "}
            <span className="grad-text">Rapid Tech Plus</span>
          </>
        }
        lead="We pair senior engineering with genuine care for outcomes — shipping fast, building to last, and staying a real partner long after go-live."
      />

      <section style={{ paddingTop: "clamp(24px,4vw,48px)" }}>
        <div className="container-wide container">
          <SectionHead
            eyebrow="What sets us apart"
            title="Built to earn your trust"
          />
          <div className="grid-3 grid">
            {whyUsPillars.map((p) => (
              <IconCard key={p.title} icon={p.icon} title={p.title} body={p.body} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-elev)" }}>
        <div className="container-wide container">
          <SectionHead eyebrow="By the numbers" title="Proof, not promises">
            Representative of how we work today — we&apos;d rather set clear
            expectations than inflate a number.
          </SectionHead>
          <div className="grid-4 grid">
            {whyUsStats.map((s) => (
              <MetricStat key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container-content container">
          <SectionHead
            eyebrow="The difference"
            title="How we compare to a typical agency"
          />
          <Reveal className="panel">
            {whyUsDifference.map((d, i) => (
              <div
                className="feature"
                key={d.us}
                style={
                  i < whyUsDifference.length - 1
                    ? { margin: "18px 0" }
                    : undefined
                }
              >
                <span className="check">
                  <Ico name="check" />
                </span>
                <div>
                  <h3>{d.us}</h3>
                  <p>
                    <span style={{ opacity: 0.65 }}>Instead of:</span> {d.them}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section style={{ background: "var(--bg-elev)" }}>
        <div className="container-content container">
          <SectionHead eyebrow="Questions" title="Common questions" />
          <FaqAccordion items={whyUsFaqs.map((f) => ({ q: f.q, a: f.a }))} />
        </div>
      </section>

      <CtaBanner
        title="See the difference for yourself"
        body="Tell us about your project and we'll show you how we'd approach it."
      />
    </>
  );
}
