"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/babypillars-24-bundle", label: "Full Program" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/special-needs-baby", label: "Special Needs" },
  { href: "/milestone-tracker", label: "Milestone Tracker" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about-babypillars", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <nav aria-label="Main navigation" className="sticky top-0 z-50 bg-background-light/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="BabyPillars" width={144} height={48} className="h-12 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "text-primary font-semibold"
                  : "hover:text-primary transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/babypillars-login"
            className={`hidden sm:inline-block px-6 py-2.5 rounded-full font-semibold border-2 border-primary transition-all ${
              pathname === "/babypillars-login" ? "bg-primary text-white" : "text-primary hover:bg-primary/5"
            }`}
          >
            Login
          </Link>
          <Link
            href="/pricing"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-sm hidden sm:inline-block"
          >
            Get Started
          </Link>
          <button
            className="md:hidden p-2 text-slate-600 hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className="material-symbols-outlined">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-background-light px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block text-sm font-medium ${
                pathname === link.href ? "text-primary" : "text-slate-600"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/babypillars-login"
            className="block w-full text-center border-2 border-primary text-primary px-6 py-2.5 rounded-full font-semibold"
            onClick={() => setMobileOpen(false)}
          >
            Login
          </Link>
          <Link
            href="/pricing"
            className="block w-full text-center bg-primary text-white px-6 py-2.5 rounded-full font-semibold"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
