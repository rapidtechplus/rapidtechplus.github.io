/**
 * Builders for the site's schema.org graph.
 *
 * Detail templates (`ServiceLanding`, `DetailLayout`, …) already emit their own
 * `Service` / `FAQPage` nodes; these cover the hub and company pages, which
 * previously shipped `BreadcrumbList` alone. Every builder takes a site-relative
 * `path` and absolutises it here, so callers can never emit a relative `@id` or
 * `url` (search engines require absolute ones).
 */
import { SITE_URL } from "@/config/site";
import { site, socialLinks } from "@/content/site";

const abs = (path: string) => `${SITE_URL}${path}`;

/** The publisher node. Referenced by `@id` elsewhere rather than re-inlined. */
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: site.name,
  url: site.url,
  description: site.description,
  email: site.email,
  slogan: site.slogan,
  logo: `${site.url}/favicon.svg`,
  // Verified profiles let search engines reconcile the brand across platforms.
  sameAs: socialLinks
    .filter((s) => s.href.startsWith("http"))
    .map((s) => s.href),
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: site.contact.salesEmail,
      telephone: site.contact.phone,
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      contactType: "human resources",
      email: site.contact.hrEmail,
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: site.name,
  url: site.url,
  description: site.description,
  publisher: { "@id": ORGANIZATION_ID },
  // No SearchAction: the site has no search endpoint, and advertising one that
  // does not exist is a structured-data violation.
};

export type ListItem = { name: string; path: string; description?: string };

/**
 * Adapts the `{ title, body, href }` card shape the hubs already render into
 * list items, so the JSON-LD is derived from the same array as the visible grid
 * and cannot drift out of sync with it.
 */
export function toListItems(
  cards: readonly { title: string; body?: string; href: string }[],
): ListItem[] {
  return cards.map((c) => ({
    name: c.title,
    description: c.body,
    path: c.href,
  }));
}

/**
 * A hub page listing a collection (services, industries, …). The `ItemList`
 * gives search engines the child routes; `isPartOf` ties it back to the site.
 */
export function collectionPageJsonLd({
  name,
  description,
  path,
  items,
}: {
  name: string;
  description: string;
  path: string;
  items: ListItem[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${abs(path)}#page`,
    name,
    description,
    url: abs(path),
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": ORGANIZATION_ID },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        ...(item.description ? { description: item.description } : {}),
        url: abs(item.path),
      })),
    },
  };
}

/** A plain informational page (`AboutPage`, `ContactPage`, `WebPage`, …). */
export function webPageJsonLd({
  type = "WebPage",
  name,
  description,
  path,
}: {
  type?: "WebPage" | "AboutPage" | "ContactPage";
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${abs(path)}#page`,
    name,
    description,
    url: abs(path),
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": ORGANIZATION_ID },
  };
}

/** Mirrors an on-page FAQ. Only emit this where the answers are really rendered. */
export function faqPageJsonLd(faqs: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
