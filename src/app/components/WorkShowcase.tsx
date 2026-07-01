import { motion } from "motion/react";
import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

const showcaseItems = [
  { type: "video", src: "/comercial IA.mp4", label: "AI Commercial", tag: "AI Video", tagColor: "#643D70" },
  { type: "video", src: "/comercial IA 2.mp4", label: "AI Commercial 2", tag: "AI Video", tagColor: "#643D70" },
  { type: "video", src: "/invitacion.mp4", label: "Digital Invitation", tag: "AI Video", tagColor: "#643D70" },
  { type: "image", src: "/vainishop.jpg.png", label: "VainiShop", tag: "Branding", tagColor: "#B8860B" },
  { type: "image", src: "/mr-logo.jpg.png", label: "MR Identity", tag: "Branding", tagColor: "#B8860B" },
  { type: "image", src: "/media1.jpeg", label: "Social Media", tag: "Social Media", tagColor: "#2D6A4F" },
];

export function WorkShowcase() {
  const { lang } = useLang();
  const tx = t[lang];

  const eyebrow = lang === "es" ? "Trabajo Reciente" : "Recent Work";

  return (
    <section className="bg-[#151515] py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-6 h-px bg-[#D4AF37]" />
          <span
            className="text-[#D4AF37]/70 tracking-[0.2em] uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500 }}
          >
            {eyebrow}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {showcaseItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative overflow-hidden bg-[#222] group"
              style={{ borderRadius: "4px", aspectRatio: "4/3" }}
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <span
                  className="text-white px-2.5 py-1"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    backgroundColor: item.tagColor,
                    borderRadius: "2px",
                  }}
                >
                  {item.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
