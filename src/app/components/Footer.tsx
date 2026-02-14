import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-200 bg-background-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Link href="/">
            <Image src="/logo.png" alt="BabyPillars" width={120} height={40} className="h-10 w-auto" />
          </Link>
          <div className="flex gap-8 text-sm text-slate-500">
            <Link className="hover:text-primary transition-colors" href="/privacy">
              Privacy
            </Link>
            <Link className="hover:text-primary transition-colors" href="/terms">
              Terms
            </Link>
            <Link
              className="hover:text-primary transition-colors"
              href="/contact"
            >
              Contact
            </Link>
            <a
              className="hover:text-primary transition-colors"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} BabyPillars. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
