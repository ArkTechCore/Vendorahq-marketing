
"use client";

import FadeEffect from "@/components/fade-effect";
import Navbar from "@/components/navbar";
import SlideEffect from "@/components/slide-effect";
import TextBlurEffect from "@/components/text-blur-effect";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Gift,
  Monitor,
  ShoppingBag,
  BarChart3,
  ShieldCheck,
  Store,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "VendoraPOS",
    description: "Retail point of sale",
    icon: Monitor,
    href: "/products/pos",
  },
  {
    name: "VendoraKiosk",
    description: "Self-ordering & kitchen",
    icon: ShoppingBag,
    href: "/products/kiosk",
  },
  {
    name: "VendoraLoyalty",
    description: "Coming soon",
    icon: Gift,
    href: "/products/loyalty",
  },
];

const capabilities = [
  {
    label: "Store Operations",
    icon: Store,
  },
  {
    label: "Business Analytics",
    icon: BarChart3,
  },
  {
    label: "Access Controls",
    icon: ShieldCheck,
  },
];

export default function Hero() {
  return (
    <div className="relative z-10 space-y-12 md:space-y-16">
      <Navbar />

      <section className="flex flex-col items-center gap-7 text-center md:gap-9">
        <SlideEffect
          delay={0}
          className="inline-flex items-center gap-2 rounded-full border border-[#6ECE9D]/40 bg-[#6ECE9D]/10 px-4 py-2 text-xs font-medium text-[#26845D] sm:text-sm"
        >
          <CheckCircle2 size={16} />
          Introducing the VendoraHQ Ecosystem
        </SlideEffect>

        <h1 className="max-w-5xl text-4xl font-medium leading-tight tracking-tight text-black md:text-6xl lg:text-7xl">
          <TextBlurEffect className="bg-gradient-to-b from-black to-black/60 bg-clip-text text-transparent">
            Modern Retail Technology, Built for Growth.
          </TextBlurEffect>
        </h1>

        <SlideEffect
          delay={0}
          className="mx-auto max-w-3xl px-4 text-sm leading-relaxed text-[#707070] sm:text-base lg:text-lg"
        >
          Discover a connected retail ecosystem featuring
          VendoraPOS, VendoraKiosk, and the upcoming
          VendoraLoyalty experience. Explore tools designed
          for checkout, store management, self-ordering,
          and business operations.
        </SlideEffect>

        <SlideEffect className="flex w-full flex-col items-center gap-6">
          <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <Link href="#products" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="flex w-full items-center justify-center gap-2 sm:w-auto"
              >
                Explore Our Products
                <ArrowRight size={18} />
              </Button>
            </Link>

            <Link href="#features" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Discover Features
              </Button>
            </Link>
          </div>

          <div
            id="products"
            className="grid w-full max-w-3xl scroll-mt-24 grid-cols-1 gap-3 pt-4 sm:grid-cols-3"
          >
            {products.map((product) => {
              const Icon = product.icon;

              return (
                <Link
                  key={product.name}
                  href={product.href}
                  aria-label={`Explore ${product.name}`}
                  className="group flex items-center gap-3 rounded-2xl border border-black/10 bg-white p-4 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#6ECE9D] hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6ECE9D]/15 text-[#26845D]">
                    <Icon size={21} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold text-black">
                      {product.name}
                    </h3>

                    <p className="text-xs text-[#707070]">
                      {product.description}
                    </p>
                  </div>

                  <ArrowRight
                    size={16}
                    className="shrink-0 text-[#707070] transition-transform group-hover:translate-x-1"
                  />
                </Link>
              );
            })}
          </div>
        </SlideEffect>

        <SlideEffect
          isSpring={false}
          duration={1.3}
          className="relative w-full"
        >
          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-[#F8F5ED] p-3 shadow-xl sm:p-5 md:p-8">
            <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#6ECE9D]/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-[#FFDA6E]/20 blur-3xl" />

            <div className="relative z-10 mb-5 flex flex-wrap items-center justify-between gap-3 text-left">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#26845D]">
                  Inside VendoraHQ
                </p>

                <h2 className="mt-1 text-lg font-semibold text-black md:text-2xl">
                  A Closer Look at VendoraPOS
                </h2>
              </div>

              <Link
                href="/products/pos"
                className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2.5 text-xs font-semibold text-white transition-opacity hover:opacity-85"
              >
                Explore Platform
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="relative z-10 grid gap-4 lg:grid-cols-[1.65fr_1fr]">
              <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
                <div className="flex items-center gap-2 border-b border-black/10 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFDA6E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#6ECE9D]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-black/15" />

                  <span className="ml-2 text-xs font-medium text-[#707070]">
                    Platform Command Center
                  </span>
                </div>

                <div className="relative aspect-[16/10] w-full bg-white">
                  <Image
                    src="/images/products/pos/platform-dashboard.png"
                    alt="VendoraPOS platform command center dashboard"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 650px"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
                  <div className="px-4 py-3 text-left">
                    <p className="text-sm font-semibold text-black">
                      Business Analytics
                    </p>
                    <p className="text-xs text-[#707070]">
                      Reporting and operational insights
                    </p>
                  </div>

                  <div className="relative aspect-[16/8] w-full bg-white">
                    <Image
                      src="/images/products/pos/analytics.png"
                      alt="VendoraPOS analytics interface"
                      fill
                      sizes="(max-width: 1024px) 50vw, 350px"
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
                  <div className="px-4 py-3 text-left">
                    <p className="text-sm font-semibold text-black">
                      Platform Feature Control
                    </p>
                    <p className="text-xs text-[#707070]">
                      Centralized module management
                    </p>
                  </div>

                  <div className="relative aspect-[16/8] w-full bg-white">
                    <Image
                      src="/images/products/pos/feature-control.png"
                      alt="VendoraPOS feature control interface"
                      fill
                      sizes="(max-width: 1024px) 50vw, 350px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-5 flex flex-wrap items-center justify-center gap-2">
              {capabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <div
                    key={capability.label}
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-medium text-black"
                  >
                    <Icon size={14} className="text-[#26845D]" />
                    {capability.label}
                  </div>
                );
              })}
            </div>
          </div>

          <p className="mt-3 text-center text-xs text-[#707070]">
            Actual VendoraPOS administration interface.
            Screenshots may contain demonstration data.
          </p>

          <FadeEffect />
        </SlideEffect>
      </section>
    </div>
  );
}
