import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

/**
 * Inner-page breadcrumb trail. The last crumb is the current page (rendered as
 * plain text with aria-current); earlier crumbs link back up the hierarchy.
 * Emits BreadcrumbList JSON-LD so search engines read the trail too.
 */
export function Breadcrumbs({
  items,
  baseUrl = "https://rapidtechplus.github.io",
}: {
  items: Crumb[];
  baseUrl?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${baseUrl}${c.href}` } : {}),
    })),
  };

  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol>
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.label}>
              {c.href && !last ? (
                <Link href={c.href}>{c.label}</Link>
              ) : (
                <span aria-current={last ? "page" : undefined}>{c.label}</span>
              )}
              {!last && (
                <ChevronRight className="crumb-sep" size={13} aria-hidden />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
