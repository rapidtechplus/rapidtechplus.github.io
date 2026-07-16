import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLanding } from "@/components/sections/service-landing";
import {
  getAiCapability,
  aiSlugs,
  relatedAiCapabilities,
  aiIndustries,
  aiCaseStudies,
  aiProcess,
} from "@/content/ai";
import { SITE_URL } from "@/config/site";
import { ogImageFor } from "@/config/og-templates";

/** Static export: pre-render one page per AI capability, 404 on anything else. */
export const dynamicParams = false;

export function generateStaticParams() {
  return aiSlugs.map((slug) => ({ slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const capability = getAiCapability(slug);
  if (!capability) return {};
  const url = `/ai/${capability.slug}`;
  return {
    title: capability.title,
    description: capability.intro,
    alternates: { canonical: url },
    openGraph: {
      title: `${capability.title} — Rapid Tech Plus`,
      description: capability.intro,
      url,
      images: [ogImageFor("ai")],
    },
  };
}

export default async function AiCapabilityPage({ params }: Params) {
  const { slug } = await params;
  const capability = getAiCapability(slug);
  if (!capability) notFound();

  const related = relatedAiCapabilities(capability.slug).map((c) => ({
    icon: c.icon,
    title: c.label,
    body: c.summary,
    href: `/ai/${c.slug}`,
  }));
  const industries = aiIndustries(capability);
  const caseStudies = aiCaseStudies(capability);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: capability.title,
    description: capability.intro,
    serviceType: "Artificial Intelligence",
    url: `${SITE_URL}/ai/${capability.slug}`,
    provider: {
      "@type": "Organization",
      name: "Rapid Tech Plus",
      url: SITE_URL,
    },
    ...(capability.industries && capability.industries.length > 0
      ? { areaServed: industries.map((i) => i.title) }
      : {}),
  };

  const jsonLd: Record<string, unknown>[] = [serviceJsonLd];
  if (capability.faqs && capability.faqs.length > 0) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: capability.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return (
    <>
      {jsonLd.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      <ServiceLanding
        crumbs={[
          { label: "Home", href: "/" },
          { label: "AI", href: "/ai" },
          { label: capability.label },
        ]}
        eyebrow="AI"
        title={capability.title}
        lead={capability.intro}
        overview={capability.overview}
        overviewTitle="What we deliver"
        capabilities={capability.capabilities}
        problems={capability.problems}
        technologies={capability.technologies}
        process={aiProcess}
        benefits={capability.benefits}
        industries={industries}
        caseStudies={caseStudies}
        faqs={capability.faqs}
        related={related}
        relatedTitle="More AI capabilities"
        cta={{
          title: "Ready to put AI to work?",
          body: `Tell us about your ${capability.label} project and we'll help you plan a production-ready approach.`,
        }}
      />
    </>
  );
}
