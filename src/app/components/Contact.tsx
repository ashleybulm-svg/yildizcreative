import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Mail, MessageCircle, Instagram, Send } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLang();
  const tx = t[lang].contact;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", business: "", service: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 bg-[#343434]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#D4AF37]" />
              <span className="text-[#BCA9D0] tracking-[0.2em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500 }}>
                {tx.eyebrow}
              </span>
            </div>
            <h2 className="text-white mb-6" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400, lineHeight: 1.15 }}>
              {tx.heading1}
              <br />
              <em style={{ color: "#D4AF37" }}>{tx.heading2}</em>
            </h2>
            <p className="text-white/55 mb-10 max-w-md" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 300, lineHeight: 1.8 }}>
              {tx.sub}
            </p>

            <div className="flex flex-col gap-5 mb-10">
              <a href="mailto:creativestudio.ym@gmail.com" className="flex items-center gap-4 text-white/60 hover:text-white transition-colors duration-200 group">
                <div className="w-10 h-10 border border-white/15 flex items-center justify-center group-hover:border-[#D4AF37]/50 transition-colors duration-200" style={{ borderRadius: "2px" }}>
                  <Mail size={16} className="text-[#D4AF37]" />
                </div>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 300 }}>creativestudio.ym@gmail.com</span>
              </a>
              <a href="https://wa.me/526642702114" className="flex items-center gap-4 text-white/60 hover:text-white transition-colors duration-200 group">
                <div className="w-10 h-10 border border-white/15 flex items-center justify-center group-hover:border-[#D4AF37]/50 transition-colors duration-200">
  <MessageCircle size={16} className="text-[#D4AF37]" />
</div>

<span
  style={{
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    fontWeight: 300,
  }}
>
  WhatsApp Business
  <br />
  +52 664 270 2114
</span>
              </a>
            </div>

            <div className="flex gap-3">
              {[
  { icon: Instagram, label: "Instagram" },
].map(({ icon: Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-all duration-200" style={{ borderRadius: "2px" }}>
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-white/40" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 300 }}>
                {tx.languages}{" "}
                <span className="text-white/70">English</span>
                {" "}{tx.and}{" "}
                <span className="text-white/70">Español</span>
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-14 h-14 rounded-full bg-[#643D70] flex items-center justify-center mb-6">
                  <Send size={20} className="text-white" />
                </div>
                <h3 className="text-white mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 400 }}>
                  {tx.successTitle}
                </h3>
                <p className="text-white/55 max-w-xs" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: 300, lineHeight: 1.7 }}>
                  {tx.successSub}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-white/50 tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      {tx.nameLabel} *
                    </label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder={tx.namePlaceholder}
                      className="bg-white/5 border border-white/10 text-white placeholder:text-white/25 px-4 py-3 focus:outline-none focus:border-[#643D70]/60 transition-colors duration-200"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 300, borderRadius: "2px" }} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-white/50 tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      {tx.emailLabel} *
                    </label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder={tx.emailPlaceholder}
                      className="bg-white/5 border border-white/10 text-white placeholder:text-white/25 px-4 py-3 focus:outline-none focus:border-[#643D70]/60 transition-colors duration-200"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 300, borderRadius: "2px" }} />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-white/50 tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {tx.businessLabel}
                  </label>
                  <input type="text" name="business" value={form.business} onChange={handleChange} placeholder={tx.businessPlaceholder}
                    className="bg-white/5 border border-white/10 text-white placeholder:text-white/25 px-4 py-3 focus:outline-none focus:border-[#643D70]/60 transition-colors duration-200"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 300, borderRadius: "2px" }} />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-white/50 tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {tx.serviceLabel}
                  </label>
                  <select name="service" value={form.service} onChange={handleChange}
                    className="bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#643D70]/60 transition-colors duration-200 appearance-none cursor-pointer"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 300, borderRadius: "2px" }}>
                    <option value="" className="bg-[#343434]">{tx.servicePlaceholder}</option>
                    {tx.serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#343434]">{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-white/50 tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {tx.messageLabel} *
                  </label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder={tx.messagePlaceholder}
                    className="bg-white/5 border border-white/10 text-white placeholder:text-white/25 px-4 py-3 focus:outline-none focus:border-[#643D70]/60 transition-colors duration-200 resize-none"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 300, borderRadius: "2px" }} />
                </div>

                <button type="submit"
                  className="mt-2 px-8 py-4 bg-[#643D70] text-white hover:bg-[#D4AF37] hover:text-[#343434] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer border-none"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: "2px" }}>
                  {tx.submitBtn}
                  <Send size={14} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
