import { List } from "lucide-react";

/**
 * Auto-generates a Table of Contents from paragraphs that begin with
 * a bold marker: **Heading.** Rest of sentence... — splits into h3 + p.
 * Returns list of { id, text } for TOC + enriched items for rendering.
 */
export const buildToc = (paragraphs) => {
  const items = [];
  paragraphs.forEach((p, i) => {
    const m = p.match(/^\*\*([^*]+)\*\*/);
    if (m) {
      const heading = m[1].replace(/[.:]$/, "").trim();
      const id = `s-${i}-${heading
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
        .slice(0, 60)}`;
      items.push({ id, text: heading, index: i });
    }
  });
  return items;
};

export default function TableOfContents({ items, title }) {
  if (!items.length) return null;
  return (
    <nav
      className="not-prose my-8 bg-gradient-to-br from-teal-pale/60 to-white border border-teal/15 rounded-2xl p-6"
      data-testid="table-of-contents"
      aria-label={title}
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-teal-deep text-gold-light flex items-center justify-center">
          <List className="w-4 h-4" />
        </div>
        <h3 className="font-serif font-bold text-teal-deep text-base m-0">{title}</h3>
      </div>
      <ol className="flex flex-col gap-2 list-none p-0 m-0">
        {items.map((it, i) => (
          <li key={it.id} className="flex items-start gap-3 text-sm">
            <span className="text-gold font-serif font-bold leading-tight mt-0.5 w-5 text-right">
              {String(i + 1).padStart(2, "0")}
            </span>
            <a
              href={`#${it.id}`}
              className="text-teal-deep/90 hover:text-teal font-semibold no-underline leading-snug"
            >
              {it.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
