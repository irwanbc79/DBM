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
    if (!post) return;
    const title = `${post.title[lang]} — PT. Dira Baraka Mulia`;
    document.title = title;
    window.scrollTo(0, 0);

    // Dynamic OG / Twitter meta per artikel
    const canonical = `https://dira.co.id/blog/${post.slug}`;
    const setMeta = (sel, attr, val) => {
      let el = document.querySelector(sel);
      if (!el) { el = document.createElement("meta"); document.head.appendChild(el); }
      el.setAttribute(attr, val);
    };
    setMeta('meta[name="description"]', "content", post.excerpt[lang]);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", post.excerpt[lang]);
    setMeta('meta[property="og:image"]', "content", post.cover);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[property="og:type"]', "content", "article");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", post.excerpt[lang]);
    setMeta('meta[name="twitter:image"]', "content", post.cover);

    // Canonical link
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = canonical;

    // JSON-LD Article structured data
    const existing = document.getElementById("jsonld-article");
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.id = "jsonld-article";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title[lang],
      description: post.excerpt[lang],
      image: post.cover,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        "@type": "Organization",
        name: post.author.name[lang],
        url: "https://dira.co.id",
      },
      publisher: {
        "@type": "Organization",
        name: "PT. Dira Baraka Mulia",
        logo: { "@type": "ImageObject", url: "https://dira.co.id/logo.jpg" },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
      keywords: post.tags.join(", "),
    });
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById("jsonld-article");
      if (s) s.remove();
    };
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

  const canonicalUrl = `https://dira.co.id/blog/${post.slug}`;

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

        {/* Leaderboard Ad bawah hero */}
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10 pt-4">
          <AdSlot slot="post-top-leaderboard" format="leaderboard" label="Post Leaderboard 728×90" desktopOnly />
        </div>

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
            <AdSlot slot="post-below-article" format="below-article" label="Below Article 728×90" />

            {/* Mobile-only banner */}
            <AdSlot slot="post-mobile-banner" format="mobile-banner" label="Mobile Banner 320×100" mobileOnly />

            {/* Comments Section */}
            <CommentsSection lang={lang} labels={t.blog} post={post} />
          </div>
        </article>

        {/* Related */}
        <section className="bg-white py-20 border-t border-teal/10">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
            <h3 className="font-serif text-teal-deep text-3xl font-bold mb-10">
              {t.blog.relatedTitle}
            </h3>
            <AdSlot slot="post-related-feed" format="related-feed" label="Related Posts In-Feed" className="mb-8" />
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

const CommentsSection = ({ lang, labels, post }) => {
  const waText = encodeURIComponent(
    lang === "id"
      ? `Halo, saya ingin berkomentar tentang artikel "${post.title[lang]}" di dira.co.id/blog/${post.slug}`
      : `Hello, I'd like to comment on your article "${post.title[lang]}" at dira.co.id/blog/${post.slug}`
  );

  return (
    <div className="mt-14 pt-10 border-t border-teal/10" data-testid="comments-section">
      <h3 className="font-serif text-teal-deep text-2xl font-bold mb-2">
        {labels.commentsTitle || (lang === "id" ? "Diskusi & Komentar" : "Discussion & Comments")}
      </h3>
      <p className="text-sm text-muted-foreground mb-8">
        {lang === "id"
          ? "Punya pertanyaan atau ingin berdiskusi tentang artikel ini? Hubungi tim kami langsung."
          : "Have a question or want to discuss this article? Reach our team directly."}
      </p>

      <div className="bg-gradient-to-br from-teal-pale/60 to-white border border-teal/15 rounded-3xl p-8 text-center">
        <div className="w-14 h-14 rounded-2xl bg-teal-deep/10 flex items-center justify-center mx-auto mb-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-7 h-7 text-teal-deep">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>
        <h4 className="font-serif text-teal-deep text-lg font-bold mb-2">
          {lang === "id" ? "Kirim Komentar via WhatsApp" : "Send Comment via WhatsApp"}
        </h4>
        <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6 leading-relaxed">
          {lang === "id"
            ? "Kami membaca dan merespons setiap pesan. Tim redaksi kami siap menjawab pertanyaan spesifik tentang artikel ini."
            : "We read and respond to every message. Our editorial team is ready to answer specific questions about this article."}
        </p>
        <a
          href={`https://wa.me/6281264882678?text=${waText}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#25d366] hover:bg-[#1ebe5d] text-white font-bold text-sm transition-colors shadow-lg shadow-green-500/20"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.1.547 4.07 1.502 5.785L0 24l6.383-1.476A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.79 9.79 0 0 1-5.002-1.373l-.358-.214-3.79.876.907-3.688-.234-.38A9.79 9.79 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
          </svg>
          {lang === "id" ? "Kirim via WhatsApp" : "Send via WhatsApp"}
        </a>
      </div>
    </div>
  );
};
