import Link from "next/link";
import BlogArticleContent from "@/app/blog/components/BlogArticleContent";
import CTASection from "@/app/components/CTASection";

interface PageData {
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  featuredImage: string;
  htmlContent: string;
}

export default function PageContent({ page }: { page: PageData }) {
  return (
    <article className="bg-white">
      {/* Header */}
      <header className="max-w-3xl mx-auto px-6 pt-12 pb-6">
        <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 uppercase tracking-wider">
          {page.category}
        </span>
        <h1 className="text-4xl md:text-5xl font-display leading-[1.15] text-slate-900">
          {page.title}
        </h1>
        {page.metaDescription && (
          <p className="text-lg text-slate-500 mt-4 leading-relaxed">
            {page.metaDescription}
          </p>
        )}
      </header>

      {/* Featured Image */}
      {page.featuredImage && (
        <div className="max-w-3xl mx-auto px-6 pb-10">
          <img
            alt={page.title}
            className="w-full aspect-[16/9] object-cover rounded-2xl"
            src={page.featuredImage}
          />
        </div>
      )}

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-6 pb-16">
        <BlogArticleContent htmlContent={page.htmlContent} />
      </div>

      {/* CTA */}
      <CTASection>
        <h2 className="text-3xl md:text-4xl font-display mb-4">
          Ready to Support Your Baby&apos;s Development?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of parents using BabyPillars&apos; evidence-based approach.
        </p>
        <Link
          href="/pricing"
          className="inline-block bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors"
        >
          Get Started
        </Link>
      </CTASection>
    </article>
  );
}
