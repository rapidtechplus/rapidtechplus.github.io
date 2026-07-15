import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TechnologyLanding } from "@/components/sections/technology-landing";
import {
  getTechnology,
  techSlugs,
  relatedTechnologies,
  whyRapidTechPlus,
  technologyCta,
} from "@/content/technologies";
import { SITE_URL } from "@/config/site";

/** Static export: pre-render one page per technology, 404 on anything else. */
export const dynamicParams = false;

export function generateStaticParams() {
  return techSlugs.map((slug) => ({ slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const tech = getTechnology(slug);
  if (!tech) return {};
  const url = `/technologies/${tech.slug}`;
  return {
    title: tech.title,
    description: tech.intro,
    alternates: { canonical: url },
    openGraph: {
      title: `${tech.title} — Rapid Tech Plus`,
      description: tech.intro,
      url,
    },
  };
}

export default async function TechnologyPage({ params }: Params) {
  const { slug } = await params;
  const tech = getTechnology(slug);
  if (!tech) notFound();

  const related = relatedTechnologies(tech.slug).map((t) => ({
    icon: t.icon,
    title: t.label,
    body: t.summary,
    href: `/technologies/${t.slug}`,
  }));

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: tech.title,
    description: tech.intro,
    serviceType: `${tech.label} development`,
    url: `${SITE_URL}/technologies/${tech.slug}`,
    provider: {
      "@type": "Organization",
      name: "Rapid Tech Plus",
      url: SITE_URL,
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tech.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <TechnologyLanding
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Technologies", href: "/technologies" },
          { label: tech.label },
        ]}
        eyebrow="Technologies"
        title={
          <>
            {tech.label} <span className="grad-text">Development</span>
          </>
        }
        lead={tech.intro}
        overview={tech.overview}
        overviewTitle={`${tech.label} development at Rapid Tech Plus`}
        label={tech.label}
        reasons={tech.reasons}
        whyUs={whyRapidTechPlus}
        projects={tech.projects}
        faqs={tech.faqs}
        related={related}
        cta={technologyCta}
      />
    </>
  );
}
