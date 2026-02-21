// Aggregator — imports from part files to avoid OOM during compilation
import type { PageData } from './specialNeedsPages.types';
export type { PageData };
import { specialNeedsPagesPart1 } from './specialNeedsPages.part1';
import { specialNeedsPagesPart2 } from './specialNeedsPages.part2';
import { specialNeedsPagesPart3 } from './specialNeedsPages.part3';

export const specialNeedsPages: PageData[] = [
  ...specialNeedsPagesPart1,
  ...specialNeedsPagesPart2,
  ...specialNeedsPagesPart3,
];

export const specialNeedsPagesBySlug: Record<string, PageData> = Object.fromEntries(
  specialNeedsPages.map((page) => [page.slug, page])
);

export const specialNeedsSlugs: string[] = specialNeedsPages.map((page) => page.slug);
