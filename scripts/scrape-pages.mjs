#!/usr/bin/env node
/**
 * Scraper for babypillars.com WordPress pages.
 * Fetches ~50 content pages, extracts content, downloads images,
 * and generates TypeScript data files for the Next.js site.
 *
 * Usage: node scripts/scrape-pages.mjs
 */

import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PUBLIC_DIR = join(ROOT, "public", "pages");
const DATA_DIR = join(ROOT, "src", "app", "data");

// ── Page definitions ──────────────────────────────────────────────────
const AGE_RANGE_PAGES = [
  "0-3-months-baby",
  "3-6-months-baby",
  "6-9-months-baby",
  "9-12-months-baby",
  "12-24-months-baby",
  "baby-development-0-6-month",
  "baby-development-6-12-month",
];

const SPECIAL_NEEDS_CHILDREN = [
  "down-syndrome-in-babies",
  "autism-in-babies",
  "cerebral-palsy-in-babies",
  "angelman-syndrome-babies",
  "cri-du-chat-syndrome-in-babies",
  "desanto-shinawi-in-babies",
  "wolf-hirschhorn-syndrome-in-babies",
  "emanuel-syndrome-in-babies",
  "rett-syndrome-in-babies",
  "kcnq2-gene-mutation-in-babies",
  "prader-willi-syndrome-in-babies",
  "williams-syndrome-in-babies",
  "spina-bifida-in-babies",
  "muscular-dystrophy-in-babies",
  "fragile-x-syndrome-in-babies",
  "global-developmental-delay-in-babies",
  "cp-center-specialist",
  "cp-baby-birth",
  "cp-help-assistance",
  "cp-therapy",
  "cp-treatment",
  "cp-care",
];

const SPECIAL_NEEDS_PAGES = [
  { slug: "special-needs-baby", isLanding: true },
  ...SPECIAL_NEEDS_CHILDREN.map((slug) => ({
    slug: `special-needs-baby/${slug}`,
    isLanding: false,
  })),
];

const BOOKS_CHILDREN = [
  "milestones-for-0-24-month-babies",
  "free-book-download",
  "raising-a-healthy-eater",
  "from-sleepless-to-sound-sleep-free-downloadable-book",
  "breast-feeding-secrets-free-downloadable-book",
  "parenting-version-3-downloadable-book",
];

const BOOKS_PAGES = [
  { slug: "books", isLanding: true },
  ...BOOKS_CHILDREN.map((slug) => ({ slug: `books/${slug}`, isLanding: false })),
];

const STANDALONE_PAGES = [
  "torticollis",
  "torticollis-in-babies-plan",
  "private-online-sessions",
  "online-baby-classes",
  "parent-learning-hub",
  "parent-learning-hub/growth-spurts-in-babies",
  "support",
  "terms-conditions",
  "newsletter",
  "milestones-list",
  "anat-furstenberg-first-step",
  "cplp-care",
  "sleepless-to-sound-sleep-ebook",
];

// ── Helpers ───────────────────────────────────────────────────────────

function ensureDir(dir) {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}

async function fetchPage(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; BabyPillarsMigrationBot/1.0)",
      },
    });
    clearTimeout(timeout);
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    return await res.text();
  } catch (err) {
    clearTimeout(timeout);
    throw err;
  }
}

async function downloadImage(url, destPath) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30000);
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { "User-Agent": "Mozilla/5.0 (compatible; BabyPillarsMigrationBot/1.0)" },
    });
    clearTimeout(timeout);
    if (!res.ok) {
      console.warn(`  ⚠ Failed to download image: ${url} (${res.status})`);
      return false;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    writeFileSync(destPath, buffer);
    return true;
  } catch (err) {
    console.warn(`  ⚠ Error downloading image: ${url} - ${err.message}`);
    return false;
  }
}

// ── HTML extraction ───────────────────────────────────────────────────

function extractTitle(html) {
  // Try og:title first, then <title>, then <h1>
  const ogMatch = html.match(/<meta\s+property=["']og:title["']\s+content=["']([^"']+)["']/i);
  if (ogMatch) return decodeEntities(ogMatch[1]);

  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (titleMatch) return decodeEntities(titleMatch[1]).replace(/\s*[-–|].*BabyPillars.*$/i, "").trim();

  const h1Match = html.match(/<h1[^>]*>([^<]+)<\/h1>/i);
  if (h1Match) return decodeEntities(h1Match[1]);

  return "";
}

function extractMetaDescription(html) {
  const match = html.match(/<meta\s+(?:name=["']description["']\s+content=["']([^"']+)["']|content=["']([^"']+)["']\s+name=["']description["'])/i);
  if (match) return decodeEntities(match[1] || match[2]);
  return "";
}

function extractFeaturedImage(html) {
  // Try og:image
  const ogMatch = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i);
  if (ogMatch) return ogMatch[1];
  return "";
}

function extractMainContent(html) {
  // Try multiple content extraction strategies

  // Strategy 1: Thrive content wrapper
  let match = html.match(/<div[^>]*class="[^"]*tve_shortcode_rendered[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<!--\s*\/?tcb/i);
  if (match) return match[1];

  // Strategy 2: Look for article or main content area
  match = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
  if (match) return match[1];

  // Strategy 3: Thrive content builder
  match = html.match(/<div[^>]*class="[^"]*thrv_wrapper[^"]*"[^>]*>([\s\S]*)/i);
  if (match) {
    // Get everything within tve wrappers
    return match[1];
  }

  // Strategy 4: entry-content (common WordPress)
  match = html.match(/<div[^>]*class="[^"]*entry-content[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
  if (match) return match[1];

  // Strategy 5: Find content between the main header and footer
  match = html.match(/<div[^>]*id="content"[^>]*>([\s\S]*?)<\/div>\s*<!--\s*#content/i);
  if (match) return match[1];

  // Strategy 6: broad Thrive Architect content extraction
  match = html.match(/<div[^>]*class="[^"]*tve-content-guard[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/i);
  if (match) return match[1];

  // Fallback: extract body content minus scripts/styles
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (bodyMatch) {
    let body = bodyMatch[1];
    body = body.replace(/<script[\s\S]*?<\/script>/gi, "");
    body = body.replace(/<style[\s\S]*?<\/style>/gi, "");
    body = body.replace(/<nav[\s\S]*?<\/nav>/gi, "");
    body = body.replace(/<header[\s\S]*?<\/header>/gi, "");
    body = body.replace(/<footer[\s\S]*?<\/footer>/gi, "");
    return body;
  }

  return "";
}

function cleanHtml(html) {
  let cleaned = html;

  // Remove Thrive-specific inline styles
  cleaned = cleaned.replace(/\s+style="[^"]*"/gi, "");

  // Remove Thrive-specific classes but keep semantic ones
  cleaned = cleaned.replace(/\s+class="[^"]*"/gi, "");

  // Remove Thrive-specific data attributes
  cleaned = cleaned.replace(/\s+data-[a-z-]+="[^"]*"/gi, "");

  // Remove empty divs
  cleaned = cleaned.replace(/<div>\s*<\/div>/gi, "");

  // Remove Thrive wrapper divs but keep content
  cleaned = cleaned.replace(/<div[^>]*>\s*((?:<(?:h[1-6]|p|ul|ol|table|blockquote|figure|img)[^>]*>[\s\S]*?<\/(?:h[1-6]|p|ul|ol|table|blockquote|figure)>|<img[^>]*\/?>)+)\s*<\/div>/gi, "$1");

  // Clean up nested empty spans
  cleaned = cleaned.replace(/<span>\s*<\/span>/gi, "");

  // Clean up spans that just wrap text (no meaningful attributes left)
  cleaned = cleaned.replace(/<span>([^<]*)<\/span>/gi, "$1");

  // Remove empty paragraphs
  cleaned = cleaned.replace(/<p>\s*<\/p>/gi, "");
  cleaned = cleaned.replace(/<p>\s*&nbsp;\s*<\/p>/gi, "");

  // Clean up excessive whitespace
  cleaned = cleaned.replace(/\n{3,}/g, "\n\n");

  // Remove broken attribute fragments like ="", tve-droppable""=""
  cleaned = cleaned.replace(/\s+[a-z-]+""="[^"]*"/gi, "");
  cleaned = cleaned.replace(/\s+"=""\s*/gi, " ");

  return cleaned.trim();
}

function decodeEntities(str) {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#039;/g, "'")
    .replace(/&#8230;/g, "…")
    .replace(/&hellip;/g, "…")
    .replace(/&nbsp;/g, " ");
}

// ── Image processing ──────────────────────────────────────────────────

async function processImages(htmlContent, slug) {
  const imageDir = join(PUBLIC_DIR, slug.replace(/\//g, "-"));
  ensureDir(imageDir);

  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let processedHtml = htmlContent;
  const matches = [...htmlContent.matchAll(imgRegex)];
  const downloaded = new Set();

  for (const match of matches) {
    const originalSrc = match[1];
    if (downloaded.has(originalSrc)) continue;
    downloaded.add(originalSrc);

    // Only download from babypillars.com or relative URLs
    if (
      !originalSrc.includes("babypillars.com") &&
      !originalSrc.startsWith("/") &&
      !originalSrc.startsWith("http")
    ) {
      continue;
    }

    // Skip external non-babypillars images
    if (
      originalSrc.startsWith("http") &&
      !originalSrc.includes("babypillars.com")
    ) {
      continue;
    }

    const urlObj = new URL(originalSrc, "https://babypillars.com");
    const filename = urlObj.pathname.split("/").pop();
    if (!filename) continue;

    const destPath = join(imageDir, filename);
    const publicPath = `/pages/${slug.replace(/\//g, "-")}/${filename}`;

    if (!existsSync(destPath)) {
      const ok = await downloadImage(urlObj.href, destPath);
      if (!ok) continue;
      console.log(`  ✓ Downloaded: ${filename}`);
    }

    // Replace all occurrences of this src in the HTML
    processedHtml = processedHtml.split(originalSrc).join(publicPath);
  }

  return processedHtml;
}

async function processFeaturedImage(imageUrl, slug) {
  if (!imageUrl) return "";

  const imageDir = join(PUBLIC_DIR, slug.replace(/\//g, "-"));
  ensureDir(imageDir);

  const urlObj = new URL(imageUrl, "https://babypillars.com");
  const filename = "featured-" + urlObj.pathname.split("/").pop();
  if (!filename) return "";

  const destPath = join(imageDir, filename);
  const publicPath = `/pages/${slug.replace(/\//g, "-")}/${filename}`;

  if (!existsSync(destPath)) {
    const ok = await downloadImage(urlObj.href, destPath);
    if (!ok) return "";
    console.log(`  ✓ Downloaded featured: ${filename}`);
  }

  return publicPath;
}

// ── Scrape a single page ──────────────────────────────────────────────

async function scrapePage(slug) {
  const url = `https://babypillars.com/${slug}/`;
  console.log(`\nScraping: ${url}`);

  let rawHtml;
  try {
    rawHtml = await fetchPage(url);
  } catch (err) {
    console.error(`  ✗ Failed to fetch: ${err.message}`);
    return null;
  }

  const title = extractTitle(rawHtml);
  const metaDescription = extractMetaDescription(rawHtml);
  const featuredImageUrl = extractFeaturedImage(rawHtml);

  let mainContent = extractMainContent(rawHtml);
  if (!mainContent || mainContent.length < 100) {
    console.warn(`  ⚠ Very little content extracted (${mainContent?.length || 0} chars)`);
  }

  // Clean HTML
  mainContent = cleanHtml(mainContent);

  // Download and rewrite images
  mainContent = await processImages(mainContent, slug);
  const featuredImage = await processFeaturedImage(featuredImageUrl, slug);

  console.log(`  ✓ Title: ${title}`);
  console.log(`  ✓ Content: ${mainContent.length} chars`);

  return {
    slug: slug.includes("/") ? slug.split("/").pop() : slug,
    fullSlug: slug,
    title,
    metaDescription,
    featuredImage,
    htmlContent: mainContent,
  };
}

// ── Generate TypeScript data file ─────────────────────────────────────

function generateDataFile(filename, exportName, pages, category) {
  const escapedPages = pages
    .filter(Boolean)
    .map((page) => {
      const escaped = {
        slug: escapeTs(page.slug),
        title: escapeTs(page.title),
        metaDescription: escapeTs(page.metaDescription),
        category: escapeTs(category),
        featuredImage: escapeTs(page.featuredImage),
        htmlContent: escapeTs(page.htmlContent),
      };
      return `  {
    slug: "${escaped.slug}",
    title: "${escaped.title}",
    metaDescription: "${escaped.metaDescription}",
    category: "${escaped.category}",
    featuredImage: "${escaped.featuredImage}",
    htmlContent: "${escaped.htmlContent}",
  }`;
    });

  const content = `// Auto-generated by scripts/scrape-pages.mjs — do not edit manually

export interface PageData {
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  featuredImage: string;
  htmlContent: string;
}

export const ${exportName}: PageData[] = [
${escapedPages.join(",\n")}
];

export const ${exportName}BySlug: Record<string, PageData> = Object.fromEntries(
  ${exportName}.map((page) => [page.slug, page])
);
`;

  const filePath = join(DATA_DIR, filename);
  writeFileSync(filePath, content, "utf-8");
  console.log(`\n✓ Generated: ${filePath} (${pages.filter(Boolean).length} pages)`);
}

function escapeTs(str) {
  if (!str) return "";
  return str
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\n")
    .replace(/\r/g, "\\r")
    .replace(/\t/g, "\\t");
}

// ── Generate route files ──────────────────────────────────────────────

function generateTopLevelRoute(slug, dataFile, exportName) {
  const routeDir = join(ROOT, "src", "app", slug);
  ensureDir(routeDir);

  const content = `import type { Metadata } from "next";
import { ${exportName}BySlug } from "@/app/data/${dataFile.replace(".ts", "")}";
import PageContent from "@/app/components/PageContent";

const page = ${exportName}BySlug["${slug}"];

export const metadata: Metadata = {
  title: page?.title ? \`\${page.title} - BabyPillars\` : "BabyPillars",
  description: page?.metaDescription || "",
};

export default function Page() {
  if (!page) return null;
  return <PageContent page={page} />;
}
`;

  writeFileSync(join(routeDir, "page.tsx"), content, "utf-8");
}

function generateDynamicRoute(parentSlug, paramName, dataFile, exportName) {
  const routeDir = join(ROOT, "src", "app", parentSlug, `[${paramName}]`);
  ensureDir(routeDir);

  const content = `import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ${exportName}, ${exportName}BySlug } from "@/app/data/${dataFile.replace(".ts", "")}";
import PageContent from "@/app/components/PageContent";

type Props = {
  params: Promise<{ ${paramName}: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ${paramName} } = await params;
  const page = ${exportName}BySlug[${paramName}];
  if (!page) return { title: "Page Not Found - BabyPillars" };
  return {
    title: \`\${page.title} - BabyPillars\`,
    description: page.metaDescription || "",
  };
}

export function generateStaticParams() {
  return ${exportName}.map((page) => ({ ${paramName}: page.slug }));
}

export default async function DynamicPage({ params }: Props) {
  const { ${paramName} } = await params;
  const page = ${exportName}BySlug[${paramName}];
  if (!page) notFound();
  return <PageContent page={page} />;
}
`;

  writeFileSync(join(routeDir, "page.tsx"), content, "utf-8");
}

function generateLandingPage(slug, title, dataFile, exportName, childBase) {
  const routeDir = join(ROOT, "src", "app", slug);
  ensureDir(routeDir);

  const content = `import type { Metadata } from "next";
import Link from "next/link";
import { ${exportName}, ${exportName}BySlug } from "@/app/data/${dataFile.replace(".ts", "")}";
import PageContent from "@/app/components/PageContent";

const landingPage = ${exportName}BySlug["${slug}"] || null;

export const metadata: Metadata = {
  title: landingPage?.title ? \`\${landingPage.title} - BabyPillars\` : "${title} - BabyPillars",
  description: landingPage?.metaDescription || "",
};

export default function Page() {
  const childPages = ${exportName}.filter((p) => p.slug !== "${slug}");

  return (
    <div className="bg-white">
      {/* Landing content if available */}
      {landingPage && <PageContent page={landingPage} />}

      {/* Child page cards */}
      {childPages.length > 0 && (
        <section className="py-16 bg-background-light">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-display text-slate-900 mb-10 text-center">
              ${title}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {childPages.map((child) => (
                <Link
                  key={child.slug}
                  href={\`/${childBase}/\${child.slug}\`}
                  className="group bg-white rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all overflow-hidden"
                >
                  {child.featuredImage && (
                    <img
                      src={child.featuredImage}
                      alt={child.title}
                      className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="p-5">
                    <h3 className="font-display text-lg text-slate-900 group-hover:text-primary transition-colors leading-snug">
                      {child.title}
                    </h3>
                    {child.metaDescription && (
                      <p className="text-slate-500 text-sm mt-2 line-clamp-2">
                        {child.metaDescription}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-3">
                      Read More
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
`;

  writeFileSync(join(routeDir, "page.tsx"), content, "utf-8");
}

// ── Main ──────────────────────────────────────────────────────────────

async function main() {
  console.log("🚀 BabyPillars Page Scraper\n");
  console.log("=".repeat(60));

  ensureDir(PUBLIC_DIR);
  ensureDir(DATA_DIR);

  // ── 1. Scrape age-range pages ─────────────────────────────────────
  console.log("\n📦 Scraping Age Range pages...");
  const ageRangeResults = [];
  for (const slug of AGE_RANGE_PAGES) {
    const result = await scrapePage(slug);
    ageRangeResults.push(result);
    await new Promise((r) => setTimeout(r, 500)); // rate limit
  }
  generateDataFile("ageRangePages.ts", "ageRangePages", ageRangeResults, "Age Range");

  // ── 2. Scrape special needs pages ─────────────────────────────────
  console.log("\n📦 Scraping Special Needs pages...");
  const specialNeedsResults = [];
  // Landing page
  const snLanding = await scrapePage("special-needs-baby");
  if (snLanding) {
    snLanding.slug = "special-needs-baby"; // keep full slug for landing
    specialNeedsResults.push(snLanding);
  }
  await new Promise((r) => setTimeout(r, 500));

  for (const slug of SPECIAL_NEEDS_CHILDREN) {
    const result = await scrapePage(`special-needs-baby/${slug}`);
    if (result) {
      result.slug = slug; // child slug only
    }
    specialNeedsResults.push(result);
    await new Promise((r) => setTimeout(r, 500));
  }
  generateDataFile("specialNeedsPages.ts", "specialNeedsPages", specialNeedsResults, "Special Needs");

  // ── 3. Scrape books pages ─────────────────────────────────────────
  console.log("\n📦 Scraping Books pages...");
  const booksResults = [];
  // Landing page
  const booksLanding = await scrapePage("books");
  if (booksLanding) {
    booksLanding.slug = "books"; // keep full slug for landing
    booksResults.push(booksLanding);
  }
  await new Promise((r) => setTimeout(r, 500));

  for (const slug of BOOKS_CHILDREN) {
    const result = await scrapePage(`books/${slug}`);
    if (result) {
      result.slug = slug; // child slug only
    }
    booksResults.push(result);
    await new Promise((r) => setTimeout(r, 500));
  }
  generateDataFile("booksPages.ts", "booksPages", booksResults, "Books");

  // ── 4. Scrape standalone pages ────────────────────────────────────
  console.log("\n📦 Scraping Standalone pages...");
  const standaloneResults = [];
  for (const slug of STANDALONE_PAGES) {
    const result = await scrapePage(slug);
    if (result) {
      // For nested standalone pages, use only the leaf slug for lookup
      // but keep fullSlug for routing
      result.slug = slug.includes("/") ? slug.split("/").pop() : slug;
    }
    standaloneResults.push(result);
    await new Promise((r) => setTimeout(r, 500));
  }
  generateDataFile("standalonePages.ts", "standalonePages", standaloneResults, "General");

  // ── 5. Generate route files ───────────────────────────────────────
  console.log("\n📁 Generating route files...");

  // Age range top-level routes
  for (const slug of AGE_RANGE_PAGES) {
    generateTopLevelRoute(slug, "ageRangePages.ts", "ageRangePages");
    console.log(`  ✓ Route: /${slug}`);
  }

  // Special needs: landing + dynamic
  generateLandingPage(
    "special-needs-baby",
    "Special Needs Resources",
    "specialNeedsPages.ts",
    "specialNeedsPages",
    "special-needs-baby"
  );
  generateDynamicRoute(
    "special-needs-baby",
    "condition",
    "specialNeedsPages.ts",
    "specialNeedsPages"
  );
  console.log("  ✓ Routes: /special-needs-baby + /special-needs-baby/[condition]");

  // Books: landing + dynamic
  generateLandingPage(
    "books",
    "Books & Resources",
    "booksPages.ts",
    "booksPages",
    "books"
  );
  generateDynamicRoute("books", "bookSlug", "booksPages.ts", "booksPages");
  console.log("  ✓ Routes: /books + /books/[bookSlug]");

  // Standalone top-level routes
  const standaloneTopLevel = STANDALONE_PAGES.filter(
    (slug) => !slug.includes("/")
  );
  for (const slug of standaloneTopLevel) {
    generateTopLevelRoute(slug, "standalonePages.ts", "standalonePages");
    console.log(`  ✓ Route: /${slug}`);
  }

  // Parent-learning-hub: landing + dynamic for growth-spurts
  generateLandingPage(
    "parent-learning-hub",
    "Parent Learning Hub",
    "standalonePages.ts",
    "standalonePages",
    "parent-learning-hub"
  );
  // Create dynamic route for sub-pages
  const plhDir = join(ROOT, "src", "app", "parent-learning-hub", "[topicSlug]");
  ensureDir(plhDir);
  const plhDynamic = `import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { standalonePagesBySlug } from "@/app/data/standalonePages";
import PageContent from "@/app/components/PageContent";

type Props = {
  params: Promise<{ topicSlug: string }>;
};

const subPages = ["growth-spurts-in-babies"];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topicSlug } = await params;
  const page = standalonePagesBySlug[topicSlug];
  if (!page) return { title: "Page Not Found - BabyPillars" };
  return {
    title: \`\${page.title} - BabyPillars\`,
    description: page.metaDescription || "",
  };
}

export function generateStaticParams() {
  return subPages.map((slug) => ({ topicSlug: slug }));
}

export default async function TopicPage({ params }: Props) {
  const { topicSlug } = await params;
  const page = standalonePagesBySlug[topicSlug];
  if (!page) notFound();
  return <PageContent page={page} />;
}
`;
  writeFileSync(join(plhDir, "page.tsx"), plhDynamic, "utf-8");
  console.log("  ✓ Route: /parent-learning-hub/[topicSlug]");

  // sleepless-to-sound-sleep-ebook top-level route
  generateTopLevelRoute("sleepless-to-sound-sleep-ebook", "standalonePages.ts", "standalonePages");
  console.log("  ✓ Route: /sleepless-to-sound-sleep-ebook");

  console.log("\n" + "=".repeat(60));
  console.log("✅ Scraping complete!");
  console.log(`   Data files: ${DATA_DIR}`);
  console.log(`   Images: ${PUBLIC_DIR}`);
  console.log(`   Routes generated in src/app/`);
}

main().catch(console.error);
