"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    const fields: Record<string, string> = {
      "Name": data.get("name") as string,
      "Email": data.get("email") as string,
      "Subject": data.get("subject") as string,
      "Message": data.get("message") as string,
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formTitle: "Contact Form",
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
      form.reset();
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
        <p className="text-slate-600">We&apos;ll get back to you within 24&ndash;48 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 ml-1" htmlFor="name">
            Name
          </label>
          <input
            className="w-full bg-slate-50 border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/20 text-slate-900 transition-all outline-none"
            id="name"
            name="name"
            placeholder="How should we address you?"
            type="text"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 ml-1" htmlFor="email">
            Email
          </label>
          <input
            className="w-full bg-slate-50 border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/20 text-slate-900 transition-all outline-none"
            id="email"
            name="email"
            placeholder="email@example.com"
            type="email"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 ml-1" htmlFor="subject">
          Subject
        </label>
        <select
          className="w-full bg-slate-50 border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/20 text-slate-900 transition-all appearance-none outline-none"
          id="subject"
          name="subject"
          defaultValue=""
        >
          <option value="" disabled>Select a topic</option>
          <option value="Developmental Milestones">Developmental Milestones</option>
          <option value="Workshops & Programs">Workshops &amp; Programs</option>
          <option value="Technical Support">Technical Support</option>
          <option value="Other Inquiry">Other Inquiry</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 ml-1" htmlFor="message">
          How can we help?
        </label>
        <textarea
          className="w-full bg-slate-50 border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/20 text-slate-900 transition-all min-h-[200px] outline-none"
          id="message"
          name="message"
          placeholder="Share your thoughts or questions here..."
          required
        />
      </div>
      {status === "error" && (
        <p className="text-red-500 text-sm text-center">
          Something went wrong. Please try again or email us directly at info@babypillars.com.
        </p>
      )}
      <button
        className="w-full md:w-auto bg-primary hover:bg-primary/90 disabled:opacity-60 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-primary/20"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
