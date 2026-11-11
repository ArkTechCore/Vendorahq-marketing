import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";

const siteUrl = "https://vendorahq.app";

export const metadata: Metadata = {
  title: "About VendoraHQ | Retail Software & Founder Yousuf Mohammed",
  description:
    "Discover VendoraHQ, the retail software venture founded by Yousuf Mohammed. Learn about VendoraPOS, VendoraKiosk, and the planned VendoraLoyalty platform.",
  alternates: { canonical: `${siteUrl}/about` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "About VendoraHQ | Retail Technology & Founder",
    description:
      "Learn about VendoraHQ, its retail technology products, and founder Yousuf Mohammed.",
    url: `${siteUrl}/about`,
    siteName: "VendoraHQ",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "About VendoraHQ | Founded by Yousuf Mohammed",
    description: "Meet the founder and explore the VendoraHQ retail software ecosystem.",
  },
};

const products = [
  {
    number: "01",
    name: "VendoraPOS",
    category: "POINT-OF-SALE",
    status: "Development & testing",
    description:
      "Retail point-of-sale software designed to support checkout, inventory, reporting, merchant administration, and everyday store operations.",
    href: "/products/pos",
  },
  {
    number: "02",
    name: "VendoraKiosk",
    category: "SELF-SERVICE RETAIL",
    status: "Development & testing",
    description:
      "Customer-facing self-service retail technology designed to make shopping and checkout experiences more convenient.",
    href: "/products/kiosk",
  },
  {
    number: "03",
    name: "VendoraLoyalty",
    category: "CUSTOMER ENGAGEMENT",
    status: "Planned",
    description:
      "A planned loyalty and rewards platform intended to help merchants build stronger connections with their customers.",
    href: "/products/loyalty",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "VendoraHQ",
  url: siteUrl,
  description:
    "An independent retail technology venture developing point-of-sale, self-service kiosk, and customer engagement software.",
  founder: {
    "@type": "Person",
    "@id": `${siteUrl}/founder#person`,
    name: "Yousuf Mohammed",
    url: `${siteUrl}/founder`,
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${siteUrl}/about#webpage`,
  url: `${siteUrl}/about`,
  name: "About VendoraHQ",
  description: "Learn about VendoraHQ, its products, and its founder.",
  about: { "@id": `${siteUrl}/#organization` },
  mainEntity: { "@id": `${siteUrl}/#organization` },
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#26845D]">
      {children}
    </p>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAFBF8] text-[#14241D]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, aboutPageSchema]).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-7xl px-5 md:px-8 xl:px-10">
        <Navbar />

        {/* INTRODUCTION */}
        <section className="relative overflow-hidden pb-24 pt-20 md:pb-28 md:pt-28">
          <div className="pointer-events-none absolute -right-28 top-0 h-[400px] w-[400px] rounded-full bg-[#DDF3E6] opacity-70 blur-3xl" />
          <div className="relative max-w-5xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#CDE7D7] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#26845D]">
              <span className="h-2 w-2 rounded-full bg-[#26845D]" />
              About VendoraHQ
            </div>
            <h1 className="text-5xl font-bold leading-[1.1] tracking-[-0.05em] md:text-7xl">
              Building technology
              <br className="hidden sm:block" /> for <span className="text-[#26845D]">modern retail.</span>
            </h1>
            <p className="mt-9 max-w-3xl text-lg leading-9 text-[#52665A] md:text-xl">
              VendoraHQ is an independent retail technology venture founded by{" "}
              <Link href="/founder" className="font-semibold text-[#26845D] underline decoration-[#A8D6B7] underline-offset-4 hover:text-[#174D34]">
                Yousuf Mohammed
              </Link>
              . We are developing connected software products to help retail businesses simplify operations and improve customer experiences.
            </p>
            <p className="mt-5 max-w-3xl leading-8 text-[#65736B]">
              Our product ecosystem includes VendoraPOS, VendoraKiosk, and the planned VendoraLoyalty platform. Our focus is on thoughtful engineering, practical workflows, and preparing software for real-world retail environments.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#products" className="rounded-xl bg-[#26845D] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#206B4C]">
                Explore Our Products
              </a>
              <Link href="/founder" className="rounded-xl border border-[#D6E0D8] bg-white px-7 py-4 text-sm font-semibold transition hover:border-[#26845D]">
                Meet Our Founder
              </Link>
            </div>
          </div>
        </section>

        {/* PURPOSE */}
        <section className="grid gap-6 border-t border-[#E2EAE3] py-20 md:grid-cols-2">
          <div className="rounded-[28px] border border-[#DFE9E1] bg-white p-8 md:p-10">
            <Eyebrow>OUR PURPOSE</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold tracking-tight">Make everyday retail simpler.</h2>
            <p className="mt-5 leading-8 text-[#65736B]">
              Retail teams work across checkout, inventory, reporting, and customer service. VendoraHQ aims to bring those essential workflows into software that is easier to use and manage.
            </p>
          </div>
          <div className="rounded-[28px] bg-[#153F2C] p-8 text-white md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A9DDB9]">OUR APPROACH</p>
            <h2 className="mt-5 text-3xl font-bold tracking-tight">Build for real operations.</h2>
            <p className="mt-5 leading-8 text-[#D3E8DA]">
              Our development priorities include reliable business workflows, maintainable systems, appropriate access controls, and connected product experiences.
            </p>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="border-t border-[#E2EAE3] py-24 md:py-28">
          <Eyebrow>THE PRODUCT ECOSYSTEM</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">One vision. Connected retail products.</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#65736B] md:text-lg">
            Each product addresses a different part of the retail experience, from in-store transactions to self-service and future customer engagement tools.
          </p>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {products.map((product) => (
              <article key={product.name} className="flex flex-col rounded-[28px] border border-[#DFE9E1] bg-white p-8 transition hover:border-[#A4CDB1] hover:shadow-[0_18px_60px_rgba(20,60,35,0.06)]">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-4xl font-bold text-[#D8EADF]">{product.number}</span>
                  <span className="rounded-full bg-[#EDF6EF] px-3 py-1 text-[11px] font-semibold text-[#26845D]">{product.status}</span>
                </div>
                <p className="mt-10 text-xs font-bold uppercase tracking-[0.17em] text-[#26845D]">{product.category}</p>
                <h3 className="mt-3 text-3xl font-bold tracking-tight">{product.name}</h3>
                <p className="mt-5 flex-1 leading-8 text-[#65736B]">{product.description}</p>
                <Link href={product.href} className="mt-9 inline-flex items-center gap-2 font-semibold text-[#26845D] hover:text-[#174D34]">
                  Explore Product <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* FOUNDER */}
        <section className="border-t border-[#E2EAE3] py-24 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="overflow-hidden rounded-[30px] border border-[#DDE9DF] bg-white shadow-[0_24px_80px_rgba(21,65,42,0.08)]">
                <div className="relative aspect-[4/5] bg-[#E8ECE8]">
                  <Image
                    src="/images/yousuf-mohammed.jpg"
                    alt="Yousuf Mohammed, founder and lead software developer of VendoraHQ"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#26845D]">FOUNDER OF VENDORAHQ</p>
                  <p className="mt-2 text-2xl font-bold">Yousuf Mohammed</p>
                  <p className="mt-1 text-sm text-[#65736B]">Founder & Lead Software Developer</p>
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-5 -right-5 -z-10 h-32 w-32 rounded-[28px] bg-[#DDF3E6]" />
            </div>
            <div>
              <Eyebrow>MEET THE FOUNDER</Eyebrow>
              <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">Yousuf Mohammed</h2>
              <p className="mt-4 text-xl font-medium text-[#30473A]">Founder & Lead Software Developer</p>
              <p className="mt-7 leading-9 text-[#65736B]">
                Yousuf Mohammed founded VendoraHQ to develop software shaped by real retail operations. His experience in telecommunications retail informs his approach to store workflows, reporting, and customer-facing technology.
              </p>
              <p className="mt-5 leading-9 text-[#65736B]">
                His technical work includes backend development, databases, multi-tenant SaaS architecture, application security, and product engineering. He leads the development of VendoraHQ&apos;s retail software ecosystem.
              </p>
              <Link href="/founder" className="mt-9 inline-flex rounded-xl bg-[#26845D] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#206B4C]">
                Read Yousuf&apos;s Founder Profile <span className="ml-2" aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </section>

        {/* VISION */}
        <section className="rounded-[36px] bg-[#153F2C] px-7 py-20 text-center text-white md:px-16 md:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A9DDB9]">LOOKING AHEAD</p>
          <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Practical software for the next generation of retail.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl leading-9 text-[#C5DFCE]">
            We are focused on continuing product development, strengthening reliability, and preparing VendoraHQ software for real-world use.
          </p>
        </section>

        {/* CONTACT */}
        <section className="py-24 md:py-28">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <Eyebrow>CONNECT WITH US</Eyebrow>
              <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">Let&apos;s talk retail technology.</h2>
              <p className="mt-5 max-w-2xl leading-8 text-[#65736B]">
                Interested in VendoraHQ, our software products, or a potential collaboration? We&apos;d love to hear from you.
              </p>
            </div>
            <Link href="/contact" className="inline-flex shrink-0 rounded-xl bg-[#26845D] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#206B4C]">
              Contact VendoraHQ <span className="ml-2" aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <footer className="border-t border-[#E2EAE3] py-8">
          <div className="flex flex-col justify-between gap-3 text-sm text-[#87958B] md:flex-row">
            <p>© {new Date().getFullYear()} VendoraHQ. All rights reserved.</p>
            <p>Founded by <Link href="/founder" className="underline underline-offset-4 hover:text-[#26845D]">Yousuf Mohammed</Link></p>
          </div>
        </footer>
      </div>
    </main>
  );
}
