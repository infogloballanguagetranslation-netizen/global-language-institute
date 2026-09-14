import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-wrap gap-14 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 border-b border-brick pb-1 text-sm text-brick">
            <MapPin size={14} /> Study & language consultancy since 2010
          </p>

          <h1 className="font-display text-[2.75rem] leading-[1.08] text-ink sm:text-6xl">
            Your world gets bigger
            <br />
            when you speak more of it.
          </h1>

          <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-ink/70">
            We prepare students for language fluency and life abroad —
            pairing native-speaking instructors with hands-on visa and
            admissions guidance, so the whole journey feels like one clear
            path instead of a hundred separate steps.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-brick"
            >
              Start Your Journey
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#study-language"
              className="text-sm font-medium text-ink underline decoration-line decoration-2 underline-offset-4 hover:decoration-brick"
            >
              See languages
            </a>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-8">
            {[
              ["6", "countries"],
              ["1,200+", "students placed"],
              ["100+", "partner schools"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-2xl text-ink">{n}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-ink/55">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -left-6 top-8 hidden h-40 w-28 rotate-[-9deg] rounded-sm border border-line bg-paper2 shadow-sm sm:block" />

          <div className="relative rotate-[2deg] rounded-sm bg-white p-3 pb-6 shadow-[0_18px_40px_-18px_rgba(21,34,56,0.45)]">
            <div className="relative h-80 w-full overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1517841905240-472988babdf7?auto=format&fit=crop&w=800&q=80"
                alt="Student preparing for study abroad with a language notebook"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
                priority
              />
            </div>
            <p className="font-display mt-3 text-center text-sm italic text-ink/60">
              &ldquo;Wish you were fluent here.&rdquo;
            </p>

            <span className="postmark absolute -right-5 -top-5 flex h-20 w-20 rotate-[10deg] flex-col items-center justify-center bg-paper text-center text-[0.6rem] font-semibold uppercase tracking-wide text-brick">
              Estd
              <span className="font-display text-lg font-normal not-italic tracking-normal text-ink">
                2010
              </span>
              Worldwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
