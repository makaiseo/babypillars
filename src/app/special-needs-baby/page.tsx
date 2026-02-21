import type { Metadata } from "next";
import { canonical } from '../lib/seo';
import Link from "next/link";
import SectionBadge from "../components/SectionBadge";
import CTASection from "../components/CTASection";

export const metadata: Metadata = {
  ...canonical('/special-needs-baby/'),
  title:
    "Special Needs Baby - The Ultimate Resource to Development Delays | BabyPillars",
  description:
    "A complete guide to your Special Needs Baby. If your baby is struggling to meet their developmental milestones, start here. Expert guidance from Anat Furstenberg.",
  openGraph: {
    title:
      "Special Needs Baby - The Ultimate Resource to Development Delays | BabyPillars",
    description:
      "A complete guide to your Special Needs Baby. If your baby is struggling to meet their developmental milestones, start here. Expert guidance from Anat Furstenberg.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Special Needs Baby - The Ultimate Resource to Development Delays | BabyPillars",
    description:
      "A complete guide to your Special Needs Baby. If your baby is struggling to meet their developmental milestones, start here. Expert guidance from Anat Furstenberg.",
  },
};

const conditions = [
  {
    slug: "down-syndrome-in-babies",
    name: "Down Syndrome",
    description:
      "A genetic disorder caused by the presence of all or part of a third copy of chromosome 21. It is associated with physical growth delays, characteristic facial features, and intellectual disability.",
  },
  {
    slug: "autism-in-babies",
    name: "Autism Spectrum Disorder",
    description:
      "A developmental disorder characterized by difficulties with social interaction and communication, and restricted and repetitive patterns of behavior and interests.",
  },
  {
    slug: "cerebral-palsy-in-babies",
    name: "Cerebral Palsy (CP)",
    description:
      "A group of disorders that affect movement and muscle tone or posture. It is caused by damage to the developing brain before or during birth or in the first few years of life.",
  },
  {
    slug: "angelman-syndrome-babies",
    name: "Angelman Syndrome",
    description:
      "A rare genetic disorder that causes developmental disabilities, speech problems, movement and balance issues, and a happy and excitable demeanor.",
  },
  {
    slug: "cri-du-chat-syndrome-in-babies",
    name: "Cri-du-Chat Syndrome",
    description:
      "A rare genetic condition caused by a missing piece of chromosome 5, which results in intellectual disability, delayed development, and distinctive facial features.",
  },
  {
    slug: "desanto-shinawi-in-babies",
    name: "Desanto Shinawi Syndrome",
    description:
      "A rare genetic disorder that affects the development of the brain and causes developmental delay, intellectual disability, and distinctive facial features.",
  },
  {
    slug: "wolf-hirschhorn-syndrome-in-babies",
    name: "Wolf Hirschhorn Syndrome",
    description:
      "A rare genetic disorder that causes developmental delays, intellectual disability, seizures, distinctive facial features, and other health problems.",
  },
  {
    slug: "emanuel-syndrome-in-babies",
    name: "Emanuel Syndrome",
    description:
      "A rare chromosomal disorder that causes developmental delays, intellectual disability, and distinctive facial features.",
  },
  {
    slug: "rett-syndrome-in-babies",
    name: "Rett Syndrome",
    description:
      "A rare genetic disorder that affects brain development and causes severe physical and mental disability.",
  },
  {
    slug: "kcnq2-gene-mutation-in-babies",
    name: "KCNQ2 Gene Mutation",
    description:
      "A genetic disorder that affects the nervous system and causes seizures, developmental delay, and intellectual disability.",
  },
  {
    slug: "prader-willi-syndrome-in-babies",
    name: "Prader-Willi Syndrome",
    description:
      "A rare genetic disorder that causes a wide range of physical, mental, and behavioral problems, including a constant feeling of hunger and a risk of obesity.",
  },
  {
    slug: "williams-syndrome-in-babies",
    name: "Williams Syndrome",
    description:
      "A rare genetic disorder characterized by developmental delays, intellectual disability, and distinctive facial features.",
  },
  {
    slug: "spina-bifida-in-babies",
    name: "Spina Bifida",
    description:
      "A birth defect that occurs when the spine and spinal cord do not form properly. It can cause physical and intellectual disabilities.",
  },
  {
    slug: "muscular-dystrophy-in-babies",
    name: "Muscular Dystrophy",
    description:
      "A group of inherited disorders that involve muscle weakness and loss of muscle mass.",
  },
  {
    slug: "fragile-x-syndrome-in-babies",
    name: "Fragile X Syndrome",
    description:
      "A genetic condition that causes intellectual disability, behavioral and learning challenges, and various physical characteristics.",
  },
  {
    slug: "global-developmental-delay-in-babies",
    name: "Global Developmental Delay",
    description:
      "A term used when children are significantly delayed in their cognitive and physical development compared to their peers.",
  },
  {
    slug: "cp-center-specialist",
    name: "CP Center or Specialist",
    description:
      "Guidance on finding the right cerebral palsy center or specialist near you, and what to look for when choosing a care team for your baby.",
  },
  {
    slug: "cp-baby-birth",
    name: "CP and Baby Birth",
    description:
      "What parents need to know about the connection between birth events and cerebral palsy, including risk factors and early signs to watch for.",
  },
  {
    slug: "cp-help-assistance",
    name: "CP Help and Assistance",
    description:
      "A guide to the support resources, programs, and assistance available for babies with cerebral palsy and their families.",
  },
  {
    slug: "cp-therapy",
    name: "CP Therapy",
    description:
      "An overview of therapy approaches for babies with cerebral palsy, including physical, occupational, and speech therapy options.",
  },
  {
    slug: "cp-treatment",
    name: "CP Treatment",
    description:
      "A comprehensive look at cerebral palsy treatment options for infants and young children, from medical interventions to developmental support.",
  },
  {
    slug: "cp-care",
    name: "CP Care",
    description:
      "Day-to-day care strategies and best practices for parents raising a baby with cerebral palsy, covering feeding, positioning, and home routines.",
  },
];

export default function SpecialNeedsBabyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "MedicalWebPage", "name": "Special Needs Baby - The Ultimate Resource to Development Delays", "description": "A complete guide to your special needs baby. Expert guidance on developmental delays.", "url": "https://babypillars.com/special-needs-baby/", "about": {"@type": "MedicalCondition", "name": "Developmental Delays in Infants"}, "author": {"@type": "Person", "name": "Anat Furstenberg", "url": "https://babypillars.com/about-babypillars"}}) }} />
      {/* Hero */}
      <section className="pt-20 pb-24 hero-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <SectionBadge text="Special Needs" />
            <h1 className="text-5xl md:text-7xl font-display leading-[1.1] text-slate-900 mb-6">
              Special Needs Baby: The Ultimate Resource to{" "}
              <span className="italic text-primary">Development Delays</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Is your child facing developmental challenges or special needs? Is
              he or she struggling to meet their developmental milestones? You
              are not alone, and there is expert help available.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Note from Anat */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-2">
              <img
                alt="Anat Furstenberg - Child Development Specialist"
                className="rounded-2xl shadow-xl w-full aspect-[4/5] object-cover object-top"
                src="/anat.jpg"
              />
            </div>
            <div className="lg:col-span-3">
              <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">
                A Personal Note from Anat
              </span>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  I specialize in working with children who have developmental
                  delays and special needs, which encompass a wide range of
                  disorders including genetic syndromes, brain injuries, autism,
                  communication disorders, motor delays and disorders, low muscle
                  tone, epilepsy, severe eating disorders, ADHD, and more. I
                  strongly believe that involving parents and the child&apos;s
                  environment in the therapeutic process is essential for
                  fostering positive changes in their development.
                </p>
                <p>
                  My fundamental belief is that{" "}
                  <strong className="text-slate-900">
                    every child has the potential to realize their abilities.
                  </strong>{" "}
                  Drawing from my extensive experience working with numerous
                  children, I have witnessed how those with injuries, syndromes,
                  and disorders can achieve new learning, resulting in
                  transformative improvements in various aspects of their lives
                  and that of their families.
                </p>
                <p>
                  So, how does the process work? Initially, I focus on creating a
                  conducive environment for the child and providing them with
                  appropriate professional training. My objective is to identify
                  and unlock the child&apos;s potential and opportunities for
                  growth. One of my primary goals is to help the child relearn
                  any developmental processes he may have missed due to his
                  condition, effectively narrowing the gap between his
                  chronological age and developmental stage.
                </p>
                <p>
                  The learning process is intensive and involves active
                  participation from the entire family. Each developmental
                  milestone builds upon the previous one, forming a solid
                  foundation. By relearning or learning these milestones and
                  consistently practicing them, we stimulate the brain and
                  nervous system to enhance performance skills and to achieve his
                  full developmental potential.
                </p>
                <p>
                  My therapy approach incorporates various developmental
                  elements, including motor skills based on the Feldenkrais
                  method, sensory techniques (such as the snoezelen room method),
                  behavioral interventions, emotional support, social
                  interactions, and more.
                </p>
                <p>
                  Parents play a vital role in the therapeutic process. Through
                  our collaborative journey, we gain a mutual understanding of
                  the changes necessary to facilitate the child&apos;s new
                  learning. As a result, parents and the child&apos;s
                  developmental environment, including their kindergarten or
                  school, become integral parts of the overall process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Get Started */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-display text-slate-900 mb-8 text-center leading-[1.1]">
            How Do We Get Started?
          </h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              After our initial conversation, I will provide you with a
              questionnaire. Once you complete it, along with sharing relevant
              medical documents and a recent short video of the child, we will
              meet for an integrative diagnosis. This assessment focuses on
              exploring the child&apos;s potential rather than solely examining
              their disorder or difficulties.
            </p>
            <p>
              The diagnosis can take place either in your home or through a
              secure video conference platform like Zoom, ensuring your
              child&apos;s safety. During this process, we will engage in
              interactive play.
            </p>
            <p>
              After the diagnostic phase, we will discuss the therapy plan and
              determine the next steps following the intensive therapy. I firmly
              believe that by working together, we can achieve tangible results,
              continuous progress, and overall improvement for your child.
            </p>
            <p className="text-slate-900 font-medium italic text-xl font-display">
              If you have any further questions or would like to begin this
              transformative journey, please reach out. I look forward to the
              opportunity to make a positive difference in your child&apos;s
              life.
            </p>
            <p className="font-semibold text-slate-900">
              Anat Furstenberg
            </p>
          </div>
          <div className="flex justify-center mt-10">
            <Link
              href="/anat-furstenberg-first-step"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-primary/20"
            >
              Schedule a Session with Anat
            </Link>
          </div>
        </div>
      </section>

      {/* For Parents */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-display text-slate-900 mb-8 leading-[1.1]">
            A Guide for{" "}
            <span className="italic text-primary">Every Parent</span>
          </h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              As a parent, it can be devastating to learn that your baby has a
              developmental delay or a special need. You may feel lost,
              overwhelmed, and unsure of where to turn for help. Each delay or
              syndrome has its unique set of challenges and can be difficult to
              understand and manage on your own.
            </p>
            <p>
              I understand how challenging it can be, which is why I&apos;ve
              created a comprehensive resource on special needs and baby
              development delays. Below you will find a brief overview of the
              most common developmental delays and syndromes, including Down
              syndrome, cerebral palsy, autism spectrum disorder, and much more,
              with links to more in-depth resources that can help you learn more
              about your baby&apos;s specific condition.
            </p>
            <p className="font-medium text-slate-900">
              Don&apos;t let your baby&apos;s developmental delay or special need
              hold them back, learn more about the different conditions
              that can affect your child&apos;s development and get the
              information and support you need to help them thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Conditions Directory */}
      <section className="py-24 bg-background-light">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-display text-slate-900 mb-4 text-center leading-[1.1]">
            Developmental Conditions &amp; Resources
          </h2>
          <p className="text-slate-600 text-center mb-14 max-w-2xl mx-auto">
            Explore our in-depth guides for each condition. Each resource covers
            an overview, causes, symptoms, diagnosis, treatment, and support.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition) => (
              <Link
                key={condition.slug}
                href={`/special-needs-baby/${condition.slug}`}
                className="group bg-white rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all p-6 flex flex-col"
              >
                <h3 className="font-display text-xl text-slate-900 group-hover:text-primary transition-colors mb-3">
                  {condition.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                  {condition.description}
                </p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-4">
                  Learn More
                  <span className="material-symbols-outlined text-base">
                    arrow_forward
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What's In It For You */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-display text-center text-slate-900 mb-16 leading-[1.1]">
            What&apos;s In It For You And Your Baby
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: "workspace_premium",
                title: "Expert Parenting Support",
                desc: "Get expert guidance from a certified professional with years of experience and a proven record in parenting and child development.",
              },
              {
                icon: "child_care",
                title: "Complete Baby Care",
                desc: "Get comprehensive coverage of all the important topics related to caring for your baby, including feeding, sleep, play, development and much more.",
              },
              {
                icon: "trending_up",
                title: "Transform Baby's Life",
                desc: "Experience a dramatic improvement and transform your baby's sleep, feeding, and overall development in just a few short days.",
              },
            ].map((item) => (
              <div key={item.icon} className="text-center px-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    {item.icon}
                  </span>
                </div>
                <h4 className="text-2xl font-display mb-4 text-slate-900">
                  {item.title}
                </h4>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-display text-center text-slate-900 mb-16 leading-[1.1]">
            Real Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "I believe that your exercises are perfectly composed. I like that you approach the child's development as a whole and that \u2014 unlike other websites on similar topics \u2014 you give specific, practical tips on supporting the child's development. The format of your video tutorials is very accessible.",
              "Anat is absolutely wonderful. After watching the videos, I decided to purchase a private session package to get specialized suggestions for my toddler who has gross motor delays and has been in physical therapy his whole life. Not only was Anat incredibly knowledgeable and creative with her suggestions, her warmth, support, and encouragement made the sessions therapeutic for me as well.",
              "The one on one sessions with Anat have been incredible; her advice is so much more impactful and qualified than any of the baby activity apps or websites out there. She's able to observe my baby's movements and make recommendations to help him with anything he's frustrated about. Typically after practicing these recommendations for a day, I'll see a change in his behavior the next day.",
              "I first started doing the BabyPillar video tutorials with my first child who was diagnosed with torticollis. I found the videos to be easy to follow, extremely helpful and in line with what our physical therapist was showing us. They helped me understand what milestones my child should be achieving and how to get there step by step.",
            ].map((quote, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm"
              >
                <span className="material-symbols-outlined text-primary/30 text-4xl mb-4 block">
                  format_quote
                </span>
                <p className="text-slate-600 leading-relaxed italic">
                  &ldquo;{quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-display text-center text-slate-900 mb-16 leading-[1.1]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {[
              {
                q: "How does BabyPillars help with baby development?",
                a: "BabyPillars helps parents by providing a clear understanding of what to expect during their baby's first years and what steps they can take to ensure healthy and happy baby development. The video guides provide a hands-on approach to baby development, allowing parents to see the process in action.",
              },
              {
                q: "What is included in the BabyPillars video guides?",
                a: "The video guides include step-by-step demonstrations of healthy baby development, covering topics such as feeding, sleeping, milestones, and more. Parents can use the guides to understand what to look for at each stage of their baby's development.",
              },
              {
                q: "What is the difference between BabyPillars and other baby development resources?",
                a: "BabyPillars offers hands-on video guides, rather than just reading a book or attending a demonstration. The video guides provide a clear understanding of what to expect during a baby's first years and what steps to take to ensure healthy development.",
              },
              {
                q: "How does BabyPillars ensure healthy development for babies?",
                a: "BabyPillars provides step-by-step video guides that show parents what to look for at each stage of their baby's development, allowing them to monitor their baby's growth and ensure healthy development. The program covers topics such as feeding, sleeping, and milestones.",
              },
              {
                q: "Is there any age limit for the use of BabyPillars?",
                a: "BabyPillars is designed for use during a baby's first years, typically up to age 2 or 3.",
              },
              {
                q: "Can BabyPillars be used by both new and experienced parents?",
                a: "Yes, BabyPillars can be used by both new and experienced parents as it provides a comprehensive understanding of baby development, regardless of previous experience.",
              },
              {
                q: "What steps do I need to take to get started with BabyPillars?",
                a: "To get started with BabyPillars, simply sign up for the program and follow the step-by-step video guides. The program provides a comprehensive understanding of what to expect during a baby's first years and what steps to take to ensure healthy development.",
              },
            ].map((faq) => (
              <div key={faq.q}>
                <h3 className="text-xl font-display text-slate-900 mb-3">
                  {faq.q}
                </h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection variant="green">
        <h2 className="text-4xl md:text-5xl font-display mb-6">
          Take the First Step Today
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Don&apos;t wait, take the first step towards a brighter future
          for your child. Schedule a one-on-one session with Anat or explore our
          resources.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/anat-furstenberg-first-step"
            className="bg-white text-primary hover:bg-slate-100 px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105"
          >
            Schedule a Session
          </Link>
          <Link
            href="/pricing"
            className="bg-transparent border-2 border-white/30 hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold text-lg transition-all"
          >
            View Pricing
          </Link>
        </div>
      </CTASection>
    </>
  );
}
