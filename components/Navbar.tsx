import Link from "next/link";
import { siteConfig } from "@/lib/site";
import InstagramIcon from "@/components/InstagramIcon";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-100 bg-sand-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2 text-brand-800">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-700 text-sand-50 font-bold">
            ع
          </span>
          <span className="text-lg font-bold">{siteConfig.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-brand-800 sm:flex">
          <Link href="/" className="transition hover:text-brand-500">
            الرئيسية
          </Link>
          <Link href="/#courses" className="transition hover:text-brand-500">
            الكورسات
          </Link>
          <Link href="/register" className="transition hover:text-brand-500">
            التسجيل
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 text-sm font-medium text-brand-700 transition hover:text-brand-500 sm:flex"
            aria-label="تابعنا على انستجرام"
          >
            <InstagramIcon />
            انستجرام
          </a>
          <Link
            href="/register"
            className="rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-sand-50 shadow-soft transition hover:bg-brand-600 active:scale-[0.97]"
          >
            سجّل الآن
          </Link>
        </div>
      </div>
    </header>
  );
}
