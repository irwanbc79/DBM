import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../contexts/LanguageContext";

export default function PrivacyPolicy() {
  const { lang } = useLang();

  useEffect(() => {
    document.title = lang === "id"
      ? "Kebijakan Privasi — PT. Dira Baraka Mulia"
      : "Privacy Policy — PT. Dira Baraka Mulia";
    window.scrollTo(0, 0);

    let link = document.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = "https://dira.co.id/privacy-policy";
  }, [lang]);

  const id = lang === "id";

  return (
    <main className="bg-[#fbfbf9] min-h-screen">
      {/* Header */}
      <section className="relative pt-32 pb-16 hero-gradient grain text-center">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-[11px] font-bold text-gold-light tracking-[0.18em] uppercase">
              {id ? "Dokumen Legal" : "Legal Document"}
            </span>
          </div>
          <h1 className="font-serif text-white text-[clamp(32px,5vw,56px)] leading-[1.1] font-bold tracking-tight">
            {id ? "Kebijakan Privasi" : "Privacy Policy"}
          </h1>
          <p className="mt-4 text-white/70 text-sm">
            {id ? "Terakhir diperbarui: 21 Mei 2026" : "Last updated: May 21, 2026"}
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-5 lg:px-10 py-16">
        <div className="bg-white rounded-3xl border border-teal/10 shadow-sm p-8 lg:p-12 prose prose-lg max-w-none not-prose text-[#2a3a38] text-[16px] leading-[1.85] space-y-8">

          <Section title={id ? "1. Pendahuluan" : "1. Introduction"}>
            {id
              ? 'PT. Dira Baraka Mulia (“kami”, “perusahaan”) berkomitmen untuk melindungi privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi yang Anda berikan saat menggunakan situs web dira.co.id.'
              : 'PT. Dira Baraka Mulia (“we”, “us”, “company”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect information you provide when using our website dira.co.id.'}
          </Section>

          <Section title={id ? "2. Informasi yang Kami Kumpulkan" : "2. Information We Collect"}>
            {id
              ? "Kami dapat mengumpulkan informasi berikut: (a) Informasi yang Anda berikan secara sukarela, seperti nama, alamat email, nomor telepon, dan pesan melalui formulir kontak atau WhatsApp. (b) Informasi teknis yang dikumpulkan secara otomatis, seperti alamat IP, jenis browser, halaman yang dikunjungi, dan durasi kunjungan melalui Google Analytics. (c) Informasi dari cookie yang dipasang oleh Google AdSense untuk menampilkan iklan yang relevan."
              : "We may collect the following information: (a) Information you voluntarily provide, such as name, email address, phone number, and messages via contact form or WhatsApp. (b) Technical information collected automatically, such as IP address, browser type, pages visited, and visit duration via Google Analytics. (c) Information from cookies placed by Google AdSense to display relevant advertisements."}
          </Section>

          <Section title={id ? "3. Penggunaan Informasi" : "3. How We Use Your Information"}>
            {id
              ? "Informasi yang kami kumpulkan digunakan untuk: (a) Merespons pertanyaan dan permintaan konsultasi Anda. (b) Meningkatkan kualitas layanan dan konten situs web. (c) Mengirimkan informasi yang relevan tentang layanan kami jika Anda telah memberikan persetujuan. (d) Memenuhi kewajiban hukum yang berlaku di Indonesia."
              : "We use collected information to: (a) Respond to your inquiries and consultation requests. (b) Improve the quality of our services and website content. (c) Send relevant information about our services if you have consented. (d) Comply with applicable legal obligations in Indonesia."}
          </Section>

          <Section title={id ? "4. Google AdSense & Cookie" : "4. Google AdSense & Cookies"}>
            {id
              ? "Situs ini menggunakan Google AdSense untuk menampilkan iklan. Google AdSense menggunakan cookie untuk menampilkan iklan berdasarkan kunjungan Anda sebelumnya ke situs ini dan situs lain. Anda dapat memilih untuk tidak menggunakan cookie yang dipersonalisasi dengan mengunjungi Setelan Iklan Google (https://www.google.com/settings/ads). Penggunaan Google AdSense diatur oleh Kebijakan Privasi Google (https://policies.google.com/privacy)."
              : "This site uses Google AdSense to display advertisements. Google AdSense uses cookies to serve ads based on your prior visits to this and other websites. You may opt out of personalized advertising by visiting Google's Ads Settings (https://www.google.com/settings/ads). Google AdSense use is governed by Google's Privacy Policy (https://policies.google.com/privacy)."}
          </Section>

          <Section title={id ? "5. Cookie" : "5. Cookies"}>
            {id
              ? "Cookie adalah file kecil yang disimpan di perangkat Anda. Situs ini menggunakan cookie untuk: (a) Menganalisis penggunaan situs melalui Google Analytics. (b) Menampilkan iklan yang relevan melalui Google AdSense. Anda dapat mengontrol penggunaan cookie melalui pengaturan browser Anda. Namun, menonaktifkan cookie dapat memengaruhi fungsionalitas situs."
              : "Cookies are small files stored on your device. This site uses cookies to: (a) Analyze site usage via Google Analytics. (b) Display relevant ads via Google AdSense. You can control cookie use through your browser settings. However, disabling cookies may affect site functionality."}
          </Section>

          <Section title={id ? "6. Berbagi Data dengan Pihak Ketiga" : "6. Third-Party Data Sharing"}>
            {id
              ? "Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada pihak ketiga. Kami dapat berbagi informasi dengan penyedia layanan tepercaya yang membantu kami mengoperasikan situs (Google Analytics, Google AdSense) sesuai dengan kebijakan privasi masing-masing pihak."
              : "We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating the site (Google Analytics, Google AdSense) in accordance with their respective privacy policies."}
          </Section>

          <Section title={id ? "7. Keamanan Data" : "7. Data Security"}>
            {id
              ? "Kami menggunakan langkah-langkah keamanan yang wajar untuk melindungi informasi Anda dari akses yang tidak sah, pengubahan, pengungkapan, atau penghancuran. Namun, tidak ada metode transmisi melalui internet yang 100% aman."
              : "We use reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure."}
          </Section>

          <Section title={id ? "8. Hak Anda" : "8. Your Rights"}>
            {id
              ? "Anda berhak untuk: (a) Mengakses informasi pribadi yang kami miliki tentang Anda. (b) Meminta koreksi atas informasi yang tidak akurat. (c) Meminta penghapusan informasi pribadi Anda. (d) Mencabut persetujuan yang telah Anda berikan. Untuk menggunakan hak-hak ini, hubungi kami melalui informasi kontak di bawah."
              : "You have the right to: (a) Access personal information we hold about you. (b) Request correction of inaccurate information. (c) Request deletion of your personal information. (d) Withdraw consent you have provided. To exercise these rights, contact us using the information below."}
          </Section>

          <Section title={id ? "9. Perubahan Kebijakan" : "9. Policy Changes"}>
            {id
              ? "Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diberitahukan melalui pembaruan tanggal di bagian atas halaman ini. Penggunaan situs yang berkelanjutan setelah perubahan dianggap sebagai persetujuan atas kebijakan yang diperbarui."
              : "We may update this Privacy Policy from time to time. Changes will be notified by updating the date at the top of this page. Continued use of the site after changes constitutes acceptance of the updated policy."}
          </Section>

          <Section title={id ? "10. Hubungi Kami" : "10. Contact Us"}>
            {id
              ? "Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, hubungi kami:"
              : "If you have questions about this Privacy Policy, contact us:"}
            <div className="mt-3 space-y-1 text-sm">
              <p><strong>PT. Dira Baraka Mulia</strong></p>
              <p>Grand Jati Junction Mall, Level P1 No. 3A, Jl. Perintis Kemerdekaan, Medan, Sumatera Utara 20231</p>
              <p>Email: <a href="mailto:info@dira.co.id" className="text-teal underline">info@dira.co.id</a></p>
              <p>WhatsApp: <a href="https://wa.me/6281264882678" className="text-teal underline">+62 812-6488-2678</a></p>
            </div>
          </Section>

          <div className="pt-6 border-t border-teal/10">
            <Link to="/" className="inline-flex items-center gap-2 text-teal font-bold text-sm hover:underline">
              ← {id ? "Kembali ke Beranda" : "Back to Home"}
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

const Section = ({ title, children }) => (
  <div>
    <h2 className="font-serif text-teal-deep text-xl font-bold mb-3">{title}</h2>
    <p className="text-[#4a5e5c] leading-relaxed">{children}</p>
  </div>
);
