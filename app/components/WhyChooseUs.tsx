import Image from "next/image";
import { GraduationCap, Building2, Leaf } from "lucide-react";

const points = [
  {
    icon: GraduationCap,
    title: "Native Instructors",
    body: "Learn from experienced native-speaking teachers who ensure authentic pronunciation, fluency, and cultural insight.",
  },
  {
    icon: Building2,
    title: "Well-Equipped Classrooms",
    body: "Modern, comfortable, tech-enabled classrooms designed for focused and effective learning.",
  },
  {
    icon: Leaf,
    title: "Peaceful Learning Environment",
    body: "A calm, distraction-free atmosphere that helps students concentrate and reach fluency faster.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="border-t border-line bg-paper2/60">
      <div className="mx-auto grid max-w-wrap gap-14 px-6 py-24 md:grid-cols-2 md:items-center">
        <div className="relative">
          <div className="relative h-[420px] w-full overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
              alt="Students collaborating in a language classroom"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <h2 className="font-display text-4xl text-ink">Why choose us?</h2>
          <p className="mt-5 max-w-md leading-relaxed text-ink/70">
            At Global Language Institute, we&rsquo;re committed to giving
            students the best possible learning experience — authentic
            language exposure paired with the practical communication skills
            that carry into classrooms, interviews, and daily life abroad.
          </p>

          <ul className="mt-10 space-y-8">
            {points.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex gap-5">
                <span className="postmark flex h-14 w-14 shrink-0 items-center justify-center text-brick">
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-display text-lg text-ink">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
