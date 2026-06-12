import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

const initials = ["MG", "JT", "SR", "DP"];

export function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLang();
  const tx = t[lang].testimonials;
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + tx.items.length) % tx.items.length);
  const next = () => setCurrent((c) => (c + 1) % tx.items.length);
  const item = tx.items[current];

  return (
    <section id="testimonials" className="py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16"
        >
          <div>
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
          </div>
          <div className="flex items-center gap-3">
            <button onClick={prev} className="w-12 h-12 border border-[#643D70]/20 flex items-center justify-center text-[#343434]/50 hover:border-[#643D70] hover:text-[#643D70] transition-all duration-200 cursor-pointer bg-transparent" style={{ borderRadius: "2px" }} aria-label="Previous">
              <ChevronLeft size={18} />
            </button>
            <button onClick={next} className="w-12 h-12 bg-[#643D70] flex items-center justify-center text-white hover:bg-[#543060] transition-colors duration-200 cursor-pointer border-none" style={{ borderRadius: "2px" }} aria-label="Next">
              <ChevronRight size={18} />
            </button>
            <span className="text-[#343434]/40 ml-2" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 300 }}>
              {current + 1} / {tx.items.length}
            </span>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${lang}-${current}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
          >
            <div className="lg:col-span-2">
              <div className="text-[#643D70]/20 mb-4 leading-none" style={{ fontFamily: "'Playfair Display', serif", fontSize: "80px", lineHeight: 0.8 }}>"</div>
              <blockquote className="text-[#343434]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 400, lineHeight: 1.55, fontStyle: "italic" }}>
                {item.quote}
              </blockquote>
            </div>
            <div className="flex flex-col">
              <div className="bg-[#E8E6E1] p-8" style={{ borderRadius: "3px" }}>
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#643D70] flex items-center justify-center text-white flex-shrink-0" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 500 }}>
                    {initials[current]}
                  </div>
                  <div>
                    <div className="text-[#343434]" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: 500 }}>{item.name}</div>
                    <div className="text-[#343434]/50 mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 300 }}>{item.title}</div>
                    <div className="text-[#643D70]/60 mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 400 }}>{item.location}</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-6">
                {tx.items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1 transition-all duration-300 cursor-pointer border-none ${i === current ? "w-8 bg-[#643D70]" : "w-4 bg-[#343434]/20"}`}
                    style={{ borderRadius: "1px" }}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
