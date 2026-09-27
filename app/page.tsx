import Link from "next/link";
import { courses } from "@/lib/courses";
import { siteConfig } from "@/lib/site";
import CourseCard from "@/components/CourseCard";
import InstagramIcon from "@/components/InstagramIcon";

const facts = [
  { value: courses.length.toLocaleString("ar-EG"), label: "كورسات متخصصة" },
  { value: "من الصفر", label: "حتى الإعراب والطلاقة" },
  { value: "أونلاين", label: "مجموعات صغيرة ومواعيد مرنة" },
];

const principles = [
  {
    title: "منهج عملي",
    desc: "نركّز على استخدام اللغة فعلًا في القراءة والكتابة والمحادثة، لا الحفظ فقط.",
  },
  {
    title: "متابعة شخصية",
    desc: "تقييم مستمر لتقدّمك وتصحيح مباشر من المدرّب في كل مرحلة.",
  },
  {
    title: "مرونة في المواعيد",
    desc: "مجموعات صغيرة ومواعيد تناسب جدولك، من أي مكان في العالم.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-sand-200/50 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.25fr_1fr] lg:pb-28">
          <div>
            <p className="eyebrow mb-5 animate-rise">
              تعلّم لغة الضاد مع {siteConfig.shortName}
            </p>
            <h1 className="mb-6 animate-rise font-display text-5xl font-bold leading-[1.25] text-brand-900 [animation-delay:80ms] sm:text-6xl lg:text-7xl">
              العربية، كما تُقرأ
              <br />
              <span className="text-brand-600">وكما تُقال.</span>
            </h1>
            <p className="mb-10 max-w-[52ch] animate-rise text-lg leading-8 text-brand-700/80 [animation-delay:160ms]">
              كورسات لكل المستويات، من أول حرف للمبتدئين إلى إتقان القواعد
              والمحادثة، مع متابعة مباشرة ومحتوى عملي يركّز على النتيجة.
            </p>
            <div className="flex animate-rise flex-wrap items-center gap-x-8 gap-y-4 [animation-delay:240ms]">
              <Link href="/register" className="btn-primary">
                احجز مكانك
              </Link>
              <a href="#courses" className="btn-quiet">
                استعرض الكورسات
              </a>
            </div>
          </div>

          {/* Typographic artwork: the letter ض (lughat ad-daad) */}
          <div className="relative mx-auto w-full max-w-sm animate-rise [animation-delay:200ms] lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-brand-800 shadow-lift">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(217,178,110,0.35),transparent_55%)]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center pb-10 font-display text-[16rem] leading-none text-sand-200/90 sm:text-[20rem]"
              >
                ض
              </span>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                <p className="max-w-[20ch] text-sm leading-6 text-sand-100/80">
                  نصائح ودروس قصيرة يوميًا على انستجرام
                </p>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-sand-50/10 px-3 py-2 text-sm font-semibold text-sand-50 ring-1 ring-inset ring-sand-50/20 backdrop-blur transition duration-200 hover:bg-sand-50/20"
                >
                  <InstagramIcon className="h-4 w-4" />
                  <span dir="ltr">@{siteConfig.instagramHandle}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Facts */}
        <div className="relative mx-auto max-w-6xl px-5">
          <dl className="grid gap-8 border-t border-brand-900/10 py-10 sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="sr-only">{fact.label}</dt>
                <dd className="font-display text-3xl font-bold text-brand-900">{fact.value}</dd>
                <dd className="mt-1 text-sm text-brand-700/70">{fact.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="mx-auto max-w-6xl scroll-mt-28 px-5 pb-20 pt-16 sm:pb-28 sm:pt-24">
        <div className="mb-12 grid gap-4 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow mb-3">الكورسات</p>
            <h2 className="font-display text-4xl font-bold text-brand-900 sm:text-5xl">
              اختر بداية رحلتك
            </h2>
          </div>
          <p className="max-w-[48ch] leading-7 text-brand-700/80 lg:justify-self-end">
            كل كورس مصمم لمستوى وهدف محدد. اختر الأقرب لك، وإن لم تكن متأكدًا
            سجّل وسنساعدك في الاختيار.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {courses.map((course, index) => (
            <CourseCard key={course.slug} course={course} index={index} />
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="border-y border-brand-900/5 bg-brand-50/60">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-24 pt-20 lg:grid-cols-[1fr_1.4fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow mb-3">طريقتنا</p>
            <h2 className="font-display text-4xl font-bold text-brand-900 sm:text-5xl">
              لماذا تتعلّم معنا؟
            </h2>
          </div>
          <ol className="divide-y divide-brand-900/10">
            {principles.map((item, index) => (
              <li key={item.title} className="grid grid-cols-[3rem_1fr] gap-4 py-8 first:pt-0 last:pb-0">
                <span className="font-display text-3xl leading-none text-sand-500">
                  {(index + 1).toLocaleString("ar-EG")}
                </span>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-brand-900">{item.title}</h3>
                  <p className="max-w-[52ch] leading-7 text-brand-700/80">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-24 pt-20 sm:pb-32">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-800 px-8 pb-14 pt-12 text-sand-50 shadow-lift sm:px-14">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(217,178,110,0.3),transparent_50%)]"
          />
          <div className="relative grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-end">
            <div>
              <h2 className="mb-4 font-display text-4xl font-bold sm:text-5xl">
                جاهز تبدأ رحلتك مع العربية؟
              </h2>
              <p className="max-w-[46ch] leading-7 text-sand-100/80">
                سجّل بياناتك وسنتواصل معك لتحديد أنسب كورس وموعد لك. التسجيل
                مجاني.
              </p>
            </div>
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 justify-self-start rounded-xl bg-sand-100 px-7 py-3.5 text-base font-semibold text-brand-900 transition duration-200 hover:bg-white active:scale-[0.98] lg:justify-self-end"
            >
              سجّل الآن <span aria-hidden="true">←</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
