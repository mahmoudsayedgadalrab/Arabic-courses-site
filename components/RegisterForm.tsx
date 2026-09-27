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
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-700 text-2xl text-sand-50">
          ✓
        </div>
        <h3 className="mb-2 text-xl font-bold text-brand-900">تم التسجيل بنجاح</h3>
        <p className="text-brand-700/80">{message}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-brand-300 px-5 py-2 text-sm font-semibold text-brand-800 transition hover:border-brand-500 active:scale-[0.97]"
        >
          تسجيل شخص آخر
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-brand-900">
          الاسم الكامل
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          enterKeyHint="next"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="مثال: أحمد محمد"
          className="w-full rounded-xl border border-brand-200 bg-white px-4 py-2.5 text-brand-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
        />
        {fieldErrors.name && (
          <p className="mt-1 text-sm text-red-600">{fieldErrors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-brand-900">
          البريد الإلكتروني
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          enterKeyHint="next"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@email.com"
          dir="ltr"
          className="w-full rounded-xl border border-brand-200 bg-white px-4 py-2.5 text-brand-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
        />
        {fieldErrors.email && (
          <p className="mt-1 text-sm text-red-600">{fieldErrors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="course" className="mb-1.5 block text-sm font-semibold text-brand-900">
          الكورس المطلوب
        </label>
        <select
          id="course"
          name="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="w-full rounded-xl border border-brand-200 bg-white px-4 py-2.5 text-brand-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
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
          <p className="mt-1 text-sm text-red-600">{fieldErrors.course}</p>
        )}
      </div>

      {status === "error" && message && !Object.keys(fieldErrors).length && (
        <p className="text-sm text-red-600">{message}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-brand-700 px-6 py-3 text-base font-semibold text-sand-50 shadow-soft transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70 active:scale-[0.97]"
      >
        {status === "loading" ? "جارٍ الإرسال..." : "إرسال التسجيل"}
      </button>
    </form>
  );
}
