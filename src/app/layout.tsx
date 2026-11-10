
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/providers/lenis";

const dmSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "VendoraHQ | Modern Retail Technology",
    template: "%s | VendoraHQ",
  },
  description:
    "Discover VendoraHQ, a retail technology platform bringing together VendoraPOS, VendoraKiosk, and VendoraLoyalty.",
  applicationName: "VendoraHQ",
  keywords: [
    "VendoraHQ",
    "VendoraPOS",
    "VendoraKiosk",
    "VendoraLoyalty",
    "Retail POS",
    "Point of Sale Software",
    "Retail Technology",
    "Retail Management",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.className} antialiased w-full min-h-screen overflow-x-hidden`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
