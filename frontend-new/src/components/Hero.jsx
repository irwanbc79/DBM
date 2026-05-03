import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Ship } from 'lucide-react';
import { IMAGES, COMPANY } from '../lib/config';

export default function Hero() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const imgY = useTransform(scrollY, [0, 600], [0, -60]);

  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden" id="home">
      <div className="absolute inset-0 hero-grid-bg opacity-60" />
      <div className="absolute inset-0 noise-overlay" />

      <div className="dbm-container relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <motion.div
          style={{ y }}
          className="lg:col-span-6 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 border border-border bg-[hsl(var(--surface))] text-xs font-semibold uppercase tracking-widest rounded-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent))] animate-pulse" />
            {t('hero.location')}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 ml-2 mb-8 px-3 py-1.5 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] text-[11px] font-semibold uppercase tracking-widest rounded-sm"
          >
            <Ship size={12} /> {t('hero.badge')}
          </motion.div>

          <motion.h1
            className="dbm-h1 mb-6"
          >
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="block"
            >
              {t('hero.title1')}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="block text-[hsl(var(--accent))]"
            >
              {t('hero.title2')}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="block"
            >
              {t('hero.title3')}
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-base md:text-lg text-[hsl(var(--muted-foreground))] max-w-xl mb-8 leading-relaxed"
          >
            {t('hero.desc')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            <a href="#contact" className="dbm-btn dbm-btn-primary">
              {t('hero.cta1')} <ArrowRight size={16} />
            </a>
            <a
              href={`https://wa.me/${COMPANY.phoneDigits}`}
              target="_blank"
              rel="noopener noreferrer"
              className="dbm-btn dbm-btn-ghost"
            >
              WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="grid grid-cols-3 gap-6 pt-8 border-t border-border"
          >
            {[
              { n: '10+', l: t('hero.stats.kbli') },
              { n: '2+', l: t('hero.stats.experience') },
              { n: '1', l: t('hero.stats.contact') },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-display text-3xl md:text-4xl font-semibold text-[hsl(var(--accent))]">
                  {s.n}
                </div>
                <div className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))] mt-1 font-semibold">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="lg:col-span-6 relative h-[420px] md:h-[520px] lg:h-[580px]"
        >
          <motion.div style={{ y: imgY }} className="absolute inset-0 overflow-hidden rounded-lg">
            <img
              src={IMAGES.heroPort}
              alt="Belawan Port"
              loading="eager"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))]/50 via-transparent to-[hsl(var(--primary))]/30" />
          </motion.div>

          <div className="absolute bottom-5 left-5 right-5 bg-[hsl(var(--primary))]/95 backdrop-blur-md text-white p-5 grid grid-cols-2 gap-4 border-l-4 border-[hsl(var(--accent))] rounded-r-lg">
            <div>
              <div className="font-display text-xl font-semibold">BELAWAN</div>
              <div className="text-[10px] uppercase tracking-widest opacity-80 mt-0.5">
                {t('hero.portBelawan')}
              </div>
            </div>
            <div>
              <div className="font-display text-xl font-semibold">KUALANAMU</div>
              <div className="text-[10px] uppercase tracking-widest opacity-80 mt-0.5">
                {t('hero.kualanamu')}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
