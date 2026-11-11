import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";

const siteUrl = "https://vendorahq.app";

export const metadata: Metadata = {
  title: "About VendoraHQ | Why We’re Building Better Retail Software",
  description:
    "Discover why VendoraHQ exists: to simplify disconnected retail workflows with connected point-of-sale, self-service, and future loyalty software.",
  alternates: { canonical: `${siteUrl}/about` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "About VendoraHQ | Retail Technology & Founder",
    description:
      "Learn why VendoraHQ is building connected retail technology to reduce operational friction for store owners and teams.",
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
  description: "Discover why VendoraHQ is building connected retail technology to simplify fragmented store workflows, and meet its founder.",
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

        {/* CUSTOMER-FOCUSED INTRODUCTION */}
        <section className="relative overflow-hidden pb-24 pt-20 md:pb-28 md:pt-28">
          <div className="pointer-events-none absolute -right-28 top-0 h-[400px] w-[400px] rounded-full bg-[#DDF3E6] opacity-70 blur-3xl" />
          <div className="relative max-w-5xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#CDE7D7] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#26845D]">
              <span className="h-2 w-2 rounded-full bg-[#26845D]" />
              OUR STORY · ABOUT VENDORAHQ
            </div>
            <h1 className="max-w-5xl text-5xl font-bold leading-[1.1] tracking-[-0.05em] md:text-7xl">
              Retail is already hard.
              <br />
              <span className="text-[#26845D]">Your software shouldn&apos;t be.</span>
            </h1>
            <p className="mt-9 max-w-3xl text-lg leading-9 text-[#52665A] md:text-xl">
              Behind every retail counter is a team juggling customers, inventory, payments,
              employees, and a hundred decisions that cannot wait. The last thing they need
              is technology that adds more work.
            </p>
            <p className="mt-5 max-w-3xl leading-8 text-[#65736B]">
              That&apos;s why we&apos;re building VendoraHQ: a connected retail software ecosystem
              designed around the realities of running a store, not just the features on a checklist.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#our-story" className="rounded-xl bg-[#26845D] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#206B4C]">
                Discover Our Story
              </a>
              <a href="#products" className="rounded-xl border border-[#D6E0D8] bg-white px-7 py-4 text-sm font-semibold transition hover:border-[#26845D]">
                Explore Our Products
              </a>
            </div>
          </div>
        </section>

        {/* MARKET CHALLENGE */}
        <section id="our-story" className="border-t border-[#E2EAE3] py-24 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <Eyebrow>THE PROBLEM WE SEE</Eyebrow>
              <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
                Too many tools. Too many steps. Not enough clarity.
              </h2>
            </div>
            <div className="space-y-6 text-base leading-9 text-[#596B60]">
              <p>
                A customer is waiting at checkout. Someone needs to check stock.
                The sales report is in another system. The manager is trying to
                piece together what happened across the day.
              </p>
              <p>
                For many retailers, these aren&apos;t unusual moments. They&apos;re
                part of the daily routine. Disconnected tools, repeated data entry,
                manual reports, and fragmented workflows can make simple tasks
                feel unnecessarily complicated.
              </p>
              <p>
                We believe store owners should spend less time chasing information
                and more time serving customers, supporting their teams, and growing
                their businesses.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { number: "01", title: "Disconnected systems", text: "Checkout, inventory, and reporting can live in separate places, making it harder to see the whole business." },
              { number: "02", title: "Repetitive manual work", text: "Teams lose valuable time switching tools, re-entering information, and preparing operational updates." },
              { number: "03", title: "Limited visibility", text: "When information is scattered, owners and managers have a harder time making timely, confident decisions." },
            ].map((problem) => (
              <div key={problem.number} className="rounded-[24px] border border-[#DFE9E1] bg-white p-8">
                <p className="text-sm font-bold text-[#26845D]">{problem.number}</p>
                <h3 className="mt-5 text-xl font-bold">{problem.title}</h3>
                <p className="mt-4 leading-8 text-[#65736B]">{problem.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY WE STARTED */}
        <section className="rounded-[36px] bg-[#153F2C] px-7 py-16 text-white md:px-14 md:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A9DDB9]">WHY VENDORAHQ EXISTS</p>
          <h2 className="mt-5 max-w-4xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            What if retail technology worked together as naturally as the people running the store?
          </h2>
          <div className="mt-8 grid gap-8 text-base leading-9 text-[#D3E8DA] lg:grid-cols-2">
            <p>
              VendoraHQ grew from firsthand exposure to the everyday realities of
              retail operations. Our founder, <Link href="/founder" className="font-semibold text-white underline underline-offset-4 hover:text-[#A9DDB9]">Yousuf Mohammed</Link>,
              saw how customer service, store reporting, and operational tasks
              could become more difficult when processes didn&apos;t connect.
            </p>
            <p>
              Instead of accepting that friction as part of the job, we set out
              to build something more useful: software shaped by real store needs,
              with simpler workflows and a connected foundation that can grow
              alongside a business.
            </p>
          </div>
        </section>

        {/* WHAT WE ARE CHANGING */}
        <section className="py-24 md:py-28">
          <Eyebrow>WHAT WE&apos;RE CHANGING</Eyebrow>
          <h2 className="mt-5 max-w-4xl text-3xl font-bold tracking-tight md:text-5xl">
            One connected vision. Less operational friction.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#65736B]">
            We&apos;re not trying to add another disconnected tool to the counter.
            We&apos;re developing products that address different parts of the
            retail journey and are designed to work toward a more connected experience.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] border border-[#DFE9E1] bg-white p-8 md:p-10">
              <Eyebrow>FOR RETAIL TEAMS</Eyebrow>
              <h3 className="mt-5 text-2xl font-bold">More clarity in the day-to-day.</h3>
              <p className="mt-5 leading-8 text-[#65736B]">
                Our goal is to bring checkout, inventory, reporting, and store
                management closer together, so teams can spend less effort
                navigating software and more effort running the store.
              </p>
            </div>
            <div className="rounded-[28px] border border-[#DFE9E1] bg-white p-8 md:p-10">
              <Eyebrow>FOR CUSTOMERS</Eyebrow>
              <h3 className="mt-5 text-2xl font-bold">A smoother experience from start to finish.</h3>
              <p className="mt-5 leading-8 text-[#65736B]">
                We&apos;re exploring self-service experiences and future loyalty
                tools that can make shopping more convenient and help merchants
                build lasting customer relationships.
              </p>
            </div>
          </div>
          <p className="mt-8 max-w-3xl leading-8 text-[#65736B]">
            VendoraHQ is in its product development and launch-preparation stage.
            We&apos;re focused on building, testing, and refining the software before
            making promises about what it can deliver in live stores.
          </p>
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
