#!/usr/bin/env node
/**
 * Find images missing alt text in data files.
 */
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const files = [
  "src/app/blog/wpBlogData.ts",
  "src/app/data/ageRangePages.ts",
  "src/app/data/specialNeedsPages.ts",
  "src/app/data/standalonePages.ts",
  "src/app/data/booksPages.ts",
];

let totalIssues = 0;

for (const file of files) {
  const content = readFileSync(resolve(root, file), "utf-8");

  // Find all slugs and their positions
  const slugPositions = [];
  const slugRegex = /slug:\s*"([^"]+)"/g;
  let m;
  while ((m = slugRegex.exec(content)) !== null) {
    slugPositions.push({ slug: m[1], index: m.index });
  }

  function getSlugAtIndex(idx) {
    let best = "unknown";
    for (const sp of slugPositions) {
      if (sp.index <= idx) best = sp.slug;
      else break;
    }
    return best;
  }

  // Find all <img tags (escaped in TS strings)
  // In the TS file, img tags look like: <img src=\\"...\\">  or <img src=\\"/path\\" alt=\\"...\\" ...>
  const imgRegex = /<img\s[^>]*?>/gi;
  const issues = [];

  let imgMatch;
  while ((imgMatch = imgRegex.exec(content)) !== null) {
    const tag = imgMatch[0];
    const hasAlt = /\balt\s*=/.test(tag);
    const hasEmptyAlt = /\balt\s*=\s*\\?"\\?"/.test(tag) || /\balt\s*=\s*""/.test(tag);

    if (!hasAlt || hasEmptyAlt) {
      const slug = getSlugAtIndex(imgMatch.index);
      // Extract src for identification
      const srcMatch = tag.match(/src\s*=\s*\\?"([^"\\]+)/);
      const src = srcMatch ? srcMatch[1] : "unknown-src";
      issues.push({
        slug,
        type: hasEmptyAlt ? "empty-alt" : "missing-alt",
        src,
        tag: tag.length > 150 ? tag.slice(0, 150) + "..." : tag,
      });
    }
  }

  console.log(`\n${file}:`);
  if (issues.length === 0) {
    console.log("  No issues found");
  } else {
    for (const issue of issues) {
      totalIssues++;
      console.log(`  [${issue.type}] slug="${issue.slug}" src="${issue.src}"`);
    }
  }
}

console.log(`\nTotal issues: ${totalIssues}`);
