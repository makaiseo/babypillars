import Link from "next/link";
import type { Metadata } from "next";
import { wpBlogPostsBySlug, wpBlogPosts } from "../wpBlogData";
import BlogArticleContent from "../components/BlogArticleContent";

const originalPosts: Record<
  string,
  {
    title: string;
    excerpt: string;
    date: string;
    category: string;
    readTime: string;
    image: string;
    content: string[];
  }
> = {
  "why-environment-matters-more-than-exercises": {
    title: "Why Environment Matters More Than Exercises",
    excerpt:
      "Most parents focus on drills and activities. But research shows that the right environment does more for development than any exercise routine.",
    date: "February 10, 2026",
    category: "Development",
    readTime: "5 min read",
    image: "/anat.jpg",
    content: [
      "When most parents think about supporting their baby's development, they think about activities. Tummy time drills. Stacking exercises. Flash cards. But what if the most powerful thing you could do was change the space around your baby?",
      "That's the core insight behind the environment-first approach. Development doesn't happen because you push harder. It happens when your baby's nervous system is ready and the environment supports that readiness.",
      "Think about it this way: a baby doesn't learn to roll because you practiced rolling with them 20 times a day. They roll when their core strength, body awareness, and motivation all align. Your job isn't to force the milestone. Your job is to create the conditions where it emerges naturally.",
      "This is what we mean by environment-first. Instead of adding more activities to your day, you adjust the space. A clear floor area. The right surface. Minimal distractions. Appropriate clothing that doesn't restrict movement.",
      "These small changes compound over time. A baby who spends time on a firm, flat surface with room to move will develop differently than one who spends most of their time in bouncers, swings, and containers.",
      "The research supports this. Studies on motor development consistently show that babies who have more floor time and fewer restrictive devices reach motor milestones with greater ease. Not because they were drilled, but because their environment allowed their nervous system to do what it was already designed to do.",
      "So before you sign up for another baby class or buy another developmental toy, ask yourself: have I set up the environment first? That single question can transform your approach to your baby's first two years.",
    ],
  },
  "tummy-time-without-tears": {
    title: "Tummy Time Without the Tears",
    excerpt:
      "Tummy time doesn't have to be a battle. Learn how small environment changes can make your baby enjoy it naturally.",
    date: "February 3, 2026",
    category: "Practical Tips",
    readTime: "4 min read",
    image: "/anat.jpg",
    content: [
      "If tummy time in your house sounds like a crying session, you're not alone. It's one of the most common struggles parents face. But here's what most advice gets wrong: the problem usually isn't your baby. It's the setup.",
      "Most babies who resist tummy time are telling you something. They're not ready for the position you're putting them in, or the environment isn't supporting them properly.",
      "Start with the surface. A firm, flat surface at body temperature works best. Cold floors or slippery blankets make babies uncomfortable before they even begin. A simple yoga mat or play mat on the floor can make a huge difference.",
      "Next, think about timing. Tummy time right after a feed is almost guaranteed to fail. Try it when your baby is alert, calm, and has had a little time to digest. Early morning or after a nap often works well.",
      "Then consider positioning. Not every baby needs to go flat on their belly from day one. A rolled towel under the chest, time on your chest while you recline, or side-lying positions all count as tummy time precursors that build the same muscles.",
      "Finally, engagement matters. Get down on the floor at your baby's eye level. A small mirror, a high-contrast card, or simply your face gives them something to work toward. The motivation to lift their head comes from curiosity, not from being forced.",
      "When you adjust the environment instead of pushing through the tears, tummy time becomes something your baby actually wants to do. And that's when the real development happens.",
    ],
  },
  "when-should-my-baby-crawl": {
    title:
      "When Should My Baby Crawl? (And Why the Answer Might Surprise You)",
    excerpt:
      "Crawling timelines vary wildly. Here's what actually determines when your baby is ready and how to support that readiness.",
    date: "January 27, 2026",
    category: "Milestones",
    readTime: "6 min read",
    image: "/anat.jpg",
    content: [
      "If you've Googled 'when should my baby crawl,' you've probably seen a range somewhere between 6 and 10 months. But that range hides more than it reveals.",
      "Crawling isn't a single event. It's the visible result of dozens of smaller developmental steps that happen over weeks and months. Core strength, hip stability, weight-shifting ability, hand-eye coordination, and the motivation to move toward something all need to come together.",
      "Some babies crawl at 6 months. Some at 11. Some skip traditional crawling entirely and find other ways to move. The timeline matters far less than the quality of movement and the readiness behind it.",
      "What actually determines when your baby will crawl? Three things: nervous system maturation, physical readiness, and environmental opportunity.",
      "Nervous system maturation you can't rush. It happens on its own biological timeline. Physical readiness builds through all the positions and movements your baby practices before crawling: tummy time, rolling, pivoting, pushing up, rocking on hands and knees.",
      "But environmental opportunity? That's where you have real influence. A baby who spends most of their day in a bouncer, car seat, or being held doesn't get the floor time needed to build toward crawling. A baby with regular access to a clear floor space, interesting objects just out of reach, and the freedom to move will naturally progress toward crawling when their body is ready.",
      "So instead of worrying about the calendar, focus on the conditions. Give your baby the environment to explore, and trust their nervous system to do the rest.",
    ],
  },
  "stop-comparing-milestones": {
    title: "Stop Comparing Milestones: Every Baby Has Their Own Timeline",
    excerpt:
      "Comparison is the thief of confidence. Understanding nervous system readiness can free you from the milestone anxiety trap.",
    date: "January 20, 2026",
    category: "Mindset",
    readTime: "4 min read",
    image: "/anat.jpg",
    content: [
      "Your friend's baby is already sitting. The baby at the park is crawling. The one on Instagram seems to be walking at 9 months. And yours? Yours is doing their own thing. And that's exactly as it should be.",
      "Milestone comparison is one of the biggest sources of parental anxiety. It feels informative, but it's actually misleading. Because milestones aren't a race. They're markers on a path, and every baby walks that path differently.",
      "Here's what's really happening when another baby seems 'ahead': their nervous system matured in a slightly different order. Maybe their core strength developed faster. Maybe their temperament drives them to move more. Maybe their environment gave them more floor time. None of these factors mean your baby is behind.",
      "The developmental research is clear: there is an enormous range of normal. A baby who walks at 10 months and one who walks at 16 months will be indistinguishable by age 3. The early walker has no long-term advantage.",
      "What does matter is the quality of each stage. A baby who spends adequate time in each developmental position, building strength and coordination gradually, builds a stronger foundation than one who rushes through.",
      "So how do you escape the comparison trap? Focus on your baby's current stage, not the next one. Notice what they're working on right now. Celebrate the small progressions. And trust that readiness, not pressure, drives real development.",
      "That's the freedom the environment-first approach gives you. When you know the system, you stop needing to compare. You know exactly where your baby is and what comes next.",
    ],
  },
  "the-floor-is-your-babys-best-tool": {
    title: "The Floor Is Your Baby's Best Development Tool",
    excerpt:
      "Before you buy another toy, consider this: a clear floor space may be the single most important thing for your baby's motor development.",
    date: "January 13, 2026",
    category: "Environment",
    readTime: "5 min read",
    image: "/anat.jpg",
    content: [
      "In a world of developmental toys, baby gadgets, and stimulation apps, the most powerful development tool is already in your home. It's your floor.",
      "A clear, firm floor surface gives your baby something no toy can: freedom to move, explore, and discover their own body. Every major motor milestone, from rolling to crawling to walking, is practiced and refined on the floor.",
      "Yet many babies today spend surprisingly little time there. Between bouncers, swings, car seats, high chairs, and being held, some babies get less than 30 minutes of free floor time per day. That's not enough.",
      "Here's what floor time gives your baby: gravity. On the floor, your baby works against gravity in every position. On their back, they learn to bring hands to midline. On their tummy, they build neck and core strength. On hands and knees, they develop the stability needed for crawling.",
      "No toy replicates this. No device substitutes for it. The proprioceptive feedback your baby gets from pressing against a firm surface, shifting their weight, and feeling their body move through space is irreplaceable.",
      "Setting up good floor time is simple. You need a clean, firm surface, ideally a play mat or yoga mat. Remove small objects and hazards. Dress your baby in clothes that allow free movement. And then step back.",
      "You don't need to entertain them constantly. A few interesting objects within reach, your presence nearby, and the freedom to move is enough. Your baby's curiosity will do the rest. The floor isn't boring. For a developing baby, it's an entire world to explore.",
    ],
  },
  "what-rolling-really-means": {
    title: "What Rolling Really Means for Your Baby's Development",
    excerpt:
      "Rolling isn't just a cute milestone. It's a sign of core strength, body awareness, and nervous system integration. Here's what to look for.",
    date: "January 6, 2026",
    category: "Milestones",
    readTime: "5 min read",
    image: "/anat.jpg",
    content: [
      "The first time your baby rolls over is exciting. But rolling is far more than a cute moment for the camera. It's one of the most important developmental milestones in the first year, and understanding what it represents can change how you support your baby.",
      "Rolling requires the coordination of multiple body systems working together. Core muscles, neck strength, weight shifting, body awareness, and the vestibular system all need to be integrated. When a baby rolls, it means all of these systems have reached a threshold of readiness.",
      "There are different types of rolling, and they matter. Back to side is usually first. Then back to tummy. Then tummy to back. Each direction uses different muscle groups and represents different levels of body control.",
      "What many parents don't realize is that rolling starts long before the actual roll. Every time your baby turns their head to track an object, lifts their legs in the air, or reaches across their body, they're building the components of rolling.",
      "This is why the environment-first approach is so effective. Instead of trying to 'teach' rolling through exercises, you create conditions where your baby naturally practices these component movements. A firm surface, interesting objects placed slightly to one side, clothing that allows free movement.",
      "When to be concerned? If your baby shows a strong preference for turning only one direction, or if they're not showing any interest in rolling components by 5-6 months, it's worth a conversation with your pediatrician. But remember: the range of normal is wide.",
      "Rolling is your baby's first experience of independent mobility. It's the beginning of being able to change their own position in space. And it sets the foundation for everything that comes after: sitting, crawling, and eventually walking. Support it by supporting the environment, and trust the process.",
    ],
  },
};

function getPost(slug: string) {
  if (originalPosts[slug]) {
    return { ...originalPosts[slug], isOriginal: true as const };
  }
  const wpPost = wpBlogPostsBySlug[slug];
  if (wpPost) {
    return { ...wpPost, isOriginal: false as const };
  }
  return null;
}

function getAllSlugs() {
  return [...Object.keys(originalPosts), ...wpBlogPosts.map((p) => p.slug)];
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
          alt={
            !post.isOriginal && "imageAlt" in post
              ? post.imageAlt || post.title
              : post.title
          }
          className="w-full aspect-[16/9] object-cover rounded-2xl"
          src={post.image}
        />
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-6 pb-16">
        {post.isOriginal ? (
          <div>
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className="text-lg text-slate-700 leading-relaxed mb-6"
              >
                {paragraph}
              </p>
            ))}
          </div>
        ) : (
          <BlogArticleContent htmlContent={post.htmlContent} />
        )}
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
