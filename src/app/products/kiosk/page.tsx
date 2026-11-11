
import type { Metadata } from "next";
import ProductPage from "@/components/product-page";

export const metadata: Metadata = {
  title: "VendoraKiosk - Self-Service Retail Kiosk Software",
  description:
    "Explore VendoraKiosk by VendoraHQ, a self-service retail kiosk solution designed for customer ordering and streamlined store operations.",
  alternates: {
    canonical: "/products/kiosk",
  },
  openGraph: {
    title: "VendoraKiosk | Self-Service Kiosk Software",
    description:
      "Discover VendoraKiosk, self-service kiosk technology from VendoraHQ.",
    url: "https://vendorahq.app/products/kiosk",
    type: "website",
  },
};

export default function KioskPage() {
  return <ProductPage productKey="kiosk" />;
}
