
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
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const siteUrl = "https://vendorahq.app";

export const metadata: Metadata = {
  title: "VendoraHQ | Retail POS & Business Software",
  description:
    "Discover VendoraHQ, a retail technology venture founded by Yousuf Mohammed. Explore VendoraPOS, VendoraKiosk, and our vision for connected retail software.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "VendoraHQ | Building Technology for Modern Retail",
    description:
      "Meet VendoraHQ, founded by Yousuf Mohammed, and explore its connected retail technology ecosystem, including VendoraPOS and VendoraKiosk.",
    url: siteUrl,
    siteName: "VendoraHQ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VendoraHQ | Retail Technology",
    description:
      "Retail software innovation from VendoraHQ, founded by Yousuf Mohammed.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "VendoraHQ",
  url: siteUrl,
  description:
    "VendoraHQ is an independent retail technology venture developing point-of-sale, self-service kiosk, and connected retail business software.",
  founder: {
    "@type": "Person",
    "@id": `${siteUrl}/founder#person`,
    name: "Yousuf Mohammed",
    url: `${siteUrl}/founder`,
    jobTitle: "Founder and Lead Software Developer",
  },
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl space-y-20 scroll-smooth px-4 sm:space-y-24 md:space-y-32 lg:space-y-40 xl:px-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <Hero />

      <Features1 />
      <Features2 />
      <Features3 />
      <Features4 />

      <Testimonials />
      <Pricing />
      <FAQ />

      {/* FOUNDER SECTION */}
      <section
        aria-labelledby="founder-heading"
        className="relative overflow-hidden rounded-[32px] border border-[#DDE9DF] bg-[#F2F8F3] px-6 py-12 sm:px-10 md:px-14 md:py-16"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#DDF3E6] opacity-70 blur-3xl" />

        <div className="relative grid items-center gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <div className="relative mx-auto w-full max-w-[280px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-[#DDE9DF] bg-[#E7EEE8] shadow-lg">
              <Image
                src="/images/yousuf-mohammed.jpg"
                alt="Yousuf Mohammed, founder of VendoraHQ"
                fill
                sizes="(max-width: 768px) 280px, 300px"
                className="object-cover object-top"
              />
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#26845D]">
              MEET OUR FOUNDER
            </p>

            <h2
              id="founder-heading"
              className="mt-4 text-3xl font-bold tracking-tight text-[#14241D] sm:text-4xl"
            >
              Built from real retail experience.
            </h2>

            <p className="mt-5 text-lg font-semibold text-[#14241D]">
              Yousuf Mohammed
            </p>

            <p className="mt-1 text-sm font-medium text-[#26845D]">
              Founder &amp; Lead Software Developer
            </p>

            <p className="mt-6 leading-8 text-[#65736B]">
              VendoraHQ was founded by Yousuf Mohammed,
              a software developer with firsthand experience
              in retail operations. After seeing the challenges
              businesses face with disconnected tools,
              repetitive workflows, and limited visibility,
              he began developing technology designed
              around real business needs.
            </p>

            <p className="mt-4 leading-8 text-[#65736B]">
              His vision is to build a connected retail
              software ecosystem that makes everyday
              operations simpler for merchants and
              creates better experiences for customers.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/founder"
                className="inline-flex items-center justify-center rounded-xl bg-[#26845D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#206B4C]"
              >
                Meet Yousuf Mohammed
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-xl border border-[#C9DCCF] bg-white px-6 py-3 text-sm font-semibold text-[#14241D] transition hover:border-[#26845D]"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
