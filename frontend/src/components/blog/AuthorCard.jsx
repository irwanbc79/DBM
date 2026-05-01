import { MessageCircle } from "lucide-react";
import { useLang } from "../../contexts/LanguageContext";

export default function AuthorCard({ author }) {
  const { lang, t } = useLang();
  const name = author.name[lang];
  const role = author.role[lang];
  const bio = author.bio[lang];
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className="my-12 flex flex-col sm:flex-row items-start sm:items-center gap-5 bg-gradient-to-br from-teal-pale/50 to-white border border-teal/15 rounded-3xl p-6 sm:p-8"
      data-testid="author-card"
    >
      <div className="relative flex-shrink-0">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-deep to-teal flex items-center justify-center text-gold-light font-serif font-bold text-xl ring-2 ring-gold/40">
          {initials}
        </div>
        <span className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-gold flex items-center justify-center text-teal-deep text-[10px] font-bold">
          ✓
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[11px] uppercase tracking-[0.15em] text-teal/70 font-bold mb-1">
          {t.blog.authorLabel}
        </div>
        <h4 className="font-serif text-teal-deep text-lg font-bold">{name}</h4>
        <p className="text-[13px] text-teal font-semibold">{role}</p>
        <p className="text-sm text-muted-foreground leading-relaxed mt-2">{bio}</p>
      </div>
      <a
        href="https://wa.me/6281264882678"
        target="_blank"
        rel="noreferrer"
        className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-deep text-gold-light hover:bg-teal transition-colors text-xs font-bold"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        {t.blog.talkToEditor}
      </a>
    </div>
  );
}
