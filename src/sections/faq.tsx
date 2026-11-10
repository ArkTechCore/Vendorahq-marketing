
"use client";

import SlideEffect from "@/components/slide-effect";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is VendoraHQ?",
    answer:
      "VendoraHQ is a retail technology brand developing a connected ecosystem of software products, including VendoraPOS, VendoraKiosk, and the upcoming VendoraLoyalty experience.",
  },
  {
    question: "What is VendoraPOS?",
    answer:
      "VendoraPOS is point-of-sale software designed for retail operations, including checkout, inventory management, sales reporting, and payment terminal integration.",
  },
  {
    question: "What is VendoraKiosk?",
    answer:
      "VendoraKiosk is a self-service retail product designed to provide customers with an additional way to interact with participating stores.",
  },
  {
    question: "Is VendoraLoyalty available?",
    answer:
      "VendoraLoyalty is an upcoming customer-facing loyalty experience. Its features and release availability will be announced as development progresses.",
  },
  {
    question: "Does VendoraPOS support card payments?",
    answer:
      "VendoraPOS is being designed to integrate with third-party payment processors and provider-managed payment terminals. Supported providers and deployment availability depend on the completed integration.",
  },
  {
    question: "Can VendoraPOS support multiple stores?",
    answer:
      "The VendoraPOS architecture is designed for multi-store retail operations, with role-based access and separation of merchant data.",
  },
  {
    question: "How much does VendoraHQ cost?",
    answer:
      "Public subscription pricing has not yet been announced. Pricing and deployment options will be provided when commercial offerings are finalized.",
  },
  {
    question: "How can I request a demonstration?",
    answer:
      "A dedicated demo-request and contact system is planned for this website. Until it is available, product information can be explored on this page.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="mx-auto space-y-8 scroll-mt-24 text-center lg:space-y-10"
    >
      <SlideEffect>
        <h2 className="bg-gradient-to-b from-black to-black/60 bg-clip-text text-3xl font-medium text-transparent md:text-5xl lg:text-header">
          Frequently Asked Questions
        </h2>
      </SlideEffect>

      <SlideEffect>
        <Accordion
          type="single"
          collapsible
          className="mx-auto max-w-3xl text-left text-base text-black"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index}`}
            >
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-sm leading-relaxed text-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SlideEffect>
    </section>
  );
}
