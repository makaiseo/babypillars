#!/usr/bin/env node
/**
 * Fix old WordPress URLs in data files.
 * Replaces https://babypillars.com/path with /path in htmlContent.
 */
import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const files = [
  "src/app/blog/wpBlogData.ts",
  "src/app/data/standalonePages.ts",
  "src/app/data/ageRangePages.ts",
  "src/app/data/specialNeedsPages.ts",
  "src/app/data/booksPages.ts",
];

let totalReplacements = 0;

for (const file of files) {
  const filePath = resolve(root, file);
  let content = readFileSync(filePath, "utf-8");
  const count = (content.match(/https:\/\/babypillars\.com\//g) || []).length;
  if (count > 0) {
    content = content.replace(/https:\/\/babypillars\.com\//g, "/");
    writeFileSync(filePath, content, "utf-8");
    console.log(`${file}: replaced ${count} URLs`);
    totalReplacements += count;
  } else {
    console.log(`${file}: no URLs to replace`);
  }
}

console.log(`\nTotal: ${totalReplacements} URLs replaced`);
