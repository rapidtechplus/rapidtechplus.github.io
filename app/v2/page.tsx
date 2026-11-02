import { V2Hero } from "@/components/v2/hero";
import { V2Outcomes } from "@/components/v2/outcomes";
import { V2Services } from "@/components/v2/services";
import { V2Architecture } from "@/components/v2/architecture";
import { V2Work } from "@/components/v2/work";
import { V2TechRadar } from "@/components/v2/tech-radar";
import { V2Process } from "@/components/v2/process";
import { V2Cta } from "@/components/v2/cta";

/**
 * v2 homepage preview — the approved "Orbit+" design (Concept 1 "Orbit" with
 * the architecture flow from "Blueprint" and the tech radar from "Command").
 * Lives beside the live site for side-by-side comparison; see
 * `app/v2/layout.tsx` for how it is isolated and kept out of search.
 */
export default function V2HomePage() {
  return (
    <>
      <V2Hero />
      <V2Outcomes />
      <V2Services />
      <V2Architecture />
      <V2Work />
      <V2TechRadar />
      <V2Process />
      <V2Cta />
    </>
  );
}
