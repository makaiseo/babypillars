import Link from "next/link";
import type { Metadata } from "next";
import SectionBadge from "../components/SectionBadge";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact BabyPillars - Here to Help",
  description:
    "Have a question about a developmental milestone, our workshops, or just want to say hello? Reach out and we'll support you on this journey.",
  openGraph: {
    title: "Contact BabyPillars - Here to Help",
    description:
      "Have a question about a developmental milestone, our workshops, or just want to say hello? Reach out and we'll support you on this journey.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact BabyPillars - Here to Help",
    description:
      "Have a question about a developmental milestone, our workshops, or just want to say hello? Reach out and we'll support you on this journey.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-16 overflow-hidden hero-pattern">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <SectionBadge text="Contact Us" />
            <h1 className="text-5xl md:text-7xl font-display leading-[1.1] text-slate-900 mb-8">
              We&apos;re here to help you <br />
              <span className="italic text-primary">find clarity</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Have a question about a developmental milestone, our workshops, or
              just want to say hello? Reach out and we&apos;ll support you on
              this journey.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
                <ContactForm />
              </div>
            </div>
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-primary/5 border border-primary/10 p-8 rounded-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary">
                    schedule
                  </span>
                  <h3 className="font-bold text-slate-900">Response Time</h3>
                </div>
                <p className="text-slate-600">
                  We know parenting doesn&apos;t wait. Our small, dedicated team
                  typically responds within{" "}
                  <span className="font-semibold text-primary">
                    24-48 hours
                  </span>
                  .
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-display text-slate-900 px-1">
                  Quick Answers
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/pricing"
                    className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl hover:border-primary transition-colors group"
                  >
                    <span className="text-slate-700 font-medium">
                      Browse our FAQ
                    </span>
                    <span className="material-symbols-outlined text-primary text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
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
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-display text-slate-900 px-1">
                  Other ways to connect
                </h3>
                <div className="flex gap-4">
                  <a
                    className="w-12 h-12 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary transition-all"
                    href="#"
                  >
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    className="w-12 h-12 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary transition-all"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-xl">
                      alternate_email
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <span className="material-symbols-outlined text-primary text-3xl">
              favorite
            </span>
          </div>
          <h2 className="text-3xl font-display text-slate-900 mb-4">
            You don&apos;t have to figure this out alone.
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Whether it&apos;s a small nudge or a deep dive, we&apos;re honored
            to be part of your village.
          </p>
        </div>
      </section>
    </>
  );
}
