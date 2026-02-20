"use client";

import { useState, useRef } from "react";

interface Section {
  id: string;
  title: string;
  html: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface QuickLink {
  numeral: string;
  label: string;
  id: string;
}

interface ParsedContent {
  sections: Section[];
  keyTakeaways: string[];
  faqs: FAQ[];
  jumpLinks: { id: string; label: string }[];
  quickLinks: QuickLink[];
}

const ROMAN_NUMERALS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV"];

function extractQuickLinks(html: string): { quickLinks: QuickLink[]; cleanedHtml: string } {
  const quickLinks: QuickLink[] = [];

  // Detect Quick Links section: <p><strong>Quick links:</strong></p> followed by link paragraphs
  const quickLinksMatch = html.match(
    /<p[^>]*>\s*<strong[^>]*>\s*Quick\s*links?\s*:?\s*<\/strong>\s*<\/p>/i
  );

  if (!quickLinksMatch) {
    return { quickLinks, cleanedHtml: html };
  }

  const qlStart = quickLinksMatch.index!;
  // Find end of quick links block - look for paragraphs with Roman numerals/links after the header
  // Quick links items are consecutive <p> tags with Roman numerals (Ⅰ, Ⅱ, etc.) or links
  let qlEnd = qlStart + quickLinksMatch[0].length;
  const afterQl = html.substring(qlEnd);

  // Match consecutive paragraphs that look like quick link items
  // They contain Roman numerals (unicode or regular) and/or anchor links
  const itemRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
  let itemMatch;
  let lastEnd = 0;

  while ((itemMatch = itemRegex.exec(afterQl)) !== null) {
    const itemContent = itemMatch[1];
    const plainText = itemContent.replace(/<[^>]*>/g, "").trim();

    // Check if this looks like a quick link item (has Roman numeral prefix or is a link)
    const hasRomanNumeral = /^[ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ\s\.]+/i.test(plainText) ||
      /^[IVX]+[\.\s]/i.test(plainText);
    const isLink = /<a\s/i.test(itemContent);
    const isShortEnough = plainText.length < 200;

    if ((hasRomanNumeral || isLink) && isShortEnough) {
      // Extract the label text (strip Roman numerals and clean up)
      let label = plainText
        .replace(/^[ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ\s\.]+/i, "")
        .replace(/^[IVX]+[\.\s]+/i, "")
        .trim();

      // If label is empty, try to get it from link text
      if (!label) {
        const linkTextMatch = itemContent.match(/<a[^>]*>([\s\S]*?)<\/a>/i);
        if (linkTextMatch) {
          label = linkTextMatch[1].replace(/<[^>]*>/g, "").trim();
        }
      }

      if (label) {
        const id = label
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "")
          .substring(0, 60);

        quickLinks.push({
          numeral: ROMAN_NUMERALS[quickLinks.length] || `${quickLinks.length + 1}`,
          label,
          id,
        });
      }

      lastEnd = itemMatch.index! + itemMatch[0].length;
    } else {
      // Not a quick link item, stop
      break;
    }
  }

  qlEnd += lastEnd;

  // Remove the quick links block from HTML
  const cleanedHtml = html.substring(0, qlStart) + html.substring(qlEnd);

  return { quickLinks, cleanedHtml };
}

function stripWordPressJunk(html: string): string {
  // Remove WP footer and everything after it (scripts, tracking, etc.)
  html = html.replace(/<(?:footer|div)[^>]*id="thrive-footer"[\s\S]*$/i, "");
  // Remove WP landing page bottom section (footer nav, links, etc.)
  html = html.replace(/<div[^>]*id="landingpage-bottom-section"[\s\S]*$/i, "");
  // Remove all <script> tags
  html = html.replace(/<script[\s\S]*?<\/script>/gi, "");
  // Remove all <style> blocks
  html = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");
  // Remove everything from start through </header> (old WP nav)
  html = html.replace(/^[\s\S]*?<\/header>/i, "");
  // Remove WP nav menu block (logo, hamburger, nav links) - for pages without <header>
  html = html.replace(/<a[^>]*href="https?:\/\/babypillars\.com"[^>]*>[\s\S]*?<\/a>/gi, "");
  html = html.replace(/<ul id="m-[^"]*">[\s\S]*?<\/ul>\s*<\/div>\s*<\/div>/gi, "");
  // Remove empty WP content wrappers
  html = html.replace(/<div id="content">[\s\S]*?<section><\/section>[\s\S]*?<\/div>/gi, "");
  // Remove WP tve_flt/tve_editor wrapper divs
  html = html.replace(/<div id="tve_flt"><div id="tve_editor">/gi, "");
  // Remove trailing section/div wrappers
  html = html.replace(/<\/div><\/div>\s*<\/section>\s*(<\/div>\s*)*$/i, "");
  // Remove SVG elements (decorative WP SVGs)
  html = html.replace(/<svg[^>]*>[\s\S]*?<\/svg>/gi, "");
  // Remove hidden WP elements
  html = html.replace(/<div[^>]*class=['"][^'"]*xlwcty[^'"]*['"][^>]*>[\s\S]*?<\/div>/gi, "");
  // Remove links to old babypillars.com (nav remnants)
  html = html.replace(/<a[^>]*href="javascript:void\(0\)"[^>]*>[\s\S]*?<\/a>/gi, "");
  // Remove BabyPillars logo images (already in navbar)
  html = html.replace(/<img[^>]*src="[^"]*babypillars-logo[^"]*"[^>]*\/?>/gi, "");
  // Remove decorative quote mark images
  html = html.replace(/<img[^>]*src="[^"]*[Qq]uote[_-](?:left|right|marks)[^"]*"[^>]*\/?>/gi, "");
  // Remove signature images (e.g. sig-anat.png)
  html = html.replace(/<img[^>]*src="[^"]*sig-anat[^"]*"[^>]*\/?>/gi, "");
  // Remove old quiz CTA links (buttons/links to /quiz-by-babypillars/)
  html = html.replace(/<a[^>]*href="[^"]*\/quiz-by-babypillars\/?[^"]*"[^>]*>[\s\S]*?<\/a>/gi, "");
  // Replace WP emoji images with their alt text (actual emoji characters)
  html = html.replace(/<img[^>]*class="[^"]*wp-smiley[^"]*"[^>]*alt="([^"]*)"[^>]*\/?>/gi, "$1");
  html = html.replace(/<img[^>]*src="https?:\/\/s\.w\.org\/images\/core\/emoji\/[^"]*"[^>]*alt="([^"]*)"[^>]*\/?>/gi, "$1");
  html = html.replace(/<img[^>]*alt="([^"]*)"[^>]*src="https?:\/\/s\.w\.org\/images\/core\/emoji\/[^"]*"[^>]*\/?>/gi, "$1");
  // Strip inline style attributes (WP theme styles clash with our design system)
  // Handles both double-quoted and single-quoted style values
  html = html.replace(/\s+style=(?:"[^"]*"|'[^']*')/gi, "");
  // Strip width/height attributes on images (let CSS control sizing)
  html = html.replace(/(<img[^>]*?)\s+width="[^"]*"/gi, "$1");
  html = html.replace(/(<img[^>]*?)\s+height="[^"]*"/gi, "$1");
  // Downgrade H1 tags in content to H2 (page title already provides the H1)
  html = html.replace(/<h1([^>]*)>/gi, "<h2$1>");
  html = html.replace(/<\/h1>/gi, "</h2>");
  // Remove empty paragraphs
  html = html.replace(/<p[^>]*>\s*(&nbsp;|\s)*<\/p>/gi, "");
  // Remove empty divs (multi-pass to collapse nested empties)
  let prev: string;
  do {
    prev = html;
    html = html.replace(/<div[^>]*>\s*<\/div>/gi, "");
  } while (html !== prev);
  // Clean up empty div wrappers at start
  html = html.replace(/^(\s*<div[^>]*>\s*)+(?=<[^d]|<div[^>]*(?:id|class))/i, "");
  // Remove orphaned closing tags at the start (causes hydration mismatches)
  html = html.replace(/^(\s*<\/[a-z][a-z0-9]*\s*>\s*)+/i, "");
  return html.trim();
}

function parseHtmlContent(html: string): ParsedContent {
  html = stripWordPressJunk(html);
  const sections: Section[] = [];
  const keyTakeaways: string[] = [];
  const faqs: FAQ[] = [];
  const jumpLinks: { id: string; label: string }[] = [];

  // Extract Quick Links first
  const { quickLinks, cleanedHtml } = extractQuickLinks(html);
  html = cleanedHtml;

  // Split content by H2 tags
  const h2Regex = /<h2[^>]*>(.*?)<\/h2>/gi;
  const h2Matches = [...html.matchAll(h2Regex)];

  if (h2Matches.length === 0) {
    // No H2s - treat entire content as one section
    sections.push({ id: "content", title: "", html });
    return { sections, keyTakeaways, faqs, jumpLinks, quickLinks };
  }

  // Get content before first H2
  const beforeFirst = html.substring(0, h2Matches[0].index)
    .replace(/^(\s*<\/[a-z][a-z0-9]*\s*>\s*)+/i, "").trim();
  if (beforeFirst) {
    sections.push({ id: "intro", title: "", html: beforeFirst });
  }

  // Track used IDs to avoid duplicates
  const usedIds = new Set<string>();
  const makeUniqueId = (base: string) => {
    let id = base;
    let counter = 2;
    while (usedIds.has(id)) {
      id = `${base}-${counter++}`;
    }
    usedIds.add(id);
    return id;
  };

  // Process each H2 section
  for (let i = 0; i < h2Matches.length; i++) {
    const match = h2Matches[i];
    const nextMatch = h2Matches[i + 1];
    const startIdx = match.index! + match[0].length;
    const endIdx = nextMatch ? nextMatch.index! : html.length;
    const sectionHtml = html.substring(startIdx, endIdx)
      .replace(/^(\s*<\/[a-z][a-z0-9]*\s*>\s*)+/i, "").trim();
    const rawTitle = match[1].replace(/<[^>]*>/g, "").trim();
    const baseId = rawTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .substring(0, 60);
    const id = makeUniqueId(baseId);

    const isKeyTakeaway = /key\s*take\s*away/i.test(rawTitle);
    const isFaqSection =
      /frequently\s*asked/i.test(rawTitle) || /^faqs?$/i.test(rawTitle);

    if (isKeyTakeaway) {
      // Extract takeaway items from list items or paragraphs
      const liMatches = [...sectionHtml.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)];
      if (liMatches.length > 0) {
        for (const li of liMatches) {
          const text = li[1].replace(/<[^>]*>/g, "").trim();
          if (text) keyTakeaways.push(text);
        }
      } else {
        // Try paragraphs
        const pMatches = [...sectionHtml.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)];
        for (const p of pMatches) {
          const text = p[1].replace(/<[^>]*>/g, "").trim();
          if (text && text.length > 20) keyTakeaways.push(text);
        }
      }
      // Also check for strong-prefixed items
      if (keyTakeaways.length === 0) {
        const strongMatches = [
          ...sectionHtml.matchAll(/<strong[^>]*>([\s\S]*?)<\/strong>/gi),
        ];
        for (const s of strongMatches) {
          const text = s[1].replace(/<[^>]*>/g, "").trim();
          if (text && text.length > 10) keyTakeaways.push(text);
        }
      }
      continue; // Don't add as regular section
    }

    if (isFaqSection) {
      // Extract FAQs - look for Q patterns (h3, strong, or specific patterns)
      const h3Matches = [
        ...sectionHtml.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi),
      ];
      if (h3Matches.length > 0) {
        for (let j = 0; j < h3Matches.length; j++) {
          const question = h3Matches[j][1].replace(/<[^>]*>/g, "").trim();
          const answerStart =
            h3Matches[j].index! + h3Matches[j][0].length;
          const answerEnd = h3Matches[j + 1]
            ? h3Matches[j + 1].index!
            : sectionHtml.length;
          const answer = sectionHtml
            .substring(answerStart, answerEnd)
            .replace(/<[^>]*>/g, "")
            .trim();
          if (question && answer) {
            faqs.push({ question, answer });
          }
        }
      } else {
        // Look for strong/bold questions followed by text
        const strongQMatches = [
          ...sectionHtml.matchAll(
            /<(?:strong|b)[^>]*>([\s\S]*?)<\/(?:strong|b)>/gi
          ),
        ];
        // Look for Q. patterns
        const qPatterns = [
          ...sectionHtml.matchAll(
            /(?:<p[^>]*>)?\s*(?:Q\.|Q:|Question:?)\s*([\s\S]*?)(?:<\/p>)/gi
          ),
        ];
        if (qPatterns.length > 0) {
          for (const qp of qPatterns) {
            const question = qp[1].replace(/<[^>]*>/g, "").trim();
            // Get text after this until next Q
            const startPos =
              sectionHtml.indexOf(qp[0]) + qp[0].length;
            const nextQ = sectionHtml.indexOf("Q.", startPos);
            const answer = sectionHtml
              .substring(startPos, nextQ > -1 ? nextQ : startPos + 500)
              .replace(/<[^>]*>/g, "")
              .trim();
            if (question && answer) {
              faqs.push({ question, answer });
            }
          }
        } else if (strongQMatches.length >= 2) {
          // Treat strong text as questions
          for (let j = 0; j < strongQMatches.length; j++) {
            const question = strongQMatches[j][1]
              .replace(/<[^>]*>/g, "")
              .trim();
            if (question.length < 10) continue;
            const startPos =
              strongQMatches[j].index! + strongQMatches[j][0].length;
            const endPos = strongQMatches[j + 1]
              ? strongQMatches[j + 1].index!
              : sectionHtml.length;
            const answer = sectionHtml
              .substring(startPos, endPos)
              .replace(/<[^>]*>/g, "")
              .trim();
            if (question && answer) {
              faqs.push({ question, answer });
            }
          }
        }
      }
      if (faqs.length > 0) continue; // Don't add as regular section if we extracted FAQs
    }

    // Regular section
    sections.push({ id, title: rawTitle, html: sectionHtml });
    jumpLinks.push({ id, label: rawTitle });
  }

  // Also extract FAQs from "Q." patterns anywhere in sections if none found yet
  if (faqs.length === 0) {
    for (const section of sections) {
      const qMatches = [
        ...section.html.matchAll(
          /<(?:p|h3|h4)[^>]*>\s*(?:<strong[^>]*>)?\s*Q[\.\:]\s*([\s\S]*?)(?:<\/strong>)?\s*<\/(?:p|h3|h4)>/gi
        ),
      ];
      if (qMatches.length >= 2) {
        for (let j = 0; j < qMatches.length; j++) {
          const question = qMatches[j][1].replace(/<[^>]*>/g, "").trim();
          const startPos = qMatches[j].index! + qMatches[j][0].length;
          const endPos = qMatches[j + 1]
            ? qMatches[j + 1].index!
            : section.html.length;
          const answer = section.html
            .substring(startPos, endPos)
            .replace(/<[^>]*>/g, "")
            .trim();
          if (question && answer) {
            faqs.push({ question, answer });
          }
        }
        // Remove this section from regular sections
        const idx = sections.indexOf(section);
        if (idx > -1) sections.splice(idx, 1);
        break;
      }
    }
  }

  return { sections, keyTakeaways, faqs, jumpLinks, quickLinks };
}

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">
          {faq.question}
        </span>
        <span
          className={`material-symbols-outlined text-slate-400 mt-1 shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          expand_more
        </span>
      </button>
      {open && (
        <div className="pb-5 text-slate-600 leading-relaxed">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

export default function BlogArticleContent({
  htmlContent,
}: {
  htmlContent: string;
}) {
  const { sections, keyTakeaways, faqs, jumpLinks, quickLinks } =
    parseHtmlContent(htmlContent);
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Use quick links if available, otherwise fall back to jump links
  const hasQuickLinks = quickLinks.length > 0;

  // Trim jump links labels to be short (only used when no quick links)
  const trimmedLinks = jumpLinks
    .filter((l) => l.label.length > 3)
    .slice(0, 6)
    .map((l) => ({
      ...l,
      label:
        l.label.length > 30
          ? l.label.substring(0, 28).trim() + "…"
          : l.label,
    }));

  // Add FAQ to jump links if present
  const allJumpLinks = [
    ...trimmedLinks,
    ...(faqs.length > 0 ? [{ id: "faqs", label: "FAQs" }] : []),
  ];

  return (
    <div ref={contentRef} suppressHydrationWarning>
      {/* Quick Links (styled card with Roman numerals) */}
      {hasQuickLinks && (
        <div className="bg-background-light border border-slate-200 rounded-2xl p-6 md:p-8 mb-10">
          <h3 className="text-xl font-display text-slate-900 mb-6 flex items-center gap-2.5">
            <span className="material-symbols-outlined text-primary text-xl">
              link
            </span>
            Quick Links
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {quickLinks.map((ql, i) => (
              <button
                key={i}
                onClick={() => scrollToSection(ql.id)}
                className="flex items-start gap-3.5 text-left group"
              >
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary text-sm font-bold shrink-0 mt-0.5">
                  {ql.numeral}
                </span>
                <span className="text-[15px] text-slate-700 leading-snug group-hover:text-primary transition-colors pt-1.5">
                  {ql.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Jump to Section (pill buttons - only when no quick links) */}
      {!hasQuickLinks && allJumpLinks.length > 1 && (
        <div className="mb-10">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">
              arrow_downward
            </span>
            Jump to section
          </p>
          <div className="flex flex-wrap gap-2">
            {allJumpLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-4 py-2 text-sm font-medium rounded-full border border-slate-200 text-slate-700 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Key Takeaways */}
      {keyTakeaways.length > 0 && (
        <div className="bg-primary/5 border border-primary/15 rounded-2xl p-6 md:p-8 mb-10">
          <h3 className="text-xl font-display text-slate-900 mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              eco
            </span>
            Key Takeaways
          </h3>
          <ul className="space-y-3">
            {keyTakeaways.slice(0, 8).map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5 shrink-0">
                  check_circle
                </span>
                <span className="text-slate-700 leading-relaxed text-[15px]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Article Sections */}
      {sections.map((section) => (
        <div key={section.id} id={section.id} className="scroll-mt-24" suppressHydrationWarning>
          {section.title && (
            <h2 className="text-3xl md:text-4xl font-display text-slate-900 mt-12 mb-6 first:mt-0">
              {section.title}
            </h2>
          )}
          <div
            suppressHydrationWarning
            className="blog-section-content
              [&_p]:text-lg [&_p]:text-slate-700 [&_p]:leading-relaxed [&_p]:mb-6
              [&_h3]:text-2xl [&_h3]:font-display [&_h3]:text-slate-900 [&_h3]:mt-10 [&_h3]:mb-4
              [&_h4]:text-xl [&_h4]:font-display [&_h4]:text-slate-900 [&_h4]:mt-8 [&_h4]:mb-3
              [&_h5]:text-lg [&_h5]:font-display [&_h5]:text-slate-900 [&_h5]:mt-6 [&_h5]:mb-3
              [&_strong]:text-slate-900 [&_strong]:font-semibold
              [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-primary/80
              [&_ul]:my-6 [&_ul]:pl-6 [&_ul]:list-disc [&_ul]:space-y-2
              [&_ol]:my-6 [&_ol]:pl-6 [&_ol]:list-decimal [&_ol]:space-y-2
              [&_li]:text-lg [&_li]:text-slate-700 [&_li]:leading-relaxed
              [&_img]:rounded-2xl [&_img]:shadow-md [&_img]:my-8 [&_img]:max-w-full [&_img]:h-auto
              [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-slate-600 [&_blockquote]:my-6"
            dangerouslySetInnerHTML={{ __html: section.html }}
          />
        </div>
      ))}

      {/* FAQs */}
      {faqs.length > 0 && (
        <div id="faqs" className="scroll-mt-24 mt-16">
          <h2 className="text-3xl md:text-4xl font-display text-slate-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-200 px-6">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
