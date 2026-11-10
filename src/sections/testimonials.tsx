
"use client";

import Badge from "@/components/badge";
import Card from "@/components/card";
import SlideEffect from "@/components/slide-effect";
import TextRevealEffect from "@/components/text-reveal-effect";
import {
  Store,
  ShieldCheck,
  Layers3,
  Workflow,
} from "lucide-react";

const principles = [
  {
    title: "Retail-Focused",
    description:
      "We design technology around the everyday needs of retail businesses, from checkout to store operations.",
    icon: Store,
  },
  {
    title: "Security by Design",
    description:
      "Our architecture emphasizes access controls, merchant data separation, and payment verification.",
    icon: ShieldCheck,
  },
  {
    title: "Connected Products",
    description:
      "VendoraPOS, VendoraKiosk, and our planned loyalty experience form a growing retail technology ecosystem.",
    icon: Layers3,
  },
  {
    title: "Practical Workflows",
    description:
      "We focus on reducing operational complexity through clear interfaces and connected retail processes.",
    icon: Workflow,
  },
];

export default function Testimonials() {
  return (
    <section
      id="why-vendora"
      className="mx-auto space-y-8 scroll-mt-24 text-center lg:space-y-10"
    >
      <SlideEffect>
        <Badge number={5} text="WHY VENDORA" />
      </SlideEffect>

      <TextRevealEffect className="bg-gradient-to-b from-black to-black/60 bg-clip-text text-3xl font-medium text-transparent md:text-5xl lg:text-header">
        Technology Built Around Retail.
      </TextRevealEffect>

      <SlideEffect className="mx-auto max-w-3xl text-sm leading-relaxed lg:text-base">
        VendoraHQ is focused on building modern, practical
        software for retailers and the people they serve.
      </SlideEffect>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {principles.map((principle, index) => {
          const Icon = principle.icon;

          return (
            <SlideEffect
              key={principle.title}
              direction={index % 2 === 0 ? "right" : "left"}
              isSpring={false}
              className="h-full"
            >
              <Card className="h-full text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-black">
                  <Icon size={25} />
                </div>

                <h3 className="text-xl font-medium text-black">
                  {principle.title}
                </h3>

                <p className="text-sm leading-relaxed">
                  {principle.description}
                </p>
              </Card>
            </SlideEffect>
          );
        })}
      </div>
    </section>
  );
}
