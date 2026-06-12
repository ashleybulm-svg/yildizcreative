import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

export function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLang();
  const tx = t[lang].process;

  return (
    <section id="process" className="py-28 bg-[#E8E6E1]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-xl mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#D4AF37]" />
            <span className="text-[#643D70] tracking-[0.2em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500 }}>
              {tx.eyebrow}
            </span>
          </div>
          <h2 className="text-[#343434]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400, lineHeight: 1.15 }}>
            {tx.heading1}
            <br />
            <em style={{ color: "#643D70" }}>{tx.heading2}</em>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#643D70]/12 hidden md:block" aria-hidden="true" />
          <div className="flex flex-col gap-0">
            {tx.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 py-10 border-b border-[#643D70]/8 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}
              >
                <div className={`${i % 2 === 0 ? "md:text-right md:pr-16" : "md:text-right md:pr-16"} [direction:ltr]`}>
                  <div className="text-[#643D70]/20 mb-2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "48px", fontWeight: 400, lineHeight: 1 }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-[#343434] mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 500 }}>
                    {step.title}
                  </h3>
                  <p className="text-[#343434]/60" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: 300, lineHeight: 1.75 }}>
                    {step.desc}
                  </p>
                </div>
                <div className="[direction:ltr] flex md:items-center">
                  <div className="flex items-center gap-3">
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#643D70] ring-4 ring-[#E8E6E1]" />
                    <span className="px-4 py-2 bg-[#643D70]/8 text-[#643D70]" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 400, letterSpacing: "0.04em", borderRadius: "2px" }}>
                      {step.duration}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
