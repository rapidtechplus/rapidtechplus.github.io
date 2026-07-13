import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="page-hero" style={{ paddingTop: "16vh" }}>
      <div className="container">
        <span className="eyebrow">Error 404</span>
        <h1>This page couldn&apos;t be found</h1>
        <p>
          The page you&apos;re looking for may have moved or no longer exists.
        </p>
        <div className="hero-actions" style={{ marginTop: 28 }}>
          <ButtonLink href="/">Back to home →</ButtonLink>
          <ButtonLink href="/contact" variant="ghost">
            Contact us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
