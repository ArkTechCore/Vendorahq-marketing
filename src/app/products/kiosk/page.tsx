
import type { Metadata } from "next";
import ProductPage from "@/components/product-page";

export const metadata: Metadata = {
  title: "VendoraKiosk",
  description:
    "Explore VendoraKiosk, a self-service retail experience from VendoraHQ.",
};

export default function KioskPage() {
  return <ProductPage productKey="kiosk" />;
}
