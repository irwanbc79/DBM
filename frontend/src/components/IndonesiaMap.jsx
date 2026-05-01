import { useLang } from "../contexts/LanguageContext";

// Stylized Indonesia archipelago map with city dots — pure SVG (no external deps)
export default function IndonesiaMap() {
  const { t } = useLang();
  return (
    <svg
      viewBox="0 0 800 360"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto block"
      role="img"
      aria-label="Indonesia coverage map"
    >
      <defs>
        <linearGradient id="iGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a9d8a" />
          <stop offset="100%" stopColor="#0d5546" />
        </linearGradient>
        <filter id="dotGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="goldGlow" x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="800" height="360" fill="#d4eee9" rx="14" />

      {/* SUMATRA */}
      <path d="M 40,28 C 52,20 65,22 75,30 C 85,38 92,50 98,64 C 105,80 112,96 118,112 C 124,128 130,144 136,160 C 142,176 148,190 152,204 C 156,218 158,230 155,240 C 152,248 145,252 138,248 C 130,242 124,230 118,216 C 112,202 106,186 100,170 C 94,154 88,138 80,122 C 72,106 63,90 54,74 C 46,60 38,46 36,36 Z" fill="url(#iGrad)" stroke="#1a7a6a" strokeWidth="0.8" opacity=".95" />
      {/* JAVA */}
      <path d="M 130,268 C 145,260 162,256 182,254 C 202,252 224,254 248,256 C 270,258 292,260 312,262 C 330,264 346,264 356,266 C 364,268 368,272 365,278 C 362,284 352,286 336,286 C 318,285 296,282 272,280 C 248,278 222,276 198,274 C 175,272 152,272 136,275 C 126,277 120,274 118,270 Z" fill="url(#iGrad)" stroke="#1a7a6a" strokeWidth="0.8" opacity=".95" />
      {/* BALI */}
      <path d="M 372,268 L 382,264 L 390,267 L 388,276 L 376,278 Z" fill="url(#iGrad)" stroke="#1a7a6a" strokeWidth="0.6" opacity=".9" />
      {/* LOMBOK + SUMBAWA */}
      <path d="M 395,266 L 408,262 L 424,264 L 430,270 L 424,278 L 408,280 L 395,275 Z" fill="url(#iGrad)" stroke="#1a7a6a" strokeWidth="0.6" opacity=".85" />
      {/* FLORES */}
      <path d="M 436,272 L 455,266 L 480,268 L 500,272 L 516,278 L 512,287 L 490,290 L 465,288 L 442,284 Z" fill="url(#iGrad)" stroke="#1a7a6a" strokeWidth="0.6" opacity=".82" />
      {/* TIMOR */}
      <path d="M 520,278 L 540,274 L 555,277 L 552,286 L 534,290 L 520,287 Z" fill="url(#iGrad)" stroke="#1a7a6a" strokeWidth="0.6" opacity=".78" />
      {/* KALIMANTAN */}
      <path d="M 250,62 C 268,50 292,44 316,42 C 340,40 365,44 386,54 C 404,62 416,76 422,94 C 428,110 428,130 424,152 C 420,172 412,192 400,210 C 388,226 372,238 354,244 C 338,250 320,248 304,240 C 288,232 274,220 262,206 C 250,192 242,175 238,157 C 234,140 234,122 238,106 C 242,90 246,74 250,62 Z" fill="url(#iGrad)" stroke="#1a7a6a" strokeWidth="0.8" opacity=".95" />
      {/* SULAWESI N arm */}
      <path d="M 436,152 C 442,140 450,128 460,118 C 470,108 482,100 494,96 C 504,93 512,96 516,104 C 520,112 516,124 508,132 C 500,140 488,146 476,150 C 466,153 454,154 444,154 Z" fill="url(#iGrad)" stroke="#1a7a6a" strokeWidth="0.7" opacity=".95" />
      {/* SULAWESI W body */}
      <path d="M 430,152 C 430,165 428,180 426,195 C 424,210 420,224 415,236 C 410,246 403,252 396,250 C 390,247 386,238 386,226 C 386,214 390,200 396,188 C 402,176 410,165 418,156 Z" fill="url(#iGrad)" stroke="#1a7a6a" strokeWidth="0.7" opacity=".93" />
      {/* SULAWESI E arm */}
      <path d="M 444,154 C 456,158 468,166 478,176 C 488,186 494,198 492,210 C 490,220 482,226 472,222 C 462,218 454,207 448,194 C 442,182 440,168 440,156 Z" fill="url(#iGrad)" stroke="#1a7a6a" strokeWidth="0.7" opacity=".93" />
      {/* SULAWESI SE */}
      <path d="M 472,222 C 475,232 476,244 474,254 C 472,262 466,268 459,266 C 452,264 447,255 446,244 C 445,234 448,224 454,218 Z" fill="url(#iGrad)" stroke="#1a7a6a" strokeWidth="0.7" opacity=".88" />
      {/* SULAWESI SW */}
      <path d="M 416,236 C 428,244 440,250 450,252 C 456,253 460,248 458,242 C 456,236 448,232 438,230 C 428,228 420,230 416,236 Z" fill="url(#iGrad)" stroke="#1a7a6a" strokeWidth="0.6" opacity=".85" />
      {/* MALUKU */}
      <path d="M 540,88 C 546,80 556,78 563,84 C 568,90 566,100 558,106 C 550,112 540,110 536,102 Z" fill="url(#iGrad)" stroke="#1a7a6a" strokeWidth="0.6" opacity=".85" />
      <path d="M 548,108 C 552,118 556,130 552,142 C 548,152 538,156 530,150 C 522,144 520,132 524,122 C 528,112 538,106 548,108 Z" fill="url(#iGrad)" stroke="#1a7a6a" strokeWidth="0.6" opacity=".82" />
      <path d="M 544,180 C 556,174 572,174 582,182 C 588,188 584,198 574,202 C 562,206 548,202 542,194 C 537,188 538,182 544,180 Z" fill="url(#iGrad)" stroke="#1a7a6a" strokeWidth="0.6" opacity=".78" />
      <path d="M 551,208 C 558,205 565,207 567,214 C 568,220 563,226 556,226 C 549,226 544,220 546,214 Z" fill="url(#iGrad)" stroke="#1a7a6a" strokeWidth="0.5" opacity=".75" />
      <circle cx="536" cy="118" r="5" fill="url(#iGrad)" stroke="#1a7a6a" strokeWidth="0.5" opacity=".7" />
      {/* PAPUA */}
      <path d="M 600,148 C 592,138 582,128 574,120 C 566,112 560,118 558,130 C 556,142 560,156 568,162 C 576,166 586,162 594,156 Z" fill="url(#iGrad)" stroke="#1a7a6a" strokeWidth="0.8" opacity=".95" />
      <path d="M 596,155 C 614,142 638,132 662,126 C 686,120 710,120 732,126 C 752,132 768,144 776,160 C 782,174 778,192 768,206 C 756,222 738,234 716,244 C 694,254 668,260 644,260 C 620,260 598,254 580,244 C 564,234 554,220 552,204 C 550,188 556,172 568,162 C 578,154 587,154 596,155 Z" fill="url(#iGrad)" stroke="#1a7a6a" strokeWidth="0.8" opacity=".95" />

      {/* CITY DOTS */}
      <circle cx="96" cy="66" r="14" fill="rgba(201,162,39,.18)" filter="url(#goldGlow)" />
      <circle cx="96" cy="66" r="8" fill="#c9a227" />
      <circle cx="96" cy="66" r="4" fill="white" />
      <circle cx="96" cy="66" r="2" fill="#c9a227" />
      <text x="110" y="63" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="9.5" fill="#083d33" fontWeight="800">Medan ★</text>
      <text x="110" y="74" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="7.5" fill="#1a7a6a" fontWeight="500">{t.reach.legend.hq}</text>

      <circle cx="188" cy="267" r="10" fill="rgba(201,162,39,.15)" filter="url(#dotGlow)" />
      <circle cx="188" cy="267" r="6" fill="#c9a227" />
      <circle cx="188" cy="267" r="2.5" fill="white" />
      <text x="196" y="264" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="8.5" fill="#083d33" fontWeight="700">Jakarta</text>

      <circle cx="312" cy="269" r="9" fill="rgba(42,157,138,.2)" filter="url(#dotGlow)" />
      <circle cx="312" cy="269" r="5.5" fill="#2a9d8a" />
      <circle cx="312" cy="269" r="2" fill="white" />
      <text x="320" y="266" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="8" fill="#083d33" fontWeight="700">Surabaya</text>

      <circle cx="370" cy="175" r="8" fill="rgba(42,157,138,.2)" filter="url(#dotGlow)" />
      <circle cx="370" cy="175" r="5" fill="#2a9d8a" />
      <circle cx="370" cy="175" r="2" fill="white" />
      <text x="378" y="172" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="7.5" fill="#083d33" fontWeight="700">Balikpapan</text>

      <circle cx="420" cy="220" r="8" fill="rgba(42,157,138,.2)" filter="url(#dotGlow)" />
      <circle cx="420" cy="220" r="5" fill="#2a9d8a" />
      <circle cx="420" cy="220" r="2" fill="white" />
      <text x="428" y="217" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="7.5" fill="#083d33" fontWeight="700">Makassar</text>

      <circle cx="508" cy="100" r="7" fill="rgba(42,157,138,.2)" filter="url(#dotGlow)" />
      <circle cx="508" cy="100" r="4.5" fill="#2a9d8a" />
      <circle cx="508" cy="100" r="2" fill="white" />
      <text x="516" y="97" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="7.5" fill="#083d33" fontWeight="700">Manado</text>

      <circle cx="748" cy="168" r="7" fill="rgba(42,157,138,.2)" filter="url(#dotGlow)" />
      <circle cx="748" cy="168" r="4.5" fill="#2a9d8a" />
      <circle cx="748" cy="168" r="2" fill="white" />
      <text x="720" y="157" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="7.5" fill="#083d33" fontWeight="700">Jayapura</text>

      <line x1="96" y1="66" x2="188" y2="267" stroke="rgba(201,162,39,.25)" strokeWidth="1" strokeDasharray="5,5" />
      <line x1="188" y1="267" x2="312" y2="269" stroke="rgba(201,162,39,.2)" strokeWidth="1" strokeDasharray="5,5" />
      <line x1="312" y1="269" x2="420" y2="220" stroke="rgba(201,162,39,.18)" strokeWidth="1" strokeDasharray="5,5" />
      <line x1="420" y1="220" x2="748" y2="168" stroke="rgba(201,162,39,.12)" strokeWidth="1" strokeDasharray="5,5" />

      <rect x="12" y="324" width="170" height="26" rx="6" fill="white" opacity=".85" />
      <circle cx="26" cy="337" r="5" fill="#c9a227" />
      <text x="35" y="341" fontFamily="sans-serif" fontSize="8" fill="#0d5546" fontWeight="700">{t.reach.legend.hq}</text>
      <circle cx="108" cy="337" r="4.5" fill="#2a9d8a" />
      <text x="117" y="341" fontFamily="sans-serif" fontSize="8" fill="#0d5546" fontWeight="700">{t.reach.legend.city}</text>
    </svg>
  );
}
