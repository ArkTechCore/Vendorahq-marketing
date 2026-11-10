
"use client";

import Logo from "./logo";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  AlignJustify,
  ArrowRight,
  X,
} from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-m";
import { useState } from "react";

const settings = {
  navLinks: [
    { name: "Home", href: "/" },
    { name: "Products", href: "/#products" },
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/#pricing" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact Us", href: "/contact" },
  ],
  cta: {
    content: "Request a Demo",
    href: "/contact?type=demo",
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className="relative z-50 flex w-full items-center justify-between gap-4 py-4"
      aria-label="Main navigation"
    >
      <Logo />

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-4 md:flex lg:gap-5">
        <ul className="flex items-center gap-3 text-black font-medium text-link lg:gap-5">
          {settings.navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`whitespace-nowrap transition-colors ${
                  link.name === "Contact Us"
                    ? "font-semibold text-[#26845D] hover:text-black"
                    : "hover:text-[#26845D]"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={settings.cta.href}
          className="shrink-0"
        >
          <Button className="flex items-center gap-2 whitespace-nowrap bg-[#26845D] text-white hover:bg-[#206B4C]">
            {settings.cta.content}
            <ArrowRight size={16} />
          </Button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen((previous) => !previous)}
        className="flex items-center justify-center bg-white text-black md:hidden"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <AlignJustify size={24} />
        )}
      </motion.button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{
              height: 0,
              opacity: 0,
              y: -20,
            }}
            animate={{
              height: "100dvh",
              opacity: 1,
              y: 0,
            }}
            exit={{
              height: 0,
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="fixed left-0 top-16 z-50 flex w-full flex-col overflow-y-auto bg-white md:hidden"
          >
            <div className="flex flex-col space-y-6 p-6">
              <ul className="flex flex-col space-y-2 font-medium text-black">
                {settings.navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={`block rounded-xl px-3 py-3 transition-colors hover:bg-[#6ECE9D]/10 ${
                        link.name === "Contact Us"
                          ? "bg-[#6ECE9D]/10 font-semibold text-[#26845D]"
                          : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href={settings.cta.href}
                onClick={closeMenu}
                className="block"
              >
                <Button className="flex w-full items-center justify-center gap-2 bg-[#26845D] text-white hover:bg-[#206B4C]">
                  {settings.cta.content}
                  <ArrowRight size={17} />
                </Button>
              </Link>

              <p className="text-center text-xs text-[#707070]">
                Questions about VendoraHQ?
                Visit our contact page to share
                your requirements.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
