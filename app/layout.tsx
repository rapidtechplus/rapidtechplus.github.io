import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";
import { site } from "@/content/site";

// Inter is the only typeface, for every role (matches the ackplus.com
// reference). Variable font, so all weights come from one file.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Modern Software Products & Digital Systems`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "software company",
    "SaaS development",
    "custom web applications",
    "software studio",
    "Rapid Tech Plus",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — Modern Software Studio`,
    description:
      "We build modern software products, web platforms, and digital systems for growing businesses.",
    url: site.url,
    // `images` is deliberately not set here. The `opengraph-image.png` metadata
    // files cascade per segment, giving each template its own card; an explicit
    // entry would pin every page to one image. X falls back to og:image when
    // twitter:image is absent, so both are covered by the same asset.
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Modern Software Studio`,
    description:
      "We build modern software products, web platforms, and digital systems for growing businesses.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/brand/favicon-64.png", type: "image/png", sizes: "64x64" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Site-wide nodes. Pages reference these by `@id` instead of repeating them. */}
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
      </head>
      {/* Chrome, stylesheet and theme live in each route group's layout —
          `app/(site)/layout.tsx` for the live site, `app/v2/layout.tsx` for
          the v2 preview — so neither leaks into the other. */}
      <body>{children}</body>
    </html>
  );
}
