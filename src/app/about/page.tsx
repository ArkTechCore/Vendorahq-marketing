
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "About VendoraHQ - Retail Technology Company",
  description:
    "Learn about VendoraHQ, its retail software products VendoraPOS, VendoraKiosk and VendoraLoyalty, and founder Yousuf Mohammed.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About VendoraHQ",
    description:
      "Meet VendoraHQ, a retail technology venture founded by Yousuf Mohammed.",
    url: "https://vendorahq.app/about",
    type: "website",
  },
};

const products = [
  {
    name: "VendoraPOS",
    description:
      "Retail point-of-sale software designed to support checkout, inventory, reporting, and store operations.",
    href: "/products/pos",
  },
  {
    name: "VendoraKiosk",
    description:
      "Self-service retail technology designed to create more convenient customer experiences.",
    href: "/products/kiosk",
  },
  {
    name: "VendoraLoyalty",
    description:
      "An upcoming customer rewards and engagement platform.",
    href: "/products/loyalty",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 pb-20 xl:px-0">
      <Navbar />

      <section className="py-20 md:py-28">
        <p className="mb-5 font-semibold text-[#26845D]">
          ABOUT VENDORAHQ
        </p>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-black md:text-6xl">
          Building technology for modern retail.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-[#555]">
          VendoraHQ is a retail technology venture founded by
          Yousuf Mohammed. We are developing software that helps
          retail businesses simplify everyday operations and
          improve customer experiences.
        </p>

        <p className="mt-5 max-w-3xl leading-8 text-[#555]">
          Our product portfolio includes VendoraPOS,
          VendoraKiosk, and the upcoming VendoraLoyalty
          platform. Our software is being prepared for
          commercial launch.
        </p>
      </section>

      <section className="border-t border-gray-200 py-16">
        <h2 className="text-3xl font-bold text-black">
          Our Products
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="rounded-2xl border border-gray-200 bg-white p-7 transition-colors hover:border-[#26845D]"
            >
              <h3 className="text-xl font-semibold text-black">
                {product.name}
              </h3>

              <p className="mt-4 leading-7 text-[#555]">
                {product.description}
              </p>

              <span className="mt-6 inline-block font-semibold text-[#26845D]">
                Explore product →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-gray-200 py-16">
        <p className="font-semibold text-[#26845D]">
          MEET THE FOUNDER
        </p>

        <h2 className="mt-4 text-3xl font-bold text-black">
          Yousuf Mohammed
        </h2>

        <p className="mt-5 max-w-3xl leading-8 text-[#555]">
          Yousuf Mohammed is the founder and software developer
          behind VendoraHQ. His work focuses on building retail
          technology products and the systems that support them.
        </p>

        <Link
          href="/founder"
          className="mt-7 inline-block rounded-xl bg-[#26845D] px-6 py-3 font-semibold text-white hover:bg-[#206B4C]"
        >
          Meet the Founder
        </Link>
      </section>

      <section className="border-t border-gray-200 py-16">
        <h2 className="text-3xl font-bold text-black">
          Connect with VendoraHQ
        </h2>

        <p className="mt-4 text-[#555]">
          Interested in our retail technology products or
          upcoming launch?
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-block font-semibold text-[#26845D]"
        >
          Contact VendoraHQ →
        </Link>
      </section>
    </main>
  );
}
