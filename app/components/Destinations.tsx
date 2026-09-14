import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const destinations = [
  {
    country: "Australia",
    flag: "🇦🇺",
    img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=700&q=80",
    blurb: "Quality education, cultural diversity, and a vibrant coastal lifestyle.",
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    img: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=700&q=80",
    blurb: "Welcoming campuses, global exposure, and strong post-study pathways.",
  },
  {
    country: "Japan",
    flag: "🇯🇵",
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=700&q=80",
    blurb: "Rigorous academics inside a deeply distinct language and culture.",
  },
  {
    country: "USA",
    flag: "🇺🇸",
    img: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=700&q=80",
    blurb: "World-renowned institutions and unmatched career opportunities.",
  },
  {
    country: "New Zealand",
    flag: "🇳🇿",
    img: "https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=700&q=80",
    blurb: "Small class sizes, natural beauty, and a genuinely global outlook.",
  },
  {
    country: "Denmark",
    flag: "🇩🇰",
    img: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=700&q=80",
    blurb: "Progressive teaching methods and a famously high quality of life.",
  },
];

export default function Destinations() {
  return (
    <section id="study-language" className="mx-auto max-w-wrap px-6 py-24">
      <div className="max-w-xl">
        <h2 className="font-display text-4xl text-ink">
          Study a language, live it too
        </h2>
        <p className="mt-5 leading-relaxed text-ink/70">
          A language sticks fastest when you&rsquo;re surrounded by it.
          Choose a country and we&rsquo;ll pair your lessons with the
          culture, pace, and people who speak it every day.
        </p>
        <p className="mt-6 font-display text-xl italic text-brick">
          Pick the language you&rsquo;ll speak next.
        </p>
      </div>

      <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((d) => (
          <a
            key={d.country}
            href="#contact"
            className="group block rotate-0 transition-transform hover:-translate-y-1"
          >
            <div className="torn-edge relative h-52 w-full overflow-hidden rounded-t-sm bg-white p-2 pb-4 shadow-[0_10px_24px_-16px_rgba(21,34,56,0.5)]">
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={d.img}
                  alt={`Study in ${d.country}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg shadow-sm">
                {d.flag}
              </span>
            </div>
            <div className="border-x border-b border-line bg-paper px-4 py-5">
              <h3 className="font-display text-xl text-ink">
                Study in {d.country}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                {d.blurb}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-brick">
                Learn more
                <ArrowUpRight size={13} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
