import Link from "next/link";
import { Ico } from "@/components/icon";
import { Reveal } from "@/components/reveal";

type Capability = { icon: string; title: string; body: string };

/**
 * Asymmetric capability grid: one large AI feature tile (2×2) surrounded by
 * service tiles, closed by a wide CTA tile. Replaces two uniform card grids
 * (services + AI) with a single, scannable composition.
 *
 * Desktop 4 columns → 12 cells: AI (4) + six services (6) + CTA (2).
 */
export function CapabilityBento({
  ai,
  services,
}: {
  ai: readonly Capability[];
  services: readonly Capability[];
}) {
  return (
    <div className="cap-bento">
      <Reveal className="cap-tile cap-ai">
        <div className="cap-ai-viz" aria-hidden>
          <span className="cap-ai-ring r1" />
          <span className="cap-ai-ring r2" />
          <span className="cap-ai-ring r3" />
          <span className="cap-ai-core">
            <Ico name="brain-circuit" />
          </span>
        </div>
        <span className="eyebrow">Flagship</span>
        <h3>Applied AI, built to run in production</h3>
        <p>
          Agents, retrieval, and integrations that are reliable, observable, and
          grounded in your data — not demos.
        </p>
        <ul className="cap-ai-list">
          {ai.map((a) => (
            <li key={a.title}>
              <Ico name={a.icon} />
              {a.title}
            </li>
          ))}
        </ul>
        <Link className="cap-link" href="/ai">
          Explore AI <span aria-hidden>→</span>
        </Link>
      </Reveal>

      {services.map((s, i) => (
        <Reveal key={s.title} className="cap-tile" delay={(i % 2) * 0.06}>
          <span className="cap-ico">
            <Ico name={s.icon} />
          </span>
          <h3>{s.title}</h3>
          <p>{s.body}</p>
        </Reveal>
      ))}

      <Reveal className="cap-tile cap-cta">
        <div>
          <h3>Eight services, one accountable team</h3>
          <p>From discovery to launch and long-term support.</p>
        </div>
        <Link className="btn btn-primary" href="/services">
          Explore all services <span className="btn-arrow">→</span>
        </Link>
      </Reveal>
    </div>
  );
}
