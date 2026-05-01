import { useEffect, useRef } from "react";

/**
 * AdSense-ready ad slot component.
 *
 * HOW TO ENABLE REAL ADS:
 *   1. Set REACT_APP_ADSENSE_CLIENT in /app/frontend/.env
 *      e.g. REACT_APP_ADSENSE_CLIENT=ca-pub-0000000000000000
 *   2. Uncomment the AdSense <script> in /app/frontend/public/index.html
 *   3. Replace each <AdSlot slot="xxx" /> below with your real slot IDs from AdSense dashboard.
 *   4. Redeploy. Placeholders will automatically swap for real ads.
 *
 * During development (or when env is not set), a styled placeholder renders
 * showing the slot name, recommended size, and a notice banner.
 */

const SIZES = {
  "in-feed": { label: "In-Feed Native", h: "140px", desc: "Matches card grid" },
  "in-article": { label: "In-Article", h: "280px", desc: "Responsive, mid-content" },
  leaderboard: { label: "Leaderboard", h: "90px", desc: "728×90 / 970×90 responsive" },
  mpu: { label: "MPU Sidebar", h: "250px", desc: "300×250 sidebar" },
  "below-article": { label: "Below Article", h: "250px", desc: "Pre-related posts" },
};

export default function AdSlot({ slot, format = "in-article", className = "", label }) {
  const client = process.env.REACT_APP_ADSENSE_CLIENT;
  const ref = useRef(null);

  useEffect(() => {
    if (!client || !slot) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      // AdSense will retry on its own schedule
    }
  }, [client, slot]);

  // Real ad
  if (client && slot) {
    return (
      <div className={`my-8 ${className}`} data-testid={`adslot-${slot}`}>
        <div className="text-center text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70 mb-2">
          Advertisement
        </div>
        <ins
          ref={ref}
          className="adsbygoogle block"
          style={{ display: "block", minHeight: SIZES[format]?.h || "250px" }}
          data-ad-client={client}
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  // Dev placeholder
  const size = SIZES[format] || SIZES["in-article"];
  return (
    <div className={`my-8 ${className}`} data-testid={`adslot-placeholder-${slot || format}`}>
      <div className="text-center text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70 mb-2">
        Advertisement
      </div>
      <div
        className="relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-teal/20 bg-gradient-to-br from-teal-pale/40 to-white overflow-hidden"
        style={{ minHeight: size.h }}
      >
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(26,122,106,0.04) 12px, rgba(26,122,106,0.04) 24px)",
        }} />
        <div className="relative text-center p-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-deep/95 text-gold-light text-[10px] uppercase tracking-[0.15em] font-bold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-light animate-pulse" />
            AdSense Slot
          </div>
          <div className="font-serif text-teal-deep text-base font-bold">
            {label || size.label}
          </div>
          <div className="text-[11px] text-teal/70 mt-1">
            {size.desc} · <code className="font-mono">{slot || format}</code>
          </div>
          <div className="text-[10px] text-muted-foreground mt-3 max-w-md">
            This placeholder disappears automatically once REACT_APP_ADSENSE_CLIENT is set in .env
          </div>
        </div>
      </div>
    </div>
  );
}
