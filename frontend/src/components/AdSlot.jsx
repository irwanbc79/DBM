import { useEffect, useRef } from "react";

/**
 * AdSense-ready ad slot component — Publisher: ca-pub-5616961797801657
 *
 * HOW TO GET SLOT IDs:
 *   1. Login ke https://adsense.google.com
 *   2. Iklan > Berdasarkan Unit > Buat unit iklan baru
 *   3. Buat unit untuk setiap format di bawah, lalu salin ID-nya ke SLOT_IDS
 *   4. Deploy ulang. Placeholder otomatis hilang.
 *
 * Slot yang perlu dibuat di dashboard AdSense:
 *   - blog-top-leaderboard     → Leaderboard 728×90 / Responsif
 *   - blog-in-feed             → In-Feed Native
 *   - blog-sidebar-mpu         → Display 300×250
 *   - blog-sidebar-sticky      → Display 300×600 (sticky)
 *   - post-in-article          → In-Article Responsif
 *   - post-below-article       → Display 728×90
 *   - post-mobile-banner       → Display 320×100 (mobile)
 *   - post-related-feed        → In-Feed Native
 */

const SLOT_IDS = {
  "blog-top-leaderboard": "",
  "blog-in-feed": "",
  "blog-sidebar-mpu": "",
  "blog-sidebar-sticky": "",
  "post-in-article": "",
  "post-below-article": "",
  "post-mobile-banner": "",
  "post-related-feed": "",
};

const SIZES = {
  leaderboard: { label: "Leaderboard", h: "90px", desc: "728×90 / 970×90 responsif" },
  "in-feed": { label: "In-Feed Native", h: "140px", desc: "Cocok dengan grid kartu" },
  "in-article": { label: "In-Article", h: "280px", desc: "Responsif, tengah konten" },
  mpu: { label: "MPU Sidebar", h: "250px", desc: "300×250 sidebar" },
  "sticky-sidebar": { label: "Sticky Sidebar", h: "600px", desc: "300×600 sticky" },
  "below-article": { label: "Bawah Artikel", h: "90px", desc: "728×90 pra-related" },
  "mobile-banner": { label: "Mobile Banner", h: "100px", desc: "320×100 hanya mobile" },
  "related-feed": { label: "Related Feed", h: "140px", desc: "Native di antara related posts" },
};

export default function AdSlot({ slot, format = "in-article", className = "", label, mobileOnly = false, desktopOnly = false }) {
  const client = process.env.REACT_APP_ADSENSE_CLIENT;
  const slotId = SLOT_IDS[slot] || slot;
  const ref = useRef(null);

  useEffect(() => {
    if (!client || !slotId) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (_) {}
  }, [client, slotId]);

  const visibilityClass = mobileOnly
    ? "block lg:hidden"
    : desktopOnly
    ? "hidden lg:block"
    : "";

  if (client && slotId) {
    return (
      <div className={`my-8 ${visibilityClass} ${className}`} data-testid={`adslot-${slot}`}>
        <div className="text-center text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-1.5">
          Advertisement
        </div>
        <ins
          ref={ref}
          className="adsbygoogle block"
          style={{ display: "block", minHeight: SIZES[format]?.h || "250px" }}
          data-ad-client={client}
          data-ad-slot={slotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  // Dev/staging placeholder
  const size = SIZES[format] || SIZES["in-article"];
  return (
    <div className={`my-8 ${visibilityClass} ${className}`} data-testid={`adslot-placeholder-${slot || format}`}>
      <div className="text-center text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-1.5">
        Advertisement
      </div>
      <div
        className="relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-teal/20 bg-gradient-to-br from-teal-pale/40 to-white overflow-hidden"
        style={{ minHeight: size.h }}
      >
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(26,122,106,0.03) 10px, rgba(26,122,106,0.03) 20px)",
        }} />
        <div className="relative text-center p-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-deep/90 text-gold-light text-[9px] uppercase tracking-[0.18em] font-bold mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-light animate-pulse" />
            Google AdSense · ca-pub-5616961797801657
          </div>
          <div className="font-serif text-teal-deep text-sm font-bold">
            {label || size.label}
          </div>
          <div className="text-[10px] text-teal/70 mt-1">
            {size.desc} · slot: <code className="font-mono">{slot || format}</code>
          </div>
          <div className="text-[9px] text-muted-foreground/70 mt-2 max-w-xs leading-relaxed">
            Buat slot di AdSense Dashboard → salin ID ke <code className="font-mono">SLOT_IDS</code> di <code className="font-mono">AdSlot.jsx</code>
          </div>
        </div>
      </div>
    </div>
  );
}
