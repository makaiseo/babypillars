import type { Metadata } from "next";
import { canonical } from '../lib/seo';
import Link from "next/link";
import { standalonePagesBySlug } from "@/app/data/standalonePages";
import PageContent from "@/app/components/PageContent";

const landingPage = standalonePagesBySlug["parent-learning-hub"] || null;

const childSlugs = ["growth-spurts-in-babies"];

export const metadata: Metadata = {
  ...canonical('/parent-learning-hub/'),
  title: landingPage?.title ? `${landingPage.title} - BabyPillars` : "Parent Learning Hub - BabyPillars",
  description: landingPage?.metaDescription || "",
  openGraph: {
    title: landingPage?.title ? `${landingPage.title} - BabyPillars` : "Parent Learning Hub - BabyPillars",
    description: landingPage?.metaDescription || "",
    ...(landingPage?.featuredImage && { images: [{ url: landingPage.featuredImage, width: 1200, height: 630, alt: landingPage?.title || "BabyPillars" }] }),
  },
  twitter: {
    card: "summary_large_image",
    title: landingPage?.title ? `${landingPage.title} - BabyPillars` : "Parent Learning Hub - BabyPillars",
    description: landingPage?.metaDescription || "",
    ...(landingPage?.featuredImage && { images: [landingPage.featuredImage] }),
  },
};

export default function Page() {
  const childPages = childSlugs
    .map((slug) => standalonePagesBySlug[slug])
    .filter(Boolean);

  return (
    <div className="bg-white">
      {landingPage && <PageContent page={landingPage} />}

      {childPages.length > 0 && (
        <section className="py-16 bg-background-light">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-display text-slate-900 mb-10 text-center">
              Topics
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {childPages.map((child) => (
                <Link
                  key={child.slug}
                  href={`/parent-learning-hub/${child.slug}`}
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
