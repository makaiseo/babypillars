import Link from "next/link";
import type { Metadata } from "next";
import SectionBadge from "../components/SectionBadge";
import CTASection from "../components/CTASection";

export const metadata: Metadata = {
  title: "BabyPillars Pricing - Choose Your Path to Clarity",
  description:
    "Parenting shouldn't be a series of guesses. Get the expert system you need to support your baby's development with confidence and ease.",
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 hero-pattern">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionBadge text="Simple Pricing" />
          <h1 className="text-5xl md:text-7xl font-display leading-[1.1] text-slate-900 mb-6">
            Choose The Plan That Gives You <br />
            <span className="italic text-primary">Clarity</span>, Starting This
            Week.
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Parenting shouldn&apos;t be a series of guesses. Get the expert
            system you need to support your baby&apos;s development with
            confidence and ease.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 -mt-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Monthly */}
            <div className="pricing-card bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
              <div className="mb-8">
                <h3 className="text-2xl font-display text-slate-900 mb-2">
                  Monthly Membership
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">$9</span>
                  <span className="text-slate-500">/ month</span>
                </div>
                <p className="mt-4 text-slate-600 text-sm">
                  Zero pressure. Learn at your own pace and stay as long as you
                  need.
                </p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex gap-3 text-slate-700">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <span>Full access to all milestone guides</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <span>Weekly roadmap &amp; focus tips</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <span>Cancel anytime with one click</span>
                </li>
              </ul>
              <button className="w-full py-4 px-6 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-colors">
                Start Monthly Membership
              </button>
            </div>

            {/* Annual */}
            <div className="pricing-card bg-white p-8 md:p-10 rounded-3xl border-2 border-primary shadow-xl relative flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                BEST VALUE
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-display text-slate-900 mb-2">
                  Annual Membership
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">
                    $97
                  </span>
                  <span className="text-slate-500">/ year</span>
                </div>
                <p className="mt-4 text-primary font-semibold text-sm">
                  Save 60% compared to monthly.
                </p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex gap-3 text-slate-700 font-medium">
                  <span className="material-symbols-outlined text-primary">
                    verified
                  </span>
                  <span>Year-long peace of mind</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <span>Priority access to new content</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <span>Exclusive 0-24 month master roadmap</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <span>Annual bonus: Environmental Audit guide</span>
                </li>
              </ul>
              <button className="w-full py-4 px-6 rounded-full bg-primary text-white font-bold hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
                Start Annual Membership
              </button>
            </div>
          </div>
          <p className="text-center mt-8 text-slate-500 text-sm flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-base">
              verified_user
            </span>
            Includes a 30-day money-back guarantee
          </p>
        </div>
      </section>

      {/* Founder Credibility */}
      <section className="py-20 bg-white">
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
                Built by a Specialist
              </span>
              <h3 className="text-3xl font-display text-slate-900 mb-4">
                Science-backed, not trend-driven
              </h3>
              <p className="text-lg text-slate-600 mb-4 max-w-2xl leading-relaxed">
                BabyPillars was founded by{" "}
                <span className="text-slate-900 font-semibold">
                  Anat Furstenberg
                </span>
                , a developmental specialist with over 15 years of clinical
                experience. This is a professional system designed for parents
                who want more than just &ldquo;influencer advice.&rdquo;
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-500">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-primary text-lg">
                    workspace_premium
                  </span>{" "}
                  Clinical Expertise
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-primary text-lg">
                    groups
                  </span>{" "}
                  5,000+ Families Helped
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-display text-center text-slate-900 mb-16">
            What both plans include
          </h2>
          <div className="grid md:grid-cols-3 gap-y-12 gap-x-12">
            {[
              {
                icon: "layers",
                title: "No Hidden Tiers",
                desc: 'Everyone gets the same high-quality content. No upselling for "premium" secrets.',
              },
              {
                icon: "map",
                title: "0-24 Month Roadmap",
                desc: "Comprehensive guidance covering the most critical first two years of development.",
              },
              {
                icon: "chair",
                title: "Environment-First",
                desc: "Learn how to setup your home to naturally trigger developmental leaps.",
              },
              {
                icon: "lightbulb",
                title: "Weekly Action Items",
                desc: "One simple thing to focus on each week so you never feel overwhelmed.",
              },
              {
                icon: "devices",
                title: "Multi-Device Access",
                desc: "Access guides on your phone while playing or on your desktop at night.",
              },
              {
                icon: "forum",
                title: "Community Support",
                desc: "Join a group of like-minded parents focusing on development, not drama.",
              },
            ].map((feature) => (
              <div key={feature.icon} className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-symbols-outlined">
                    {feature.icon}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Comparison */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-display text-center text-slate-900 mb-12">
            Which plan should you choose?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <h4 className="text-xl font-bold text-slate-900 mb-6">
                Choose Monthly if...
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">&bull;</span>
                  <p className="text-slate-600">
                    You&apos;re in the final stretch and just need a few
                    specific guides.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">&bull;</span>
                  <p className="text-slate-600">
                    You want to &ldquo;test drive&rdquo; the BabyPillars system
                    before committing.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">&bull;</span>
                  <p className="text-slate-600">
                    You prefer small, manageable monthly payments.
                  </p>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <h4 className="text-xl font-bold text-slate-900 mb-6">
                Choose Annual if...
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">&bull;</span>
                  <p className="text-slate-600">
                    Your baby is under 12 months and you want the full roadmap.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">&bull;</span>
                  <p className="text-slate-600">
                    You want to save the most money (60% discount).
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">&bull;</span>
                  <p className="text-slate-600">
                    You want to set it and forget it, with continuous access to
                    every milestone.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-display text-center text-slate-900 mb-16">
            Common questions (answered simply)
          </h2>
          <div className="space-y-8">
            <div>
              <h5 className="text-lg font-bold text-slate-900 mb-2">
                How is this different from your free content?
              </h5>
              <p className="text-slate-600">
                Free content gives you the &ldquo;what.&rdquo; The membership
                gives you the &ldquo;how&rdquo; and the &ldquo;when.&rdquo;
                It&apos;s a structured, chronological system that eliminates the
                need for searching and piecing together advice.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-bold text-slate-900 mb-2">
                How much time does it take per week?
              </h5>
              <p className="text-slate-600">
                We designed this for busy parents. Most weekly guides take about
                10 minutes to read, and the environmental changes take less than
                15 minutes to implement.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-bold text-slate-900 mb-2">
                Is it too late to start if my baby is already 12 months?
              </h5>
              <p className="text-slate-600">
                Not at all. The 12-24 month window is just as critical for motor
                skills and language development. You can jump right into your
                baby&apos;s current age bracket.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection variant="green">
        <h2 className="text-4xl md:text-5xl font-display mb-6">
          Choose your plan and start today
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Stop the guessing games. Join 5,000+ parents who have found a
          clearer, calmer way to support their child&apos;s growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-primary hover:bg-slate-100 px-10 py-4 rounded-full font-bold text-lg transition-all">
            Monthly - $9
          </button>
          <button className="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white px-10 py-4 rounded-full font-bold text-lg transition-all">
            Annual - $97 (Best Value)
          </button>
        </div>
      </CTASection>
    </>
  );
}
