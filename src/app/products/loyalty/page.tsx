
import type { Metadata } from "next";
import ProductPage from "@/components/product-page";

export const metadata: Metadata = {
  title: "VendoraLoyalty - Customer Loyalty Software Coming Soon",
  description:
    "Discover VendoraLoyalty by VendoraHQ, an upcoming customer rewards and engagement solution for retail businesses.",
  alternates: {
    canonical: "/products/loyalty",
  },
  openGraph: {
    title: "VendoraLoyalty | Coming Soon",
    description:
      "Learn about the upcoming VendoraLoyalty customer rewards and engagement platform.",
    url: "https://vendorahq.app/products/loyalty",
    type: "website",
  },
};

export default function LoyaltyPage() {
  return <ProductPage productKey="loyalty" />;
}
