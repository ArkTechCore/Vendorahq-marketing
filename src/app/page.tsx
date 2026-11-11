
import CTA from "@/sections/cta";
import FAQ from "@/sections/faq";
import Features1 from "@/sections/features-1";
import Features2 from "@/sections/features-2";
import Features3 from "@/sections/features-3";
import Features4 from "@/sections/features-4";
import Footer from "@/sections/footer";
import Hero from "@/sections/hero";
import Pricing from "@/sections/pricing";
import Testimonials from "@/sections/testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl space-y-20 scroll-smooth px-4 sm:space-y-24 md:space-y-32 lg:space-y-40 xl:px-0">
      <Hero />
      <Features1 />
      <Features2 />
      <Features3 />
      <Features4 />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}