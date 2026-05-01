import { Network, ShieldCheck, Target, Zap } from "lucide-react";
import { useLang } from "../../contexts/LanguageContext";

const ICONS = { ShieldCheck, Zap, Target, Network };

export default function Advantages() {
  const { t } = useLang();
  return (
    <section className="bg-[#f4f7f6] py-28" data-testid="advantages-section">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
        <div className="relative reveal">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
              alt="Container inspection"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-white rounded-2xl p-6 shadow-xl border border-teal/10 max-w-[230px]">
            <div className="font-serif text-3xl font-bold text-gold leading-none">{t.advantages.experience}</div>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{t.advantages.experienceLabel}</p>
          </div>
          <div className="absolute -top-6 -left-4 w-20 h-20 rounded-full border-2 border-gold/40 flex items-center justify-center spin-slow">
            <span className="font-serif italic text-gold text-2xl">D</span>
          </div>
        </div>

        <div>
          <div className="section-tag reveal">{t.advantages.tag}</div>
          <h2 className="section-title reveal">
            {t.advantages.title_1} <em>{t.advantages.title_em}</em>
          </h2>
          <p className="section-lead reveal mb-8">{t.advantages.lead}</p>

          <div className="flex flex-col gap-5">
            {t.advantages.points.map((p, i) => {
              const Icon = ICONS[p.icon] || ShieldCheck;
              return (
                <div key={i} className="flex gap-4 reveal" data-testid={`advantage-point-${i}`}>
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 text-gold-dark flex items-center justify-center border border-gold/30">
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
        </div>
      </div>
    </section>
  );
}
