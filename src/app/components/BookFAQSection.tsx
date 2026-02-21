"use client";

import { useState } from "react";
import type { FAQ } from "@/app/lib/parseArticle";

function FAQItem({ faq, index }: { faq: FAQ; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = `book-faq-${index}`;
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
      >
        <span className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors leading-snug">
          {faq.question}
        </span>
        <span
          className={`material-symbols-outlined text-slate-400 mt-0.5 shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          expand_more
        </span>
      </button>
      <div id={panelId} hidden={!open} className="pb-6 text-slate-600 leading-relaxed text-[17px]">
        {faq.answer}
      </div>
    </div>
  );
}

export default function BookFAQSection({ faqs }: { faqs: FAQ[] }) {
  return (
    <section className="py-20 bg-background-light">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="bg-white rounded-3xl border border-slate-200 px-8">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
