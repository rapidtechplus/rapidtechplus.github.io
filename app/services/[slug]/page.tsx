import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLanding } from "@/components/sections/service-landing";
import {
  getService,
  serviceSlugs,
  relatedServices,
  serviceIndustries,
  serviceCaseStudies,
  serviceProcess,
} from "@/content/services";
import { SITE_URL } from "@/config/site";

/** Static export: pre-render one page per service, 404 on anything else. */
export const dynamicParams = false;

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const url = `/services/${service.slug}`;
  return {
    title: service.title,
    description: service.intro,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.title} — Rapid Tech Plus`,
      description: service.intro,
      url,
    },
  };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = relatedServices(service.slug).map((s) => ({
    icon: s.icon,
    title: s.label,
    body: s.summary,
    href: `/services/${s.slug}`,
  }));
  const industries = serviceIndustries(service);
  const caseStudies = serviceCaseStudies(service);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.intro,
    serviceType: service.category,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: "Rapid Tech Plus",
      url: SITE_URL,
    },
    ...(service.industries && service.industries.length > 0
      ? { areaServed: industries.map((i) => i.title) }
      : {}),
  };

  const jsonLd: Record<string, unknown>[] = [serviceJsonLd];
  if (service.faqs && service.faqs.length > 0) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((f) => ({
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
          { label: "Services", href: "/services" },
          { label: service.label },
        ]}
        eyebrow={service.category}
        title={service.title}
        lead={service.intro}
        overview={service.overview}
        overviewTitle="What we deliver"
        capabilities={service.capabilities}
        problems={service.problems}
        technologies={service.technologies}
        process={serviceProcess}
        benefits={service.benefits}
        industries={industries}
        caseStudies={caseStudies}
        faqs={service.faqs}
        related={related}
        relatedTitle="More services"
        cta={{
          title: "Ready to build with us?",
          body: `Tell us about your ${service.label} project and we'll help you plan the right approach.`,
        }}
      />
    </>
  );
}
