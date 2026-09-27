import Link from "next/link";
import type { Course } from "@/lib/courses";

export default function CourseCard({ course, index }: { course: Course; index: number }) {
  const number = (index + 1).toLocaleString("ar-EG");

  return (
    <article className="group relative flex h-full flex-col rounded-2xl bg-white/70 p-7 shadow-lift ring-1 ring-brand-900/5 transition duration-300 hover:-translate-y-1 hover:bg-white sm:p-8">
      <div className="mb-6 flex items-start justify-between gap-4">
        <span className="font-display text-5xl leading-none text-sand-400 transition duration-300 group-hover:text-sand-600">
          {number}
        </span>
        <div className="flex flex-wrap justify-end gap-2">
          <span className="tag">{course.level}</span>
          <span className="tag">{course.duration}</span>
        </div>
      </div>

      <h3 className="mb-3 text-2xl font-bold text-brand-900">
        <Link
          href={`/courses/${course.slug}`}
          className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none"
        >
          {course.title}
        </Link>
      </h3>
      <p className="mb-8 max-w-[46ch] flex-1 leading-7 text-brand-700/80">{course.summary}</p>

      <div className="flex items-end justify-between gap-4 border-t border-brand-900/5 pt-5">
        <div>
          <div className="text-xs font-medium text-brand-700/60">السعر</div>
          <div className="mt-0.5 font-semibold tabular-nums text-brand-900">{course.price}</div>
        </div>
        <span
          aria-hidden="true"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition duration-300 group-hover:-translate-x-1 group-hover:text-brand-900"
        >
          التفاصيل <span className="text-lg leading-none">←</span>
        </span>
      </div>
    </article>
  );
}
