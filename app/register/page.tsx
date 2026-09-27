import { Suspense } from "react";
import type { Metadata } from "next";
import RegisterForm from "@/components/RegisterForm";

export const metadata: Metadata = {
  title: "التسجيل في الكورسات",
  description: "سجّل بياناتك الآن لحجز مكانك في كورسات تعليم اللغة العربية.",
};

export default function RegisterPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-24 pt-12 sm:pt-16 lg:grid-cols-[1fr_1.1fr] lg:items-start">
      <div className="lg:pt-6">
        <p className="eyebrow mb-3">التسجيل</p>
        <h1 className="mb-5 font-display text-5xl font-bold leading-[1.25] text-brand-900 sm:text-6xl">
          احجز مكانك
        </h1>
        <p className="max-w-[44ch] text-lg leading-8 text-brand-700/80">
          املأ البيانات التالية وسنتواصل معك لتأكيد التسجيل وتحديد الموعد المناسب.
        </p>
        <ol className="mt-10 space-y-4 text-brand-800">
          {["أرسل بياناتك", "نتواصل معك لتحديد المستوى والموعد", "تبدأ أول لقاء"].map((step, i) => (
            <li key={step} className="flex items-baseline gap-4">
              <span className="font-display text-2xl text-sand-500">{(i + 1).toLocaleString("ar-EG")}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="rounded-2xl bg-white/80 p-6 shadow-lift ring-1 ring-brand-900/5 sm:p-10">
        <Suspense fallback={null}>
          <RegisterForm />
        </Suspense>
      </div>
    </div>
  );
}
