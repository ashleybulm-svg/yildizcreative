import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Check, ArrowRight, Sparkles, Globe, Layout, ShoppingBag, Bot, Database, Code } from "lucide-react";

const webTechIcons: Record<string, React.ElementType> = { Globe, Layout, ShoppingBag, Bot, Database, Code };
import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

export function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const ref = useRef(null);
  const inView = useInView(ref, {once: true,margin: "-80px",});
  const { lang } = useLang();
  const tx = t[lang].pricing;

  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  const paymentLinks: Record<string, string> = {
  Essential: "https://buy.stripe.com/4gM7sKfUWbAJ37R4aYgUM00",
  Growth: "https://buy.stripe.com/aFaaEW8su5cleQz7nagUM01",
  Scale: "https://buy.stripe.com/14A6oGeQS5clbEnbDqgUM02",
};
const aiPaymentLinks: Record<string, string> = {
  "AI Single": "https://buy.stripe.com/4gM8wO5gi6gp0ZJbDqgUM07",
  "AI Starter": "https://buy.stripe.com/00w6oG8su9sB7o70YMgUM06",
  "AI Growth": "https://buy.stripe.com/14A4gy2469sBbEn6j6gUM08",
  "Talking Avatar Video": "https://buy.stripe.com/6oU5kCdMOcEN0ZJfTGgUM09",
  "AI Commercial Video": "https://buy.stripe.com/eVq5kCbEG48haAjcHugUM0a",
};

  return (
    <section id="pricing" className="py-28 bg-[#E8E6E1]">
      <div
  className="max-w-7xl mx-auto px-6 md:px-10" ref={ref}>
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#D4AF37]" />
            <span
              className="text-[#643D70] tracking-[0.2em] uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500 }}
            >
              {tx.eyebrow}
            </span>
            <div className="w-8 h-px bg-[#D4AF37]" />
          </div>
          <h2
            className="text-[#343434] mb-5"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 400, lineHeight: 1.12 }}
          >
            {tx.heading}
          </h2>
          <p
            className="text-[#343434]/60 max-w-2xl mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 300, lineHeight: 1.8 }}
          >
            {tx.sub}
          </p>
        </motion.div>

        {/* ── Pricing Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {tx.plans.map((plan, i) => {
            const isPopular = plan.popular;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className={`relative flex flex-col overflow-hidden ${
                  isPopular
                    ? "bg-[#643D70] shadow-2xl shadow-[#643D70]/25 md:-translate-y-4 md:scale-[1.02]"
                    : "bg-white shadow-lg shadow-black/5"
                }`}
                style={{ borderRadius: "6px" }}
              >
                {/* Most Popular badge */}
                {isPopular && (
                  <div className="flex items-center justify-center gap-2 py-2.5 bg-[#D4AF37]">
                    <Sparkles size={12} className="text-[#343434]" />
                    <span
                      className="text-[#343434] tracking-[0.18em] uppercase"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", fontWeight: 600 }}
                    >
                      {tx.popularLabel}
                    </span>
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  {/* Plan name */}
                  <div
                    className={`tracking-[0.22em] uppercase mb-2 ${isPopular ? "text-[#BCA9D0]" : "text-[#643D70]"}`}
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500 }}
                  >
                    {plan.name}
                  </div>

                  {/* Price */}
                  <div className="mb-1">
                    <span
                      className={isPopular ? "text-white" : "text-[#343434]"}
                      style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 3.5vw, 42px)", fontWeight: 400, letterSpacing: "-0.02em" }}
                    >
                      {plan.price}
                    </span>
                  </div>
                  <div
                    className={`mb-1 ${isPopular ? "text-white/50" : "text-[#343434]/40"}`}
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 300 }}
                  >
                    {plan.period}
                  </div>

                  {/* Divider */}
                  <div className={`w-full h-px my-6 ${isPopular ? "bg-white/15" : "bg-[#643D70]/10"}`} />

                  {/* Description */}
                  <p
                    className={`mb-6 ${isPopular ? "text-white/65" : "text-[#343434]/55"}`}
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 300, lineHeight: 1.7 }}
                  >
                    {plan.desc}
                  </p>

                  {/* Features */}
                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    {plan.features.map((feat, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        <div
                          className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5 ${
                            isPopular ? "bg-[#D4AF37]" : "bg-[#643D70]/12"
                          }`}
                        >
                          <Check
                            size={9}
                            className={isPopular ? "text-[#343434]" : "text-[#643D70]"}
                            strokeWidth={2.5}
                          />
                        </div>
                        <span
                          className={isPopular ? "text-white/80" : "text-[#343434]/65"}
                          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13.5px", fontWeight: 300, lineHeight: 1.5 }}
                        >
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  {/* CTA */}
<div className="flex flex-col gap-3 mt-auto">
<button
  type="button"
  onClick={() => setSelectedPlan(plan)}
  className={`w-full py-4 flex items-center justify-center gap-2 transition-all duration-300 ${
    isPopular
      ? "bg-[#D4AF37] text-[#343434] hover:bg-white hover:text-[#643D70]"
      : "bg-[#643D70] text-white hover:bg-[#543060]"
  }`}
  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px" }}
>
  {plan.cta}
  <ArrowRight size={14} />
</button>
    <button
    onClick={scrollToContact}
    className={`w-full py-4 border transition-all duration-300 tracking-[0.15em] uppercase ${
      isPopular
        ? "border-white/40 text-white hover:bg-white hover:text-[#643D70]"
        : "border-[#643D70]/40 text-[#643D70] hover:bg-[#643D70] hover:text-white"
    }`}
    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 600 }}
  >
    Request a Custom Quote
  </button>
</div>
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* ── Content Day ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#D4AF37]" />
              <span className="text-[#643D70] tracking-[0.2em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500 }}>
                {tx.contentDayEyebrow}
              </span>
              <div className="w-8 h-px bg-[#D4AF37]" />
            </div>
            <h3 className="text-[#343434]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400 }}>
              {tx.contentDayHeading}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tx.contentDayPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 + i * 0.1 }}
                className="bg-white shadow-lg flex flex-col overflow-hidden"
                style={{ borderRadius: "6px", boxShadow: "0 4px 24px rgba(100,61,112,0.10)" }}
              >
                <div className="bg-[#643D70] px-8 py-6">
                  <div className="text-[#BCA9D0] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500 }}>
                    {plan.location}
                  </div>
                  <div className="text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3vw, 38px)", fontWeight: 400 }}>
                    {plan.price}
                  </div>
                  <div className="text-white/50 mt-1" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 300 }}>
                    {plan.period}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <p className="text-[#343434]/60 mb-6" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 300, lineHeight: 1.75 }}>
                    {plan.desc}
                  </p>
                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    {plan.features.map((feat, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5 bg-[#643D70]/12">
                          <Check size={9} className="text-[#643D70]" strokeWidth={2.5} />
                        </div>
                        <span className="text-[#343434]/65" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13.5px", fontWeight: 300, lineHeight: 1.5 }}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={plan.paymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-[#643D70] text-white flex items-center justify-center gap-2 hover:bg-[#543060] transition-all duration-300"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", borderRadius: "3px" }}
                  >
                    Book Now <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── AI Video Studio ── */}
<motion.div
  initial={{ opacity: 0, y: 24 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.7, delay: 0.35 }}
  className="mt-24 bg-[#1F1426] px-8 py-16"
  style={{ borderRadius: "8px" }}
>
  <div className="text-center mb-12">
    <div className="flex items-center justify-center gap-3 mb-5">
      <div className="w-8 h-px bg-[#D4AF37]" />
      <span
        className="text-[#D4AF37] tracking-[0.2em] uppercase"
        style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500 }}
      >
        AI POWERED CONTENT
      </span>
      <div className="w-8 h-px bg-[#D4AF37]" />
    </div>

    <h3
      className="text-white mb-4"
      style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 4vw, 52px)", fontWeight: 400 }}
    >
      {tx.aiStudioHeading}
    </h3>

    <p
      className="text-white/65 max-w-2xl mx-auto"
      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: 300, lineHeight: 1.8 }}
    >
      {tx.aiStudioSub}
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
    {tx.aiVideos.map((video, i) => (
      <motion.div
        key={video.title}
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 + i * 0.06 }}
        className="bg-white/8 border border-white/10 p-6 flex flex-col"
        style={{ borderRadius: "6px" }}
      >
        <div className="w-8 h-0.5 bg-[#D4AF37] mb-5" />

        <h4
          className="text-white mb-2"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 400 }}
        >
          {video.title}
        </h4>

        <p
          className="text-[#D4AF37] mb-5"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 500 }}
        >
          {video.price}
        </p>

        {"features" in video && video.features && (
          <ul className="flex flex-col gap-2 mt-4">
            {video.features.map((feature: string, fi: number) => (
              <li key={fi} className="flex items-start gap-2 text-white/70">
                <Check size={13} className="text-[#D4AF37] mt-1 flex-shrink-0" />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", lineHeight: 1.5 }}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        )}
        <a
  href={aiPaymentLinks[video.title] || "#contact"}
  target={aiPaymentLinks[video.title] ? "_blank" : "_self"}
  rel="noopener noreferrer"
  className="mt-auto w-full bg-[#D4AF37] text-[#343434] py-3 uppercase tracking-[0.15em] block text-center hover:bg-white transition-all duration-300"
  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 600, borderRadius: "3px" }}
>
  {aiPaymentLinks[video.title] ? "Order Now" : "Request Quote"}
</a>
      </motion.div>
    ))}
  </div>
</motion.div>
        {/* ── Additional Services ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-24"
        >
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#D4AF37]" />
              <span
                className="text-[#643D70] tracking-[0.2em] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500 }}
              >
                {tx.addonsEyebrow}
              </span>
              <div className="w-8 h-px bg-[#D4AF37]" />
            </div>
            <h3
              className="text-[#343434]"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 400, lineHeight: 1.2 }}
            >
              {tx.addonsHeading}
            </h3>
          </div>

          {/* Service cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tx.addons.map((addon, i) => (
              <motion.div
                key={addon.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.45 + i * 0.1 }}
                className="bg-white p-8 flex flex-col group hover:shadow-md transition-shadow duration-300"
                style={{ borderRadius: "4px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
              >
                <div className="w-6 h-0.5 bg-[#D4AF37] mb-5 transition-all duration-300 group-hover:w-10" />
                <div className="text-[#343434] mb-2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 500, lineHeight: 1.3 }}>
                  {addon.title}
                </div>
                <div className="text-[#643D70] mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "18px", fontWeight: 500 }}>
                  {addon.price}
                </div>
                <p className="text-[#343434]/55 mb-6 flex-1" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 300, lineHeight: 1.75 }}>
                  {(addon as any).desc}
                </p>
                <a
                  href={(addon as any).paymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#643D70] text-white text-center uppercase tracking-[0.15em] hover:bg-[#543060] transition-colors duration-300 block"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 600, borderRadius: "3px" }}
                >
                  Buy Now
                </a>
              </motion.div>
            ))}
          </div>

          {/* ── Web & Tech Section ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-16 bg-[#1e1e1e] px-8 py-14"
            style={{ borderRadius: "8px" }}
          >
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#D4AF37]" />
                <span className="text-[#D4AF37] tracking-[0.2em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500 }}>
                  {tx.webTechEyebrow}
                </span>
                <div className="w-8 h-px bg-[#D4AF37]" />
              </div>
              <h3 className="text-white mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 400 }}>
                {tx.webTechHeading}
              </h3>
              <p className="text-white/55 max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 300, lineHeight: 1.8 }}>
                {tx.webTechSub}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {tx.webTechServices.map((svc, i) => {
                const Icon = webTechIcons[(svc as any).icon] || Globe;
                return (
                  <div key={i} className="flex items-center gap-3 bg-white/6 border border-white/10 px-5 py-4" style={{ borderRadius: "4px" }}>
                    <Icon size={16} className="text-[#D4AF37] flex-shrink-0" />
                    <span className="text-white/80" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 300 }}>
                      {svc.title}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="text-center">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#343434] hover:bg-white transition-all duration-300 cursor-pointer border-none group"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: "3px" }}
              >
                {tx.webTechCta}
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Custom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 text-center bg-[#643D70] py-14 px-8"
            style={{ borderRadius: "6px" }}
          >
            <h3
              className="text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 400 }}
            >
              {tx.customHeading}
            </h3>
            <p
              className="text-white/60 max-w-xl mx-auto mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: 300, lineHeight: 1.8 }}
            >
              {tx.customSub}
            </p>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#343434] hover:bg-white transition-all duration-300 cursor-pointer border-none group"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: "3px" }}
            >
              {tx.customCta}
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </motion.div>
      </div>
      {selectedPlan && (
  <div className="fixed inset-0 z-[999] bg-black/60 flex items-center justify-center px-6">
    <div className="bg-white max-w-xl w-full p-8 relative shadow-2xl">
      <button
  type="button"
  onClick={() => setSelectedPlan(null)}
  className="absolute top-4 right-4 text-[#643D70]"
>
  ✕
</button>

      <p className="text-[#643D70] uppercase tracking-[0.2em] text-xs mb-3">
        Start Your Project
      </p>

      <h3 className="text-3xl mb-2 text-[#343434]">
        {selectedPlan.name}
      </h3>
      <p className="text-[#343434]/70 mb-6">
        Tell us a little about your business before completing your purchase.
      </p>

      <div className="grid gap-4">
        <input className="border p-3" placeholder="Full Name" />
        <input className="border p-3" placeholder="Email Address" />
        <input className="border p-3" placeholder="Company Name" />
        <input className="border p-3" placeholder="Business Website (Optional)" />
        <textarea className="border p-3 min-h-[120px]" placeholder="Tell us about your project" />
      </div>
     <a
  href={paymentLinks[selectedPlan?.name as keyof typeof paymentLinks]}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 w-full bg-[#643D70] text-white py-4 uppercase tracking-[0.2em] block text-center"
>
  Continue to Secure Payment
</a>
    </div>
  </div>
)}
    </section>
  );
}
