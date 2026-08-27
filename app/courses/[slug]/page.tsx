import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { courses, getCourseBySlug } from "@/lib/courses";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const course = getCourseBySlug(params.slug);
  if (!course) return {};
  return {
    title: course.title,
    description: course.summary,
  };
}

export default function CourseDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const course = getCourseBySlug(params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-5 py-12 sm:py-16">
      <nav className="mb-6 text-sm text-brand-700/70">
        <Link href="/" className="hover:text-brand-500">
          الرئيسية
        </Link>
        <span className="mx-2">/</span>
        <Link href="/#courses" className="hover:text-brand-500">
          الكورسات
        </Link>
        <span className="mx-2">/</span>
        <span className="text-brand-900">{course.title}</span>
      </nav>

      <div className="mb-6 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
          {course.level}
        </span>
        <span className="rounded-full bg-sand-100 px-3 py-1 text-xs font-semibold text-sand-700">
          {course.duration}
        </span>
      </div>

      <h1 className="mb-4 text-3xl font-extrabold text-brand-900 sm:text-4xl">
        {course.title}
      </h1>
      <p className="mb-8 text-lg leading-8 text-brand-700/80">{course.description}</p>

      <div className="mb-10 grid gap-6 rounded-2xl border border-brand-100 bg-white p-6 shadow-soft sm:grid-cols-3">
        <div>
          <div className="text-xs font-semibold text-brand-700/60">السعر</div>
          <div className="mt-1 font-bold text-brand-900">{course.price}</div>
        </div>
        <div>
          <div className="text-xs font-semibold text-brand-700/60">المدة</div>
          <div className="mt-1 font-bold text-brand-900">{course.duration}</div>
        </div>
        <div>
          <div className="text-xs font-semibold text-brand-700/60">المواعيد</div>
          <div className="mt-1 font-bold text-brand-900">{course.schedule}</div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="mb-4 text-xl font-bold text-brand-900">ماذا ستتعلّم؟</h2>
        <ul className="space-y-3">
          {course.highlights.map((point) => (
            <li key={point} className="flex items-start gap-3 text-brand-800">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                ✓
              </span>
              <span className="leading-7">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-10 rounded-2xl bg-brand-50 p-6">
        <h2 className="mb-2 text-lg font-bold text-brand-900">لمن هذا الكورس؟</h2>
        <p className="leading-7 text-brand-700/80">{course.audience}</p>
      </div>

      <div className="flex flex-wrap items-center gap-4 border-t border-brand-100 pt-8">
        <Link
          href={{ pathname: "/register", query: { course: course.slug } }}
          className="rounded-full bg-brand-700 px-6 py-3 text-base font-semibold text-sand-50 shadow-soft transition hover:bg-brand-600"
        >
          سجّل في هذا الكورس
        </Link>
        <Link
          href="/#courses"
          className="rounded-full border border-brand-300 px-6 py-3 text-base font-semibold text-brand-800 transition hover:border-brand-500 hover:text-brand-600"
        >
          تصفّح كورسات أخرى
        </Link>
      </div>
    </div>
  );
}
