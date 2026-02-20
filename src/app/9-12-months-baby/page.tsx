import type { Metadata } from "next";
import Link from "next/link";
import SectionBadge from "@/app/components/SectionBadge";
import CTASection from "@/app/components/CTASection";
import PricingCard from "@/app/components/PricingCard";

export const metadata: Metadata = {
  title: "9–12 Month Baby Development Online Home Course - BabyPillars",
  description:
    "Discover professional, fun activities tailored to your 9–12 month baby's milestones and developmental needs. Guide your baby through standing, first steps, and growing independence.",
  openGraph: {
    title: "9–12 Month Baby Development Online Home Course - BabyPillars",
    description:
      "Discover professional, fun activities tailored to your 9–12 month baby's milestones and developmental needs.",
    images: [{ url: "/pages/9-12-months-baby/featured-9-12_n_backround.png", width: 1200, height: 630, alt: "9-12 Month Baby Development" }],
  },
};

const modules = [
  {
    duration: "2m 52s",
    title: "Introduction",
    description:
      "Overview of the 9–12 months series: independent sitting, standing, balance, transitions, and first steps, the most exciting mobility leap yet.",
    icon: "play_circle",
  },
  {
    duration: "7m 47s",
    title: "Confidence in Sitting & Transitioning to Crawling",
    description:
      "Your baby sits on an unstable surface, activating their balance system, learning to stabilize, straighten, and move to reach objects without losing balance.",
    icon: "airline_seat_recline_normal",
  },
  {
    duration: "6m 31s",
    title: "The Starting Guide for Independent Standing",
    description:
      "Teaching your baby that pushing their feet against a surface leads to standing, through playful leg-bending and pushing exercises against the wall and floor.",
    icon: "directions_walk",
  },
  {
    duration: "7m 43s",
    title: "Standing Securely & Moving Near Objects",
    description:
      "Guiding your baby to transition from standing to sitting in multiple ways, bending to the side, forward, and returning to crawling independently.",
    icon: "accessible_forward",
  },
  {
    duration: "4m 07s",
    title: "The Importance of Weight Shifting",
    description:
      "Building confidence in shifting weight from foot to foot, the essential preparation for first steps, standing on one foot, jumping, and climbing.",
    icon: "swap_horiz",
  },
  {
    duration: "6m 00s",
    title: "Balancing the Body & Changing Sitting Positions",
    description:
      "Setting your baby off balance safely while seated, teaching them to block falls with their hands and transition through hands-and-knees, floor, and back to sitting.",
    icon: "balance",
  },
  {
    duration: "6m 59s",
    title: "From Sitting to Standing",
    description:
      "Using a small stool to teach kneeling, the posture between sitting and standing, helping your baby discover a new way to play and move around.",
    icon: "stairs",
  },
  {
    duration: "7m 43s",
    title: "Confidence in First Steps, For Life",
    description:
      "Teaching your baby to transition from standing back to sitting independently, preventing fear of falling and building lasting confidence in their movement.",
    icon: "footprint",
  },
  {
    duration: "7m 27s",
    title: "Transitioning from Standing to Sitting, Safe & Secure",
    description:
      "Crawling through a narrow passage and transitioning between sitting and standing, building the organized movement patterns needed for independent walking.",
    icon: "safety_check",
  },
];

const milestones = [
  { icon: "airline_seat_recline_normal", text: "Independent sitting and balance" },
  { icon: "directions_walk", text: "Pulling to stand and cruising along furniture" },
  { icon: "swap_horiz", text: "Weight shifting from foot to foot" },
  { icon: "footprint", text: "First steps and walking confidence" },
  { icon: "front_hand", text: "Fine motor skills, clapping, eating, drawing" },
  { icon: "stairs", text: "Kneeling, climbing, and position transitions" },
];

const stages = [
  { range: "0–3 Months", title: "The Foundation", desc: "Comfort, regulation, early movement foundations.", href: "/0-3-months-baby", active: false },
  { range: "3–6 Months", title: "The Explorer", desc: "Tummy time, rolling readiness, body awareness.", href: "/3-6-months-baby", active: false },
  { range: "6–9 Months", title: "The Mover", desc: "Sitting foundations, crawling readiness, exploration.", href: "/6-9-months-baby", active: false },
  { range: "9–12 Months", title: "The Discoverer", desc: "Mobility, coordination, and growing independence.", href: "/9-12-months-baby", active: true },
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
              <SectionBadge text="9–12 Months · The Discoverer" />
              <h1 className="text-6xl md:text-7xl font-display leading-[1.1] text-slate-900 mb-8">
                Guide Your Baby&apos;s Journey to{" "}
                <span className="italic text-primary">Standing & First Steps.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
                This is the standing stage, when your baby transitions from crawling to
                upright movement for the first time. Our expert-led course gives you a
                clear, step-by-step system to support every leap with confidence.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "9 expert video lessons, 3–8 minutes each",
                  "Sitting, standing, weight shifting, first steps & more",
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
                alt="9-12 month baby development"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
                src="/pages/9-12-months-baby/featured-9-12_n_backround.png"
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
              9–12 months is when your baby{" "}
              <span className="italic text-primary">rises up to meet the world.</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Your baby is moving from belly and hands-and-knees crawling toward
              independent sitting, standing, and their very first steps. The balance
              system becomes critical and the right support makes all the difference.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg font-bold text-slate-800 mb-6">
                Parents at this stage often wonder:
              </p>
              <ul className="space-y-4">
                {[
                  '"My baby pulls to stand but can\'t get back down, is that normal?"',
                  '"When will they take their first steps?"',
                  '"How do I build their confidence without holding them up all day?"',
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
                First steps aren&apos;t just about leg strength.
              </p>
              <p className="text-xl font-bold text-slate-900">
                They require{" "}
                <span className="text-primary">balance, confidence, and the ability to fall safely</span>,{" "}
                all of which can be built deliberately.
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
              9 Expert Video Lessons for 9–12 Months
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
              These are the milestones that unlock mobility and independence and set
              your baby up for confident walking, running, and climbing ahead.
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
              Confidence at this stage echoes through every stage ahead.
            </p>
            <p className="text-slate-600 leading-relaxed">
              When your baby learns to fall safely and get back up independently, they
              build the courage to try, explore, and grow, for the rest of their life.
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
              The 9–12 month module builds on crawling and sitting and launches your
              baby into the walking and toddler stage ahead.
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
              Full access to all age modules, including 9–12 months. No pressure, cancel anytime.
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
            Those First Steps Are Closer Than You Think
          </h2>
          <div className="text-xl text-slate-600 leading-relaxed space-y-4 mb-10">
            <p>You don&apos;t need to hold them up all day.</p>
            <p>You don&apos;t need to rush the timeline.</p>
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
            Enroll in the 9–12 Months Course
          </Link>
        </div>
      </section>

      {/* CTA */}
      <CTASection variant="dark">
        <h2 className="text-4xl md:text-5xl font-display mb-8">
          Ready to Watch Your Baby Take Their First Steps?
        </h2>
        <div className="text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          <p>Join thousands of parents who replaced guesswork with a clear, expert-backed system.</p>
        </div>
        <ul className="text-lg text-white/90 space-y-3 mb-12 inline-block text-left">
          {[
            "9 expert video lessons for 9–12 months",
            "Step-by-step standing and first steps guidance",
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
