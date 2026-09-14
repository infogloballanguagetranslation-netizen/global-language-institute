"use client";

import { useState } from "react";
import { Compass, Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#study-language", label: "Study Language" },
  { href: "#courses", label: "Courses" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-wrap items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-paper">
            <Compass size={18} strokeWidth={1.75} />
          </span>
          <span className="font-display text-lg font-semibold leading-none text-ink">
            Global Language
            <span className="block text-[0.7rem] font-body font-medium tracking-wide text-brick">
              INSTITUTE
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.slice(0, -1).map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-ink/75 transition-colors hover:text-brick"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-sm bg-brick px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-brick2 md:inline-block"
        >
          Book a Consultation
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="text-ink md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-paper px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-ink/80 hover:text-brick"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
