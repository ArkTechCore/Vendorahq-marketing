
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";

const siteUrl = "https://vendorahq.app";

export const metadata: Metadata = {
  title: "Yousuf Mohammed - Founder of VendoraHQ",
  description:
    "Meet Yousuf Mohammed, founder and software developer behind VendoraHQ, VendoraPOS, VendoraKiosk, and the upcoming VendoraLoyalty platform.",
  alternates: {
    canonical: "/founder",
  },
  openGraph: {
    title: "Yousuf Mohammed | Founder of VendoraHQ",
    description:
      "Learn about Yousuf Mohammed and his work building retail software through VendoraHQ.",
    url: `${siteUrl}/founder`,
    type: "profile",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/founder#person`,
  name: "Yousuf Mohammed",
  url: `${siteUrl}/founder`,
  jobTitle: "Founder and Software Developer",
  description:
    "Founder and software developer behind VendoraHQ and its retail technology products.",
  worksFor: {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "VendoraHQ",
    url: siteUrl,
  },
  knowsAbout: [
    "Retail Technology",
    "Point of Sale Software",
    "Software Development",
    "Retail Management Systems",
  ],
};

export default function FounderPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 pb-20 xl:px-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <Navbar />

      <section className="py-20 md:py-28">
        <p className="mb-5 font-semibold text-[#26845D]">
          FOUNDER OF VENDORAHQ
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-black md:text-6xl">
          Yousuf Mohammed
        </h1>

        <p className="mt-5 text-xl font-medium text-[#26845D]">
          Founder & Software Developer
        </p>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-[#555]">
          Yousuf Mohammed is a software developer and the
          founder of VendoraHQ, a retail technology venture
          focused on building practical software solutions
          for modern businesses.
        </p>

        <p className="mt-5 max-w-3xl leading-8 text-[#555]">
          His work includes developing VendoraPOS, a retail
          point-of-sale platform, alongside the VendoraHQ
          product ecosystem.
        </p>
      </section>

      <section className="border-t border-gray-200 py-16">
        <h2 className="text-3xl font-bold text-black">
          Building VendoraHQ
        </h2>

        <p className="mt-6 max-w-3xl leading-8 text-[#555]">
          VendoraHQ brings together software products intended
          to help retailers manage operations and improve
          customer experiences. Its product portfolio includes
          VendoraPOS, VendoraKiosk, and VendoraLoyalty.
        </p>

        <p className="mt-5 max-w-3xl leading-8 text-[#555]">
          The venture is preparing its technology for commercial
          launch, with an emphasis on reliable systems,
          practical functionality, and continued product
          development.
        </p>
      </section>

      <section className="border-t border-gray-200 py-16">
        <h2 className="text-3xl font-bold text-black">
          Projects
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            {
              name: "VendoraPOS",
              href: "/products/pos",
              detail: "Retail point-of-sale software",
            },
            {
              name: "VendoraKiosk",
              href: "/products/kiosk",
              detail: "Self-service retail technology",
            },
            {
              name: "VendoraLoyalty",
              href: "/products/loyalty",
              detail: "Upcoming customer loyalty platform",
            },
          ].map((project) => (
            <Link
              key={project.name}
              href={project.href}
              className="rounded-2xl border border-gray-200 p-6 hover:border-[#26845D]"
            >
              <h3 className="text-xl font-semibold text-black">
                {project.name}
              </h3>
              <p className="mt-3 text-[#555]">
                {project.detail}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-gray-200 py-16">
        <h2 className="text-3xl font-bold text-black">
          Learn More
        </h2>

        <p className="mt-4 max-w-3xl text-[#555]">
          Explore the company, its products, and its
          development journey.
        </p>

        <div className="mt-7 flex flex-wrap gap-4">
          <Link
            href="/about"
            className="rounded-xl bg-[#26845D] px-6 py-3 font-semibold text-white hover:bg-[#206B4C]"
          >
            About VendoraHQ
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-black hover:border-[#26845D]"
          >
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}
