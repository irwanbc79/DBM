import { Coffee, Flower2, Handshake, Hammer, Leaf, Package, Sprout, Utensils, Wheat, Wrench } from "lucide-react";
import { useLang } from "../../contexts/LanguageContext";

const ICONS = [Wheat, Utensils, Coffee, Sprout, Leaf, Flower2, Hammer, Wrench, Package, Handshake];

export default function Commodities() {
  const { t } = useLang();
  return (
    <section
      id="commodities"
      className="relative py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #051c18 0%, #083d33 60%, #0d5546 100%)",
      }}
      data-testid="commodities-section"
    >
      {/* Decorative bg image */}
      <div
        className="absolute inset-0 opacity-15 mix-blend-luminosity"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1605749872289-86dde9b6da77?auto=format&fit=crop&w=2000&q=70')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-5 lg:px-10">
        <div className="max-w-2xl mb-12">
          <div className="section-tag reveal" style={{ color: "#e8c547" }}>{t.commodities.tag}</div>
          <h2 className="font-serif text-white text-[clamp(28px,4vw,48px)] leading-[1.05] font-bold tracking-tight mb-5 reveal">
            {t.commodities.title_1} <em className="not-italic italic bg-gradient-to-r from-gold-light to-gold bg-clip-text text-transparent">{t.commodities.title_em}</em>
          </h2>
          <p className="text-white/65 text-base leading-relaxed reveal">{t.commodities.lead}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {t.commodities.items.map((item, i) => {
            const Icon = ICONS[i] || Package;
            return (
              <div
                key={i}
                className="reveal glass rounded-2xl p-5 flex flex-col gap-3 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 cursor-default"
                data-testid={`commodity-${i}`}
              >
                <div className="w-10 h-10 rounded-xl bg-gold/15 text-gold-light flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-white/90 text-sm leading-snug font-semibold">{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
