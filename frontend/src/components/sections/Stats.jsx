import { useLang } from "../../contexts/LanguageContext";
import { useCountUp } from "../../hooks/use-reveal";

const StatBox = ({ value, label, suffix = "+" }) => {
  const [n, ref] = useCountUp(value);
  return (
    <div ref={ref} className="text-center" data-testid="stat-box">
      <div className="font-serif font-bold text-[clamp(40px,5vw,64px)] text-teal-deep leading-none tracking-tight">
        {n}
        <span className="text-gold">{suffix}</span>
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.18em] text-teal/70 font-bold">{label}</div>
    </div>
  );
};

export default function Stats() {
  const { t } = useLang();
  return (
    <section className="bg-white py-20" data-testid="stats-section">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
        <StatBox value={50} label={t.stats.transactions} />
        <StatBox value={30} label={t.stats.partners} />
        <StatBox value={12} label={t.stats.countries} suffix="" />
        <StatBox value={10} label={t.stats.commodities} />
      </div>
    </section>
  );
}
