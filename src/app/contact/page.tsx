
"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/sections/footer";
import SlideEffect from "@/components/slide-effect";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  Headphones,
  Loader2,
  Mail,
  Rocket,
  ShieldCheck,
} from "lucide-react";

type InquiryType = "early-access" | "demo" | "sales";

type FormData = {
  inquiryType: InquiryType;
  fullName: string;
  email: string;
  company: string;
  phone: string;
  product: string;
  storeCount: string;
  message: string;
  consent: boolean;
};

type SubmissionStatus = "idle" | "success" | "error";

const initialForm: FormData = {
  inquiryType: "demo",
  fullName: "",
  email: "",
  company: "",
  phone: "",
  product: "VendoraPOS",
  storeCount: "1",
  message: "",
  consent: false,
};

const inquiryOptions = [
  {
    id: "early-access" as const,
    title: "Get Early Access",
    description:
      "Join the interest list for pilot opportunities and product availability updates.",
    icon: Rocket,
  },
  {
    id: "demo" as const,
    title: "Request a Demo",
    description:
      "Tell us what you need and explore a possible product walkthrough.",
    icon: CalendarDays,
  },
  {
    id: "sales" as const,
    title: "Contact Sales",
    description:
      "Discuss pricing, hardware, deployment, and business requirements.",
    icon: Headphones,
  },
];

const validProducts = [
  "VendoraPOS",
  "VendoraKiosk",
  "VendoraLoyalty",
  "Multiple Products",
];

const inputClass =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-[#999] focus:border-[#26845D] focus:ring-2 focus:ring-[#6ECE9D]/20 disabled:opacity-60";

const labelClass =
  "mb-2 block text-sm font-semibold text-black";

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [website, setWebsite] = useState("");
  const [notice, setNotice] = useState("");
  const [status, setStatus] =
    useState<SubmissionStatus>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submittingRef = useRef(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");
    const product = params.get("product");
    const plan = params.get("plan");

    const allowedTypes: InquiryType[] = [
      "early-access",
      "demo",
      "sales",
    ];

    const allowedPlans: Record<string, string[]> = {
      VendoraPOS: [
        "Essential",
        "Professional",
        "Enterprise",
      ],
      VendoraKiosk: [
        "Ordering",
        "Ordering + Kitchen",
        "Enterprise",
      ],
    };

    const selectedProduct =
      product && validProducts.includes(product)
        ? product
        : initialForm.product;

    const selectedPlan =
      plan &&
      allowedPlans[selectedProduct]?.includes(plan)
        ? plan
        : null;

    setForm((previous) => ({
      ...previous,
      inquiryType:
        type && allowedTypes.includes(type as InquiryType)
          ? (type as InquiryType)
          : previous.inquiryType,
      product: selectedProduct,
      message: selectedPlan
        ? `I'm interested in the ${selectedProduct} ${selectedPlan} plan. Please contact me to discuss pricing, setup, and availability.`
        : previous.message,
    }));
  }, []);

  function updateField<K extends keyof FormData>(
    field: K,
    value: FormData[K]
  ) {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
    setNotice("");
    setStatus("idle");
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (submittingRef.current) return;

    submittingRef.current = true;
    setIsSubmitting(true);
    setNotice("");
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...form, website }),
      });

      const result: unknown = await response.json();

      const message =
        result &&
        typeof result === "object" &&
        "message" in result &&
        typeof result.message === "string"
          ? result.message
          : "";

      if (!response.ok) {
        throw new Error(
          message ||
            "We couldn't send your inquiry. Please try again."
        );
      }

      setStatus("success");
      setNotice(
        message ||
          "Your inquiry has been submitted."
      );
      setForm(initialForm);
      setWebsite("");
    } catch (error) {
      setStatus("error");
      setNotice(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      submittingRef.current = false;
      setIsSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 xl:px-0">
      <Navbar />

      <main className="space-y-12 pb-24 md:space-y-16">
        <section className="space-y-6 pt-10 text-center md:pt-16">
          <SlideEffect>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[#707070] transition-colors hover:text-black"
            >
              <ArrowLeft size={16} />
              Back to VendoraHQ
            </Link>
          </SlideEffect>

          <SlideEffect>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#6ECE9D]/40 bg-[#6ECE9D]/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#26845D]">
              <Mail size={15} />
              Connect With VendoraHQ
            </span>
          </SlideEffect>

          <SlideEffect>
            <h1 className="mx-auto max-w-3xl bg-gradient-to-b from-black to-black/60 bg-clip-text text-4xl font-semibold leading-tight tracking-tight text-transparent md:text-6xl">
              Let&apos;s Build Better
              <br />
              Retail Together.
            </h1>
          </SlideEffect>

          <SlideEffect className="mx-auto max-w-2xl text-sm leading-relaxed text-[#707070] md:text-lg">
            Interested in VendoraPOS, VendoraKiosk, or
            upcoming VendoraHQ products? Tell us about
            your business and what you are looking for.
          </SlideEffect>
        </section>

        <section className="space-y-5">
          <div className="grid gap-4 md:grid-cols-3">
            {inquiryOptions.map((option) => {
              const Icon = option.icon;
              const selected =
                form.inquiryType === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  disabled={isSubmitting}
                  onClick={() =>
                    updateField("inquiryType", option.id)
                  }
                  aria-pressed={selected}
                  className={`rounded-2xl border p-5 text-left transition-all duration-300 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60 ${
                    selected
                      ? "border-[#26845D] bg-[#6ECE9D]/10 shadow-sm"
                      : "border-black/10 bg-white hover:border-[#6ECE9D]"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6ECE9D]/15 text-[#26845D]">
                      <Icon size={22} />
                    </div>
                    {selected && (
                      <CheckCircle2
                        size={20}
                        className="text-[#26845D]"
                      />
                    )}
                  </div>

                  <h2 className="mt-4 text-base font-semibold text-black">
                    {option.title}
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-[#707070]">
                    {option.description}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        <SlideEffect isSpring={false}>
          <div className="grid overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm lg:grid-cols-[1.5fr_1fr]">
            <div className="p-6 md:p-9">
              <div className="mb-8 space-y-2">
                <h2 className="text-2xl font-semibold text-black">
                  Tell Us About Your Business
                </h2>

                <p className="text-sm text-[#707070]">
                  Fill out the details below to send
                  your inquiry to VendoraHQ.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                aria-busy={isSubmitting}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="fullName"
                      className={labelClass}
                    >
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      minLength={2}
                      maxLength={120}
                      autoComplete="name"
                      disabled={isSubmitting}
                      className={inputClass}
                      placeholder="Your full name"
                      value={form.fullName}
                      onChange={(event) =>
                        updateField("fullName", event.target.value)
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className={labelClass}
                    >
                      Work Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={254}
                      autoComplete="email"
                      disabled={isSubmitting}
                      className={inputClass}
                      placeholder="name@company.com"
                      value={form.email}
                      onChange={(event) =>
                        updateField("email", event.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="company"
                      className={labelClass}
                    >
                      Business Name *
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      minLength={2}
                      maxLength={160}
                      autoComplete="organization"
                      disabled={isSubmitting}
                      className={inputClass}
                      placeholder="Your company or store"
                      value={form.company}
                      onChange={(event) =>
                        updateField("company", event.target.value)
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className={labelClass}
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      maxLength={40}
                      autoComplete="tel"
                      disabled={isSubmitting}
                      className={inputClass}
                      placeholder="Optional"
                      value={form.phone}
                      onChange={(event) =>
                        updateField("phone", event.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="product"
                      className={labelClass}
                    >
                      Product Interest *
                    </label>
                    <select
                      id="product"
                      name="product"
                      required
                      disabled={isSubmitting}
                      className={inputClass}
                      value={form.product}
                      onChange={(event) =>
                        updateField("product", event.target.value)
                      }
                    >
                      <option value="VendoraPOS">
                        VendoraPOS
                      </option>
                      <option value="VendoraKiosk">
                        VendoraKiosk
                      </option>
                      <option value="VendoraLoyalty">
                        VendoraLoyalty
                      </option>
                      <option value="Multiple Products">
                        Multiple Products
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="storeCount"
                      className={labelClass}
                    >
                      Number of Locations
                    </label>
                    <select
                      id="storeCount"
                      name="storeCount"
                      disabled={isSubmitting}
                      className={inputClass}
                      value={form.storeCount}
                      onChange={(event) =>
                        updateField("storeCount", event.target.value)
                      }
                    >
                      <option value="1">1 location</option>
                      <option value="2-5">2–5 locations</option>
                      <option value="6-20">6–20 locations</option>
                      <option value="21+">21+ locations</option>
                      <option value="Planning">
                        Planning a business
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={labelClass}
                  >
                    Tell Us What You Need *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    maxLength={3000}
                    rows={5}
                    disabled={isSubmitting}
                    className={`${inputClass} resize-y`}
                    placeholder="Tell us about your business, current software, and what you would like to improve."
                    value={form.message}
                    onChange={(event) =>
                      updateField("message", event.target.value)
                    }
                  />
                </div>

                <div
                  className="absolute -left-[10000px] h-px w-px overflow-hidden"
                  aria-hidden="true"
                >
                  <label htmlFor="website">
                    Leave this field empty
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(event) =>
                      setWebsite(event.target.value)
                    }
                  />
                </div>

                <label className="flex items-start gap-3 text-sm leading-relaxed text-[#707070]">
                  <input
                    type="checkbox"
                    required
                    disabled={isSubmitting}
                    checked={form.consent}
                    onChange={(event) =>
                      updateField("consent", event.target.checked)
                    }
                    className="mt-1 h-4 w-4 accent-[#26845D]"
                  />
                  <span>
                    I agree to be contacted by VendoraHQ
                    regarding this inquiry. I understand
                    that submitting an inquiry does not
                    guarantee product availability or
                    early-access acceptance.
                  </span>
                </label>

                {notice && (
                  <p
                    role={status === "error" ? "alert" : "status"}
                    aria-live="polite"
                    className={`rounded-xl border p-4 text-sm ${
                      status === "success"
                        ? "border-[#26845D]/30 bg-[#6ECE9D]/10 text-[#206B4C]"
                        : "border-red-200 bg-red-50 text-red-700"
                    }`}
                  >
                    {notice}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#26845D] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2
                        size={18}
                        className="animate-spin"
                      />
                      Sending Inquiry...
                    </>
                  ) : (
                    <>
                      Send Inquiry
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-[#707070]">
                  Email delivery will be available once
                  our company mailbox is configured.
                </p>
              </form>
            </div>

            <aside className="space-y-7 bg-[#F8F5ED] p-6 md:p-9">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6ECE9D]/20 text-[#26845D]">
                  <Building2 size={24} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-black">
                  Built for Real Businesses
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#707070]">
                  From independent retailers to growing
                  store networks, VendoraHQ is developing
                  practical software solutions for
                  modern business operations.
                </p>
              </div>

              <div className="border-t border-black/10 pt-6">
                <h3 className="font-semibold text-black">
                  What You Can Ask About
                </h3>
                <div className="mt-4 space-y-4">
                  {[
                    "POS software and store management",
                    "Self-ordering kiosks and kitchen workflows",
                    "Hardware and installation requirements",
                    "Subscription pricing and setup",
                    "Integrations and business-specific needs",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-[#26845D]"
                      />
                      <span className="text-sm text-[#707070]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white p-5">
                <ShieldCheck
                  size={24}
                  className="text-[#26845D]"
                />
                <h3 className="mt-3 font-semibold text-black">
                  Your Information Matters
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#707070]">
                  We use your inquiry details to respond
                  to your request. Your information is
                  handled through our configured email
                  service when delivery is enabled.
                </p>
              </div>
            </aside>
          </div>
        </SlideEffect>
      </main>

      <Footer />
    </div>
  );
}