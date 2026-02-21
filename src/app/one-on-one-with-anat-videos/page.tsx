import Link from "next/link";
import type { Metadata } from "next";
import SectionBadge from "../components/SectionBadge";
import CTASection from "../components/CTASection";
import SessionForm from "../anat-furstenberg-first-step/SessionForm";

export const metadata: Metadata = {
  title: "One-on-One With Anat Videos: Watch Live Session Recordings | BabyPillars",
  description:
    "Watch recorded one-on-one sessions where Anat Furstenberg works directly with BabyPillars parents. See the First Step method in action and book your own private session.",
  openGraph: {
    title: "One-on-One With Anat Videos: Watch Live Session Recordings | BabyPillars",
    description:
      "Watch recorded one-on-one sessions where Anat Furstenberg works directly with BabyPillars parents. See the First Step method in action and book your own private session.",
    images: [
      {
        url: "/pages/anat-furstenberg-first-step/anat-pic1_adobespark-e1632143681545.png",
        width: 1200,
        height: 630,
        alt: "Anat Furstenberg one-on-one session",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "One-on-One With Anat Videos: Watch Live Session Recordings | BabyPillars",
    description:
      "Watch recorded one-on-one sessions where Anat Furstenberg works directly with BabyPillars parents. See the First Step method in action and book your own private session.",
  },
  alternates: {
    canonical: "https://babypillars.com/one-on-one-with-anat-videos/",
  },
};

const topics = [
  { icon: "child_care", title: "Tummy Time & Floor Play", desc: "How to set up and guide your baby through the foundational movements that build strength and coordination." },
  { icon: "accessible_forward", title: "Low Muscle Tone", desc: "Identifying signs, understanding what they mean, and the daily environment adjustments that create real change." },
  { icon: "bedtime", title: "Sleep & Settling", desc: "Environment-first approaches to help your baby find a natural, sustainable sleep rhythm without cry-it-out methods." },
  { icon: "directions_walk", title: "Crawling & Pre-Walking", desc: "Why skipping crawling matters and how to gently guide your baby through each stepping stone toward standing." },
  { icon: "sentiment_very_satisfied", title: "Sensory Development", desc: "Understanding your baby's sensory needs and how the right input at the right time supports overall development." },
  { icon: "family_restroom", title: "Special Needs Support", desc: "Personalised sessions for families navigating Down syndrome, cerebral palsy, torticollis, and other diagnoses." },
];

export default function OneOnOneVideosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "One-on-One Video Sessions with Anat Furstenberg",
    description:
      "Recorded and live private consultations with developmental specialist Anat Furstenberg, covering baby development, movement, sleep, and special needs support.",
    provider: {
      "@type": "Person",
      name: "Anat Furstenberg",
      jobTitle: "Baby Development Specialist",
      url: "https://babypillars.com/about-babypillars/",
    },
    url: "https://babypillars.com/one-on-one-with-anat-videos/",
    serviceType: "Baby Development Consultation",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Session Options",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Single Session",
          price: "120",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          name: "4-Session Package",
          price: "399",
          priceCurrency: "USD",
        },
      ],
    },
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <SectionBadge text="Video Sessions" />
              <h1 className="text-6xl md:text-7xl font-display leading-[1.1] text-slate-900 mb-8">
                Watch Anat Work{" "}
                <span className="italic text-primary">One-on-One</span>
              </h1>
              <p className="text-xl text-slate-700 font-medium mb-6">
                Real sessions. Real parents. Real results.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                See exactly how Anat&apos;s{" "}
                <strong className="text-slate-800">First Step method</strong>{" "}
                plays out in a live consultation, then book your own private
                session for guidance personalised to your baby.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "Watch real consultations across a range of developmental topics",
                  "Understand what to look for in your own baby's movement and behaviour",
                  "Book a private session to get personalised guidance from Anat",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check
                      </span>
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#book-session"
                  className="inline-block bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl shadow-primary/20 hover:scale-105 text-center"
                >
                  Book Your Session
                </a>
                <Link
                  href="/anat-furstenberg-first-step"
                  className="inline-block border-2 border-slate-200 hover:border-primary text-slate-700 hover:text-primary px-10 py-5 rounded-full font-bold text-lg transition-all text-center"
                >
                  Learn About Sessions
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-primary/5 rounded-[40px] transform -rotate-2"></div>
              <img
                alt="Anat Furstenberg conducting a one-on-one baby development session"
                className="relative rounded-[32px] shadow-2xl w-full object-cover object-top"
                src="/pages/anat-furstenberg-first-step/anat-pic1_adobespark-e1632143681545.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What You'll See */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionBadge text="Inside the Sessions" />
            <h2 className="text-4xl md:text-5xl font-display text-slate-900 mb-6">
              What you&apos;ll see in each session
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Each recorded consultation follows the same First Step process Anat
              uses in every private session so you can watch, learn, and apply
              the principles to your own home before ever booking a call.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "manage_search",
                step: "1",
                title: "Parent Concern",
                desc: "Anat listens to the specific challenge the parent is facing without judgement or rush.",
              },
              {
                icon: "child_care",
                step: "2",
                title: "Baby Observation",
                desc: "Anat observes the baby's movement patterns to identify what stage they are at and what comes next.",
              },
              {
                icon: "lightbulb",
                step: "3",
                title: "Environment Guidance",
                desc: "Practical, immediate changes to the home setup that create the right conditions for growth.",
              },
              {
                icon: "fact_check",
                step: "4",
                title: "Actionable Plan",
                desc: "The parent leaves with a clear, confident understanding of exactly what to do and why.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative p-8 rounded-2xl border border-slate-100 bg-background-light hover:shadow-md transition-shadow"
              >
                <div className="text-6xl font-display text-primary/10 absolute top-4 right-6 select-none leading-none">
                  {item.step}
                </div>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Covered */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-slate-900 mb-6">
              Topics covered in Anat&apos;s sessions
            </h2>
            <p className="text-lg text-slate-600">
              From newborn reflexes to first steps, the sessions span the full
              spectrum of baby development from 0 to 24 months.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="flex gap-5 p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
              >

                <div>
                  <h3 className="font-bold text-slate-900 mb-2">{topic.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {topic.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionBadge text="Is This For You?" />
              <h2 className="text-4xl md:text-5xl font-display text-slate-900 mb-8">
                These sessions are for parents who want to{" "}
                <span className="italic text-primary">understand</span>, not just be told what to do
              </h2>
              <div className="space-y-5">
                {[
                  "You want to see how a specialist actually thinks through a baby development problem.",
                  "You&apos;ve read the articles but need to **see the approach in action** before trusting it.",
                  "Your baby has a specific challenge and you want to watch a session that mirrors your situation.",
                  "You&apos;re considering booking a private session and want to know what to expect.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <p
                      className="text-lg text-slate-700 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-[32px] p-10 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <img
                  src="/anat.jpg"
                  alt="Anat Furstenberg"
                  className="w-16 h-16 rounded-full object-cover object-top shadow-md"
                />
                <div>
                  <p className="font-bold text-slate-900">Anat Furstenberg</p>
                  <p className="text-sm text-slate-500">
                    Baby Development Specialist · 20+ Years
                  </p>
                </div>
              </div>
              <blockquote className="text-xl font-display text-slate-700 italic leading-relaxed mb-8 border-l-4 border-primary pl-6">
                &ldquo;Every parent I work with already has the instincts. My
                job is to give them the language and the framework to trust
                those instincts and act on them.&rdquo;
              </blockquote>
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "20+", label: "Years Experience" },
                  { value: "5,000+", label: "Families Helped" },
                  { value: "0–24", label: "Months Covered" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-background-light rounded-xl p-4">
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Library */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionBadge text="Watch the Sessions" />
            <h2 className="text-4xl md:text-5xl font-display text-slate-900 mb-6">
              Real sessions, real results
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Each video below is a recorded one-on-one consultation between Anat
              and a BabyPillars parent. Watch how she assesses, advises, and
              empowers, then book your own session.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { id: "LwemrgofzUE", title: "Stages of Crawling: Pre Crawling Tips and Exercises" },
              { id: "P077h0Jy9u8", title: "How To Help My Baby To Crawl? And How To Encourage Crawling" },
              { id: "TiDc41CNNEo", title: "Why Does My Baby Refuse To Sleep?" },
              { id: "E6trngobk4Y", title: "Your Baby's Daily Schedule: Explained" },
              { id: "LNe0WqeBbFU", title: "Baby Teething: Why Do My Baby's Teeth Hurt at Night?" },
              { id: "4m-4OAEUA7I", title: "Simple Tip For Your Baby's Eating Issues" },
              { id: "IWkmBGJ9EaA", title: "3 Month Old Baby Exercise: Baby Sides of Body" },
              { id: "EzzqwmJJEfo", title: "How To Calm a Fussy or Crying Baby and Relieve Tension" },
              { id: "gLIETofy3Oc", title: "My Baby Does Not Walk Yet: What To Do?" },
              { id: "uBzpLUU0dzk", title: "Setting Boundaries With Babies: A Different Approach To No" },
            ].map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md hover:border-primary/20 transition-all"
              >
                <div className="relative w-full aspect-video">
                  <iframe
                    title={video.title}
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&controls=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    One-on-One With Anat
                  </p>
                  <h3 className="text-lg font-display text-slate-900 leading-snug">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Guides CTA Strip */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display text-slate-900 mb-3">
              Explore development by age
            </h2>
            <p className="text-slate-600">
              Pair the sessions with our free age-specific developmental guides.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "0–3 Months", href: "/0-3-months-baby/" },
              { label: "3–6 Months", href: "/3-6-months-baby/" },
              { label: "6–9 Months", href: "/6-9-months-baby/" },
              { label: "9–12 Months", href: "/9-12-months-baby/" },
              { label: "12–24 Months", href: "/12-24-months-baby/" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center justify-center gap-2 p-6 rounded-2xl border border-slate-200 hover:border-primary hover:bg-primary/5 transition-all group"
              >
                <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">
                  child_care
                </span>
                <span className="text-sm font-semibold text-slate-700 group-hover:text-primary transition-colors text-center">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-24 bg-background-light" id="book-session">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-[32px] p-8 md:p-16 border border-primary/20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none select-none">
              <span className="material-symbols-outlined text-primary text-9xl">
                videocam
              </span>
            </div>
            <div className="relative z-10 text-center mb-12">
              <SectionBadge text="Book a Session" />
              <h2 className="text-4xl md:text-5xl font-display text-slate-900 mb-4">
                Book Your Private Session With Anat
              </h2>
              <p className="text-slate-600 max-w-xl mx-auto">
                Fill in your details and Anat will personally reach out within
                24 hours to confirm your session time.
              </p>
            </div>
            <SessionForm />
          </div>
        </div>
      </section>

      {/* Trust Row */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: "verified_user",
                title: "100% Private",
                desc: "Every session is conducted one-on-one via secure video call.",
              },
              {
                icon: "schedule",
                title: "24-Hour Response",
                desc: "Anat personally reads every booking request and replies within a day.",
              },
              {
                icon: "workspace_premium",
                title: "20+ Years of Expertise",
                desc: "Clinical background in neuro-developmental specialisation.",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-3">
                <span className="material-symbols-outlined text-primary text-3xl">
                  {item.icon}
                </span>
                <p className="font-bold text-slate-900">{item.title}</p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection variant="green">
        <h2 className="text-4xl md:text-5xl font-display mb-6">
          Stop guessing. Start understanding.
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          One session with Anat gives you more clarity than months of scrolling.
          Your baby&apos;s development can&apos;t wait, and neither can your
          peace of mind.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#book-session"
            className="bg-white text-primary hover:bg-slate-100 px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
          >
            Book a Session With Anat
          </a>
          <Link
            href="/how-it-works"
            className="bg-transparent border-2 border-white/30 hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold text-lg transition-all"
          >
            How BabyPillars Works
          </Link>
        </div>
      </CTASection>
    </>
  );
}
