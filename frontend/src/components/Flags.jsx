// Compact circular flag SVGs (no external deps)

export const FlagID = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-label="Bahasa Indonesia">
    <defs>
      <clipPath id="flag-id-clip">
        <circle cx="12" cy="12" r="11" />
      </clipPath>
    </defs>
    <g clipPath="url(#flag-id-clip)">
      <rect x="0" y="0" width="24" height="12" fill="#e02b20" />
      <rect x="0" y="12" width="24" height="12" fill="#ffffff" />
    </g>
    <circle cx="12" cy="12" r="11" fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="1" />
  </svg>
);

export const FlagEN = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-label="English (UK)">
    <defs>
      <clipPath id="flag-en-clip">
        <circle cx="12" cy="12" r="11" />
      </clipPath>
    </defs>
    <g clipPath="url(#flag-en-clip)">
      {/* Blue base */}
      <rect width="24" height="24" fill="#012169" />
      {/* White diagonals */}
      <path d="M0,0 L24,24 M24,0 L0,24" stroke="#fff" strokeWidth="3.6" />
      {/* Red diagonals */}
      <path d="M0,0 L24,24" stroke="#C8102E" strokeWidth="2" strokeDasharray="13,11" />
      <path d="M24,0 L0,24" stroke="#C8102E" strokeWidth="2" strokeDasharray="13,11" strokeDashoffset="-13" />
      {/* White cross */}
      <rect x="10" y="0" width="4" height="24" fill="#fff" />
      <rect x="0" y="10" width="24" height="4" fill="#fff" />
      {/* Red cross */}
      <rect x="11" y="0" width="2" height="24" fill="#C8102E" />
      <rect x="0" y="11" width="24" height="2" fill="#C8102E" />
    </g>
    <circle cx="12" cy="12" r="11" fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="1" />
  </svg>
);
