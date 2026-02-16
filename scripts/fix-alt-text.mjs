#!/usr/bin/env node
/**
 * Fix missing/empty alt text on images in data files.
 * Derives descriptive alt text from image filenames and context.
 */
import { readFileSync, writeFileSync } from "fs";
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

// ─── ALT TEXT RULES ─────────────────────────────────────────────────
// Map filename patterns to alt text. Checked in order; first match wins.
const ALT_TEXT_RULES = [
  // Decorative/UI elements - empty alt is correct, but mark explicitly
  { pattern: /Quote_left-marks\.png/i, alt: "", decorative: true },
  { pattern: /Quote_-right-marks\.png/i, alt: "", decorative: true },
  { pattern: /Quote_right-marks\.png/i, alt: "", decorative: true },

  // Logos
  { pattern: /babypillars-logo/i, alt: "BabyPillars" },

  // Founder photos
  { pattern: /anat-pic1/i, alt: "Anat Furstenberg, developmental specialist and BabyPillars founder" },
  { pattern: /anat-thumb/i, alt: "Anat Furstenberg" },
  { pattern: /anat-help-email/i, alt: "Personalized email support from Anat" },
  { pattern: /sig-anat/i, alt: "Anat Furstenberg signature" },

  // Testimonial photos - derive name from filename
  { pattern: /Audrey-Anderson/i, alt: "Audrey Anderson, BabyPillars parent" },
  { pattern: /Lara-Kelly/i, alt: "Lara Kelly, BabyPillars parent" },
  { pattern: /Kristy-Sharrow/i, alt: "Kristy Sharrow, BabyPillars parent" },
  { pattern: /Anna-Smith/i, alt: "Anna Smith, BabyPillars parent" },
  { pattern: /Suzan-L\.-Artin/i, alt: "Suzan L. Artin, BabyPillars parent" },
  { pattern: /mom-July-Mier/i, alt: "July Mier, BabyPillars parent" },
  { pattern: /Marry-David/i, alt: "Marry David, BabyPillars parent" },
  { pattern: /Testimonial_Abby_Johnson/i, alt: "Abby Johnson, BabyPillars parent" },
  { pattern: /blank-women/i, alt: "BabyPillars parent testimonial" },
  { pattern: /pamela-/i, alt: "Pamela, BabyPillars parent" },
  { pattern: /test-[12]\./i, alt: "BabyPillars parent testimonial" },
  { pattern: /review-babypillar/i, alt: "BabyPillars parent review" },

  // Book covers
  { pattern: /What-to-Expext.*milestones.*E-Book/i, alt: "What to Expect: 0-24 Month Milestones e-book cover" },
  { pattern: /Raising-a-Healthy-Eater.*E-Book/i, alt: "Raising a Healthy Eater e-book cover" },
  { pattern: /From-Sleepless-to-Sound-Sleep.*Cover/i, alt: "From Sleepless to Sound Sleep book cover" },
  { pattern: /BREAST-FEEDING-Secrets.*Cover/i, alt: "Breastfeeding Secrets book cover" },
  { pattern: /Parenting-Version-3.*E-Book/i, alt: "Parenting Version 3.0 e-book cover" },

  // BP poster
  { pattern: /BP-POSTER-InPosts/i, alt: "BabyPillars related videos" },

  // Mom and baby
  { pattern: /mom-and-baby/i, alt: "Mother and baby during developmental activity" },
];

/**
 * Derive alt text from an image src using the filename.
 */
function getAltText(src, slug) {
  // Check rules first
  for (const rule of ALT_TEXT_RULES) {
    if (rule.pattern.test(src)) {
      return { alt: rule.alt, decorative: rule.decorative || false };
    }
  }

  // Fallback: derive from filename
  const filename = src.split("/").pop().replace(/\.[^.]+$/, "");
  // Convert filename patterns like "Getting-Ready-to-Crawl-2-6-9" to readable text
  const readable = filename
    .replace(/[-_]+/g, " ")           // hyphens/underscores to spaces
    .replace(/\s+\d+\s*[-]\s*\d+.*$/, "") // remove trailing number patterns like "2-6-9"
    .replace(/\s+\d+\s*$/, "")        // remove trailing numbers
    .replace(/\s+e\d+$/, "")          // remove WordPress edit IDs
    .replace(/\s+part\s*\d+/gi, "")   // remove "part1", "part2"
    .trim();

  if (readable.length < 3) {
    return { alt: `BabyPillars ${slug.replace(/-/g, " ")} image`, decorative: false };
  }

  return { alt: `${readable} - BabyPillars baby development`, decorative: false };
}

// ─── MAIN ───────────────────────────────────────────────────────────

let totalFixed = 0;

for (const file of files) {
  const filePath = resolve(root, file);
  let content = readFileSync(filePath, "utf-8");
  let fileFixed = 0;

  // Find current slug context for each img tag
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

  // Find all img tags with empty alt (alt="" or alt=\"\")
  // In the TS files, empty alt looks like: alt=\"\" or alt=""
  const imgRegex = /<img\s[^>]*?>/gi;
  let imgMatch;

  // Collect replacements
  const replacements = [];

  while ((imgMatch = imgRegex.exec(content)) !== null) {
    const tag = imgMatch[0];
    const hasAlt = /\balt\s*=/.test(tag);
    const hasEmptyAlt = /\balt\s*=\s*\\?"\\?"/.test(tag) || /\balt\s*=\s*""/.test(tag);
    const hasMeaningfulAlt = hasAlt && !hasEmptyAlt;

    if (hasMeaningfulAlt) continue; // Already has good alt text

    // Extract src
    const srcMatch = tag.match(/src\s*=\s*\\?"([^"\\]+)/);
    if (!srcMatch) continue;
    const src = srcMatch[1];

    const slug = getSlugAtIndex(imgMatch.index);
    const { alt, decorative } = getAltText(src, slug);

    let newTag;
    if (hasEmptyAlt) {
      // Replace existing empty alt with new alt text
      // Handle both: alt=\"\" and alt=""
      if (tag.includes('alt=\\"\\')) {
        newTag = tag.replace(/alt=\\"\\?"/, `alt=\\"${alt.replace(/"/g, '&quot;')}\\"`);
      } else {
        newTag = tag.replace(/alt=""/, `alt="${alt.replace(/"/g, '&quot;')}"`);
      }
    } else {
      // No alt attribute at all - add one before the closing >
      const altAttr = tag.includes('\\"')
        ? ` alt=\\"${alt.replace(/"/g, '&quot;')}\\"`
        : ` alt="${alt.replace(/"/g, '&quot;')}"`;
      newTag = tag.replace(/>$/, `${altAttr}>`);
    }

    if (newTag !== tag) {
      replacements.push({
        start: imgMatch.index,
        end: imgMatch.index + tag.length,
        oldTag: tag,
        newTag,
      });
    }
  }

  // Apply replacements in reverse order
  replacements.sort((a, b) => b.start - a.start);
  for (const r of replacements) {
    content = content.slice(0, r.start) + r.newTag + content.slice(r.end);
    fileFixed++;
  }

  if (fileFixed > 0) {
    writeFileSync(filePath, content, "utf-8");
  }

  totalFixed += fileFixed;
  console.log(`${file}: fixed ${fileFixed} images`);
}

console.log(`\nTotal: ${totalFixed} images fixed`);
