import Link from "next/link";
import type { Course } from "@/lib/courses";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-6 shadow-soft transition duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lg">
      <div className="mb-3 flex items-center gap-2">
        <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
          {course.level}
        </span>
        <span className="rounded-full bg-sand-100 px-3 py-1 text-xs font-semibold text-sand-700">
          {course.duration}
        </span>
      </div>

      <h3 className="mb-2 text-xl font-bold text-brand-900">{course.title}</h3>
      <p className="mb-5 flex-1 text-sm leading-6 text-brand-700/80">{course.summary}</p>

      <div className="mb-4 text-sm font-semibold text-brand-800">{course.price}</div>

      <div className="flex items-center gap-3">
        <Link
          href={`/courses/${course.slug}`}
          className="flex-1 rounded-full border border-brand-700 px-4 py-2 text-center text-sm font-semibold text-brand-700 transition hover:scale-[1.03] hover:bg-brand-700 hover:text-sand-50 active:scale-95"
        >
          تفاصيل الكورس
        </Link>
        <Link
          href={{ pathname: "/register", query: { course: course.slug } }}
          className="flex-1 rounded-full bg-brand-700 px-4 py-2 text-center text-sm font-semibold text-sand-50 transition hover:scale-[1.03] hover:bg-brand-600 active:scale-95"
        >
          سجّل الآن
        </Link>
      </div>
    </div>
  );
}
