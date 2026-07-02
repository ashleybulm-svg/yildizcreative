import { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  ArrowRight,
  Palette,
  Smartphone,
  Search,
  Code,
  HeadphonesIcon,
  Globe,
  ShoppingBag,
  Megaphone,
  Wrench,
  Bot,
  Database,
  CalendarDays,
} from "lucide-react";
import { LanguageProvider } from "../context/LanguageContext";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";

const whatYouGet = [
  {
    icon: Palette,
    title: "Custom Design & Development",
    desc: "Built from scratch to match your brand, not a recycled template.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First & Fast",
    desc: "Optimized for speed and performance on every device.",
  },
  {
    icon: Search,
    title: "SEO-Ready Foundation",
    desc: "Proper structure, metadata, and technical setup so search engines can find you.",
  },
  {
    icon: Code,
    title: "Scalable Code",
    desc: "Built with modern frameworks so your business can grow — new pages, features, integrations.",
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    desc: "Optional maintenance and updates after launch.",
  },
];

const whatWeBuild = [
  {
    icon: Globe,
    title: "Business & Service Websites",
    desc: "Your digital home base — professionally designed and built to convert visitors.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce & Product Showcases",
    desc: "Online stores and product pages that make buying easy.",
  },
  {
    icon: Megaphone,
    title: "Landing Pages",
    desc: "Focused pages for campaigns, launches, and lead generation.",
  },
  {
    icon: Wrench,
    title: "Custom Web Applications & Software",
    desc: "Internal tools, dashboards, and systems built around how your business actually works.",
  },
  {
    icon: Bot,
    title: "AI Chatbots & Automation",
    desc: "Custom chatbots for customer support, lead capture, or booking — trained on your business.",
  },
  {
    icon: Database,
    title: "CRM & Client Management Systems",
    desc: "Custom-built or integrated solutions to track leads, clients, and sales.",
  },
  {
    icon: CalendarDays,
    title: "Booking & Scheduling Systems",
    desc: "Let clients book time with you automatically, 24/7.",
  },
];

const processSteps = [
  {
    n: "01",
    title: "Discovery & Strategy",
    desc: "We learn your goals, audience, and what your site or system needs to do for your business.",
  },
  {
    n: "02",
    title: "Design",
    desc: "A custom layout or architecture built around your brand and requirements.",
  },
  {
    n: "03",
    title: "Development",
    desc: "Clean, modern code — built for speed and reliability.",
  },
  {
    n: "04",
    title: "Launch & Support",
    desc: "We handle deployment and stay available for updates.",
  },
];

function PageContent() {
  const whatRef = useRef(null);
  const buildRef = useRef(null);
  const processRef = useRef(null);
  const ctaRef = useRef(null);

  const whatInView = useInView(whatRef, { once: true, margin: "-60px" });
  const buildInView = useInView(buildRef, { once: true, margin: "-60px" });
  const processInView = useInView(processRef, { once: true, margin: "-60px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  useEffect(() => {
    const prevTitle = document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute("content") ?? "";

    document.title = "Web Development & Custom Software | Yildiz Creative Studio";
    metaDesc?.setAttribute(
      "content",
      "Custom websites, software, chatbots, and CRM systems for growing businesses. Fast, modern, and built around how you work."
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
        <section className="relative min-h-[90vh] flex items-center bg-[#0A0F1A] overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 60% at 20% 60%, rgba(100,61,112,0.15) 0%, transparent 70%)" }}
            aria-hidden="true"
          />
          <div
            className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)" }}
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
                  WEB DEVELOPMENT
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-white mb-7"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(34px, 5vw, 64px)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                Custom Websites & Software Built to Convert —{" "}
                <em style={{ fontStyle: "italic", color: "#D4AF37" }}>Not Just Templates</em>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-white/60 mb-10 max-w-[560px]"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "17px", fontWeight: 300, lineHeight: 1.85 }}
              >
                From websites to custom systems, chatbots, and CRMs — we build the digital tools your business actually needs. No page-builder shortcuts, no cookie-cutter templates.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="/#portfolio"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0A0F1A] hover:bg-white transition-all duration-300 border-none"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", borderRadius: "2px", textDecoration: "none" }}
                >
                  View Portfolio
                  <ArrowRight size={15} />
                </a>
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
                Built Right From the Start
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

        {/* ── WHAT WE BUILD ── */}
        <section className="py-24 bg-[#1e1e1e]" ref={buildRef}>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={buildInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-center mb-14"
            >
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 h-px bg-[#D4AF37]" />
                <span className="text-[#D4AF37] tracking-[0.2em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500 }}>
                  What We Build
                </span>
                <div className="w-8 h-px bg-[#D4AF37]" />
              </div>
              <h2 className="text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 400 }}>
                One Partner for Every Digital Need
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {whatWeBuild.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={buildInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.08 + i * 0.07 }}
                    className="flex gap-4 bg-white/5 border border-white/8 p-6 group hover:bg-white/8 transition-colors duration-300"
                    style={{ borderRadius: "4px" }}
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#D4AF37]/12 flex items-center justify-center mt-0.5">
                      <Icon size={16} className="text-[#D4AF37]" />
                    </div>
                    <div>
                      <h3 className="text-white mb-1.5" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 500 }}>
                        {item.title}
                      </h3>
                      <p className="text-white/50" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 300, lineHeight: 1.65 }}>
                        {item.desc}
                      </p>
                    </div>
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
                Clear Steps, No Surprises
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
                Ready for a website or system that actually works for your business?
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 300, lineHeight: 1.8 }}>
                Tell us what you need — we'll scope it out and get back to you with options.
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

export default function WebDevelopment() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  );
}
