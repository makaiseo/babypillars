"use client";

import { FormEvent } from "react";

const ageRanges = [
  "0-3 Months",
  "3-6 Months",
  "6-9 Months",
  "9-12 Months",
  "12-24 Months",
  "24+ Months",
];

export default function SessionForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 relative z-10 max-w-2xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label
            className="block text-sm font-semibold text-slate-700 mb-2"
            htmlFor="first-name"
          >
            First Name
          </label>
          <input
            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            id="first-name"
            placeholder="Your name"
            type="text"
          />
        </div>
        <div>
          <label
            className="block text-sm font-semibold text-slate-700 mb-2"
            htmlFor="last-name"
          >
            Last Name
          </label>
          <input
            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            id="last-name"
            placeholder="Your last name"
            type="text"
          />
        </div>
      </div>
      <div>
        <label
          className="block text-sm font-semibold text-slate-700 mb-2"
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          id="email"
          placeholder="hello@example.com"
          type="email"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-4 text-center">
          Your baby&apos;s current age
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {ageRanges.map((range) => (
            <label
              key={range}
              className="relative flex items-center justify-center p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-primary/5 transition-colors has-[input:checked]:bg-primary has-[input:checked]:border-primary has-[input:checked]:text-white"
            >
              <input
                className="sr-only"
                name="baby-age"
                type="radio"
                value={range}
              />
              <span className="text-sm font-medium">{range}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <label
          className="block text-sm font-semibold text-slate-700 mb-2"
          htmlFor="message"
        >
          What would you like to focus on? <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <textarea
          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
          id="message"
          placeholder="Tell Anat about your biggest challenge or question..."
          rows={3}
        />
      </div>
      <button
        className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-5 rounded-full text-lg shadow-lg shadow-primary/30 transition-all transform hover:scale-[1.01] active:scale-95"
        type="submit"
      >
        Book My Session With Anat
      </button>
      <p className="text-xs text-center text-slate-500 mt-4">
        Anat will personally reach out within 24 hours to confirm your session.
      </p>
    </form>
  );
}
