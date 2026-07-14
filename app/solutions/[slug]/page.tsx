import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailLayout } from "@/components/sections/detail-layout";
import {
  getSolution,
  solutionSlugs,
  relatedSolutions,
  solutionFaqs,
} from "@/content/solutions";
import { SITE_URL } from "@/config/site";

/** Static export: pre-render one page per solution, 404 on anything else. */
export const dynamicParams = false;

export function generateStaticParams() {
  return solutionSlugs.map((slug) => ({ slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  const url = `/solutions/${solution.slug}`;
  return {
    title: solution.title,
    description: solution.intro,
    alternates: { canonical: url },
    openGraph: {
      title: `${solution.title} — Rapid Tech Plus`,
      description: solution.intro,
      url,
    },
  };
}

export default async function SolutionDetailPage({ params }: Params) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const related = relatedSolutions(solution.slug).map((s) => ({
    icon: s.icon,
    title: s.label,
    body: s.summary,
    href: `/solutions/${s.slug}`,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: solution.title,
    description: solution.intro,
    serviceType: solution.category,
    url: `${SITE_URL}/solutions/${solution.slug}`,
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
          { label: "Solutions", href: "/solutions" },
          { label: solution.label },
        ]}
        eyebrow={solution.category}
        title={solution.title}
        lead={solution.intro}
        overview={solution.overview}
        capabilities={solution.capabilities}
        capabilitiesTitle="What we deliver"
        faqs={solutionFaqs}
        related={related}
        relatedEyebrow="Related solutions"
        relatedTitle={`More ${solution.category.toLowerCase()}`}
        cta={{
          title: "Ready to solve this together?",
          body: `Tell us about your ${solution.label} goals and we'll help you plan the right approach.`,
        }}
      />
    </>
  );
}
