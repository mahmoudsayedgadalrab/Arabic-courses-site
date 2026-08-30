import Link from "next/link";
import { courses } from "@/lib/courses";
import { siteConfig } from "@/lib/site";
import CourseCard from "@/components/CourseCard";
import InstagramIcon from "@/components/InstagramIcon";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import FloatingCard from "@/components/motion/FloatingCard";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-sand-50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:py-24 lg:grid-cols-2">
          <StaggerGroup trigger="mount">
            <StaggerItem className="mb-4 inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
              تعلّم العربية بطريقة حديثة وممتعة
            </StaggerItem>
            <StaggerItem>
              <h1 className="mb-5 text-4xl font-extrabold leading-tight text-brand-900 sm:text-5xl">
                أتقن اللغة العربية خطوة بخطوة مع {siteConfig.shortName}
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="mb-8 text-lg leading-8 text-brand-700/80">
                كورسات مصممة لكل المستويات، من التأسيس الكامل للمبتدئين إلى إتقان
                القواعد والمحادثة، مع متابعة مباشرة ومحتوى عملي يركّز على النتيجة.
              </p>
            </StaggerItem>
            <StaggerItem className="flex flex-wrap items-center gap-4">
              <Link
                href="/register"
                className="rounded-full bg-brand-700 px-6 py-3 text-base font-semibold text-sand-50 shadow-soft transition hover:scale-[1.03] hover:bg-brand-600 active:scale-95"
              >
                احجز مكانك الآن
              </Link>
              <a
                href="#courses"
                className="rounded-full border border-brand-300 px-6 py-3 text-base font-semibold text-brand-800 transition hover:scale-[1.03] hover:border-brand-500 hover:text-brand-600 active:scale-95"
              >
                استعرض الكورسات
              </a>
            </StaggerItem>
          </StaggerGroup>

          <FloatingCard>
            <div className="absolute inset-0 rounded-[2.5rem] bg-brand-700/10 blur-2xl" />
            <div className="relative flex h-full w-full flex-col justify-center gap-4 rounded-[2.5rem] border border-brand-200 bg-white p-8 shadow-soft">
              <span className="text-6xl leading-none text-brand-700">أ ب ت</span>
              <p className="text-sm leading-6 text-brand-700/70">
                أكثر من عدة طلاب من مختلف أنحاء العالم بدأوا رحلتهم مع
                اللغة العربية معنا.
              </p>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-sand-100 px-4 py-2 text-sm font-semibold text-sand-800 transition hover:bg-sand-200"
              >
                <InstagramIcon />
                تابعنا @{siteConfig.instagramHandle}
              </a>
            </div>
          </FloatingCard>
        </div>
      </section>

      {/* Stats / trust */}
      <section className="border-y border-brand-100 bg-white">
        <StaggerGroup className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-10 text-center sm:grid-cols-4">
          {[
            { label: "كورسات متخصصة", value: `${courses.length}+` },
            { label: "مستويات تعليمية", value: "4" },
            { label: "لقاءات مباشرة أسبوعيًا", value: "2-3" },
            { label: "دعم ومتابعة", value: "مستمرة" },
          ].map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-2xl font-extrabold text-brand-700 sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-brand-700/70 sm:text-sm">{stat.label}</div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Courses */}
      <section id="courses" className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-brand-900 sm:text-4xl">
            كورساتنا
          </h2>
          <p className="text-brand-700/80">
            اختر الكورس المناسب لمستواك وهدفك من تعلّم اللغة العربية، وابدأ رحلتك
            اليوم بخطوات عملية وواضحة.
          </p>
        </Reveal>

        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <StaggerItem key={course.slug}>
              <CourseCard course={course} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Why us */}
      <section className="bg-brand-900 text-sand-50">
        <StaggerGroup className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:grid-cols-3">
          {[
            {
              title: "منهج عملي",
              desc: "نركّز على الاستخدام الفعلي للغة في القراءة والكتابة والمحادثة، لا الحفظ فقط.",
            },
            {
              title: "متابعة شخصية",
              desc: "تقييم مستمر لتقدّمك مع تغذية راجعة مباشرة من المدرّب في كل مرحلة.",
            },
            {
              title: "مرونة في المواعيد",
              desc: "مجموعات صغيرة ومواعيد مرنة تناسب جدولك، أونلاين من أي مكان.",
            },
          ].map((item) => (
            <StaggerItem
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
              <p className="text-sm leading-6 text-sand-100/80">{item.desc}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-5 py-16 text-center sm:py-24">
        <Reveal>
          <h2 className="mb-4 text-3xl font-extrabold text-brand-900 sm:text-4xl">
            جاهز تبدأ رحلتك مع اللغة العربية؟
          </h2>
          <p className="mb-8 text-brand-700/80">
            سجّل بياناتك الآن وسنتواصل معك لتحديد أنسب كورس وموعد لك.
          </p>
          <Link
            href="/register"
            className="inline-block rounded-full bg-brand-700 px-8 py-3.5 text-base font-semibold text-sand-50 shadow-soft transition hover:scale-[1.03] hover:bg-brand-600 active:scale-95"
          >
            سجّل الآن مجانًا
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
