import Link from "next/link";
import type { Metadata } from "next";
import SectionBadge from "../components/SectionBadge";
import { wpBlogPosts } from "./wpBlogData";

export const metadata: Metadata = {
  title: "Blog - BabyPillars",
  description:
    "Expert insights on baby development, environment-first parenting, and milestone guidance from the BabyPillars team.",
};

const originalPosts = [
  {
    slug: "why-environment-matters-more-than-exercises",
    title: "Why Environment Matters More Than Exercises",
    excerpt:
      "Most parents focus on drills and activities. But research shows that the right environment does more for development than any exercise routine.",
    date: "February 10, 2026",
    category: "Development",
    readTime: "5 min read",
    image: "/anat.jpg",
  },
  {
    slug: "tummy-time-without-tears",
    title: "Tummy Time Without the Tears",
    excerpt:
      "Tummy time doesn't have to be a battle. Learn how small environment changes can make your baby enjoy it naturally.",
    date: "February 3, 2026",
    category: "Practical Tips",
    readTime: "4 min read",
    image: "/anat.jpg",
  },
  {
    slug: "when-should-my-baby-crawl",
    title: "When Should My Baby Crawl? (And Why the Answer Might Surprise You)",
    excerpt:
      "Crawling timelines vary wildly. Here's what actually determines when your baby is ready and how to support that readiness.",
    date: "January 27, 2026",
    category: "Milestones",
    readTime: "6 min read",
    image: "/anat.jpg",
  },
  {
    slug: "stop-comparing-milestones",
    title: "Stop Comparing Milestones: Every Baby Has Their Own Timeline",
    excerpt:
      "Comparison is the thief of confidence. Understanding nervous system readiness can free you from the milestone anxiety trap.",
    date: "January 20, 2026",
    category: "Mindset",
    readTime: "4 min read",
    image: "/anat.jpg",
  },
  {
    slug: "the-floor-is-your-babys-best-tool",
    title: "The Floor Is Your Baby's Best Development Tool",
    excerpt:
      "Before you buy another toy, consider this: a clear floor space may be the single most important thing for your baby's motor development.",
    date: "January 13, 2026",
    category: "Environment",
    readTime: "5 min read",
    image: "/anat.jpg",
  },
  {
    slug: "what-rolling-really-means",
    title: "What Rolling Really Means for Your Baby's Development",
    excerpt:
      "Rolling isn't just a cute milestone. It's a sign of core strength, body awareness, and nervous system integration. Here's what to look for.",
    date: "January 6, 2026",
    category: "Milestones",
    readTime: "5 min read",
    image: "/anat.jpg",
  },
];

const posts = [
  ...originalPosts,
  ...wpBlogPosts.map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    date: p.date,
    category: p.category,
    readTime: p.readTime,
    image: p.image,
  })),
];

export default function BlogPage() {
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
            <div className="relative overflow-hidden rounded-3xl">
              <img
                alt={posts[0].title}
                className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
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
                <div className="overflow-hidden">
                  <img
                    alt={post.title}
                    className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
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
