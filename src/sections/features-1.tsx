
"use client";

import Badge from "@/components/badge";
import Card from "@/components/card";
import SlideEffect from "@/components/slide-effect";
import {
  Monitor,
  CreditCard,
  Package,
  BarChart3,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Modern Checkout",
    description:
      "A streamlined point-of-sale interface designed for everyday retail transactions.",
    icon: Monitor,
  },
  {
    title: "Payment Integration",
    description:
      "Designed for provider-managed payment terminals and verified transaction processing.",
    icon: CreditCard,
  },
  {
    title: "Inventory Management",
    description:
      "Manage products, stock movements, and retail inventory workflows.",
    icon: Package,
  },
  {
    title: "Business Reporting",
    description:
      "Review sales activity and operational information from your retail platform.",
    icon: BarChart3,
  },
];

export default function Features1() {
  return (
    <section
      id="features"
      className="mx-auto space-y-8 scroll-mt-24 text-center lg:space-y-10"
    >
      <SlideEffect>
        <Badge number={1} text="VENDORA POS" />
      </SlideEffect>

      <SlideEffect>
        <h2 className="bg-gradient-to-b from-black to-black/60 bg-clip-text text-3xl font-medium text-transparent md:text-5xl lg:text-header">
          Meet VendoraPOS
        </h2>
      </SlideEffect>

      <SlideEffect className="mx-auto max-w-3xl text-sm leading-relaxed lg:text-base">
        Retail point-of-sale software bringing checkout,
        inventory, payments, and store management together
        in one connected experience.
      </SlideEffect>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <SlideEffect
              key={feature.title}
              direction={index % 2 === 0 ? "right" : "left"}
              isSpring={false}
              className="h-full"
            >
              <Card className="h-full text-left">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-black">
                  <Icon size={25} />
                </div>
                <h3 className="text-xl font-medium text-black md:text-title">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </SlideEffect>
          );
        })}
      </div>

      <SlideEffect>
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-black">
          <ShieldCheck size={19} className="text-primary" />
          Built with payment verification and access controls in mind
        </div>
      </SlideEffect>

      <SlideEffect>
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 font-medium text-black hover:opacity-70"
        >
          Learn more about VendoraPOS
          <ArrowRight size={18} />
        </Link>
      </SlideEffect>
    </section>
  );
}
