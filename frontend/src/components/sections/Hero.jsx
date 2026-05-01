import { ArrowDown, MessageCircle, Sparkles } from "lucide-react";
import { useLang } from "../../contexts/LanguageContext";

export default function Hero() {
  const { t } = useLang();
  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden hero-gradient grain"
      data-testid="hero-section"
    >
      {/* Background image (port aerial) */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-luminosity"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1569161031669-3aef39e1ed7d?auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#051c18]/30 via-transparent to-[#051c18]" />

      {/* Floating ornaments */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-teal-light/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-10 pt-32 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <Sparkles className="w-3.5 h-3.5 text-gold-light" />
          <span className="text-[11px] font-bold text-white/85 tracking-[0.18em] uppercase">{t.hero.badge}</span>
        </div>

        <h1 className="font-serif text-white text-[clamp(40px,7vw,84px)] leading-[1.02] tracking-[-0.03em] font-bold max-w-5xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {t.hero.title_1}
          <br />
          {t.hero.title_2}{" "}
          <em className="not-italic bg-gradient-to-r from-gold-light via-gold to-gold-light bg-clip-text text-transparent italic">
            {t.hero.title_em}
          </em>
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-white/75 text-base lg:text-lg leading-relaxed animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {t.hero.subtitle}
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.55s" }}>
          <a
            href="https://wa.me/6281264882678?text=Halo%20PT%20Dira%20Baraka%20Mulia%2C%20saya%20ingin%20konsultasi%20gratis."
            target="_blank"
            rel="noreferrer"
            className="btn-gold"
            data-testid="hero-cta-primary"
          >
            <MessageCircle className="w-4 h-4" />
            {t.hero.cta_primary}
          </a>
          <a href="#services" className="btn-outline-light" data-testid="hero-cta-secondary">
            {t.hero.cta_secondary} <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div className="w-[1px] h-10 bg-white/30 relative overflow-hidden">
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold animate-scroll-dot" />
        </div>
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">{t.hero.scroll}</span>
      </div>
    </section>
  );
}
