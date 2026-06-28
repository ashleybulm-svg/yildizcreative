import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

const brandingSlides = [
  { image: "/vainishop.jpg.png",         title: "VainiShop",                  result: "Floral logo & visual identity"             },
  { image: "/farmacopea.jpg.png",        title: "Farmacopea del Embarazo",    result: "Medical book cover & editorial design"     },
  { image: "/candles-label.jpg.png",     title: "Candles For You — Label",    result: "Product label design"                     },
  { image: "/mr-logo.jpg.png",           title: "Medicina Regenerativa",      result: "Logo & brand identity design"             },
  { image: "/sompany-travels.jpg.png",   title: "Sompany Travels",            result: "Brand identity & business card design"    },
  { image: "/candles-thankyou.jpg.png",  title: "Candles For You",            result: "Brand collateral & thank you card design" },
];

function BrandingCarousel() {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % brandingSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [hovered]);

  const prev = () => setCurrent((c) => (c - 1 + brandingSlides.length) % brandingSlides.length);
  const next = () => setCurrent((c) => (c + 1) % brandingSlides.length);
  const slide = brandingSlides[current];

  return (
    <div
      className="group relative overflow-hidden bg-white cursor-pointer"
      style={{ borderRadius: "3px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "3/2" }}>
        {brandingSlides.map((s, i) => (
          <img
            key={s.image}
            src={s.image}
            alt={s.title}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0 }}
          />
        ))}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-[#643D70]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center gap-3 p-6 z-10">
          <span className="text-white text-center" style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 500 }}>
            {slide.title}
          </span>
          <div className="w-8 h-px bg-[#D4AF37]" />
          <span className="text-white/80 text-center" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 300 }}>
            {slide.result}
          </span>
        </div>

        {/* Arrows */}
        <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/80 hover:bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderRadius: "50%" }}>
          <ChevronLeft size={16} className="text-[#643D70]" />
        </button>
        <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/80 hover:bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderRadius: "50%" }}>
          <ChevronRight size={16} className="text-[#643D70]" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-20">
          {brandingSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-300"
              style={{
                width: i === current ? "18px" : "6px",
                height: "6px",
                borderRadius: "3px",
                background: i === current ? "#D4AF37" : "rgba(255,255,255,0.6)",
              }}
            />
          ))}
        </div>
      </div>

      <div className="p-5 flex items-center justify-between">
        <div>
          <div className="text-[#343434]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 500 }}>
            {slide.title}
          </div>
          <div className="mt-1.5">
            <span className="text-[#643D70]/60" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px" }}>
              Branding · {current + 1}/{brandingSlides.length}
            </span>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full border border-[#643D70]/20 flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 10 10" className="text-[#343434]/40" fill="none">
            <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

const socialMediaSlides = [
  { image: "/media1.jpeg", title: "Social Media", result: "Content design & strategy" },
  { image: "/media2.jpeg", title: "Social Media", result: "Content design & strategy" },
  { image: "/media3.jpeg", title: "Social Media", result: "Content design & strategy" },
  { image: "/media4.jpeg", title: "Social Media", result: "Content design & strategy" },
  { image: "/media5.jpeg", title: "Social Media", result: "Content design & strategy" },
  { image: "/media6.jpeg", title: "Social Media", result: "Content design & strategy" },
  { image: "/media7.jpeg", title: "Social Media", result: "Content design & strategy" },
  { image: "/media8.jpeg", title: "Social Media", result: "Content design & strategy" },
];

function SocialMediaCarousel() {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % socialMediaSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [hovered]);

  const prev = () => setCurrent((c) => (c - 1 + socialMediaSlides.length) % socialMediaSlides.length);
  const next = () => setCurrent((c) => (c + 1) % socialMediaSlides.length);
  const slide = socialMediaSlides[current];

  return (
    <div
      className="group relative overflow-hidden bg-white cursor-pointer"
      style={{ borderRadius: "3px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "3/2" }}>
        {socialMediaSlides.map((s, i) => (
          <img
            key={s.image}
            src={s.image}
            alt={s.title}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-[#643D70]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center gap-3 p-6 z-10">
          <span className="text-white text-center" style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 500 }}>
            {slide.title}
          </span>
          <div className="w-8 h-px bg-[#D4AF37]" />
          <span className="text-white/80 text-center" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 300 }}>
            {slide.result}
          </span>
        </div>
        <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/80 hover:bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderRadius: "50%" }}>
          <ChevronLeft size={16} className="text-[#643D70]" />
        </button>
        <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/80 hover:bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderRadius: "50%" }}>
          <ChevronRight size={16} className="text-[#643D70]" />
        </button>
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-20">
          {socialMediaSlides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className="transition-all duration-300" style={{ width: i === current ? "18px" : "6px", height: "6px", borderRadius: "3px", background: i === current ? "#D4AF37" : "rgba(255,255,255,0.6)" }} />
          ))}
        </div>
      </div>
      <div className="p-5 flex items-center justify-between">
        <div>
          <div className="text-[#343434]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 500 }}>
            Social Media Content
          </div>
          <div className="mt-1.5">
            <span className="text-[#643D70]/60" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px" }}>
              Social Media · {current + 1}/{socialMediaSlides.length}
            </span>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full border border-[#643D70]/20 flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 10 10" className="text-[#343434]/40" fill="none">
            <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

const comercialSlides = [
  { video: "/comercial IA.mp4",   title: "AI Commercial",   result: "AI-produced brand commercial" },
  { video: "/comercial IA 2.mp4", title: "AI Commercial 2", result: "AI-produced brand commercial" },
];

function VideoCarousel() {
  const [current, setCurrent] = useState(0);
  const slide = comercialSlides[current];

  const prev = () => setCurrent((c) => (c - 1 + comercialSlides.length) % comercialSlides.length);
  const next = () => setCurrent((c) => (c + 1) % comercialSlides.length);

  return (
    <div className="group relative overflow-hidden bg-white cursor-pointer" style={{ borderRadius: "3px" }}>
      <div className="relative overflow-hidden" style={{ aspectRatio: "3/2" }}>
        <video
          key={slide.video}
          src={slide.video}
          autoPlay muted loop playsInline
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#643D70]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center gap-3 p-6 z-10">
          <span className="text-white text-center" style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 500 }}>
            {slide.title}
          </span>
          <div className="w-8 h-px bg-[#D4AF37]" />
          <span className="text-white/80 text-center" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 300 }}>
            {slide.result}
          </span>
        </div>

        {/* Arrows */}
        <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/80 hover:bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderRadius: "50%" }}>
          <ChevronLeft size={16} className="text-[#643D70]" />
        </button>
        <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/80 hover:bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderRadius: "50%" }}>
          <ChevronRight size={16} className="text-[#643D70]" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-20">
          {comercialSlides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className="transition-all duration-300" style={{ width: i === current ? "18px" : "6px", height: "6px", borderRadius: "3px", background: i === current ? "#D4AF37" : "rgba(255,255,255,0.6)" }} />
          ))}
        </div>
      </div>

      <div className="p-5 flex items-center justify-between">
        <div>
          <div className="text-[#343434]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 500 }}>
            {slide.title}
          </div>
          <div className="mt-1.5">
            <span className="text-[#643D70]/60" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px" }}>
              AI Ads · {current + 1}/{comercialSlides.length}
            </span>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full border border-[#643D70]/20 flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 10 10" className="text-[#343434]/40" fill="none">
            <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

const portfolioCards = [
  { id: 1,   type: "carousel",        tag1: "Branding"      },
  { id: 2,   type: "socialCarousel",  tag1: "Social Media"  },
  { id: 100, type: "video", video: "/invitacion.mp4", title: "Digital Invitation", result: "Animated digital invitation",  tag1: "AI Video" },
  { id: 101, type: "video", video: "/AI video.mp4",   title: "AI Video",           result: "AI-powered video production", tag1: "AI Video" },
  { id: 200, type: "videoCarousel",   tag1: "AI Ads"        },
];

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
    "AI Video": tx.categories[4],
    "AI Ads": tx.categories[5] ?? "AI Ads",
  };

  const activeKey = ["All","Branding","Social Media","Web Design","AI Video","AI Ads"][activeIdx];

  const filtered = activeKey === "All"
    ? portfolioCards
    : portfolioCards.filter((p) => p.tag1 === activeKey);

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
          {filtered.map((card, i) => (
            <motion.div
              key={card.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              {card.type === "carousel" ? (
                <BrandingCarousel />
              ) : card.type === "socialCarousel" ? (
                <SocialMediaCarousel />
              ) : card.type === "videoCarousel" ? (
                <VideoCarousel />
              ) : (
                <div className="group relative overflow-hidden bg-white cursor-pointer" style={{ borderRadius: "3px" }}>
                  <div className="relative overflow-hidden" style={{ aspectRatio: "3/2" }}>
                    <video
                      src={(card as any).video}
                      autoPlay muted loop playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#643D70]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center gap-3 p-6">
                      <span className="text-white text-center" style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 500 }}>
                        {(card as any).title}
                      </span>
                      <div className="w-8 h-px bg-[#D4AF37]" />
                      <span className="text-white/80 text-center" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 300 }}>
                        {(card as any).result}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <div className="text-[#343434]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 500 }}>
                        {(card as any).title}
                      </div>
                      <div className="mt-1.5">
                        <span className="text-[#643D70]/60" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px" }}>
                          {tagMap[card.tag1] ?? card.tag1}
                        </span>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-[#643D70]/20 flex items-center justify-center group-hover:border-[#643D70] group-hover:bg-[#643D70] transition-all duration-300">
                      <svg width="10" height="10" viewBox="0 0 10 10" className="text-[#343434]/40 group-hover:text-white transition-colors duration-300" fill="none">
                        <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
