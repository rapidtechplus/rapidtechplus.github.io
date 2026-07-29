import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailLayout } from "@/components/sections/detail-layout";
import {
  getProduct,
  productSlugs,
  relatedProducts,
  productFaqs,
} from "@/content/products";
import { SITE_URL } from "@/config/site";
import { ogImageFor } from "@/config/og-templates";

/** Static export: pre-render one page per product, 404 on anything else. */
export const dynamicParams = false;

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const title = product.title;
  const url = `/products/${product.slug}`;
  return {
    title,
    description: product.intro,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} — Rapid Tech Plus`,
      description: product.intro,
      url,
      images: [ogImageFor("products")],
    },
  };
}

export default async function ProductDetailPage({ params }: Params) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = relatedProducts(product.slug).map((p) => ({
    icon: p.icon,
    title: p.label,
    body: p.summary,
    href: `/products/${p.slug}`,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: product.title,
    description: product.intro,
    serviceType: product.title,
    url: `${SITE_URL}/products/${product.slug}`,
    provider: {
      "@type": "Organization",
      name: "Rapid Tech Plus",
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DetailLayout
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.label },
        ]}
        eyebrow="Products"
        title={
          <>
            {product.title}{" "}
            <span className="grad-text">built to last</span>
          </>
        }
        lead={product.intro}
        overview={product.overview}
        capabilities={product.capabilities}
        capabilitiesTitle={`What we build into ${product.label.toLowerCase()}`}
        faqs={productFaqs}
        related={related}
        relatedEyebrow="More products"
        relatedTitle="Other things we build"
        cta={{
          title: `Planning a ${product.label.toLowerCase()} project?`,
          body: `Tell us what you're building and we'll help you plan the right approach. The first consultation is free.`,
        }}
      />
    </>
  );
}
