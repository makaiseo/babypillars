import Link from "next/link";
import type { Metadata } from "next";
import SectionBadge from "../components/SectionBadge";
import CTASection from "../components/CTASection";
import MilestoneForm from "./MilestoneForm";

export const metadata: Metadata = {
  title: "Free Milestone Tracker - BabyPillars",
  description:
    "Track your baby's milestones without pressure or guesswork. Our comprehensive 0-24 month tracker provides a clinical-grade roadmap simplified for real-life parenting.",
  openGraph: {
    title: "Free Milestone Tracker - BabyPillars",
    description:
      "Track your baby's milestones without pressure or guesswork. Our comprehensive 0-24 month tracker provides a clinical-grade roadmap simplified for real-life parenting.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Milestone Tracker - BabyPillars",
    description:
      "Track your baby's milestones without pressure or guesswork. Our comprehensive 0-24 month tracker provides a clinical-grade roadmap simplified for real-life parenting.",
  },
};

export default function MilestoneTrackerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-24 overflow-hidden hero-pattern">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <SectionBadge text="Free Resource" />
              <h1 className="text-6xl md:text-7xl font-display leading-[1.1] text-slate-900 mb-8">
                Free Baby Milestone Tracker{" "}
                <span className="italic text-primary">(0&ndash;24 Months)</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-700 font-medium mb-6">
                Track your baby&apos;s milestones without pressure or guesswork.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                Our comprehensive 0-24 month tracker provides a clinical-grade
                roadmap simplified for real-life parenting. Understand the
                &ldquo;why&rdquo; behind every movement and development.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "64+ comprehensive developmental milestones",
                  "Organized by stages for clear progression",
                  "Designed to reduce parenting anxiety",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check
                      </span>
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="#lead-form"
                className="inline-block bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl shadow-primary/20 hover:scale-105"
              >
                Get the Free Milestone Tracker
              </a>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-[40px] transform rotate-3"></div>
              <img
                alt="Mother tracking baby milestones"
                className="relative rounded-[32px] shadow-2xl w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbboVf4cYC4U6utgZM4NvMHRhO-yUhlq_WxHMSiKktcnP3yR1PDwGohga9uPqkWfSOcRdTOb5xGAOKB01CIAGQwX4JfZIng_miu5OnxctJA3J5GWazLOWDIL86rXrJTK2afa0usb7L3G1DQcsFI4u1e_JZRNytt3YQLDUYXYvr5j6bYSCQScQJdRMn2CA70DsPCAqRgwlLQpbwR7FB4DSL6m79Xp2sOuDVMtpJAJI4P6lKFKcIndS9FYHzWsz8Yk0sQ-01oEo50NuN"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-slate-900 mb-6">
              Why This Tracker is Different
            </h2>
            <p className="text-lg text-slate-600">
              Most milestone lists cause stress. Ours creates understanding.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
            <div className="bg-slate-50 p-12">
              <h4 className="text-xl font-bold text-slate-400 mb-8 uppercase tracking-widest">
                Average Lists
              </h4>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-red-400">
                    close
                  </span>
                  <p className="text-slate-600">
                    Rigid &ldquo;deadlines&rdquo; that ignore individual
                    variability.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-red-400">
                    close
                  </span>
                  <p className="text-slate-600">
                    Focus on the outcome, not the developmental process.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-red-400">
                    close
                  </span>
                  <p className="text-slate-600">
                    High-pressure checklists that lead to &ldquo;comparison
                    trap.&rdquo;
                  </p>
                </li>
              </ul>
            </div>
            <div className="bg-primary/5 p-12 border-l border-slate-200">
              <h4 className="text-xl font-bold text-primary mb-8 uppercase tracking-widest">
                BabyPillars Tracker
              </h4>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <p className="text-slate-800 font-medium">
                    Context-driven developmental flow based on readiness.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <p className="text-slate-800 font-medium">
                    Focus on the environment and how it supports movement.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <p className="text-slate-800 font-medium">
                    Clinical insights translated into calm, actionable steps.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-display text-center text-slate-900 mb-16">
            What You&apos;ll Get Inside
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "list_alt",
                title: "64+ Milestones",
                desc: "Comprehensive coverage from first lift to confident walking.",
              },
              {
                icon: "calendar_today",
                title: "Age Ranges",
                desc: "Flexible windows that respect your baby's unique timeline.",
              },
              {
                icon: "moving",
                title: "Progress Tracking",
                desc: "Easy-to-use logging to see how far your baby has come.",
              },
              {
                icon: "notifications_active",
                title: "Development Reminders",
                desc: "Simple nudges on what to look for in the coming weeks.",
              },
            ].map((feature) => (
              <div
                key={feature.icon}
                className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    {feature.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Is This For You */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display text-slate-900 mb-8">
                Is this tracker for you?
              </h2>
              <div className="space-y-6">
                {[
                  "You find yourself **googling milestones late at night** and feeling more confused than when you started.",
                  "You feel **overwhelmed** by the sheer amount of \"shoulds\" in modern parenting advice.",
                  "You want to **confidently support** your baby's development without buying expensive gadgets.",
                  "You value **evidence-based information** delivered with a nurturing, calm approach.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <p
                      className="text-lg text-slate-700"
                      dangerouslySetInnerHTML={{
                        __html: item
                          .replace(
                            /\*\*(.*?)\*\*/g,
                            "<strong>$1</strong>"
                          )
                          .replace(/"/g, "&ldquo;")
                          .replace(/"/g, "&rdquo;"),
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                alt="Family with baby reading together"
                className="rounded-2xl shadow-lg aspect-square object-cover object-top"
                src="/milestone-family.png"
              />
              <img
                alt="Parenting moment"
                className="rounded-2xl shadow-lg mt-8 aspect-square object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbboVf4cYC4U6utgZM4NvMHRhO-yUhlq_WxHMSiKktcnP3yR1PDwGohga9uPqkWfSOcRdTOb5xGAOKB01CIAGQwX4JfZIng_miu5OnxctJA3J5GWazLOWDIL86rXrJTK2afa0usb7L3G1DQcsFI4u1e_JZRNytt3YQLDUYXYvr5j6bYSCQScQJdRMn2CA70DsPCAqRgwlLQpbwR7FB4DSL6m79Xp2sOuDVMtpJAJI4P6lKFKcIndS9FYHzWsz8Yk0sQ-01oEo50NuN"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How To Use */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display text-slate-900 mb-16">
            How to Use the Tracker
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                num: "1",
                icon: "download",
                title: "Download",
                desc: "Get your instant PDF tracker sent to your inbox.",
              },
              {
                num: "2",
                icon: "visibility",
                title: "Observe",
                desc: "Watch your baby naturally interact with their space.",
              },
              {
                num: "3",
                icon: "edit_note",
                title: "Track",
                desc: "Mark off milestones as you see developmental readiness.",
              },
              {
                num: "4",
                icon: "sentiment_satisfied",
                title: "Enjoy",
                desc: "Celebrate the small wins and the journey ahead.",
              },
            ].map((step) => (
              <div key={step.num} className="relative">
                <div className="text-6xl font-display text-primary/10 absolute -top-8 left-1/2 -translate-x-1/2 select-none">
                  {step.num}
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">
                    {step.icon}
                  </span>
                  <h4 className="font-bold text-lg mb-2 text-slate-900">
                    {step.title}
                  </h4>
                  <p className="text-sm text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-24 bg-white" id="lead-form">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-background-light rounded-[32px] p-8 md:p-16 border border-primary/20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-primary text-9xl">
                auto_awesome
              </span>
            </div>
            <div className="relative z-10 text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display text-slate-900 mb-4">
                Get the Free 0&ndash;24 Month Milestone Tracker
              </h2>
              <p className="text-slate-600 max-w-xl mx-auto">
                Join 15,000+ parents who use our tracker to find peace and
                clarity in their baby&apos;s development.
              </p>
            </div>
            <MilestoneForm />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection variant="green">
        <h2 className="text-4xl md:text-5xl font-display mb-6">
          One important thing to know
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Tracking milestones is just the first step. Our BabyPillars system is
          designed to help you create the perfect environment where those
          milestones happen naturally.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/how-it-works"
            className="bg-white text-primary hover:bg-slate-100 px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105"
          >
            See How BabyPillars Works
          </Link>
          <Link
            href="/pricing"
            className="bg-transparent border-2 border-white/30 hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold text-lg transition-all"
          >
            Browse Workshops
          </Link>
        </div>
      </CTASection>
    </>
  );
}
