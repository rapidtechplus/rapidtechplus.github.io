import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Rapid Tech Plus — how we collect, use, and protect information on our website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Legal</span>
          <h1>Privacy Policy</h1>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="prose container">
          <p className="updated">Last updated: 13 July 2026</p>

          <p>
            This Privacy Policy explains how <strong>Rapid Tech Plus</strong>{" "}
            (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) handles
            information in connection with our website at
            rapidtechplus.github.io (the &quot;Site&quot;). We are committed to
            protecting your privacy and being transparent about our practices.
          </p>

          <h2>1. Information we collect</h2>
          <p>
            Our Site is a static informational website. We do not require you to
            create an account or provide personal information to browse it. We
            may collect information in the following limited ways:
          </p>
          <ul>
            <li>
              <strong>Information you provide.</strong> If you contact us by
              email or through the contact form (which opens your own email
              application), we receive the details you choose to share, such as
              your name, email address, and message.
            </li>
            <li>
              <strong>Technical data.</strong> Like most websites, our hosting
              provider (GitHub Pages) may automatically log standard technical
              information such as IP addresses and browser type for security and
              operational purposes.
            </li>
          </ul>

          <h2>2. How we use information</h2>
          <p>We use the information you provide to:</p>
          <ul>
            <li>respond to your enquiries and communicate with you;</li>
            <li>provide and improve our services; and</li>
            <li>maintain the security and integrity of our Site.</li>
          </ul>

          <h2>3. Cookies and tracking</h2>
          <p>
            This Site does not set advertising or tracking cookies. Any
            essential cookies used by our hosting provider are limited to
            operating the Site securely.
          </p>

          <h2>4. Sharing of information</h2>
          <p>
            We do not sell your personal information. We may share information
            only where necessary to operate our Site, comply with the law, or
            protect our rights. Our hosting is provided by GitHub, Inc.
          </p>

          <h2>5. Data retention</h2>
          <p>
            We retain correspondence only for as long as needed to respond to
            and manage your enquiry, or as required by law.
          </p>

          <h2>6. Your rights</h2>
          <p>
            Depending on your location, you may have rights to access, correct,
            or request deletion of personal information we hold about you. To
            exercise these rights, contact us using the details below.
          </p>

          <h2>7. Security</h2>
          <p>
            We take reasonable measures to protect information. However, no
            method of transmission over the internet is completely secure, and
            we cannot guarantee absolute security.
          </p>

          <h2>8. Third-party links</h2>
          <p>
            Our Site may link to third-party websites. We are not responsible
            for the privacy practices of those sites and encourage you to review
            their policies.
          </p>

          <h2>9. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated revision date.
          </p>

          <h2>10. Contact us</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at{" "}
            <a href="mailto:hello@rapidtechplus.com">hello@rapidtechplus.com</a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
