import type { MetadataRoute } from "next";
import { wpBlogPosts } from "./blog/wpBlogData";
import { booksSlugs } from "./data/booksPages";
import { specialNeedsSlugs } from "./data/specialNeedsPages";

const BASE_URL = "https://babypillars.com";

function parseDate(raw: string): Date | undefined {
  if (!raw) return undefined;
  const d = new Date(raw);
  return isNaN(d.getTime()) ? undefined : d;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1.0, lastModified: now },
    { url: `${BASE_URL}/pricing/`, changeFrequency: "monthly", priority: 0.9, lastModified: now },
    { url: `${BASE_URL}/how-it-works/`, changeFrequency: "monthly", priority: 0.9, lastModified: now },
    { url: `${BASE_URL}/about-babypillars/`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${BASE_URL}/blog/`, changeFrequency: "daily", priority: 0.9, lastModified: now },
    { url: `${BASE_URL}/milestone-tracker/`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${BASE_URL}/babypillars-24-bundle/`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${BASE_URL}/babypillars-offers/`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${BASE_URL}/contact/`, changeFrequency: "yearly", priority: 0.6, lastModified: now },
    { url: `${BASE_URL}/books/`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    { url: `${BASE_URL}/special-needs-baby/`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    { url: `${BASE_URL}/parent-learning-hub/`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    { url: `${BASE_URL}/0-3-months-baby/`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    { url: `${BASE_URL}/3-6-months-baby/`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    { url: `${BASE_URL}/6-9-months-baby/`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    { url: `${BASE_URL}/9-12-months-baby/`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    { url: `${BASE_URL}/12-24-months-baby/`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    { url: `${BASE_URL}/baby-development-0-6-month/`, changeFrequency: "monthly", priority: 0.6, lastModified: now },
    { url: `${BASE_URL}/baby-development-6-12-month/`, changeFrequency: "monthly", priority: 0.6, lastModified: now },
    { url: `${BASE_URL}/online-baby-classes/`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    { url: `${BASE_URL}/private-online-sessions/`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    { url: `${BASE_URL}/sleepless-to-sound-sleep-ebook/`, changeFrequency: "monthly", priority: 0.6, lastModified: now },
    { url: `${BASE_URL}/anat-furstenberg-first-step/`, changeFrequency: "monthly", priority: 0.6, lastModified: now },
    { url: `${BASE_URL}/one-on-one-with-anat-videos/`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    { url: `${BASE_URL}/cplp-care/`, changeFrequency: "monthly", priority: 0.6, lastModified: now },
    { url: `${BASE_URL}/torticollis/`, changeFrequency: "monthly", priority: 0.6, lastModified: now },
    { url: `${BASE_URL}/torticollis-in-babies-plan/`, changeFrequency: "monthly", priority: 0.6, lastModified: now },
    { url: `${BASE_URL}/milestones-list/`, changeFrequency: "monthly", priority: 0.6, lastModified: now },
    { url: `${BASE_URL}/newsletter/`, changeFrequency: "monthly", priority: 0.5, lastModified: now },
    { url: `${BASE_URL}/support/`, changeFrequency: "yearly", priority: 0.5, lastModified: now },
    { url: `${BASE_URL}/terms-conditions/`, changeFrequency: "yearly", priority: 0.3, lastModified: now },
    { url: `${BASE_URL}/parent-learning-hub/growth-spurts-in-babies/`, changeFrequency: "monthly", priority: 0.6, lastModified: now },
  ];

  const originalBlogRoutes: MetadataRoute.Sitemap = [
    "tummy-time",
    "breastfeeding-tips",
    "baby-sitting",
    "baby-sleep-chart-understanding-your-babys-sleep-patterns",
    "infant-growth-spurts-the-ultimate-guide",
  ].map((slug) => ({
    url: `${BASE_URL}/blog/${slug}/`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
    lastModified: now,
  }));

  const blogRoutes: MetadataRoute.Sitemap = wpBlogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}/`,
    changeFrequency: "monthly",
    priority: 0.6,
    lastModified: parseDate(post.date) ?? now,
  }));

  const bookRoutes: MetadataRoute.Sitemap = booksSlugs
    .filter((slug) => slug !== "books")
    .map((slug) => ({
      url: `${BASE_URL}/books/${slug}/`,
      changeFrequency: "monthly",
      priority: 0.6,
      lastModified: now,
    }));

  const specialNeedsRoutes: MetadataRoute.Sitemap = specialNeedsSlugs
    .filter((slug) => slug !== "special-needs-baby")
    .map((slug) => ({
      url: `${BASE_URL}/special-needs-baby/${slug}/`,
      changeFrequency: "monthly",
      priority: 0.6,
      lastModified: now,
    }));

  return [...staticRoutes, ...originalBlogRoutes, ...blogRoutes, ...bookRoutes, ...specialNeedsRoutes];
}
