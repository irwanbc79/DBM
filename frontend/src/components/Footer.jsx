import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, MessageCircle, Instagram, Facebook, Linkedin } from "lucide-react";
import { useLang } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-[#051c18] text-white relative overflow-hidden" data-testid="site-footer">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-teal/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-gold/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-5 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-1 ring-gold/40 bg-teal-deep">
                <img
                  src="/logo.jpg"
                  alt="PT. Dira Baraka Mulia"
                  className="w-full h-full object-cover scale-[2.2] -translate-y-[3%]"
                  draggable={false}
                />
              </div>
              <div className="leading-tight">
                <div className="font-serif font-bold text-white text-base">PT. Dira Baraka Mulia</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-gold-light font-semibold">Trusted Trading</div>
              </div>
            </div>
            <p className="text-white/65 text-sm leading-relaxed">{t.footer.tagline}</p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-teal-deep transition-all"
                  aria-label="social"
                  data-testid={`social-${i}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-gold-light text-base mb-5 font-bold">{t.footer.quickLinks}</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="link-underline text-white/75 hover:text-gold-light">{t.nav.services}</a></li>
              <li><a href="#commodities" className="link-underline text-white/75 hover:text-gold-light">{t.nav.commodities}</a></li>
              <li><a href="#portfolio" className="link-underline text-white/75 hover:text-gold-light">{t.nav.portfolio}</a></li>
              <li><a href="#legality" className="link-underline text-white/75 hover:text-gold-light">{t.nav.legality}</a></li>
              <li><a href="/blog" className="link-underline text-white/75 hover:text-gold-light">{t.nav.blog}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-gold-light text-base mb-5 font-bold">{t.footer.services}</h4>
            <ul className="space-y-3 text-sm text-white/75">
              {t.services.items.map((s, i) => (
                <li key={i}>{s.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-gold-light text-base mb-5 font-bold">{t.nav.contact}</h4>
            <ul className="space-y-4 text-sm text-white/75">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-gold-light flex-shrink-0" />
                <span className="leading-relaxed">Grand Jati Junction Mall, Level P1 No. 3A, Medan</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-gold-light flex-shrink-0" />
                <a href="tel:+6281264882678" className="hover:text-gold-light">+62 812-6488-2678</a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-gold-light flex-shrink-0" />
                <a href="mailto:dirabarakamulia@gmail.com" className="hover:text-gold-light break-all">dirabarakamulia@gmail.com</a>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="w-4 h-4 mt-0.5 text-gold-light flex-shrink-0" />
                <a href="https://wa.me/6281264882678" target="_blank" rel="noreferrer" className="hover:text-gold-light">WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <span>© {new Date().getFullYear()} PT. Dira Baraka Mulia. {t.footer.rights}</span>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-gold-light transition-colors">Privacy Policy</Link>
            <span>Powered by: <a href="https://morabangun.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">morabangun.com</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
