import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { IMAGES } from '../lib/config';

// 8 commodity images matching 8 items in commodities.items
const commodityImages = [
  IMAGES.coffee,     // Coffee, Tea & Cocoa
  IMAGES.cpo,         // Oil-Bearing Fruits (CPO)
  IMAGES.trade,       // Fertilizers
  IMAGES.logistics,   // Fresh Vegetables & Flowers
  IMAGES.team,        // Household Appliances
  IMAGES.customs,     // Food Ingredients
  IMAGES.warehouse,   // Motor Spare Parts
  IMAGES.generalImg || IMAGES.trade,  // General Merchandise
];

export default function Sectors() {
  const { t } = useTranslation();
  const items = t('commodities.items', { returnObjects: true });

  return (
    <section className="dbm-section" id="commodities">
      <div className="dbm-container">
        <div className="mb-12 max-w-3xl">
          <div className="dbm-overline mb-4">{t('commodities.overline')}</div>
          <h2 className="dbm-h2">{t('commodities.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-5 md:h-[640px]">
          {items.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative overflow-hidden group cursor-pointer ${
                i === 0 ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1 md:row-span-1'
              } h-[320px] md:h-auto`}
            >
              <img
                src={commodityImages[i] || IMAGES.trade}
                alt={s.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))]/95 via-[hsl(var(--primary))]/30 to-transparent" />
              <div className="absolute inset-0 p-6 md:p-7 flex flex-col justify-end text-white">
                <div className="font-mono text-[10px] uppercase tracking-widest text-[hsl(var(--accent))] mb-2">
                  {s.cat}
                </div>
                <h3 className="font-display text-xl md:text-2xl font-semibold leading-tight mb-1">
                  {s.title}
                </h3>
                <p className="text-sm opacity-80">{s.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
