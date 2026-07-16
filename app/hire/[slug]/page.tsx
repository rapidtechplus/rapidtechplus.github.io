import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HireLanding } from "@/components/sections/hire-landing";
import {
  getHireRole,
  getRoleTech,
  hireSlugs,
  relatedRoles,
  engagementModels,
  whyRapidTechPlus,
  hireProcess,
  hireFaqs,
} from "@/content/hire";
import { SITE_URL } from "@/config/site";
import { ogImageFor } from "@/config/og-templates";

/** Static export: pre-render one page per role, 404 on anything else. */
export const dynamicParams = false;

export function generateStaticParams() {
  return hireSlugs.map((slug) => ({ slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const role = getHireRole(slug);
  if (!role) return {};
  const title = `Hire ${role.label}`;
  const url = `/hire/${role.slug}`;
  return {
    title,
    description: role.intro,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} — Rapid Tech Plus`,
      description: role.intro,
      url,
      images: [ogImageFor("hire")],
    },
  };
}

export default async function HireRolePage({ params }: Params) {
  const { slug } = await params;
  const role = getHireRole(slug);
  if (!role) notFound();

  const title = `Hire ${role.label}`;
  const technologies = getRoleTech(role.slug);
  const related = relatedRoles(role.slug).map((r) => ({
    icon: r.icon,
    title: r.label,
    body: r.summary,
    href: `/hire/${r.slug}`,
  }));

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description: role.intro,
    serviceType: `${role.category} — team augmentation`,
    url: `${SITE_URL}/hire/${role.slug}`,
    provider: {
      "@type": "Organization",
      name: "Rapid Tech Plus",
      url: SITE_URL,
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hireFaqs.map((f) => ({
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
      <HireLanding
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Hire Expert", href: "/hire" },
          { label: role.label },
        ]}
        eyebrow="Hire Expert"
        title={title}
        lead={role.intro}
        overview={role.overview}
        overviewTitle={`Why teams hire ${role.label.toLowerCase()}`}
        reasons={whyRapidTechPlus}
        skills={role.capabilities}
        skillsTitle="What they bring"
        models={engagementModels}
        technologies={technologies}
        process={hireProcess}
        faqs={hireFaqs}
        related={related}
        relatedTitle={`More ${role.category.toLowerCase()}`}
        cta={{
          title: `Ready to hire ${role.label.toLowerCase()}?`,
          body: `Tell us about your project and how you'd like to work — we'll match you with the right ${role.label.toLowerCase()} fast.`,
        }}
      />
    </>
  );
}
