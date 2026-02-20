export interface Section {
  id: string;
  title: string;
  html: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface QuickLink {
  numeral: string;
  label: string;
  id: string;
}

export interface ParsedContent {
  sections: Section[];
  keyTakeaways: string[];
  faqs: FAQ[];
  jumpLinks: { id: string; label: string }[];
  quickLinks: QuickLink[];
}

const ROMAN_NUMERALS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV"];

function extractQuickLinks(html: string): { quickLinks: QuickLink[]; cleanedHtml: string } {
  const quickLinks: QuickLink[] = [];
  const quickLinksMatch = html.match(
    /<p[^>]*>\s*<strong[^>]*>\s*Quick\s*links?\s*:?\s*<\/strong>\s*<\/p>/i
  );
  if (!quickLinksMatch) return { quickLinks, cleanedHtml: html };

  const qlStart = quickLinksMatch.index!;
  let qlEnd = qlStart + quickLinksMatch[0].length;
  const afterQl = html.substring(qlEnd);
  const itemRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
  let itemMatch;
  let lastEnd = 0;

  while ((itemMatch = itemRegex.exec(afterQl)) !== null) {
    const itemContent = itemMatch[1];
    const plainText = itemContent.replace(/<[^>]*>/g, "").trim();
    const hasRomanNumeral = /^[ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ\s\.]+/i.test(plainText) || /^[IVX]+[\.\s]/i.test(plainText);
    const isLink = /<a\s/i.test(itemContent);
    const isShortEnough = plainText.length < 200;

    if ((hasRomanNumeral || isLink) && isShortEnough) {
      let label = plainText
        .replace(/^[ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ\s\.]+/i, "")
        .replace(/^[IVX]+[\.\s]+/i, "")
        .trim();
      if (!label) {
        const linkTextMatch = itemContent.match(/<a[^>]*>([\s\S]*?)<\/a>/i);
        if (linkTextMatch) label = linkTextMatch[1].replace(/<[^>]*>/g, "").trim();
      }
      if (label) {
        const id = label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").substring(0, 60);
        quickLinks.push({ numeral: ROMAN_NUMERALS[quickLinks.length] || `${quickLinks.length + 1}`, label, id });
      }
      lastEnd = itemMatch.index! + itemMatch[0].length;
    } else {
      break;
    }
  }

  qlEnd += lastEnd;
  return { quickLinks, cleanedHtml: html.substring(0, qlStart) + html.substring(qlEnd) };
}

// Removes a <div> block that matches the given opening-tag pattern, tracking nesting depth.
function removeDivBlock(html: string, openTagPattern: RegExp): string {
  const match = html.match(openTagPattern);
  if (!match || match.index === undefined) return html;
  const startIdx = match.index;
  let depth = 0;
  let i = startIdx;
  while (i < html.length) {
    if (/^<div/i.test(html.slice(i))) {
      depth++;
      i += 4;
    } else if (/^<\/div>/i.test(html.slice(i))) {
      depth--;
      if (depth === 0) {
        return html.slice(0, startIdx) + html.slice(i + 6);
      }
      i += 6;
    } else {
      i++;
    }
  }
  return html;
}

export function stripWordPressJunk(html: string): string {
  html = html.replace(/<(?:footer|div)[^>]*id="thrive-footer"[\s\S]*$/i, "");
  html = html.replace(/<div[^>]*id="landingpage-bottom-section"[\s\S]*$/i, "");
  html = html.replace(/<script[\s\S]*?<\/script>/gi, "");
  html = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");
  html = html.replace(/^[\s\S]*?<\/header>/i, "");
  html = html.replace(/<a[^>]*href="https?:\/\/babypillars\.com"[^>]*>[\s\S]*?<\/a>/gi, "");
  html = html.replace(/<ul id="m-[^"]*">[\s\S]*?<\/ul>\s*<\/div>\s*<\/div>/gi, "");
  html = html.replace(/<div id="content">[\s\S]*?<section><\/section>[\s\S]*?<\/div>/gi, "");
  html = html.replace(/<div id="tve_flt"><div id="tve_editor">/gi, "");
  html = html.replace(/<\/div><\/div>\s*<\/section>\s*(<\/div>\s*)*$/i, "");
  html = html.replace(/<svg[^>]*>[\s\S]*?<\/svg>/gi, "");
  html = html.replace(/<div[^>]*class=['"][^'"]*xlwcty[^'"]*['"][^>]*>[\s\S]*?<\/div>/gi, "");
  html = html.replace(/<a[^>]*href="javascript:void\(0\)"[^>]*>[\s\S]*?<\/a>/gi, "");
  html = html.replace(/<img[^>]*src="[^"]*babypillars-logo[^"]*"[^>]*\/?>/gi, "");
  html = html.replace(/<img[^>]*src="[^"]*[Qq]uote[_-](?:left|right|marks)[^"]*"[^>]*\/?>/gi, "");
  html = html.replace(/<img[^>]*src="[^"]*sig-anat[^"]*"[^>]*\/?>/gi, "");
  html = html.replace(/<a[^>]*href="[^"]*\/quiz-by-babypillars\/?[^"]*"[^>]*>[\s\S]*?<\/a>/gi, "");
  html = html.replace(/<img[^>]*class="[^"]*wp-smiley[^"]*"[^>]*alt="([^"]*)"[^>]*\/?>/gi, "$1");
  html = html.replace(/<img[^>]*src="https?:\/\/s\.w\.org\/images\/core\/emoji\/[^"]*"[^>]*alt="([^"]*)"[^>]*\/?>/gi, "$1");
  html = html.replace(/<img[^>]*alt="([^"]*)"[^>]*src="https?:\/\/s\.w\.org\/images\/core\/emoji\/[^"]*"[^>]*\/?>/gi, "$1");
  html = html.replace(/\s+style=(?:"[^"]*"|'[^']*')/gi, "");
  html = html.replace(/(<img[^>]*?)\s+width="[^"]*"/gi, "$1");
  html = html.replace(/(<img[^>]*?)\s+height="[^"]*"/gi, "$1");
  html = html.replace(/<h1([^>]*)>/gi, "<h2$1>");
  html = html.replace(/<\/h1>/gi, "</h2>");
  html = html.replace(/<p[^>]*>\s*(&nbsp;|\s)*<\/p>/gi, "");
  let prev: string;
  do {
    prev = html;
    html = html.replace(/<div[^>]*>\s*<\/div>/gi, "");
  } while (html !== prev);
  html = html.replace(/^(\s*<div[^>]*>\s*)+(?=<[^d]|<div[^>]*(?:id|class))/i, "");
  html = html.replace(/^(\s*<\/[a-z][a-z0-9]*\s*>\s*)+/i, "");
  // Remove Thrive Architect contact template blocks (Contact 02, Contact Form 05, etc.)
  html = removeDivBlock(html, /<div[^>]*tcb-template-name="Contact\s/i);
  html = removeDivBlock(html, /<div[^>]*tcb-template-id="66432"/i);
  // Remove Google Maps iframes
  html = html.replace(/<iframe[^>]*google\.com\/maps[\s\S]*?<\/iframe>/gi, "");
  // Remove contact form sections (address + "Drop us a line" + form)
  html = html.replace(/<form[\s\S]*?<\/form>/gi, "");
  html = html.replace(/<[^>]+>[^<]*(?:Drop us a line|154 Grand St|info@babypillars\.com|855-939-675|0 of 350)[^<]*<\/[^>]+>/gi, "");
  // Remove the e-book cover image used as a section divider
  html = html.replace(/<img[^>]*alt="[^"]*e-book cover[^"]*"[^>]*\/?>/gi, "");
  // Remove any lingering input/textarea/button elements (form remnants)
  html = html.replace(/<(?:input|textarea|select|button|label)[^>]*>[\s\S]*?<\/(?:textarea|select|button|label)>/gi, "");
  html = html.replace(/<(?:input|textarea|select|button|label)[^>]*\/?>/gi, "");
  return html.trim();
}

export function parseHtmlContent(html: string): ParsedContent {
  html = stripWordPressJunk(html);
  const sections: Section[] = [];
  const keyTakeaways: string[] = [];
  const faqs: FAQ[] = [];
  const jumpLinks: { id: string; label: string }[] = [];

  const { quickLinks, cleanedHtml } = extractQuickLinks(html);
  html = cleanedHtml;

  const h2Regex = /<h2[^>]*>(.*?)<\/h2>/gi;
  const h2Matches = [...html.matchAll(h2Regex)];

  if (h2Matches.length === 0) {
    sections.push({ id: "content", title: "", html });
    return { sections, keyTakeaways, faqs, jumpLinks, quickLinks };
  }

  const beforeFirst = html.substring(0, h2Matches[0].index).replace(/^(\s*<\/[a-z][a-z0-9]*\s*>\s*)+/i, "").trim();
  if (beforeFirst) sections.push({ id: "intro", title: "", html: beforeFirst });

  for (let i = 0; i < h2Matches.length; i++) {
    const match = h2Matches[i];
    const nextMatch = h2Matches[i + 1];
    const startIdx = match.index! + match[0].length;
    const endIdx = nextMatch ? nextMatch.index! : html.length;
    const sectionHtml = html.substring(startIdx, endIdx).replace(/^(\s*<\/[a-z][a-z0-9]*\s*>\s*)+/i, "").trim();
    const rawTitle = match[1].replace(/<[^>]*>/g, "").trim();
    const id = rawTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").substring(0, 60);

    const isKeyTakeaway = /key\s*take\s*away/i.test(rawTitle);
    const isFaqSection = /frequently\s*asked/i.test(rawTitle) || /^faqs?$/i.test(rawTitle);

    if (isKeyTakeaway) {
      const liMatches = [...sectionHtml.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)];
      if (liMatches.length > 0) {
        for (const li of liMatches) {
          const text = li[1].replace(/<[^>]*>/g, "").trim();
          if (text) keyTakeaways.push(text);
        }
      } else {
        const pMatches = [...sectionHtml.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)];
        for (const p of pMatches) {
          const text = p[1].replace(/<[^>]*>/g, "").trim();
          if (text && text.length > 20) keyTakeaways.push(text);
        }
      }
      continue;
    }

    if (isFaqSection) {
      const h3Matches = [...sectionHtml.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)];
      if (h3Matches.length > 0) {
        for (let j = 0; j < h3Matches.length; j++) {
          const question = h3Matches[j][1].replace(/<[^>]*>/g, "").trim();
          const answerStart = h3Matches[j].index! + h3Matches[j][0].length;
          const answerEnd = h3Matches[j + 1] ? h3Matches[j + 1].index! : sectionHtml.length;
          const answer = sectionHtml.substring(answerStart, answerEnd).replace(/<[^>]*>/g, "").trim();
          if (question && answer) faqs.push({ question, answer });
        }
      }
      if (faqs.length > 0) continue;
    }

    sections.push({ id, title: rawTitle, html: sectionHtml });
    jumpLinks.push({ id, label: rawTitle });
  }

  if (faqs.length === 0) {
    for (const section of sections) {
      const qMatches = [...section.html.matchAll(/<(?:p|h3|h4)[^>]*>\s*(?:<strong[^>]*>)?\s*Q[\.\:]\s*([\s\S]*?)(?:<\/strong>)?\s*<\/(?:p|h3|h4)>/gi)];
      if (qMatches.length >= 2) {
        for (let j = 0; j < qMatches.length; j++) {
          const question = qMatches[j][1].replace(/<[^>]*>/g, "").trim();
          const startPos = qMatches[j].index! + qMatches[j][0].length;
          const endPos = qMatches[j + 1] ? qMatches[j + 1].index! : section.html.length;
          const answer = section.html.substring(startPos, endPos).replace(/<[^>]*>/g, "").trim();
          if (question && answer) faqs.push({ question, answer });
        }
        const idx = sections.indexOf(section);
        if (idx > -1) sections.splice(idx, 1);
        break;
      }
    }
  }

  return { sections, keyTakeaways, faqs, jumpLinks, quickLinks };
}
