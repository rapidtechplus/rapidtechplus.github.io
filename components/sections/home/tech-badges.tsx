import { Ico } from "@/components/icon";

/**
 * Lettermarks for technologies with no lucide glyph. Anything else resolves
 * through the shared icon registry.
 */
const LETTERMARKS: Record<string, string> = {
  ts: "TS",
  next: "N",
};

/**
 * "Technologies we work with" — the row of badges under the hero actions.
 * Content comes from `homeTech`; every entry reflects a stack the site
 * already lists or a service it offers.
 */
export function TechBadges({
  label,
  items,
}: {
  label: string;
  items: readonly { label: string; icon: string }[];
}) {
  return (
    <div>
      <p className="tech-label">{label}</p>
      <ul className="tech-badges" aria-label={label}>
        {items.map((t) => (
          <li key={t.label} className="tech-badge">
            <span className="tech-badge-ico" aria-hidden="true">
              {LETTERMARKS[t.icon] ?? <Ico name={t.icon} />}
            </span>
            {t.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
