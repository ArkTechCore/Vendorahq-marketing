
"use client";

import SlideEffect from "@/components/slide-effect";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CalendarDays,
} from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="scroll-mt-24">
      <SlideEffect
        isSpring={false}
        className="mx-auto flex flex-col items-center justify-center space-y-8 rounded-2xl bg-secondary p-8 text-center md:p-16"
      >
        <div className="inline-flex rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-black">
          Connect With VendoraHQ
        </div>

        <h2 className="bg-gradient-to-b from-black to-black/60 bg-clip-text text-3xl font-medium text-transparent md:text-5xl lg:text-header">
          The Future of Retail Starts Here.
        </h2>

        <p className="mx-auto max-w-2xl text-sm leading-relaxed lg:text-base">
          Interested in VendoraPOS, VendoraKiosk, or our
          upcoming products? Tell us about your business
          and explore how VendoraHQ could support your
          operations.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/contact?type=demo">
            <Button
              size="lg"
              className="flex items-center gap-2"
            >
              <CalendarDays size={18} />
              Request a Demo
              <ArrowRight size={18} />
            </Button>
          </Link>

          <Link
            href="/contact?type=sales"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-black/15 bg-white px-5 text-sm font-semibold text-black transition-colors hover:bg-black/5"
          >
            Contact Sales
            <ArrowRight size={17} />
          </Link>
        </div>

        <p className="text-xs text-foreground">
          Share your requirements through our contact
          form. Email delivery will be available once
          our company mailbox is configured.
        </p>
      </SlideEffect>
    </section>
  );
}
