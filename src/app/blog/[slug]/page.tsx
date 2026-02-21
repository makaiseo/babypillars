import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { wpBlogPostsBySlug, wpBlogPosts } from "../wpBlogData";
import BlogArticleContent from "../components/BlogArticleContent";
import { parseHtmlContent } from "../../lib/parseArticle";

const META_OVERRIDES: Record<string, { title: string; description: string }> = {
  babyhandsmouth: {
    title: "Baby Eating Hands at 3-4 Months: Normal or Teething? | BabyPillars",
    description:
      "Your baby aggressively chewing their hands is completely normal — here's what it means, when it's a hunger cue, and what you should do about it.",
  },
  "baby-cradling-important": {
    title: "Why Cradling Your Baby Matters for Brain & Motor Development | BabyPillars",
    description:
      "Cradling isn't just comforting — it directly shapes your baby's motor milestones and sensory development. Expert guide from Anat Furstenberg.",
  },
  "desanto-shinawi-in-babies": {
    title: "DeSanto-Shinawi Syndrome in Babies: Signs, Development & Support | BabyPillars",
    description:
      "Complete guide to DeSanto-Shinawi syndrome in infants — causes, developmental impacts, therapies, and how to support your baby's milestones.",
  },
  "when-do-babies-eyes-change-color": {
    title: "When Do Babies' Eyes Change Color? (Timeline + What Parents Ask) | BabyPillars",
    description:
      "Most babies' eyes change color between 6–12 months. Here's the exact timeline, what affects eye color, and when it's permanent.",
  },
};

function getPost(slug: string) {
  return wpBlogPostsBySlug[slug] ?? null;
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
  const ogImage = post.image.startsWith("http")
    ? post.image
    : `https://babypillars.com${post.image}`;
  const override = META_OVERRIDES[slug];
  const title = override?.title ?? `${post.title} | BabyPillars`;
  const description = override?.description ?? post.excerpt;
  return {
    title,
    description,
    alternates: {
      canonical: `https://babypillars.com/blog/${slug}/`,
    },
    openGraph: {
      type: "article",
      title,
      description,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
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
  const parsedContent = parseHtmlContent(post.htmlContent);

  const postImage = post.image.startsWith("http")
    ? post.image
    : `https://babypillars.com${post.image}`;
  const dateISO = post.date
    ? (() => { try { return new Date(post.date).toISOString().split("T")[0]; } catch { return undefined; } })()
    : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: postImage,
    ...(dateISO ? { datePublished: dateISO, dateModified: dateISO } : {}),
    author: {
      "@type": "Person",
      name: "Anat Furstenberg",
      url: "https://babypillars.com/about-babypillars",
    },
    publisher: {
      "@type": "Organization",
      name: "BabyPillars",
      url: "https://babypillars.com",
      logo: "https://babypillars.com/logo.png",
    },
    mainEntityOfPage: `https://babypillars.com/blog/${slug}`,
  };

  const faqJsonLd =
    parsedContent.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: parsedContent.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null;

  return (
    <article className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
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
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden relative">
            <Image
              src="/anat.jpg"
              alt="Anat Furstenberg"
              fill
              sizes="40px"
              className="object-cover"
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
        <div className="aspect-[16/9] relative overflow-hidden rounded-2xl">
          <Image
            alt={post.imageAlt || post.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            src={post.image}
            priority
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-6 pb-16">
        <BlogArticleContent parsedContent={parsedContent} />
      </div>

      {/* Post CTA */}
      <div className="max-w-3xl mx-auto px-6 pb-8">
        <div className="rounded-2xl bg-primary/10 border border-primary/20 p-8 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            Want to go deeper?
          </p>
          <h3 className="text-2xl font-display text-slate-900 mb-3">
            Get the full development system for your baby
          </h3>
          <p className="text-slate-600 mb-6 max-w-md mx-auto">
            Week-by-week guidance, milestone tracking, and expert video classes — all in one place.
          </p>
          <Link
            href="/pricing/"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            See Plans &amp; Pricing
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </div>
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
                  <div className="w-28 h-20 md:w-36 md:h-24 rounded-xl overflow-hidden shrink-0 relative">
                    <Image
                      alt={related.title}
                      fill
                      sizes="144px"
                      className="object-cover"
                      src={related.image}
                    />
                  </div>
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
