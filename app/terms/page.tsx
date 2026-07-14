import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service governing the use of the Rapid Tech Plus website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-content container">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]}
          />
          <span className="eyebrow">Legal</span>
          <h1>Terms of Service</h1>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="prose container-content container">
          <p className="updated">Last updated: 13 July 2026</p>

          <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to and
            use of the website operated by <strong>Rapid Tech Plus</strong>{" "}
            (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) at
            rapidtechplus.github.io (the &quot;Site&quot;). By using the Site,
            you agree to these Terms.
          </p>

          <h2>1. Use of the Site</h2>
          <p>
            You may use the Site for lawful, informational purposes only. You
            agree not to misuse the Site, interfere with its operation, or
            attempt to access it in any unauthorized manner.
          </p>

          <h2>2. Intellectual property</h2>
          <p>
            All content on this Site — including text, graphics, logos, and
            design — is the property of Rapid Tech Plus or its licensors and is
            protected by applicable intellectual property laws. You may not
            reproduce or redistribute it without our permission.
          </p>

          <h2>3. No warranties</h2>
          <p>
            The Site and its content are provided &quot;as is&quot; and &quot;as
            available&quot; without warranties of any kind, whether express or
            implied. We do not guarantee that the Site will be uninterrupted,
            error-free, or free of harmful components.
          </p>

          <h2>4. Informational purpose only</h2>
          <p>
            Content on this Site is provided for general informational purposes
            and does not constitute professional, legal, or financial advice.
            Any engagement for services is governed by a separate written
            agreement.
          </p>

          <h2>5. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, Rapid Tech Plus shall not be
            liable for any indirect, incidental, or consequential damages
            arising from your use of, or inability to use, the Site.
          </p>

          <h2>6. Third-party links</h2>
          <p>
            The Site may contain links to third-party websites. We are not
            responsible for the content, policies, or practices of those
            websites.
          </p>

          <h2>7. Changes to these Terms</h2>
          <p>
            We may revise these Terms from time to time. The most current
            version will always be posted on this page with an updated revision
            date. Continued use of the Site constitutes acceptance of the
            revised Terms.
          </p>

          <h2>8. Governing law</h2>
          <p>
            These Terms are governed by the laws of India, without regard to its
            conflict-of-law principles.
          </p>

          <h2>9. Contact us</h2>
          <p>
            For questions about these Terms, contact us at{" "}
            <a href="mailto:hello@rapidtechplus.com">hello@rapidtechplus.com</a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
