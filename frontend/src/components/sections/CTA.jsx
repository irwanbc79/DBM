import { Mail, MessageCircle } from "lucide-react";
import { useLang } from "../../contexts/LanguageContext";

export default function CTA() {
  const { t } = useLang();
  return (
    <section
      className="relative py-24 text-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at top, rgba(201,162,39,0.18) 0%, transparent 60%), linear-gradient(135deg, #1a7a6a 0%, #0d5546 100%)",
      }}
      data-testid="cta-section"
    >
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-5 lg:px-10">
        <h2 className="font-serif text-white text-[clamp(32px,5vw,56px)] font-bold leading-[1.1] tracking-tight reveal">
          {t.cta.title_1}
          <br />
          <em className="not-italic italic text-gold-light">{t.cta.title_2}</em>
        </h2>
        <p className="mt-5 text-white/80 text-base lg:text-lg reveal">{t.cta.desc}</p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
          <a
            href="https://wa.me/6281264882678?text=Halo%20PT%20Dira%20Baraka%20Mulia%2C%20saya%20tertarik%20dengan%20layanan%20ekspor%2Fimpor%20dan%20undername."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#25d366] hover:bg-[#1ebc59] text-white font-bold text-sm shadow-xl shadow-[#25d366]/30 transition-all hover:-translate-y-0.5"
            data-testid="cta-wa-btn"
          >
            <MessageCircle className="w-4 h-4" />
            {t.cta.wa}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0a1d1a] hover:bg-black text-white font-bold text-sm transition-all hover:-translate-y-0.5"
            data-testid="cta-send-btn"
          >
            <Mail className="w-4 h-4" />
            {t.cta.send}
          </a>
        </div>
      </div>
    </section>
  );
}
