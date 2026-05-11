import { Calendar, Flame, Hash, Search, TrendingUp } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useLang } from "../../contexts/LanguageContext";
import {
  blogPosts,
  getAllCategories,
  getAllTags,
  getArchive,
  getPopularPosts,
} from "../../data/blogPosts";
import AdSlot from "../AdSlot";

const fmtShort = (d, lang) =>
  new Date(d).toLocaleDateString(lang === "id" ? "id-ID" : "en-US", {
    month: "short",
    day: "numeric",
  });

export default function BlogSidebar() {
  const { lang, t } = useLang();
  const [params, setParams] = useSearchParams();
  const [q, setQ] = useState(params.get("q") || "");

  const categories = getAllCategories(lang);
  const tags = getAllTags();
  const archive = getArchive(lang);
  const popular = getPopularPosts(4);
  const activeCat = params.get("category");
  const activeTag = params.get("tag");
  const activeArchive = params.get("archive");

  const submitSearch = (e) => {
    e.preventDefault();
    const next = new URLSearchParams(params);
    if (q.trim()) next.set("q", q.trim());
    else next.delete("q");
    setParams(next, { replace: true });
  };

  const setFilter = (key, val) => {
    const next = new URLSearchParams(params);
    if (val && next.get(key) !== val) next.set(key, val);
    else next.delete(key);
    setParams(next, { replace: true });
  };

  return (
    <aside className="space-y-8 lg:sticky lg:top-24" data-testid="blog-sidebar">
      {/* Search */}
      <form
        onSubmit={submitSearch}
        className="relative"
        data-testid="blog-search-form"
      >
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t.blog.searchPlaceholder}
          className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-teal/15 text-sm text-teal-deep placeholder:text-muted-foreground focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
          data-testid="blog-search-input"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-teal/60" />
      </form>

      {/* Popular */}
      <SidebarCard icon={TrendingUp} title={t.blog.popular}>
        <ul className="space-y-4">
          {popular.map((p, i) => (
            <li key={p.slug} className="group">
              <Link to={`/blog/${p.slug}`} className="flex gap-3 items-start">
                <span className="font-serif text-2xl text-gold font-bold leading-none w-6 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h5 className="font-semibold text-teal-deep text-[13px] leading-snug group-hover:text-teal transition-colors line-clamp-2">
                    {p.title[lang]}
                  </h5>
                  <div className="flex items-center gap-2 mt-1.5 text-[10px] text-muted-foreground">
                    <span>{fmtShort(p.date, lang)}</span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1">
                      <Flame className="w-3 h-3" /> {p.views.toLocaleString()}
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </SidebarCard>

      {/* Sidebar Ad — MPU 300×250 */}
      <AdSlot slot="blog-sidebar-mpu" format="mpu" label="Sidebar MPU 300×250" />

      {/* Sidebar Sticky — 300×600 */}
      <div className="lg:sticky lg:top-28">
        <AdSlot slot="blog-sidebar-sticky" format="sticky-sidebar" label="Sidebar Sticky 300×600" />
      </div>

      {/* Categories */}
      <SidebarCard icon={Hash} title={t.blog.categories}>
        <ul className="space-y-1" data-testid="categories-list">
          {categories.map((c) => {
            const active = activeCat === c.name;
            return (
              <li key={c.name}>
                <button
                  onClick={() => setFilter("category", active ? "" : c.name)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    active
                      ? "bg-teal-deep text-gold-light"
                      : "text-teal-deep hover:bg-teal-pale"
                  }`}
                  data-testid={`category-filter-${c.name}`}
                >
                  <span>{c.name}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full ${
                      active ? "bg-gold/20" : "bg-teal-pale"
                    }`}
                  >
                    {c.count}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </SidebarCard>

      {/* Tags cloud */}
      <SidebarCard icon={Hash} title={t.blog.tags}>
        <div className="flex flex-wrap gap-2" data-testid="tags-cloud">
          {tags.map(({ tag, count }) => {
            const active = activeTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setFilter("tag", active ? "" : tag)}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-bold transition-all ${
                  active
                    ? "bg-gold text-teal-deep shadow-sm"
                    : "bg-teal-pale text-teal-deep hover:bg-teal hover:text-white"
                }`}
                data-testid={`tag-filter-${tag}`}
              >
                #{tag}
                <span className="opacity-60 text-[9px]">{count}</span>
              </button>
            );
          })}
        </div>
      </SidebarCard>

      {/* Archive */}
      <SidebarCard icon={Calendar} title={t.blog.archive}>
        <ul className="space-y-1">
          {archive.map((a) => {
            const active = activeArchive === a.key;
            return (
              <li key={a.key}>
                <button
                  onClick={() => setFilter("archive", active ? "" : a.key)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    active
                      ? "bg-teal-deep text-gold-light"
                      : "text-teal-deep hover:bg-teal-pale"
                  }`}
                >
                  <span>{a.label}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full ${
                      active ? "bg-gold/20" : "bg-teal-pale"
                    }`}
                  >
                    {a.count}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </SidebarCard>

      {/* Newsletter */}
      <div className="relative overflow-hidden rounded-2xl p-6 text-center bg-gradient-to-br from-teal-deep to-teal text-white">
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gold/20 blur-2xl pointer-events-none" />
        <div className="relative">
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-gold-light text-[10px] uppercase tracking-[0.15em] font-bold mb-3">
            {t.blog.newsletter.tag}
          </div>
          <h4 className="font-serif text-lg font-bold text-white">
            {t.blog.newsletter.title}
          </h4>
          <p className="text-white/70 text-[12px] mt-2 leading-relaxed">
            {t.blog.newsletter.desc}
          </p>
          <form
            className="mt-4 space-y-2"
            onSubmit={(e) => {
              e.preventDefault();
              const email = new FormData(e.target).get("email");
              const text = encodeURIComponent(
                `Halo, saya ingin berlangganan Trade Insights Newsletter. Email saya: ${email}`
              );
              window.open(`https://wa.me/6281264882678?text=${text}`, "_blank");
            }}
          >
            <input
              name="email"
              type="email"
              required
              placeholder={t.blog.newsletter.placeholder}
              className="w-full px-4 py-2.5 rounded-full bg-white/10 text-white placeholder:text-white/50 text-sm border border-white/15 focus:outline-none focus:border-gold-light"
              data-testid="newsletter-email"
            />
            <button
              type="submit"
              className="w-full py-2.5 rounded-full bg-gold hover:bg-gold-light text-teal-deep font-bold text-sm transition-colors"
              data-testid="newsletter-submit"
            >
              {t.blog.newsletter.submit}
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
}

const SidebarCard = ({ icon: Icon, title, children }) => (
  <div className="bg-white border border-teal/10 rounded-2xl p-6">
    <div className="flex items-center gap-2 mb-5">
      <div className="w-8 h-8 rounded-lg bg-teal-pale text-teal-deep flex items-center justify-center">
        <Icon className="w-4 h-4" />
      </div>
      <h4 className="font-serif font-bold text-teal-deep text-base m-0">{title}</h4>
    </div>
    {children}
  </div>
);

// Filter helper used by Blog index page
export const filterPosts = (params, lang) => {
  const q = (params.get("q") || "").toLowerCase().trim();
  const cat = params.get("category");
  const tag = params.get("tag");
  const archive = params.get("archive");

  return blogPosts.filter((p) => {
    if (cat && p.category[lang] !== cat) return false;
    if (tag && !p.tags.includes(tag)) return false;
    if (archive) {
      const d = new Date(p.date);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
      if (key !== archive) return false;
    }
    if (q) {
      const hay = [
        p.title[lang],
        p.excerpt[lang],
        p.body[lang].join(" "),
        p.category[lang],
        ...p.tags,
      ]
        .join(" ")
        .toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
};
