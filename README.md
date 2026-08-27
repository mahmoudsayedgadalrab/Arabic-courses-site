# موقع كورسات تعليم اللغة العربية

موقع بسيط وعصري لعرض وبيع كورسات تعليم اللغة العربية، مبني بـ [Next.js](https://nextjs.org)
و [Tailwind CSS](https://tailwindcss.com)، وجاهز للنشر مباشرة على [Vercel](https://vercel.com).

## المحتوى

- **الصفحة الرئيسية (`/`)**: تعريف بالأكاديمية وعرض لكل الكورسات المتاحة.
- **صفحة تفاصيل الكورس (`/courses/[slug]`)**: تفاصيل كاملة لكل كورس (المستوى، المدة،
  السعر، المحتوى، الفئة المستهدفة) مع زر تسجيل مباشر.
- **صفحة التسجيل (`/register`)**: فورم لجمع الاسم والبريد الإلكتروني والكورس
  المطلوب، مع تحقق من صحة البيانات (client + server) عبر `POST /api/register`.
- **رابط انستجرام**: موجود في الهيدر والفوتر وصفحة التسجيل، يشير إلى
  [@arabicmahmoudd](https://www.instagram.com/arabicmahmoudd).

بيانات الكورسات موجودة في ملف واحد يسهل تعديله: [`lib/courses.ts`](./lib/courses.ts).

## التشغيل محليًا

```bash
npm install
npm run dev
```

ثم افتح [http://localhost:3000](http://localhost:3000).

## البناء للإنتاج

```bash
npm run build
npm run start
```

## النشر على Vercel

المشروع جاهز للنشر مباشرة بدون أي إعدادات إضافية:

1. ارفع المشروع إلى مستودع GitHub.
2. من [vercel.com](https://vercel.com) اختر "Import Project" وحدد المستودع.
3. اترك إعدادات البناء الافتراضية (Next.js يُكتشف تلقائيًا) واضغط Deploy.

## ملاحظة عن فورم التسجيل

الفورم يرسل البيانات إلى `app/api/register/route.ts` الذي يتحقق من صحتها ويطبعها
في سجلّات الخادم (visible في Vercel Logs). لحفظ الطلبات فعليًا أو إرسال إيميلات
تنبيه، يمكنك بسهولة ربط الـ route بخدمة مثل:

- [Resend](https://resend.com) أو [SendGrid](https://sendgrid.com) لإرسال بريد تأكيد.
- [Vercel Postgres](https://vercel.com/storage/postgres) أو
  [Supabase](https://supabase.com) أو [Airtable](https://airtable.com) لحفظ
  بيانات التسجيل في قاعدة بيانات.

## التخصيص

- عدّل بيانات الكورسات من `lib/courses.ts`.
- عدّل اسم الأكاديمية ورابط الانستجرام من `lib/site.ts`.
- الألوان والخطوط قابلة للتعديل من `tailwind.config.ts`.
