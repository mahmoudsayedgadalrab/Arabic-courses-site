import Link from "next/link";
import { siteConfig } from "@/lib/site";
import InstagramIcon from "@/components/InstagramIcon";
import NavLinks from "@/components/NavLinks";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-900/5 bg-sand-50/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <Link href="/" className="flex items-center gap-2.5 text-brand-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-800 pb-1 font-display text-xl font-bold text-sand-100">
            ع
          </span>
          <span className="text-lg font-bold">{siteConfig.shortName}</span>
        </Link>

        <NavLinks className="hidden items-center gap-8 text-sm font-medium md:flex" />

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-700 transition duration-200 hover:text-sand-700"
            aria-label="تابعنا على انستجرام"
          >
            <InstagramIcon />
          </a>
          <Link
            href="/register"
            className="rounded-lg bg-brand-800 px-4 py-2 text-sm font-semibold text-sand-50 transition duration-200 hover:bg-brand-700 active:scale-[0.98]"
          >
            سجّل الآن
          </Link>
        </div>
      </div>

      <NavLinks className="flex items-center justify-center gap-8 border-t border-brand-900/5 py-2 text-sm font-medium md:hidden" />
    </header>
  );
}
