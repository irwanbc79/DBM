import { useLang } from "../contexts/LanguageContext";

// Markers positioned in % relative to the uploaded base image (1024x1024 with map roughly centered)
// Each marker: x/y in viewport % of the IMAGE container
const CITIES = [
  { name: "Medan", x: 19, y: 41, hq: true },
  { name: "Jakarta", x: 36, y: 64 },
  { name: "Surabaya", x: 47, y: 67 },
  { name: "Balikpapan", x: 55, y: 53 },
  { name: "Makassar", x: 62, y: 64 },
  { name: "Manado", x: 70, y: 47 },
  { name: "Jayapura", x: 90, y: 56 },
];

export default function IndonesiaMap() {
  const { t } = useLang();
  return (
    <div className="relative">
      {/* Decorative compass */}
      <svg
        viewBox="0 0 60 60"
        className="absolute top-2 right-2 w-12 h-12 opacity-50 pointer-events-none z-10"
        aria-hidden
      >
        <circle cx="30" cy="30" r="24" fill="none" stroke="#1a7a6a" strokeWidth="0.6" strokeDasharray="2,3" />
        <circle cx="30" cy="30" r="16" fill="none" stroke="#1a7a6a" strokeWidth="0.5" />
        <path d="M30,8 L33,30 L30,52 L27,30 Z" fill="#c9a227" opacity="0.85" />
        <path d="M8,30 L30,27 L52,30 L30,33 Z" fill="#1a7a6a" opacity="0.6" />
        <circle cx="30" cy="30" r="2" fill="#083d33" />
        <text x="30" y="6" textAnchor="middle" fontSize="6" fontWeight="700" fill="#0d5546">N</text>
      </svg>

      <div className="relative aspect-[10/8] w-full">
        <img
          src="/indonesia-map.png"
          alt="Indonesia coverage map"
          className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
          draggable={false}
        />

        {/* Trade route SVG layer */}
        <svg
          viewBox="0 0 100 80"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden
        >
          {CITIES.filter((c) => !c.hq).map((c, i) => (
            <line
              key={`route-${c.name}`}
              x1="19"
              y1={(41 / 100) * 80}
              x2={c.x}
              y2={(c.y / 100) * 80}
              stroke="#c9a227"
              strokeOpacity="0.45"
              strokeWidth="0.25"
              strokeDasharray="0.8,0.6"
              strokeLinecap="round"
              style={{
                animation: `dashFlow 4s linear infinite`,
                animationDelay: `${i * 0.25}s`,
              }}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

        {/* Markers overlay */}
        {CITIES.map((c) => (
          <div
            key={c.name}
            className="absolute -translate-x-1/2 -translate-y-1/2 group/m"
            style={{ left: `${c.x}%`, top: `${c.y}%` }}
          >
            {c.hq ? (
              <div className="relative">
                <span className="absolute inset-0 -m-3 rounded-full bg-gold/30 blur-md animate-ping" />
                <span className="relative block w-5 h-5 rounded-full bg-gold ring-2 ring-white shadow-lg shadow-gold/50">
                  <span className="absolute inset-1.5 rounded-full bg-white" />
                  <span className="absolute inset-2.5 rounded-full bg-gold" />
                </span>
                <div className="absolute left-7 top-1/2 -translate-y-1/2 whitespace-nowrap">
                  <div className="font-bold text-[12px] text-teal-deep leading-none flex items-center gap-1.5">
                    {c.name}
                    <span className="text-gold">★</span>
                  </div>
                  <div className="text-[9px] uppercase tracking-[0.12em] text-teal/70 font-bold mt-1">
                    {t.reach.legend.hq}
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative">
                <span className="absolute inset-0 -m-2 rounded-full bg-teal-light/30 blur-sm animate-ping" style={{ animationDuration: "3s" }} />
                <span className="relative block w-3 h-3 rounded-full bg-teal-light ring-2 ring-white shadow-md" />
                <div className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] font-bold text-teal-deep">
                  {c.name}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-5 mt-3 text-[11px] text-teal-deep">
        <span className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-gold ring-1 ring-white shadow" />
          {t.reach.legend.hq}
        </span>
        <span className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-teal-light ring-1 ring-white shadow" />
          {t.reach.legend.city}
        </span>
        <span className="ml-auto text-[10px] uppercase tracking-[0.18em] text-teal/60 font-bold">
          Nusantara
        </span>
      </div>
    </div>
  );
}
