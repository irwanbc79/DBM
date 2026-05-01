import { useEffect, useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, Flame, Hash } from "lucide-react";
import { blogPosts, getPostBySlug } from "../data/blogPosts";
import { useLang } from "../contexts/LanguageContext";
import { useReveal } from "../hooks/use-reveal";
import ReadingProgress from "../components/blog/ReadingProgress";
import Breadcrumb from "../components/blog/Breadcrumb";
import ShareButtons from "../components/blog/ShareButtons";
import AuthorCard from "../components/blog/AuthorCard";
import TableOfContents, { buildToc } from "../components/blog/TableOfContents";
import AdSlot from "../components/AdSlot";

const fmt = (d, lang) =>
  new Date(d).toLocaleDateString(lang === "id" ? "id-ID" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

// Convert paragraph array -> rendered blocks with h3 sections + plain paras
const renderBody = (paragraphs, toc) => {
  return paragraphs.map((p, i) => {
    const headingItem = toc.find((t) => t.index === i);
    const m = p.match(/^\*\*([^*]+)\*\*\s*(.*)$/s);
    if (m && headingItem) {
      const [, , rest] = m;
      return (
        <section key={i} className="scroll-mt-24" id={headingItem.id}>
          <h3 className="font-serif text-teal-deep text-xl md:text-2xl font-bold mt-10 mb-4 leading-snug">
            {headingItem.text}
          </h3>
          {rest && <p className="mb-6 leading-[1.85]">{renderInlineBold(rest)}</p>}
        </section>
      );
    }
    return (
      <p key={i} className="mb-6 leading-[1.85]">
        {renderInlineBold(p)}
      </p>
    );
  });
};

const renderInlineBold = (text) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="text-teal-deep font-bold">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
};

export default function BlogPost() {
  const { slug } = useParams();
  const { lang, t } = useLang();
  const post = getPostBySlug(slug);
  useReveal();

  useEffect(() => {
    if (post) {
      document.title = `${post.title[lang]} — PT. Dira Baraka Mulia`;
      window.scrollTo(0, 0);
    }
  }, [post, lang]);

  const toc = useMemo(() => (post ? buildToc(post.body[lang]) : []), [post, lang]);

  if (!post) return <Navigate to="/blog" replace />;

  // Related by shared tags
  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({
      post: p,
      score: p.tags.filter((t) => post.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score || new Date(b.post.date) - new Date(a.post.date))
    .slice(0, 3)
    .map((r) => r.post);

  // Split body for mid-article ad
  const mid = Math.floor(post.body[lang].length / 2);

  const canonicalUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      <ReadingProgress />
      <main className="bg-[#fbfbf9]">
        {/* Hero */}
        <section className="relative pt-32 pb-10 bg-gradient-to-b from-teal-pale to-[#fbfbf9]">
          <div className="max-w-3xl mx-auto px-5 lg:px-10">
            <Breadcrumb
              items={[
                { to: "/", label: t.nav.blog === "Blog" ? "Home" : "Beranda" },
                { to: "/blog", label: t.nav.blog },
                {
                  to: `/blog?category=${encodeURIComponent(post.category[lang])}`,
                  label: post.category[lang],
                },
                { label: post.title[lang] },
              ]}
            />
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-teal text-sm font-bold mt-5 mb-6 hover:gap-3 transition-all"
              data-testid="back-to-blog"
            >
              <ArrowLeft className="w-4 h-4" /> {t.blog.backToBlog}
            </Link>
            <div className="inline-block px-3 py-1.5 rounded-full bg-teal-deep text-gold-light text-[11px] font-bold uppercase tracking-[0.14em] mb-5">
              {post.category[lang]}
            </div>
            <h1 className="font-serif text-teal-deep text-[clamp(28px,4.5vw,52px)] leading-[1.1] font-bold tracking-tight">
              {post.title[lang]}
            </h1>
            <div className="flex items-center flex-wrap gap-5 mt-6 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {fmt(post.date, lang)}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4" /> {post.readTime} {t.blog.readingTime}
              </span>
              <span className="inline-flex items-center gap-2">
                <Flame className="w-4 h-4" /> {post.views.toLocaleString()}{" "}
                {t.blog.views}
              </span>
            </div>
          </div>
        </section>

        {/* Cover */}
        <section className="pb-10">
          <div className="max-w-4xl mx-auto px-5 lg:px-10">
            <img
              src={post.cover}
              alt={post.title[lang]}
              className="w-full aspect-[16/9] object-cover rounded-3xl shadow-xl"
            />
          </div>
        </section>

        {/* Body */}
        <article className="pb-12" data-testid="blog-article-body">
          <div className="max-w-3xl mx-auto px-5 lg:px-10">
            {/* TOC */}
            <TableOfContents items={toc} title={t.blog.toc} />

            <div className="prose prose-lg max-w-none text-[#1f2e2c] text-[17px] not-prose">
              {renderBody(post.body[lang].slice(0, mid), toc)}
            </div>

            {/* Mid-article Ad */}
            <AdSlot slot="post-in-article" format="in-article" label="In-Article 280×auto" />

            <div className="prose prose-lg max-w-none text-[#1f2e2c] text-[17px] not-prose">
              {renderBody(post.body[lang].slice(mid), toc)}
            </div>

            {/* Tags */}
            <div className="mt-10 flex flex-wrap items-center gap-2" data-testid="post-tags">
              <span className="text-[11px] uppercase tracking-[0.15em] font-bold text-teal/70 mr-1">
                {t.blog.tagsOnPost}:
              </span>
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  to={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-teal-pale text-teal-deep hover:bg-teal hover:text-white text-xs font-bold transition-colors"
                  data-testid={`post-tag-${tag}`}
                >
                  <Hash className="w-3 h-3" /> {tag}
                </Link>
              ))}
            </div>

            {/* Share */}
            <div className="mt-8 pt-6 border-t border-teal/10">
              <ShareButtons
                title={post.title[lang]}
                url={canonicalUrl}
                labels={{
                  share: t.blog.share.title,
                  whatsapp: t.blog.share.whatsapp,
                  x: t.blog.share.x,
                  linkedin: t.blog.share.linkedin,
                  copy: t.blog.share.copy,
                  copied: t.blog.share.copied,
                }}
              />
            </div>

            {/* Author */}
            <AuthorCard author={post.author} />

            {/* Below article Ad */}
            <AdSlot slot="post-below-article" format="below-article" label="Below Article 250×auto" />
          </div>
        </article>

        {/* Related */}
        <section className="bg-white py-20 border-t border-teal/10">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
            <h3 className="font-serif text-teal-deep text-3xl font-bold mb-10">
              {t.blog.relatedTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="reveal group block bg-white rounded-2xl border border-teal/10 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all"
                >
                  <img
                    src={r.cover}
                    alt={r.title[lang]}
                    className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="p-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-gold-dark">
                      {r.category[lang]}
                    </span>
                    <h4 className="font-serif font-bold text-teal-deep text-base leading-snug mt-2 group-hover:text-teal transition-colors">
                      {r.title[lang]}
                    </h4>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-teal text-xs font-bold group-hover:gap-2 transition-all">
                      {t.blog.readMore} <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
