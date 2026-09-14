const courses = [
  { name: "English Language", tag: "EN" },
  { name: "Korean Language", tag: "KO" },
  { name: "Japanese Language", tag: "JA" },
  { name: "German Language", tag: "DE" },
];

export default function Courses() {
  return (
    <section id="courses" className="mx-auto max-w-wrap px-6 py-24">
      <div className="max-w-xl">
        <h2 className="font-display text-4xl text-ink">
          Our courses & programs
        </h2>
        <p className="mt-5 leading-relaxed text-ink/70">
          Language programs designed for every level — start from scratch or
          sharpen fluency you already have. Every course balances structured
          learning with real, spoken practice.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((c) => (
          <div key={c.tag} className="relative">
            <div className="rounded-sm border border-line bg-white px-6 py-8 shadow-[0_10px_22px_-18px_rgba(21,34,56,0.5)]">
              <span className="postmark flex h-12 w-12 items-center justify-center font-display text-sm text-brick">
                {c.tag}
              </span>
              <h3 className="font-display mt-6 text-lg text-ink">
                {c.name}
              </h3>
              <p className="mt-1.5 text-xs uppercase tracking-wide text-ink/50">
                Basic to advanced
              </p>
            </div>
            <div
              aria-hidden
              className="absolute -right-2 top-6 h-3 w-3 rotate-45 border-r border-t border-line bg-paper"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
