import { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  ArrowRight,
  Palette,
  Share2,
  Layers,
  UserCheck,
  Zap,
  Heart,
  Sparkles,
  Gift,
  Cake,
  Building2,
} from "lucide-react";
import { LanguageProvider } from "../context/LanguageContext";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";

const whatYouGet = [
  {
    icon: Palette,
    title: "Fully Custom Design",
    desc: "No templates — every invitation is designed around your event's colors, theme, and style.",
  },
  {
    icon: Share2,
    title: "Digital & Print-Ready",
    desc: "Share via WhatsApp, text, or social media, or get a print-ready file if you also want physical copies.",
  },
  {
    icon: Layers,
    title: "Animated Options",
    desc: "Add subtle motion or animated elements for a modern, memorable touch.",
  },
  {
    icon: UserCheck,
    title: "RSVP Made Easy",
    desc: "Optional RSVP link or form built into the invitation.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "Most designs delivered within 2–4 business days.",
  },
];

const perfectFor = [
  { icon: Heart, label: "Weddings & engagement parties" },
  { icon: Sparkles, label: "Quinceañeras & sweet 16s" },
  { icon: Gift, label: "Baby showers & gender reveals" },
  { icon: Cake, label: "Birthdays & anniversaries" },
  { icon: Building2, label: "Corporate & brand events" },
];

const processSteps = [
  {
    n: "01",
    title: "Tell Us About Your Event",
    desc: "Share your date, theme, colors, and any inspiration you love.",
  },
  {
    n: "02",
    title: "Custom Design",
    desc: "We create a design concept tailored to your event.",
  },
  {
    n: "03",
    title: "Revisions",
    desc: "We refine it together until it's exactly right.",
  },
  {
    n: "04",
    title: "Delivery",
    desc: "Receive your final files, ready to send to guests.",
  },
];

function PageContent() {
  const whatRef = useRef(null);
  const perfectRef = useRef(null);
  const processRef = useRef(null);
  const examplesRef = useRef(null);
  const ctaRef = useRef(null);

  const whatInView = useInView(whatRef, { once: true, margin: "-60px" });
  const perfectInView = useInView(perfectRef, { once: true, margin: "-60px" });
  const processInView = useInView(processRef, { once: true, margin: "-60px" });
  const examplesInView = useInView(examplesRef, { once: true, margin: "-60px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  useEffect(() => {
    const prevTitle = document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute("content") ?? "";

    document.title = "Digital Invitations | Yildiz Creative Studio";
    metaDesc?.setAttribute(
      "content",
      "Custom digital invitations for weddings, quinceañeras, baby showers, and every celebration. Fast delivery, fully custom designs, RSVP-ready."
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
        <section className="relative min-h-[90vh] flex items-center bg-[#150A12] overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 55% at 75% 35%, rgba(180,60,100,0.12) 0%, transparent 65%)" }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 50% 60% at 10% 80%, rgba(100,61,112,0.14) 0%, transparent 60%)" }}
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
                  DIGITAL INVITATIONS
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
                Beautiful Digital Invitations Your Guests Will{" "}
                <em style={{ fontStyle: "italic", color: "#D4AF37" }}>Actually Open</em>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-white/60 mb-10 max-w-[560px]"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "17px", fontWeight: 300, lineHeight: 1.85 }}
              >
                Custom-designed digital invitations for weddings, quinceañeras, baby showers, and every celebration worth remembering — delivered fast, shareable anywhere, and designed to match your event perfectly.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={() => scrollTo("#invitation-examples")}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#150A12] hover:bg-white transition-all duration-300 cursor-pointer border-none"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", borderRadius: "2px" }}
                >
                  See Invitation Designs
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
                Every Detail, Done Right
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
                Every Celebration, Big or Small
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {perfectFor.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={perfectInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.08 + i * 0.08 }}
                    className="flex flex-col items-center text-center gap-4 bg-white/6 border border-white/10 px-5 py-8 hover:bg-white/10 transition-colors duration-300"
                    style={{ borderRadius: "4px" }}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#D4AF37]/12 flex items-center justify-center">
                      <Icon size={20} className="text-[#D4AF37]" />
                    </div>
                    <span className="text-white/80" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 400, lineHeight: 1.5 }}>
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
                Simple, Personal, and Stress-Free
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

        {/* ── INVITATION EXAMPLE ── */}
        <section id="invitation-examples" className="py-24 bg-[#151515]" ref={examplesRef}>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={examplesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-center mb-14"
            >
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 h-px bg-[#D4AF37]" />
                <span className="text-[#D4AF37] tracking-[0.2em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500 }}>
                  Real Example
                </span>
                <div className="w-8 h-px bg-[#D4AF37]" />
              </div>
              <h2 className="text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 400 }}>
                See It in Motion
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={examplesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="max-w-2xl mx-auto"
            >
              <div
                className="relative overflow-hidden bg-[#222] group"
                style={{ borderRadius: "8px", aspectRatio: "9/16", maxHeight: "70vh" }}
              >
                <video
                  src="/invitacion.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span
                    className="text-white px-3 py-1.5 bg-[#643D70]"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: "2px" }}
                  >
                    Digital Invitation
                  </span>
                </div>
              </div>
              <p className="text-white/40 text-center mt-5" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 300 }}>
                Animated digital invitation — shareable via WhatsApp, Instagram, or text
              </p>
            </motion.div>
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
                Planning something special? Let's design an invitation your guests won't forget.
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 300, lineHeight: 1.8 }}>
                Tell us your event details — we'll take it from there.
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

export default function DigitalInvitations() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  );
}
