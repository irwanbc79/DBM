import { ComposableMap, Geographies, Geography, Line, Marker } from "react-simple-maps";
import { useLang } from "../contexts/LanguageContext";

const geoUrl = "/indonesia-geo.json";

const CITIES = [
  { name: "Medan", coords: [98.6722, 3.5952], hq: true, label: { en: "HQ", id: "PUSAT" } },
  { name: "Jakarta", coords: [106.8456, -6.2088] },
  { name: "Surabaya", coords: [112.7521, -7.2575] },
  { name: "Balikpapan", coords: [116.8528, -1.2379] },
  { name: "Makassar", coords: [119.4327, -5.1477] },
  { name: "Manado", coords: [124.8421, 1.4748] },
  { name: "Jayapura", coords: [140.7181, -2.5337] },
];

export default function IndonesiaMap() {
  const { t } = useLang();
  return (
    <div className="relative">
      {/* Decorative compass */}
      <svg
        viewBox="0 0 60 60"
        className="absolute top-3 right-3 w-14 h-14 opacity-60 pointer-events-none"
        aria-hidden
      >
        <circle cx="30" cy="30" r="24" fill="none" stroke="#1a7a6a" strokeWidth="0.6" strokeDasharray="2,3" />
        <circle cx="30" cy="30" r="16" fill="none" stroke="#1a7a6a" strokeWidth="0.5" />
        <path d="M30,8 L33,30 L30,52 L27,30 Z" fill="#c9a227" opacity="0.85" />
        <path d="M8,30 L30,27 L52,30 L30,33 Z" fill="#1a7a6a" opacity="0.6" />
        <circle cx="30" cy="30" r="2" fill="#083d33" />
        <text x="30" y="6" textAnchor="middle" fontSize="6" fontWeight="700" fill="#0d5546">N</text>
      </svg>

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,122,106,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(26,122,106,0.06) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center: [118, -2.5], scale: 750 }}
        width={800}
        height={360}
        style={{ width: "100%", height: "auto" }}
      >
        <defs>
          <linearGradient id="provinceGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2a9d8a" />
            <stop offset="100%" stopColor="#0d5546" />
          </linearGradient>
          <filter id="hqGlow" x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="url(#provinceGrad)"
                stroke="#0d5546"
                strokeWidth={0.4}
                style={{
                  default: { outline: "none" },
                  hover: { fill: "#1a7a6a", outline: "none", cursor: "default" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {/* Animated trade routes from HQ Medan to all partner cities */}
        {CITIES.filter((c) => !c.hq).map((c, i) => (
          <Line
            key={`route-${c.name}`}
            from={[98.6722, 3.5952]}
            to={c.coords}
            stroke="#c9a227"
            strokeWidth={0.8}
            strokeOpacity={0.55}
            strokeDasharray="3,3"
            strokeLinecap="round"
            style={{
              animation: `dashFlow 4s linear infinite`,
              animationDelay: `${i * 0.25}s`,
            }}
          />
        ))}

        {CITIES.map((c) => (
          <Marker key={c.name} coordinates={c.coords}>
            {c.hq ? (
              <>
                <circle r={10} fill="rgba(201,162,39,0.3)" filter="url(#hqGlow)" />
                <circle r={6} fill="#c9a227" stroke="#fff" strokeWidth={1.5} />
                <circle r={2} fill="#083d33" />
                <text
                  x={11}
                  y={-7}
                  fontFamily="'Plus Jakarta Sans',sans-serif"
                  fontSize={8}
                  fontWeight={800}
                  fill="#083d33"
                >
                  {c.name} ★
                </text>
                <text
                  x={11}
                  y={3}
                  fontFamily="'Plus Jakarta Sans',sans-serif"
                  fontSize={6.5}
                  fontWeight={600}
                  fill="#1a7a6a"
                >
                  {t.reach.legend.hq}
                </text>
              </>
            ) : (
              <>
                <circle r={6} fill="rgba(42,157,138,0.25)" />
                <circle r={3.5} fill="#2a9d8a" stroke="#fff" strokeWidth={1} />
                <text
                  x={6}
                  y={-3}
                  fontFamily="'Plus Jakarta Sans',sans-serif"
                  fontSize={6.5}
                  fontWeight={700}
                  fill="#083d33"
                >
                  {c.name}
                </text>
              </>
            )}
          </Marker>
        ))}
      </ComposableMap>

      {/* Legend */}
      <div className="flex items-center gap-5 mt-1 text-[11px] text-teal-deep">
        <span className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-gold" /> {t.reach.legend.hq}
        </span>
        <span className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-teal-light" /> {t.reach.legend.city}
        </span>
        <span className="ml-auto text-[10px] uppercase tracking-[0.18em] text-teal/60 font-bold">
          Nusantara · 38 Provinces
        </span>
      </div>
    </div>
  );
}
