import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';

export default function BlogList() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'id';
  const posts = blogPosts;

  return (
    <>
      <SEO title={t('blog.title')} lang={lang} />
      <section className="pt-36 pb-20">
        <div className="dbm-container">
          <div className="max-w-3xl mb-14">
            <div className="dbm-overline mb-4">{t('blog.overline')}</div>
            <h1 className="dbm-h1">{t('blog.title')}</h1>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p, i) => {
              const title = p.title[lang];
              const excerpt = p.excerpt[lang];
              const category = p.category[lang];
              return (
                <motion.article
                  key={p.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
                  className="border border-border hover:border-[hsl(var(--accent))] transition-colors group bg-background"
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
    </>
  );
}
