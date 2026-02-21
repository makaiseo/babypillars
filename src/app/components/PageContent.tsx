import Link from "next/link";
import Image from "next/image";
import BlogArticleContent from "@/app/blog/components/BlogArticleContent";
import SectionBadge from "@/app/components/SectionBadge";
import CTASection from "@/app/components/CTASection";
import { parseHtmlContent } from "@/app/lib/parseArticle";

interface PageData {
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  featuredImage: string;
  htmlContent: string;
}

export default function PageContent({ page }: { page: PageData }) {
  const parsedContent = parseHtmlContent(page.htmlContent);

  return (
    <div>
      {/* Hero Header */}
      <header className="pt-20 pb-16 hero-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <div className={page.featuredImage ? "grid lg:grid-cols-2 gap-12 items-center" : "max-w-3xl"}>
            <div>
              <SectionBadge text={page.category} />
              <h1 className="text-5xl md:text-7xl font-display leading-[1.1] text-slate-900 mb-8">
                {page.title}
              </h1>
              {page.metaDescription && (
                <p className="text-xl text-slate-600 leading-relaxed">
                  {page.metaDescription}
                </p>
              )}
            </div>
            {page.featuredImage && (
              <div className="hidden lg:block">
                <Image
                  src={page.featuredImage}
                  alt={page.title}
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-xl object-cover w-full"
                />
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Article Content */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <BlogArticleContent parsedContent={parsedContent} />
        </div>
      </section>

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
