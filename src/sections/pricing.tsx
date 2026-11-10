
"use client";

import SlideEffect from "@/components/slide-effect";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Cpu,
  Info,
  Monitor,
  UtensilsCrossed,
} from "lucide-react";
import { useState } from "react";

type Product = "pos" | "kiosk";

type Plan = {
  name: string;
  price: number;
  unit: string;
  setup: string;
  description: string;
  features: string[];
  featured?: boolean;
  starting?: boolean;
};

const posPlans: Plan[] = [
  {
    name: "Essential",
    price: 149,
    unit: "store",
    setup: "$399",
    description: "A strong foundation for independent retail stores.",
    features: [
      "1 POS register included",
      "Retail checkout and sales history",
      "Product and inventory management",
      "Basic sales reporting",
      "Employee access controls",
      "Standard support",
    ],
  },
  {
    name: "Professional",
    price: 249,
    unit: "store",
    setup: "$699",
    description: "More control for growing retail operations.",
    featured: true,
    features: [
      "2 POS registers included",
      "Everything in Essential",
      "Advanced inventory workflows",
      "Employee and labor management",
      "Advanced reporting",
      "Enhanced store operations",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: 399,
    unit: "store",
    setup: "From $1,499",
    description: "Advanced management for multi-location businesses.",
    starting: true,
    features: [
      "Multi-store management",
      "Everything in Professional",
      "Advanced roles and permissions",
      "Centralized business oversight",
      "Operational and audit reporting",
      "Custom integrations quoted separately",
      "Tailored onboarding",
    ],
  },
];

const kioskPlans: Plan[] = [
  {
    name: "Ordering",
    price: 199,
    unit: "kiosk",
    setup: "$699",
    description: "Customer-facing self-ordering technology.",
    features: [
      "Self-service ordering interface",
      "Digital menu browsing",
      "Cart and order customization",
      "Order submission workflows",
      "Basic order management",
      "Standard support",
    ],
  },
  {
    name: "Ordering + Kitchen",
    price: 299,
    unit: "kiosk",
    setup: "$999",
    description: "Connect ordering with kitchen preparation workflows.",
    featured: true,
    features: [
      "Everything in Ordering",
      "One kitchen display software license",
      "Kitchen order queue",
      "Preparation status workflows",
      "Order routing configuration",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: 449,
    unit: "kiosk",
    setup: "Custom quote",
    description: "For larger self-ordering deployments.",
    starting: true,
    features: [
      "Everything in Ordering + Kitchen",
      "Multiple kiosk deployments",
      "Multiple kitchen stations",
      "Multi-location configuration",
      "Compatible POS API integration options",
      "Custom onboarding and deployment",
    ],
  },
];

function PricingCard({
  plan,
  product,
}: {
  plan: Plan;
  product: Product;
}) {
  const productName =
    product === "pos" ? "VendoraPOS" : "VendoraKiosk";

  const contactUrl =
    `/contact?type=sales` +
    `&product=${encodeURIComponent(productName)}` +
    `&plan=${encodeURIComponent(plan.name)}`;

  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-5 ${
        plan.featured
          ? "border-[#6ECE9D] bg-[#F8F5ED] shadow-sm"
          : "border-black/10 bg-white"
      }`}
    >
      {plan.featured && (
        <span className="absolute -top-3 left-4 rounded-full bg-[#6ECE9D] px-3 py-1 text-[10px] font-semibold text-black">
          Most Popular
        </span>
      )}

      <div className="mb-3">
        <h3 className="text-lg font-semibold text-black">
          {plan.name}
        </h3>

        <p className="mt-1 text-xs leading-snug text-[#707070]">
          {plan.description}
        </p>
      </div>

      <div className="mb-3">
        <div className="flex flex-wrap items-baseline gap-1">
          {plan.starting && (
            <span className="text-xs font-medium text-black">
              From
            </span>
          )}

          <span className="text-3xl font-semibold tracking-tight text-black">
            ${plan.price}
          </span>

          <span className="text-xs text-[#707070]">
            /month
          </span>
        </div>

        <p className="mt-1 text-xs text-[#707070]">
          Per {plan.unit} · billed monthly
        </p>

        <div className="mt-3 flex items-center justify-between gap-2 rounded-lg border border-black/10 bg-white/80 px-3 py-2">
          <span className="text-xs text-[#707070]">
            One-time setup
          </span>

          <span className="text-sm font-semibold text-black">
            {plan.setup}
          </span>
        </div>
      </div>

      <div className="mb-4 flex-1 space-y-2 border-t border-black/10 pt-4">
        {plan.features.map((feature) => (
          <div
            key={feature}
            className="flex items-start gap-2 text-xs leading-snug"
          >
            <Check
              size={15}
              className="mt-0.5 shrink-0 text-[#26845D]"
            />

            <span className="text-[#555555]">
              {feature}
            </span>
          </div>
        ))}
      </div>

      <Link
        href={contactUrl}
        className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-black px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#26845D]"
      >
        Discuss This Plan
        <ArrowRight size={15} />
      </Link>
    </div>
  );
}

export default function Pricing() {
  const [selectedProduct, setSelectedProduct] =
    useState<Product>("pos");

  const plans =
    selectedProduct === "pos" ? posPlans : kioskPlans;

  return (
    <section
      id="pricing"
      className="mx-auto space-y-6 scroll-mt-24 text-center"
    >
      <SlideEffect>
        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-[#6ECE9D]/15 px-3 py-1.5 text-[11px] font-semibold text-[#26845D]">
          <Cpu size={14} />
          VENDORA PRICING
        </div>
      </SlideEffect>

      <SlideEffect>
        <h2 className="mx-auto max-w-4xl bg-gradient-to-b from-black to-black/60 bg-clip-text text-3xl font-medium leading-tight text-transparent md:text-4xl lg:text-5xl">
          Powerful Technology.
          <br />
          Transparent Pricing.
        </h2>
      </SlideEffect>

      <SlideEffect className="mx-auto max-w-3xl text-sm leading-relaxed">
        Choose the right solution for your business.
        Hardware, setup, and optional services are priced separately.
      </SlideEffect>

      <SlideEffect>
        <div
          className="mx-auto inline-flex max-w-full flex-wrap justify-center gap-1 rounded-xl bg-[#F0F0F0] p-1.5"
          role="group"
          aria-label="Choose a product for pricing"
        >
          <button
            type="button"
            aria-pressed={selectedProduct === "pos"}
            onClick={() => setSelectedProduct("pos")}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-colors ${
              selectedProduct === "pos"
                ? "bg-white text-black shadow-sm"
                : "text-[#707070] hover:text-black"
            }`}
          >
            <Monitor size={16} />
            VendoraPOS
          </button>

          <button
            type="button"
            aria-pressed={selectedProduct === "kiosk"}
            onClick={() => setSelectedProduct("kiosk")}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-colors ${
              selectedProduct === "kiosk"
                ? "bg-white text-black shadow-sm"
                : "text-[#707070] hover:text-black"
            }`}
          >
            <UtensilsCrossed size={16} />
            VendoraKiosk
          </button>
        </div>
      </SlideEffect>

      <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <SlideEffect
            key={`${selectedProduct}-${plan.name}`}
            delay={index * 0.08}
            isSpring={false}
            className="h-full"
          >
            <PricingCard
              plan={plan}
              product={selectedProduct}
            />
          </SlideEffect>
        ))}
      </div>

      <SlideEffect isSpring={false}>
        <div className="rounded-2xl border border-black/10 bg-[#F8F5ED] p-4 text-left md:p-6">
          <div className="mb-4 flex items-center gap-2">
            <Info size={19} className="text-black" />

            <h3 className="text-lg font-semibold text-black">
              Important Pricing Information
            </h3>
          </div>

          <div className="grid gap-x-8 gap-y-4 text-xs leading-relaxed md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-black">
                Hardware Sold Separately
              </h4>
              <p className="mt-1 text-[#707070]">
                POS terminals, self-ordering kiosks, kitchen
                screens, and peripherals are purchased separately
                as one-time equipment charges. Prices depend on
                the selected configuration.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-black">
                Setup and Installation
              </h4>
              <p className="mt-1 text-[#707070]">
                A one-time setup fee applies. Onsite installation,
                special configuration, data migration, and
                additional training may require a separate quote.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-black">
                Hardware Returns
              </h4>
              <p className="mt-1 text-[#707070]">
                Special-order or custom-configured hardware may
                be final sale after order acceptance, subject to
                applicable law, warranty rights, and remedies
                for defective or incorrectly supplied goods.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-black">
                Processing and Integrations
              </h4>
              <p className="mt-1 text-[#707070]">
                Payment processing fees, taxes, shipping, and
                optional integrations are not included.
                Third-party POS integrations require compatibility
                review and may be quoted separately.
              </p>
            </div>
          </div>
        </div>
      </SlideEffect>

      <p className="mx-auto max-w-3xl text-[11px] leading-relaxed text-[#707070]">
        Prices are provisional and subject to confirmation
        before commercial availability. Plan capabilities
        depend on completed development, compatibility,
        and the final service agreement. No subscription
        or order is placed through this page.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
        <Link
          href="/products/pos"
          className="inline-flex items-center gap-1 font-medium text-black transition-opacity hover:opacity-60"
        >
          Explore VendoraPOS
          <ArrowRight size={14} />
        </Link>

        <Link
          href="/products/kiosk"
          className="inline-flex items-center gap-1 font-medium text-black transition-opacity hover:opacity-60"
        >
          Explore VendoraKiosk
          <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
