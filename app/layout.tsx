import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Background } from "@/components/background";
import { PointerSheen } from "@/components/pointer-sheen";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";
import { site } from "@/content/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
  variable: "--font-sora",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-jbmono",
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
  icons: { icon: "/favicon.svg" },
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta
          name="theme-color"
          content="#0a0a13"
          media="(prefers-color-scheme: dark)"
        />
        <meta
          name="theme-color"
          content="#fbfbfd"
          media="(prefers-color-scheme: light)"
        />
        {/* Site-wide nodes. Pages reference these by `@id` instead of repeating them. */}
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Background />
          <PointerSheen />
          <Nav />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
