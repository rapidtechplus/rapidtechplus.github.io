import type { NextConfig } from "next";

// The site is deployed to GitHub Pages as a fully static export.
// When hosted at the domain root (rapidtechplus.github.io) basePath is empty.
// If moved to a project repo, set NEXT_PUBLIC_BASE_PATH="/repo-name".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  // A production build shares `.next` with any running `next dev`, which
  // corrupts both. Set NEXT_DIST_DIR to build alongside a live dev server.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  images: {
    // No image optimization server exists on GitHub Pages.
    unoptimized: true,
  },
};

export default nextConfig;
