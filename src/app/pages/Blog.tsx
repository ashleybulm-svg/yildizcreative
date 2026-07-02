import { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { LanguageProvider } from "../context/LanguageContext";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export interface PostMeta {
  title: string;
  description: string;
  date: string;
  slug: string;
  category: string;
  image?: string;
  featuredImage?: string;
  readingTime?: string;
}

// Load all MDX files at build time
const allPostModules = import.meta.glob("/content/blog/*.mdx", {
  eager: true,
}) as Record<string, { default: unknown; frontmatter: PostMeta }>;

export const allPosts: PostMeta[] = Object.entries(allPostModules)
  .map(([filePath, mod]) => ({
    slug: filePath.split("/").pop()?.replace(".mdx", "") ?? "",
    ...mod.frontmatter,
  }))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function PostCard({ post, index, inView }: { post: PostMeta; index: number; inView: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      className="bg-white group hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
      style={{ borderRadius: "4px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
    >
      {/* Featured image */}
      <a href={`/blog/${post.slug}`} className="block overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <img
          src={post.featuredImage ?? post.image ?? "/media1.jpeg"}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </a>

      <div className="p-7 flex flex-col flex-1">
        {/* Category + date */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className="px-2.5 py-1 bg-[#643D70]/10 text-[#643D70]"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: "2px" }}
          >
            {post.category}
          </span>
          <div className="flex items-center gap-1.5 text-[#343434]/45">
            <Calendar size={12} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 300 }}>
              {formatDate(post.date)}
            </span>
          </div>
          {post.readingTime && (
            <div className="flex items-center gap-1.5 text-[#343434]/45">
              <Clock size={12} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 300 }}>
                {post.readingTime}
              </span>
            </div>
          )}
        </div>

        {/* Title */}
        <a href={`/blog/${post.slug}`}>
          <h2
            className="text-[#343434] mb-3 group-hover:text-[#643D70] transition-colors duration-200"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 500, lineHeight: 1.3 }}
          >
            {post.title}
          </h2>
        </a>

        {/* Description */}
        <p
          className="text-[#343434]/55 mb-6 flex-1"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 300, lineHeight: 1.75 }}
        >
          {post.description}
        </p>

        {/* Read more */}
        <a
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-[#643D70] hover:text-[#543060] transition-colors duration-200 group/link"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.04em" }}
        >
          Read Article
          <ArrowRight size={14} className="transition-transform duration-200 group-hover/link:translate-x-1" />
        </a>
      </div>
    </motion.article>
  );
}

function BlogContent() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  useEffect(() => {
    const prevTitle = document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute("content") ?? "";

    document.title = "Blog | Yildiz Creative Studio";
    metaDesc?.setAttribute(
      "content",
      "Insights on AI video, branding, web development, and digital marketing for growing businesses."
    );

    return () => {
      document.title = prevTitle;
      metaDesc?.setAttribute("content", prevDesc);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#E8E6E1] overflow-x-hidden">
      <Navigation />

      {/* ── HERO ── */}
      <section className="pt-40 pb-16 bg-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#D4AF37]" />
              <span
                className="text-[#643D70] tracking-[0.25em] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500 }}
              >
                BLOG
              </span>
            </div>
            <h1
              className="text-[#343434] mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Insights &{" "}
              <em style={{ fontStyle: "italic", color: "#643D70" }}>Ideas</em>
            </h1>
            <p
              className="text-[#343434]/60 max-w-xl"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "17px", fontWeight: 300, lineHeight: 1.8 }}
            >
              Practical thinking on AI video, branding, web development, and growing your business online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── POSTS GRID ── */}
      <section className="pb-28 bg-[#E8E6E1]" ref={gridRef}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {allPosts.length === 0 ? (
            <p className="text-[#343434]/50 text-center py-20" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px" }}>
              No posts yet — check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {allPosts.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} inView={gridInView} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function Blog() {
  return (
    <LanguageProvider>
      <BlogContent />
    </LanguageProvider>
  );
}
