import { FileText, FileCheck2, Languages } from "lucide-react";

const services = [
  {
    icon: FileText,
    code: "VI-01",
    title: "Visa Interview Preparation",
    body: "Mock interviews and real feedback so you walk in ready for the questions that actually get asked.",
  },
  {
    icon: FileCheck2,
    code: "VG-02",
    title: "Visa Guidance",
    body: "Document checklists and step-by-step support through every stage of the application process.",
  },
  {
    icon: Languages,
    code: "EN-03",
    title: "English Language",
    body: "Basic-to-advanced classes covering speaking, listening, reading, and writing for confident communication.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-y border-line bg-ink text-paper"
    >
      <div className="mx-auto max-w-wrap px-6 py-24">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl">Our services</h2>
          <p className="mt-5 leading-relaxed text-paper/70">
            Complete support for students and professionals, from mock
            interviews that build confidence to guidance that carries your
            application all the way through.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, code, title, body }) => (
            <div
              key={code}
              className="flex flex-col justify-between rounded-sm border border-paper/15 bg-paper/[0.04] p-7"
            >
              <div>
                <div className="flex items-center justify-between border-b border-dashed border-paper/25 pb-5">
                  <Icon size={26} strokeWidth={1.5} className="text-gold" />
                  <span className="font-display text-xs tracking-widest text-paper/40">
                    {code}
                  </span>
                </div>
                <h3 className="font-display mt-5 text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/65">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
