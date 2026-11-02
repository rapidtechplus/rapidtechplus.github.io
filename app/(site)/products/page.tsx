import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { PageHero, IconCard } from "@/components/sections/pieces";
import { ButtonLink } from "@/components/ui/button";
import { products } from "@/content/products";
import { JsonLd } from "@/components/seo/json-ld";
import { webPageJsonLd } from "@/lib/structured-data";
import { SITE_URL } from "@/config/site";

const description =
  "A look at the kinds of software products and platforms Rapid Tech Plus builds — web apps, SaaS platforms, and automation systems.";

export const metadata: Metadata = {
  title: "Products & Work",
  description,
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Products & Work",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      url: `${SITE_URL}/products/${p.slug}`,
    })),
  };

  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          name: "Products & Work",
          description,
          path: "/products",
        })}
      />
      <JsonLd data={itemListJsonLd} />

      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        eyebrow="Products & work"
        title={
          <>
            The kind of software <span className="grad-text">we build</span>
          </>
        }
        lead="We craft products and platforms across industries. Here's a snapshot of the solutions we specialize in delivering."
      />

      <section style={{ paddingTop: "clamp(24px,4vw,48px)" }}>
        <div className="container-wide container">
          <div className="grid-3 grid">
            {products.map((p) => (
              <IconCard
                key={p.title}
                icon={p.icon}
                title={p.title}
                body={p.body}
                href={`/products/${p.slug}`}
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
