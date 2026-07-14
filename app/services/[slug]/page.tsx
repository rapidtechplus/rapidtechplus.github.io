import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailLayout } from "@/components/sections/detail-layout";
import {
  getService,
  serviceSlugs,
  relatedServices,
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <DetailLayout
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.label },
        ]}
        eyebrow={service.category}
        title={service.title}
        lead={service.intro}
        overview={service.overview}
        capabilities={service.capabilities}
        capabilitiesTitle="What we deliver"
        faqs={service.faqs}
        related={related}
        relatedEyebrow="Related services"
        relatedTitle={`More ${service.category.toLowerCase()}`}
        cta={{
          title: "Ready to build with us?",
          body: `Tell us about your ${service.label} project and we'll help you plan the right approach.`,
        }}
      />
    </>
  );
}
