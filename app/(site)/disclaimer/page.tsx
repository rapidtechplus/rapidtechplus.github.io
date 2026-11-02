import type { Metadata } from "next";
import { PageHero } from "@/components/sections/pieces";
import { JsonLd } from "@/components/seo/json-ld";
import { webPageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Disclaimer for the Rapid Tech Plus website — the basis on which information on this Site is provided.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          name: "Disclaimer",
          description:
            "Disclaimer for the Rapid Tech Plus website — the basis on which information on this Site is provided.",
          path: "/disclaimer",
        })}
      />

      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]}
        eyebrow="Legal"
        title="Disclaimer"
        container="container-content"
      />

      <section style={{ paddingTop: 0 }}>
        <div className="prose container-content container">
          <p className="updated">Last updated: 29 July 2026</p>

          <p>
            The information provided by <strong>Rapid Tech Plus</strong>{" "}
            (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) on our website
            at rapidtechplus.github.io (the &quot;Site&quot;) is for general
            informational purposes only. All information on the Site is provided
            in good faith; however, we make no representation or warranty of any
            kind, express or implied, regarding the accuracy, adequacy,
            validity, reliability, availability, or completeness of any
            information on the Site.
          </p>

          <h2>1. No professional advice</h2>
          <p>
            The Site cannot and does not contain professional advice. Any
            technical, engineering, business, or related information is provided
            for general informational and educational purposes only and is not a
            substitute for professional advice tailored to your circumstances.
            Before acting on any information on the Site, we encourage you to
            consult with the appropriate professionals.
          </p>

          <h2>2. Representative content</h2>
          <p>
            Certain content on the Site — including case studies, metrics,
            example projects, and roles — is illustrative and representative of
            the kind of work we do. Unless a page states otherwise, such content
            does not name specific clients and should not be read as a guarantee
            of any particular outcome. Results depend on many factors specific to
            each engagement.
          </p>

          <h2>3. External links</h2>
          <p>
            The Site may contain links to other websites or content belonging to
            or originating from third parties. We do not investigate, monitor, or
            check such external links for accuracy, adequacy, validity,
            reliability, availability, or completeness, and we are not
            responsible for the content of any linked site.
          </p>

          <h2>4. Forward-looking statements</h2>
          <p>
            Any statements on the Site about future plans, capabilities, or
            roadmap items describe our current intent only. They are not
            commitments, and we may change direction without notice.
          </p>

          <h2>5. Trademarks</h2>
          <p>
            Product names, logos, and brands of third parties referenced on the
            Site are the property of their respective owners. Their use is for
            identification and descriptive purposes only and does not imply any
            affiliation with or endorsement by those owners.
          </p>

          <h2>6. Limitation of liability</h2>
          <p>
            Under no circumstance shall we have any liability to you for any loss
            or damage of any kind incurred as a result of the use of the Site or
            reliance on any information provided on the Site. Your use of the
            Site and your reliance on any information is solely at your own risk.
          </p>

          <h2>7. Changes to this disclaimer</h2>
          <p>
            We may update this Disclaimer from time to time. Changes will be
            posted on this page with an updated revision date.
          </p>

          <h2>8. Contact us</h2>
          <p>
            If you have questions about this Disclaimer, contact us at{" "}
            <a href="mailto:hello@rapidtechplus.com">hello@rapidtechplus.com</a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
