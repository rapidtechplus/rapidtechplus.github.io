import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailLayout } from "@/components/sections/detail-layout";
import {
  getIndustry,
  industrySlugs,
  relatedIndustries,
  industryFaqs,
} from "@/content/industries";
import { SITE_URL } from "@/config/site";
import { ogImageFor } from "@/config/og-templates";

/** Static export: pre-render one page per industry, 404 on anything else. */
export const dynamicParams = false;

export function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  const title = `${industry.title} Software Development`;
  const url = `/industries/${industry.slug}`;
  return {
    title,
    description: industry.intro,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} — Rapid Tech Plus`,
      description: industry.intro,
      url,
      images: [ogImageFor("industries")],
    },
  };
}

export default async function IndustryDetailPage({ params }: Params) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const related = relatedIndustries(industry.slug).map((s) => ({
    icon: s.icon,
    title: s.label,
    body: s.summary,
    href: `/industries/${s.slug}`,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${industry.title} Software Development`,
    description: industry.intro,
    serviceType: `${industry.title} software development`,
    areaServed: industry.title,
    url: `${SITE_URL}/industries/${industry.slug}`,
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
          { label: "Industries", href: "/industries" },
          { label: industry.label },
        ]}
        eyebrow="Industries"
        title={
          <>
            {industry.title}{" "}
            <span className="grad-text">software development</span>
          </>
        }
        lead={industry.intro}
        overview={industry.overview}
        capabilities={industry.capabilities}
        capabilitiesTitle={`What we build for ${industry.label.toLowerCase()}`}
        faqs={industryFaqs}
        related={related}
        relatedEyebrow="More industries"
        relatedTitle="Other sectors we serve"
        cta={{
          title: `Building software for ${industry.label.toLowerCase()}?`,
          body: `Tell us about your project and we'll help you plan the right approach for the ${industry.label.toLowerCase()} sector.`,
        }}
      />
    </>
  );
}
