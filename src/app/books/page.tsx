import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { booksPages, booksPagesBySlug } from "@/app/data/booksPages";
import SectionBadge from "@/app/components/SectionBadge";
import CTASection from "@/app/components/CTASection";

const landingPage = booksPagesBySlug["books"] || null;

export const metadata: Metadata = {
  title: "Books & Resources - BabyPillars",
  description:
    landingPage?.metaDescription ||
    "Explore our curated collection of books and resources on baby development, movement, and parenting.",
  openGraph: {
    title: "Books & Resources - BabyPillars",
    description:
      landingPage?.metaDescription ||
      "Explore our curated collection of books and resources on baby development, movement, and parenting.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Books & Resources - BabyPillars",
    description:
      landingPage?.metaDescription ||
      "Explore our curated collection of books and resources on baby development, movement, and parenting.",
  },
};

export default function Page() {
  const childPages = booksPages.filter((p) => p.slug !== "books");

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-20 pb-24 overflow-hidden hero-pattern">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <SectionBadge text="Reading List" />
            <h1 className="text-5xl md:text-7xl font-display leading-[1.1] text-slate-900 mb-8">
              Books &amp; Resources
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              A curated reading list on baby development, movement, and
              parenting — selected to support the BabyPillars approach.
            </p>
          </div>
        </div>
      </section>

      {/* Book Grid */}
      {childPages.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {childPages.map((child) => (
                <Link
                  key={child.slug}
                  href={`/books/${child.slug}`}
                  className="group bg-background-light rounded-3xl border border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {child.featuredImage && (
                    <div className="overflow-hidden">
                      <Image
                        src={child.featuredImage}
                        alt={child.title}
                        width={600}
                        height={375}
                        className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    {child.category && (
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                        {child.category}
                      </span>
                    )}
                    <h2 className="font-display text-xl text-slate-900 group-hover:text-primary transition-colors leading-snug mb-3">
                      {child.title}
                    </h2>
                    {child.metaDescription && (
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-1">
                        {child.metaDescription}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold mt-5">
                      Read More
                      <span className="material-symbols-outlined text-base">
                        arrow_forward
                      </span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection variant="green">
        <h2 className="text-4xl md:text-5xl font-display mb-6">
          Go Beyond the Books
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          BabyPillars gives you the step-by-step guidance, videos, and weekly
          plans to put everything you&apos;ve read into practice, from day one.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/pricing"
            className="bg-white text-primary hover:bg-slate-100 px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
          >
            Get Started
          </Link>
          <Link
            href="/how-it-works"
            className="bg-transparent border-2 border-white/30 hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold text-lg transition-all"
          >
            How It Works
          </Link>
        </div>
      </CTASection>
    </div>
  );
}
