
"use client";

import Badge from "@/components/badge";
import Card from "@/components/card";
import SlideEffect from "@/components/slide-effect";
import TextRevealEffect from "@/components/text-reveal-effect";
import {
  Monitor,
  Touchpad,
  Gift,
  ShieldCheck,
  Layers3,
} from "lucide-react";

const products = [
  {
    name: "VendoraPOS",
    description: "Point of sale",
    icon: Monitor,
  },
  {
    name: "VendoraKiosk",
    description: "Self-service",
    icon: Touchpad,
  },
  {
    name: "VendoraLoyalty",
    description: "Coming soon",
    icon: Gift,
  },
];

export default function Features4() {
  return (
    <section className="mx-auto space-y-8 text-center lg:space-y-10">
      <SlideEffect>
        <Badge number={4} text="THE VENDORA ECOSYSTEM" />
      </SlideEffect>

      <TextRevealEffect className="bg-gradient-to-b from-black to-black/60 bg-clip-text text-3xl font-medium text-transparent md:text-5xl lg:text-header">
        One Vision. Multiple Solutions.
      </TextRevealEffect>

      <SlideEffect className="mx-auto max-w-3xl text-sm lg:text-base">
        VendoraHQ brings together retail software products
        under one technology ecosystem, designed to support
        modern merchants as their businesses grow.
      </SlideEffect>

      <SlideEffect direction="top" isSpring={false}>
        <Card className="space-y-8">
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-primary">
              <Layers3 size={32} />
            </div>
            <h3 className="text-2xl font-semibold text-black">
              VendoraHQ
            </h3>
            <p className="text-sm">
              Retail Technology Ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {products.map((product) => {
              const Icon = product.icon;

              return (
                <div
                  key={product.name}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-black/10 bg-white p-6"
                >
                  <Icon size={30} className="text-black" />
                  <h4 className="font-semibold text-black">
                    {product.name}
                  </h4>
                  <p className="text-xs">
                    {product.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Card>
      </SlideEffect>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <SlideEffect direction="right" isSpring={false}>
          <Card className="h-full text-left">
            <ShieldCheck className="mb-4 text-primary" size={30} />
            <h3 className="text-xl font-medium text-black">
              Security-Conscious Architecture
            </h3>
            <p className="text-sm">
              Designed around merchant data isolation,
              role-based permissions, auditability,
              and verified payment workflows.
            </p>
          </Card>
        </SlideEffect>

        <SlideEffect direction="left" isSpring={false}>
          <Card className="h-full text-left">
            <Layers3 className="mb-4 text-primary" size={30} />
            <h3 className="text-xl font-medium text-black">
              Built for Retail Operations
            </h3>
            <p className="text-sm">
              A growing collection of products focused
              on checkout, self-service, and customer
              engagement.
            </p>
          </Card>
        </SlideEffect>
      </div>
    </section>
  );
}
