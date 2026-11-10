
"use client";

import Link from "next/link";
import Logo from "@/components/logo";
import {
  Monitor,
  Touchpad,
  Gift,
  ArrowUpRight,
} from "lucide-react";

const productLinks = [
  {
    label: "VendoraPOS",
    href: "/products/pos",
    icon: Monitor,
  },
  {
    label: "VendoraKiosk",
    href: "/products/kiosk",
    icon: Touchpad,
  },
  {
    label: "VendoraLoyalty",
    href: "/products/loyalty",
    icon: Gift,
  },
];

const companyLinks = [
  {
    label: "Why VendoraHQ",
    href: "/#why-vendora",
  },
  {
    label: "Pricing",
    href: "/#pricing",
  },
  {
    label: "FAQ",
    href: "/#faq",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-border py-10 text-sm md:py-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="space-y-4">
          <Logo />

          <p className="max-w-xs leading-relaxed text-[#707070]">
            Building modern retail technology through
            point-of-sale, self-service, and customer
            engagement solutions.
          </p>
        </div>

        <div className="space-y-5">
          <h3 className="font-semibold text-black">
            Products
          </h3>

          <div className="flex flex-col gap-4">
            {productLinks.map((link) => {
              const Icon = link.icon;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 text-[#707070] transition-colors hover:text-black"
                >
                  <Icon size={17} />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="space-y-5">
          <h3 className="font-semibold text-black">
            Company
          </h3>

          <div className="flex flex-col gap-4">
            {companyLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-1 text-[#707070] transition-colors hover:text-black"
              >
                {link.label}
                <ArrowUpRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col justify-between gap-4 border-t border-border pt-6 text-xs text-[#707070] sm:flex-row">
        <p>
          {"\u00A9"} {new Date().getFullYear()} VendoraHQ.
          All rights reserved.
        </p>

        <p>
          VendoraPOS {"\u00B7"} VendoraKiosk {"\u00B7"} VendoraLoyalty
        </p>
      </div>
    </footer>
  );
}
