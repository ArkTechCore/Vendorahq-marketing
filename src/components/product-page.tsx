
"use client";

import Navbar from "@/components/navbar";
import Footer from "@/sections/footer";
import SlideEffect from "@/components/slide-effect";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bell,
  ClipboardList,
  CreditCard,
  Gift,
  Headphones,
  HeartHandshake,
  LayoutDashboard,
  LockKeyhole,
  Monitor,
  Package,
  Receipt,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Store,
  Truck,
  Users,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

type ProductKey = "pos" | "kiosk" | "loyalty";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  planned?: boolean;
};

const posFeatures: Feature[] = [
  {
    title: "Retail Checkout",
    description:
      "Manage carts, item pricing, discounts, taxes, sales, and transaction history through a structured point-of-sale interface.",
    icon: ShoppingCart,
  },
  {
    title: "Registers & Terminals",
    description:
      "Manage POS registers, device assignments, terminal records, and controlled pairing permissions.",
    icon: Monitor,
  },
  {
    title: "Inventory Management",
    description:
      "Maintain product catalogs, stock records, inventory adjustments, and store-level inventory information.",
    icon: Package,
  },
  {
    title: "Deliveries & Receiving",
    description:
      "Support stock receiving, delivery records, and inventory movement workflows.",
    icon: Truck,
  },
  {
    title: "Employee Management",
    description:
      "Organize staff accounts, role assignments, employee access, and supported labor workflows.",
    icon: Users,
  },
  {
    title: "Sales & Business Reporting",
    description:
      "Explore transaction activity, revenue summaries, store performance, and operational reports.",
    icon: BarChart3,
  },
  {
    title: "Multi-Store Management",
    description:
      "Manage stores within a merchant organization with centralized oversight and location-specific operations.",
    icon: Store,
  },
  {
    title: "Roles & Permissions",
    description:
      "Control access through role-based permissions, tenant boundaries, and platform-governed administrative actions.",
    icon: LockKeyhole,
  },
  {
    title: "Audit History",
    description:
      "Review recorded administrative and operational events to improve accountability and troubleshooting.",
    icon: ClipboardList,
  },
  {
    title: "Payment Workflows",
    description:
      "Designed for provider-managed payment terminals and verified transaction processing. Provider availability is subject to integration validation.",
    icon: CreditCard,
    planned: true,
  },
  {
    title: "Feature Management",
    description:
      "Manage supported merchant capabilities through centralized feature configuration and access controls.",
    icon: Settings2,
  },
  {
    title: "System & POS Monitoring",
    description:
      "Monitor supported application health, operational status, and platform events.",
    icon: LayoutDashboard,
  },
  {
    title: "Support Center",
    description:
      "A dedicated area for merchant assistance, support operations, and issue management.",
    icon: Headphones,
    planned: true,
  },
  {
    title: "Alerts & Messaging",
    description:
      "Planned tools for operational notifications, communication, and event-driven alerts.",
    icon: Bell,
    planned: true,
  },
  {
    title: "Loyalty & Promotions",
    description:
      "Planned customer engagement, promotional offers, and loyalty workflows.",
    icon: Gift,
    planned: true,
  },
  {
    title: "Tax & Financial Reports",
    description:
      "Support reporting workflows for sales, tax-related information, and other financial operations. Reports are not a substitute for professional tax advice.",
    icon: Receipt,
  },
];

const screenshots = [
  {
    src: "/images/products/pos/platform-dashboard.png",
    alt: "VendoraPOS platform command center dashboard",
    title: "Platform Command Center",
    description:
      "An overview of merchants, stores, sales activity, and operational metrics.",
  },
  {
    src: "/images/products/pos/analytics.png",
    alt: "VendoraPOS analytics dashboard",
    title: "Business Analytics",
    description:
      "Explore customer, store distribution, and inventory information.",
  },
  {
    src: "/images/products/pos/feature-control.png",
    alt: "VendoraPOS feature management dashboard",
    title: "Feature Control",
    description:
      "Centralized visibility into configured and available platform modules.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <SlideEffect className="mx-auto max-w-3xl space-y-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#26845D]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-black md:text-5xl">
        {title}
      </h2>
      <p className="text-sm leading-relaxed text-[#707070] md:text-base">
        {description}
      </p>
    </SlideEffect>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;

  return (
    <div className="flex h-full flex-col gap-3 rounded-2xl border border-black/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#6ECE9D] hover:shadow-md">
      <div className="flex items-start justify-between gap-2">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6ECE9D]/15 text-[#26845D]">
          <Icon size={22} />
        </div>

        {feature.planned && (
          <span className="rounded-full bg-[#F8F5ED] px-2.5 py-1 text-[10px] font-semibold text-[#707070]">
            Planned / In development
          </span>
        )}
      </div>

      <h3 className="text-base font-semibold text-black">
        {feature.title}
      </h3>

      <p className="text-sm leading-relaxed text-[#707070]">
        {feature.description}
      </p>
    </div>
  );
}

function POSPage() {
  return (
    <main className="space-y-20 pb-24 md:space-y-28">
      <section className="space-y-7 pt-10 text-center md:pt-16">
        <SlideEffect>
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-sm text-black transition-opacity hover:opacity-60"
          >
            <ArrowLeft size={16} />
            All Vendora Products
          </Link>
        </SlideEffect>

        <SlideEffect>
          <span className="inline-flex rounded-full border border-[#6ECE9D]/40 bg-[#6ECE9D]/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#26845D]">
            VendoraPOS · Retail Management Platform
          </span>
        </SlideEffect>

        <SlideEffect>
          <h1 className="mx-auto max-w-4xl bg-gradient-to-b from-black to-black/60 bg-clip-text text-4xl font-semibold leading-tight tracking-tight text-transparent md:text-6xl">
            Run Your Store.
            <br />
            See the Bigger Picture.
          </h1>
        </SlideEffect>

        <SlideEffect className="mx-auto max-w-3xl text-sm leading-relaxed text-[#707070] md:text-lg">
          VendoraPOS brings retail checkout, inventory, employee
          controls, reporting, and store operations into one
          connected platform, designed for businesses that want
          more control over their day-to-day operations.
        </SlideEffect>

        <SlideEffect className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/#pricing">
            <Button size="lg">
              View POS Pricing
              <ArrowRight size={18} />
            </Button>
          </Link>

          <Link href="/#contact">
            <Button size="lg" variant="secondary">
              Discuss Your Business
            </Button>
          </Link>
        </SlideEffect>
      </section>

      <section className="space-y-8">
        <SlideEffect isSpring={false}>
          <div className="overflow-hidden rounded-3xl border border-black/10 bg-[#F8F5ED] p-3 shadow-xl md:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 px-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#26845D]">
                  Real Platform Interface
                </p>
                <h2 className="mt-1 text-lg font-semibold text-black">
                  VendoraPOS Command Center
                </h2>
              </div>

              <span className="rounded-full bg-white px-3 py-1.5 text-xs text-[#707070]">
                Product screenshot
              </span>
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-black/10 bg-white">
              <Image
                src="/images/products/pos/platform-dashboard.png"
                alt="VendoraPOS platform command center interface"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1024px"
                className="object-contain"
              />
            </div>
          </div>
        </SlideEffect>

        <div className="grid gap-5 md:grid-cols-2">
          {screenshots.slice(1).map((item) => (
            <SlideEffect key={item.src} isSpring={false}>
              <div className="h-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
                <div className="relative aspect-[16/10] w-full bg-[#F8F5ED]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-contain"
                  />
                </div>

                <div className="space-y-2 p-5">
                  <h3 className="text-lg font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#707070]">
                    {item.description}
                  </p>
                </div>
              </div>
            </SlideEffect>
          ))}
        </div>

        <p className="text-center text-xs text-[#707070]">
          Screenshots illustrate the platform administration
          interface. Demonstration data may be shown.
          Module availability varies by configuration and
          development status.
        </p>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="The VendoraPOS Platform"
          title="Everything Behind Your Retail Operations"
          description="Explore the operational tools and management capabilities designed around the needs of independent retailers and growing store networks."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posFeatures.map((feature) => (
            <SlideEffect key={feature.title} isSpring={false}>
              <FeatureCard feature={feature} />
            </SlideEffect>
          ))}
        </div>
      </section>

      <section className="space-y-9 rounded-3xl bg-[#F8F5ED] p-6 md:p-12">
        <SectionHeading
          eyebrow="Security & Governance"
          title="Control Where It Matters"
          description="VendoraPOS is designed with merchant boundaries, controlled administrative access, and traceable operations in mind."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Merchant Data Isolation",
              text: "Tenant-aware access controls help keep each merchant's business information separated.",
            },
            {
              icon: LockKeyhole,
              title: "Controlled Permissions",
              text: "Platform-level authority and explicit permissions govern sensitive actions, including terminal pairing.",
            },
            {
              icon: ClipboardList,
              title: "Auditable Operations",
              text: "Recorded events support accountability, administrative review, and operational investigation.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-black/10 bg-white p-5"
              >
                <Icon size={25} className="text-[#26845D]" />
                <h3 className="mt-4 font-semibold text-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#707070]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="space-y-9">
        <SectionHeading
          eyebrow="Flexible Commercial Options"
          title="A Plan for Every Stage"
          description="Start with essential retail workflows or explore more advanced store management. Hardware and setup are charged separately."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              name: "Essential",
              price: "$149",
              setup: "$399",
              description: "Core retail operations",
            },
            {
              name: "Professional",
              price: "$249",
              setup: "$699",
              description: "Growing store operations",
            },
            {
              name: "Enterprise",
              price: "From $399",
              setup: "From $1,499",
              description: "Advanced multi-store management",
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl border border-black/10 bg-white p-5"
            >
              <h3 className="font-semibold text-black">
                {plan.name}
              </h3>
              <p className="mt-3 text-3xl font-semibold text-black">
                {plan.price}
                <span className="ml-1 text-xs font-normal text-[#707070]">
                  /store/month
                </span>
              </p>
              <p className="mt-2 text-xs text-[#707070]">
                One-time setup: {plan.setup}
              </p>
              <p className="mt-4 text-sm text-[#707070]">
                {plan.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs leading-relaxed text-[#707070]">
          Provisional pricing. POS hardware is purchased separately
          as a one-time charge. Payment processing, taxes, shipping,
          and optional services are additional.
        </p>

        <div className="text-center">
          <Link
            href="/#pricing"
            className="inline-flex items-center gap-2 font-semibold text-black hover:opacity-70"
          >
            Compare Plans and Details
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <SlideEffect isSpring={false}>
        <section className="space-y-5 rounded-3xl bg-black p-8 text-center text-white md:p-12">
          <HeartHandshake
            size={30}
            className="mx-auto text-[#6ECE9D]"
          />

          <h2 className="text-3xl font-semibold md:text-4xl">
            Let&apos;s Talk About Your Store.
          </h2>

          <p className="mx-auto max-w-xl text-sm leading-relaxed text-white/70">
            Explore VendoraPOS capabilities, deployment
            requirements, hardware options, and the right
            configuration for your business.
          </p>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#6ECE9D] px-6 py-3 font-semibold text-black transition-opacity hover:opacity-85"
          >
            Explore VendoraHQ
            <ArrowRight size={18} />
          </Link>
        </section>
      </SlideEffect>
    </main>
  );
}

const otherProducts = {
  kiosk: {
    name: "VendoraKiosk",
    eyebrow: "SELF-ORDERING & KITCHEN TECHNOLOGY",
    headline: "Better Ordering. Connected Kitchens.",
    description:
      "VendoraKiosk is designed for customer self-ordering, digital menus, kitchen display workflows, and compatible POS integrations.",
    icon: UtensilsCrossed,
    features: [
      {
        title: "Self-Ordering",
        description:
          "A customer-facing ordering experience designed for touchscreen kiosks.",
        icon: ShoppingCart,
      },
      {
        title: "Digital Menus",
        description:
          "Organized menu browsing, product choices, and order customization.",
        icon: Monitor,
      },
      {
        title: "Kitchen Display System",
        description:
          "Planned kitchen order queues, preparation tracking, and station workflows.",
        icon: LayoutDashboard,
      },
      {
        title: "POS API Integrations",
        description:
          "Planned integrations with compatible POS systems, subject to API availability and validation.",
        icon: Settings2,
      },
    ],
  },
  loyalty: {
    name: "VendoraLoyalty",
    eyebrow: "COMING SOON",
    headline: "Make Every Customer Connection Count.",
    description:
      "An upcoming customer loyalty experience designed to connect participating merchants and shoppers.",
    icon: Gift,
    features: [
      {
        title: "Customer Rewards",
        description:
          "Planned customer rewards and engagement tools.",
        icon: Gift,
      },
      {
        title: "Mobile Experience",
        description:
          "A planned dedicated mobile application.",
        icon: Smartphone,
      },
      {
        title: "Merchant Connections",
        description:
          "A future experience for customers and participating retailers.",
        icon: Store,
      },
    ],
  },
};

function OtherProductPage({
  productKey,
}: {
  productKey: "kiosk" | "loyalty";
}) {
  const product = otherProducts[productKey];
  const Icon = product.icon;

  return (
    <main className="space-y-16 pb-24 md:space-y-24">
      <section className="space-y-7 pt-12 text-center md:pt-20">
        <SlideEffect>
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-sm text-black hover:opacity-60"
          >
            <ArrowLeft size={16} />
            All Vendora Products
          </Link>
        </SlideEffect>

        <SlideEffect>
          <span className="inline-flex rounded-full bg-[#6ECE9D]/15 px-4 py-2 text-xs font-semibold tracking-wider text-[#26845D]">
            {product.eyebrow}
          </span>
        </SlideEffect>

        <SlideEffect>
          <h1 className="mx-auto max-w-4xl bg-gradient-to-b from-black to-black/60 bg-clip-text text-4xl font-semibold leading-tight text-transparent md:text-6xl">
            {product.headline}
          </h1>
        </SlideEffect>

        <SlideEffect className="mx-auto max-w-2xl text-sm leading-relaxed text-[#707070] md:text-lg">
          {product.description}
        </SlideEffect>
      </section>

      <SlideEffect isSpring={false}>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 rounded-3xl border border-black/10 bg-[#F8F5ED] p-10 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#6ECE9D]/20 text-[#26845D]">
            <Icon size={40} />
          </div>

          <h2 className="text-2xl font-semibold text-black">
            {product.name}
          </h2>

          <p className="text-sm text-[#707070]">
            Product concept and planned capabilities.
            Not a live application screenshot.
          </p>
        </div>
      </SlideEffect>

      <section className="space-y-9">
        <SectionHeading
          eyebrow="Product Capabilities"
          title={`Explore ${product.name}`}
          description="Learn about the capabilities and workflows envisioned for this product."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {product.features.map((feature) => (
            <SlideEffect key={feature.title} isSpring={false}>
              <FeatureCard
                feature={{ ...feature, planned: true }}
              />
            </SlideEffect>
          ))}
        </div>
      </section>

      <SlideEffect>
        <div className="rounded-3xl bg-[#F8F5ED] p-8 text-center md:p-12">
          <h2 className="text-2xl font-semibold text-black md:text-3xl">
            Discover the VendoraHQ Ecosystem
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm text-[#707070]">
            Explore our products and learn about our vision
            for connected retail technology.
          </p>

          <Link
            href="/#products"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white"
          >
            Explore All Products
            <ArrowRight size={17} />
          </Link>
        </div>
      </SlideEffect>
    </main>
  );
}

export default function ProductPage({
  productKey,
}: {
  productKey: ProductKey;
}) {
  return (
    <div className="mx-auto max-w-5xl px-4 xl:px-0">
      <Navbar />

      {productKey === "pos" ? (
        <POSPage />
      ) : (
        <OtherProductPage productKey={productKey} />
      )}

      <Footer />
    </div>
  );
}
