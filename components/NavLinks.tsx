"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "الرئيسية", match: (p: string) => p === "/" },
  { href: "/#courses", label: "الكورسات", match: (p: string) => p.startsWith("/courses") },
  { href: "/register", label: "التسجيل", match: (p: string) => p.startsWith("/register") },
];

export default function NavLinks({ className = "" }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav aria-label="القائمة الرئيسية" className={className}>
      {links.map((link) => {
        const active = link.match(pathname);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`relative py-1 transition duration-200 hover:text-brand-600 ${
              active
                ? "text-brand-900 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-sand-500"
                : "text-brand-700/80"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
