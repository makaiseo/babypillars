import Link from "next/link";
import type { Metadata } from "next";
import SectionBadge from "../components/SectionBadge";
import CTASection from "../components/CTASection";

export const metadata: Metadata = {
  title: "BabyPillars Offers - Special Deals on Baby Development Programs",
  description:
    "Explore BabyPillars special offers and bundles. Get expert-guided baby development programs, private sessions with Anat, and the full 0-24 month roadmap at the best prices.",
  openGraph: {
    title: "BabyPillars Offers - Special Deals on Baby Development Programs",
    description:
      "Explore BabyPillars special offers and bundles. Get expert-guided baby development programs, private sessions with Anat, and the full 0-24 month roadmap at the best prices.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BabyPillars Offers - Special Deals on Baby Development Programs",
    description:
      "Explore BabyPillars special offers and bundles. Get expert-guided baby development programs, private sessions with Anat, and the full 0-24 month roadmap at the best prices.",
  },
};

const offers = [
  {
    badge: "Most Popular",
    title: "Full Access Membership",
    description:
      "Complete access to the BabyPillars system. Weekly guides, milestone roadmaps, and environment-first strategies for your baby's first 24 months.",
    price: "$9",
    period: "/month",
    annualNote: "or $97/year (save 60%)",
    features: [
      "Full 0-24 month developmental roadmap",
      "Weekly focus plans & video tutorials",
      "Environment setup guides for each stage",
      "Milestone checklists & progress tracking",
      "Multi-device access",
      "Cancel anytime",
    ],
    cta: "Start Membership",
    href: "/pricing",
    highlighted: false,
  },
  {
    badge: "Best Value",
    title: "Platinum Video Bundle",
    description:
      "The complete BabyPillars video course library. Every tutorial, every stage, every milestone, yours to keep forever.",
    price: "$197",
    period: " one-time",
    annualNote: "Lifetime access, no recurring fees",
    features: [
      "All video tutorials (0-24 months)",
      "Audio & transcript formats included",
      "Downloadable resources & checklists",
      "Bonus: Environmental Audit guide",
      "30-day money-back guarantee",
      "Free future updates",
    ],
    cta: "Get the Bundle",
    href: "/babypillars-24-bundle",
    highlighted: true,
  },
  {
    badge: "Personalized",
    title: "Private Sessions with Anat",
    description:
      "One-on-one video sessions with developmental specialist Anat Furstenberg. Get personalized guidance tailored to your baby's specific needs.",
    price: "$120",
    period: "/session",
    annualNote: "Package discounts available",
    features: [
      "Live 1-on-1 video consultation",
      "Personalized developmental assessment",
      "Custom exercise & activity plan",
      "Follow-up recommendations",
      "Available for special needs support",
      "Flexible scheduling",
    ],
    cta: "Book a Session",
    href: "/private-online-sessions",
    highlighted: false,
  },
];

const agePrograms = [
  {
    range: "0–6 Months",
    name: "Early Explorers",
    description:
      "Foundations for comfort, movement, and sensory regulation. Gentle positioning, tummy time, and early engagement.",
    href: "/baby-development-0-6-month",
    icon: "child_care",
  },
  {
    range: "6–12 Months",
    name: "Curious Crawlers",
    description:
      "Sitting, crawling readiness, body coordination, and exploration. Support independence without pressure.",
    href: "/baby-development-6-12-month",
    icon: "directions_walk",
  },
  {
    range: "12–24 Months",
    name: "Toddlers in Motion",
    description:
      "Walking, language development, fine motor skills, and social-emotional growth through purposeful play.",
    href: "/12-24-months-baby",
    icon: "emoji_people",
  },
];

export default function OffersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "BabyPillars Offers",
    description:
      "Special offers and programs for baby development from BabyPillars.",
    provider: {
      "@type": "Organization",
      name: "BabyPillars",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-20 pb-16 hero-pattern">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionBadge text="Special Offers" />
          <h1 className="text-5xl md:text-7xl font-display leading-[1.1] text-slate-900 mb-6">
            The Right Support,{" "}
            <span className="italic text-primary">At the Right Price.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Whether you need a complete roadmap, a focused course, or
            personalized guidance, we have an option that fits your family.
          </p>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="pb-24 -mt-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {offers.map((offer) => (
              <div
                key={offer.title}
                className={`bg-white p-8 md:p-10 rounded-3xl flex flex-col relative ${
                  offer.highlighted
                    ? "border-2 border-primary shadow-xl"
                    : "border border-slate-200 shadow-sm"
                }`}
              >
                <div
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-bold tracking-wide ${
                    offer.highlighted
                      ? "bg-primary text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {offer.badge}
                </div>
                <div className="mb-8 mt-2">
                  <h3 className="text-2xl font-display text-slate-900 mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {offer.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-slate-900">
                      {offer.price}
                    </span>
                    <span className="text-slate-500">{offer.period}</span>
                  </div>
                  <p
                    className={`mt-2 text-sm font-semibold ${
                      offer.highlighted ? "text-primary" : "text-slate-500"
                    }`}
                  >
                    {offer.annualNote}
                  </p>
                </div>
                <ul className="space-y-3 mb-10 flex-grow">
                  {offer.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-slate-700">
                      <span className="material-symbols-outlined text-primary text-lg mt-0.5 shrink-0">
                        check_circle
                      </span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={offer.href}
                  className={`w-full py-4 px-6 rounded-full font-bold text-center block transition-all ${
                    offer.highlighted
                      ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"
                      : "border-2 border-primary text-primary hover:bg-primary/5"
                  }`}
                >
                  {offer.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-slate-500 text-sm flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-base">
              verified_user
            </span>
            All plans include a 30-day money-back guarantee
          </p>
        </div>
      </section>

      {/* Age-Specific Programs */}
      <section className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionBadge text="By Age" />
            <h2 className="text-4xl font-display text-slate-900 mb-4">
              Programs for Every Stage
            </h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
              Start where your baby is right now. Each program is tailored to
              your child&apos;s current developmental phase.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {agePrograms.map((program) => (
              <Link
                key={program.range}
                href={program.href}
                className="group bg-white p-10 rounded-3xl border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary/15 transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    {program.icon}
                  </span>
                </div>
                <p className="text-primary font-bold text-sm uppercase tracking-wider mb-2">
                  {program.range}
                </p>
                <h3 className="text-xl font-display text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {program.name}
                </h3>
                <p className="text-slate-600 text-sm mb-6">
                  {program.description}
                </p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold">
                  Learn more
                  <span className="material-symbols-outlined text-base">
                    arrow_forward
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why BabyPillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display text-slate-900 mb-4">
              Why Parents Choose BabyPillars
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "workspace_premium",
                title: "Expert-Led",
                desc: "Created by Anat Furstenberg, a developmental specialist with 15+ years of clinical experience.",
              },
              {
                icon: "chair",
                title: "Environment-First",
                desc: "Set up your home to naturally trigger developmental leaps, no pressure, no drills.",
              },
              {
                icon: "schedule",
                title: "10 Min/Week",
                desc: "Designed for busy parents. Quick reads and simple changes that fit into any routine.",
              },
              {
                icon: "groups",
                title: "5,000+ Families",
                desc: "Join thousands of parents worldwide who found clarity and confidence with BabyPillars.",
              },
            ].map((item) => (
              <div key={item.icon} className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-5">
                  <span className="material-symbols-outlined text-2xl">
                    {item.icon}
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-slate-600 mb-4">Not ready to commit? Explore our free resources:</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <Link href="/milestone-tracker" className="text-primary hover:underline">Milestone Tracker</Link>
            <Link href="/blog" className="text-primary hover:underline">Development Blog</Link>
            <Link href="/books" className="text-primary hover:underline">Free Books</Link>
            <Link href="/about-babypillars" className="text-primary hover:underline">About Us</Link>
          </div>
        </div>
      </section>

      {/* Special Needs */}
      <section className="py-24 bg-background-light">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-10 md:p-14 rounded-3xl border border-slate-100 flex flex-col md:flex-row items-center gap-10">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-4xl">
                favorite
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-display text-slate-900 mb-3">
                Special Needs Support
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                BabyPillars offers specialized guidance for babies with
                conditions like{" "}
                <Link href="/torticollis" className="text-primary hover:underline">torticollis</Link>,
                plagiocephaly,{" "}
                <Link href="/special-needs-baby/down-syndrome-in-babies" className="text-primary hover:underline">Down syndrome</Link>,{" "}
                <Link href="/special-needs-baby/cerebral-palsy-in-babies" className="text-primary hover:underline">cerebral palsy</Link>,
                and more. Our{" "}
                <Link href="/private-online-sessions" className="text-primary hover:underline">private sessions</Link>{" "}
                provide tailored, one-on-one support from Anat.
              </p>
              <Link
                href="/special-needs-baby"
                className="inline-flex items-center gap-1 text-primary font-semibold hover:underline"
              >
                Explore special needs programs
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection variant="green">
        <h2 className="text-4xl md:text-5xl font-display mb-6">
          Start supporting your baby&apos;s growth today
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Stop the guessing games. Choose the plan that fits your family and get
          started in minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/pricing"
            className="bg-white text-primary hover:bg-slate-100 px-10 py-4 rounded-full font-bold text-lg transition-all"
          >
            View Pricing
          </Link>
          <Link
            href="/babypillars-24-bundle"
            className="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white px-10 py-4 rounded-full font-bold text-lg transition-all"
          >
            See the Bundle
          </Link>
        </div>
      </CTASection>
    </>
  );
}
