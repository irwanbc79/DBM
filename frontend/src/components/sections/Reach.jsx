import IndonesiaMap from "../IndonesiaMap";
import { Anchor, Building2, Globe2, Phone, Wifi } from "lucide-react";
import { useLang } from "../../contexts/LanguageContext";

const ICONS = { Building2, Globe2, Anchor, Wifi };

export default function Reach() {
  const { t } = useLang();
  return (
    <section id="reach" className="bg-[#f4f7f6] py-24" data-testid="reach-section">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-16 items-center">
        <div className="reveal">
          <div className="bg-white rounded-3xl p-7 shadow-[0_8px_40px_rgba(26,122,106,.08)] border border-teal/10">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal mb-3">📍 {t.reach.mapTitle}</p>
            <IndonesiaMap />
            <div className="grid grid-cols-3 mt-4 rounded-xl overflow-hidden border border-teal/10">
              <div className="bg-white text-center py-3.5 px-2 border-r border-teal/10">
                <div className="font-serif text-2xl font-bold text-gold">34</div>
                <div className="text-[11px] text-muted-foreground font-medium">{t.reach.provinces}</div>
              </div>
              <div className="bg-white text-center py-3.5 px-2 border-r border-teal/10">
                <div className="font-serif text-2xl font-bold text-teal">6+</div>
                <div className="text-[11px] text-muted-foreground font-medium">{t.reach.partnerCities}</div>
              </div>
              <div className="bg-white text-center py-3.5 px-2">
                <div className="font-serif text-2xl font-bold text-teal-deep">1</div>
                <div className="text-[11px] text-muted-foreground font-medium">{t.reach.hq}</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="section-tag reveal">{t.reach.tag}</div>
          <h2 className="section-title reveal">
            {t.reach.title_1} <em>{t.reach.title_em}</em> {t.reach.title_2}
          </h2>
          <p className="section-lead reveal mb-8">{t.reach.lead}</p>

          <div className="flex flex-col gap-5">
            {t.reach.points.map((p, i) => {
              const Icon = ICONS[p.icon] || Globe2;
              return (
                <div key={i} className="flex gap-4 reveal" data-testid={`reach-point-${i}`}>
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-teal-pale text-teal-deep flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-teal-deep text-base mb-1">{p.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-9 bg-gradient-to-br from-teal-deep to-teal rounded-2xl p-6 flex items-center gap-4 reveal">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <Phone className="w-5 h-5 text-gold-light" />
            </div>
            <div>
              <p className="text-white/65 text-[11px] font-bold uppercase tracking-[0.15em] mb-1">{t.reach.ctaLabel}</p>
              <a
                href="https://wa.me/6281264882678"
                target="_blank"
                rel="noreferrer"
                className="font-serif text-gold-light text-xl font-bold link-underline"
              >
                +62 812-6488-2678
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
