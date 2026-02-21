import type { Metadata } from "next";
import { canonical } from '../lib/seo';
import Link from "next/link";
import SectionBadge from "@/app/components/SectionBadge";
import CTASection from "@/app/components/CTASection";
import PricingCard from "@/app/components/PricingCard";

export const metadata: Metadata = {
  ...canonical('/12-24-months-baby/'),
  title: "12–24 Month Baby Development Online Home Course - BabyPillars",
  description:
    "Discover professional, fun activities tailored to your 12–24 month toddler's milestones and developmental needs. Support walking, language, fine motor skills, and growing independence.",
  openGraph: {
    title: "12–24 Month Baby Development Online Home Course - BabyPillars",
    description:
      "Discover professional, fun activities tailored to your 12–24 month toddler's milestones and developmental needs.",
    images: [{ url: "/pages/12-24-months-baby/featured-12-24_n_backround-e1635151097843.png", width: 1200, height: 630, alt: "12-24 Month Baby Development" }],
  },
};

const modules = [
  {
    title: "Welcome to Toddlers in Motion",
    description:
      "Overview of the 12–24 months series: confident walking, running, climbing, language development, and the emotional growth that defines the toddler stage.",
    icon: "play_circle",
  },
  {
    title: "Confident Walking & Gait Development",
    description:
      "Building the balance and coordination patterns behind a smooth, confident walk, including how to support your toddler as they transition from wobbly first steps to steady strides.",
    icon: "directions_walk",
  },
  {
    title: "Climbing, Running & Active Play",
    description:
      "How to guide your toddler's natural drive to climb and run, understanding the developmental purpose behind risky-looking play and how to support it safely.",
    icon: "hiking",
  },
  {
    title: "Fine Motor Skills & Hand Control",
    description:
      "Practical activities for building finger strength, pincer grip, and hand-eye coordination, the foundations for drawing, eating independently, and self-dressing.",
    icon: "front_hand",
  },
  {
    title: "Language & Communication",
    description:
      "How the environment shapes early language. What to say, when to say it, and how to create the conditions in which first words and phrases emerge naturally.",
    icon: "record_voice_over",
  },
  {
    title: "Independence & Emotional Regulation",
    description:
      "Supporting your toddler's drive for independence without power struggles and how to help them manage big emotions before language fully arrives.",
    icon: "psychology",
  },
  {
    title: "Sleep Transitions for Toddlers",
    description:
      "Navigating the sleep challenges unique to this stage: fighting naps, later bedtimes, night waking, and how the right environment solves most of these issues.",
    icon: "bedtime",
  },
  {
    title: "Body Awareness & Coordination Games",
    description:
      "Fun, developmental games that build spatial awareness, bilateral coordination, and body control, laying the groundwork for sports, writing, and focused learning.",
    icon: "sports",
  },
];

const milestones = [
  { icon: "directions_walk", text: "Confident, independent walking" },
  { icon: "hiking", text: "Running, climbing, and jumping" },
  { icon: "front_hand", text: "Fine motor skills and hand control" },
  { icon: "record_voice_over", text: "First words and growing vocabulary" },
  { icon: "psychology", text: "Emotional regulation and independence" },
  { icon: "sports", text: "Body awareness and coordination" },
];

const stages = [
  { range: "0–3 Months", title: "The Foundation", desc: "Comfort, regulation, early movement foundations.", href: "/0-3-months-baby", active: false },
  { range: "3–6 Months", title: "The Explorer", desc: "Tummy time, rolling readiness, body awareness.", href: "/3-6-months-baby", active: false },
  { range: "6–9 Months", title: "The Mover", desc: "Sitting foundations, crawling readiness, exploration.", href: "/6-9-months-baby", active: false },
  { range: "9–12 Months", title: "The Discoverer", desc: "Mobility, coordination, and growing independence.", href: "/9-12-months-baby", active: false },
  { range: "12–24 Months", title: "The Adventurer", desc: "Walking, language, fine motor skills, confidence.", href: "/12-24-months-baby", active: true },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Course", "name": "12-24 Months Baby Development", "url": "https://babypillars.com/12-24-months-baby/", "description": "Environment-first online baby development course by BabyPillars specialist Anat Furstenberg.", "provider": {"@type": "Organization", "name": "BabyPillars", "url": "https://babypillars.com"}, "offers": {"@type": "Offer", "price": "9", "priceCurrency": "USD", "url": "https://babypillars.com/pricing/"}, "hasCourseInstance": {"@type": "CourseInstance", "courseMode": "online"}}) }} />
      {/* Hero */}
      <section className="relative pt-16 pb-24 hero-pattern overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionBadge text="12–24 Months · The Adventurer" />
              <h1 className="text-6xl md:text-7xl font-display leading-[1.1] text-slate-900 mb-8">
                Support Your Toddler&apos;s{" "}
                <span className="italic text-primary">Biggest Year of Growth.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
                From first words to running, climbing, and asserting their independence,
                the 12–24 month stage is packed with transformation. Our expert-led
                course gives you the system to navigate it all without the overwhelm.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Expert-led modules on walking, language, fine motor & more",
                  "Emotional regulation, independence & sleep transitions",
                  "Know exactly what to do, week by week",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/babypillars-24-bundle"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-primary/20 text-center"
                >
                  Enroll Now
                </Link>
                <Link
                  href="/milestone-tracker"
                  className="border-2 border-slate-200 hover:border-primary text-slate-700 px-8 py-4 rounded-full font-bold text-lg transition-all text-center"
                >
                  Free Milestone Tracker
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl transform rotate-3"></div>
              <img
                alt="12-24 month toddler development"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
                src="/pages/12-24-months-baby/featured-12-24_n_backround-e1635151097843.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What This Age Is About */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionBadge text="This Stage" />
            <h2 className="text-4xl md:text-5xl font-display text-slate-900 mb-6 leading-[1.1]">
              12–24 months is when your child{" "}
              <span className="italic text-primary">becomes their own person.</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Walking leads to running. First words become sentences. Your toddler begins
              to push boundaries, assert independence, and test everything. This stage
              can feel chaotic but it doesn&apos;t have to.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg font-bold text-slate-800 mb-6">
                Parents at this stage often wonder:
              </p>
              <ul className="space-y-4">
                {[
                  '"Why does my toddler have so many meltdowns?"',
                  '"When should they be talking more?"',
                  '"Is all this climbing and running normal?"',
                ].map((q) => (
                  <li key={q} className="flex items-start gap-3 text-slate-700">
                    <span className="material-symbols-outlined text-red-400 mt-0.5">help</span>
                    <span className="text-lg italic">{q}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background-light p-8 rounded-3xl border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">lightbulb</span>
                <p className="text-lg font-bold text-slate-800">The key insight</p>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Toddler behavior isn&apos;t random, it&apos;s developmental.
              </p>
              <p className="text-xl font-bold text-slate-900">
                When you understand{" "}
                <span className="text-primary">what your toddler needs at each stage</span>,
                the chaos becomes clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionBadge text="What&apos;s Inside" />
            <h2 className="text-4xl font-display text-slate-900 mb-6">
              Expert-Led Modules for 12–24 Months
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Covering every dimension of toddler development, movement, language,
              emotion, and independence, in short, practical lessons you can apply today.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((mod, i) => (
              <div
                key={mod.title}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex gap-6 items-start"
              >

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Module {i + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-display text-slate-900 mb-2">{mod.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{mod.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionBadge text="Milestones" />
            <h2 className="text-4xl font-display text-slate-900 mb-6">
              What You&apos;ll Help Your Toddler Achieve
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              These milestones aren&apos;t just checkboxes, they&apos;re the foundations
              of lifelong learning, health, and confidence.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {milestones.map((m) => (
              <div
                key={m.text}
                className="flex items-center gap-4 bg-background-light p-6 rounded-2xl border border-slate-100"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-lg">{m.icon}</span>
                </div>
                <p className="font-medium text-slate-800">{m.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-primary/5 rounded-3xl p-10 max-w-3xl mx-auto text-center">
            <p className="text-lg font-bold text-slate-800 mb-2">
              85% of your child&apos;s brain develops in the first 3 years of life.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The 12–24 month window is one of the most critical for language, coordination,
              and emotional development. BabyPillars helps you make the most of every week.
            </p>
          </div>
        </div>
      </section>

      {/* Why Trust BabyPillars */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display mb-8">
                Built by a Developmental Specialist
              </h2>
              <div className="space-y-6 text-lg text-white/90 leading-relaxed">
                <p>
                  BabyPillars was created by{" "}
                  <Link href="/about-babypillars" className="underline text-white hover:text-white/80">
                    a developmental specialist
                  </Link>{" "}
                  with 15+ years of hands-on experience, including work with{" "}
                  <Link href="/special-needs-baby" className="underline text-white hover:text-white/80">
                    babies with special needs
                  </Link>.
                </p>
                <p>
                  This isn&apos;t built on trends or hacks.{" "}
                  <span className="font-bold text-white">
                    It&apos;s built on how development actually unfolds.
                  </span>
                </p>
                <p>
                  Thousands of parents worldwide use BabyPillars to replace
                  anxiety with clarity and pressure with confidence.
                </p>
                <div className="flex items-center gap-6 pt-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold">12k+</p>
                    <p className="text-sm opacity-80">Parents Joined</p>
                  </div>
                  <div className="w-px h-12 bg-white/20"></div>
                  <div className="text-center">
                    <p className="text-3xl font-bold">45+</p>
                    <p className="text-sm opacity-80">Countries</p>
                  </div>
                  <div className="w-px h-12 bg-white/20"></div>
                  <div className="text-center">
                    <p className="text-3xl font-bold">15yr</p>
                    <p className="text-sm opacity-80">Expertise</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                alt="Anat Furstenberg - BabyPillars Founder"
                className="rounded-3xl shadow-2xl border-4 border-white/10 w-full object-cover object-top"
                src="/anat.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Where This Fits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionBadge text="The Full Journey" />
            <h2 className="text-4xl font-display text-slate-900 mb-4">
              The Final Stage of the BabyPillars System
            </h2>
            <p className="text-xl text-slate-600">
              Everything from birth has been building to this, the toddler years,
              where all of those foundations come to life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {stages.map((stage) => (
              <Link
                key={stage.range}
                href={stage.href}
                className={`p-8 rounded-3xl border transition-colors block ${
                  stage.active
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                    : "bg-background-light border-slate-100 hover:border-primary"
                }`}
              >
                <p className={`font-bold mb-2 text-sm ${stage.active ? "text-white/80" : "text-primary"}`}>
                  {stage.range}
                </p>
                <h5 className={`text-xl font-display mb-4 ${stage.active ? "text-white" : "text-slate-900"}`}>
                  {stage.title}
                </h5>
                <p className={`text-sm ${stage.active ? "text-white/80" : "text-slate-600"}`}>
                  {stage.desc}
                </p>
                {stage.active && (
                  <span className="inline-block mt-4 text-xs bg-white/20 text-white px-3 py-1 rounded-full font-bold">
                    You are here
                  </span>
                )}
              </Link>
            ))}
          </div>
          <p className="text-center mt-10 text-lg text-slate-600">
            The system stays the same.{" "}
            <span className="text-primary font-medium">Only the focus changes.</span>
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display text-slate-900 mb-4">
              Simple, Accessible Pricing
            </h2>
            <p className="text-lg text-slate-600">
              Full access to all age modules, including 12–24 months. No pressure, cancel anytime.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <PricingCard
              name="Monthly Plan"
              price="$9"
              period="/month"
              description="Flexible, cancel anytime. Perfect for testing the system."
              buttonText="Get Started"
            />
            <PricingCard
              featured
              name="Annual Plan"
              price="$97"
              period="/year"
              description="Best value. Full access to the 0–24 month roadmap."
              buttonText="Join Yearly"
              badge="Best Value"
            />
          </div>
          <div className="text-center mt-8">
            <Link href="/babypillars-24-bundle" className="text-primary font-medium hover:underline">
              View the Full BabyPillars Program &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* One Important Thing */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display text-slate-900 mb-8 leading-[1.1]">
            You Haven&apos;t Missed the Window
          </h2>
          <div className="text-xl text-slate-600 leading-relaxed space-y-4 mb-10">
            <p>You don&apos;t need to start over.</p>
            <p>You don&apos;t need to do more every day.</p>
            <p>And you haven&apos;t missed anything.</p>
          </div>
          <div className="bg-primary/5 rounded-3xl p-10 mb-10">
            <p className="text-xl text-slate-800 leading-relaxed">
              If you follow the BabyPillars weekly guidance, you{" "}
              <span className="font-bold text-primary">cannot miss a milestone</span>,{" "}
              because development isn&apos;t fragile when the foundations are right.
            </p>
          </div>
          <Link
            href="/babypillars-24-bundle"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-primary/20"
          >
            Enroll in the 12–24 Months Course
          </Link>
        </div>
      </section>

      {/* CTA */}
      <CTASection variant="dark">
        <h2 className="text-4xl md:text-5xl font-display mb-8">
          Ready to Thrive Through the Toddler Years?
        </h2>
        <div className="text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          <p>Join thousands of parents who replaced guesswork with a clear, expert-backed system.</p>
        </div>
        <ul className="text-lg text-white/90 space-y-3 mb-12 inline-block text-left">
          {[
            "Expert modules for 12–24 months",
            "Walking, language, emotions & independence",
            "Full access to the 0–24 month roadmap",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/babypillars-24-bundle"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-12 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-xl"
          >
            Get the BabyPillars Program
          </Link>
          <Link
            href="/how-it-works"
            className="inline-block bg-transparent border-2 border-white/30 hover:bg-white/10 text-white px-12 py-5 rounded-full font-bold text-xl transition-all"
          >
            See How It Works
          </Link>
        </div>
      </CTASection>
    </>
  );
}
