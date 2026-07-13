import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { IconCard } from "@/components/sections/pieces";
import { ButtonLink } from "@/components/ui/button";
import { products } from "@/content/site";

export const metadata: Metadata = {
  title: "Products & Work",
  description:
    "A look at the kinds of software products and platforms Rapid Tech Plus builds — web apps, SaaS platforms, and automation systems.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Products &amp; work</span>
          <h1>
            The kind of software <span className="grad-text">we build</span>
          </h1>
          <p>
            We craft products and platforms across industries. Here&apos;s a
            snapshot of the solutions we specialize in delivering.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: "clamp(24px,4vw,48px)" }}>
        <div className="container-wide container">
          <div className="grid-3 grid">
            {products.map((p) => (
              <IconCard
                key={p.title}
                icon={p.icon}
                title={p.title}
                body={p.body}
              />
            ))}
          </div>

          <div style={{ marginTop: 40 }}>
            <Reveal className="panel">
              <div style={{ textAlign: "center" }}>
                <span className="eyebrow">Building our portfolio</span>
                <h2 style={{ fontSize: "1.6rem" }}>New engagements welcome</h2>
                <p style={{ maxWidth: "56ch", margin: "0 auto 20px" }}>
                  Rapid Tech Plus is actively taking on new projects. Detailed
                  case studies will be published here as engagements complete.
                  Want to be one of them?
                </p>
                <ButtonLink href="/contact">Start a conversation →</ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
