import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Programs: [
    { label: "0-3 Months", href: "/0-3-months-baby" },
    { label: "3-6 Months", href: "/3-6-months-baby" },
    { label: "6-9 Months", href: "/6-9-months-baby" },
    { label: "9-12 Months", href: "/9-12-months-baby" },
    { label: "12-24 Months", href: "/12-24-months-baby" },
    { label: "Full Program", href: "/babypillars-24-bundle" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Books", href: "/books" },
    { label: "Milestone Tracker", href: "/milestone-tracker" },
    { label: "Special Needs", href: "/special-needs-baby" },
    { label: "How It Works", href: "/how-it-works" },
  ],
  Support: [
    { label: "About", href: "/about-babypillars" },
    { label: "Contact", href: "/contact" },
    { label: "Support", href: "/support" },
    { label: "Private Sessions", href: "/private-online-sessions" },
    { label: "Terms & Privacy", href: "/terms-conditions" },
  ],
};

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-200 bg-background-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Image src="/logo.png" alt="BabyPillars" width={120} height={40} className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-slate-400">
              Milestone-based guidance for your baby&apos;s first 24 months.
            </p>
          </div>
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-sm font-semibold text-slate-700 mb-3">{section}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-slate-200 text-center">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} BabyPillars. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
