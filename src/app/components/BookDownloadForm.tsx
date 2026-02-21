"use client";

import { FormEvent, useState } from "react";

const ageRanges = [
  "0-3 Months",
  "3-6 Months",
  "6-9 Months",
  "9-12 Months",
  "12-24 Months",
  "24+ Months",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function BookDownloadForm({
  buttonText,
  formTitle,
}: {
  buttonText: string;
  formTitle: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const data = new FormData(e.currentTarget);

    const fields: Record<string, string> = {
      "First Name": data.get("first-name") as string,
      "Last Name": data.get("last-name") as string,
      "Email Address": data.get("email") as string,
      "Baby's Age": data.get("baby-age") as string,
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formTitle,
          pageUrl: window.location.href,
          fields,
          submittedAt: new Date().toLocaleString("en-US", {
            dateStyle: "full",
            timeStyle: "short",
          }),
        }),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-primary text-3xl">check_circle</span>
        </div>
        <h3 className="text-2xl font-display text-slate-900 mb-2">Thank you, Sent!</h3>
        <p className="text-slate-600">Check your inbox, your guide is on its way.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 relative z-10 max-w-2xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="first-name">
            First Name
          </label>
          <input
            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            id="first-name"
            name="first-name"
            placeholder="Your name"
            type="text"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="last-name">
            Last Name
          </label>
          <input
            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            id="last-name"
            name="last-name"
            placeholder="Your last name"
            type="text"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="email">
          Email Address
        </label>
        <input
          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          id="email"
          name="email"
          placeholder="hello@example.com"
          type="email"
          required
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
              <input className="sr-only" name="baby-age" type="radio" value={range} />
              <span className="text-sm font-medium">{range}</span>
            </label>
          ))}
        </div>
      </div>
      {status === "error" && (
        <p className="text-red-500 text-sm text-center">
          Something went wrong. Please try again or contact us at info@babypillars.com.
        </p>
      )}
      <button
        className="w-full bg-primary hover:bg-primary/90 disabled:opacity-60 text-white font-bold py-5 rounded-full text-lg shadow-lg shadow-primary/30 transition-all transform hover:scale-[1.01] active:scale-95"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : buttonText}
      </button>
      <p className="text-xs text-center text-slate-500 mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>
  );
}
