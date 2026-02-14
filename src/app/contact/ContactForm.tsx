"use client";

import { FormEvent } from "react";

export default function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            className="text-sm font-semibold text-slate-700 ml-1"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="w-full bg-slate-50 border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/20 text-slate-900 transition-all outline-none"
            id="name"
            placeholder="How should we address you?"
            type="text"
          />
        </div>
        <div className="space-y-2">
          <label
            className="text-sm font-semibold text-slate-700 ml-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full bg-slate-50 border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/20 text-slate-900 transition-all outline-none"
            id="email"
            placeholder="email@example.com"
            type="email"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label
          className="text-sm font-semibold text-slate-700 ml-1"
          htmlFor="subject"
        >
          Subject
        </label>
        <select
          className="w-full bg-slate-50 border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/20 text-slate-900 transition-all appearance-none outline-none"
          id="subject"
          defaultValue=""
        >
          <option value="" disabled>
            Select a topic
          </option>
          <option value="milestones">Developmental Milestones</option>
          <option value="workshops">Workshops &amp; Programs</option>
          <option value="technical">Technical Support</option>
          <option value="other">Other Inquiry</option>
        </select>
      </div>
      <div className="space-y-2">
        <label
          className="text-sm font-semibold text-slate-700 ml-1"
          htmlFor="message"
        >
          How can we help?
        </label>
        <textarea
          className="w-full bg-slate-50 border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/20 text-slate-900 transition-all min-h-[200px] outline-none"
          id="message"
          placeholder="Share your thoughts or questions here..."
        ></textarea>
      </div>
      <button
        className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-primary/20"
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
}
