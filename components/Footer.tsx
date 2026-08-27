import Link from "next/link";
import { siteConfig } from "@/lib/site";
import InstagramIcon from "@/components/InstagramIcon";

export default function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 text-brand-800">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-700 text-sand-50 font-bold">
              ع
            </span>
            <span className="text-base font-bold">{siteConfig.shortName}</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-brand-700/80">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold text-brand-800">روابط سريعة</h4>
          <ul className="space-y-2 text-sm text-brand-700/80">
            <li>
              <Link href="/" className="transition hover:text-brand-500">
                الرئيسية
              </Link>
            </li>
            <li>
              <Link href="/#courses" className="transition hover:text-brand-500">
                الكورسات
              </Link>
            </li>
            <li>
              <Link href="/register" className="transition hover:text-brand-500">
                فورم التسجيل
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold text-brand-800">تواصل معنا</h4>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 px-4 py-2 text-sm font-medium text-brand-700 transition hover:border-brand-400 hover:text-brand-500"
          >
            <InstagramIcon />
            @{siteConfig.instagramHandle}
          </a>
        </div>
      </div>

      <div className="border-t border-brand-100 py-4 text-center text-xs text-brand-700/60">
        © {new Date().getFullYear()} {siteConfig.name} — جميع الحقوق محفوظة
      </div>
    </footer>
  );
}
