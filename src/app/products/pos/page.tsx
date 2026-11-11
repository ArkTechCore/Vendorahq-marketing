
import type { Metadata } from "next";
import ProductPage from "@/components/product-page";

export const metadata: Metadata = {
  title: "VendoraPOS - Retail Point of Sale Software",
  description:
    "Explore VendoraPOS by VendoraHQ. Retail point-of-sale software for checkout, inventory management, sales reporting, and daily store operations.",
  alternates: {
    canonical: "/products/pos",
  },
  openGraph: {
    title: "VendoraPOS | Retail Point of Sale Software",
    description:
      "Discover VendoraPOS, retail POS software for checkout, inventory, reporting, and store operations.",
    url: "https://vendorahq.app/products/pos",
    type: "website",
  },
};

export default function POSPage() {
  return <ProductPage productKey="pos" />;
}
