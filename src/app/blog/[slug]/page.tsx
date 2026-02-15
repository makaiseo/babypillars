import Link from "next/link";
import type { Metadata } from "next";
import { wpBlogPostsBySlug, wpBlogPosts } from "../wpBlogData";
import BlogArticleContent from "../components/BlogArticleContent";

function getPost(slug: string) {
  const wpPost = wpBlogPostsBySlug[slug];
  if (wpPost) {
    return { ...wpPost, isOriginal: false as const };
  }
  return null;
}

function getAllSlugs() {
  return wpBlogPosts.map((p) => p.slug);
}

function getRelatedPosts(currentSlug: string, category: string) {
  const allSlugs = getAllSlugs();
  // Prefer same category, then others
  const sameCat = allSlugs.filter((s) => {
    if (s === currentSlug) return false;
    const p = getPost(s);
    return p && p.category === category;
  });
  const others = allSlugs.filter(
    (s) => s !== currentSlug && !sameCat.includes(s)
  );
  return [...sameCat, ...others].slice(0, 3);
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return { title: "Post Not Found - BabyPillars Blog" };
  }
  return {
    title: `${post.title} - BabyPillars Blog`,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return (
      <section className="py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-display text-slate-900 mb-4">
            Post Not Found
          </h1>
          <p className="text-slate-600 mb-8">
            The article you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/blog"
            className="text-primary font-medium hover:underline"
          >
            &larr; Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  const relatedSlugs = getRelatedPosts(slug, post.category);

  return (
    <article className="bg-white">
      {/* Back link */}
      <div className="max-w-3xl mx-auto px-6 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Back to Blog
        </Link>
      </div>

      {/* Title */}
      <header className="max-w-3xl mx-auto px-6 pt-8 pb-6">
        <h1 className="text-4xl md:text-5xl font-display leading-[1.15] text-slate-900">
          {post.title}
        </h1>

        {/* Author & Date */}
        <div className="flex items-center gap-3 mt-6">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
            <img
              src="/anat.jpg"
              alt="Anat Furstenberg"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">
              By Anat Furstenberg
            </p>
            <p className="text-sm text-slate-500">
              {post.date || "BabyPillars"}
              {post.readTime && (
                <>
                  <span className="mx-1.5">&middot;</span>
                  {post.readTime}
                </>
              )}
            </p>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="max-w-3xl mx-auto px-6 pb-10">
        <img
          alt={post.imageAlt || post.title}
          className="w-full aspect-[16/9] object-cover rounded-2xl"
          src={post.image}
        />
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-6 pb-16">
        <BlogArticleContent htmlContent={post.htmlContent} />
      </div>

      {/* You May Also Like */}
      <section className="bg-background-light py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-display text-slate-900 mb-8">
            You May Also Like
          </h2>
          <div className="space-y-6">
            {relatedSlugs.map((relatedSlug) => {
              const related = getPost(relatedSlug);
              if (!related) return null;
              return (
                <Link
                  key={relatedSlug}
                  href={`/blog/${relatedSlug}`}
                  className="group flex gap-5 items-start bg-white rounded-2xl p-4 border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <img
                    alt={related.title}
                    className="w-28 h-20 md:w-36 md:h-24 rounded-xl object-cover shrink-0"
                    src={related.image}
                  />
                  <div className="min-w-0 py-1">
                    <h3 className="text-lg font-display text-slate-900 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-slate-500 text-sm mt-1.5 line-clamp-2 leading-relaxed">
                      {related.excerpt ||
                        `Learn more about ${related.category.toLowerCase()} for your baby.`}
                    </p>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-2">
                      Read More
                      <span className="material-symbols-outlined text-base">
                        arrow_forward
                      </span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </article>
  );
}
