import { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  ArrowRight,
  Film,
  Pen,
  Scissors,
  Layout,
  Zap,
  ShoppingBag,
  Stethoscope,
  Share2,
} from "lucide-react";
import { LanguageProvider } from "../context/LanguageContext";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";

const whatYouGet = [
  {
    icon: Pen,
    title: "Concept & Scripting",
    desc: "We write the hook, structure, and on-screen copy before any video is made.",
  },
  {
    icon: Film,
    title: "AI-Generated Footage",
    desc: "Custom visuals created with the latest AI video models, tailored to your brand's look and feel.",
  },
  {
    icon: Scissors,
    title: "Professional Editing",
    desc: "Text overlays, transitions, music, and pacing optimized for each platform (TikTok, Reels, YouTube Shorts).",
  },
  {
    icon: Layout,
    title: "Multiple Formats",
    desc: "Vertical (9:16), square, and horizontal versions delivered from a single concept.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Most projects delivered in 3–5 business days.",
  },
];

const whereItWorks = [
  {
    icon: ShoppingBag,
    title: "Product & Campaign Videos",
    desc: "For consumer brands",
  },
  {
    icon: Stethoscope,
    title: "Educational Content",
    desc: "For medical & wellness businesses",
  },
  {
    icon: Share2,
    title: "Social Media Reels",
    desc: "Designed to drive inquiries or sales",
  },
];

const processSteps = [
  {
    n: "01",
    title: "Discovery",
    desc: "We learn your brand, goals, and target audience.",
  },
  {
    n: "02",
    title: "Script & Storyboard",
    desc: "You approve the concept before production starts.",
  },
  {
    n: "03",
    title: "AI Production",
    desc: "We generate and refine the video using the latest AI tools.",
  },
  {
    n: "04",
    title: "Delivery",
    desc: "Final files delivered ready to post, in the formats you need.",
  },
];

const videoExamples = [
  { src: "/comercial IA.mp4", label: "AI Commercial" },
  { src: "/comercial IA 2.mp4", label: "AI Commercial 2" },
  { src: "/invitacion.mp4", label: "Digital Invitation" },
];

function PageContent() {
  const whatRef = useRef(null);
  const whereRef = useRef(null);
  const processRef = useRef(null);
  const videosRef = useRef(null);
  const ctaRef = useRef(null);

  const whatInView = useInView(whatRef, { once: true, margin: "-60px" });
  const whereInView = useInView(whereRef, { once: true, margin: "-60px" });
  const processInView = useInView(processRef, { once: true, margin: "-60px" });
  const videosInView = useInView(videosRef, { once: true, margin: "-60px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  useEffect(() => {
    const prevTitle = document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute("content") ?? "";

    document.title = "AI Video Production Services | Yildiz Creative Studio";
    metaDesc?.setAttribute(
      "content",
      "Custom AI-generated video ads for brands and clinics. Fast turnaround, professional editing, ready for social media. Request your free quote."
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
        <section className="relative min-h-[90vh] flex items-center bg-[#0F0A17] overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 60% at 80% 40%, rgba(100,61,112,0.18) 0%, transparent 70%)" }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-full h-32 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(15,10,23,0.6))" }}
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
                  AI VIDEO PRODUCTION
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-white mb-7"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(36px, 5vw, 66px)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                AI-Generated Video Content That Makes Your Brand Look{" "}
                <em style={{ fontStyle: "italic", color: "#D4AF37" }}>Bigger Than It Is</em>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-white/60 mb-10 max-w-[560px]"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "17px", fontWeight: 300, lineHeight: 1.85 }}
              >
                From product showcases to educational content, we use cutting-edge AI video tools to create scroll-stopping content — without the cost or wait time of traditional production.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={() => scrollTo("#video-examples")}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0F0A17] hover:bg-white transition-all duration-300 cursor-pointer border-none"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", borderRadius: "2px" }}
                >
                  See Video Examples
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

          {/* Scroll cue */}
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
                Everything You Need, Nothing You Don't
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

        {/* ── WHERE THIS WORKS BEST ── */}
        <section className="py-24 bg-[#1F1426]" ref={whereRef}>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={whereInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-[#D4AF37]" />
                  <span className="text-[#D4AF37] tracking-[0.2em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500 }}>
                    Where This Works Best
                  </span>
                </div>
                <h2 className="text-white mb-6" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 400, lineHeight: 1.2 }}>
                  Built for Businesses That Need a Strong Visual Story
                </h2>
                <p className="text-white/60" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 300, lineHeight: 1.85 }}>
                  We've created AI video content for wellness clinics, medical practices, and consumer product brands — anywhere a strong visual story helps convert viewers into customers or patients.
                </p>
              </motion.div>

              <div className="flex flex-col gap-4">
                {whereItWorks.map((card, i) => {
                  const Icon = card.icon;
                  return (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, x: 24 }}
                      animate={whereInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                      className="flex items-center gap-5 bg-white/6 border border-white/10 px-6 py-5"
                      style={{ borderRadius: "4px" }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D4AF37]/15 flex items-center justify-center">
                        <Icon size={18} className="text-[#D4AF37]" />
                      </div>
                      <div>
                        <div className="text-white mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 500 }}>
                          {card.title}
                        </div>
                        <div className="text-white/50" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 300 }}>
                          {card.desc}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
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
                From Idea to Published — In Days
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, y: 20 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="relative"
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
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 right-0 translate-x-1/2 w-full h-px bg-[#643D70]/10 pointer-events-none" aria-hidden="true" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VIDEO EXAMPLES ── */}
        <section id="video-examples" className="py-24 bg-[#151515]" ref={videosRef}>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={videosInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-center mb-14"
            >
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 h-px bg-[#D4AF37]" />
                <span className="text-[#D4AF37] tracking-[0.2em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500 }}>
                  Real Examples
                </span>
                <div className="w-8 h-px bg-[#D4AF37]" />
              </div>
              <h2 className="text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 400 }}>
                See What We've Made
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {videoExamples.map((vid, i) => (
                <motion.div
                  key={vid.src}
                  initial={{ opacity: 0, y: 20 }}
                  animate={videosInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative overflow-hidden bg-[#222] group"
                  style={{ borderRadius: "4px", aspectRatio: "16/9" }}
                >
                  <video
                    src={vid.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span
                      className="text-white px-2.5 py-1 bg-[#643D70]"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: "2px" }}
                    >
                      {vid.label}
                    </span>
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
              <h2 className="text-white mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 400 }}>
                Want to see what AI video could do for your brand?
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 300, lineHeight: 1.8 }}>
                We'll review your business, audience, and goals — then show you exactly what's possible.
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

export default function AIVideoProduction() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  );
}
