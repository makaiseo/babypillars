import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import SectionBadge from "../components/SectionBadge";
import { wpBlogPosts } from "./wpBlogData";

export const metadata: Metadata = {
  title: "Blog - BabyPillars",
  description:
    "Expert insights on baby development, environment-first parenting, and milestone guidance from the BabyPillars team.",
  openGraph: {
    title: "Blog - BabyPillars",
    description:
      "Expert insights on baby development, environment-first parenting, and milestone guidance from the BabyPillars team.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - BabyPillars",
    description:
      "Expert insights on baby development, environment-first parenting, and milestone guidance from the BabyPillars team.",
  },
};

const posts = wpBlogPosts.map((p) => ({
  slug: p.slug,
  title: p.title,
  excerpt: p.excerpt,
  date: p.date,
  category: p.category,
  readTime: p.readTime,
  image: p.image,
}));

export default function BlogPage() {
  if (!posts.length) return null;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-24 overflow-hidden hero-pattern">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <SectionBadge text="Blog" />
            <h1 className="text-6xl md:text-7xl font-display leading-[1.1] text-slate-900 mb-8">
              Insights for{" "}
              <span className="italic text-primary">confident</span> parents.
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl">
              Expert guidance on baby development, environment-first parenting,
              and the science behind milestones.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href={`/blog/${posts[0].slug}`}
            className="group grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative overflow-hidden rounded-3xl aspect-[16/10]">
              <Image
                alt={posts[0].title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                src={posts[0].image}
              />
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Featured
                </span>
              </div>
            </div>
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                {posts[0].category}
              </span>
              <h2 className="text-4xl font-display text-slate-900 mt-2 mb-4 group-hover:text-primary transition-colors">
                {posts[0].title}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {posts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span>{posts[0].date}</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span>{posts[0].readTime}</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-display text-slate-900 mb-12">
            All Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-primary/30 transition-all hover:shadow-lg"
              >
                <div className="overflow-hidden aspect-[16/10] relative">
                  <Image
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    src={post.image}
                  />
                </div>
                <div className="p-8">
                  <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-display text-slate-900 mt-2 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    {post.date && <span>{post.date}</span>}
                    {post.date && (
                      <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    )}
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
