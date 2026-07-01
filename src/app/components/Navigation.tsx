import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

export function Navigation() {
  const { lang, setLang } = useLang();
  const tx = t[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: tx.work, href: "#portfolio" },
    { label: tx.pricing, href: "#pricing" },
    { label: tx.about, href: "#founder" },
    { label: tx.process, href: "#process" },
    { label: tx.testimonials, href: "#testimonials" },
    { label: tx.contact, href: "#portfolio" },
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
            href="#"
            className="flex items-center"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
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
          </nav>

          {/* Right side: lang toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language toggle */}
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

            {/* CTA */}
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
            className="fixed inset-0 z-40 bg-[#E8E6E1] flex flex-col pt-24 px-8"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => handleNav(link.href)}
                className="text-left py-4 border-b border-[#643D70]/10 text-[#343434] hover:text-[#643D70] transition-colors cursor-pointer bg-transparent border-none"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 400 }}
              >
                {link.label}
              </motion.button>
            ))}
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
