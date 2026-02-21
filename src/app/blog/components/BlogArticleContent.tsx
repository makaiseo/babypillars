"use client";

import { useState } from "react";
import type { ParsedContent, FAQ } from "@/app/lib/parseArticle";

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
  parsedContent,
}: {
  parsedContent: ParsedContent;
}) {
  const { sections, keyTakeaways, faqs, jumpLinks, quickLinks } = parsedContent;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const hasQuickLinks = quickLinks.length > 0;

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

  const allJumpLinks = [
    ...trimmedLinks,
    ...(faqs.length > 0 ? [{ id: "faqs", label: "FAQs" }] : []),
  ];

  return (
    <div suppressHydrationWarning>
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
