import { Compass, Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-paper">
      <div className="mx-auto max-w-wrap px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper text-ink">
                <Compass size={18} strokeWidth={1.75} />
              </span>
              <span className="font-display text-lg">
                Global Language Institute
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/60">
              Overseas study consultancy and language training, helping
              students head confidently toward their next classroom, career,
              or country.
            </p>
            <div className="mt-6 flex gap-4 text-paper/70">
              <a href="#" aria-label="Facebook" className="hover:text-gold">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-gold">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-gold">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-wide text-paper/50">
              Programs
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-paper/75">
              <li><a href="#study-language" className="hover:text-gold">Study Language</a></li>
              <li><a href="#services" className="hover:text-gold">Visa Guidance</a></li>
              <li><a href="#courses" className="hover:text-gold">Language Courses</a></li>
              <li><a href="#why-us" className="hover:text-gold">Why Choose Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-wide text-paper/50">
              Contact
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-paper/75">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-gold" />
                +977-976-8350800
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
                globallanguageinstitute@gmail.com
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                Sunbarshi Chowk, Biratnagar, Nepal
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-paper/15 pt-6 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Global Language Institute. All rights reserved.</p>
          <p>Built with care, one stamp at a time.</p>
        </div>
      </div>
    </footer>
  );
}
