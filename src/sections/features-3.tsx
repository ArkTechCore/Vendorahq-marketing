
"use client";

import Badge from "@/components/badge";
import Card from "@/components/card";
import SlideEffect from "@/components/slide-effect";
import {
  Gift,
  Smartphone,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    title: "Customer Rewards",
    description:
      "A planned loyalty experience to help merchants recognize and reward returning customers.",
    icon: Gift,
  },
  {
    title: "Dedicated Mobile App",
    description:
      "An upcoming customer-facing application for interacting with participating Vendora merchants.",
    icon: Smartphone,
  },
  {
    title: "Customer Engagement",
    description:
      "Our vision is to help retailers build stronger customer relationships through connected loyalty experiences.",
    icon: HeartHandshake,
  },
];

export default function Features3() {
  return (
    <section
      id="loyalty"
      className="mx-auto space-y-8 scroll-mt-24 text-center lg:space-y-10"
    >
      <SlideEffect>
        <Badge number={3} text="COMING SOON" />
      </SlideEffect>

      <SlideEffect>
        <h2 className="bg-gradient-to-b from-black to-black/60 bg-clip-text text-3xl font-medium text-transparent md:text-5xl lg:text-header">
          Introducing VendoraLoyalty
        </h2>
      </SlideEffect>

      <SlideEffect className="mx-auto max-w-3xl text-sm lg:text-base">
        The next step in the VendoraHQ ecosystem:
        a dedicated customer loyalty experience designed
        to connect retailers and their customers.
      </SlideEffect>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <SlideEffect
              key={feature.title}
              direction="top"
              delay={index * 0.15}
              isSpring={false}
              className="h-full"
            >
              <Card className="flex h-full flex-col items-center text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 text-black">
                  <Icon size={30} />
                </div>

                <h3 className="text-xl font-medium text-black">
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
    </section>
  );
}
