import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import yesseniaSrc from "../../imports/WhatsApp_Image_2026-06-07_at_3.03.28_AM__1_.jpeg";
import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

export function Founder() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLang();
  const tx = t[lang].founder;

  const highlights = [
    { value: "5+", label: tx.stat1 },
    { value: "2", label: tx.stat2 },
    { value: "120+", label: tx.stat3 },
  ];

  return (
    <section id="founder" className="py-28 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="overflow-hidden bg-[#BCA9D0]/20" style={{ width: "100%", maxWidth: "480px", aspectRatio: "5/6", borderRadius: "3px" }}>
                <ImageWithFallback
                  src={yesseniaSrc}
                  alt="Yessenia Melo, Founder of Yildiz Creative"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-3/4 h-3/4 border border-[#D4AF37]/35 pointer-events-none" style={{ borderRadius: "3px" }} aria-hidden="true" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute -right-6 top-12 bg-[#643D70] text-white p-6 max-w-[200px] shadow-xl hidden md:block"
                style={{ borderRadius: "2px" }}
              >
                <div className="text-[#D4AF37] mb-2" style={{ fontSize: "24px", lineHeight: 1 }}>"</div>
                <p className="text-white/90" style={{ fontFamily: "'Playfair Display', serif", fontSize: "13px", fontWeight: 400, lineHeight: 1.6, fontStyle: "italic" }}>
                  {tx.quote}
                </p>
                <div className="w-5 h-px bg-[#D4AF37] mt-4" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#D4AF37]" />
              <span className="text-[#643D70] tracking-[0.2em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500 }}>
                {tx.eyebrow}
              </span>
            </div>
            <h2 className="text-[#343434] mb-2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 400, lineHeight: 1.15 }}>
              {tx.name}
            </h2>
            <div className="text-[#643D70] mb-8" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 400, letterSpacing: "0.06em" }}>
              {tx.role}
            </div>
            <p className="text-[#343434]/65 mb-5" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 300, lineHeight: 1.8 }}>
              {tx.bio1}
            </p>
            <p className="text-[#343434]/65 mb-10" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 300, lineHeight: 1.8 }}>
              {tx.bio2}
            </p>

            <div className="flex gap-10 pt-8 border-t border-[#643D70]/10 mb-10">
              {highlights.map((h) => (
                <div key={h.label}>
                  <div className="text-[#643D70]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "32px", fontWeight: 400 }}>
                    {h.value}
                  </div>
                  <div className="text-[#343434]/45 mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 400 }}>
                    {h.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {tx.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 border border-[#643D70]/20 text-[#643D70]/80"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 400, borderRadius: "2px" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
