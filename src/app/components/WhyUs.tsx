import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

export function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLang();
  const tx = t[lang].whyus;

  return (
    <section className="py-28 bg-[#643D70]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#D4AF37]" />
              <span className="text-[#BCA9D0] tracking-[0.2em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500 }}>
                {tx.eyebrow}
              </span>
            </div>
            <h2 className="text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400, lineHeight: 1.15 }}>
              {tx.heading1}
              <br />
              <em style={{ fontStyle: "italic", color: "#D4AF37" }}>{tx.heading2}</em>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-white/60 max-w-sm"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: 300, lineHeight: 1.75 }}
          >
            {tx.sub}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {tx.items.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="bg-[#643D70] p-8 group hover:bg-[#543060] transition-colors duration-300"
            >
              <div className="w-8 h-0.5 bg-[#D4AF37] mb-6" />
              <h3 className="text-white mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 500, lineHeight: 1.3 }}>
                {reason.title}
              </h3>
              <p className="text-white/55" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 300, lineHeight: 1.75 }}>
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
