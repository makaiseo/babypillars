import Link from "next/link";
import type { Metadata } from "next";
import SectionBadge from "../components/SectionBadge";

export const metadata: Metadata = {
  title: "BabyPillars Bundle 0-24 Months Platinum Video Course",
  description:
    "Welcome to Babypillars Bundle. This page is our 0-24 months platinum video course for parents and babies in the first 2 years of life.",
};

const testimonials = [
  {
    name: "Audrey Anderson",
    location: "CA",
    image: "/bundle/Audrey-Anderson-CA.jpg",
    text: "I have reviewed some of the videos and tried them with my son, and he loves them! I have never seen him so proud of himself!",
  },
  {
    name: "Sima Shelly",
    location: "TX",
    image: "/bundle/Marry-David-TX.jpg",
    text: "My baby was diagnosed with mild torticollis 2 months ago. I went online to find some info and got to your site, and it was a god sent!! He is now almost cured and gained almost 100% of his neck and head motor abilities and it is mainly because of your videos... When I was at my pediatrician appointment last week he was shocked of the transformation and asked to see your website.",
  },
  {
    name: "Abby B.",
    location: "London",
    image: "/bundle/Testimonial_Abby_Johnson.jpg",
    text: "I believe that your exercises are perfectly composed. I like that you approach the child's development as a whole and that - unlike other websites on similar topics - you give specific, practical tips on supporting the child's development. The format of your video tutorials is very accessible.",
  },
  {
    name: "Suzan Artin",
    location: "CN",
    image: "/bundle/Suzan-L.-Artin.jpg",
    text: "The one on one sessions with Anat have been incredible; her advice is so much more impactful and qualified than any of the baby activity apps or websites out there. She's able to observe my baby's movements and make recommendations to help him with anything he's frustrated about. Typically after practicing these recommendations for a day, I'll see a change in his behavior the next day. The video courses have also been really useful for filling his playtime with fun and developmental appropriate activities.",
  },
  {
    name: "Sima Lenoro",
    location: "WA",
    image: "/bundle/test-1.jpg",
    text: "I had bought this course within minutes of seeing the first video … Parents, buy this course. It's like those great books which we keep going back to years later to seek counsel. You will be glad you did it.",
  },
  {
    name: "Maria Martins",
    location: "CA",
    image: "/bundle/Anna-Smith-BF-book.png",
    text: "I found some of your video tutorials on YouTube when my son was 5 months old. He was lying on his stomach and was very frustrated because he couldn't move forward. After just a few days of doing your exercises he began to move around his own axis and shortly thereafter began to crawl on his stomach. As for the session with Anat, she was well prepared for it - she knew my son's problems and conditions. Anat gave me very specific advice on how to deal with my son's sleeping problems. She answered all my questions and concerns. Anat had a personal approach - she tried to find out what was causing the sleeping problems specifically in our case and helped me take a new and different approach.",
  },
];

const socialProofs = [
  {
    name: "Pamela Grace Miles",
    text: "My son too had severe torticollis and developed a flat spot. We had to do a helmet for about 6 weeks but there was no significant change. Physical therapy helped but not nearly enough & they were worried about it affecting his eye sight in the future. Then we started this course and had some private sessions with Anat - it was amazing and a complete different approach to what we were used to. Fast forward a few months & he even runs around looking straight up at the ceiling, something I never thought we'd see.",
    image: "/bundle/pamela-e1623838115905-1.jpg",
  },
  {
    name: "Hanna Rimon",
    text: "Almost cured... gained almost 100% of his neck and head motor abilities. My baby was diagnosed with mild torticollis 2 months ago. I went online to find some info and got to your site, and it was a god sent!! He is now almost cured and gained almost 100% of his neck and head motor abilities and it is mainly because of your videos... When I was at my pediatrician appointment last week he was shocked of the transformation and asked to see your website.",
    image: "/bundle/blank-women-1.png",
  },
];

const benefits = [
  {
    icon: "verified",
    title: "Unshakeable Confidence",
    desc: "Know without a doubt your baby development path and what they need to go through when they need it.",
  },
  {
    icon: "family_restroom",
    title: "One On One Time",
    desc: "Take your one on one time with your baby to the next level. Practice and work with your baby on what really matters for his future.",
  },
  {
    icon: "security",
    title: "Future Security",
    desc: "Build the right baby pillars today and guarantee your baby future development path.",
  },
  {
    icon: "psychology",
    title: "Uncertainty Be Gone",
    desc: "Get all the tools and guidance you need to understand your baby wants and needs every step of the way.",
  },
  {
    icon: "center_focus_strong",
    title: "Unwavering Focus",
    desc: 'Forget distractions and so called social "experts". Laser-focus on what your baby needs and wants.',
  },
];

export default function BundlePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-24 overflow-hidden hero-pattern">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <SectionBadge text="Platinum Video Course" />
            <h1 className="text-5xl md:text-7xl font-display leading-[1.1] text-slate-900 mb-8">
              Stop guessing. Know exactly how to support your baby&apos;s
              development.{" "}
              <span className="italic text-primary">week by week.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-6">
              BabyPillars is a calm, step-by-step baby development roadmap that
              shows you what matters now, what to focus on next, and how to
              support your baby through the right environment, from birth to 24
              months.
            </p>
            <ul className="space-y-3 text-left max-w-xl mx-auto mb-10">
              {[
                "Clear guidance for each stage, without pressure or overwhelm.",
                "Focus on foundations that help milestones happen naturally.",
                "Simple weekly plans, videos, and checklists you can actually follow.",
                "Built to replace confusion with confidence.",
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
              href="/pricing"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-primary/20"
            >
              Join BabyPillars Today
            </Link>
            <p className="mt-3 text-sm text-slate-500">
              Signup now - No credit card needed!
            </p>
          </div>
        </div>
      </section>

      {/* The Need */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display text-slate-900 mb-6">
            You don&apos;t need more tips.
            <br />
            <span className="text-primary italic">
              You need a clear plan that grows with your baby.
            </span>
          </h2>
        </div>
      </section>

      {/* Meghan's Story */}
      <section className="py-24 bg-background-light">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display text-slate-900 mb-10 text-center">
            &ldquo;How did I get here? Am I a terrible mother&rdquo; she
            asked...
          </h2>
          <div className="prose prose-lg text-slate-600 leading-relaxed space-y-6">
            <p>
              I sat on the floor just outside my baby&apos;s room and cried my
              eyes out. I was feeling so frustrated, overwhelmed and clueless
              that after everything ... it would all come to this.
            </p>
            <p>
              I had blindly following the same old routine for months, reading
              the same books, moving towards the goal, only to find out that I am
              clueless about the next phase of my life.
            </p>
            <p>
              There were hundreds around that were in my place, in the same
              situation as me. Only THEY had smiles on their faces.
            </p>
            <p>How? Why? Did they know something I didn&apos;t? Did they plan ahead?</p>
            <p>
              It was an ordinary work day of meeting parents and babies, hearing
              their stories and frustration and helping them along the parenting
              and development road.
            </p>
            <p>But when Meghan entered the room it all changed.</p>
            <p>
              Meghan just 4 months earlier gave birth to a beautiful baby girl
              (Naomi), and when she entered the room with Naomi, you could see in
              her eyes the frustration immediately.
            </p>
            <p>
              After only 3 minutes of conversation Meghan started to tell me her
              story of the night before, she told me she was prepared in
              advanced, she read all the books, all the articles on pregnancy and
              taking care of a newborn and she felt she was prepared.
            </p>
            <p>
              But when she met the &ldquo;Real Parenting World&rdquo;, she
              quickly found out, it&apos;s not exactly like the books have made
              it up to be.
            </p>
            <p>
              In her words: &ldquo;How did I get here? Am I a terrible
              mother&rdquo;?
            </p>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            I was sitting in my house thinking and going through a lot of
            questions parents asked me on a daily basis. Questions like:
          </p>
          <ul className="space-y-4 mb-8">
            {[
              "When will my baby sleep through the night? He wakes up every half an hour what can I do?",
              "What is the best position to cradle my baby when he has gas?",
              "Why is my baby not walking yet? My friend baby is the same age and walks…",
              "How can I get my baby to be in the future in the top of his class? (wow!!)",
              "And much more.",
            ].map((q) => (
              <li key={q} className="flex items-start gap-3 text-slate-700">
                <span className="material-symbols-outlined text-primary mt-0.5">
                  help
                </span>
                <span className="text-lg">{q}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            I saw that a lot of parents have the same questions, the same fears,
            the same thirst for knowledge.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            That&apos;s when I realized I don&apos;t want to help just a few, I
            want to help them all… Help also parents that don&apos;t know me or
            are geography far away … but are struggling and are frustrated every
            day.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            And so that&apos;s what I did …
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            In my first year on the World Wide Web I have helped hundreds of
            parents and answered thousands of questions.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            In my second year I have helped thousands of parents from countries
            like the US, Vietnam, Peru, Spain, China, Egypt, New Zealand and
            more.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Today there are thousands of parents each month on the
            &ldquo;BabyPillars&rdquo; website and every month they watch on
            average 687,700 minutes of video tutorials. (That&apos;s 11,462
            Hours – Crazy right!).
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            And I did this all by focusing on ONE thing…
          </p>
          <p className="text-xl font-bold text-slate-900 mt-4">
            Focusing on you the parents and delivering great value to you and
            your baby with my step by step easy to follow video tutorials.
          </p>
        </div>
      </section>

      {/* Initial Testimonials */}
      <section className="py-24 bg-background-light">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-display text-slate-900 mb-10 text-center">
            Here are just a few examples of how parents just like you feel after
            seeing my tutorials:
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100">
              <p className="text-slate-600 leading-relaxed italic">
                &ldquo;Anat is absolutely wonderful. After watching the videos, I
                decided to purchase a private session package to get specialized
                suggestions for my toddler who has gross motor delays and has
                been in physical therapy his whole life. Not only was Anat
                incredibly knowledgeable and creative with her suggestions, her
                warmth, support, and encouragement made the sessions therapeutic
                for me as well.&rdquo;
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100">
              <p className="text-slate-600 leading-relaxed italic">
                &ldquo;As a parent who is very used to the physical therapy model
                (and is used to my son crying through most therapy sessions) it
                was refreshing to have Zoom sessions with Anat where my son was
                actually enjoying himself, laughing and having fun. I love her
                approach to development in which learning takes place during fun
                activities. I feel so grateful for Anat and highly recommend
                her.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            If you&apos;re feeling unsure, overwhelmed, or worried about
            milestones, you&apos;re not doing anything wrong.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Most parents arrive here with the same questions:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Am I doing enough?",
              "Is my baby developing the way they should?",
              "Why does everything online contradict itself?",
            ].map((q) => (
              <li key={q} className="flex items-start gap-3 text-slate-700">
                <span className="material-symbols-outlined text-red-400 mt-0.5">
                  help
                </span>
                <span className="text-lg italic">{q}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            The truth is, baby development isn&apos;t about doing more.
          </p>
          <p className="text-xl font-bold text-slate-900 mb-6">
            It&apos;s about understanding what actually matters at each stage and
            setting up the right foundations so progress can happen naturally.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            BabyPillars was created to replace confusion with clarity and
            pressure with confidence.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-2">
            You don&apos;t need to &ldquo;catch up.&rdquo;
          </p>
          <p className="text-xl font-bold text-primary">
            You just need a clear next step.
          </p>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-24 bg-background-light">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display text-slate-900 mb-10 text-center">
            Most advice focuses on milestones.
            <br />
            <span className="text-primary italic">
              BabyPillars focuses on what makes milestones possible.
            </span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Many resources tell parents what babies should do by a certain age,
            but very few explain how development actually unfolds.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            BabyPillars is built around two core ideas:
          </p>
          <div className="space-y-6 mb-10">
            <div className="bg-white p-8 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Development starts with the environment.
              </h3>
              <p className="text-slate-600 leading-relaxed">
                The way your baby moves, explores, and learns is shaped by their
                surroundings long before milestones appear.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Clarity beats intensity
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Small, intentional changes, done consistently, matter more than
                endless exercises or stimulation.
              </p>
            </div>
          </div>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            That&apos;s why BabyPillars combines:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "short, practical videos,",
              "simple home setup guidance,",
              "and clear weekly focus points",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <span className="material-symbols-outlined text-primary mt-0.5">
                  check_circle
                </span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            so you always know what to do without overdoing it.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            This isn&apos;t about pushing milestones.
          </p>
          <p className="text-xl font-bold text-slate-900">
            It&apos;s about supporting development the way babies are designed to
            grow.
          </p>
        </div>
      </section>

      {/* Start Where You Are */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display text-slate-900 mb-6">
            Start where your baby is right now.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            BabyPillars covers development from birth to 24 months, but you only
            focus on what matters today.
          </p>
          <Link
            href="/pricing"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-primary/20 mb-3"
          >
            Join BabyPillars Today
          </Link>
          <p className="text-sm text-slate-500">
            Signup now - No credit card needed!
          </p>
        </div>
      </section>

      {/* Age Stages */}
      <section className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                range: "0–3 Months",
                title: "Foundations for comfort, movement, and sensory regulation.",
                desc: "Gentle positioning, early movement, calm engagement.",
                cta: "See what matters now",
              },
              {
                range: "3–6 Months",
                title:
                  "Rolling, tummy time, body awareness, and preparation for mobility.",
                desc: "The most important stages for long-term development.",
                cta: "See the weekly focus",
              },
              {
                range: "6–9 Months",
                title:
                  "Sitting, crawling readiness, exploration, and body coordination.",
                desc: "Support independence without pressure.",
                cta: "See how to support this stage",
              },
            ].map((stage) => (
              <div
                key={stage.range}
                className="bg-white p-10 rounded-3xl border border-slate-100"
              >
                <p className="text-primary font-bold text-lg mb-3">
                  {stage.range}
                </p>
                <h3 className="text-xl font-display text-slate-900 mb-3">
                  {stage.title}
                </h3>
                <p className="text-slate-600 mb-6">{stage.desc}</p>
                <Link
                  href="/pricing"
                  className="text-primary font-semibold hover:underline"
                >
                  {stage.cta} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Go from good to confident */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-display mb-8 leading-[1.1]">
            Go from &ldquo;good&rdquo; to &ldquo;confident and secure&rdquo; by
            developing your baby&apos;s inner skills of winners and give your
            baby an instant edge in their present and future development
          </h2>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-primary/5 p-10 rounded-3xl text-center">
            <span className="material-symbols-outlined text-primary text-5xl mb-4">
              verified_user
            </span>
            <h2 className="text-2xl font-display text-slate-900 mb-6">
              The ENTIRE BabyPillars bundle course is available in video, audio,
              and transcript formats + 100% Risk Free Guarantee
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              I&apos;ve packed a lot into BabyPillars, and I want to make sure
              that you and your baby not only get all that content before you
              fully commit to this, I want to give you 30 days to let it digest,
              integrate it into your daily routine, and make sure this is really
              working for your baby and you, I want you to see the difference in
              their development first.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              This guarantee lasts 30 days, which completely covers the course.
              That means you can try the ENTIRE course and then decide if
              it&apos;s right for you.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              I am sure you will love my videos and watch them again and again.
              But if this isn&apos;t the best INVESTMENT you have EVER spent on
              your baby… simply let me know within 30 days and I will happily
              refund your purchase, no questions asked!
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white p-8 rounded-3xl border border-slate-100 text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-5">
                  <span className="material-symbols-outlined text-2xl">
                    {b.icon}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {b.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="space-y-6">
            <p className="text-xl text-slate-700 leading-relaxed">
              Professional fun activities personalized to your baby&apos;s age
              and needs.
            </p>
            <p className="text-xl text-slate-700 leading-relaxed">
              Help your baby learn and grow with meaningful play time every day.
            </p>
            <p className="text-xl font-bold text-slate-900">
              Set the right foundation for your baby&apos;s future development
              milestones!
            </p>
          </div>
          <Link
            href="/pricing"
            className="inline-block mt-10 bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-primary/20"
          >
            Join BabyPillars Now
          </Link>
          <p className="mt-3 text-sm text-slate-500">
            Signup now - No credit card needed!
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-display text-slate-900 mb-12 text-center">
            What Parents Are Saying
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Social Proof */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          {socialProofs.map((sp) => (
            <div
              key={sp.name}
              className="bg-background-light p-8 rounded-3xl border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={sp.image}
                  alt={sp.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <p className="font-bold text-slate-900">{sp.name}</p>
              </div>
              <p className="text-slate-600 leading-relaxed italic">
                &ldquo;{sp.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-display mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Join thousands of parents who replaced guessing with a clear,
            week-by-week development plan.
          </p>
          <Link
            href="/pricing"
            className="inline-block bg-white text-primary px-12 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-xl"
          >
            Join BabyPillars Now
          </Link>
          <p className="mt-4 text-sm text-white/60">
            Signup now - No credit card needed!
          </p>
        </div>
      </section>
    </>
  );
}
