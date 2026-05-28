import { Link, useSearchParams } from "react-router-dom";
import {
  ArrowRight, Calendar, Clock, ChevronLeft, ChevronRight,
  Flame, X, FileCheck2, Package, Globe, ShieldCheck, Lightbulb,
  BookOpen, Search,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useLang } from "../contexts/LanguageContext";
import { useReveal } from "../hooks/use-reveal";
import BlogSidebar, { filterPosts } from "../components/blog/Sidebar";
import AdSlot from "../components/AdSlot";
import { blogPosts } from "../data/blogPosts";

const PAGE_SIZE = 6;

// label[lang] must exactly match p.category[lang]
const PILLARS = [
  {
    label: { id: "Undername & PPJK", en: "Undername & PPJK" },
    icon: FileCheck2,
    navActive: "bg-teal-deep text-gold-light ring-2 ring-teal/20 shadow",
    navIdle: "bg-gold/10 text-gold-dark hover:bg-gold/20",
    badge: "bg-gold/15 text-gold-dark",
  },
  {
    label: { id: "Komoditas Ekspor", en: "Export Commodities" },
    icon: Package,
    navActive: "bg-teal-deep text-gold-light ring-2 ring-teal/20 shadow",
    navIdle: "bg-teal-pale text-teal hover:bg-teal/15",
    badge: "bg-teal-pale text-teal",
  },
  {
    label: { id: "Perdagangan Int'l", en: "Int'l Trade" },
    icon: Globe,
    navActive: "bg-teal-deep text-gold-light ring-2 ring-teal/20 shadow",
    navIdle: "bg-teal/10 text-teal-deep hover:bg-teal/20",
    badge: "bg-teal/10 text-teal-deep",
  },
  {
    label: { id: "Regulasi Impor", en: "Import Regulations" },
    icon: ShieldCheck,
    navActive: "bg-teal-deep text-gold-light ring-2 ring-teal/20 shadow",
    navIdle: "bg-teal-deep/10 text-teal-deep hover:bg-teal-deep/20",
    badge: "bg-teal-deep/10 text-teal-deep",
  },
  {
    label: { id: "Tips Bisnis", en: "Trading Tips" },
    icon: Lightbulb,
    navActive: "bg-teal-deep text-gold-light ring-2 ring-teal/20 shadow",
    navIdle: "bg-gold/10 text-gold-dark hover:bg-gold/15",
    badge: "bg-gold/10 text-gold-dark",
  },
];

const PILLAR_MAP = {};
PILLARS.forEach((p) => {
  PILLAR_MAP[p.label.id] = p;
  PILLAR_MAP[p.label.en] = p;
});

const fmt = (d, lang) =>
  new Date(d).toLocaleDateString(lang === "id" ? "id-ID" : "en-US", {
    year: "numeric", month: "short", day: "numeric",
  });

export default function Blog() {
  const { lang, t } = useLang();
  const [params, setParams] = useSearchParams();
  const [page, setPage] = useState(1);
  useReveal();

  const paramsKey = params.toString();
  useEffect(() => {
    document.title = `${t.blog.title_em} — PT. Dira Baraka Mulia`;
    window.scrollTo(0, 0);
    const existing = document.getElementById("jsonld-blog");
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.id = "jsonld-blog";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Trade Insights — PT. Dira Baraka Mulia",
      description: t.blog.lead,
      url: "https://dira.co.id/blog",
      publisher: {
        "@type": "Organization",
        name: "PT. Dira Baraka Mulia",
        logo: { "@type": "ImageObject", url: "https://dira.co.id/logo.jpg" },
      },
    });
    document.head.appendChild(script);
    return () => { const s = document.getElementById("jsonld-blog"); if (s) s.remove(); };
  }, [t, paramsKey]);

  useEffect(() => { setPage(1); }, [paramsKey]);

  const filtered = useMemo(() => filterPosts(params, lang), [params, lang]);
  const hasFilters = params.get("q") || params.get("category") || params.get("tag") || params.get("archive");
  const clearAll = () => setParams({}, { replace: true });

  const featured = !hasFilters ? filtered[0] : null;
  const allGrid = !hasFilters ? filtered.slice(1) : filtered;
  const totalPages = Math.ceil(allGrid.length / PAGE_SIZE);
  const grid = allGrid.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const goToPage = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const activePillar = params.get("category");
  const setPillar = (key) => {
    const next = new URLSearchParams();
    if (activePillar !== key) next.set("category", key);
    setParams(next, { replace: true });
  };

  return (
    <main className="bg-[#fbfbf9]">

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-16 hero-gradient grain text-center" data-testid="blog-header">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <BookOpen className="w-3.5 h-3.5 text-gold-light" />
            <span className="text-[11px] font-bold text-gold-light tracking-[0.18em] uppercase">
              {t.blog.tag}
            </span>
          </div>
          <h1 className="font-serif text-white text-[clamp(36px,5.5vw,64px)] leading-[1.08] tracking-tight font-bold">
            {t.blog.title_1}{" "}
            <em className="not-italic italic bg-gradient-to-r from-gold-light to-gold bg-clip-text text-transparent">
              {t.blog.title_em}
            </em>
          </h1>
          <p className="mt-5 text-white/65 text-base leading-relaxed max-w-2xl mx-auto">
            {t.blog.lead}
          </p>
          {/* Hero stats */}
          <div className="mt-8 inline-flex items-center gap-0 divide-x divide-white/15 bg-white/8 backdrop-blur-sm rounded-2xl overflow-hidden">
            {[
              { val: blogPosts.length, label: lang === "id" ? "Artikel" : "Articles" },
              { val: 5, label: lang === "id" ? "Topik" : "Topics" },
              { val: 2, label: lang === "id" ? "Bahasa" : "Languages" },
            ].map(({ val, label }) => (
              <div key={label} className="px-7 py-4 text-center">
                <div className="text-2xl font-bold font-serif text-gold-light">{val}</div>
                <div className="text-[10px] text-white/55 uppercase tracking-wider mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sticky Pillar Nav ── */}
      <div className="sticky top-16 z-30 bg-white/96 backdrop-blur-md border-b border-teal/8 shadow-[0_2px_12px_rgba(13,85,70,0.06)]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
          <div className="flex items-center gap-2 py-2.5 overflow-x-auto scrollbar-none">
            <span className="flex-shrink-0 text-[10px] font-bold text-muted-foreground uppercase tracking-wider pr-3 border-r border-teal/10 mr-1 hidden sm:block">
              {lang === "id" ? "Topik" : "Topics"}
            </span>
            {PILLARS.map((p) => {
              const key = p.label[lang];
              const count = blogPosts.filter((b) => b.category[lang] === key).length;
              const active = activePillar === key;
              const Icon = p.icon;
              return (
                <button
                  key={key}
                  onClick={() => setPillar(key)}
                  className={`flex-shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12px] font-bold transition-all whitespace-nowrap ${active ? p.navActive : p.navIdle}`}
                >
                  <Icon className="w-3 h-3" />
                  {key}
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold ${active ? "bg-white/20 text-white" : "bg-black/[0.07]"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
            {activePillar && (
              <button
                onClick={clearAll}
                className="flex-shrink-0 ml-auto inline-flex items-center gap-1 text-[11px] text-teal font-bold hover:text-teal-deep transition-colors pl-2"
              >
                <X className="w-3 h-3" /> {lang === "id" ? "Reset" : "Clear"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Leaderboard Ad ── */}
      <section className="max-w-[1280px] mx-auto px-5 lg:px-10 mt-5">
        <AdSlot slot="blog-top-leaderboard" format="leaderboard" label="Top Leaderboard 728×90 / Responsive" />
      </section>

      {/* ── Featured (no-filter only) ── */}
      {featured && (
        <section className="pt-6 pb-2">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
            <FeaturedCard post={featured} lang={lang} labels={t.blog} />
          </div>
        </section>
      )}

      {/* ── Grid + Sidebar ── */}
      <section className="py-10">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-[1fr_316px] gap-10">
          <div>
            {hasFilters && (
              <ActiveFilters params={params} setParams={setParams} total={filtered.length} labels={t.blog} clearAll={clearAll} />
            )}
            {grid.length === 0 ? (
              <EmptyState clearAll={clearAll} lang={lang} labels={t.blog} />
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {grid.map((p, i) => (
                    <div key={p.slug} className="contents">
                      <BlogCard post={p} lang={lang} labels={t.blog} />
                      {i === 3 && (
                        <div className="sm:col-span-2 xl:col-span-3">
                          <AdSlot slot="blog-in-feed" format="in-feed" label="In-Feed Native" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                {totalPages > 1 && (
                  <Pagination page={page} totalPages={totalPages} total={allGrid.length} onGo={goToPage} labels={t.blog} lang={lang} />
                )}
              </>
            )}
          </div>
          <BlogSidebar />
        </div>
      </section>
    </main>
  );
}

/* ─── Featured Card ─────────────────────────────────── */
const FeaturedCard = ({ post, lang, labels }) => (
  <Link
    to={`/blog/${post.slug}`}
    className="reveal group block bg-white rounded-3xl shadow-[0_4px_40px_rgba(13,85,70,0.08)] overflow-hidden border border-teal/8 hover:shadow-[0_8px_64px_rgba(13,85,70,0.14)] transition-all duration-500"
    data-testid="featured-post"
  >
    <div className="grid grid-cols-1 lg:grid-cols-[55%_45%]">
      {/* Image side */}
      <div className="relative min-h-[260px] lg:min-h-[380px] overflow-hidden bg-teal-pale">
        <img
          src={post.cover}
          alt={post.title[lang]}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        <span className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-gold text-teal-deep text-[10px] font-bold uppercase tracking-[0.14em] shadow-sm">
          {post.category[lang]}
        </span>
        <span className="absolute top-5 right-5 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-[10px] font-semibold">
          <Clock className="w-3 h-3" /> {post.readTime} min
        </span>
        <div className="absolute bottom-5 left-5 inline-flex items-center gap-1.5 text-white/90 text-[10px] font-semibold">
          <Flame className="w-3.5 h-3.5 text-gold-light" /> {post.views.toLocaleString()} {labels.views}
        </div>
      </div>
      {/* Content side */}
      <div className="p-8 lg:p-10 flex flex-col justify-center">
        <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-teal uppercase tracking-[0.15em] mb-5">
          <span className="w-5 h-px bg-gold" />
          {lang === "id" ? "Artikel Pilihan" : "Featured Article"}
        </div>
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {new Date(post.date).toLocaleDateString(lang === "id" ? "id-ID" : "en-US", { year: "numeric", month: "long", day: "numeric" })}
          </span>
        </div>
        <h2 className="font-serif font-bold text-teal-deep text-2xl lg:text-[1.8rem] leading-[1.2] mb-4 group-hover:text-teal transition-colors">
          {post.title[lang]}
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
          {post.excerpt[lang]}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-6">
          {post.tags.slice(0, 3).map((tg) => (
            <span key={tg} className="text-[10px] text-teal/80 bg-teal-pale px-2.5 py-1 rounded-full font-semibold">
              #{tg}
            </span>
          ))}
        </div>
        <span className="inline-flex items-center gap-2 text-teal font-bold text-sm group-hover:gap-3 transition-all">
          {labels.readMore} <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </div>
  </Link>
);

/* ─── Blog Card ─────────────────────────────────────── */
const BlogCard = ({ post, lang, labels }) => {
  const pillar = PILLAR_MAP[post.category[lang]];
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="reveal group flex flex-col bg-white rounded-2xl border border-teal/8 overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_20px_56px_rgba(13,85,70,0.12)] transition-all duration-500"
      data-testid={`blog-card-${post.slug}`}
    >
      {/* Cover */}
      <div className="relative aspect-[16/10] overflow-hidden flex-shrink-0 bg-teal-pale">
        <img
          src={post.cover}
          alt={post.title[lang]}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
        {/* Category badge — bottom left */}
        <span className={`absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.1em] backdrop-blur-sm bg-white/88 ${pillar ? pillar.badge.split(" ")[1] : "text-teal-deep"}`}>
          {post.category[lang]}
        </span>
        {/* Read time — top right */}
        <span className="absolute top-3 right-3 inline-flex items-center gap-0.5 px-2 py-1 rounded-full bg-black/45 backdrop-blur-sm text-white text-[9px] font-semibold">
          <Clock className="w-2.5 h-2.5" /> {post.readTime}m
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-[11px] text-muted-foreground mb-2.5">
          <span>{fmt(post.date, lang)}</span>
          <span className="w-0.5 h-0.5 rounded-full bg-current opacity-40" />
          <span className="inline-flex items-center gap-0.5">
            <Flame className="w-3 h-3 text-gold/70" /> {post.views.toLocaleString()}
          </span>
        </div>
        <h3 className="font-serif font-bold text-teal-deep text-[1rem] leading-snug mb-2.5 group-hover:text-teal transition-colors line-clamp-2 flex-1">
          {post.title[lang]}
        </h3>
        <p className="text-[12.5px] text-muted-foreground leading-relaxed line-clamp-2 mb-4">
          {post.excerpt[lang]}
        </p>
        <div className="mt-auto flex items-center justify-between pt-3 border-t border-teal/6">
          <div className="flex gap-1 flex-wrap">
            {post.tags.slice(0, 2).map((tg) => (
              <span key={tg} className="text-[9.5px] text-teal/70 bg-teal-pale px-2 py-0.5 rounded font-semibold">
                #{tg}
              </span>
            ))}
          </div>
          <span className="flex-shrink-0 inline-flex items-center gap-1 text-teal text-xs font-bold group-hover:gap-2 transition-all">
            {labels.readMore} <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  );
};

/* ─── Empty State ────────────────────────────────────── */
const EmptyState = ({ clearAll, lang, labels }) => (
  <div className="bg-white border border-teal/10 rounded-2xl p-14 text-center">
    <div className="w-14 h-14 rounded-2xl bg-teal-pale flex items-center justify-center mx-auto mb-4">
      <Search className="w-6 h-6 text-teal" />
    </div>
    <p className="font-semibold text-teal-deep mb-1">
      {lang === "id" ? "Tidak ada artikel ditemukan" : "No articles found"}
    </p>
    <p className="text-sm text-muted-foreground mb-5">{labels.noResults}</p>
    <button
      onClick={clearAll}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-deep text-gold-light font-bold text-sm hover:bg-teal-dark transition-colors"
    >
      <X className="w-4 h-4" /> {labels.clearAll}
    </button>
  </div>
);

/* ─── Active Filters Bar ─────────────────────────────── */
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
      <span className="text-xs font-bold text-teal-deep uppercase tracking-wider">{labels.filteringBy}:</span>
      {chips.map((c) => (
        <button
          key={c.key}
          onClick={() => removeChip(c.key)}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-pale text-teal-deep text-xs font-semibold hover:bg-teal hover:text-white transition-colors"
        >
          {c.label} <X className="w-3 h-3" />
        </button>
      ))}
      <span className="text-xs text-muted-foreground ml-1">· {total} {labels.resultsCount}</span>
      <button onClick={clearAll} className="ml-auto text-xs text-teal font-bold hover:underline">
        {labels.clearAll}
      </button>
    </div>
  );
};

/* ─── Pagination ─────────────────────────────────────── */
const Pagination = ({ page, totalPages, total, onGo, labels, lang }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const from = (page - 1) * PAGE_SIZE + 1;
  const to = Math.min(page * PAGE_SIZE, total);

  return (
    <div className="mt-10 space-y-3">
      <p className="text-center text-xs text-muted-foreground">
        {lang === "id"
          ? `Menampilkan ${from}–${to} dari ${total} artikel`
          : `Showing ${from}–${to} of ${total} articles`}
      </p>
      <nav className="flex items-center justify-center gap-2" aria-label="Pagination">
        <button
          onClick={() => onGo(page - 1)}
          disabled={page === 1}
          className="w-9 h-9 rounded-full flex items-center justify-center border border-teal/15 text-teal-deep hover:bg-teal hover:text-white hover:border-teal disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => onGo(p)}
            className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
              p === page
                ? "bg-teal-deep text-gold-light shadow-md"
                : "border border-teal/15 text-teal-deep hover:bg-teal hover:text-white hover:border-teal"
            }`}
            aria-current={p === page ? "page" : undefined}
          >
            {p}
          </button>
        ))}
        <button
          onClick={() => onGo(page + 1)}
          disabled={page === totalPages}
          className="w-9 h-9 rounded-full flex items-center justify-center border border-teal/15 text-teal-deep hover:bg-teal hover:text-white hover:border-teal disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Next page"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </nav>
    </div>
  );
};
