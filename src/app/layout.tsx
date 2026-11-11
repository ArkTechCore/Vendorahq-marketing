
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/providers/lenis";

const dmSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://vendorahq.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "VendoraHQ | Retail POS & Business Software",
    template: "%s | VendoraHQ",
  },

  description:
    "VendoraHQ develops connected retail business software, including VendoraPOS point-of-sale systems, VendoraKiosk self-service technology, and planned VendoraLoyalty solutions.",

  applicationName: "VendoraHQ",

  keywords: [
    "VendoraHQ",
    "Vendora HQ",
    "VendoraHQ Software",
    "VendoraHQ Retail Technology",
    "VendoraPOS",
    "VendoraKiosk",
    "VendoraLoyalty",
    "Retail POS Software",
    "Point of Sale Software",
    "Retail Management Software",
    "Self-Service Retail Kiosk",
    "Retail Business Technology",
    "Retail SaaS",
    "Inventory Management Software",
    "Store Management Software",
  ],

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "VendoraHQ",
    title: "VendoraHQ | Retail POS & Business Software",
    description:
      "Discover VendoraHQ, a retail technology venture developing VendoraPOS, VendoraKiosk, and connected business software for modern merchants.",
    locale: "en_US",
    images: [
      {
        url: "/brand/logo.jpeg",
        alt: "VendoraHQ official brand logo",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "VendoraHQ | Retail Technology",
    description:
      "VendoraHQ develops connected retail technology, including point-of-sale software, self-service kiosks, and future loyalty solutions.",
    images: ["/brand/logo.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "VendoraHQ",
  legalName: undefined,
  url: siteUrl,
  logo: `${siteUrl}/brand/logo.jpeg`,
  description:
    "VendoraHQ is an independent retail technology venture developing connected point-of-sale, self-service kiosk, and retail business management software.",
  knowsAbout: [
    "Retail Technology",
    "Point-of-Sale Software",
    "Retail Management",
    "Inventory Management",
    "Self-Service Kiosks",
    "Business Software",
    "Retail SaaS",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "VendoraHQ Software Products",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "VendoraPOS",
        url: `${siteUrl}/products/pos`,
        description:
          "Retail point-of-sale and store management software.",
      },
      {
        "@type": "OfferCatalog",
        name: "VendoraKiosk",
        url: `${siteUrl}/products/kiosk`,
        description:
          "Self-service retail kiosk software.",
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "VendoraHQ",
  url: siteUrl,
  description:
    "Official website of VendoraHQ, an independent retail technology venture.",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: "en-US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...organizationSchema,
        "@context": undefined,
      },
      {
        ...websiteSchema,
        "@context": undefined,
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.className} antialiased w-full min-h-screen overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
