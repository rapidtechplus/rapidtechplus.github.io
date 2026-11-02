import type { Metadata } from "next";
import Link from "next/link";
import { HomeClassic } from "@/components/sections/home/home-classic";
import { HomeConcept } from "@/components/sections/home/home-concept";
import { HOME_VARIANT, HOME_VARIANT_LABELS } from "@/config/site";

/** The variant that is *not* live at `/`. */
const previewVariant = HOME_VARIANT === "classic" ? "concept" : "classic";
const previewLabel = HOME_VARIANT_LABELS[previewVariant];

export const metadata: Metadata = {
  title: `Homepage preview — ${previewLabel}`,
  description: `Preview of the ${previewLabel} homepage variant. Not indexed.`,
  // Review-only: hidden from search and left out of the sitemap, so it can
  // never compete with the live homepage.
  robots: { index: false, follow: false },
};

/**
 * Serves whichever homepage variant is not live at `/`, so the two can be
 * compared in a browser until the owner settles on one. Flip the live one
 * with `HOME_VARIANT` in `config/site.ts`; delete this route and the losing
 * variant once decided.
 */
export default function HomePreviewPage() {
  return (
    <>
      <p className="preview-note" role="status">
        Preview of the <strong>{previewLabel}</strong> homepage. The live
        homepage is the {HOME_VARIANT_LABELS[HOME_VARIANT]} one at{" "}
        <Link href="/">/</Link>.
      </p>
      {previewVariant === "classic" ? <HomeClassic /> : <HomeConcept />}
    </>
  );
}
