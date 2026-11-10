
import type { Metadata } from "next";
import ProductPage from "@/components/product-page";

export const metadata: Metadata = {
  title: "VendoraPOS",
  description:
    "Explore VendoraPOS, retail point-of-sale software for checkout, inventory, reporting, and store operations.",
};

export default function POSPage() {
  return <ProductPage productKey="pos" />;
}
