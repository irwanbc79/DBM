import { FileCheck2, Globe, Handshake, Plane, Ship, Tag, ArrowUpRight } from "lucide-react";
import { useLang } from "../../contexts/LanguageContext";

const ICONS = { Ship, Plane, Tag, Handshake, FileCheck2, Globe };

export default function Services() {
  const { t } = useLang();
  return (
    <section id="services" className="bg-white py-28" data-testid="services-section">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-tag justify-center">{t.services.tag}</div>
          <h2 className="section-title reveal">
            {t.services.title_1} <em>{t.services.title_em}</em>
          </h2>
          <p className="section-lead reveal mx-auto">{t.services.lead}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((s, i) => {
            const Icon = ICONS[s.icon] || Ship;
            return (
              <div
                key={i}
                className="reveal group relative bg-white border border-teal/10 rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(13,85,70,0.12)] hover:border-teal/30 overflow-hidden"
                data-testid={`service-card-${i}`}
              >
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-teal-pale opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-pale to-white flex items-center justify-center text-teal-deep border border-teal/10 mb-5 group-hover:bg-teal-deep group-hover:text-gold-light transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-teal-deep text-xl mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-teal/10">
                    <span className="text-[11px] uppercase tracking-[0.15em] text-gold-dark font-bold">{s.tag}</span>
                    <ArrowUpRight className="w-4 h-4 text-teal opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
