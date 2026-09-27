"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { courses } from "@/lib/courses";

type Status = "idle" | "loading" | "success" | "error";

export default function RegisterForm() {
  const searchParams = useSearchParams();
  const preselectedCourse = searchParams.get("course") ?? "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState(preselectedCourse);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    setFieldErrors({});

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, course }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(data.message ?? "حدث خطأ أثناء إرسال البيانات.");
        setFieldErrors(data.errors ?? {});
        return;
      }

      setStatus("success");
      setMessage(data.message ?? "تم استلام تسجيلك بنجاح!");
      setName("");
      setEmail("");
      setCourse("");
    } catch {
      setStatus("error");
      setMessage("تعذّر الاتصال بالخادم، حاول مرة أخرى.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="py-6 text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-800 text-sand-50">
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
            <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mb-2 font-display text-3xl font-bold text-brand-900">تم التسجيل بنجاح</h3>
        <p className="text-brand-700/80">{message}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-quiet mt-8 text-sm"
        >
          تسجيل شخص آخر
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-brand-900">
          الاسم الكامل
        </label>
        <input
          id="name"
          aria-invalid={fieldErrors.name ? true : undefined}
          aria-describedby={fieldErrors.name ? "name-error" : undefined}
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="مثال: أحمد محمد"
          className="w-full rounded-lg border border-brand-200 bg-sand-50/60 px-4 py-3 text-brand-900 outline-none transition duration-200 placeholder:text-brand-700/40 hover:border-brand-300 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100 aria-[invalid=true]:border-red-400"
        />
        {fieldErrors.name && (
          <p id="name-error" className="mt-1.5 text-sm text-red-700">{fieldErrors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-brand-900">
          البريد الإلكتروني
        </label>
        <input
          id="email"
          aria-invalid={fieldErrors.email ? true : undefined}
          aria-describedby={fieldErrors.email ? "email-error" : undefined}
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@email.com"
          dir="ltr"
          className="w-full rounded-lg border border-brand-200 bg-sand-50/60 px-4 py-3 text-brand-900 outline-none transition duration-200 placeholder:text-brand-700/40 hover:border-brand-300 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100 aria-[invalid=true]:border-red-400"
        />
        {fieldErrors.email && (
          <p id="email-error" className="mt-1.5 text-sm text-red-700">{fieldErrors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="course" className="mb-1.5 block text-sm font-semibold text-brand-900">
          الكورس المطلوب
        </label>
        <select
          id="course"
          aria-invalid={fieldErrors.course ? true : undefined}
          aria-describedby={fieldErrors.course ? "course-error" : undefined}
          name="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="w-full rounded-lg border border-brand-200 bg-sand-50/60 px-4 py-3 text-brand-900 outline-none transition duration-200 placeholder:text-brand-700/40 hover:border-brand-300 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100 aria-[invalid=true]:border-red-400"
        >
          <option value="" disabled>
            اختر الكورس المناسب لك
          </option>
          {courses.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.title} — {c.level}
            </option>
          ))}
        </select>
        {fieldErrors.course && (
          <p id="course-error" className="mt-1.5 text-sm text-red-700">{fieldErrors.course}</p>
        )}
      </div>

      {status === "error" && message && !Object.keys(fieldErrors).length && (
        <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{message}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "جارٍ الإرسال..." : "إرسال التسجيل"}
      </button>
    </form>
  );
}
