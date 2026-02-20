import type { Metadata } from "next";
import Link from "next/link";
import SectionBadge from "@/app/components/SectionBadge";
import CTASection from "@/app/components/CTASection";
import PricingCard from "@/app/components/PricingCard";

export const metadata: Metadata = {
  title: "3–6 Month Baby Development Online Home Course - BabyPillars",
  description:
    "Discover professional, fun activities tailored to your 3–6 month baby's milestones and developmental needs. Navigate rolling, tummy time, and hand-eye coordination with confidence.",
  openGraph: {
    title: "3–6 Month Baby Development Online Home Course - BabyPillars",
    description:
      "Discover professional, fun activities tailored to your 3–6 month baby's milestones and developmental needs.",
    images: [{ url: "/pages/3-6-months-baby/featured-3-6_n_backround.png", width: 1200, height: 630, alt: "3-6 Month Baby Development" }],
  },
};

const modules = [
  {
    duration: "2m 44s",
    title: "Introduction",
    description:
      "Overview of the 3–6 months development series: rolling over, hand-eye coordination, side-lying, balance, and sleep transitions.",
    icon: "play_circle",
  },
  {
    duration: "6m 15s",
    title: "Hand-Eye Coordination",
    description:
      "Building the visual-motor connection your baby needs to reach, grasp, and interact with objects and people around them.",
    icon: "front_hand",
  },
  {
    duration: "8m 33s",
    title: "Rolling Over Fundamentals Part 1",
    description:
      "The foundational mechanics of rolling, helping your baby straighten their arms and bring them toward the center of their body.",
    icon: "rotate_right",
  },
  {
    duration: "2m 58s",
    title: "Rolling Over Fundamentals Part 2",
    description:
      "Building on Part 1 to develop the coordinated movement patterns that lead to confident, full rolling over.",
    icon: "rotate_left",
  },
  {
    duration: "6m 08s",
    title: "Turning Over & Side-Lying",
    description:
      "How to introduce and support side-lying positions, a critical step between back-lying and full rolling mastery.",
    icon: "airline_seat_flat",
  },
  {
    duration: "6m 56s",
    title: "Rolling Over Mastery",
    description:
      "Bringing it all together: guiding your baby through the full rolling motion so they can feel and internalize the transition.",
    icon: "check_circle",
  },
  {
    duration: "7m 43s",
    title: "Tummy to Back & Back to Tummy, The Essentials",
    description:
      "Teaches chest flexibility and the organized motion between chest and shoulders needed for rolling in both directions.",
    icon: "swap_vert",
  },
  {
    duration: "5m 40s",
    title: "Advanced Rolling: Balance & Preparation",
    description:
      "Babies lay on a physical ball on their stomach, follow an object with their gaze, and learn to shift weight side-to-side, preparing for independent rolling.",
    icon: "sports_gymnastics",
  },
  {
    duration: "6m 03s",
    title: "Rolling Over Advanced Skills",
    description:
      "Advanced techniques to build strength, coordination, and confidence once the rolling pattern is established.",
    icon: "trending_up",
  },
  {
    duration: "4m 58s",
    title: "Baby Sleep Techniques",
    description:
      "Covers the importance of allowing noise and movement during sleep. Addresses the natural tendency of babies to fall asleep in motion, as experienced in the womb.",
    icon: "bedtime",
  },
];

const milestones = [
  { icon: "rotate_right", text: "Rolling over, back to tummy and tummy to back" },
  { icon: "front_hand", text: "Hand-eye coordination and purposeful reaching" },
  { icon: "mood", text: "Social smiling, laughing, and eye contact" },
  { icon: "pan_tool", text: "Grasping, gripping, and object exploration" },
  { icon: "airline_seat_flat", text: "Side-lying and weight shifting" },
  { icon: "bedtime", text: "Healthy sleep transitions and movement tolerance" },
];

const stages = [
  { range: "0–3 Months", title: "The Foundation", desc: "Comfort, regulation, early movement foundations.", href: "/0-3-months-baby", active: false },
  { range: "3–6 Months", title: "The Explorer", desc: "Tummy time, rolling readiness, body awareness.", href: "/3-6-months-baby", active: true },
  { range: "6–9 Months", title: "The Mover", desc: "Sitting foundations, crawling readiness, exploration.", href: "/6-9-months-baby", active: false },
  { range: "9–12 Months", title: "The Discoverer", desc: "Mobility, coordination, and growing independence.", href: "/9-12-months-baby", active: false },
  { range: "12–24 Months", title: "The Adventurer", desc: "Walking, language, fine motor skills, confidence.", href: "/12-24-months-baby", active: false },
];

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-16 pb-24 hero-pattern overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionBadge text="3–6 Months · The Explorer" />
              <h1 className="text-6xl md:text-7xl font-display leading-[1.1] text-slate-900 mb-8">
                Navigate 3–6 Months with{" "}
                <span className="italic text-primary">Confidence and Ease.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
                This is the rolling stage, one of the most exciting and important
                windows in your baby&apos;s early development. Our expert-led course
                gives you a clear, step-by-step system so you never miss a beat.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "10 expert video lessons, 2–8 minutes each",
                  "Rolling over, hand-eye coordination, sleep & more",
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
                alt="3-6 month baby development"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
                src="/pages/3-6-months-baby/featured-3-6_n_backround.png"
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
              3–6 months is when your baby{" "}
              <span className="italic text-primary">starts exploring the world.</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Rolling over, reaching for objects, responding to your voice with laughter,
              this stage is packed with milestones. But without the right support,
              parents often feel unsure whether their baby is on track.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg font-bold text-slate-800 mb-6">
                Parents at this stage often wonder:
              </p>
              <ul className="space-y-4">
                {[
                  '"Why isn\'t my baby rolling yet?"',
                  '"Is tummy time enough, or do I need to do more?"',
                  '"How do I help without forcing it?"',
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
                Rolling doesn&apos;t happen because you practice harder.
              </p>
              <p className="text-xl font-bold text-slate-900">
                It happens when your baby&apos;s body is{" "}
                <span className="text-primary">prepared in the right sequence.</span>
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
              10 Expert Video Lessons for 3–6 Months
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
              These milestones are the stepping stones to everything that follows.
              BabyPillars shows you how to support each one, naturally and without pressure.
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
              Milestones don&apos;t need to be forced.
            </p>
            <p className="text-slate-600 leading-relaxed">
              When the environment is sequenced correctly, your baby&apos;s nervous
              system guides the way. BabyPillars shows you exactly how to support that,
              week by week.
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
              You&apos;re in the Right Place
            </h2>
            <p className="text-xl text-slate-600">
              The 3–6 month module builds directly on the foundations set in 0–3 months
              and prepares your baby for everything that follows.
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
              Full access to all age modules, including 3–6 months. No pressure, cancel anytime.
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
            Your Baby Can&apos;t Miss This Window
          </h2>
          <div className="text-xl text-slate-600 leading-relaxed space-y-4 mb-10">
            <p>You don&apos;t need to push harder.</p>
            <p>You don&apos;t need to buy special equipment.</p>
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
            Enroll in the 3–6 Months Course
          </Link>
        </div>
      </section>

      {/* CTA */}
      <CTASection variant="dark">
        <h2 className="text-4xl md:text-5xl font-display mb-8">
          Ready to Support Your Baby&apos;s Biggest Leap Yet?
        </h2>
        <div className="text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          <p>Join thousands of parents who replaced guesswork with a clear, expert-backed system.</p>
        </div>
        <ul className="text-lg text-white/90 space-y-3 mb-12 inline-block text-left">
          {[
            "10 expert video lessons for 3–6 months",
            "Step-by-step rolling over guidance",
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
