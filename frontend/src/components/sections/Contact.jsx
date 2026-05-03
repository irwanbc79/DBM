import { useState } from "react";
import { Clock, Mail, MapPin, Phone, Send, User } from "lucide-react";
import { useLang } from "../../contexts/LanguageContext";

const SERVICES = [
  "Jasa Ekspor",
  "Jasa Impor",
  "Layanan Undername",
  "Perdagangan Umum",
  "Kepabeanan & Dokumen",
  "Konsultasi Perdagangan",
  "Lainnya",
];

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `*Inquiry — PT. Dira Baraka Mulia*`,
      ``,
      `*${t.contact.f_name}:* ${form.name}`,
      form.company ? `*${t.contact.f_company}:* ${form.company}` : null,
      `*${t.contact.f_phone}:* ${form.phone}`,
      form.email ? `*${t.contact.f_email}:* ${form.email}` : null,
      `*${t.contact.f_service}:* ${form.service}`,
      ``,
      form.message,
    ]
      .filter(Boolean)
      .join("\n");
    const url = `https://wa.me/6281264882678?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener");
  };

  return (
    <section id="contact" className="bg-white py-28" data-testid="contact-section">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Info side */}
        <div className="reveal">
          <div className="section-tag">{t.contact.tag}</div>
          <h3 className="font-serif text-teal-deep text-[clamp(28px,4vw,42px)] leading-[1.1] font-bold mb-5">
            {t.contact.title}
          </h3>
          <p className="text-muted-foreground text-base leading-relaxed mb-8">{t.contact.lead}</p>

          <ul className="space-y-5">
            <li className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-teal-pale text-teal-deep flex-shrink-0 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] text-teal/70 font-bold mb-1">{t.contact.address}</p>
                <p className="text-sm text-teal-deep whitespace-pre-line leading-relaxed">{t.contact.addressLine}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-teal-pale text-teal-deep flex-shrink-0 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] text-teal/70 font-bold mb-1">{t.contact.phone}</p>
                <a href="https://wa.me/6281264882678" target="_blank" rel="noreferrer" className="font-serif text-teal-deep text-lg font-bold link-underline">
                  +62 812-6488-2678
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-teal-pale text-teal-deep flex-shrink-0 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] text-teal/70 font-bold mb-1">{t.contact.email}</p>
                <a href="mailto:dirabarakamulia@gmail.com" className="text-sm text-teal-deep link-underline break-all">
                  dirabarakamulia@gmail.com
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-teal-pale text-teal-deep flex-shrink-0 flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] text-teal/70 font-bold mb-1">{t.contact.director}</p>
                <p className="text-sm text-teal-deep">Edy Serdawanto, S.E.</p>
              </div>
            </li>
          </ul>

          <div className="mt-7 p-5 bg-teal-pale rounded-xl border-l-4 border-teal flex gap-3">
            <Clock className="w-5 h-5 text-teal-deep flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[12px] text-teal-deep font-bold mb-1">{t.contact.hours}</p>
              <p className="text-[13px] text-muted-foreground whitespace-pre-line leading-relaxed">{t.contact.hoursLine}</p>
            </div>
          </div>

          {/* Google Map embed */}
          <div className="mt-7 reveal">
            <p className="text-[11px] uppercase tracking-[0.15em] text-teal/70 font-bold mb-3">📍 {t.contact.mapTitle}</p>
            <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-teal/10 shadow-lg">
              <iframe
                title="Office Map"
                src="https://www.google.com/maps?q=Grand+Jati+Junction+Mall+Medan&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
                data-testid="office-map-iframe"
              />
            </div>
          </div>
        </div>

        {/* Form side */}
        <div className="reveal bg-gradient-to-br from-teal-pale to-white border border-teal/10 rounded-3xl p-8 lg:p-10 shadow-[0_20px_60px_rgba(13,85,70,0.06)]">
          <h3 className="font-serif text-teal-deep text-2xl font-bold mb-6">{t.contact.formTitle}</h3>
          <form onSubmit={onSubmit} className="flex flex-col gap-4" data-testid="contact-form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField label={t.contact.f_name} required>
                <input name="name" required value={form.name} onChange={onChange} placeholder="Nama" data-testid="form-name" className="form-input" />
              </FormField>
              <FormField label={t.contact.f_company}>
                <input name="company" value={form.company} onChange={onChange} placeholder="PT / CV" data-testid="form-company" className="form-input" />
              </FormField>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField label={t.contact.f_phone} required>
                <input name="phone" type="tel" required value={form.phone} onChange={onChange} placeholder="08xxx" data-testid="form-phone" className="form-input" />
              </FormField>
              <FormField label={t.contact.f_email}>
                <input name="email" type="email" value={form.email} onChange={onChange} placeholder="email@domain.com" data-testid="form-email" className="form-input" />
              </FormField>
            </div>

            <FormField label={t.contact.f_service} required>
              <select name="service" required value={form.service} onChange={onChange} data-testid="form-service" className="form-input">
                <option value="">{t.contact.f_servicePlaceholder}</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </FormField>

            <FormField label={t.contact.f_message} required>
              <textarea name="message" required rows={5} value={form.message} onChange={onChange} placeholder={t.contact.f_msgPlaceholder} data-testid="form-message" className="form-input resize-none" />
            </FormField>

            <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-to-br from-teal-deep to-teal text-white font-bold text-sm hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal/30 transition-all" data-testid="form-submit">
              <Send className="w-4 h-4" />
              {t.contact.submit}
            </button>
          </form>

          {/* Logo brand block */}
          <div className="mt-10 pt-8 border-t border-teal/10 flex flex-col items-center gap-4">
            <img
              src="/logo.jpg"
              alt="PT. Dira Baraka Mulia"
              className="w-36 h-auto object-contain opacity-90"
            />
            <div className="text-center">
              <p className="font-serif text-teal-deep text-xl font-bold tracking-wide">
                DIRA BARAKA MULIA
              </p>
              <p className="text-[11px] uppercase tracking-[0.25em] text-teal/60 font-semibold mt-1">
                Trusted Trading Company
              </p>
              <p className="text-[12px] text-muted-foreground mt-3 max-w-[260px] mx-auto leading-relaxed italic">
                "Jembatan bisnis Anda ke pasar global."
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          padding: 12px 14px;
          font-size: 14px;
          background: white;
          border: 1px solid #d4e2df;
          border-radius: 10px;
          color: #083d33;
          font-family: inherit;
          transition: border-color .2s, box-shadow .2s;
        }
        .form-input:focus {
          outline: none;
          border-color: #1a7a6a;
          box-shadow: 0 0 0 3px rgba(26,122,106,.12);
        }
      `}</style>
    </section>
  );
}

const FormField = ({ label, required, children }) => (
  <label className="flex flex-col gap-1.5">
    <span className="text-[12px] font-bold text-teal-deep uppercase tracking-[0.08em]">
      {label} {required && <span className="text-gold">*</span>}
    </span>
    {children}
  </label>
);
