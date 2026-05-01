import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, MessageCircle } from "lucide-react";
import { blogPosts, getPostBySlug } from "../data/blogPosts";
import { useLang } from "../contexts/LanguageContext";
import { useReveal } from "../hooks/use-reveal";

const fmt = (d, lang) =>
  new Date(d).toLocaleDateString(lang === "id" ? "id-ID" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const renderParagraph = (text, key) => {
  // **bold** support
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <p key={key} className="mb-6 leading-[1.85]">
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="text-teal-deep font-bold">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </p>
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

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const shareUrl = encodeURIComponent(
    `Halo, saya baru saja membaca artikel "${post.title[lang]}" di website PT. Dira Baraka Mulia.`
  );

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-12 bg-gradient-to-b from-teal-pale to-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-teal text-sm font-bold mb-6 hover:gap-3 transition-all" data-testid="back-to-blog">
            <ArrowLeft className="w-4 h-4" /> {t.blog.backToBlog}
          </Link>
          <div className="inline-block px-3 py-1.5 rounded-full bg-teal-deep text-gold-light text-[11px] font-bold uppercase tracking-[0.14em] mb-5">
            {post.category[lang]}
          </div>
          <h1 className="font-serif text-teal-deep text-[clamp(28px,4.5vw,52px)] leading-[1.1] font-bold tracking-tight">
            {post.title[lang]}
          </h1>
          <div className="flex items-center gap-5 mt-6 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><Calendar className="w-4 h-4" /> {fmt(post.date, lang)}</span>
            <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime} {t.blog.readingTime}</span>
          </div>
        </div>
      </section>

      {/* Cover */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <img src={post.cover} alt={post.title[lang]} className="w-full aspect-[16/9] object-cover rounded-3xl shadow-xl" />
        </div>
      </section>

      {/* Body */}
      <article className="pb-16" data-testid="blog-article-body">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <div className="prose prose-lg max-w-none text-[#1f2e2c] text-[17px]">
            {post.body[lang].map((p, i) => renderParagraph(p, i))}
          </div>

          <div className="mt-12 pt-10 border-t border-teal/10 flex items-center justify-between flex-wrap gap-4">
            <a
              href={`https://wa.me/?text=${shareUrl}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25d366] text-white font-bold text-sm hover:-translate-y-0.5 transition-transform"
              data-testid="share-wa-btn"
            >
              <MessageCircle className="w-4 h-4" />
              {t.blog.shareOnWa}
            </a>
            <Link to="/blog" className="text-teal font-bold text-sm hover:gap-3 inline-flex items-center gap-2 transition-all">
              {t.blog.backToBlog} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="bg-[#f4f7f6] py-20">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
          <h3 className="font-serif text-teal-deep text-3xl font-bold mb-10">{t.blog.relatedTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/blog/${r.slug}`}
                className="reveal group block bg-white rounded-2xl border border-teal/10 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <img src={r.cover} alt={r.title[lang]} className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-gold-dark">{r.category[lang]}</span>
                  <h4 className="font-serif font-bold text-teal-deep text-base leading-snug mt-2 group-hover:text-teal transition-colors">
                    {r.title[lang]}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
