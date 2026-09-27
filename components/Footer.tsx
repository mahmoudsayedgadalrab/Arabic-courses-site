import Link from "next/link";
import { siteConfig } from "@/lib/site";
import InstagramIcon from "@/components/InstagramIcon";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-brand-900/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 pb-10 pt-14 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5 text-brand-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-800 pb-1 font-display text-lg font-bold text-sand-100">
              ع
            </span>
            <span className="text-base font-bold">{siteConfig.shortName}</span>
          </div>
          <p className="mt-4 text-sm leading-7 text-brand-700/75">{siteConfig.description}</p>
        </div>

        <nav aria-label="روابط التذييل" className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-brand-700/80">
          <Link href="/#courses" className="transition duration-200 hover:text-brand-900">
            الكورسات
          </Link>
          <Link href="/register" className="transition duration-200 hover:text-brand-900">
            التسجيل
          </Link>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition duration-200 hover:text-brand-900"
          >
            <InstagramIcon className="h-4 w-4" />
            <span dir="ltr">@{siteConfig.instagramHandle}</span>
          </a>
        </nav>
      </div>

      <div className="mx-auto max-w-6xl border-t border-brand-900/5 px-5 py-5 text-xs text-brand-700/60">
        © {new Date().getFullYear().toLocaleString("ar-EG", { useGrouping: false })} {siteConfig.name}
      </div>
    </footer>
  );
}
