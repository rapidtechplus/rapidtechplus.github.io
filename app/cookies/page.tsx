import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy for Rapid Tech Plus — how our website uses cookies and how you can control them.",
  alternates: { canonical: "/cookies" },
};

export default function CookiePolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-content container">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Cookie Policy" }]}
          />
          <span className="eyebrow">Legal</span>
          <h1>Cookie Policy</h1>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="prose container-content container">
          <p className="updated">Last updated: 13 July 2026</p>

          <p>
            This Cookie Policy explains how <strong>Rapid Tech Plus</strong>{" "}
            (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies
            and similar technologies on our website at rapidtechplus.github.io
            (the &quot;Site&quot;). It should be read together with our{" "}
            <a href="/privacy">Privacy Policy</a>.
          </p>

          <h2>1. What are cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a
            website. They are widely used to make sites work, to remember your
            preferences, and to provide information to site owners.
          </p>

          <h2>2. How we use cookies</h2>
          <p>
            Our Site is a static informational website and does not set
            advertising or cross-site tracking cookies. The only cookies that
            may be present are:
          </p>
          <ul>
            <li>
              <strong>Essential cookies.</strong> Set by our hosting provider
              (GitHub Pages) to operate and secure the Site.
            </li>
            <li>
              <strong>Preference storage.</strong> We store your light/dark
              theme choice in your browser&apos;s local storage so the Site
              remembers it on your next visit. This stays on your device and is
              not sent to us.
            </li>
          </ul>

          <h2>3. Third-party cookies</h2>
          <p>
            We do not use third-party analytics or advertising cookies. If we
            link to external websites, their own cookie practices apply, and we
            encourage you to review their policies.
          </p>

          <h2>4. Managing cookies</h2>
          <p>
            You can control and delete cookies through your browser settings,
            and clear locally stored preferences at any time. Blocking essential
            cookies may affect how parts of the Site function.
          </p>

          <h2>5. Changes to this policy</h2>
          <p>
            We may update this Cookie Policy from time to time. Changes will be
            posted on this page with an updated revision date.
          </p>

          <h2>6. Contact us</h2>
          <p>
            If you have questions about this Cookie Policy, contact us at{" "}
            <a href="mailto:hello@rapidtechplus.com">hello@rapidtechplus.com</a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
