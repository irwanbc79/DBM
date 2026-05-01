import { useLang } from "../../contexts/LanguageContext";

export default function Process() {
  const { t } = useLang();
  return (
    <section className="bg-[#f4f7f6] py-28" data-testid="process-section">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-tag justify-center">{t.process.tag}</div>
          <h2 className="section-title reveal">
            {t.process.title_1} <em>{t.process.title_em}</em>
          </h2>
          <p className="section-lead reveal mx-auto">{t.process.lead}</p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {t.process.steps.map((s, i) => (
              <div key={i} className="reveal text-center" data-testid={`process-step-${i}`}>
                <div className="relative inline-flex items-center justify-center w-24 h-24 mx-auto mb-5">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-deep to-teal" />
                  <div className="absolute inset-1 rounded-full bg-white" />
                  <span className="relative font-serif text-3xl font-bold text-teal-deep">{i + 1}</span>
                  <span className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full bg-gold flex items-center justify-center text-[10px] font-bold text-teal-deep">
                    0{i + 1}
                  </span>
                </div>
                <h4 className="font-serif font-bold text-teal-deep text-lg mb-2">{s.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
