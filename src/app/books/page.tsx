import type { Metadata } from "next";
import Link from "next/link";
import { booksPages, booksPagesBySlug } from "@/app/data/booksPages";
import PageContent from "@/app/components/PageContent";

const landingPage = booksPagesBySlug["books"] || null;

export const metadata: Metadata = {
  title: landingPage?.title ? `${landingPage.title} - BabyPillars` : "Books & Resources - BabyPillars",
  description: landingPage?.metaDescription || "",
};

export default function Page() {
  const childPages = booksPages.filter((p) => p.slug !== "books");

  return (
    <div className="bg-white">
      {/* Landing content if available */}
      {landingPage && <PageContent page={landingPage} />}

      {/* Child page cards */}
      {childPages.length > 0 && (
        <section className="py-16 bg-background-light">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-display text-slate-900 mb-10 text-center">
              Books & Resources
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {childPages.map((child) => (
                <Link
                  key={child.slug}
                  href={`/books/${child.slug}`}
                  className="group bg-white rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all overflow-hidden"
                >
                  {child.featuredImage && (
                    <img
                      src={child.featuredImage}
                      alt={child.title}
                      className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="p-5">
                    <h3 className="font-display text-lg text-slate-900 group-hover:text-primary transition-colors leading-snug">
                      {child.title}
                    </h3>
                    {child.metaDescription && (
                      <p className="text-slate-500 text-sm mt-2 line-clamp-2">
                        {child.metaDescription}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-3">
                      Read More
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
