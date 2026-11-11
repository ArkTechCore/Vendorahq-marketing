
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";

const siteUrl = "https://vendorahq.app";
const resumeUrl = "/resumes/Yousuf_Mohammed_Founder_Resume.pdf";

export const metadata: Metadata = {
  title: "Yousuf Mohammed | Founder Resume & Experience",
  description:
    "Explore the professional resume of Yousuf Mohammed, founder and lead software developer of VendoraHQ. Experience in software architecture, retail technology, Django, SaaS, and product development.",
  alternates: {
    canonical: `${siteUrl}/founder/resume`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Yousuf Mohammed | Professional Resume",
    description:
      "Founder of VendoraHQ, software architect, and full-stack developer building retail technology.",
    url: `${siteUrl}/founder/resume`,
    siteName: "VendoraHQ",
    type: "profile",
  },
};

const skills = [
  {
    title: "Programming & Web",
    items: ["Python", "JavaScript", "Java", "SQL", "HTML", "CSS", "React", "Next.js"],
  },
  {
    title: "Backend & Architecture",
    items: [
      "Django",
      "Django REST Framework",
      "REST APIs",
      "PostgreSQL",
      "Database Design",
      "Multi-Tenant SaaS",
    ],
  },
  {
    title: "Security & Payments",
    items: [
      "Authentication",
      "Authorization",
      "RBAC",
      "Tenant Isolation",
      "Audit Logging",
      "Payment Workflow Design",
    ],
  },
  {
    title: "Tools & Leadership",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Testing",
      "Technical Documentation",
      "Product Strategy",
      "Requirements Analysis",
    ],
  },
];

const products = [
  {
    name: "VendoraPOS",
    status: "Development & Testing",
    description:
      "Retail point-of-sale and store management software with checkout, inventory, sales reporting, employee operations, and merchant administration workflows.",
    highlights: [
      "Designed REST APIs, relational database models, and transaction workflows.",
      "Worked on role-based permissions, tenant isolation, and auditability.",
      "Designed provider-managed terminal payment verification, idempotency, and reconciliation safeguards.",
    ],
  },
  {
    name: "VendoraKiosk",
    status: "Development & Testing",
    description:
      "Self-service retail application designed to complement merchant checkout operations.",
    highlights: [
      "Developed customer-facing workflows and interface functionality.",
      "Worked on usability, product architecture, and integration requirements.",
      "Continuing refinement and testing before commercial introduction.",
    ],
  },
  {
    name: "VendoraLoyalty",
    status: "Planned",
    description:
      "A planned customer rewards and engagement application intended to connect merchants and customers.",
    highlights: [
      "Defined the initial product concept and intended customer experience.",
      "Envisioned rewards management and integration with VendoraHQ products.",
    ],
  },
];

const projects = [
  {
    name: "Aqvera",
    category: "Compliance SaaS",
    description:
      "Multi-tenant backflow compliance software using Django, Django REST Framework, and Next.js, with customer, property, and device management workflows.",
  },
  {
    name: "DealerOps",
    category: "Retail Operations",
    description:
      "Planning-stage software project for multi-location retail scheduling, reporting, employee management, and performance tracking.",
  },
  {
    name: "PlayOn",
    category: "Android Development",
    description:
      "Android media application project based on evaluating and customizing an open-source playback foundation.",
  },
  {
    name: "Student Records Database",
    category: "Academic SQL Project",
    description:
      "Database project involving student records, SQL queries, filtering, retrieval, and reporting.",
  },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/founder#person`,
  name: "Yousuf Mohammed",
  url: `${siteUrl}/founder`,
  image: `${siteUrl}/images/yousuf-mohammed.jpg`,
  jobTitle: "Founder and Lead Software Developer",
  description:
    "Founder and lead software developer of VendoraHQ, working on retail software, backend engineering, multi-tenant SaaS architecture, and product development.",
  worksFor: {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "VendoraHQ",
  },
  knowsAbout: [
    "Software Engineering",
    "Python",
    "Django",
    "PostgreSQL",
    "React",
    "Next.js",
    "Retail Technology",
    "SaaS Architecture",
    "Point-of-Sale Software",
    "Application Security",
  ],
};

function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#26845D]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#14241D] md:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export default function FounderResumePage() {
  return (
    <main className="min-h-screen bg-[#FAFBF8] text-[#14241D]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Navbar />

        {/* HERO */}
        <section className="grid items-center gap-12 py-20 md:grid-cols-[1fr_260px] md:py-28">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#26845D]">
              PROFESSIONAL RESUME
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-6xl">
              Yousuf <span className="text-[#26845D]">Mohammed.</span>
            </h1>

            <p className="mt-6 text-xl font-medium text-[#30473A]">
              Founder &amp; Lead Software Developer
            </p>

            <p className="mt-2 text-base text-[#65736B]">
              Software Architect | Technology Entrepreneur
            </p>

            <p className="mt-7 max-w-2xl leading-8 text-[#65736B]">
              Technology entrepreneur and full-stack software developer
              leading VendoraHQ, an independent retail technology venture
              developing connected software for modern retail businesses.
              My work spans product architecture, backend engineering,
              database design, application security, and retail operations.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={resumeUrl}
                download="Yousuf_Mohammed_Founder_Resume.pdf"
                className="rounded-xl bg-[#26845D] px-6 py-3 font-semibold text-white transition hover:bg-[#206B4C]"
              >
                Download Resume ↓
              </a>

              <Link
                href="/founder"
                className="rounded-xl border border-[#D6E0D8] bg-white px-6 py-3 font-semibold transition hover:border-[#26845D]"
              >
                Founder Profile
              </Link>
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-[260px] overflow-hidden rounded-[28px] border border-[#DDE9DF] bg-[#E7EEE8] shadow-xl">
            <Image
              src="/images/yousuf-mohammed.jpg"
              alt="Yousuf Mohammed, founder of VendoraHQ"
              fill
              priority
              sizes="260px"
              className="object-cover object-top"
            />
          </div>
        </section>

        {/* PROFESSIONAL PROFILE */}
        <section className="border-t border-[#E2EAE3] py-16">
          <SectionTitle
            eyebrow="PROFILE"
            title="Professional Summary"
          />

          <p className="max-w-4xl text-base leading-9 text-[#65736B]">
            I founded VendoraHQ to develop practical software that addresses
            real challenges in retail operations. My engineering focus
            includes multi-tenant SaaS platforms, Django and REST APIs,
            relational databases, authorization, auditability, payment
            integration architecture, and retail automation. I combine
            hands-on software development with experience in retail
            operations and ongoing undergraduate studies.
          </p>
        </section>

        {/* FOUNDER EXPERIENCE */}
        <section className="border-t border-[#E2EAE3] py-16">
          <SectionTitle
            eyebrow="EXPERIENCE"
            title="Founder & Entrepreneurial Experience"
          />

          <div className="rounded-[28px] border border-[#DFE9E1] bg-white p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-wider text-[#26845D]">
              INDEPENDENT RETAIL TECHNOLOGY VENTURE
            </p>

            <h3 className="mt-4 text-2xl font-bold">
              Founder, Lead Software Developer &amp; Product Architect
            </h3>

            <p className="mt-2 font-semibold text-[#26845D]">
              VendoraHQ
            </p>

            <p className="mt-2 text-sm text-[#87958B]">
              Product development, testing, and launch preparation
            </p>

            <ul className="mt-7 list-disc space-y-3 pl-5 leading-8 text-[#65736B]">
              <li>
                Founded VendoraHQ and defined a connected product
                ecosystem spanning VendoraPOS, VendoraKiosk,
                and planned VendoraLoyalty.
              </li>
              <li>
                Established product requirements from retail checkout,
                inventory, reporting, and employee workflows.
              </li>
              <li>
                Designed Django/DRF backend services, REST APIs,
                relational data models, and merchant application logic.
              </li>
              <li>
                Worked on tenant separation, role-based permissions,
                administrative governance, and auditability.
              </li>
              <li>
                Designed payment verification requirements including
                transaction integrity, idempotency, and reconciliation.
              </li>
              <li>
                Led iterative implementation, debugging, testing,
                documentation, and launch preparation.
              </li>
            </ul>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="border-t border-[#E2EAE3] py-16">
          <SectionTitle
            eyebrow="PRODUCT DEVELOPMENT"
            title="VendoraHQ Product Ecosystem"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="rounded-[24px] border border-[#DFE9E1] bg-white p-7"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-[#26845D]">
                  {product.status}
                </p>

                <h3 className="mt-4 text-2xl font-bold">
                  {product.name}
                </h3>

                <p className="mt-4 leading-7 text-[#65736B]">
                  {product.description}
                </p>

                <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-[#65736B]">
                  {product.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* OTHER PROJECTS */}
        <section className="border-t border-[#E2EAE3] py-16">
          <SectionTitle
            eyebrow="INDEPENDENT WORK"
            title="Additional Technology Projects"
          />

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-2xl border border-[#DFE9E1] bg-white p-7"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-[#26845D]">
                  {project.category}
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  {project.name}
                </h3>

                <p className="mt-4 leading-7 text-[#65736B]">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* RETAIL EXPERIENCE */}
        <section className="border-t border-[#E2EAE3] py-16">
          <SectionTitle
            eyebrow="INDUSTRY EXPERIENCE"
            title="Retail Sales & Store Operations"
          />

          <h3 className="text-xl font-bold">
            Metro by T-Mobile
          </h3>

          <p className="mt-5 max-w-4xl leading-8 text-[#65736B]">
            Supported customers with mobile products, service
            activations, account-related requests, and retail
            transactions. Gained firsthand experience in sales
            reporting, store procedures, customer service, and
            fragmented operational workflows. These experiences
            helped inform the product direction of VendoraHQ.
          </p>
        </section>

        {/* SKILLS */}
        <section className="border-t border-[#E2EAE3] py-16">
          <SectionTitle
            eyebrow="TECHNICAL EXPERTISE"
            title="Skills & Technologies"
          />

          <div className="grid gap-5 md:grid-cols-2">
            {skills.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-[#DFE9E1] bg-white p-7"
              >
                <h3 className="text-lg font-bold">
                  {group.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-[#EDF6EF] px-3 py-2 text-xs font-medium text-[#276342]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="border-t border-[#E2EAE3] py-16">
          <SectionTitle
            eyebrow="EDUCATION"
            title="Academic Background"
          />

          <div className="rounded-2xl border border-[#DFE9E1] bg-white p-7">
            <h3 className="text-xl font-bold">
              Computer Science &amp; Information Technology
            </h3>

            <p className="mt-4 leading-8 text-[#65736B]">
              Undergraduate studies focused on programming,
              web development, database management,
              information systems, and software development.
            </p>

            <p className="mt-5 text-sm text-[#87958B]">
              Institution and expected graduation date to be
              confirmed before publication.
            </p>
          </div>
        </section>

        {/* LANGUAGES */}
        <section className="border-t border-[#E2EAE3] py-16">
          <SectionTitle
            eyebrow="ADDITIONAL INFORMATION"
            title="Languages & Professional Focus"
          />

          <p className="leading-8 text-[#65736B]">
            Languages: English, Hindi, Urdu, Telugu.
          </p>

          <p className="mt-4 leading-8 text-[#65736B]">
            Professional focus: Software architecture, backend
            engineering, application security, retail technology,
            product planning, and entrepreneurship.
          </p>
        </section>

        {/* CONTACT */}
        <section className="my-16 rounded-[32px] bg-[#153F2C] px-7 py-14 text-white md:px-12">
          <p className="text-xs font-bold uppercase tracking-wider text-[#91D7A8]">
            CONNECT
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Interested in my work?
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-[#D3E8DA]">
            Explore VendoraHQ, my software projects, or connect
            to discuss technology and collaboration.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:yousufcodes7@gmail.com"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-[#153F2C]"
            >
              Email Me
            </a>

            <a
              href="https://myousufcodes.github.io/Digital-Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white"
            >
              Developer Portfolio ↗
            </a>

            <Link
              href="/"
              className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white"
            >
              VendoraHQ
            </Link>
          </div>
        </section>

        <footer className="border-t border-[#E2EAE3] py-8 text-sm text-[#87958B]">
          © {new Date().getFullYear()} VendoraHQ.
          All rights reserved.
        </footer>
      </div>
    </main>
  );
}
