import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

export function Navigation() {
  const { lang, setLang } = useLang();
  const tx = t[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    setServicesOpen(false);
    if (href.startsWith("/")) {
      window.location.href = href;
    } else if (href.startsWith("#")) {
      if (window.location.pathname !== "/") {
        window.location.href = "/" + href;
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { label: tx.work, href: "#portfolio" },
    { label: tx.pricing, href: "#pricing" },
    { label: tx.about, href: "#founder" },
    { label: tx.process, href: "#process" },
    { label: tx.testimonials, href: "#testimonials" },
    { label: tx.contact, href: "#portfolio" },
  ];

  const serviceLinks = [
    {
      label: lang === "es" ? "Producción de Video IA" : "AI Video Production",
      href: "/ai-video-production",
    },
    {
      label: lang === "es" ? "Desarrollo Web" : "Web Development",
      href: "/web-development",
    },
    {
      label: lang === "es" ? "Invitaciones Digitales" : "Digital Invitations",
      href: "/digital-invitations",
    },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#E8E6E1]/95 backdrop-blur-md border-b border-[#643D70]/10 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <ImageWithFallback
              src="/logo-yildiz.png"
              alt="Yildiz Creative logo"
              className="h-30 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-[#343434]/70 hover:text-[#643D70] transition-colors duration-200 tracking-wide cursor-pointer bg-transparent border-none p-0"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 400, letterSpacing: "0.04em" }}
              >
                {link.label}
              </button>
            ))}

            {/* Services dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => setServicesOpen((o) => !o)}
                className="flex items-center gap-1 text-[#343434]/70 hover:text-[#643D70] transition-colors duration-200 cursor-pointer bg-transparent border-none p-0"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 400, letterSpacing: "0.04em" }}
              >
                {lang === "es" ? "Servicios" : "Services"}
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 mt-3 bg-white shadow-xl border border-[#643D70]/8 py-2 min-w-[220px]"
                    style={{ borderRadius: "4px" }}
                  >
                    {serviceLinks.map((svc) => (
                      <button
                        key={svc.href}
                        onClick={() => handleNav(svc.href)}
                        className="w-full text-left px-5 py-3 text-[#343434]/75 hover:text-[#643D70] hover:bg-[#643D70]/5 transition-colors duration-150 cursor-pointer bg-transparent border-none block"
                        style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 400 }}
                      >
                        {svc.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right side: lang toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="flex items-center gap-1.5 px-3 py-2 border border-[#643D70]/25 hover:border-[#643D70]/60 transition-all duration-200 cursor-pointer bg-transparent"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 500, letterSpacing: "0.06em", borderRadius: "2px" }}
              aria-label="Toggle language"
            >
              <span className={lang === "en" ? "text-[#643D70]" : "text-[#343434]/40"}>EN</span>
              <span className="text-[#343434]/25">|</span>
              <span className={lang === "es" ? "text-[#643D70]" : "text-[#343434]/40"}>ES</span>
            </button>

            <button
              onClick={() => handleNav("#contact")}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#643D70] text-white hover:bg-[#543060] transition-colors duration-200 cursor-pointer border-none"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", borderRadius: "2px" }}
            >
              {tx.cta}
            </button>
          </div>

          {/* Mobile: lang toggle + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="flex items-center gap-1 px-2.5 py-1.5 border border-[#643D70]/25 cursor-pointer bg-transparent"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500, borderRadius: "2px" }}
              aria-label="Toggle language"
            >
              <span className={lang === "en" ? "text-[#643D70]" : "text-[#343434]/40"}>EN</span>
              <span className="text-[#343434]/25 mx-0.5">|</span>
              <span className={lang === "es" ? "text-[#643D70]" : "text-[#343434]/40"}>ES</span>
            </button>
            <button
              className="text-[#343434] p-2 cursor-pointer bg-transparent border-none"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#E8E6E1] flex flex-col pt-24 px-8 overflow-y-auto"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => handleNav(link.href)}
                className="text-left py-4 border-b border-[#643D70]/10 text-[#343434] hover:text-[#643D70] transition-colors cursor-pointer bg-transparent border-x-0 border-t-0"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 400 }}
              >
                {link.label}
              </motion.button>
            ))}

            {/* Services in mobile */}
            <div className="py-4 border-b border-[#643D70]/10">
              <div
                className="text-[#343434]/50 mb-3"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase" }}
              >
                {lang === "es" ? "Servicios" : "Services"}
              </div>
              {serviceLinks.map((svc) => (
                <button
                  key={svc.href}
                  onClick={() => handleNav(svc.href)}
                  className="block text-left text-[#643D70] hover:text-[#543060] transition-colors cursor-pointer bg-transparent border-none p-0 mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 400 }}
                >
                  {svc.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleNav("#contact")}
              className="mt-8 px-6 py-4 bg-[#643D70] text-white text-center cursor-pointer border-none"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              {tx.cta}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
