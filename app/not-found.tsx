import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-5 py-24 text-center">
      <h1 className="mb-4 font-display text-8xl font-bold text-sand-400">٤٠٤</h1>
      <p className="mb-10 text-lg text-brand-700/80">الصفحة التي تبحث عنها غير موجودة أو تم نقلها.</p>
      <Link
        href="/"
        className="btn-primary"
      >
        العودة إلى الرئيسية
      </Link>
    </div>
  );
}
