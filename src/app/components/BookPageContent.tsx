import Link from "next/link";
import Image from "next/image";
import SectionBadge from "@/app/components/SectionBadge";
import CTASection from "@/app/components/CTASection";
import BookFAQSection from "@/app/components/BookFAQSection";
import BookDownloadForm from "@/app/components/BookDownloadForm";
import { parseHtmlContent } from "@/app/lib/parseArticle";

interface PageData {
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  featuredImage: string;
  htmlContent: string;
}

interface BookFormContent {
  title: string;
  description: string;
  buttonText: string;
}

const bookFormContent: Record<string, BookFormContent> = {
  "milestones-for-0-24-month-babies": {
    title: "Get the Free Milestones Guide (0–24 Months)",
    description:
      "Download your comprehensive guide to baby milestones and know exactly what to expect at every stage, without the overwhelm.",
    buttonText: "Send Me the Free Milestones Guide",
  },
  "free-book-download": {
    title: "Get Your Free Baby Development Guide",
    description:
      "Join thousands of parents with our complete 0-24 month development guide, delivered straight to your inbox.",
    buttonText: "Send Me the Free Guide",
  },
  "raising-a-healthy-eater": {
    title: "Get the Free Healthy Eater Guide",
    description:
      "Download our complete guide to feeding your baby from birth to toddlerhood, practical, pressure-free steps for every stage.",
    buttonText: "Send Me the Healthy Eater Guide",
  },
  "from-sleepless-to-sound-sleep-free-downloadable-book": {
    title: "Get the Free Sleep Guide",
    description:
      "Download your step-by-step guide to building healthy sleep habits for your baby and finally get the rest your family deserves.",
    buttonText: "Send Me the Sleep Guide",
  },
  "breast-feeding-secrets-free-downloadable-book": {
    title: "Get the Free Breastfeeding Secrets Guide",
    description:
      "Download the complete breastfeeding guide trusted by thousands of moms, everything you need to know, in one place.",
    buttonText: "Send Me the Breastfeeding Guide",
  },
  "parenting-version-3-downloadable-book": {
    title: "Get the Free Parenting 3.0 Guide",
    description:
      "Download the ultimate playbook for modern parents and raise confident, curious kids in the 21st century.",
    buttonText: "Send Me the Parenting 3.0 Guide",
  },
};

const contentStyles =
  "[&_p]:text-lg [&_p]:text-slate-700 [&_p]:leading-relaxed [&_p]:mb-6 " +
  "[&_h3]:text-2xl [&_h3]:font-display [&_h3]:text-slate-900 [&_h3]:mt-10 [&_h3]:mb-4 " +
  "[&_h4]:text-xl [&_h4]:font-display [&_h4]:text-slate-900 [&_h4]:mt-8 [&_h4]:mb-3 " +
  "[&_h5]:text-lg [&_h5]:font-display [&_h5]:text-slate-900 [&_h5]:mt-6 [&_h5]:mb-3 " +
  "[&_strong]:text-slate-900 [&_strong]:font-semibold " +
  "[&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-primary/80 " +
  "[&_ul]:my-6 [&_ul]:pl-6 [&_ul]:list-disc [&_ul]:space-y-2 " +
  "[&_ol]:my-6 [&_ol]:pl-6 [&_ol]:list-decimal [&_ol]:space-y-2 " +
  "[&_li]:text-lg [&_li]:text-slate-700 [&_li]:leading-relaxed " +
  "[&_img]:rounded-2xl [&_img]:shadow-md [&_img]:my-8 [&_img]:max-w-full [&_img]:h-auto " +
  "[&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-slate-600 [&_blockquote]:my-6";

export default function BookPageContent({ page }: { page: PageData }) {
  const { sections, keyTakeaways, faqs } = parseHtmlContent(page.htmlContent);

  const introSection = sections.find((s) => s.id === "intro" || s.id === "content");
  const contentSections = sections.filter((s) => s.id !== "intro" && s.id !== "content");

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-20 pb-16 overflow-hidden hero-pattern">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <SectionBadge text={page.category} />
            <h1 className="text-5xl md:text-7xl font-display leading-[1.1] text-slate-900 mb-8">
              {page.title}
            </h1>
            {page.metaDescription && (
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                {page.metaDescription}
              </p>
            )}
          </div>
          {page.featuredImage && (
            <div className="max-w-2xl mx-auto mt-14">
              <Image
                src={page.featuredImage}
                alt={page.title}
                width={700}
                height={450}
                className="rounded-3xl shadow-2xl object-cover w-full"
              />
            </div>
          )}
        </div>
      </section>

      {/* Introduction */}
      {introSection && (
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div
              className={contentStyles}
              suppressHydrationWarning
              dangerouslySetInnerHTML={{ __html: introSection.html }}
            />
          </div>
        </section>
      )}

      {/* Key Takeaways */}
      {keyTakeaways.length > 0 && (
        <section className="py-20 border-y border-primary/10 bg-primary/5">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <SectionBadge text="Key Takeaways" />
              <h2 className="text-3xl md:text-4xl font-display text-slate-900">
                What You&apos;ll Learn
              </h2>
            </div>
            <ul className="grid sm:grid-cols-2 gap-4">
              {keyTakeaways.slice(0, 8).map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 bg-white rounded-2xl p-5 shadow-sm border border-primary/10"
                >
                  <span className="material-symbols-outlined text-primary mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <span className="text-slate-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Content Sections */}
      {contentSections.map((section, i) => (
        <section
          key={section.id}
          className={`py-20 ${i % 2 === 0 ? "bg-white" : "bg-background-light"}`}
        >
          <div className="max-w-3xl mx-auto px-6">
            {section.title && (
              <h2 className="text-3xl md:text-4xl font-display text-slate-900 mb-10">
                {section.title}
              </h2>
            )}
            <div
              className={contentStyles}
              suppressHydrationWarning
              dangerouslySetInnerHTML={{ __html: section.html }}
            />
          </div>
        </section>
      ))}

      {/* FAQs */}
      {faqs.length > 0 && <BookFAQSection faqs={faqs} />}

      {/* Download Form */}
      {bookFormContent[page.slug] && (
        <section className="py-24 bg-white" id="download-form">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-background-light rounded-[32px] p-8 md:p-16 border border-primary/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <span className="material-symbols-outlined text-primary text-9xl">
                  auto_awesome
                </span>
              </div>
              <div className="relative z-10 text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-display text-slate-900 mb-4">
                  {bookFormContent[page.slug].title}
                </h2>
                <p className="text-slate-600 max-w-xl mx-auto">
                  {bookFormContent[page.slug].description}
                </p>
              </div>
              <BookDownloadForm
                buttonText={bookFormContent[page.slug].buttonText}
                formTitle={bookFormContent[page.slug].title}
              />
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection variant="green">
        <h2 className="text-4xl md:text-5xl font-display mb-6">
          Ready to Support Your Baby&apos;s Development?
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Join thousands of parents using BabyPillars&apos; evidence-based
          approach to child development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/babypillars-24-bundle"
            className="bg-white text-primary hover:bg-slate-100 px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
          >
            Get Started
          </Link>
          <Link
            href="/pricing"
            className="bg-transparent border-2 border-white/30 hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold text-lg transition-all"
          >
            View Pricing
          </Link>
        </div>
      </CTASection>
    </div>
  );
}
