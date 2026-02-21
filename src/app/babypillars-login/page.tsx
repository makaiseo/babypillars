import type { Metadata } from "next";
import SectionBadge from "../components/SectionBadge";
import LoginForms from "./LoginForms";

export const metadata: Metadata = {
  title: "Log In or Sign Up - BabyPillars",
  description:
    "Log in to your BabyPillars account or create a new one to access your baby's personalised development roadmap.",
};

export default function LoginPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 hero-pattern">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionBadge text="Your Account" />
          <h1 className="text-5xl md:text-6xl font-display leading-[1.1] text-slate-900 mb-6">
            Log in or sign up to{" "}
            <span className="italic text-primary">BabyPillars</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Access your personalised baby development roadmap, milestone guides,
            and weekly focus plans.
          </p>
        </div>
      </section>

      {/* Forms */}
      <section className="pb-24 -mt-8">
        <div className="max-w-5xl mx-auto px-6">
          <LoginForms />
          <p className="text-center mt-8 text-slate-500 text-sm flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-base">
              verified_user
            </span>
            Your data is safe and never shared with third parties
          </p>
        </div>
      </section>
    </>
  );
}
