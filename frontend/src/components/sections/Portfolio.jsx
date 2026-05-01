import { useLang } from "../../contexts/LanguageContext";
import { portfolioImages as PORTFOLIO_IMAGES } from "../../data/portfolio";

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
