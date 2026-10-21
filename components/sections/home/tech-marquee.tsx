/**
 * Infinite tech-stack marquee shown under the hero — the "logo strip" pattern
 * most IT-services sites use, built from our real toolkit rather than
 * unearned client logos. Pure CSS: the track is rendered twice and slides by
 * exactly one copy. Pauses on hover and stops entirely under reduced motion,
 * where it falls back to a wrapped row (see `.marquee` in globals.css).
 */
export function TechMarquee({
  label,
  items,
}: {
  label: string;
  items: readonly string[];
}) {
  return (
    <div className="marquee" role="region" aria-label={label}>
      <p className="marquee-label">{label}</p>
      <div className="marquee-viewport">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="marquee-track"
            // The second copy exists only to make the loop seamless.
            aria-hidden={copy === 1 || undefined}
          >
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
