#!/usr/bin/env node
/**
 * Internal Link Injection Script for BabyPillars
 *
 * Reads data files, injects internal links (1 per 50-70 words),
 * external authority links (1 per 200-220 words), and at least
 * 1 CTA link to /babypillars-24-bundle per page.
 *
 * Usage: node scripts/inject-links.mjs [--dry-run] [--tier 1|2|3|all]
 */
import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import * as cheerio from "cheerio";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const tierArg = args.find((_, i) => args[i - 1] === "--tier") || "all";

// ─── CONFIGURATION ──────────────────────────────────────────────────

const INTERNAL_LINK_INTERVAL = 60;
const EXTERNAL_LINK_INTERVAL = 210;
const BUNDLE_URL = "/babypillars-24-bundle";

// ─── TIER DEFINITIONS ───────────────────────────────────────────────
const TIER_1_SLUGS = new Set([
  "babyhandsmouth",
  "baby-cradling-important",
  "infant-growth-spurts-the-ultimate-guide",
  "when-do-babies-eyes-change-color",
  "baby-sleep-chart-understanding-your-babys-sleep-patterns",
  "kcnq2-gene-mutation-in-babies",
  "desanto-shinawi-in-babies",
  "3-month-growth-spurts",
  "cri-du-chat-syndrome-in-babies",
  "cerebral-palsy-in-babies",
  "how-to-work-with-0-3-month-old-babies-baby-exercises",
  "when-do-babies-smile",
  "wolf-hirschhorn-syndrome-in-babies",
  "online-baby-classes",
]);

const TIER_2_CATEGORIES = new Set([
  "Development",
  "Milestones",
  "Health",
  "Sleep",
  "Practical Tips",
  "Special Needs",
  "Age Range",
]);

// ─── KEYWORD → URL MAPPING (Internal Links) ────────────────────────

const INTERNAL_LINKS = [
  // Conversion CTA keywords
  {
    keywords: [
      "milestone mastery",
      "baby development course",
      "online baby class",
      "baby program",
      "development plan",
      "milestone course",
      "development series",
    ],
    url: BUNDLE_URL,
  },

  // Milestone hub
  {
    keywords: [
      "milestone tracker",
      "track milestones",
      "milestone checklist",
      "baby milestones",
      "developmental milestones",
    ],
    url: "/milestone-tracker",
  },
  { keywords: ["milestones list", "milestones chart"], url: "/milestones-list" },

  // Age range pages
  {
    keywords: ["0-3 month", "0 to 3 month", "newborn development", "newborn baby"],
    url: "/0-3-months-baby",
  },
  { keywords: ["3-6 month", "3 to 6 month"], url: "/3-6-months-baby" },
  { keywords: ["6-9 month", "6 to 9 month"], url: "/6-9-months-baby" },
  { keywords: ["9-12 month", "9 to 12 month"], url: "/9-12-months-baby" },
  {
    keywords: ["12-24 month", "12 to 24 month", "toddler development"],
    url: "/12-24-months-baby",
  },
  { keywords: ["0-6 month program", "early explorers"], url: "/baby-development-0-6-month" },
  {
    keywords: ["6-12 month program", "curious crawlers"],
    url: "/baby-development-6-12-month",
  },

  // Special needs hub
  {
    keywords: ["special needs baby", "special needs support", "special needs program"],
    url: "/special-needs-baby",
  },
  {
    keywords: ["down syndrome", "down's syndrome"],
    url: "/special-needs-baby/down-syndrome-in-babies",
  },
  {
    keywords: ["autism in bab", "autism spectrum", "signs of autism"],
    url: "/special-needs-baby/autism-in-babies",
  },
  { keywords: ["cerebral palsy"], url: "/special-needs-baby/cerebral-palsy-in-babies" },
  {
    keywords: ["angelman syndrome"],
    url: "/special-needs-baby/angelman-syndrome-babies",
  },
  {
    keywords: ["cri du chat"],
    url: "/special-needs-baby/cri-du-chat-syndrome-in-babies",
  },
  {
    keywords: ["desanto-shinawi", "desanto shinawi"],
    url: "/special-needs-baby/desanto-shinawi-in-babies",
  },
  {
    keywords: ["wolf-hirschhorn", "wolf hirschhorn"],
    url: "/special-needs-baby/wolf-hirschhorn-syndrome-in-babies",
  },
  {
    keywords: ["emanuel syndrome"],
    url: "/special-needs-baby/emanuel-syndrome-in-babies",
  },
  { keywords: ["rett syndrome"], url: "/special-needs-baby/rett-syndrome-in-babies" },
  { keywords: ["kcnq2"], url: "/special-needs-baby/kcnq2-gene-mutation-in-babies" },
  {
    keywords: ["prader-willi", "prader willi"],
    url: "/special-needs-baby/prader-willi-syndrome-in-babies",
  },
  {
    keywords: ["williams syndrome"],
    url: "/special-needs-baby/williams-syndrome-in-babies",
  },
  { keywords: ["spina bifida"], url: "/special-needs-baby/spina-bifida-in-babies" },
  {
    keywords: ["muscular dystrophy"],
    url: "/special-needs-baby/muscular-dystrophy-in-babies",
  },
  {
    keywords: ["fragile x"],
    url: "/special-needs-baby/fragile-x-syndrome-in-babies",
  },
  {
    keywords: ["global developmental delay"],
    url: "/special-needs-baby/global-developmental-delay-in-babies",
  },

  // Sleep cluster
  {
    keywords: ["baby sleep chart", "sleep pattern", "sleep schedule"],
    url: "/blog/baby-sleep-chart-understanding-your-babys-sleep-patterns",
  },
  {
    keywords: ["sleep training", "sleep ebook", "sound sleep"],
    url: "/sleepless-to-sound-sleep-ebook",
  },
  { keywords: ["dream feed"], url: "/blog/dream-feeding" },
  {
    keywords: ["baby sleep regression", "sleep regression"],
    url: "/blog/secrets-baby-sleep",
  },

  // Crawling/movement cluster
  {
    keywords: ["crawling exercise", "help baby crawl", "crawling activities"],
    url: "/blog/baby-crawling-exercises",
  },
  {
    keywords: ["baby crawl", "when do babies crawl", "crawling guide"],
    url: "/blog/baby-crawling-guide",
  },
  {
    keywords: ["baby roll", "rolling over", "when do babies roll"],
    url: "/blog/when-do-babies-roll-over",
  },
  {
    keywords: ["baby walk", "first steps", "when do babies walk", "start walking"],
    url: "/blog/when-do-babies-start-walking",
  },
  { keywords: ["tummy time"], url: "/blog/tummy-time" },
  { keywords: ["baby sit", "when do babies sit"], url: "/blog/baby-sitting" },

  // Feeding cluster
  {
    keywords: ["messy eat", "baby-led weaning", "self-feeding"],
    url: "/blog/baby-get-messy-eating",
  },
  {
    keywords: ["breastfeed", "breast feed", "nursing your baby"],
    url: "/blog/breastfeeding-tips",
  },

  // Growth/development
  {
    keywords: ["growth spurt"],
    url: "/blog/infant-growth-spurts-the-ultimate-guide",
  },
  { keywords: ["3 month growth"], url: "/blog/3-month-growth-spurts" },
  {
    keywords: ["baby brain", "brain development"],
    url: "/blog/babybraindevelopment",
  },
  {
    keywords: ["baby smile", "when do babies smile", "first smile"],
    url: "/blog/when-do-babies-smile",
  },
  {
    keywords: ["eyes change color", "eye color"],
    url: "/blog/when-do-babies-eyes-change-color",
  },
  {
    keywords: ["hand to mouth", "hands to mouth", "hand mouth"],
    url: "/blog/babyhandsmouth",
  },
  {
    keywords: ["baby cradling", "how to hold", "cradle your baby"],
    url: "/blog/baby-cradling-important",
  },

  // Torticollis
  { keywords: ["torticollis"], url: "/torticollis" },
  {
    keywords: ["low muscle tone", "hypotonia"],
    url: "/blog/low-muscle-tone-hypotonia",
  },

  // Books/resources
  {
    keywords: ["babypillars book", "free book", "downloadable book"],
    url: "/books",
  },
  { keywords: ["how it works", "how the program works"], url: "/how-it-works" },
  {
    keywords: ["about babypillars", "about anat", "our founder"],
    url: "/about-babypillars",
  },

  // Other important pages
  {
    keywords: ["private session", "one-on-one", "1-on-1"],
    url: "/private-online-sessions",
  },
  {
    keywords: ["premature bab", "preemie", "premie"],
    url: "/blog/premature-baby-care",
  },
  {
    keywords: ["baby development delay", "developmental delay"],
    url: "/blog/baby-development-delays",
  },
];

// ─── EXTERNAL AUTHORITY LINKS ───────────────────────────────────────

const EXTERNAL_LINKS = [
  {
    keywords: ["developmental milestone", "cdc milestone", "milestone checklist"],
    url: "https://www.cdc.gov/ncbddd/actearly/milestones/index.html",
    label: "CDC Milestone Checklist",
  },
  {
    keywords: ["pediatrician", "pediatric", "child health", "well-child"],
    url: "https://www.healthychildren.org/",
    label: "AAP HealthyChildren.org",
  },
  {
    keywords: ["safe sleep", "sids", "sudden infant death", "back to sleep"],
    url: "https://www.aap.org/en/patient-care/safe-sleep/",
    label: "AAP Safe Sleep Guidelines",
  },
  {
    keywords: ["infant sleep research", "sleep study", "sleep science"],
    url: "https://www.nichd.nih.gov/health/topics/sleep",
    label: "NIH Sleep Research",
  },
  {
    keywords: ["rare disease", "genetic condition", "genetic disorder", "rare condition"],
    url: "https://rarediseases.info.nih.gov/",
    label: "NIH GARD",
  },
  {
    keywords: ["nord", "national organization for rare"],
    url: "https://rarediseases.org/",
    label: "NORD",
  },
  {
    keywords: ["who breastfeeding", "world health organization", "exclusive breastfeeding"],
    url: "https://www.who.int/health-topics/breastfeeding",
    label: "WHO Breastfeeding Guidelines",
  },
  {
    keywords: ["infant nutrition", "baby food safety", "starting solids"],
    url: "https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/",
    label: "AAP Nutrition Guidelines",
  },
  {
    keywords: ["mayo clinic", "medical advice", "consult your doctor", "healthcare provider"],
    url: "https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health",
    label: "Mayo Clinic",
  },
  {
    keywords: ["cleveland clinic"],
    url: "https://my.clevelandclinic.org/pediatrics",
    label: "Cleveland Clinic",
  },
  {
    keywords: ["physical therapy", "occupational therapy", "early intervention"],
    url: "https://www.apta.org/your-health/conditions-treatments/pediatrics",
    label: "APTA Pediatric Resources",
  },
];

// ─── DATA FILE CONFIGURATION ────────────────────────────────────────

const DATA_FILES = [
  {
    path: "src/app/blog/wpBlogData.ts",
    slugToUrl: (slug) => `/blog/${slug}`,
  },
  {
    path: "src/app/data/standalonePages.ts",
    slugToUrl: (slug) => `/${slug}`,
  },
  {
    path: "src/app/data/ageRangePages.ts",
    slugToUrl: (slug) => `/${slug}`,
  },
  {
    path: "src/app/data/specialNeedsPages.ts",
    slugToUrl: (slug) =>
      slug === "special-needs-baby" ? "/special-needs-baby" : `/special-needs-baby/${slug}`,
  },
  {
    path: "src/app/data/booksPages.ts",
    slugToUrl: (slug) => (slug === "books" ? "/books" : `/books/${slug}`),
  },
];

// ─── SKIP TAGS ──────────────────────────────────────────────────────
const SKIP_TAGS = new Set([
  "a", "script", "style", "h1", "h2", "h3", "h4", "h5", "h6",
  "button", "input", "textarea", "select", "code", "pre",
]);

// ─── HELPER FUNCTIONS ───────────────────────────────────────────────

function countWords(text) {
  return text.split(/\s+/).filter((w) => w.length > 0).length;
}

function isInsideSkipTag($, node) {
  let current = node;
  while (current) {
    if (current.type === "tag" && SKIP_TAGS.has(current.tagName?.toLowerCase())) {
      return true;
    }
    current = current.parent;
  }
  return false;
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Extract htmlContent string from a TS data file at a given slug position.
 * Returns { start, end, content } where start/end are indices of the quoted content.
 */
function extractHtmlContent(fileContent, fromIndex) {
  const searchArea = fileContent.slice(fromIndex);
  const marker = "htmlContent: ";
  const markerIdx = searchArea.indexOf(marker);
  if (markerIdx === -1) return null;

  const absMarkerIdx = fromIndex + markerIdx + marker.length;
  const quoteChar = fileContent[absMarkerIdx]; // should be '"'
  if (quoteChar !== '"') return null;

  // Scan forward to find the closing quote (handling escaped quotes)
  let i = absMarkerIdx + 1;
  while (i < fileContent.length) {
    if (fileContent[i] === "\\") {
      i += 2; // skip escaped character
      continue;
    }
    if (fileContent[i] === '"') {
      // Found closing quote
      return {
        start: absMarkerIdx + 1,
        end: i,
        content: fileContent.slice(absMarkerIdx + 1, i),
      };
    }
    i++;
  }
  return null;
}

/**
 * Unescape a JSON-like string (handles \\n, \\", etc.)
 */
function unescapeString(s) {
  return s
    .replace(/\\n/g, "\n")
    .replace(/\\r/g, "\r")
    .replace(/\\t/g, "\t")
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, "\\");
}

/**
 * Re-escape for embedding back into a TS double-quoted string
 */
function escapeForTsString(s) {
  return s
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\n")
    .replace(/\r/g, "\\r")
    .replace(/\t/g, "\\t");
}

/**
 * Process HTML content for a single page.
 */
const IDEMPOTENCY_MARKER = "<!-- bp-links-injected -->";

function injectLinks(rawHtml, pageUrl) {
  // Unescape the TS string to get actual HTML
  const html = unescapeString(rawHtml);

  // Idempotency: skip if already processed
  if (html.includes(IDEMPOTENCY_MARKER)) {
    return { html: rawHtml, stats: { internalLinksAdded: 0, externalLinksAdded: 0 }, skipped: true };
  }

  const $ = cheerio.load(html, { decodeEntities: false, xmlMode: false });

  // Collect text nodes that are candidates for linking
  const textNodes = [];
  function walk(nodes) {
    for (const node of nodes) {
      if (node.type === "text") {
        if (!isInsideSkipTag($, node)) {
          textNodes.push(node);
        }
      } else if (node.type === "tag" && node.children) {
        walk(node.children);
      }
    }
  }
  walk($.root().children().toArray());

  let wordsSoFar = 0;
  let nextInternalAt = INTERNAL_LINK_INTERVAL;
  let nextExternalAt = EXTERNAL_LINK_INTERVAL;
  const linkedUrls = new Set();
  let hasBundle = false;
  let internalLinksAdded = 0;
  let externalLinksAdded = 0;

  // Check existing links
  $("a").each((_, el) => {
    const href = $(el).attr("href") || "";
    if (href.includes("babypillars-24-bundle")) hasBundle = true;
    linkedUrls.add(href);
  });

  // Don't link to self
  linkedUrls.add(pageUrl);

  for (const textNode of textNodes) {
    const text = textNode.data;
    if (!text || text.trim().length === 0) continue;

    const wordCount = countWords(text);
    if (wordCount < 2) {
      wordsSoFar += wordCount;
      continue;
    }

    let modified = text;
    let madeChange = false;

    // Internal link injection
    if (wordsSoFar + wordCount >= nextInternalAt) {
      const result = tryInjectLink(modified, INTERNAL_LINKS, linkedUrls, pageUrl);
      if (result) {
        modified = result.text;
        linkedUrls.add(result.url);
        internalLinksAdded++;
        nextInternalAt = wordsSoFar + wordCount + INTERNAL_LINK_INTERVAL;
        madeChange = true;
      }
    }

    // External link injection
    if (wordsSoFar + wordCount >= nextExternalAt) {
      const result = tryInjectLink(modified, EXTERNAL_LINKS, linkedUrls, pageUrl);
      if (result) {
        modified = result.text;
        linkedUrls.add(result.url);
        externalLinksAdded++;
        nextExternalAt = wordsSoFar + wordCount + EXTERNAL_LINK_INTERVAL;
        madeChange = true;
      }
    }

    if (madeChange) {
      $(textNode).replaceWith(modified);
    }

    wordsSoFar += wordCount;
  }

  // Ensure at least 1 bundle CTA link
  if (!hasBundle && !linkedUrls.has(BUNDLE_URL)) {
    const inserted = injectBundleLink($, linkedUrls, pageUrl);
    if (inserted) internalLinksAdded++;
  }

  // Add idempotency marker
  $("body").append(IDEMPOTENCY_MARKER);

  // Extract body content from cheerio output
  const output = $.html();
  const bodyMatch = output.match(/<body>([\s\S]*)<\/body>/);
  const finalHtml = bodyMatch ? bodyMatch[1] : output;

  return {
    html: escapeForTsString(finalHtml),
    stats: { internalLinksAdded, externalLinksAdded },
  };
}

function tryInjectLink(text, linkMappings, linkedUrls, pageUrl) {
  for (const mapping of linkMappings) {
    const url = mapping.url;
    if (linkedUrls.has(url) || url === pageUrl) continue;

    for (const keyword of mapping.keywords) {
      const regex = new RegExp(`(${escapeRegex(keyword)})`, "i");
      const match = text.match(regex);
      if (match) {
        const titleAttr = mapping.label ? ` title="${mapping.label}"` : "";
        const targetAttr = url.startsWith("http")
          ? ` target="_blank" rel="noopener noreferrer"`
          : "";
        const replacement = `<a href="${url}"${titleAttr}${targetAttr}>${match[1]}</a>`;
        return { text: text.replace(regex, replacement), url };
      }
    }
  }
  return null;
}

function injectBundleLink($, linkedUrls, pageUrl) {
  const ctaPhrases = [
    "get started", "join", "enroll", "sign up", "learn more",
    "start today", "explore the program", "development program",
    "baby development", "babypillars",
  ];

  const allTextNodes = [];
  function walkAll(nodes) {
    for (const node of nodes) {
      if (node.type === "text" && !isInsideSkipTag($, node)) {
        allTextNodes.push(node);
      } else if (node.type === "tag" && node.children) {
        walkAll(node.children);
      }
    }
  }
  walkAll($.root().children().toArray());

  for (const textNode of allTextNodes) {
    const text = textNode.data;
    if (!text || text.trim().length === 0) continue;

    for (const phrase of ctaPhrases) {
      const regex = new RegExp(`(${escapeRegex(phrase)})`, "i");
      const match = text.match(regex);
      if (match) {
        const replacement = `<a href="${BUNDLE_URL}">${match[1]}</a>`;
        $(textNode).replaceWith(text.replace(regex, replacement));
        return true;
      }
    }
  }

  // Fallback: append CTA paragraph (only if not already present)
  if (!$.html().includes("Explore the BabyPillars program")) {
    $("body").append(
      `<p style="margin-top:1.5em"><strong>Ready to support your baby&#8217;s development?</strong> <a href="${BUNDLE_URL}">Explore the BabyPillars program</a> &#8212; milestone-based guidance for every stage.</p>`
    );
  }
  return true;
}

// ─── TIER FILTERING ─────────────────────────────────────────────────

function shouldProcess(slug, category) {
  if (tierArg === "all") return true;
  if (tierArg === "1") return TIER_1_SLUGS.has(slug);
  if (tierArg === "2") return TIER_2_CATEGORIES.has(category) && !TIER_1_SLUGS.has(slug);
  if (tierArg === "3") return !TIER_1_SLUGS.has(slug) && !TIER_2_CATEGORIES.has(category);
  return true;
}

// ─── MAIN PROCESSING ────────────────────────────────────────────────

function processDataFile(config) {
  const filePath = resolve(root, config.path);
  let fileContent = readFileSync(filePath, "utf-8");

  let totalInternal = 0;
  let totalExternal = 0;
  let pagesProcessed = 0;

  // Find all slugs and process each page
  const slugRegex = /slug:\s*"([^"]+)"/g;
  let slugMatch;
  const replacements = []; // collect all replacements, apply at end

  while ((slugMatch = slugRegex.exec(fileContent)) !== null) {
    const slug = slugMatch[1];

    // Get category
    const nearbyContent = fileContent.slice(slugMatch.index, slugMatch.index + 500);
    const catMatch = nearbyContent.match(/category:\s*"([^"]+)"/);
    const category = catMatch ? catMatch[1] : "General";

    if (!shouldProcess(slug, category)) continue;

    const pageUrl = config.slugToUrl(slug);
    const extracted = extractHtmlContent(fileContent, slugMatch.index);
    if (!extracted || extracted.content.length < 100) continue;

    const result = injectLinks(extracted.content, pageUrl);
    const { html: newHtml, stats } = result;

    if (result.skipped) {
      console.log(`  ⊘ ${slug}: already processed, skipping`);
      continue;
    }

    if (stats.internalLinksAdded > 0 || stats.externalLinksAdded > 0) {
      replacements.push({
        start: extracted.start,
        end: extracted.end,
        newContent: newHtml,
      });

      totalInternal += stats.internalLinksAdded;
      totalExternal += stats.externalLinksAdded;
      pagesProcessed++;

      console.log(
        `  ✓ ${slug}: +${stats.internalLinksAdded} internal, +${stats.externalLinksAdded} external`
      );
    }
  }

  // Apply replacements in reverse order to preserve indices
  if (replacements.length > 0 && !dryRun) {
    replacements.sort((a, b) => b.start - a.start);
    for (const r of replacements) {
      fileContent =
        fileContent.slice(0, r.start) + r.newContent + fileContent.slice(r.end);
    }
    writeFileSync(filePath, fileContent, "utf-8");
  }

  console.log(
    `  ${config.path}: ${pagesProcessed} pages, +${totalInternal} internal, +${totalExternal} external${dryRun ? " (dry run)" : ""}\n`
  );

  return { totalInternal, totalExternal, pagesProcessed };
}

// ─── EXECUTE ────────────────────────────────────────────────────────

console.log(`\n🔗 BabyPillars Link Injection Script`);
console.log(`   Tier: ${tierArg} | Dry run: ${dryRun}\n`);

let grandTotalInternal = 0;
let grandTotalExternal = 0;
let grandTotalPages = 0;

for (const config of DATA_FILES) {
  console.log(`Processing ${config.path}...`);
  try {
    const result = processDataFile(config);
    if (result) {
      grandTotalInternal += result.totalInternal;
      grandTotalExternal += result.totalExternal;
      grandTotalPages += result.pagesProcessed;
    }
  } catch (err) {
    console.error(`  ✗ Error processing ${config.path}:`, err.message);
  }
}

console.log(`\n📊 Summary:`);
console.log(`   Pages processed: ${grandTotalPages}`);
console.log(`   Internal links added: ${grandTotalInternal}`);
console.log(`   External links added: ${grandTotalExternal}`);
console.log(`   Total links: ${grandTotalInternal + grandTotalExternal}`);
if (dryRun) console.log(`   (Dry run — no files were modified)`);
console.log();
