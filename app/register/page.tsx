import { Suspense } from "react";
import type { Metadata } from "next";
import RegisterForm from "@/components/RegisterForm";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "التسجيل في الكورسات",
  description: "سجّل بياناتك الآن لحجز مكانك في كورسات تعليم اللغة العربية.",
};

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-xl px-5 py-12 sm:py-16">
      <Reveal trigger="mount">
        <div className="mb-8 text-center">
          <h1 className="mb-3 text-3xl font-extrabold text-brand-900 sm:text-4xl">
            سجّل الآن
          </h1>
          <p className="text-brand-700/80">
            املأ البيانات التالية وسنتواصل معك لتأكيد التسجيل وتحديد الموعد المناسب.
          </p>
        </div>

        <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-soft sm:p-8">
          <Suspense fallback={null}>
            <RegisterForm />
          </Suspense>
        </div>
      </Reveal>
    </div>
  );
}
