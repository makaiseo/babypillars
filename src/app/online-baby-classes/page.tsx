import Link from "next/link";
import type { Metadata } from "next";
import { canonical } from '../lib/seo';
import SectionBadge from "../components/SectionBadge";
import CTASection from "../components/CTASection";

export const metadata: Metadata = {
  ...canonical('/online-baby-classes/'),
  title: "Online Baby Development Classes with Expert Specialist | BabyPillars",
  description:
    "The new age of online baby classes. With BabyPillars online baby classes you will get personalized support, a real person to talk to, and much more.",
  openGraph: {
    title: "Online Baby Development Classes with Expert Specialist | BabyPillars",
    description:
      "The new age of online baby classes. With BabyPillars online baby classes you will get personalized support, a real person to talk to, and much more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Baby Development Classes with Expert Specialist | BabyPillars",
    description:
      "The new age of online baby classes. With BabyPillars online baby classes you will get personalized support, a real person to talk to, and much more.",
  },
};

const features = [
  {
    icon: "person",
    title: "Personalized to Your Baby",
    desc: "Every class is tailored to your baby's current stage, not a generic checklist. Anat observes your baby and adapts in real time.",
  },
  {
    icon: "video_call",
    title: "Live, Face-to-Face Sessions",
    desc: "Real guidance from a real specialist, not a pre-recorded video. Ask questions, share concerns, and get answers on the spot.",
  },
  {
    icon: "psychology",
    title: "Expert-Led by Anat",
    desc: "Over 20 years of clinical experience behind every recommendation. Anat translates complex developmental science into simple steps.",
  },
  {
    icon: "home",
    title: "No Equipment Needed",
    desc: "You don't need expensive toys or gear. Anat works with what you already have at home to set up the right environment.",
  },
  {
    icon: "schedule",
    title: "Flexible Scheduling",
    desc: "Book sessions when it works for you. Early morning, midday, or evening, we fit around your family's rhythm.",
  },
  {
    icon: "verified",
    title: "Proven Results",
    desc: "Thousands of families from the US, UK, Australia, and beyond have seen real change in their baby's development within days.",
  },
];

const testimonials = [
  {
    name: "Audrey Anderson",
    location: "CA",
    image: "/bundle/Audrey-Anderson-CA.jpg",
    text: "I have reviewed some of the videos and tried them with my son, and he loves them! I have never seen him so proud of himself!",
  },
  {
    name: "Suzan Artin",
    location: "CN",
    image: "/bundle/Suzan-L.-Artin.jpg",
    text: "The one on one sessions with Anat have been incredible; her advice is so much more impactful and qualified than any of the baby activity apps or websites out there. She's able to observe my baby's movements and make recommendations to help him with anything he's frustrated about. Typically after practicing these recommendations for a day, I'll see a change in his behavior the next day.",
  },
  {
    name: "Maria Martins",
    location: "CA",
    image: "/bundle/Anna-Smith-BF-book.png",
    text: "As for the session with Anat, she was well prepared for it, she knew my son's problems and conditions. Anat gave me very specific advice on how to deal with my son's sleeping problems. She answered all my questions and concerns. Anat had a personal approach, she tried to find out what was causing the problems specifically in our case.",
  },
];

const steps = [
  {
    n: "1",
    title: "Book your session",
    desc: "Choose a time that works for your family. Sessions run 45–60 minutes via video call.",
  },
  {
    n: "2",
    title: "Anat observes your baby",
    desc: "She watches your baby move, play, and respond, then pinpoints exactly what to focus on at this stage.",
  },
  {
    n: "3",
    title: "Leave with a clear plan",
    desc: "You get specific, simple activities to practice at home, nothing overwhelming, just the right next step.",
  },
];

export default function OnlineBabyClassesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Course", "name": "Online Baby Development Classes", "url": "https://babypillars.com/online-baby-classes/", "description": "Expert-led online baby development classes covering milestones from birth to 24 months.", "provider": {"@type": "Organization", "name": "BabyPillars", "url": "https://babypillars.com"}, "hasCourseInstance": {"@type": "CourseInstance", "courseMode": "online", "instructor": {"@type": "Person", "name": "Anat Furstenberg", "url": "https://babypillars.com/about-babypillars"}}}) }} />
      {/* Hero */}
      <section className="relative pt-20 pb-24 overflow-hidden hero-pattern">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <SectionBadge text="Online Baby Classes" />
            <h1 className="text-5xl md:text-7xl font-display leading-[1.1] text-slate-900 mb-8">
              Real guidance from a real{" "}
              <span className="italic text-primary">specialist</span>, live with
              your baby.
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-6">
              BabyPillars online classes give you personalized, expert-led
              support, face to face with Anat Furstenberg, so you always know
              exactly what your baby needs right now.
            </p>
            <ul className="space-y-3 text-left max-w-xl mx-auto mb-10">
              {[
                "Live, one-on-one sessions with a certified specialist.",
                "Tailored to your baby's age and current developmental stage.",
                "Simple, practical guidance you can start using today.",
                "No special equipment, just your home and your baby.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <span className="material-symbols-outlined text-primary mt-0.5">
                    check_circle
                  </span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/private-online-sessions"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-primary/20"
            >
              Book a Class Today
            </Link>
          </div>
        </div>
      </section>

      {/* Why online classes */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display text-slate-900 mb-6">
              Why online classes work better than generic advice
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Every baby is different. A book or YouTube video can&apos;t see
              your baby, adapt to their personality, or answer your follow-up
              question. A live class with Anat can and does.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-slate-900">
              How a session works
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step) => (
              <div key={step.n} className="relative">
                <div className="step-number mb-6">{step.n}</div>
                <h3 className="text-2xl font-display text-slate-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
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
                Your class is led by
              </span>
              <h2 className="text-4xl md:text-5xl font-display text-slate-900 mt-4 mb-6">
                Anat Furstenberg
              </h2>
              <p className="text-xl text-slate-600 mb-6 italic">
                &ldquo;I don&apos;t just watch milestones. I help parents
                understand the foundations that make milestones possible.&rdquo;
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Anat is a certified child development specialist with over 20
                years of clinical experience working with thousands of families.
                Her approach is built around one idea: when parents understand
                the <em>why</em> behind development, everything else becomes
                clear.
              </p>
              <div className="flex gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <span className="block text-2xl font-bold text-primary">20+</span>
                  <span className="text-sm text-slate-500">Years Experience</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <span className="block text-2xl font-bold text-primary">5,000+</span>
                  <span className="text-sm text-slate-500">Families Helped</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <span className="block text-2xl font-bold text-primary">50+</span>
                  <span className="text-sm text-slate-500">Countries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display text-slate-900">
              What you get in every class
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5">
                  <span className="material-symbols-outlined">{f.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {f.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-display text-center mb-16 text-slate-900">
            Online classes vs. everything else
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-3xl bg-slate-100">
              <h3 className="text-xl font-bold mb-6 text-slate-500 uppercase tracking-widest">
                Generic Apps &amp; YouTube
              </h3>
              <ul className="space-y-4">
                {[
                  "One-size-fits-all content",
                  "No one sees your specific baby",
                  "Can't answer follow-up questions",
                  "Information overload, no clear direction",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-center text-slate-600">
                    <span className="material-symbols-outlined text-red-400">close</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 rounded-3xl border-2 border-primary bg-primary/5">
              <h3 className="text-xl font-bold mb-6 text-primary uppercase tracking-widest">
                BabyPillars Online Classes
              </h3>
              <ul className="space-y-4">
                {[
                  "Tailored to your baby, live",
                  "Anat watches and responds in real time",
                  "Ask anything, get a real answer",
                  "Leave with a clear, simple action plan",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-center font-medium">
                    <span className="material-symbols-outlined text-primary">check</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-display text-slate-900 mb-12 text-center">
            What parents say after their first class
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white p-8 rounded-3xl border border-slate-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.location}</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed italic text-sm">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-primary/5 p-10 rounded-3xl text-center">
            <span className="material-symbols-outlined text-primary text-5xl mb-4 block">
              verified_user
            </span>
            <h2 className="text-2xl font-display text-slate-900 mb-6">
              100% Satisfaction Guarantee
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              If you attend your first session and don&apos;t feel it was worth
              every minute, we&apos;ll refund you, no questions asked. That&apos;s
              how confident we are that one session with Anat will change
              the way you see your baby&apos;s development.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection variant="green">
        <h2 className="text-4xl md:text-5xl font-display mb-6">
          Your baby&apos;s next milestone starts with one conversation.
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Book a live online class with Anat and leave with a clear, confident
          plan for your baby&apos;s development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/private-online-sessions"
            className="bg-white text-primary hover:bg-slate-100 px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
          >
            Book a Class Today
          </Link>
          <Link
            href="/about-babypillars"
            className="bg-transparent border-2 border-white/30 hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold text-lg transition-all"
          >
            Learn About Anat
          </Link>
        </div>
      </CTASection>
    </>
  );
}
