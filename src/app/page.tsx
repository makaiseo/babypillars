import Link from "next/link";
import SectionBadge from "./components/SectionBadge";
import PricingCard from "./components/PricingCard";
import CTASection from "./components/CTASection";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-16 pb-24 hero-pattern overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionBadge text="Environment-First System" />
              <h1 className="text-6xl md:text-7xl font-display leading-[1.1] text-slate-900 mb-8">
                Stop Guessing. Know Exactly What To Do{" "}
                <span className="italic text-primary">This Week.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
                BabyPillars is an environment-first baby development system that
                shows you what matters now, what&apos;s next, and how to support
                your baby&apos;s development week by week from birth to 24
                months.
              </p>
              <div className="mb-8">
                <p className="text-lg font-bold text-slate-800 mb-2">
                  Why it works:
                </p>
                <p className="text-slate-600 leading-relaxed max-w-xl">
                  We fix the environment firstso milestones emerge
                  naturally, without drills, pressure, or endless research.
                </p>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <span className="font-medium">
                    Clear weekly focus (no overwhelm)
                  </span>
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <span className="font-medium">
                    Short videos, simple setups, practical checklists
                  </span>
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <span className="font-medium">
                    Built to replace confusion with confidence
                  </span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/how-it-works"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-primary/20 text-center"
                >
                  See How BabyPillars Works{" "}
                  <span className="block text-sm font-normal opacity-80">
                    (Plans start at $9/month or $97/year)
                  </span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl transform rotate-3"></div>
              <img
                alt="Happy baby doing tummy time on a clean, bright floor"
                className="relative rounded-3xl shadow-2xl w-full aspect-[4/5] object-cover object-top"
                src="/hero-baby8.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Real Problem */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionBadge text="The Real Problem" />
            <h2 className="text-4xl md:text-5xl font-display text-slate-900 mb-6 leading-[1.1]">
              Most parents don&apos;t struggle because they&apos;re{" "}
              <span className="italic text-primary">not doing enough.</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              They struggle because they&apos;re getting random advice at the
              wrong time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg font-bold text-slate-800 mb-6">
                You&apos;ve probably felt it:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="material-symbols-outlined text-red-400 mt-0.5">
                    help
                  </span>
                  <span className="text-lg italic">
                    &ldquo;Am I doing enough?&rdquo;
                  </span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="material-symbols-outlined text-red-400 mt-0.5">
                    help
                  </span>
                  <span className="text-lg italic">
                    &ldquo;Are we behind?&rdquo;
                  </span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="material-symbols-outlined text-red-400 mt-0.5">
                    help
                  </span>
                  <span className="text-lg italic">
                    &ldquo;Why does everything online contradict
                    itself?&rdquo;
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-background-light p-8 rounded-3xl border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">
                  lightbulb
                </span>
                <p className="text-lg font-bold text-slate-800">
                  The key insight
                </p>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Free content teaches isolated tips.
              </p>
              <p className="text-xl font-bold text-slate-900">
                Baby development requires{" "}
                <span className="text-primary">sequencing.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Mechanism */}
      <section className="py-24 bg-background-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionBadge text="The Core Mechanism" />
          <h2 className="text-4xl md:text-5xl font-display text-slate-900 mb-8 leading-[1.1]">
            BabyPillars works because development doesn&apos;t start with{" "}
            <span className="italic text-primary">exercises.</span>
          </h2>
          <p className="text-2xl font-display text-primary italic mb-10">
            It starts with readiness.
          </p>
          <div className="text-xl text-slate-600 leading-relaxed space-y-6 max-w-2xl mx-auto">
            <p>
              Milestones don&apos;t happen because you practice harder. They
              happen when your baby&apos;s body and nervous system are
              readyand the right environment creates that readiness all
              day long.
            </p>
            <p className="text-2xl font-bold text-slate-900">
              That&apos;s the difference.
            </p>
            <p className="text-lg text-slate-700 font-medium">
              BabyPillars is an environment-first developmental system, not an
              activity program.
            </p>
          </div>
        </div>
      </section>

      {/* How the System Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <SectionBadge text="The Method" />
            <h2 className="text-4xl font-display text-slate-900 mb-6">
              How the System Actually Works
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              BabyPillars follows a simple, proven structure:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-primary/20"></div>
            <div className="text-center relative z-10">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl border border-slate-100">
                <span className="material-symbols-outlined text-primary text-4xl">
                  lightbulb
                </span>
              </div>
              <h3 className="text-2xl font-display mb-4">1. Principles</h3>
              <p className="text-slate-600">
                Development follows nervous system readiness.
              </p>
            </div>
            <div className="text-center relative z-10">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl border border-slate-100">
                <span className="material-symbols-outlined text-primary text-4xl">
                  settings_input_component
                </span>
              </div>
              <h3 className="text-2xl font-display mb-4">2. System</h3>
              <p className="text-slate-600">
                Set up the environment to support that readiness.
              </p>
            </div>
            <div className="text-center relative z-10">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl border border-slate-100">
                <span className="material-symbols-outlined text-primary text-4xl">
                  event_upcoming
                </span>
              </div>
              <h3 className="text-2xl font-display mb-4">
                3. Weekly Execution
              </h3>
              <p className="text-slate-600">
                Adjust focus as your baby growsno guessing.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-primary/5 rounded-3xl p-10 max-w-3xl mx-auto">
            <p className="text-lg font-bold text-slate-800 mb-4 text-center">
              You always know:
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="flex items-center gap-3 justify-center">
                <span className="material-symbols-outlined text-primary">
                  check_circle
                </span>
                <span className="text-slate-700 font-medium">
                  What matters now
                </span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <span className="material-symbols-outlined text-primary">
                  check_circle
                </span>
                <span className="text-slate-700 font-medium">
                  What can wait
                </span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <span className="material-symbols-outlined text-primary">
                  check_circle
                </span>
                <span className="text-slate-700 font-medium">
                  What actually helps
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionBadge text="Who This Is For" />
            <h2 className="text-4xl font-display text-slate-900">
              Designed for Every Kind of Parent
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined">
                  baby_changing_station
                </span>
              </div>
              <h4 className="text-2xl font-display mb-4">
                First-Time or Anxious Parents
              </h4>
              <p className="text-slate-600 mb-4">
                If you follow the weekly guidance, you cannot &ldquo;miss&rdquo;
                a milestone.
              </p>
              <p className="text-sm text-slate-500">
                Development is not fragilethe system protects you from
                doing the wrong thing at the wrong time.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined">favorite</span>
              </div>
              <h4 className="text-2xl font-display mb-4">
                Intentional, System-Driven Parents
              </h4>
              <p className="text-slate-600 mb-4">
                A clear method you can run at homeprinciples, structure,
                and weekly execution.
              </p>
              <p className="text-sm text-slate-500">
                So both parents stay aligned without daily research.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <h4 className="text-2xl font-display mb-4">
                Busy, Time-Limited Parents
              </h4>
              <p className="text-slate-600 mb-4">
                One setup per week. 10 minutes a day. Zero research.
              </p>
              <p className="text-sm text-slate-500">
                Do less, but do the right things.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-slate-200 rounded-3xl p-4 shadow-2xl">
                <img
                  alt="BabyPillars system interface"
                  className="rounded-2xl w-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbboVf4cYC4U6utgZM4NvMHRhO-yUhlq_WxHMSiKktcnP3yR1PDwGohga9uPqkWfSOcRdTOb5xGAOKB01CIAGQwX4JfZIng_miu5OnxctJA3J5GWazLOWDIL86rXrJTK2afa0usb7L3G1DQcsFI4u1e_JZRNytt3YQLDUYXYvr5j6bYSCQScQJdRMn2CA70DsPCAqRgwlLQpbwR7FB4DSL6m79Xp2sOuDVMtpJAJI4P6lKFKcIndS9FYHzWsz8Yk0sQ-01oEo50NuN"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-[240px]">
                <div className="flex items-center gap-2 mb-2 text-primary font-bold">
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  <span>Weekly Checklist</span>
                </div>
                <p className="text-sm text-slate-500">
                  &ldquo;Set up the floor mirror for tummy time
                  success.&rdquo;
                </p>
              </div>
            </div>
            <div>
              <SectionBadge text="What You Get" />
              <h2 className="text-4xl font-display text-slate-900 mb-8">
                Everything you need, nothing you don&apos;t.
              </h2>
              <div className="space-y-8">
                {[
                  {
                    icon: "map",
                    title: "Week-by-Week Roadmap",
                    desc: "A clear path from birth to 24 months of physical and cognitive growth.",
                  },
                  {
                    icon: "videocam",
                    title: "Short, Practical Videos",
                    desc: "What to do and how to do it — no fluff, no hour-long webinars.",
                  },
                  {
                    icon: "home_repair_service",
                    title: "Simple Home Setup Guidance",
                    desc: "An environment that supports progress, without buying special equipment.",
                  },
                  {
                    icon: "fact_check",
                    title: "Weekly Focus Points & Checklists",
                    desc: "No decision fatigue. Just clear actions for the week.",
                  },
                ].map((feature) => (
                  <div key={feature.icon} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">
                        {feature.icon}
                      </span>
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900">
                        {feature.title}
                      </h5>
                      <p className="text-slate-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-lg text-slate-700 font-medium">
                You stop wondering if you&apos;re doing enoughbecause the
                system tells you exactly what matters.
              </p>
              <Link
                href="/how-it-works"
                className="inline-block mt-8 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-primary/20"
              >
                See the Full BabyPillars System
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust BabyPillars */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display mb-8">
                Why Trust BabyPillars
              </h2>
              <div className="space-y-6 text-lg text-white/90 leading-relaxed">
                <p>
                  BabyPillars was created by a developmental specialist with 15+
                  years of experience working with babiesincluding babies
                  with special needs.
                </p>
                <p>
                  This system isn&apos;t built on trends or hacks.{" "}
                  <span className="font-bold text-white">
                    It&apos;s built on how development actually unfolds.
                  </span>
                </p>
                <p>
                  Thousands of parents worldwide use BabyPillars to replace
                  anxiety with clarityand pressure with confidence.
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
                alt="Anat Furstenberg"
                className="rounded-3xl shadow-2xl border-4 border-white/10 w-full object-cover object-top"
                src="/anat.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Fits Your Baby's Age */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionBadge text="Age-Based Guidance" />
            <h2 className="text-4xl font-display text-slate-900 mb-4">
              How It Fits Your Baby&apos;s Age
            </h2>
            <p className="text-xl text-slate-600 mb-2">
              You don&apos;t &ldquo;start over.&rdquo;
            </p>
            <p className="text-xl text-slate-700 font-medium">
              You start where your baby is today.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                range: "0–3 Months",
                title: "The Foundation",
                desc: "Comfort, regulation, early movement foundations.",
              },
              {
                range: "3–6 Months",
                title: "The Explorer",
                desc: "Tummy time, rolling readiness, body awareness.",
              },
              {
                range: "6–9 Months",
                title: "The Mover",
                desc: "Sitting foundations, crawling readiness, exploration.",
              },
              {
                range: "9–24 Months",
                title: "The Discoverer",
                desc: "Mobility, coordination, independence, confidence.",
              },
            ].map((stage) => (
              <div
                key={stage.range}
                className="bg-background-light p-8 rounded-3xl border border-slate-100 hover:border-primary transition-colors cursor-default"
              >
                <p className="text-primary font-bold mb-2">{stage.range}</p>
                <h5 className="text-xl font-display mb-4">{stage.title}</h5>
                <p className="text-sm text-slate-600">{stage.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-slate-700 font-medium">
              The system stays the same.{" "}
              <span className="text-primary">Only the focus changes.</span>
            </p>
          </div>
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
              No pressure. Just a clear system you can trust.
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
              href="/pricing"
              className="text-primary font-medium hover:underline"
            >
              View the BabyPillars Program &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* The Truth */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-2xl text-slate-600 leading-relaxed space-y-4 mb-10">
            <p>You don&apos;t need more tips.</p>
            <p>You don&apos;t need to do more.</p>
            <p className="text-slate-900 font-bold">
              You need the right setup, at the right time, done consistently.
            </p>
            <p className="text-xl text-slate-700">
              That&apos;s what BabyPillars gives you.
            </p>
          </div>
          <Link
            href="/how-it-works"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-primary/20"
          >
            See How BabyPillars Works &rarr;
          </Link>
        </div>
      </section>

      {/* Before You Go */}
      <section className="py-24 bg-background-light">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-display text-slate-900 mb-10 text-center leading-[1.1]">
            Before You Go Looking for More Advice&hellip;
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Most parents pause right here. They think:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-slate-600">
                <span className="material-symbols-outlined text-slate-400 mt-0.5">
                  format_quote
                </span>
                <span className="text-lg italic">
                  &ldquo;I just need a few more ideas.&rdquo;
                </span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <span className="material-symbols-outlined text-slate-400 mt-0.5">
                  format_quote
                </span>
                <span className="text-lg italic">
                  &ldquo;Maybe I&apos;ll watch a couple more videos
                  first.&rdquo;
                </span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <span className="material-symbols-outlined text-slate-400 mt-0.5">
                  format_quote
                </span>
                <span className="text-lg italic">
                  &ldquo;I&apos;ll come back to this later.&rdquo;
                </span>
              </li>
            </ul>
            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-4">
              That&apos;s exactly what keeps the guessing going.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Because the problem was never a lack of tips.{" "}
              <span className="font-bold text-slate-900">
                It was not having a system that tells you what matters now and
                what doesn&apos;t.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Without a System */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionBadge text="The Guessing Loop" />
              <h2 className="text-4xl font-display text-slate-900 mb-6 leading-[1.1]">
                What Happens When You Don&apos;t Have a System
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Without a clear weekly structure:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="material-symbols-outlined text-red-400 mt-0.5">
                    close
                  </span>
                  <span className="text-lg">
                    You second-guess what you&apos;re doing
                  </span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="material-symbols-outlined text-red-400 mt-0.5">
                    close
                  </span>
                  <span className="text-lg">
                    You chase milestones instead of supporting readiness
                  </span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="material-symbols-outlined text-red-400 mt-0.5">
                    close
                  </span>
                  <span className="text-lg">
                    You keep researching instead of feeling confident
                  </span>
                </li>
              </ul>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                And the anxiety doesn&apos;t go awayit just changes
                shape.
              </p>
            </div>
            <div className="bg-primary/5 p-10 rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">
                  verified
                </span>
                <p className="text-lg font-bold text-slate-800">
                  BabyPillars was built to end that loop.
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                Most parents pause right here. They think:
              </p>
              <ul className="space-y-3 text-slate-600 italic">
                <li>&ldquo;I just need a few more ideas.&rdquo;</li>
                <li>
                  &ldquo;Maybe I&apos;ll watch a couple more videos
                  first.&rdquo;
                </li>
                <li>&ldquo;I&apos;ll come back to this later.&rdquo;</li>
              </ul>
              <p className="mt-6 text-slate-700 font-medium">
                That&apos;s exactly what keeps the guessing going. Because the
                problem was never a lack of tipsit was not having a
                system that tells you what matters now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll See Next */}
      <section className="py-24 bg-background-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display text-slate-900 mb-8 leading-[1.1]">
            What You&apos;ll See Next
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            On the next page, you&apos;ll see:
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
            {[
              {
                icon: "calendar_view_week",
                text: "How the BabyPillars system works week by week",
              },
              {
                icon: "route",
                text: "What's included in the full 0–24 month roadmap",
              },
              {
                icon: "family_restroom",
                text: "How parents use it in real life, even with limited time",
              },
              {
                icon: "payments",
                text: "How to choose between $9/month or $97/year",
              },
            ].map((item) => (
              <div
                key={item.icon}
                className="flex items-start gap-3 text-left bg-white p-5 rounded-2xl border border-slate-100"
              >
                <span className="material-symbols-outlined text-primary mt-0.5">
                  {item.icon}
                </span>
                <span className="text-slate-700">{item.text}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-500 mb-8">
            Nothing is hidden. Nothing is pushed. Just a clear look at whether
            this system is right for you and your baby.
          </p>
        </div>
      </section>

      {/* One Important Thing */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display text-slate-900 mb-8 leading-[1.1]">
            One Important Thing to Know Before You Click
          </h2>
          <div className="text-xl text-slate-600 leading-relaxed space-y-4 mb-10">
            <p>You don&apos;t need to be doing everything perfectly.</p>
            <p>You don&apos;t need to &ldquo;catch up.&rdquo;</p>
            <p>And you haven&apos;t missed anything.</p>
          </div>
          <div className="bg-primary/5 rounded-3xl p-10 mb-10">
            <p className="text-xl text-slate-800 leading-relaxed">
              If you follow the BabyPillars weekly guidance, you{" "}
              <span className="font-bold text-primary">
                cannot miss a milestone
              </span>
              because development isn&apos;t fragile when the foundations
              are right.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection variant="dark">
        <h2 className="text-4xl md:text-5xl font-display mb-8">
          Ready to See the Full System?
        </h2>
        <div className="text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed space-y-2">
          <p>If you want:</p>
        </div>
        <ul className="text-lg text-white/90 space-y-3 mb-12 inline-block text-left">
          <li className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">
              check_circle
            </span>
            Fewer decisions
          </li>
          <li className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">
              check_circle
            </span>
            Less anxiety
          </li>
          <li className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">
              check_circle
            </span>
            A clear weekly focus you can trust
          </li>
        </ul>
        <p className="text-white/70 mb-10">
          Then the next page will show you exactly how BabyPillars supports
          that.
        </p>
        <Link
          href="/how-it-works"
          className="inline-block bg-primary hover:bg-primary/90 text-white px-12 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-xl"
        >
          See the BabyPillars Program
        </Link>
        <p className="mt-6 text-sm text-white/50">
          (Plans start at $9/month or $97/year)
        </p>
      </CTASection>
    </>
  );
}
