import Link from "next/link";
import type { Metadata } from "next";
import SectionBadge from "../components/SectionBadge";
import TestimonialCard from "../components/TestimonialCard";
import CTASection from "../components/CTASection";

export const metadata: Metadata = {
  title: "BabyPillars - How the System Works",
  description:
    "Your roadmap from birth to 24 months. We take the noise of a thousand tips and turn them into a quiet, clear path forward.",
};

export default function HowItWorksPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Am I doing enough for my baby's development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Development isn't about doing more; it's about doing the right things at the right time.",
        },
      },
      {
        "@type": "Question",
        name: "Is my baby developing normally?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every baby has a unique pace, but the sequence of milestones remains the same. We focus on the sequence.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="relative pt-20 pb-24 overflow-hidden hero-pattern">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-3xl">
              <SectionBadge text="The System" />
              <h1 className="text-5xl md:text-7xl font-display leading-[1.1] text-slate-900 mb-8">
                Stop guessing. Know exactly how to support your baby&apos;s
                development,{" "}
                <span className="italic text-primary">week by week.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                Your roadmap from birth to 24 months. We take the noise of a
                thousand &ldquo;tips&rdquo; and turn them into a quiet, clear
                path forward.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  "Clear guidance",
                  "Strong Foundations",
                  "Weekly plans",
                  "Parental Confidence",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">
                      check_circle
                    </span>
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/pricing"
                className="inline-block bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-primary/20"
              >
                See How BabyPillars Works
              </Link>
            </div>
            <div className="relative hidden lg:block">
              <img
                alt="Supportive developmental play"
                className="rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 object-cover object-top"
                src="/anat.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display text-slate-900 mb-6">
              Why this works
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Most parents struggle because they are catching &ldquo;random
              advice&rdquo; falling from the internet. You don&apos;t need
              another tip; you need a{" "}
              <span className="text-primary font-semibold">plan</span>.
              BabyPillars provides the architecture so you can stop scrolling
              and start observing.
            </p>
          </div>
        </div>
      </section>

      {/* 3-Step Rhythm */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-slate-900">
              The 3-Step Rhythm
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative">
              <div className="step-number mb-6">1</div>
              <h3 className="text-2xl font-display text-slate-900 mb-4">
                Start where your baby is today
              </h3>
              <p className="text-slate-600">
                Development isn&apos;t a race. We help you identify your
                baby&apos;s current &ldquo;pillar&rdquo; of growth regardless
                of their age in months.
              </p>
            </div>
            <div className="relative">
              <div className="step-number mb-6">2</div>
              <h3 className="text-2xl font-display text-slate-900 mb-4">
                Follow the weekly focus
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-slate-600">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">
                    priority_high
                  </span>
                  <span>
                    <strong>What matters now:</strong> Key movements &amp;
                    sensory milestones.
                  </span>
                </li>
                <li className="flex items-start gap-2 text-slate-600">
                  <span className="material-symbols-outlined text-slate-400 text-sm mt-1">
                    remove_circle_outline
                  </span>
                  <span>
                    <strong>What can wait:</strong> The noise you can safely
                    ignore this week.
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="step-number mb-6">3</div>
              <h3 className="text-2xl font-display text-slate-900 mb-4">
                Set up the environment
              </h3>
              <p className="text-slate-600">
                Learn to arrange your living space so it naturally invites your
                baby to practice exactly what they need next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/3">
              <img
                alt="Anat Furstenberg"
                className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-xl"
                src="/anat.jpg"
              />
            </div>
            <div className="w-full md:w-2/3">
              <span className="text-primary font-bold tracking-widest text-sm uppercase">
                Expertise you can trust
              </span>
              <h2 className="text-4xl md:text-5xl font-display text-slate-900 mt-4 mb-6">
                Anat Furstenberg
              </h2>
              <p className="text-xl text-slate-600 mb-6 italic">
                &ldquo;The world needs fewer influencers and more
                specialists.&rdquo;
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                With over 20 years of clinical experience as a development
                specialist, Anat doesn&apos;t just share &ldquo;mom
                hacks.&rdquo; She translates complex neuro-developmental
                science into simple, actionable steps for your home.
              </p>
              <div className="flex gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <span className="block text-2xl font-bold text-primary">
                    20+
                  </span>
                  <span className="text-sm text-slate-500">
                    Years Experience
                  </span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <span className="block text-2xl font-bold text-primary">
                    5,000+
                  </span>
                  <span className="text-sm text-slate-500">
                    Families Helped
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meghan's Story */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display text-slate-900 mb-8">
              &ldquo;How did I get here? Am I a terrible mother?&rdquo;
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Meghan sat on her living room floor, surrounded by three different
              high-tech toys, all claiming to &ldquo;boost brain power.&rdquo;
              Her 6-month-old was crying, and Meghan was scrolling through
              Instagram, feeling a rising panic. Every post showed a different
              activity she &ldquo;should&rdquo; be doing.
            </p>
            <p>
              She felt like she was failing a test she hadn&apos;t studied for.
              The truth? Meghan didn&apos;t need more activity ideas. She needed{" "}
              <strong>clarity</strong>.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 italic font-display text-2xl text-slate-700">
              &ldquo;The moment I stopped trying to &lsquo;entertain&rsquo; my
              baby and started understanding the system behind her movement, the
              anxiety just... evaporated.&rdquo;
            </blockquote>
            <p className="mt-8">
              We built BabyPillars for the Meghans of the world. Because when
              you know the &ldquo;why,&rdquo; the &ldquo;how&rdquo; becomes
              second nature.
            </p>
          </div>
        </div>
      </section>

      {/* Reality Check */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display mb-8">
                The Reality Check
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined mt-1">
                    help_outline
                  </span>
                  <div>
                    <p className="font-bold text-xl mb-1 italic">
                      &ldquo;Am I doing enough?&rdquo;
                    </p>
                    <p className="text-white/80">
                      Development isn&apos;t about doing more; it&apos;s about
                      doing the right things at the right time.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined mt-1">
                    help_outline
                  </span>
                  <div>
                    <p className="font-bold text-xl mb-1 italic">
                      &ldquo;Is my baby developing normally?&rdquo;
                    </p>
                    <p className="text-white/80">
                      Every baby has a unique pace, but the sequence of
                      milestones remains the same. We focus on the sequence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-[32px] border border-white/20">
              <p className="text-2xl font-display leading-relaxed">
                &ldquo;We often mistake intensity for quality. Your baby
                doesn&apos;t need a 24/7 cruise director. They need an
                environment that invites them to discover their own
                strength.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-display text-center mb-16">
            The BabyPillars Difference
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-3xl bg-slate-100">
              <h3 className="text-xl font-bold mb-6 text-slate-500 uppercase tracking-widest">
                Typical Milestone Apps
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-center text-slate-600">
                  <span className="material-symbols-outlined text-red-400">
                    close
                  </span>
                  Focus on outcome dates
                </li>
                <li className="flex gap-3 items-center text-slate-600">
                  <span className="material-symbols-outlined text-red-400">
                    close
                  </span>
                  Generic &ldquo;play&rdquo; tips
                </li>
                <li className="flex gap-3 items-center text-slate-600">
                  <span className="material-symbols-outlined text-red-400">
                    close
                  </span>
                  High intensity, high stress
                </li>
              </ul>
            </div>
            <div className="p-10 rounded-3xl border-2 border-primary bg-primary/5">
              <h3 className="text-xl font-bold mb-6 text-primary uppercase tracking-widest">
                The BabyPillars System
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-center font-medium">
                  <span className="material-symbols-outlined text-primary">
                    check
                  </span>
                  Focus on <strong>Foundational Readiness</strong>
                </li>
                <li className="flex gap-3 items-center font-medium">
                  <span className="material-symbols-outlined text-primary">
                    check
                  </span>
                  <strong>Environment-first</strong> guidance
                </li>
                <li className="flex gap-3 items-center font-medium">
                  <span className="material-symbols-outlined text-primary">
                    check
                  </span>
                  <strong>Clarity beats intensity</strong> approach
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Inside the System */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display mb-4">Inside the System</h2>
            <p className="text-slate-600">
              Everything you need to support your baby&apos;s first 24 months.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "map",
                title: "The Roadmap",
                desc: "A visual guide of the developmental pillars from birth to walking.",
              },
              {
                icon: "play_circle",
                title: "Step-by-Step Videos",
                desc: "Anat shows you exactly how to handle and play with your baby.",
              },
              {
                icon: "floor_lamp",
                title: "Environment Setup",
                desc: "Room-by-room guides to optimize your home for growth.",
              },
              {
                icon: "calendar_today",
                title: "Weekly Focus",
                desc: 'A simple "Focus of the Week" delivered to your inbox.',
              },
            ].map((item) => (
              <div
                key={item.icon}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="material-symbols-outlined text-primary text-4xl mb-4">
                  {item.icon}
                </span>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-display text-center mb-16">
            Trusted by Parents Worldwide
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="I finally stopped worrying about 'tummy time' and started seeing my baby's actual progress. The clarity is life-changing."
              author="— Jessica M."
            />
            <TestimonialCard
              quote="As a second-time parent, I thought I knew everything. BabyPillars showed me a much calmer way to parent."
              author="— David L."
            />
            <TestimonialCard
              quote="Anat is like the baby whisperer for parents. Her system is simple, logical, and so incredibly reassuring."
              author="— Sarah K."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection variant="green">
        <h2 className="text-4xl md:text-6xl font-display mb-8">
          You don&apos;t need more tips...
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
          You need a system that honors your baby&apos;s pace and your peace of
          mind. Join the thousands of families who found their way with
          BabyPillars.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/pricing"
            className="bg-white text-primary hover:bg-slate-100 px-12 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-xl"
          >
            Join BabyPillars Today
          </Link>
        </div>
      </CTASection>
    </>
  );
}
