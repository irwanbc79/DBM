import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export default function BlogPreview() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'id';
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="dbm-section bg-[hsl(var(--surface))]" id="blog">
      <div className="dbm-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="dbm-overline mb-4">{t('blog.overline')}</div>
            <h2 className="dbm-h2">{t('blog.title')}</h2>
          </div>
          <Link to="/blog" className="dbm-btn dbm-btn-ghost self-start md:self-end">
            {t('blog.viewAll')} <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => {
            const title = p.title[lang];
            const excerpt = p.excerpt[lang];
            const category = p.category[lang];
            return (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background border border-border hover:border-[hsl(var(--accent))] transition-colors group"
              >
                <Link to={`/blog/${p.slug}`} className="block">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={p.cover} alt={title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] uppercase tracking-widest text-[hsl(var(--accent))] font-semibold">{category}</span>
                      <span className="flex items-center gap-1 text-[11px] text-[hsl(var(--muted-foreground))]">
                        <Calendar size={11} />
                        {new Date(p.date).toLocaleDateString(lang === 'en' ? 'en-US' : 'id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold leading-tight mb-3 group-hover:text-[hsl(var(--accent))] transition-colors">{title}</h3>
                    <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed line-clamp-3">{excerpt}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[hsl(var(--accent))] uppercase tracking-wider">
                      {t('blog.readMore')} <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
