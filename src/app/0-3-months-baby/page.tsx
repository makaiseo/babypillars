import type { Metadata } from "next";
import { canonical } from '../lib/seo';
import Link from "next/link";
import SectionBadge from "@/app/components/SectionBadge";
import CTASection from "@/app/components/CTASection";
import PricingCard from "@/app/components/PricingCard";

export const metadata: Metadata = {
  ...canonical('/0-3-months-baby/'),
  title: "0–3 Month Baby Development Online Home Course - BabyPillars",
  description:
    "Discover professional, fun activities tailored to your 0–3 month baby's milestones and developmental needs. Navigate the first three months with confidence and ease.",
  openGraph: {
    title: "0–3 Month Baby Development Online Home Course - BabyPillars",
    description:
      "Discover professional, fun activities tailored to your 0–3 month baby's milestones and developmental needs.",
    images: [{ url: "/pages/0-3-months-baby/featured-0-3_n_backround.png", width: 1200, height: 630, alt: "0-3 Month Baby Development" }],
  },
};

const modules = [
  {
    duration: "2m 37s",
    title: "Introduction",
    description:
      "Overview of the 0–3 months development series: holding positions, crying, stomach aches, tummy time, head lifting, and communication.",
    icon: "play_circle",
  },
  {
    duration: "5m 18s",
    title: "The Basic Holding Positions",
    description:
      "Various newborn holding positions that support your baby's head for different states, gas, crying, fatigue, and more.",
    icon: "child_care",
  },
  {
    duration: "5m 35s",
    title: "Coping with Crying",
    description:
      "Why newborns cry and practical methods to release tension, supporting sensory and motor development from day one.",
    icon: "volunteer_activism",
  },
  {
    duration: "5m 54s",
    title: "Welcoming a Newborn to the World",
    description:
      "Mouth activation techniques to release tension, helping with gas and stomach aches during the earliest weeks.",
    icon: "favorite",
  },
  {
    duration: "2m 48s",
    title: "Understanding Newborn Reflexes",
    description:
      "Activating the finding reflex, crawling, grasping, Moro, and sucking reflexes through gentle play and motion.",
    icon: "psychology",
  },
  {
    duration: "8m 03s",
    title: "Advanced Tummy Time Activities",
    description:
      "Step-by-step exercises to help your baby lay comfortably on their stomach and build the foundations for future movement.",
    icon: "fitness_center",
  },
  {
    duration: "7m 53s",
    title: "From the Womb to the World",
    description:
      "How to carry a newborn in arms or on a bean bag, safely introducing them to the world outside the womb.",
    icon: "home_heart",
  },
  {
    duration: "8m 43s",
    title: "Helping Your Baby with Gas",
    description:
      "Easing and preventing abdominal discomfort and bloating during the early stages of your baby's digestive development.",
    icon: "medical_services",
  },
];

const milestones = [
  { icon: "self_improvement", text: "Head control and neck strengthening" },
  { icon: "visibility", text: "Visual tracking and eye focus" },
  { icon: "record_voice_over", text: "First coos and early communication" },
  { icon: "waving_hand", text: "Grasping and reflex activation" },
  { icon: "accessible_forward", text: "Tummy time readiness and tolerance" },
  { icon: "mood", text: "Social smiling and emotional bonding" },
];

const stages = [
  { range: "0–3 Months", title: "The Foundation", desc: "Comfort, regulation, early movement foundations.", href: "/0-3-months-baby", active: true },
  { range: "3–6 Months", title: "The Explorer", desc: "Tummy time, rolling readiness, body awareness.", href: "/3-6-months-baby", active: false },
  { range: "6–9 Months", title: "The Mover", desc: "Sitting foundations, crawling readiness, exploration.", href: "/6-9-months-baby", active: false },
  { range: "9–12 Months", title: "The Discoverer", desc: "Mobility, coordination, and growing independence.", href: "/9-12-months-baby", active: false },
  { range: "12–24 Months", title: "The Adventurer", desc: "Walking, language, fine motor skills, confidence.", href: "/12-24-months-baby", active: false },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Course", "name": "0-3 Months Baby Development", "url": "https://babypillars.com/0-3-months-baby/", "description": "Environment-first online baby development course by BabyPillars specialist Anat Furstenberg.", "provider": {"@type": "Organization", "name": "BabyPillars", "url": "https://babypillars.com"}, "offers": {"@type": "Offer", "price": "9", "priceCurrency": "USD", "url": "https://babypillars.com/pricing/"}, "hasCourseInstance": {"@type": "CourseInstance", "courseMode": "online"}}) }} />
      {/* Hero */}
      <section className="relative pt-16 pb-24 hero-pattern overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionBadge text="0–3 Months · The Foundation" />
              <h1 className="text-6xl md:text-7xl font-display leading-[1.1] text-slate-900 mb-8">
                Navigate the First Three Months with{" "}
                <span className="italic text-primary">Confidence and Ease.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
                Our comprehensive course for 0–3 month olds gives you the tools and
                expert-backed guidance you need to support your baby&apos;s development
                from day one, without the overwhelm.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Expert-backed video lessons, 2–8 minutes each",
                  "Holding positions, tummy time, reflexes & more",
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
                alt="0-3 month baby development"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
                src="/pages/0-3-months-baby/featured-0-3_n_backround.png"
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
              The first three months are{" "}
              <span className="italic text-primary">the foundation of everything.</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Your newborn is transitioning from the womb to the world. Every hold,
              every response to their cry, every moment of tummy time, it all shapes
              what comes next.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg font-bold text-slate-800 mb-6">
                Most new parents feel:
              </p>
              <ul className="space-y-4">
                {[
                  '"Am I holding them right?"',
                  '"Why are they crying so much?"',
                  '"Is tummy time supposed to look like this?"',
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
                You don&apos;t need more tips from random sources.
              </p>
              <p className="text-xl font-bold text-slate-900">
                You need a{" "}
                <span className="text-primary">clear, sequenced system</span>{" "}
                built for this exact age.
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
              8 Expert Video Lessons for 0–3 Months
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Short, practical, and built around what actually matters at this age.
              No fluff, no hour-long webinars.
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
                      Lesson {i + 1}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">{mod.duration}</span>
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
              What You&apos;ll Help Your Baby Achieve
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              These are the foundations that all future milestones build on.
              BabyPillars shows you how to support each one, naturally.
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
              You don&apos;t need to chase milestones.
            </p>
            <p className="text-slate-600 leading-relaxed">
              When the environment is right, development unfolds naturally. BabyPillars
              shows you exactly how to set that environment up, week by week.
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
              You&apos;re Starting at the Right Place
            </h2>
            <p className="text-xl text-slate-600">
              The 0–3 month module is the foundation of the full 0–24 month BabyPillars system.
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
              Full access to all age modules, including 0–3 months. No pressure, cancel anytime.
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
            <Link
              href="/babypillars-24-bundle"
              className="text-primary font-medium hover:underline"
            >
              View the Full BabyPillars Program &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* One Important Thing */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display text-slate-900 mb-8 leading-[1.1]">
            You Haven&apos;t Missed Anything
          </h2>
          <div className="text-xl text-slate-600 leading-relaxed space-y-4 mb-10">
            <p>You don&apos;t need to be doing everything perfectly.</p>
            <p>You don&apos;t need to &ldquo;catch up.&rdquo;</p>
            <p>And no milestone is out of reach.</p>
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
            Enroll in the 0–3 Months Course
          </Link>
        </div>
      </section>

      {/* CTA */}
      <CTASection variant="dark">
        <h2 className="text-4xl md:text-5xl font-display mb-8">
          Ready to Transform Your Parenting Journey?
        </h2>
        <div className="text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          <p>Join thousands of parents who replaced guesswork with a clear, expert-backed system.</p>
        </div>
        <ul className="text-lg text-white/90 space-y-3 mb-12 inline-block text-left">
          {[
            "Expert video lessons for 0–3 months",
            "Weekly clarity on what matters now",
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
