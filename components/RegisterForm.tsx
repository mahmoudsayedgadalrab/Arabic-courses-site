"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { courses } from "@/lib/courses";
import { EASE_OUT } from "@/components/motion/variants";

type Status = "idle" | "loading" | "success" | "error";

const fieldErrorVariants = {
  hidden: { opacity: 0, height: 0, marginTop: 0 },
  visible: { opacity: 1, height: "auto", marginTop: 4 },
};

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

  return (
    <AnimatePresence mode="wait" initial={false}>
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.3, ease: EASE_OUT }}
          className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.1 }}
            className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-700 text-2xl text-sand-50"
          >
            ✓
          </motion.div>
          <h3 className="mb-2 text-xl font-bold text-brand-900">تم التسجيل بنجاح</h3>
          <p className="text-brand-700/80">{message}</p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-6 rounded-full border border-brand-300 px-5 py-2 text-sm font-semibold text-brand-800 transition hover:border-brand-500"
          >
            تسجيل شخص آخر
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.25, ease: EASE_OUT }}
          onSubmit={handleSubmit}
          className="space-y-5"
          noValidate
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-brand-900">
              الاسم الكامل
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="مثال: أحمد محمد"
              className="w-full rounded-xl border border-brand-200 bg-white px-4 py-2.5 text-brand-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            />
            <AnimatePresence initial={false}>
              {fieldErrors.name && (
                <motion.p
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={fieldErrorVariants}
                  transition={{ duration: 0.2, ease: EASE_OUT }}
                  className="overflow-hidden text-sm text-red-600"
                >
                  {fieldErrors.name}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-brand-900">
              البريد الإلكتروني
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              dir="ltr"
              className="w-full rounded-xl border border-brand-200 bg-white px-4 py-2.5 text-brand-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            />
            <AnimatePresence initial={false}>
              {fieldErrors.email && (
                <motion.p
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={fieldErrorVariants}
                  transition={{ duration: 0.2, ease: EASE_OUT }}
                  className="overflow-hidden text-sm text-red-600"
                >
                  {fieldErrors.email}
                </motion.p>
              )}
            </AnimatePresence>
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
            <AnimatePresence initial={false}>
              {fieldErrors.course && (
                <motion.p
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={fieldErrorVariants}
                  transition={{ duration: 0.2, ease: EASE_OUT }}
                  className="overflow-hidden text-sm text-red-600"
                >
                  {fieldErrors.course}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence initial={false}>
            {status === "error" && message && !Object.keys(fieldErrors).length && (
              <motion.p
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={fieldErrorVariants}
                transition={{ duration: 0.2, ease: EASE_OUT }}
                className="overflow-hidden text-sm text-red-600"
              >
                {message}
              </motion.p>
            )}
          </AnimatePresence>

          <motion.button
            type="submit"
            disabled={status === "loading"}
            whileHover={status === "loading" ? undefined : { scale: 1.02 }}
            whileTap={status === "loading" ? undefined : { scale: 0.97 }}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-base font-semibold text-sand-50 shadow-soft transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" && (
              <motion.span
                className="h-4 w-4 rounded-full border-2 border-sand-50/40 border-t-sand-50"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
              />
            )}
            {status === "loading" ? "جارٍ الإرسال..." : "إرسال التسجيل"}
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
