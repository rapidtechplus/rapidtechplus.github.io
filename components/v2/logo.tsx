import { site } from "@/content/site";
import { documentHref } from "@/lib/document-href";
import { cn } from "@/lib/utils";

/** The arrow path, shared by the arrow stroke and the knockout mask. */
const ARROW = "M3 44 L42 6 M31.4 8 L42 6 L39.8 16.6";

type MarkProps = {
  /** Unique per page: SVG mask ids are document-global. */
  id: string;
  size?: number;
  /** Draw the arrow in on load (header), or render it static (footer). */
  animated?: boolean;
  className?: string;
};

/**
 * The "Rising R" mark (concept approved on the design canvas): a geometric R
 * whose leg is cut by the rising arrow, in the logo's own colours — navy body
 * (light) or near-white (dark) via `--v2-logo-r`, steel leg, sky arrow.
 * Decorative: always paired with the visible company name.
 */
export function RisingMark({
  id,
  size = 36,
  animated = false,
  className,
}: MarkProps) {
  const maskId = `v2-mark-cut-${id}`;
  return (
    <svg
      className={cn("v2-mark", className)}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <mask
        id={maskId}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="48"
        height="48"
      >
        <rect width="48" height="48" fill="#fff" />
        <path
          d={ARROW}
          stroke="#000"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </mask>
      <g mask={`url(#${maskId})`}>
        <path
          d="M10 42 V9 H25 A9.5 9.5 0 0 1 25 28 H10"
          stroke="var(--v2-logo-r)"
          strokeWidth="6"
        />
        <path d="M22 28 L36 42" stroke="var(--v2-steel)" strokeWidth="6" />
      </g>
      <path
        className={animated ? "v2-mark-arrow" : undefined}
        d={ARROW}
        stroke="var(--v2-sky)"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Mark + wordmark, linking home. The full company name is always written out. */
export function Brand({ id, animated }: { id: string; animated?: boolean }) {
  return (
    <a
      className="v2-brand"
      href={documentHref("/v2")}
      aria-label={`${site.name} — v2 home`}
    >
      <RisingMark id={id} animated={animated} />
      <span aria-hidden="true">
        Rapid Tech <span className="v2-brand-plus">Plus</span>
      </span>
    </a>
  );
}
