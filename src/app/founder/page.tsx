
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";

const siteUrl = "https://vendorahq.app";

export const metadata: Metadata = {
  title: "Yousuf Mohammed | Founder & Lead Developer of VendoraHQ",
  description:
    "Meet Yousuf Mohammed, founder, software architect, and lead developer of VendoraHQ. Explore his work on VendoraPOS, VendoraKiosk, retail SaaS architecture, and software engineering.",
  alternates: {
    canonical: "/founder",
  },
  openGraph: {
    title: "Yousuf Mohammed | Founder of VendoraHQ",
    description:
      "The founder and software developer building VendoraHQ's retail technology ecosystem, including VendoraPOS and VendoraKiosk.",
    url: `${siteUrl}/founder`,
    type: "profile",
    siteName: "VendoraHQ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yousuf Mohammed | Founder of VendoraHQ",
    description:
      "Software developer, technology entrepreneur, and founder of VendoraHQ.",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/founder#person`,
  name: "Yousuf Mohammed",
  url: `${siteUrl}/founder`,
  jobTitle: "Founder and Lead Software Developer",
  description:
    "Yousuf Mohammed is the founder and lead software developer of VendoraHQ, an independent retail technology venture developing point-of-sale, self-service kiosk, and related business software.",
  worksFor: {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "VendoraHQ",
    url: siteUrl,
  },
  founder: {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "VendoraHQ",
  },
  knowsAbout: [
    "Software Engineering",
    "Full-Stack Development",
    "Python",
    "Django",
    "Django REST Framework",
    "PostgreSQL",
    "React",
    "REST APIs",
    "Multi-Tenant SaaS Architecture",
    "Retail Technology",
    "Point-of-Sale Systems",
    "Application Security",
    "Payment Integration Architecture",
  ],
};

const products = [
  {
    number: "01",
    name: "VendoraPOS",
    category: "POINT-OF-SALE SOFTWARE",
    status: "DEVELOPMENT & TESTING",
    description:
      "A retail point-of-sale and store management platform designed to bring checkout, inventory, reporting, employee workflows, and merchant administration together.",
    highlights: [
      "Checkout and transaction workflows",
      "Inventory and product management",
      "Sales reporting and store operations",
      "Merchant and employee administration",
      "Role-based permissions and tenant isolation",
      "Payment integration and verification architecture",
    ],
    href: "/products/pos",
  },
  {
    number: "02",
    name: "VendoraKiosk",
    category: "SELF-SERVICE RETAIL",
    status: "DEVELOPMENT & TESTING",
    description:
      "A customer-facing self-service retail application intended to complement traditional checkout systems and simplify the customer experience.",
    highlights: [
      "Self-service customer workflows",
      "Retail-focused user experience",
      "Product ecosystem integration",
      "Checkout process efficiency",
    ],
    href: "/products/kiosk",
  },
  {
    number: "03",
    name: "VendoraLoyalty",
    category: "CUSTOMER ENGAGEMENT",
    status: "PLANNED",
    description:
      "A planned customer loyalty and rewards application designed to connect merchants and customers through engagement and retention tools.",
    highlights: [
      "Digital loyalty programs",
      "Customer rewards",
      "Merchant-connected experiences",
      "Customer engagement tools",
    ],
    href: "/products/loyalty",
  },
];

const engineeringAreas = [
  {
    number: "01",
    title: "Backend Engineering",
    description:
      "Designing application services, REST APIs, database structures, and business logic using Python, Django, and Django REST Framework.",
  },
  {
    number: "02",
    title: "SaaS Architecture",
    description:
      "Developing multi-tenant application structures, merchant workflows, relational data models, and modular software components.",
  },
  {
    number: "03",
    title: "Security & Access Control",
    description:
      "Working with authentication, authorization, role-based permissions, tenant isolation, administrative governance, and auditability.",
  },
  {
    number: "04",
    title: "Payment Architecture",
    description:
      "Designing provider-managed payment workflows focused on verified approvals, transaction integrity, idempotency, and reconciliation.",
  },
  {
    number: "05",
    title: "Retail Operations",
    description:
      "Translating real retail challenges into practical software features for checkout, inventory, reporting, and store management.",
  },
  {
    number: "06",
    title: "Product Development",
    description:
      "Taking software from requirements and architecture through implementation, debugging, testing, refinement, and launch preparation.",
  },
];

const otherProjects = [
  {
    name: "Aqvera",
    category: "COMPLIANCE SAAS",
    description:
      "A multi-tenant software project for backflow compliance workflows, including customer, property, and device management, backend APIs, authentication, and access controls.",
    stack: "Django / DRF / Next.js",
  },
  {
    name: "DealerOps",
    category: "BUSINESS OPERATIONS",
    description:
      "An operational software concept for multi-location retail organizations, including staff scheduling, store reporting, performance tracking, and administrative workflows.",
    stack: "SaaS Architecture / Retail Operations",
  },
  {
    name: "PlayOn",
    category: "ANDROID DEVELOPMENT",
    description:
      "An Android media application project built around evaluating and customizing an open-source playback foundation, with a focus on interface and playback improvements.",
    stack: "Android / Open Source",
  },
];

const technologies = [
  "Python",
  "Django",
  "Django REST Framework",
  "JavaScript",
  "React",
  "Next.js",
  "PostgreSQL",
  "SQL",
  "REST APIs",
  "HTML & CSS",
  "Git & GitHub",
  "Multi-Tenant SaaS",
  "RBAC",
  "Application Security",
  "Payment Architecture",
  "Database Design",
];

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#26845D]">
      {children}
    </p>
  );
}

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold tracking-tight text-[#14241D] md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-[#65736B] md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default function FounderPage() {
  return (
    <main className="min-h-screen bg-[#FAFBF8] text-[#14241D]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <div className="mx-auto max-w-7xl px-5 md:px-8 xl:px-10">
        <Navbar />

        {/* HERO */}
        <section className="relative overflow-hidden pb-24 pt-20 md:pb-32 md:pt-28">
          <div className="pointer-events-none absolute -right-32 top-0 h-[440px] w-[440px] rounded-full bg-[#DDF3E6] opacity-70 blur-3xl" />

          <div className="relative z-10 grid items-center gap-14 lg:grid-cols-[1.35fr_0.65fr]">
            <div>
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#CDE7D7] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#26845D]">
                <span className="h-2 w-2 rounded-full bg-[#26845D]" />
                Founder of VendoraHQ
              </div>

              <h1 className="max-w-4xl text-5xl font-bold leading-[1.08] tracking-[-0.055em] md:text-7xl lg:text-[82px]">
                Yousuf
                <br />
                <span className="text-[#26845D]">
                  Mohammed.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-xl font-medium leading-relaxed text-[#30473A] md:text-2xl">
                Founder. Software Developer.
                <br />
                Building technology for modern retail.
              </p>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[#65736B]">
                I&apos;m the founder and lead software developer
                of VendoraHQ, an independent retail technology
                venture focused on developing software that
                makes business operations simpler, more
                connected, and more efficient.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#my-work"
                  className="rounded-xl bg-[#26845D] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#206B4C]"
                >
                  Explore My Work
                </a>

                <Link
                  href="/contact"
                  className="rounded-xl border border-[#D6E0D8] bg-white px-7 py-4 text-sm font-semibold text-[#14241D] transition hover:border-[#26845D]"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* FOUNDER IDENTITY CARD */}
            <div className="relative">
              <div className="rounded-[32px] border border-[#DDE9DF] bg-white p-8 shadow-[0_24px_80px_rgba(21,65,42,0.07)] md:p-10">
                <div className="mb-12 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#E5F4E9] text-3xl font-bold text-[#26845D]">
                  YM
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#26845D]">
                  FOUNDER PROFILE
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight">
                  Building beyond
                  <br />
                  the checkout.
                </h2>

                <p className="mt-5 leading-7 text-[#65736B]">
                  Connecting software engineering, retail
                  operations, and product development through
                  the VendoraHQ ecosystem.
                </p>

                <div className="mt-9 space-y-5 border-t border-[#E6EEE8] pt-7">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#87958B]">
                      Venture
                    </p>
                    <p className="mt-1 font-semibold">
                      VendoraHQ
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#87958B]">
                      Primary Focus
                    </p>
                    <p className="mt-1 font-semibold">
                      Retail Software & SaaS
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#87958B]">
                      Role
                    </p>
                    <p className="mt-1 font-semibold">
                      Founder & Lead Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STORY */}
        <section
          id="story"
          className="border-t border-[#E2EAE3] py-24"
        >
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionLabel>THE STORY</SectionLabel>

              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                From understanding
                <br />
                retail to building
                <br />
                its technology.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-9 text-[#596B60]">
              <p>
                My interest in retail technology comes from
                understanding how businesses operate in the
                real world. Working in a retail environment
                exposed me to the everyday challenges of
                customer service, sales operations, reporting,
                and store management.
              </p>

              <p>
                I became interested in how software could
                reduce repetitive work, connect fragmented
                processes, and make operational information
                easier to manage.
              </p>

              <p>
                That perspective helped shape VendoraHQ:
                a technology venture focused on building
                practical software for retail businesses.
              </p>

              <p>
                As a developer, I work across product
                architecture, backend systems, databases,
                application security, and user-facing
                functionality. My goal is to build software
                that is technically reliable and genuinely
                useful to the people operating it.
              </p>
            </div>
          </div>
        </section>

        {/* VENDORAHQ */}
        <section className="rounded-[36px] bg-[#153F2C] px-7 py-16 text-white md:px-14 md:py-20">
          <SectionLabel>MY STARTUP</SectionLabel>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
                VendoraHQ
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-9 text-[#D3E8DA]">
                VendoraHQ is an independent retail software
                venture developing a connected ecosystem of
                business technology products.
              </p>

              <p className="mt-5 max-w-2xl leading-8 text-[#BBD5C5]">
                The vision is to bring essential retail
                capabilities together, from checkout and
                inventory to self-service experiences and
                future customer loyalty tools.
              </p>

              <Link
                href="/about"
                className="mt-9 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-[#153F2C] transition hover:bg-[#E5F4E9]"
              >
                Discover VendoraHQ
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["01", "Point-of-Sale"],
                ["02", "Self-Service"],
                ["03", "Merchant Operations"],
                ["04", "Customer Engagement"],
              ].map(([number, title]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-white/15 bg-white/5 p-6"
                >
                  <p className="text-sm font-semibold text-[#91D7A8]">
                    {number}
                  </p>

                  <p className="mt-7 text-lg font-semibold">
                    {title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section
          id="my-work"
          className="py-28"
        >
          <SectionLabel>PRODUCT ECOSYSTEM</SectionLabel>

          <SectionHeading
            title="Software I'm building."
            description="Three products, one connected vision: making retail operations more efficient and customer experiences more accessible."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="flex flex-col rounded-[28px] border border-[#DFE9E1] bg-white p-8 transition hover:border-[#A4CDB1] hover:shadow-[0_18px_60px_rgba(20,60,35,0.06)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-4xl font-bold text-[#D8EADF]">
                    {product.number}
                  </span>

                  <span className="rounded-full bg-[#EDF6EF] px-3 py-1 text-[10px] font-bold tracking-wide text-[#26845D]">
                    {product.status}
                  </span>
                </div>

                <p className="mt-10 text-xs font-bold uppercase tracking-[0.17em] text-[#26845D]">
                  {product.category}
                </p>

                <h3 className="mt-3 text-3xl font-bold tracking-tight">
                  {product.name}
                </h3>

                <p className="mt-5 leading-8 text-[#65736B]">
                  {product.description}
                </p>

                <div className="mt-7 flex-1 border-t border-[#E6EEE8] pt-6">
                  <p className="mb-4 text-sm font-semibold">
                    Development Focus
                  </p>

                  <ul className="space-y-3">
                    {product.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm leading-6 text-[#65736B]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#26845D]" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={product.href}
                  className="mt-9 inline-flex items-center gap-2 font-semibold text-[#26845D] hover:text-[#174D34]"
                >
                  Explore Product
                  <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* ENGINEERING */}
        <section className="border-t border-[#E2EAE3] py-28">
          <SectionLabel>TECHNICAL EXPERTISE</SectionLabel>

          <SectionHeading
            title="Engineering the foundation."
            description="My work extends beyond interface development into the systems, data structures, permissions, and transaction workflows that support business software."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {engineeringAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-[#E0EAE2] bg-white p-7"
              >
                <p className="text-sm font-bold text-[#26845D]">
                  {area.number}
                </p>

                <h3 className="mt-6 text-xl font-bold">
                  {area.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#65736B]">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section className="rounded-[32px] bg-[#EAF4EC] px-7 py-16 md:px-14">
          <SectionLabel>TECHNOLOGY STACK</SectionLabel>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Tools and technologies.
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-[#65736B]">
            Technologies and engineering concepts used
            across my software development work.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-xl border border-[#D1E4D5] bg-white px-4 py-3 text-sm font-medium text-[#274A35]"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* OTHER PROJECTS */}
        <section className="py-28">
          <SectionLabel>BEYOND VENDORAHQ</SectionLabel>

          <SectionHeading
            title="Exploring more than retail."
            description="Alongside VendoraHQ, I explore other software domains through independent development projects and technical experimentation."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {otherProjects.map((project) => (
              <div
                key={project.name}
                className="rounded-[24px] border border-[#E0EAE2] bg-white p-7"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#26845D]">
                  {project.category}
                </p>

                <h3 className="mt-5 text-2xl font-bold">
                  {project.name}
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#65736B]">
                  {project.description}
                </p>

                <div className="mt-7 border-t border-[#E6EEE8] pt-5 text-xs font-medium text-[#56745F]">
                  {project.stack}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BACKGROUND */}
        <section className="border-t border-[#E2EAE3] py-28">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <SectionLabel>BACKGROUND</SectionLabel>

              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Technology meets
                real-world operations.
              </h2>

              <p className="mt-7 leading-8 text-[#65736B]">
                My experience in telecommunications retail
                has given me practical exposure to customer
                service, sales transactions, reporting,
                and store operations.
              </p>

              <p className="mt-5 leading-8 text-[#65736B]">
                That experience helps me approach software
                development with both technical and
                operational perspectives.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#E0EAE2] bg-white p-8">
              <SectionLabel>EDUCATION</SectionLabel>

              <h3 className="text-xl font-bold">
                Computer Science & Information Technology
              </h3>

              <p className="mt-4 leading-8 text-[#65736B]">
                Undergraduate studies in Computer Science
                and Information Technology, with interests
                in programming, database systems,
                information systems, and software development.
              </p>

              <div className="mt-8 border-t border-[#E6EEE8] pt-7">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#26845D]">
                  PROFESSIONAL FOCUS
                </p>

                <p className="mt-3 leading-8 text-[#65736B]">
                  Software engineering, backend systems,
                  SaaS architecture, retail technology,
                  and entrepreneurship.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VISION */}
        <section className="rounded-[36px] bg-[#153F2C] px-7 py-20 text-center text-white md:px-16 md:py-24">
          <SectionLabel>THE VISION</SectionLabel>

          <h2 className="mx-auto max-w-4xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Building software that connects
            technology with real business needs.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-9 text-[#C5DFCE]">
            My goal is to continue developing reliable,
            secure, and practical software products,
            bringing VendoraHQ from product development
            into real-world retail environments.
          </p>
        </section>

        {/* CONNECT */}
        <section className="py-28">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <SectionLabel>CONNECT</SectionLabel>

              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Let's connect.
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-[#65736B]">
                Interested in VendoraHQ, software engineering,
                retail technology, or potential collaboration?
                Explore my work or get in touch.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-[#26845D] px-7 py-4 text-sm font-semibold text-white hover:bg-[#206B4C]"
              >
                Contact VendoraHQ
              </Link>

              <a
                href="https://myousufcodes.github.io/Digital-Portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-[#D6E0D8] bg-white px-7 py-4 text-sm font-semibold text-[#14241D] hover:border-[#26845D]"
              >
                Developer Portfolio ↗
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-[#E2EAE3] py-8">
          <div className="flex flex-col justify-between gap-4 text-sm text-[#87958B] md:flex-row">
            <p>
              © {new Date().getFullYear()} VendoraHQ.
              All rights reserved.
            </p>

            <p>
              Yousuf Mohammed — Founder & Lead Software Developer
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
