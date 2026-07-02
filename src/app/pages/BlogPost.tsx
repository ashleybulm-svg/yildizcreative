import { useEffect } from "react";
import { useParams } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import { LanguageProvider } from "../context/LanguageContext";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";
import type { PostMeta } from "./Blog";

const allPostModules = import.meta.glob("/content/blog/*.mdx", {
  eager: true,
}) as Record<string, { default: React.ComponentType<{ components?: Record<string, React.ComponentType> }>; frontmatter: PostMeta }>;

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// MDX prose component overrides — apply design-system styles to rendered markdown
const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      {...props}
      style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(22px, 2.5vw, 30px)",
        fontWeight: 400,
        color: "#343434",
        lineHeight: 1.2,
        marginTop: "2.5rem",
        marginBottom: "1rem",
        letterSpacing: "-0.01em",
      }}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      {...props}
      style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "20px",
        fontWeight: 500,
        color: "#343434",
        marginTop: "2rem",
        marginBottom: "0.75rem",
      }}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      {...props}
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "16px",
        fontWeight: 300,
        color: "rgba(52,52,52,0.75)",
        lineHeight: 1.85,
        marginBottom: "1.4rem",
      }}
    />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong {...props} style={{ fontWeight: 500, color: "#343434" }} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      {...props}
      style={{
        paddingLeft: "1.4rem",
        marginBottom: "1.4rem",
        listStyleType: "disc",
      }}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      {...props}
      style={{
        paddingLeft: "1.4rem",
        marginBottom: "1.4rem",
        listStyleType: "decimal",
      }}
    />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li
      {...props}
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "16px",
        fontWeight: 300,
        color: "rgba(52,52,52,0.75)",
        lineHeight: 1.75,
        marginBottom: "0.4rem",
      }}
    />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a {...props} style={{ color: "#643D70", textDecoration: "underline", textDecorationThickness: "1px", textUnderlineOffset: "3px" }} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      {...props}
      style={{
        borderLeft: "3px solid #D4AF37",
        paddingLeft: "1.25rem",
        marginLeft: 0,
        marginBottom: "1.4rem",
        fontStyle: "italic",
        color: "rgba(52,52,52,0.6)",
      }}
    />
  ),
  hr: () => <hr style={{ borderColor: "rgba(100,61,112,0.12)", marginTop: "2rem", marginBottom: "2rem" }} />,
};

const ctaByCategory: Record<string, string> = {
  "AI Video": "AI Video Production",
  "Branding": "Branding",
  "Web Development": "Web Development",
  "Digital Invitations": "Digital Invitations",
  "Social Media": "Social Media Management",
};

function BlogPostContent() {
  const { slug } = useParams<{ slug: string }>();
  const filePath = `/content/blog/${slug}.mdx`;
  const mod = allPostModules[filePath];

  useEffect(() => {
    const prevTitle = document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute("content") ?? "";

    if (mod?.frontmatter) {
      document.title = `${mod.frontmatter.title} | Yildiz Creative Studio`;
      metaDesc?.setAttribute("content", mod.frontmatter.description);
    }

    return () => {
      document.title = prevTitle;
      metaDesc?.setAttribute("content", prevDesc);
    };
  }, [slug, mod]);

  if (!mod) {
    return (
      <div className="min-h-screen bg-[#E8E6E1] overflow-x-hidden">
        <Navigation />
        <div className="max-w-3xl mx-auto px-6 py-48 text-center">
          <p className="text-[#343434]/50" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px" }}>
            Post not found.
          </p>
          <a href="/blog" className="text-[#643D70] underline mt-4 block" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Back to Blog
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  const { frontmatter, default: PostContent } = mod;
  const ctaService = ctaByCategory[frontmatter.category] ?? "our services";
  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-[#E8E6E1] overflow-x-hidden">
      <Navigation />

      {/* ── ARTICLE HEADER ── */}
      <header className="pt-36 pb-0 bg-[#E8E6E1]">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          {/* Back link */}
          <motion.a
            href="/blog"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-[#343434]/45 hover:text-[#643D70] transition-colors duration-200 mb-8"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 400 }}
          >
            <ArrowLeft size={14} />
            Back to Blog
          </motion.a>

          {/* Category + meta */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <span
              className="px-2.5 py-1 bg-[#643D70]/10 text-[#643D70]"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", borderRadius: "2px" }}
            >
              {frontmatter.category}
            </span>
            <div className="flex items-center gap-1.5 text-[#343434]/45">
              <Calendar size={12} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 300 }}>
                {formatDate(frontmatter.date)}
              </span>
            </div>
            {frontmatter.readingTime && (
              <div className="flex items-center gap-1.5 text-[#343434]/45">
                <Clock size={12} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 300 }}>
                  {frontmatter.readingTime}
                </span>
              </div>
            )}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[#343434] mb-8"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 400,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
            }}
          >
            {frontmatter.title}
          </motion.h1>
        </div>

        {/* Featured image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-5xl mx-auto px-6 md:px-10 mb-0"
        >
          <div className="overflow-hidden" style={{ borderRadius: "4px", aspectRatio: "16/7" }}>
            <img
              src={frontmatter.image}
              alt={frontmatter.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </header>

      {/* ── ARTICLE BODY ── */}
      <article className="py-16 bg-[#E8E6E1]">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <PostContent components={mdxComponents} />
          </motion.div>
        </div>
      </article>

      {/* ── IN-ARTICLE CTA ── */}
      <section className="pb-8 bg-[#E8E6E1]">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div
            className="bg-[#1F1426] px-8 py-10 text-center"
            style={{ borderRadius: "6px" }}
          >
            <p
              className="text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 400 }}
            >
              Need help with {ctaService}? Let's talk.
            </p>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#D4AF37] text-[#1F1426] hover:bg-white transition-all duration-300 cursor-pointer border-none group"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: "2px" }}
            >
              Get a Custom Quote
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-4">
        <div className="h-px bg-[#643D70]/10" />
      </div>

      <Contact />
      <Footer />
    </div>
  );
}

export default function BlogPost() {
  return (
    <LanguageProvider>
      <BlogPostContent />
    </LanguageProvider>
  );
}
