import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dinesh Rai",
    role: "Marketing Manager",
    quote:
      "I joined as a complete beginner, and now I can speak confidently. The step-by-step teaching really works.",
  },
  {
    name: "Punam Pathak",
    role: "Registered Nurse",
    quote:
      "Friendly teachers and a prep environment made my visa interview feel far less intimidating.",
  },
];

export default function Testimonials() {
  return (
    <section className="border-t border-line bg-paper2/60">
      <div className="mx-auto max-w-wrap px-6 py-24">
        <h2 className="font-display text-4xl text-ink">
          What people say about us
        </h2>
        <p className="mt-4 max-w-md text-ink/70">
          Our students&rsquo; stories reflect the quality of our teaching and
          learning environment.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-sm border border-line bg-white p-8 shadow-[0_10px_24px_-18px_rgba(21,34,56,0.35)]"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="font-display mt-5 text-xl italic leading-snug text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-dashed border-line pt-4 text-sm">
                <span className="font-medium text-ink">{t.name}</span>
                <span className="text-ink/55"> — {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
