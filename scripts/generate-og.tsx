/**
 * Renders the committed Open Graph PNGs. Run with `npm run og:generate` after
 * changing the brand template, `config/og-templates.ts`, or the site name/slogan.
 *
 * Why these are generated here and committed, rather than by Next's
 * `opengraph-image.tsx` route convention:
 *
 * That convention emits its image at an extensionless path (`/opengraph-image`).
 * GitHub Pages derives Content-Type from the file extension alone, so it serves
 * that file as `application/octet-stream` (measured against the live host, not
 * assumed), and every social crawler rejects it as an image. A committed
 * `opengraph-image.png` is served as `image/png` and is still picked up
 * automatically by the same metadata cascade, so the wiring stays idiomatic.
 *
 * This is also why the previous `og-image.svg` never worked: no major crawler
 * (Facebook, LinkedIn, X, Slack, WhatsApp) renders SVG Open Graph images.
 */
import { createRequire } from "node:module";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { ogImage, OG_SIZE } from "../lib/og-image";
import { ogTemplates } from "../config/og-templates";
import { site } from "../content/site";

// `next/og` ships without an ESM export map, so it must be reached via require.
const require = createRequire(import.meta.url);
const { ImageResponse } = require("next/og.js") as typeof import("next/og");

const APP_DIR = path.join(process.cwd(), "app");

async function main() {
  for (const { dir, title, eyebrow } of ogTemplates) {
    const outDir = path.join(APP_DIR, dir);
    await mkdir(outDir, { recursive: true });

    const png = Buffer.from(
      await new ImageResponse(
        ogImage({ title, eyebrow }),
        OG_SIZE,
      ).arrayBuffer(),
    );
    await writeFile(path.join(outDir, "opengraph-image.png"), png);

    // Next reads the adjacent `.alt.txt` for the image's alt text.
    await writeFile(
      path.join(outDir, "opengraph-image.alt.txt"),
      `${title} — ${site.name}`,
      "utf8",
    );

    console.log(
      `✓ app/${dir ? `${dir}/` : ""}opengraph-image.png (${png.length} bytes)`,
    );
  }
  console.log(`\nGenerated ${ogTemplates.length} Open Graph images.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
