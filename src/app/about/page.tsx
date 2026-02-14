import Link from "next/link";
import type { Metadata } from "next";
import SectionBadge from "../components/SectionBadge";
import CTASection from "../components/CTASection";

export const metadata: Metadata = {
  title: "About BabyPillars - Our Story & Mission",
  description:
    "Every parent deserves to feel like they have a roadmap. Learn about BabyPillars and founder Anat Furstenberg's mission to replace guessing with clarity.",
};

export default function AboutPage() {
  return (
    <>
      {/* Mission Hero */}
      <section className="relative pt-20 pb-24 overflow-hidden hero-pattern">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <SectionBadge text="Our Mission" />
            <h1 className="text-6xl md:text-7xl font-display leading-[1.1] text-slate-900 mb-8">
              About BabyPillars: Built to replace{" "}
              <span className="italic text-primary">guessing</span> with
              clarity.
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl">
              Every parent deserves to feel like they have a roadmap. We moved
              beyond generic advice to provide the structure and insight you
              need for every leap in your child&apos;s first years.
            </p>
          </div>
        </div>
        <div className="absolute top-1/2 -right-20 transform -translate-y-1/2 opacity-20 pointer-events-none">
          <svg
            fill="none"
            height="600"
            viewBox="0 0 600 600"
            width="600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="text-primary"
              cx="300"
              cy="300"
              r="250"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              className="text-primary"
              d="M100 300C100 189.543 189.543 100 300 100C410.457 100 500 189.543 500 300"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="40"
            />
          </svg>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-2xl transform -rotate-2 transition-transform group-hover:rotate-0"></div>
              <img
                alt="Anat Furstenberg - Founder of BabyPillars"
                className="relative rounded-2xl shadow-xl w-full aspect-[4/5] object-cover object-top"
                src="/anat.jpg"
              />
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
                The Story Behind the Vision
              </h2>
              <h3 className="text-4xl md:text-5xl font-display text-slate-900 mb-6">
                Meet Anat Furstenberg
              </h3>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  As a child development specialist, Anat spent over a decade
                  working with thousands of families. She saw a recurring
                  pattern: brilliant, caring parents overwhelmed by the sheer
                  volume of conflicting advice.
                </p>
                <p>
                  The question &ldquo;Am I doing enough?&rdquo; was the
                  heartbeat of every consultation. Anat founded BabyPillars to
                  answer that question with a resounding &ldquo;Yes,&rdquo; by
                  providing clinical insights simplified for real-world
                  parenting.
                </p>
                <p className="italic text-slate-900 font-medium">
                  &ldquo;My mission is to return the joy of discovery to
                  parents, replacing the anxiety of monitoring with the wonder
                  of watching a human being unfold.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display text-slate-900 mb-4">
              A Different Kind of Guidance
            </h2>
            <p className="text-slate-600">
              We looked at the parenting industry and decided to build the
              antidote to overwhelm.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 mb-6">
                <span className="material-symbols-outlined">
                  error_outline
                </span>
              </div>
              <h4 className="text-2xl font-display text-slate-900 mb-4">
                The problem with most advice
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-3 text-slate-600">
                  <span className="text-red-400 mt-1">&times;</span>
                  <span>
                    Focuses purely on outcomes and rigid
                    &ldquo;deadlines&rdquo;
                  </span>
                </li>
                <li className="flex gap-3 text-slate-600">
                  <span className="text-red-400 mt-1">&times;</span>
                  <span>
                    Creates anxiety by comparing babies to a narrow average
                  </span>
                </li>
                <li className="flex gap-3 text-slate-600">
                  <span className="text-red-400 mt-1">&times;</span>
                  <span>
                    Overloads you with expensive toys you don&apos;t actually
                    need
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-primary p-10 rounded-2xl text-white shadow-xl shadow-primary/20">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-6">
                <span className="material-symbols-outlined">auto_awesome</span>
              </div>
              <h4 className="text-2xl font-display mb-4">
                The BabyPillars Approach
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-3 text-white/90">
                  <span className="mt-1">&check;</span>
                  <span>
                    Focuses on developmental readiness and the process
                  </span>
                </li>
                <li className="flex gap-3 text-white/90">
                  <span className="mt-1">&check;</span>
                  <span>
                    Emphasizes the home environment as the primary teacher
                  </span>
                </li>
                <li className="flex gap-3 text-white/90">
                  <span className="mt-1">&check;</span>
                  <span>
                    Provides simple, low-cost ways to support every milestone
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: "center_focus_strong",
                title: "Clear Weekly Focus",
                desc: "Stop worrying about everything at once. We give you one simple thing to focus on each week.",
              },
              {
                icon: "home",
                title: "Simple Environment Guidance",
                desc: "Learn how to arrange your space to naturally encourage your baby's next physical leap.",
              },
              {
                icon: "science",
                title: "Evidence-Based Ease",
                desc: "No trends, just science. We filter the clinical data so you can enjoy the results.",
              },
            ].map((value) => (
              <div key={value.icon} className="text-center px-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    {value.icon}
                  </span>
                </div>
                <h5 className="text-xl font-bold mb-3 text-slate-900">
                  {value.title}
                </h5>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <span className="material-symbols-outlined text-primary text-5xl">
              format_quote
            </span>
          </div>
          <p className="text-3xl md:text-4xl font-display text-slate-900 italic leading-snug mb-8">
            &ldquo;Before BabyPillars, I felt like I was constantly failing a
            test I hadn&apos;t studied for. Now, I understand the
            &lsquo;why&rsquo; behind everything my daughter does. I finally
            felt confident again.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-4">
            <img
              alt="Sarah, mother of 10-month-old Leo"
              className="w-12 h-12 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbboVf4cYC4U6utgZM4NvMHRhO-yUhlq_WxHMSiKktcnP3yR1PDwGohga9uPqkWfSOcRdTOb5xGAOKB01CIAGQwX4JfZIng_miu5OnxctJA3J5GWazLOWDIL86rXrJTK2afa0usb7L3G1DQcsFI4u1e_JZRNytt3YQLDUYXYvr5j6bYSCQScQJdRMn2CA70DsPCAqRgwlLQpbwR7FB4DSL6m79Xp2sOuDVMtpJAJI4P6lKFKcIndS9FYHzWsz8Yk0sQ-01oEo50NuN"
            />
            <div className="text-left">
              <p className="font-bold text-slate-900">Sarah Jenkins</p>
              <p className="text-sm text-slate-600">
                Mother of 10-month-old Leo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-display text-center text-slate-900 mb-16">
            Our Core Beliefs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: "shield", text: "Development is not fragile" },
              { icon: "exposure_zero", text: "More is not better" },
              { icon: "visibility", text: "Clarity beats intensity" },
              { icon: "volunteer_activism", text: "Patience is the tool" },
              { icon: "nature", text: "Trust the process" },
            ].map((belief) => (
              <div
                key={belief.icon}
                className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-primary transition-colors text-center group"
              >
                <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors mb-4 block text-3xl">
                  {belief.icon}
                </span>
                <h6 className="font-bold text-slate-900 mb-2">{belief.text}</h6>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection variant="green">
        <h2 className="text-4xl md:text-5xl font-display mb-6">
          One last thing...
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          We aren&apos;t here to change your baby. We&apos;re here to change
          the way you see them. Ready to see how the system works?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/how-it-works"
            className="bg-white text-primary hover:bg-slate-100 px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105"
          >
            See how the system works
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
