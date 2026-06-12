import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

const images = [
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?w=600&h=400&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?w=600&h=400&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&auto=format&q=80",
];

const tagKeys = ["Branding", "Social Media", "Web Design", "Branding", "Social Media", "Content"];

export function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLang();
  const tx = t[lang].portfolio;
  const [activeIdx, setActiveIdx] = useState(0);

  const tagMap: Record<string, string> = {
    "All": tx.categories[0],
    "Branding": tx.categories[1],
    "Social Media": tx.categories[2],
    "Web Design": tx.categories[3],
    "Content": tx.categories[4],
  };

  const activeKey = ["All","Branding","Social Media","Web Design","Content"][activeIdx];

  const projects = tx.projects.map((p, i) => ({
    ...p,
    id: i + 1,
    image: images[i],
    tag1: tagKeys[i],
    tag2: i % 2 === 0 ? "Web Design" : "Content",
  }));

  const filtered = activeKey === "All"
    ? projects
    : projects.filter((p) => p.tag1 === activeKey || p.tag2 === activeKey);

  return (
    <section id="portfolio" className="py-28 bg-[#E8E6E1]">
      <div className="max-w-7xl mx-auto px-6 md:px-10" ref={ref}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
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
              {tx.heading1} <em style={{ color: "#643D70" }}>{tx.heading2}</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap gap-2"
          >
            {tx.categories.map((cat, i) => (
              <button
                key={cat}
                onClick={() => setActiveIdx(i)}
                className={`px-4 py-2 transition-all duration-200 border cursor-pointer ${
                  activeIdx === i
                    ? "bg-[#643D70] text-white border-[#643D70]"
                    : "bg-transparent text-[#343434]/60 border-[#343434]/20 hover:border-[#643D70] hover:text-[#643D70]"
                }`}
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 400, letterSpacing: "0.04em", borderRadius: "2px" }}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative overflow-hidden bg-white cursor-pointer"
              style={{ borderRadius: "3px" }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: "3/2" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#643D70]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center gap-3 p-6">
                  <span className="text-white text-center" style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 500 }}>
                    {project.title}
                  </span>
                  <div className="w-8 h-px bg-[#D4AF37]" />
                  <span className="text-white/80 text-center" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 300 }}>
                    {project.result}
                  </span>
                </div>
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <div className="text-[#343434]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 500 }}>
                    {project.title}
                  </div>
                  <div className="flex gap-2 mt-1.5">
                    <span className="text-[#643D70]/60" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px" }}>
                      {tagMap[project.tag1] ?? project.tag1}
                    </span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full border border-[#643D70]/20 flex items-center justify-center group-hover:border-[#643D70] group-hover:bg-[#643D70] transition-all duration-300">
                  <svg width="10" height="10" viewBox="0 0 10 10" className="text-[#343434]/40 group-hover:text-white transition-colors duration-300" fill="none">
                    <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
