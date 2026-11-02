/**
 * Builds the `href` for a plain `<a>` that must load a new document rather
 * than navigate client-side.
 *
 * The `/v2` preview and the live site are separate route groups with separate
 * global stylesheets. A `next/link` hop between them is a soft navigation, and
 * Next does not unload stylesheets on soft navigations — the two design systems
 * would then style each other's pages. Crossing between them is therefore
 * always a full page load via `<a>`, which `next/link` would otherwise handle
 * for us in two ways reproduced here:
 *
 * - the deployment `basePath` (`NEXT_PUBLIC_BASE_PATH`, see `next.config.ts`)
 *   is prefixed, and
 * - a trailing slash is added to match `trailingSlash: true`, so GitHub Pages
 *   serves the page directly instead of answering with a redirect.
 *
 * In-page anchors (`#…`), absolute URLs and `mailto:`/`tel:` links pass
 * through unchanged.
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function documentHref(path: string): string {
  if (!path.startsWith("/")) return path;
  const [pathname, hash = ""] = path.split("#");
  const withSlash = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return `${BASE_PATH}${withSlash}${hash ? `#${hash}` : ""}`;
}
