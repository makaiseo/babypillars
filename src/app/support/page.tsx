import type { Metadata } from "next";
import Link from "next/link";
import SectionBadge from "../components/SectionBadge";
import ContactForm from "../contact/ContactForm";

export const metadata: Metadata = {
  title: "Support - BabyPillars",
  description:
    "Questions or comments? Contact us now and we'll get back to you. We appreciate your time and any comment or info you need we are here.",
  openGraph: {
    title: "Support - BabyPillars",
    description:
      "Questions or comments? Contact us now and we'll get back to you.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Support - BabyPillars",
    description:
      "Questions or comments? Contact us now and we'll get back to you.",
  },
};

export default function SupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-24 overflow-hidden hero-pattern">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <SectionBadge text="Support" />
            <h1 className="text-6xl md:text-7xl font-display leading-[1.1] text-slate-900 mb-8">
              We&apos;re here{" "}
              <span className="italic text-primary">whenever</span> you need us.
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl">
              Questions about a milestone, a workshop, or anything else?
              Reach out and our team will get back to you within 24–48 hours.
            </p>
          </div>
        </div>
        <div className="absolute top-1/2 -right-20 transform -translate-y-1/2 opacity-20 pointer-events-none">
          <svg
            fill="none"
            height="600"
            viewBox="0 0 600 600"
            width="600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="text-primary"
              cx="300"
              cy="300"
              r="250"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              className="text-primary"
              d="M100 300C100 189.543 189.543 100 300 100C410.457 100 500 189.543 500 300"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="40"
            />
          </svg>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Form */}
            <div className="lg:col-span-8">
              <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
                <h2 className="text-3xl font-display text-slate-900 mb-2">
                  Send us a message
                </h2>
                <p className="text-slate-500 mb-8">
                  Fill in the form below and we&apos;ll respond as soon as we can.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Email */}
              <div className="bg-white border border-slate-100 p-8 rounded-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary">
                    mail
                  </span>
                  <h3 className="font-bold text-slate-900">Email Us</h3>
                </div>
                <a
                  href="mailto:info@babypillars.com"
                  className="text-primary font-semibold hover:underline"
                >
                  info@babypillars.com
                </a>
              </div>

              {/* Quick links */}
              <div className="space-y-4">
                <h3 className="text-xl font-display text-slate-900 px-1">
                  Quick Answers
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/milestone-tracker"
                    className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl hover:border-primary transition-colors group"
                  >
                    <span className="text-slate-700 font-medium">
                      Developmental Checklists
                    </span>
                    <span className="material-symbols-outlined text-primary text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                  <Link
                    href="/online-baby-classes"
                    className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl hover:border-primary transition-colors group"
                  >
                    <span className="text-slate-700 font-medium">
                      Online Baby Classes
                    </span>
                    <span className="material-symbols-outlined text-primary text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
