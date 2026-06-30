import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { site } from "@/lib/site";
import "./globals.css";
import BackToTop from "@/components/ui/BackToTop";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://crowncoco.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  verification: {
  google: "orkaRy1YZIFhxyVUz7WqE0EPhw4oKMAassUjfqzB6Lk",
},
  title: {
    default: "CROWN COCO® | Fresh. Clean. Trusted.",
    template: "%s | CROWN COCO®",
  },
  description:
    "Premium frozen grated coconut, dry fish, dry prawns, and fresh cut vegetables.",
  keywords: [
    "CROWN COCO",
    "Frozen Grated Coconut",
    "Dry Fish",
    "Dry Prawns",
    "Fresh Cut Vegetables",
    "Kerala Food Products",
    "Premium Coconut Products",
  ],
  applicationName: "CROWN COCO®",
  authors: [{ name: "CROWN COCO®" }],
  creator: "CROWN COCO®",
  publisher: "CROWN COCO®",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "CROWN COCO®",
    title: "CROWN COCO® | Fresh. Clean. Trusted.",
    description:
      "Premium frozen grated coconut, dry fish, dry prawns, and fresh cut vegetables.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CROWN COCO®",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CROWN COCO® | Fresh. Clean. Trusted.",
    description:
      "Premium frozen grated coconut, dry fish, dry prawns, and fresh cut vegetables.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: site.name,
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        email: site.email,
        telephone: site.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: `${site.address[0]}, ${site.address[1]}`,
          addressLocality: "Kochi",
          postalCode: "682006",
          addressRegion: "Kerala",
          addressCountry: "IN",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: site.phone,
          email: site.email,
          contactType: "customer service",
        },
        sameAs: [site.whatsapp],
      }),
    }}
  />

<ScrollProgress />
{children}

<ScrollProgress />

<BackToTop />

<Toaster
  position="bottom-right"
  richColors
  closeButton
/>

<Script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-LJ5QZXCNTV"
/>

<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-LJ5QZXCNTV');
  `}
</Script>
{children}

<ScrollProgress />

<BackToTop />

<Toaster
  position="bottom-right"
  richColors
  closeButton
/>

<Script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-LJ5QZXCNTV"
/>

<Script id="google-analytics">
  ...
</Script>

<Script id="microsoft-clarity">
  ...
</Script>

</body>

    </html>
  );
}