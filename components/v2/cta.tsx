import { ArrowRight } from "lucide-react";
import { CONTACT_HREF } from "@/config/site";
import { site } from "@/content/site";
import { v2Cta } from "@/content/v2-home";
import { documentHref } from "@/lib/document-href";

/** Closing call to action with the animated border light. */
export function V2Cta() {
  return (
    <section
      id="contact"
      className="v2-container v2-cta-section"
      aria-labelledby="v2-cta-title"
    >
      <div className="v2-cta v2-beam v2-reveal">
        <div className="v2-grid-bg" aria-hidden="true" />
        <div className="v2-cta-glow" aria-hidden="true" />
        <div className="v2-cta-inner">
          <h2 id="v2-cta-title" className="v2-cta-title">
            {v2Cta.title}{" "}
            <span className="v2-text-grad">{v2Cta.highlight}</span>
          </h2>
          <p className="v2-cta-body">{v2Cta.body}</p>
          <div className="v2-actions v2-actions--center">
            <a
              className="v2-btn v2-btn--primary v2-btn--lg"
              href={documentHref(CONTACT_HREF)}
            >
              {v2Cta.primary}
              <ArrowRight className="v2-btn-icon" size={18} aria-hidden />
            </a>
            <a
              className="v2-btn v2-btn--ghost v2-btn--lg v2-glass"
              href={`tel:${site.contact.phoneHref}`}
            >
              {site.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
