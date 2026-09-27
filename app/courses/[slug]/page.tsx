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

  const otherCourses = courses.filter((c) => c.slug !== course.slug);

  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-10 sm:pt-14">
      <nav aria-label="مسار التصفح" className="mb-10 text-sm text-brand-700/70">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="transition duration-200 hover:text-brand-900">
              الرئيسية
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/#courses" className="transition duration-200 hover:text-brand-900">
              الكورسات
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-brand-900">
            {course.title}
          </li>
        </ol>
      </nav>

      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <span className="tag">{course.level}</span>
            <span className="tag">{course.duration}</span>
          </div>

          <h1 className="mb-6 font-display text-5xl font-bold leading-[1.25] text-brand-900 sm:text-6xl">
            {course.title}
          </h1>
          <p className="mb-14 max-w-[60ch] text-lg leading-8 text-brand-700/80">
            {course.description}
          </p>

          <section className="mb-14">
            <h2 className="mb-6 font-display text-3xl font-bold text-brand-900">ماذا ستتعلّم؟</h2>
            <ol className="divide-y divide-brand-900/10 border-y border-brand-900/10">
              {course.highlights.map((point, index) => (
                <li key={point} className="grid grid-cols-[2.5rem_1fr] items-baseline gap-3 py-4">
                  <span className="font-display text-xl text-sand-500">
                    {(index + 1).toLocaleString("ar-EG")}
                  </span>
                  <span className="leading-7 text-brand-800">{point}</span>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="mb-3 font-display text-3xl font-bold text-brand-900">لمن هذا الكورس؟</h2>
            <p className="max-w-[60ch] text-lg leading-8 text-brand-700/80">{course.audience}</p>
          </section>
        </div>

        {/* Enrollment panel */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl bg-white/80 p-7 shadow-lift ring-1 ring-brand-900/5">
            <dl className="divide-y divide-brand-900/5">
              <div className="pb-5">
                <dt className="text-xs font-medium text-brand-700/60">السعر</dt>
                <dd className="mt-1 font-display text-3xl font-bold tabular-nums text-brand-900">
                  {course.price}
                </dd>
              </div>
              <div className="py-4">
                <dt className="text-xs font-medium text-brand-700/60">المدة</dt>
                <dd className="mt-1 font-semibold text-brand-900">{course.duration}</dd>
              </div>
              <div className="py-4">
                <dt className="text-xs font-medium text-brand-700/60">المواعيد</dt>
                <dd className="mt-1 font-semibold text-brand-900">{course.schedule}</dd>
              </div>
            </dl>
            <Link
              href={{ pathname: "/register", query: { course: course.slug } }}
              className="btn-primary mt-4 w-full"
            >
              سجّل في هذا الكورس
            </Link>
          </div>
        </aside>
      </div>

      {otherCourses.length > 0 && (
        <section className="mt-24 border-t border-brand-900/10 pt-12">
          <h2 className="mb-6 font-display text-3xl font-bold text-brand-900">كورسات أخرى</h2>
          <ul className="grid gap-x-8 sm:grid-cols-3">
            {otherCourses.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/courses/${c.slug}`}
                  className="group flex items-center justify-between gap-3 border-b border-brand-900/10 py-4 transition duration-200 hover:text-brand-600"
                >
                  <span>
                    <span className="block font-semibold text-brand-900 group-hover:text-brand-600">
                      {c.title}
                    </span>
                    <span className="text-sm text-brand-700/70">{c.level}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-lg transition duration-200 group-hover:-translate-x-1"
                  >
                    ←
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
