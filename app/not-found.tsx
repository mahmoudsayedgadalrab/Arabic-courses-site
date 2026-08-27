import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-5 py-24 text-center">
      <h1 className="mb-3 text-4xl font-extrabold text-brand-900">٤٠٤</h1>
      <p className="mb-8 text-brand-700/80">عذرًا، الصفحة التي تبحث عنها غير موجودة.</p>
      <Link
        href="/"
        className="rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-sand-50 shadow-soft transition hover:bg-brand-600"
      >
        العودة إلى الرئيسية
      </Link>
    </div>
  );
}
