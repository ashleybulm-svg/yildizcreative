import { Instagram, Linkedin, Mail } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

export function Footer() {
  const { lang } = useLang();
  const tx = t[lang];

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: tx.nav.services, href: "#services" },
    { label: tx.nav.work, href: "#portfolio" },
    { label: tx.nav.about, href: "#founder" },
    { label: tx.nav.process, href: "#process" },
    { label: tx.nav.testimonials, href: "#testimonials" },
    { label: tx.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="bg-[#1e1e1e] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <div className="text-[#BCA9D0] tracking-[0.18em] uppercase mb-1" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500 }}>
                Yildiz
              </div>
              <div className="text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "26px", fontWeight: 400, letterSpacing: "-0.01em" }}>
                Creative
              </div>
            </div>
            <p className="text-white/35 mb-6" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 300, lineHeight: 1.8 }}>
              {tx.footer.tagline}
            </p>
            <div className="flex gap-3">
              {[{ icon: Instagram, label: "Instagram" }, { icon: Linkedin, label: "LinkedIn" }, { icon: Mail, label: "Email" }].map(({ icon: Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-200" style={{ borderRadius: "2px" }}>
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Services col 1 */}
          <div>
            <div className="text-white/40 tracking-[0.15em] uppercase mb-5" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", fontWeight: 500 }}>
              {tx.footer.servicesLabel}
            </div>
            <ul className="flex flex-col gap-3">
              {tx.services.items.slice(0, 4).map((s) => (
                <li key={s.title}>
                  <span className="text-white/40 hover:text-white/70 transition-colors duration-200 cursor-default" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 300 }}>
                    {s.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Services col 2 */}
          <div>
            <div className="text-white/40 tracking-[0.15em] uppercase mb-5" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", fontWeight: 500 }}>&nbsp;</div>
            <ul className="flex flex-col gap-3">
              {tx.services.items.slice(4).map((s) => (
                <li key={s.title}>
                  <span className="text-white/40 hover:text-white/70 transition-colors duration-200 cursor-default" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 300 }}>
                    {s.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav */}
          <div>
            <div className="text-white/40 tracking-[0.15em] uppercase mb-5" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", fontWeight: 500 }}>
              {tx.footer.navigateLabel}
            </div>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button onClick={() => scrollTo(link.href)} className="text-white/40 hover:text-white/70 transition-colors duration-200 cursor-pointer bg-transparent border-none p-0 text-left" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 300 }}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-white/25" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 300 }}>
            © {new Date().getFullYear()} Yildiz Creative. {tx.footer.copyright}
          </p>
          <p className="text-white/20" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 300 }}>
            {tx.footer.credit}
          </p>
        </div>
      </div>
    </footer>
  );
}
