import { NextResponse } from "next/server";
import { courses } from "@/lib/courses";

export const runtime = "edge";

type RegisterPayload = {
  name?: string;
  email?: string;
  course?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: RegisterPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "تعذّرت قراءة بيانات الفورم." },
      { status: 400 }
    );
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const course = body.course?.trim() ?? "";

  const errors: Record<string, string> = {};

  if (name.length < 2) {
    errors.name = "من فضلك أدخل اسمًا صحيحًا.";
  }
  if (!emailPattern.test(email)) {
    errors.email = "من فضلك أدخل بريدًا إلكترونيًا صحيحًا.";
  }
  if (!courses.some((c) => c.slug === course)) {
    errors.course = "من فضلك اختر كورسًا من القائمة.";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ message: "هناك بيانات غير مكتملة.", errors }, { status: 422 });
  }

  // ملاحظة: هذا المشروع بسيط ولا يحتوي على قاعدة بيانات مربوطة بعد.
  // هنا يمكنك لاحقًا ربط خدمة بريد (Resend / SendGrid) أو قاعدة بيانات
  // (مثل Vercel Postgres / Supabase / Airtable) لحفظ طلبات التسجيل فعليًا.
  console.log("New course registration:", { name, email, course });

  return NextResponse.json(
    { message: "تم استلام تسجيلك بنجاح! سنتواصل معك قريبًا." },
    { status: 200 }
  );
}
