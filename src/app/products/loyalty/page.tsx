
import type { Metadata } from "next";
import ProductPage from "@/components/product-page";

export const metadata: Metadata = {
  title: "VendoraLoyalty — Coming Soon",
  description:
    "Discover the upcoming VendoraLoyalty customer rewards and engagement experience.",
};

export default function LoyaltyPage() {
  return <ProductPage productKey="loyalty" />;
}
