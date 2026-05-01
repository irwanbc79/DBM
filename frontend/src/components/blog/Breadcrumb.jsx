import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function Breadcrumb({ items }) {
  return (
    <nav
      className="flex items-center gap-1 text-xs text-muted-foreground"
      aria-label="Breadcrumb"
      data-testid="breadcrumb"
    >
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <span key={i} className="inline-flex items-center gap-1 min-w-0">
            {i === 0 && <Home className="w-3.5 h-3.5 text-teal/50" />}
            {it.to && !last ? (
              <Link
                to={it.to}
                className="hover:text-teal-deep transition-colors truncate"
              >
                {it.label}
              </Link>
            ) : (
              <span
                className={`truncate ${last ? "text-teal-deep font-semibold" : ""}`}
              >
                {it.label}
              </span>
            )}
            {!last && <ChevronRight className="w-3.5 h-3.5 text-teal/30 flex-shrink-0" />}
          </span>
        );
      })}
    </nav>
  );
}
