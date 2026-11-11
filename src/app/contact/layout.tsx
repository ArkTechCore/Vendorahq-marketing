
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact VendoraHQ - Sales, Demos & Early Access",
  description:
    "Contact VendoraHQ to ask about VendoraPOS, VendoraKiosk, product demonstrations, pricing, and early-access opportunities.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact VendoraHQ",
    description:
      "Connect with VendoraHQ about retail software, product demos, and sales inquiries.",
    url: "https://vendorahq.app/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
