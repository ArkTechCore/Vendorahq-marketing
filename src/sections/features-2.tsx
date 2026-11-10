
"use client";

import Badge from "@/components/badge";
import Card from "@/components/card";
import SlideEffect from "@/components/slide-effect";
import {
  Touchpad,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    title: "Self-Service Experience",
    description:
      "Give customers a dedicated interface to browse available products and interact with the store's self-service experience.",
    icon: Touchpad,
  },
  {
    title: "Connected Retail Workflow",
    description:
      "Extend the Vendora retail ecosystem with kiosk-based shopping and checkout experiences.",
    icon: ShoppingCart,
  },
];

export default function Features2() {
  return (
    <section
      id="kiosk"
      className="mx-auto space-y-8 scroll-mt-24 text-center lg:space-y-10"
    >
      <SlideEffect>
        <Badge number={2} text="VENDORA KIOSK" />
      </SlideEffect>

      <SlideEffect>
        <h2 className="bg-gradient-to-b from-black to-black/60 bg-clip-text text-3xl font-medium text-transparent md:text-5xl lg:text-header">
          Self-Service, Reimagined.
        </h2>
      </SlideEffect>

      <SlideEffect className="mx-auto max-w-3xl text-sm lg:text-base">
        VendoraKiosk brings self-service technology into the
        modern retail environment, complementing the VendoraPOS
        experience.
      </SlideEffect>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <SlideEffect
              key={feature.title}
              direction={index === 0 ? "right" : "left"}
              isSpring={false}
              className="h-full"
            >
              <Card className="flex h-full flex-col items-center text-center">
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/20 text-black">
                  <Icon size={40} strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-medium text-black md:text-title">
                  {feature.title}
                </h3>

                <p className="max-w-md text-sm leading-relaxed">
                  {feature.description}
                </p>

                <ArrowRight className="mt-4 text-primary" size={22} />
              </Card>
            </SlideEffect>
          );
        })}
      </div>
    </section>
  );
}
