import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Palette, Share2, FileText, Sparkles, Globe, Megaphone, Mail, Gift } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

const icons = [Palette, Share2, FileText, Sparkles, Globe, Megaphone, Mail, Gift];
const numbers = ["01","02","03","04","05","06","07","08"];

export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLang();
  const tx = t[lang].services;

  return (
    <section id="services" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
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
              <em style={{ color: "#643D70" }}>{tx.heading2}</em> {tx.heading3}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col justify-end"
          >
            <p className="text-[#343434]/60 max-w-md" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 300, lineHeight: 1.75 }}>
              {tx.sub}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#643D70]/8">
          {tx.items.map((service, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={numbers[i]}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                className="bg-white p-8 group hover:bg-[#643D70] transition-colors duration-400 cursor-default"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#643D70]/8 group-hover:bg-white/15 transition-colors duration-400">
                    <Icon size={18} className="text-[#643D70] group-hover:text-white transition-colors duration-400" />
                  </div>
                  <span className="text-[#343434]/20 group-hover:text-white/30 transition-colors duration-400" style={{ fontFamily: "'Playfair Display', serif", fontSize: "32px", fontWeight: 400 }}>
                    {numbers[i]}
                  </span>
                </div>
                <h3 className="text-[#343434] group-hover:text-white transition-colors duration-400 mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 500, lineHeight: 1.3 }}>
                  {service.title}
                </h3>
                <p className="text-[#343434]/55 group-hover:text-white/70 transition-colors duration-400" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 300, lineHeight: 1.7 }}>
                  {service.desc}
                </p>
                <div className="mt-6 w-0 h-px bg-[#D4AF37] group-hover:w-8 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
