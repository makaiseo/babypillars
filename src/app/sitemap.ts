import type { MetadataRoute } from "next";
import { wpBlogPosts } from "./blog/wpBlogData";
import { booksPages } from "./data/booksPages";
import { specialNeedsPages } from "./data/specialNeedsPages";

const BASE_URL = "https://babypillars.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/pricing/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/how-it-works/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/about-babypillars/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog/`, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/milestone-tracker/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/babypillars-24-bundle/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/babypillars-offers/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact/`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/books/`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/special-needs-baby/`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/parent-learning-hub/`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/0-3-months-baby/`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/3-6-months-baby/`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/6-9-months-baby/`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/9-12-months-baby/`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/12-24-months-baby/`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/baby-development-0-6-month/`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/baby-development-6-12-month/`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/online-baby-classes/`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/private-online-sessions/`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/sleepless-to-sound-sleep-ebook/`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/anat-furstenberg-first-step/`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/cplp-care/`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/torticollis/`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/torticollis-in-babies-plan/`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/milestones-list/`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/newsletter/`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/support/`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/terms-conditions/`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/parent-learning-hub/growth-spurts-in-babies/`, changeFrequency: "monthly", priority: 0.6 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = wpBlogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}/`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const bookRoutes: MetadataRoute.Sitemap = booksPages
    .filter((page) => page.slug !== "books")
    .map((page) => ({
      url: `${BASE_URL}/books/${page.slug}/`,
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  const specialNeedsRoutes: MetadataRoute.Sitemap = specialNeedsPages
    .filter((page) => page.slug !== "special-needs-baby")
    .map((page) => ({
      url: `${BASE_URL}/special-needs-baby/${page.slug}/`,
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  return [...staticRoutes, ...blogRoutes, ...bookRoutes, ...specialNeedsRoutes];
}
