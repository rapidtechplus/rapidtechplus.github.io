import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyLanding } from "@/components/sections/case-study-layout";
import { JsonLd } from "@/components/seo/json-ld";
import {
  caseStudySlugs,
  getCaseStudy,
  relatedCaseStudies,
  type CaseStudy,
} from "@/content/case-studies";
import { services } from "@/content/services";
import { industrySectors, type IndustrySector } from "@/content/industries";
import type { ServiceRecord } from "@/content/types";
import type { RelatedItem } from "@/components/sections/detail-layout";
import { SITE_URL } from "@/config/site";
import { ogImageFor } from "@/config/og-templates";
import { ORGANIZATION_ID } from "@/lib/structured-data";

/** Static export: pre-render one page per case study, 404 on anything else. */
export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

/**
 * The cross-link resolvers live here rather than in `content/case-studies.ts`
 * because `services.ts` already imports that module (for its own "proof"
 * section) — resolving services from inside it would close an import cycle.
 * Unknown slugs are skipped, so a stale reference degrades to a missing card
 * rather than a dead link.
 */
function studyServices(study: CaseStudy): RelatedItem[] {
  return (study.services ?? [])
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is ServiceRecord => Boolean(s))
    .map((s) => ({
      icon: s.icon,
      title: s.label,
      body: s.summary,
      href: `/services/${s.slug}`,
    }));
}

function studyIndustries(study: CaseStudy): RelatedItem[] {
  return (study.industries ?? [])
    .map((slug) => industrySectors.find((i) => i.slug === slug))
    .filter((i): i is IndustrySector => Boolean(i))
    .map((i) => ({
      icon: i.icon,
      title: i.label,
      body: i.summary,
      href: `/industries/${i.slug}`,
    }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  const url = `/case-studies/${study.slug}`;
  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: url },
    // `openGraph` replaces the inherited object rather than merging into it, so
    // the segment's `opengraph-image.png` must be re-declared or this page ships
    // an imageless `summary_large_image` card. See `config/og-templates.ts`.
    openGraph: {
      title: `${study.title} — Rapid Tech Plus`,
      description: study.summary,
      url,
      images: [ogImageFor("case-studies")],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: Params) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const url = `${SITE_URL}/case-studies/${study.slug}`;
  const related = relatedCaseStudies(study.slug);

  const caseStudyJsonLd = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    "@id": `${url}#case-study`,
    name: study.title,
    headline: study.title,
    description: study.summary,
    abstract: study.intro,
    url,
    about: study.category,
    // `client` is a generalised descriptor ("FinTech scaleup"), never a named
    // organisation — these studies are representative, so naming one would be a
    // fabricated claim.
    provider: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    isPartOf: { "@id": `${SITE_URL}/#website` },
    ...(study.technologies && study.technologies.length > 0
      ? { keywords: study.technologies.join(", ") }
      : {}),
  };

  // BreadcrumbList is emitted by the shared `Breadcrumbs` component (via
  // `PageHero`), as on every other detail route — re-declaring it here would
  // ship the page two conflicting trails.
  const jsonLd: Record<string, unknown>[] = [caseStudyJsonLd];
  if (study.faqs && study.faqs.length > 0) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: study.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return (
    <>
      {jsonLd.map((data, i) => (
        <JsonLd key={i} data={data} />
      ))}
      <CaseStudyLanding
        study={study}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: study.title },
        ]}
        services={studyServices(study)}
        industries={studyIndustries(study)}
        related={related}
      />
    </>
  );
}
