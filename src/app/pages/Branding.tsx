import { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  ArrowRight,
  PenTool,
  Layers,
  BookOpen,
  CreditCard,
  Target,
  Rocket,
  RefreshCw,
  Building2,
  Globe,
} from "lucide-react";
import { LanguageProvider } from "../context/LanguageContext";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";

const whatYouGet = [
  {
    icon: PenTool,
    title: "Logo Design",
    desc: "A custom logo built around your business, not a generic template.",
  },
  {
    icon: Layers,
    title: "Brand Identity System",
    desc: "Color palette, typography, and visual guidelines so everything you create looks consistent.",
  },
  {
    icon: BookOpen,
    title: "Brand Guidelines Document",
    desc: "A reference file you (or anyone you work with) can use to keep your brand consistent long-term.",
  },
  {
    icon: CreditCard,
    title: "Business Collateral",
    desc: "Business cards, social media templates, and other branded assets as needed.",
  },
  {
    icon: Target,
    title: "Brand Strategy Input",
    desc: "We help define your brand's tone and positioning, not just how it looks.",
  },
];

const perfectFor = [
  {
    icon: Rocket,
    label: "New businesses building their identity from scratch",
  },
  {
    icon: RefreshCw,
    label: "Existing businesses ready for a rebrand",
  },
  {
    icon: Building2,
    label: "Clinics & service businesses that need to look more established",
  },
  {
    icon: Globe,
    label: "Brands expanding into new markets (like the US)",
  },
];

const processSteps = [
  {
    n: "01",
    title: "Discovery",
    desc: "We learn about your business, your audience, and how you want to be perceived.",
  },
  {
    n: "02",
    title: "Concept Development",
    desc: "We create initial logo and identity concepts for you to react to.",
  },
  {
    n: "03",
    title: "Refinement",
    desc: "We refine the chosen direction until it's exactly right.",
  },
  {
    n: "04",
    title: "Delivery",
    desc: "You receive all final files, plus guidelines for consistent use.",
  },
];

const brandingWork = [
  { src: "/vainishop.jpg.png", title: "VainiShop", desc: "Floral logo & visual identity" },
  { src: "/farmacopea.jpg.png", title: "Farmacopea", desc: "Brand identity" },
  { src: "/mr-logo.jpg.png", title: "MR", desc: "Logo design" },
  { src: "/sompany-travels.jpg.png", title: "Sompany Travels", desc: "Travel brand identity" },
  { src: "/candles-label.jpg.png", title: "Candles For You", desc: "Product label design" },
  { src: "/candles-thankyou.jpg.png", title: "Candles For You", desc: "Brand collateral" },
];

function PageContent() {
  const whatRef = useRef(null);
  const perfectRef = useRef(null);
  const processRef = useRef(null);
  const workRef = useRef(null);
  const ctaRef = useRef(null);

  const whatInView = useInView(whatRef, { once: true, margin: "-60px" });
  const perfectInView = useInView(perfectRef, { once: true, margin: "-60px" });
  const processInView = useInView(processRef, { once: true, margin: "-60px" });
  const workInView = useInView(workRef, { once: true, margin: "-60px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  useEffect(() => {
    const prevTitle = document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute("content") ?? "";

    document.title = "Branding & Logo Design | Yildiz Creative Studio";
    metaDesc?.setAttribute(
      "content",
      "Custom brand identity and logo design for growing businesses. Professional, consistent, ready to compete."
    );

    return () => {
      document.title = prevTitle;
      metaDesc?.setAttribute("content", prevDesc);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#E8E6E1] text-[#343434] overflow-x-hidden">
      <Navigation />
      <main>

        {/* ── HERO ── */}
        <section className="relative min-h-[90vh] flex items-center bg-[#0E0B08] overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 65% 55% at 85% 30%, rgba(212,175,55,0.08) 0%, transparent 65%)" }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 50% 60% at 5% 75%, rgba(100,61,112,0.16) 0%, transparent 60%)" }}
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-6 md:px-10 w-full pt-36 pb-24">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="w-8 h-px bg-[#D4AF37]" />
                <span
                  className="text-[#D4AF37] tracking-[0.25em] uppercase"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500 }}
                >
                  BRANDING
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-white mb-7"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(36px, 5.5vw, 68px)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                Brand Identity That Makes People{" "}
                <em style={{ fontStyle: "italic", color: "#D4AF37" }}>Remember You</em>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-white/60 mb-10 max-w-[560px]"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "17px", fontWeight: 300, lineHeight: 1.85 }}
              >
                From logo design to a complete visual identity, we build brands that look professional, consistent, and ready to compete — whether you're just starting out or leveling up.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={() => scrollTo("#branding-work")}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0E0B08] hover:bg-white transition-all duration-300 cursor-pointer border-none"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", borderRadius: "2px" }}
                >
                  View Branding Work
                  <ArrowRight size={15} />
                </button>
                <button
                  onClick={() => scrollTo("#contact")}
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white hover:border-white/60 hover:bg-white/5 transition-all duration-300 cursor-pointer bg-transparent"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 400, letterSpacing: "0.08em", textTransform: "uppercase", borderRadius: "2px" }}
                >
                  Get a Quote
                </button>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-white/30 tracking-widest" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "9px", textTransform: "uppercase" }}>
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-10 bg-gradient-to-b from-[#D4AF37]/50 to-transparent"
            />
          </motion.div>
        </section>

        {/* ── WHAT YOU GET ── */}
        <section className="py-24 bg-[#E8E6E1]" ref={whatRef}>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={whatInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 h-px bg-[#D4AF37]" />
                <span className="text-[#643D70] tracking-[0.2em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500 }}>
                  What You Get
                </span>
                <div className="w-8 h-px bg-[#D4AF37]" />
              </div>
              <h2 className="text-[#343434]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 400, lineHeight: 1.15 }}>
                A Brand Built to Last
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whatYouGet.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={whatInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                    className="bg-white p-8 group hover:shadow-md transition-shadow duration-300"
                    style={{ borderRadius: "4px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
                  >
                    <div className="w-10 h-10 rounded-full bg-[#643D70]/10 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#643D70]/18">
                      <Icon size={18} className="text-[#643D70]" />
                    </div>
                    <h3 className="text-[#343434] mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "19px", fontWeight: 500 }}>
                      {item.title}
                    </h3>
                    <p className="text-[#343434]/55" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 300, lineHeight: 1.75 }}>
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PERFECT FOR ── */}
        <section className="py-24 bg-[#1F1426]" ref={perfectRef}>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={perfectInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-center mb-14"
            >
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 h-px bg-[#D4AF37]" />
                <span className="text-[#D4AF37] tracking-[0.2em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500 }}>
                  Perfect For
                </span>
                <div className="w-8 h-px bg-[#D4AF37]" />
              </div>
              <h2 className="text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 400 }}>
                Where We Do Our Best Work
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {perfectFor.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={perfectInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.08 + i * 0.09 }}
                    className="flex items-center gap-5 bg-white/6 border border-white/10 px-6 py-5 hover:bg-white/10 transition-colors duration-300"
                    style={{ borderRadius: "4px" }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D4AF37]/12 flex items-center justify-center">
                      <Icon size={18} className="text-[#D4AF37]" />
                    </div>
                    <span className="text-white/80" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 300, lineHeight: 1.55 }}>
                      {item.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── OUR PROCESS ── */}
        <section className="py-24 bg-[#E8E6E1]" ref={processRef}>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 h-px bg-[#D4AF37]" />
                <span className="text-[#643D70] tracking-[0.2em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500 }}>
                  Our Process
                </span>
                <div className="w-8 h-px bg-[#D4AF37]" />
              </div>
              <h2 className="text-[#343434]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 400 }}>
                Collaborative From Day One
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, y: 20 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                >
                  <div
                    className="text-[#643D70]/12 mb-4 select-none"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "64px", fontWeight: 400, lineHeight: 1 }}
                  >
                    {step.n}
                  </div>
                  <div className="w-6 h-0.5 bg-[#D4AF37] mb-4" />
                  <h3 className="text-[#343434] mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 500 }}>
                    {step.title}
                  </h3>
                  <p className="text-[#343434]/55" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 300, lineHeight: 1.75 }}>
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BRANDING WORK ── */}
        <section id="branding-work" className="py-24 bg-[#151515]" ref={workRef}>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={workInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-center mb-14"
            >
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 h-px bg-[#D4AF37]" />
                <span className="text-[#D4AF37] tracking-[0.2em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500 }}>
                  Real Work
                </span>
                <div className="w-8 h-px bg-[#D4AF37]" />
              </div>
              <h2 className="text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 400 }}>
                Brands We've Built
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {brandingWork.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={workInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative overflow-hidden bg-[#222] group"
                  style={{ borderRadius: "4px", aspectRatio: "4/3" }}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 500 }}>
                      {item.title}
                    </div>
                    <div className="text-white/60" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 300 }}>
                      {item.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-20 bg-[#643D70] text-center" ref={ctaRef}>
          <div className="max-w-3xl mx-auto px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-white mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 400, lineHeight: 1.2 }}>
                Ready for a brand that actually looks like you mean business?
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 300, lineHeight: 1.8 }}>
                Let's build something you're proud to put in front of customers.
              </p>
              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#343434] hover:bg-white transition-all duration-300 cursor-pointer border-none group"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", borderRadius: "2px" }}
              >
                Get a Custom Quote
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function Branding() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  );
}
