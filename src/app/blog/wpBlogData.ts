// Aggregator — imports from part files to avoid OOM during compilation
import type { WpBlogPost } from './wpBlogData.types';
export type { WpBlogPost };
import { wpBlogPostsPart1 } from './wpBlogData.part1';
import { wpBlogPostsPart2 } from './wpBlogData.part2';
import { wpBlogPostsPart3 } from './wpBlogData.part3';

export const wpBlogPosts: WpBlogPost[] = [
  ...wpBlogPostsPart1,
  ...wpBlogPostsPart2,
  ...wpBlogPostsPart3,
];

export const wpBlogSlugs: string[] = wpBlogPosts.map((p) => p.slug);

export const wpBlogPostsBySlug: Record<string, WpBlogPost> = Object.fromEntries(
  wpBlogPosts.map((p) => [p.slug, p])
);
