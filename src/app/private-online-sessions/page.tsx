import Link from "next/link";
import type { Metadata } from "next";
import SectionBadge from "../components/SectionBadge";
import CTASection from "../components/CTASection";
import SessionForm from "../anat-furstenberg-first-step/SessionForm";

export const metadata: Metadata = {
  title: "Private Online Sessions - BabyPillars",
  description:
    "Book a private online session with Anat Furstenberg. Get personalised, expert guidance for your baby's development, face to face, from anywhere in the world.",
  openGraph: {
    title: "Private Online Sessions - BabyPillars",
    description:
      "Book a private online session with Anat Furstenberg. Get personalised, expert guidance for your baby's development, face to face, from anywhere in the world.",
    images: [
      {
        url: "/pages/anat-furstenberg-first-step/featured-anat-pic1_adobespark-e1632143681545.png",
        width: 1200,
        height: 630,
        alt: "Private Online Sessions with Anat Furstenberg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Online Sessions - BabyPillars",
    description:
      "Book a private online session with Anat Furstenberg. Get personalised, expert guidance for your baby's development, face to face, from anywhere in the world.",
  },
};

export default function PrivateOnlineSessionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-24 overflow-hidden hero-pattern">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <SectionBadge text="Private Sessions" />
              <h1 className="text-6xl md:text-7xl font-display leading-[1.1] text-slate-900 mb-8">
                Private sessions,{" "}
                <span className="italic text-primary">built around your baby.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-700 font-medium mb-6">
                One-on-one guidance from Anat Furstenberg, tailored to your baby's
                unique stage and your family's needs.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                Every baby is different. A private session gives you direct,
                expert eyes on your child, so you stop guessing and start
                acting with real confidence.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "Live, one-on-one video session with Anat herself",
                  "Fully personalised to your baby's age, stage, and environment",
                  "Walk away with a clear, actionable plan, not more overwhelm",
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
                href="#booking-form"
                className="inline-block bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl shadow-primary/20 hover:scale-105"
              >
                Book Your Session
              </a>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-[40px] transform rotate-3"></div>
              <img
                alt="Anat Furstenberg private online session"
                className="relative rounded-[32px] shadow-2xl w-full object-cover"
                src="/pages/anat-furstenberg-first-step/anat-pic1_adobespark-e1632143681545.png"
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
              Why a private session changes everything
            </h2>
            <p className="text-lg text-slate-600">
              Generic content online was never designed for your baby. A private
              session is.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
            <div className="bg-slate-50 p-12">
              <h4 className="text-xl font-bold text-slate-400 mb-8 uppercase tracking-widest">
                Without a Private Session
              </h4>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-red-400">close</span>
                  <p className="text-slate-600">
                    Scrolling through contradictory advice that doesn&apos;t
                    apply to your baby&apos;s specific situation.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-red-400">close</span>
                  <p className="text-slate-600">
                    No one watching your baby move, so nothing gets caught
                    early and nothing gets corrected.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-red-400">close</span>
                  <p className="text-slate-600">
                    The constant anxiety of wondering whether you&apos;re doing
                    enough, or doing it right.
                  </p>
                </li>
              </ul>
            </div>
            <div className="bg-primary/5 p-12 border-l border-slate-200">
              <h4 className="text-xl font-bold text-primary mb-8 uppercase tracking-widest">
                With a Private Session
              </h4>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <p className="text-slate-800 font-medium">
                    Anat sees your baby live and gives you guidance built
                    entirely around what she observes.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <p className="text-slate-800 font-medium">
                    Every question you&apos;ve been holding answered directly,
                    in real time, by a 20-year specialist.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <p className="text-slate-800 font-medium">
                    You leave with a calm, clear next step and the confidence
                    to take it.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens in a Session */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-display text-center text-slate-900 mb-16">
            What happens in your session
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "person_search",
                title: "Live Assessment",
                desc: "Anat watches your baby move and play in real time, spotting patterns no article could ever catch.",
              },
              {
                icon: "lightbulb",
                title: "Personalised Plan",
                desc: "You receive a clear, practical roadmap built around your home, your baby, and your goals.",
              },
              {
                icon: "chair",
                title: "Environment Audit",
                desc: "Anat shows you exactly how to set up your space so it supports your baby's next natural leap.",
              },
              {
                icon: "sentiment_satisfied",
                title: "Ongoing Clarity",
                desc: "Walk away knowing what to do, what to ignore, and how to stay confident in the weeks ahead.",
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
                A private session is right for you if...
              </h2>
              <div className="space-y-6">
                {[
                  "You&apos;ve noticed something in your baby&apos;s movement or behaviour and **want a specialist to take a look**.",
                  "You feel overwhelmed by conflicting advice and just want to know **what to actually do this week**.",
                  "You want to **set up your home correctly** to support development and get it right the first time.",
                  "You value **direct, expert guidance** tailored to your baby over generic content built for everyone.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <p
                      className="text-lg text-slate-700"
                      dangerouslySetInnerHTML={{
                        __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                alt="Anat Furstenberg"
                className="rounded-2xl shadow-lg aspect-square object-cover object-top"
                src="/anat.jpg"
              />
              <img
                alt="Baby development session"
                className="rounded-2xl shadow-lg mt-8 aspect-square object-cover"
                src="/pages/anat-furstenberg-first-step/anat-pic1_adobespark-e1632143681545.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display text-slate-900 mb-16">
            How to get started
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                num: "1",
                icon: "edit_note",
                title: "Book",
                desc: "Fill out the form below with your details and your baby&apos;s current age.",
              },
              {
                num: "2",
                icon: "mark_email_read",
                title: "Confirm",
                desc: "Anat will personally reach out within 24 hours to schedule your session.",
              },
              {
                num: "3",
                icon: "videocam",
                title: "Connect",
                desc: "Join your private session with Anat via a secure video call.",
              },
              {
                num: "4",
                icon: "rocket_launch",
                title: "Grow",
                desc: "Apply your personalised plan and watch your baby thrive.",
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
                  <p
                    className="text-sm text-slate-600"
                    dangerouslySetInnerHTML={{ __html: step.desc }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <SectionBadge text="Simple Pricing" />
            <h2 className="text-4xl md:text-5xl font-display text-slate-900 mb-6">
              Choose the session{" "}
              <span className="italic text-primary">that fits your needs.</span>
            </h2>
            <p className="text-lg text-slate-600">
              Whether you have one specific question or want ongoing expert
              support, there is an option for you.
            </p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6 mt-8">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Single Session */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
              <div className="mb-8">
                <h3 className="text-2xl font-display text-slate-900 mb-2">
                  Single Session
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">$120</span>
                  <span className="text-slate-500">/ hour</span>
                </div>
                <p className="mt-4 text-slate-600 text-sm">
                  Perfect for a focused deep-dive on a specific challenge or
                  question about your baby&apos;s development.
                </p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex gap-3 text-slate-700">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>60-minute live video session with Anat</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>Personalised assessment and action plan</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>Session summary sent to your inbox</span>
                </li>
              </ul>
              <a
                href="#booking-form"
                className="w-full py-4 px-6 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-colors text-center"
              >
                Book a Single Session
              </a>
            </div>

            {/* Package */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border-2 border-primary shadow-xl relative flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                BEST VALUE
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-display text-slate-900 mb-2">
                  Session Package
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">$399</span>
                  <span className="text-slate-500">/ 4 sessions</span>
                </div>
                <p className="mt-4 text-primary font-semibold text-sm">
                  Save 17% compared to single sessions.
                </p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex gap-3 text-slate-700 font-medium">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  <span>4 x 60-minute sessions with Anat</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>Full developmental roadmap and environment audit</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>Priority scheduling and email support between sessions</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>Written progress summary after each session</span>
                </li>
              </ul>
              <a
                href="#booking-form"
                className="w-full py-4 px-6 rounded-full bg-primary text-white font-bold hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all text-center"
              >
                Book the Package
              </a>
            </div>
          </div>
          <p className="text-center mt-8 text-slate-500 text-sm flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-base">verified_user</span>
            All sessions are conducted via secure video call. Anat personally replies within 24 hours.
          </p>
        </div>
      </section>

      {/* About Anat */}
      <section className="py-20 bg-background-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-10 p-10 bg-primary/5 rounded-[40px] border border-primary/10">
            <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
              <img
                alt="Anat Furstenberg"
                className="w-full h-full object-cover rounded-2xl shadow-md"
                src="/anat.jpg"
              />
            </div>
            <div>
              <span className="text-primary font-bold text-sm uppercase tracking-widest mb-2 block">
                Your Specialist
              </span>
              <h3 className="text-3xl font-display text-slate-900 mb-4">
                You work directly with Anat, not an assistant.
              </h3>
              <p className="text-lg text-slate-600 mb-4 max-w-2xl leading-relaxed">
                Every private session is led by{" "}
                <span className="text-slate-900 font-semibold">
                  Anat Furstenberg
                </span>
                , a developmental specialist with over 20 years of clinical
                experience working with thousands of families across 50+
                countries. When you book, you get Anat.
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-500">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-primary text-lg">workspace_premium</span>
                  20+ Years Clinical Experience
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-primary text-lg">groups</span>
                  5,000+ Families Helped
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-primary text-lg">public</span>
                  50+ Countries
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-24 bg-white" id="booking-form">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-background-light rounded-[32px] p-8 md:p-16 border border-primary/20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-primary text-9xl">
                auto_awesome
              </span>
            </div>
            <div className="relative z-10 text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display text-slate-900 mb-4">
                Book Your Session With Anat
              </h2>
              <p className="text-slate-600 max-w-xl mx-auto">
                Fill in your details below and Anat will personally reach out
                within 24 hours to confirm your session time.
              </p>
            </div>
            <SessionForm />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection variant="green">
        <h2 className="text-4xl md:text-5xl font-display mb-6">
          Your baby&apos;s development is too important to guess at.
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          One session with Anat can give you more clarity than months of
          searching online. Book your first session today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#booking-form"
            className="bg-white text-primary hover:bg-slate-100 px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105"
          >
            Book a Session Now
          </a>
          <Link
            href="/how-it-works"
            className="bg-transparent border-2 border-white/30 hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold text-lg transition-all"
          >
            Learn How BabyPillars Works
          </Link>
        </div>
      </CTASection>
    </>
  );
}
