import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Flame, X } from "lucide-react";
import { Fragment, useEffect, useMemo } from "react";
import { useLang } from "../contexts/LanguageContext";
import { useReveal } from "../hooks/use-reveal";
import BlogSidebar, { filterPosts } from "../components/blog/Sidebar";
import AdSlot from "../components/AdSlot";

const fmt = (d, lang) =>
  new Date(d).toLocaleDateString(lang === "id" ? "id-ID" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function Blog() {
  const { lang, t } = useLang();
  const [params, setParams] = useSearchParams();
  useReveal();

  const paramsKey = params.toString();
  useEffect(() => {
    document.title = `${t.blog.title_em} — PT. Dira Baraka Mulia`;
    window.scrollTo(0, 0);
  }, [t, paramsKey]);

  const filtered = useMemo(() => filterPosts(params, lang), [params, lang]);

  const hasFilters =
    params.get("q") ||
    params.get("category") ||
    params.get("tag") ||
    params.get("archive");

  const clearAll = () => setParams({}, { replace: true });

  // Unfiltered view: show featured + rest. Filtered: show all matches in grid.
  const featured = !hasFilters ? filtered[0] : null;
  const grid = !hasFilters ? filtered.slice(1) : filtered;

  return (
    <main className="bg-[#fbfbf9]">
      {/* Header */}
      <section
        className="relative pt-32 pb-20 hero-gradient grain text-center"
        data-testid="blog-header"
      >
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-[11px] font-bold text-gold-light tracking-[0.18em] uppercase">
              {t.blog.tag}
            </span>
          </div>
          <h1 className="font-serif text-white text-[clamp(40px,6vw,72px)] leading-[1.05] tracking-tight font-bold">
            {t.blog.title_1}{" "}
            <em className="not-italic italic bg-gradient-to-r from-gold-light to-gold bg-clip-text text-transparent">
              {t.blog.title_em}
            </em>
          </h1>
          <p className="mt-6 text-white/70 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            {t.blog.lead}
          </p>
        </div>
      </section>

      {/* Leaderboard Ad */}
      <section className="max-w-[1280px] mx-auto px-5 lg:px-10 -mt-2">
        <AdSlot slot="blog-top-leaderboard" format="leaderboard" label="Top Leaderboard 728×90 / Responsive" />
      </section>

      {/* Featured (only when no filters) */}
      {featured && (
        <section className="relative pb-4">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
            <Link
              to={`/blog/${featured.slug}`}
              className="reveal block group bg-white rounded-3xl shadow-[0_20px_80px_rgba(13,85,70,0.1)] overflow-hidden border border-teal/10"
              data-testid="featured-post"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                  <img
                    src={featured.cover}
                    alt={featured.title[lang]}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-gold text-teal-deep text-[11px] font-bold uppercase tracking-[0.12em]">
                    {featured.category[lang]}
                  </span>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center flex-wrap gap-4 text-xs text-muted-foreground mb-4">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> {fmt(featured.date, lang)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> {featured.readTime}{" "}
                      {t.blog.readingTime}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5" /> {featured.views.toLocaleString()}{" "}
                      {t.blog.views}
                    </span>
                  </div>
                  <h2 className="font-serif font-bold text-teal-deep text-2xl lg:text-4xl leading-tight mb-4 group-hover:text-teal transition-colors">
                    {featured.title[lang]}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featured.excerpt[lang]}
                  </p>
                  <span className="inline-flex items-center gap-2 text-teal font-bold text-sm group-hover:gap-3 transition-all">
                    {t.blog.readMore} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Main: posts grid + sidebar */}
      <section className="py-12">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
          <div>
            {hasFilters && (
              <ActiveFilters
                params={params}
                setParams={setParams}
                total={filtered.length}
                labels={t.blog}
                clearAll={clearAll}
              />
            )}

            {grid.length === 0 ? (
              <div className="bg-white border border-teal/10 rounded-2xl p-12 text-center">
                <p className="text-muted-foreground mb-4">{t.blog.noResults}</p>
                <button
                  onClick={clearAll}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-deep text-gold-light font-bold text-sm"
                >
                  <X className="w-4 h-4" /> {t.blog.clearAll}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {grid.map((p, i) => (
                  <>
                    <BlogCard key={p.slug} post={p} lang={lang} labels={t.blog} />
                    {/* In-feed ad after 2nd card */}
                    {i === 1 && (
                      <div className="md:col-span-2" key="ad-in-feed">
                        <AdSlot slot="blog-in-feed" format="in-feed" label="In-Feed Native" />
                      </div>
                    )}
                  </>
                ))}
              </div>
            )}
          </div>

          <BlogSidebar />
        </div>
      </section>
    </main>
  );
}

const BlogCard = ({ post, lang, labels }) => (
  <Link
    to={`/blog/${post.slug}`}
    className="reveal group block bg-white rounded-2xl border border-teal/10 overflow-hidden hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(13,85,70,0.1)] transition-all duration-500"
    data-testid={`blog-card-${post.slug}`}
  >
    <div className="relative aspect-[16/10] overflow-hidden">
      <img
        src={post.cover}
        alt={post.title[lang]}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/95 text-teal-deep text-[10px] font-bold uppercase tracking-[0.12em]">
        {post.category[lang]}
      </span>
    </div>
    <div className="p-6">
      <div className="flex items-center flex-wrap gap-3 text-[11px] text-muted-foreground mb-3">
        <span>{new Date(post.date).toLocaleDateString(lang === "id" ? "id-ID" : "en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
        <span>•</span>
        <span>{post.readTime} {labels.readingTime}</span>
        <span>•</span>
        <span className="inline-flex items-center gap-1">
          <Flame className="w-3 h-3" /> {post.views.toLocaleString()}
        </span>
      </div>
      <h3 className="font-serif font-bold text-teal-deep text-lg leading-snug mb-3 group-hover:text-teal transition-colors">
        {post.title[lang]}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
        {post.excerpt[lang]}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {post.tags.slice(0, 3).map((tg) => (
          <span key={tg} className="text-[10px] text-teal/80 font-semibold bg-teal-pale px-2 py-0.5 rounded">
            #{tg}
          </span>
        ))}
      </div>
      <span className="mt-5 inline-flex items-center gap-1.5 text-teal text-sm font-bold group-hover:gap-2.5 transition-all">
        {labels.readMore} <ArrowRight className="w-3.5 h-3.5" />
      </span>
    </div>
  </Link>
);

const ActiveFilters = ({ params, setParams, total, labels, clearAll }) => {
  const chips = [];
  if (params.get("q")) chips.push({ key: "q", label: `"${params.get("q")}"` });
  if (params.get("category")) chips.push({ key: "category", label: params.get("category") });
  if (params.get("tag")) chips.push({ key: "tag", label: `#${params.get("tag")}` });
  if (params.get("archive")) chips.push({ key: "archive", label: params.get("archive") });

  const removeChip = (key) => {
    const next = new URLSearchParams(params);
    next.delete(key);
    setParams(next, { replace: true });
  };

  return (
    <div className="mb-6 flex flex-wrap items-center gap-2 p-4 bg-white rounded-xl border border-teal/10">
      <span className="text-xs font-bold text-teal-deep uppercase tracking-wider">
        {labels.filteringBy}:
      </span>
      {chips.map((c) => (
        <button
          key={c.key}
          onClick={() => removeChip(c.key)}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-pale text-teal-deep text-xs font-semibold hover:bg-teal hover:text-white transition-colors"
        >
          {c.label} <X className="w-3 h-3" />
        </button>
      ))}
      <span className="text-xs text-muted-foreground ml-2">
        · {total} {labels.resultsCount}
      </span>
      <button
        onClick={clearAll}
        className="ml-auto text-xs text-teal font-bold hover:underline"
      >
        {labels.clearAll}
      </button>
    </div>
  );
};
