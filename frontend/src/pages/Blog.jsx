import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { blogPosts } from "../data/blogPosts";
import { useLang } from "../contexts/LanguageContext";
import { useReveal } from "../hooks/use-reveal";

const fmt = (d, lang) =>
  new Date(d).toLocaleDateString(lang === "id" ? "id-ID" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function Blog() {
  const { lang, t } = useLang();
  useReveal();

  useEffect(() => {
    document.title = `${t.blog.title_em} — PT. Dira Baraka Mulia`;
    window.scrollTo(0, 0);
  }, [t]);

  const [featured, ...rest] = blogPosts;

  return (
    <main className="bg-white">
      {/* Header */}
      <section className="relative pt-32 pb-20 hero-gradient grain text-center" data-testid="blog-header">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-[11px] font-bold text-gold-light tracking-[0.18em] uppercase">{t.blog.tag}</span>
          </div>
          <h1 className="font-serif text-white text-[clamp(40px,6vw,72px)] leading-[1.05] tracking-tight font-bold">
            {t.blog.title_1}{" "}
            <em className="not-italic italic bg-gradient-to-r from-gold-light to-gold bg-clip-text text-transparent">
              {t.blog.title_em}
            </em>
          </h1>
          <p className="mt-6 text-white/70 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">{t.blog.lead}</p>
        </div>
      </section>

      {/* Featured */}
      <section className="-mt-16 relative pb-12">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
          <Link
            to={`/blog/${featured.slug}`}
            className="reveal block group bg-white rounded-3xl shadow-[0_20px_80px_rgba(13,85,70,0.12)] overflow-hidden border border-teal/10"
            data-testid="featured-post"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img src={featured.cover} alt={featured.title[lang]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-gold text-teal-deep text-[11px] font-bold uppercase tracking-[0.12em]">
                  {featured.category[lang]}
                </span>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {fmt(featured.date, lang)}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {featured.readTime} {t.blog.readingTime}</span>
                </div>
                <h2 className="font-serif font-bold text-teal-deep text-2xl lg:text-4xl leading-tight mb-4 group-hover:text-teal transition-colors">
                  {featured.title[lang]}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{featured.excerpt[lang]}</p>
                <span className="inline-flex items-center gap-2 text-teal font-bold text-sm group-hover:gap-3 transition-all">
                  {t.blog.readMore} <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="reveal group block bg-white rounded-2xl border border-teal/10 overflow-hidden hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(13,85,70,0.1)] transition-all duration-500"
                data-testid={`blog-card-${p.slug}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.cover} alt={p.title[lang]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/95 text-teal-deep text-[10px] font-bold uppercase tracking-[0.12em]">
                    {p.category[lang]}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] text-muted-foreground mb-3">
                    <span>{fmt(p.date, lang)}</span>
                    <span>•</span>
                    <span>{p.readTime} {t.blog.readingTime}</span>
                  </div>
                  <h3 className="font-serif font-bold text-teal-deep text-lg leading-snug mb-3 group-hover:text-teal transition-colors">
                    {p.title[lang]}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{p.excerpt[lang]}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-teal text-sm font-bold group-hover:gap-2.5 transition-all">
                    {t.blog.readMore} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
