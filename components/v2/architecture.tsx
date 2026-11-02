import { v2Architecture } from "@/content/v2-home";
import { SectionHead } from "./section-head";

/**
 * "How we build": the reference architecture as an ordered list of layers,
 * with data packets flowing between them (horizontal on wide screens,
 * vertical on narrow ones — see `.v2-arch-*` in v2.css).
 */
export function V2Architecture() {
  const { layers, guarantees } = v2Architecture;
  return (
    <section
      id="architecture"
      className="v2-container v2-section"
      aria-labelledby="v2-arch-title"
    >
      <SectionHead
        id="v2-arch-title"
        eyebrow={v2Architecture.eyebrow}
        title={v2Architecture.title}
        highlight={v2Architecture.highlight}
        lead={v2Architecture.lead}
      />
      <div className="v2-arch-panel v2-glass v2-reveal">
        <ol className="v2-arch-flow" aria-label="Request path, client to data">
          {layers.map((layer, i) => (
            <ArchStep
              key={layer.code}
              layer={layer}
              last={i === layers.length - 1}
            />
          ))}
        </ol>
        <ul className="v2-arch-guarantees" aria-label="Across every layer">
          {guarantees.map((g) => (
            <li key={g.code} className="v2-guarantee">
              <span className="v2-guarantee-code">{g.code}</span>
              {g.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ArchStep({
  layer,
  last,
}: {
  layer: (typeof v2Architecture.layers)[number];
  last: boolean;
}) {
  return (
    <>
      <li className="v2-arch-node">
        <span className="v2-arch-node-head">
          <span className="v2-mono-label">{layer.code}</span>
          <span className="v2-pulse-dot" aria-hidden="true" />
        </span>
        <span className="v2-arch-node-title">{layer.title}</span>
        <span className="v2-arch-node-tech">{layer.tech}</span>
      </li>
      {!last && (
        <li className="v2-arch-link" aria-hidden="true">
          <span className="v2-packet" />
          <span className="v2-packet" />
          <span className="v2-packet" />
        </li>
      )}
    </>
  );
}
