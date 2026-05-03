import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import SEO from '../components/SEO';
import { blogPosts, getPostBySlug } from '../data/blogPosts';

function renderBody(bodyArray) {
  if (!Array.isArray(bodyArray)) return bodyArray;
  return bodyArray.map((para, i) => {
    const parts = para.split(/\*\*(.+?)\*\*/g);
    return (
      <p key={i}>
        {parts.map((part, j) =>
          j % 2 === 1 ? <strong key={j}>{part}</strong> : part
        )}
      </p>
    );
  });
}

export default function BlogDetail() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'id';

  const post = getPostBySlug(slug);
  if (!post) return (
    <div className="pt-36 pb-20 text-center">
      <p className="mb-5">{t('blog.noPosts')}</p>
      <Link to="/blog" className="dbm-btn dbm-btn-primary">{t('blog.backToBlog')}</Link>
    </div>
  );

  const title = post.title[lang];
  const excerpt = post.excerpt[lang];
  const category = post.category[lang];
  const body = post.body[lang];

  return (
    <>
      <SEO title={title} description={excerpt} image={post.cover} type="article" lang={lang} />

      <article className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-semibold text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--accent))] transition-colors mb-10">
            <ArrowLeft size={14} /> {t('blog.backToBlog')}
          </Link>

          <div className="dbm-overline mb-4">{category}</div>
          <h1 className="dbm-h1 mb-6">{title}</h1>
          <div className="flex items-center gap-5 text-sm text-[hsl(var(--muted-foreground))] mb-10 pb-10 border-b border-border">
            <span className="flex items-center gap-1.5"><User size={14} /> PT. Dira Baraka Mulia</span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString(lang === 'en' ? 'en-US' : 'id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
            <span className="text-[hsl(var(--muted-foreground))]">{post.readTime} min read</span>
          </div>

          <img src={post.cover} alt={title} className="w-full aspect-[16/9] object-cover mb-12" />

          <div className="dbm-prose">{renderBody(body)}</div>
        </div>
      </article>
    </>
  );
}
