import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

const BRANDING_IMAGE = "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=420&h=320&fit=crop&auto=format&q=80";

export function Hero() {
  const { lang } = useLang();
  const tx = t[lang].hero;

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#E8E6E1]">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#643D70]/5 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-20 left-8 w-px h-48 bg-[#D4AF37]/30 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left: Text */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px bg-[#D4AF37]" />
              <span
                className="text-[#643D70] tracking-[0.2em] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500 }}
              >
                {tx.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-[#343434] mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(38px, 5.5vw, 68px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              {tx.headline1}
              <br />
              <em style={{ fontStyle: "italic", color: "#643D70" }}>{tx.headline2}</em>
              <br />
              {tx.headline3}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-[#343434]/65 mb-12 max-w-[440px]"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "17px", fontWeight: 300, lineHeight: 1.8 }}
            >
              {tx.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollTo("#contact")}
                className="px-8 py-4 bg-[#643D70] text-white hover:bg-[#543060] transition-all duration-300 hover:shadow-lg cursor-pointer border-none"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", borderRadius: "2px" }}
              >
                {tx.btnPrimary}
              </button>
              <button
                onClick={() => scrollTo("#services")}
                className="px-8 py-4 border border-[#643D70] text-[#643D70] hover:bg-[#643D70]/5 transition-all duration-300 cursor-pointer bg-transparent"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", borderRadius: "2px" }}
              >
                {tx.btnSecondary}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex gap-10 mt-14 pt-10 border-t border-[#643D70]/10"
            >
              {[
                { value: "5+", label: tx.stat1 },
                { value: "120+", label: tx.stat2 },
                { value: "98%", label: tx.stat3 },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-[#643D70]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 400 }}>
                    {stat.value}
                  </div>
                  <div className="text-[#343434]/50 mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 400, letterSpacing: "0.04em" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div
                className="overflow-hidden bg-[#BCA9D0]/20"
                style={{ width: "clamp(280px, 38vw, 460px)", aspectRatio: "4/5", borderRadius: "4px" }}
              >
                <ImageWithFallback
                  src="/hero-yildiz.jpeg"
                  alt="Yessenia Melo, Founder of Yildiz Creative"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#643D70]/20 to-transparent pointer-events-none" />
              </div>

              <div
                className="absolute -top-6 -left-6 w-full h-full border border-[#D4AF37]/40 pointer-events-none"
                style={{ borderRadius: "4px" }}
                aria-hidden="true"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute -bottom-8 -left-8 bg-white shadow-xl p-5 max-w-[180px]"
                style={{ borderRadius: "3px" }}
              >
                <div className="w-5 h-0.5 bg-[#D4AF37] mb-3" />
                <div className="text-[#343434]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "14px", fontWeight: 500 }}>
                  {tx.floatingCard}
                </div>
                <div className="text-[#343434]/50 mt-1" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 300 }}>
                  {tx.floatingCardSub}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.75 }}
                className="absolute -right-12 top-16 overflow-hidden shadow-lg hidden xl:block"
                style={{ width: "160px", height: "120px", borderRadius: "3px" }}
              >
                <img src={BRANDING_IMAGE} alt="Branding color palette" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#343434]/40 tracking-widest" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "9px", fontWeight: 400, textTransform: "uppercase" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[#643D70]/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
