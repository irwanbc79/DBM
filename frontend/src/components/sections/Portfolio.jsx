import { useLang } from "../../contexts/LanguageContext";

const PORTFOLIO_IMAGES = [
  "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80", // industry
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80", // meeting
  "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1200&q=80", // port containers
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80", // discussion
  "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80", // inspection
  "https://images.unsplash.com/photo-1544531585-9847b68c8c86?auto=format&fit=crop&w=1200&q=80", // crane
  "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=80", // bulk vessel
  "https://images.unsplash.com/photo-1589216532372-1c2a367900d9?auto=format&fit=crop&w=1200&q=80", // port
  "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80", // field team
];

export default function Portfolio() {
  const { t } = useLang();
  return (
    <section id="portfolio" className="bg-white py-28" data-testid="portfolio-section">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="section-tag justify-center">{t.portfolio.tag}</div>
          <h2 className="section-title reveal">
            {t.portfolio.title_1} <em>{t.portfolio.title_em}</em>
          </h2>
          <p className="section-lead reveal mx-auto">{t.portfolio.lead}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
          {PORTFOLIO_IMAGES.map((src, i) => (
            <div
              key={i}
              className={`reveal group relative overflow-hidden rounded-2xl ${
                i === 0 ? "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto" : "aspect-[4/3]"
              }`}
              data-testid={`portfolio-item-${i}`}
            >
              <img
                src={src}
                alt={t.portfolio.captions[i]}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/85 via-teal-deep/0 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="inline-block text-[10px] uppercase tracking-[0.18em] text-gold-light font-bold mb-2">
                  No. {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-white font-serif text-base lg:text-lg font-bold">{t.portfolio.captions[i]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
