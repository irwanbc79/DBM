import { useState } from "react";
import { Check, Copy, Link2, Linkedin, MessageCircle, Twitter } from "lucide-react";

export default function ShareButtons({ title, url, labels }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback
      const el = document.createElement("textarea");
      el.value = url;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const share = [
    {
      key: "wa",
      label: labels.whatsapp,
      icon: MessageCircle,
      href: `https://wa.me/?text=${encodeURIComponent(`${title} — ${url}`)}`,
      color: "bg-[#25d366] hover:bg-[#1ebc59]",
    },
    {
      key: "x",
      label: labels.x,
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      color: "bg-black hover:bg-neutral-800",
    },
    {
      key: "li",
      label: labels.linkedin,
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: "bg-[#0A66C2] hover:bg-[#084d93]",
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2" data-testid="share-buttons">
      <span className="text-[11px] uppercase tracking-[0.15em] font-bold text-teal/70 mr-1">
        {labels.share}
      </span>
      {share.map((s) => (
        <a
          key={s.key}
          href={s.href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={s.label}
          title={s.label}
          data-testid={`share-${s.key}`}
          className={`${s.color} text-white w-9 h-9 rounded-full inline-flex items-center justify-center transition-transform hover:-translate-y-0.5`}
        >
          <s.icon className="w-4 h-4" />
        </a>
      ))}
      <button
        onClick={handleCopy}
        className="border border-teal/30 text-teal-deep bg-white hover:bg-teal-pale w-9 h-9 rounded-full inline-flex items-center justify-center transition-transform hover:-translate-y-0.5"
        aria-label={labels.copy}
        title={labels.copy}
        data-testid="share-copy"
      >
        {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
      </button>
      {copied && (
        <span className="text-[11px] text-teal font-semibold ml-1">✓ {labels.copied}</span>
      )}
    </div>
  );
}
