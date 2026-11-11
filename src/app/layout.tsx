
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
    default: "VendoraHQ (Vendora) | Retail POS & Business Technology",
    template: "%s | VendoraHQ",
  },

  description:
    "VendoraHQ (Vendora) builds modern retail technology, including VendoraPOS point-of-sale software, VendoraKiosk self-service solutions, and VendoraLoyalty.",

  applicationName: "VendoraHQ",

  keywords: [
    "Vendora",
    "VendoraHQ",
    "Vendora HQ",
    "Vendora POS",
    "VendoraPOS",
    "Vendora Kiosk",
    "VendoraKiosk",
    "Vendora Loyalty",
    "VendoraLoyalty",
    "Retail POS Software",
    "Point of Sale System",
    "Retail Technology",
    "Retail Management Software",
    "Self Service Kiosk",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "VendoraHQ",
    title: "VendoraHQ | Retail POS & Business Technology",
    description:
      "Explore VendoraHQ retail technology, including VendoraPOS, VendoraKiosk, and VendoraLoyalty.",
    locale: "en_US",
    images: [
      {
        url: "/brand/logo.jpeg",
        alt: "VendoraHQ Logo",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "VendoraHQ | Retail Technology",
    description:
      "VendoraHQ develops retail POS, self-service kiosk, and loyalty technology.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "VendoraHQ",
    alternateName: "Vendora",
    url: siteUrl,
    logo: `${siteUrl}/brand/logo.jpeg`,
    description:
      "VendoraHQ develops retail technology including VendoraPOS, VendoraKiosk, and VendoraLoyalty.",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.className} antialiased w-full min-h-screen overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(
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
