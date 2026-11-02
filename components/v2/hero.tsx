import { ArrowRight, Check } from "lucide-react";
import { CONTACT_HREF } from "@/config/site";
import { Ico } from "@/components/icon";
import { v2Hero, v2OrbitChips } from "@/content/v2-home";
import { documentHref } from "@/lib/document-href";
import { OrbitVisual } from "./orbit-visual";
import { RotatingWords } from "./rotating-words";

/** v2 hero: headline, rotating "We build …" line, CTAs, trust points, orbit. */
export function V2Hero() {
  return (
    <section className="v2-hero" aria-labelledby="v2-hero-title">
      <div className="v2-grid-bg" aria-hidden="true" />
      <div className="v2-hero-glow v2-hero-glow--a" aria-hidden="true" />
      <div className="v2-hero-glow v2-hero-glow--b" aria-hidden="true" />

      <div className="v2-container v2-hero-inner">
        <div className="v2-hero-copy">
          <p className="v2-badge v2-glass v2-rise">
            <span className="v2-pulse-dot" aria-hidden="true" />
            <strong>{v2Hero.eyebrow}</strong> · {v2Hero.status}
          </p>
          <h1 id="v2-hero-title" className="v2-h1 v2-rise v2-rise--1">
            <span>{v2Hero.titleLines[0]}</span>
            <span className="v2-text-grad">{v2Hero.titleLines[1]}</span>
          </h1>
          <RotatingWords
            prefix={v2Hero.buildPrefix}
            words={v2Hero.buildWords}
          />
          <p className="v2-hero-lead v2-rise v2-rise--3">{v2Hero.lead}</p>
          <div className="v2-actions v2-rise v2-rise--4">
            <a
              className="v2-btn v2-btn--primary v2-btn--lg"
              href={documentHref(CONTACT_HREF)}
            >
              {v2Hero.primaryCta}
              <ArrowRight className="v2-btn-icon" size={18} aria-hidden />
            </a>
            <a
              className="v2-btn v2-btn--ghost v2-btn--lg v2-glass"
              href={v2Hero.secondaryCta.href}
            >
              {v2Hero.secondaryCta.label}
            </a>
          </div>
          <ul className="v2-trust v2-rise v2-rise--5">
            {v2Hero.trust.map((t) => (
              <li key={t}>
                <Check
                  className="v2-check"
                  size={16}
                  strokeWidth={2.4}
                  aria-hidden
                />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <OrbitVisual
          chips={v2OrbitChips.map((chip) => (
            <div key={chip.title} className="v2-chip v2-glass">
              <span className="v2-chip-ico">
                <Ico name={chip.icon} size={16} />
              </span>
              <span>
                <span className="v2-chip-title">{chip.title}</span>
                <span className="v2-chip-meta">{chip.meta}</span>
              </span>
            </div>
          ))}
        />
      </div>
    </section>
  );
}
