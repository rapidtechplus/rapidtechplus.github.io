import { HomeClassic } from "@/components/sections/home/home-classic";
import { HomeConcept } from "@/components/sections/home/home-concept";
import { HOME_VARIANT } from "@/config/site";

/**
 * Homepage. Two complete variants exist while the owner decides between
 * them — the Phase 40 enterprise-light concept and the Phase 39 classic
 * composition. `HOME_VARIANT` (config/site.ts) picks the live one; the other
 * is served at `/home-preview` (noindex) for comparison.
 */
export default function HomePage() {
  return HOME_VARIANT === "classic" ? <HomeClassic /> : <HomeConcept />;
}
