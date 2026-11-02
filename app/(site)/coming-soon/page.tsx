import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Coming soon",
  description:
    "This part of the Rapid Tech Plus site is on the way. In the meantime, explore our work or get in touch.",
  // A placeholder route for not-yet-launched content — keep it out of search.
  robots: { index: false, follow: true },
  alternates: { canonical: "/coming-soon" },
};

export default function ComingSoonPage() {
  return (
    <section className="page-hero" style={{ paddingTop: "16vh" }}>
      <div className="container container-content">
        <span className="eyebrow">Coming soon</span>
        <h1>This page is on the way</h1>
        <p>
          We&apos;re still building this part of the site. It&apos;ll be live
          soon — in the meantime, take a look at what we&apos;ve shipped, or
          reach out and we&apos;ll point you in the right direction.
        </p>
        <div className="hero-actions" style={{ marginTop: 28 }}>
          <ButtonLink href="/">Back to home →</ButtonLink>
          <ButtonLink href="/contact" variant="ghost">
            Get in touch
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
