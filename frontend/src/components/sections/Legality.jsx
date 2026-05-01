import { Flag, FileText, Landmark, Scale } from "lucide-react";
import { useLang } from "../../contexts/LanguageContext";

const ICONS = { Landmark, FileText, Flag, Scale };

export default function Legality() {
  const { t } = useLang();
  return (
    <section
      id="legality"
      className="relative py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a2620 0%, #051c18 100%)",
      }}
      data-testid="legality-section"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-teal/15 blur-3xl" />

      <div className="relative max-w-[1280px] mx-auto px-5 lg:px-10 text-center">
        <div className="section-tag justify-center" style={{ color: "#e8c547" }}>{t.legality.tag}</div>
        <h2 className="font-serif text-white text-[clamp(28px,4vw,48px)] leading-[1.05] font-bold mb-4 reveal">
          {t.legality.title_1} <em className="not-italic italic text-gold-light">{t.legality.title_em}</em>
        </h2>
        <p className="text-white/60 text-base max-w-xl mx-auto reveal">{t.legality.lead}</p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.legality.cards.map((c, i) => {
            const Icon = ICONS[c.icon] || Landmark;
            return (
              <div
                key={i}
                className="reveal text-left bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-gold/30 transition-all hover:-translate-y-1"
                data-testid={`legality-card-${i}`}
              >
                <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold-light flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-white text-lg mb-3">{c.title}</h4>
                <p className="text-sm text-white/65 leading-relaxed">{c.main}</p>
                <p className="font-serif text-gold-light text-base font-bold mt-2 break-words">{c.code}</p>
                {c.note && <p className="text-xs text-white/45 mt-2">{c.note}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
