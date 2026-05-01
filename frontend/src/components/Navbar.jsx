import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { useLang } from "../contexts/LanguageContext";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [loc.pathname]);

  const handleAnchor = (id) => (e) => {
    e.preventDefault();
    if (loc.pathname !== "/") {
      nav("/", { replace: false });
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 60);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const links = [
    { id: "services", label: t.nav.services },
    { id: "commodities", label: t.nav.commodities },
    { id: "portfolio", label: t.nav.portfolio },
    { id: "legality", label: t.nav.legality },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || loc.pathname !== "/"
          ? "bg-white/85 backdrop-blur-lg border-b border-teal/10 shadow-[0_4px_30px_rgba(13,85,70,0.06)]"
          : "bg-transparent"
      }`}
      data-testid="main-navbar"
    >
      <div className="max-w-[1280px] mx-auto px-5 lg:px-10 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          data-testid="logo-link"
        >
          <div className="relative">
            <div className="w-11 h-11 rounded-full overflow-hidden ring-1 ring-gold/40 shadow-lg shadow-teal-deep/30 bg-teal-deep">
              <img
                src="/logo.jpg"
                alt="PT. Dira Baraka Mulia"
                className="w-full h-full object-cover scale-[2.2] -translate-y-[3%]"
                draggable={false}
              />
            </div>
            <div className="absolute -inset-0.5 rounded-full bg-gold/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="hidden sm:block leading-tight">
            <div
              className={`font-serif font-bold text-[15px] tracking-tight transition-colors ${
                scrolled || loc.pathname !== "/" ? "text-teal-deep" : "text-white"
              }`}
            >
              PT. Dira Baraka Mulia
            </div>
            <div
              className={`text-[10px] uppercase tracking-[0.18em] font-semibold transition-colors ${
                scrolled || loc.pathname !== "/" ? "text-teal/70" : "text-gold-light/90"
              }`}
            >
              Trusted Trading Co.
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={handleAnchor(l.id)}
              className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-colors ${
                scrolled || loc.pathname !== "/"
                  ? "text-teal-deep hover:bg-teal-pale"
                  : "text-white/90 hover:bg-white/10"
              }`}
              data-testid={`nav-${l.id}`}
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/blog"
            className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-colors ${
              loc.pathname.startsWith("/blog")
                ? "bg-teal text-white"
                : scrolled || loc.pathname !== "/"
                ? "text-teal-deep hover:bg-teal-pale"
                : "text-white/90 hover:bg-white/10"
            }`}
            data-testid="nav-blog"
          >
            {t.nav.blog}
          </Link>
          <a
            href="#contact"
            onClick={handleAnchor("contact")}
            className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-colors ${
              scrolled || loc.pathname !== "/"
                ? "text-teal-deep hover:bg-teal-pale"
                : "text-white/90 hover:bg-white/10"
            }`}
            data-testid="nav-contact"
          >
            {t.nav.contact}
          </a>
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          {/* Lang switch */}
          <div className="lang-pill" data-testid="language-switcher">
            <button
              onClick={() => setLang("en")}
              className={lang === "en" ? "active" : ""}
              data-testid="lang-en-btn"
              aria-label="English"
            >
              EN
            </button>
            <button
              onClick={() => setLang("id")}
              className={lang === "id" ? "active" : ""}
              data-testid="lang-id-btn"
              aria-label="Bahasa Indonesia"
            >
              ID
            </button>
          </div>

          <a
            href="https://wa.me/6281264882678?text=Halo%20PT%20Dira%20Baraka%20Mulia"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-br from-gold to-gold-light text-teal-deep font-bold text-[12px] tracking-wide shadow-md shadow-gold/30 hover:-translate-y-0.5 hover:shadow-gold/50 transition-all"
            data-testid="navbar-cta-btn"
          >
            <MessageCircle className="w-4 h-4" />
            {t.nav.cta}
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center ${
              scrolled || loc.pathname !== "/"
                ? "bg-teal-pale text-teal-deep"
                : "bg-white/10 text-white"
            }`}
            data-testid="mobile-menu-toggle"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-teal/10 px-5 py-4 flex flex-col gap-1 shadow-xl" data-testid="mobile-menu">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={handleAnchor(l.id)}
              className="py-3 px-4 rounded-lg text-teal-deep font-semibold hover:bg-teal-pale text-sm"
            >
              {l.label}
            </a>
          ))}
          <Link to="/blog" className="py-3 px-4 rounded-lg text-teal-deep font-semibold hover:bg-teal-pale text-sm">
            {t.nav.blog}
          </Link>
          <a href="#contact" onClick={handleAnchor("contact")} className="py-3 px-4 rounded-lg text-teal-deep font-semibold hover:bg-teal-pale text-sm">
            {t.nav.contact}
          </a>
          <a
            href="https://wa.me/6281264882678"
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-br from-gold to-gold-light text-teal-deep font-bold text-sm"
          >
            <MessageCircle className="w-4 h-4" /> {t.nav.cta}
          </a>
        </div>
      )}
    </header>
  );
}
