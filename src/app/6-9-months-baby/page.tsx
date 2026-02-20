import type { Metadata } from "next";
import Link from "next/link";
import SectionBadge from "@/app/components/SectionBadge";
import CTASection from "@/app/components/CTASection";
import PricingCard from "@/app/components/PricingCard";

export const metadata: Metadata = {
  title: "6–9 Month Baby Development Online Home Course - BabyPillars",
  description:
    "Discover professional, fun activities tailored to your 6–9 month baby's milestones and developmental needs. Master crawling, balance, sitting, and independent movement with confidence.",
  openGraph: {
    title: "6–9 Month Baby Development Online Home Course - BabyPillars",
    description:
      "Discover professional, fun activities tailored to your 6–9 month baby's milestones and developmental needs.",
    images: [{ url: "/pages/6-9-months-baby/featured-6-9_n_backround.png", width: 1200, height: 630, alt: "6-9 Month Baby Development" }],
  },
};

const modules = [
  {
    duration: "2m 44s",
    title: "Introduction",
    description:
      "Overview of the 6–9 months series: independent movement, balance, crawling, sitting, and communication development.",
    icon: "play_circle",
  },
  {
    duration: "5m 37s",
    title: "The Basics of Crawling",
    description:
      "Your baby experiences two stages of circular movement, first passive, then active, learning to move in all directions and developing their sense of direction in space.",
    icon: "directions_walk",
  },
  {
    duration: "9m 20s",
    title: "The Most Important Sensory Experience, Part 1",
    description:
      "A wonderful sensory exercise familiarizing your baby with their feet through touch and stimulation, sending messages to the brain that guide crawling and all future independent movement.",
    icon: "self_improvement",
  },
  {
    duration: "3m 53s",
    title: "The Most Important Sensory Experience, Part 2",
    description:
      "Stimulating your baby's feet to de-activate the foot-grasping reflex, helping them learn to move their feet on their own accord in preparation for crawling.",
    icon: "touch_app",
  },
  {
    duration: "5m 42s",
    title: "Developing & Mastering Belly Crawling",
    description:
      "Teaching your baby to move forward toward an object, showing them they can move independently in multiple directions, not just side to side.",
    icon: "trending_flat",
  },
  {
    duration: "3m 36s",
    title: "Independent Sitting & Safe Balance",
    description:
      "Using an intentionally unstable surface to teach your baby to balance while sitting, without relying on hands, pillows, or external support.",
    icon: "airline_seat_recline_normal",
  },
  {
    duration: "7m 49s",
    title: "Communication, Gibberish & Laughter",
    description:
      "How to provide the right stimuli to help your baby respond to communication and feel confident expressing themselves as they begin moving in space.",
    icon: "record_voice_over",
  },
  {
    duration: "5m 26s",
    title: "Boost Balance, Posture & Stability",
    description:
      "On a round, unstable ball your baby learns to balance toward center, shift weight, and track objects, directly preparing the balance system for organized crawling.",
    icon: "sports_gymnastics",
  },
  {
    duration: "8m 50s",
    title: "The Foundation for Crawling, Sitting & Beyond",
    description:
      "Through chest and rib mobility, your baby learns to reach the center of their body, setting the stage for successful crawling, sitting, standing, and walking.",
    icon: "stairs",
  },
  {
    duration: "5m 28s",
    title: "Parachute Reflex & Rocking",
    description:
      "Triggering the parachute reflex so your baby learns to extend their hands to protect themselves from falling, a crucial safety and balance milestone.",
    icon: "security",
  },
];

const milestones = [
  { icon: "trending_flat", text: "Belly crawling and forward movement" },
  { icon: "airline_seat_recline_normal", text: "Independent sitting with balance" },
  { icon: "sports_gymnastics", text: "Balance system development" },
  { icon: "record_voice_over", text: "Communication, laughter, and social connection" },
  { icon: "security", text: "Parachute reflex and fall protection" },
  { icon: "touch_app", text: "Foot awareness and sensory development" },
];

const stages = [
  { range: "0–3 Months", title: "The Foundation", desc: "Comfort, regulation, early movement foundations.", href: "/0-3-months-baby", active: false },
  { range: "3–6 Months", title: "The Explorer", desc: "Tummy time, rolling readiness, body awareness.", href: "/3-6-months-baby", active: false },
  { range: "6–9 Months", title: "The Mover", desc: "Sitting foundations, crawling readiness, exploration.", href: "/6-9-months-baby", active: true },
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
              <SectionBadge text="6–9 Months · The Mover" />
              <h1 className="text-6xl md:text-7xl font-display leading-[1.1] text-slate-900 mb-8">
                Guide Your Baby&apos;s First{" "}
                <span className="italic text-primary">Independent Movement.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
                This is the crawling stage, when your baby begins reaching, moving
                forward, and exploring the world on their own terms. Our expert-led
                course gives you a step-by-step system so nothing gets missed.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "10 expert video lessons, 2–9 minutes each",
                  "Crawling, sitting, balance, sensory development & more",
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
                alt="6-9 month baby development"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
                src="/pages/6-9-months-baby/featured-6-9_n_backround.png"
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
              6–9 months is when your baby{" "}
              <span className="italic text-primary">discovers they can move.</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Your baby is beginning to understand they can reach objects, move forward,
              and explore their environment independently. This stage sets the foundation
              for crawling, sitting, and everything that follows.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg font-bold text-slate-800 mb-6">
                Parents at this stage often wonder:
              </p>
              <ul className="space-y-4">
                {[
                  '"When should my baby start crawling?"',
                  '"How do I help without pushing too hard?"',
                  '"Why does my baby seem frustrated trying to move?"',
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
                Crawling doesn&apos;t start with crawling.
              </p>
              <p className="text-xl font-bold text-slate-900">
                It starts with{" "}
                <span className="text-primary">sensory readiness, balance, and body awareness</span>{" "}
                built up over weeks.
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
              10 Expert Video Lessons for 6–9 Months
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
              Each milestone at 6–9 months lays the groundwork for the mobility and
              confidence that explodes in the months ahead.
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
              The activities at this stage directly build the neural pathways for balance,
              coordination, and independent movement, not just now, but for life.
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
              The 6–9 month module builds on rolling and tummy time and directly
              prepares your baby for independent sitting, standing, and walking.
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
              Full access to all age modules, including 6–9 months. No pressure, cancel anytime.
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
            Your Baby Is Ready, You Just Need the Right Guide
          </h2>
          <div className="text-xl text-slate-600 leading-relaxed space-y-4 mb-10">
            <p>You don&apos;t need to drill exercises all day.</p>
            <p>You don&apos;t need special equipment.</p>
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
            Enroll in the 6–9 Months Course
          </Link>
        </div>
      </section>

      {/* CTA */}
      <CTASection variant="dark">
        <h2 className="text-4xl md:text-5xl font-display mb-8">
          Ready to Guide Your Baby&apos;s First Independent Moves?
        </h2>
        <div className="text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          <p>Join thousands of parents who replaced guesswork with a clear, expert-backed system.</p>
        </div>
        <ul className="text-lg text-white/90 space-y-3 mb-12 inline-block text-left">
          {[
            "10 expert video lessons for 6–9 months",
            "Step-by-step crawling and balance guidance",
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
