// Bilingual blog posts — export-import, trade, commodities
// Each post: slug, cover, date, readTime, views, category, tags[], author, title{en,id}, excerpt{en,id}, body{en,id}

const editor = {
  name: { en: "Dira Editorial Team", id: "Redaksi Dira" },
  role: { en: "Trade Desk — Medan", id: "Meja Redaksi — Medan" },
  bio: {
    en: "Field operators and trade analysts behind every PT. Dira Baraka Mulia shipment. Writing from the port, not the boardroom.",
    id: "Tim operasional dan analis perdagangan di balik setiap pengiriman PT. Dira Baraka Mulia. Menulis dari pelabuhan, bukan ruang rapat.",
  },
};

export const blogPosts = [
  {
    slug: "panduan-undername-impor-2025",
    cover: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1400&q=80",
    date: "2025-11-12",
    readTime: 7,
    views: 2843,
    category: { en: "Undername", id: "Undername" },
    tags: ["undername", "api-u", "import", "regulation", "beginner"],
    author: editor,
    title: {
      en: "The Complete Guide to Undername Import Service in Indonesia (2025)",
      id: "Panduan Lengkap Layanan Undername Impor di Indonesia (2025)",
    },
    excerpt: {
      en: "Don't have an API-U license yet? Here's how undername import works, when to use it, and what to look for in a partner.",
      id: "Belum punya izin API-U? Pahami cara kerja undername impor, kapan menggunakannya, dan apa yang harus diperhatikan saat memilih mitra.",
    },
    body: {
      en: [
        "For many emerging Indonesian businesses, importing goods feels out of reach because they don't yet have an API-U (Angka Pengenal Importir Umum) license. This is exactly where the undername import service comes in.",
        "**What is Undername Import?** It is a legal arrangement where a registered importer (with API-U) imports goods on behalf of another business that does not yet hold the license. The goods, the cost, and the commercial responsibility belong to the buyer; only the customs identity is borrowed.",
        "**When does undername make sense?** First-time importers testing demand. Seasonal importers who don't import frequently enough to justify their own license. Or any business that needs goods cleared quickly while their own license is still being processed.",
        "**What to verify before signing.** Check the partner's NIB and tax ID, confirm KBLI codes match the goods being imported, ask for a sample PIB (Import Declaration), and review the fee structure carefully — undername fees are usually 1.5%–3% of CIF, plus customs and PPN as pass-through costs.",
        "At PT. Dira Baraka Mulia we operate undername imports under NIB 2103230032415 with API-U authority valid across Indonesia. We work with partners across Sumatra, Java, and Kalimantan, handling everything from BC 2.0 to door delivery.",
      ],
      id: [
        "Bagi banyak pelaku bisnis Indonesia yang sedang berkembang, mengimpor barang terasa sulit karena belum memiliki izin API-U (Angka Pengenal Importir Umum). Di sinilah layanan undername impor menjadi solusi.",
        "**Apa itu Undername Impor?** Skema legal di mana importir terdaftar (yang sudah memiliki API-U) mengimpor barang atas nama pihak lain yang belum memiliki izin. Barang, biaya, dan tanggung jawab komersial tetap milik pembeli; hanya identitas kepabeanan yang dipinjamkan.",
        "**Kapan undername paling tepat digunakan?** Importir pemula yang ingin menguji pasar. Importir musiman yang tidak rutin. Atau bisnis yang butuh barang segera dipabeankan sementara izin sendiri masih diproses.",
        "**Apa yang harus diverifikasi sebelum kontrak.** Cek NIB dan NPWP mitra, pastikan kode KBLI sesuai dengan jenis barang, minta contoh PIB (Pemberitahuan Impor Barang), dan tinjau struktur biaya — fee undername umumnya 1,5%–3% dari nilai CIF, ditambah bea masuk dan PPN sebagai pass-through.",
        "PT. Dira Baraka Mulia menjalankan layanan undername impor di bawah NIB 2103230032415 dengan otoritas API-U di seluruh Indonesia. Kami menangani mitra di Sumatera, Jawa, hingga Kalimantan — dari BC 2.0 sampai pengiriman door-to-door.",
      ],
    },
  },
  {
    slug: "ekspor-kopi-indonesia-pasar-global",
    cover: "https://images.unsplash.com/photo-1442550528053-c431ecb55509?auto=format&fit=crop&w=1400&q=80",
    date: "2025-10-28",
    readTime: 6,
    views: 3921,
    category: { en: "Export", id: "Ekspor" },
    tags: ["export", "coffee", "commodities", "markets", "specialty"],
    author: editor,
    title: {
      en: "Indonesian Coffee Export: Five Markets That Are Booming Right Now",
      id: "Ekspor Kopi Indonesia: Lima Pasar yang Sedang Naik Daun",
    },
    excerpt: {
      en: "Specialty coffee from Sumatra and Sulawesi is in high demand. Here are the export destinations that should be on every Indonesian coffee trader's radar.",
      id: "Kopi spesialti Sumatera dan Sulawesi sedang banyak dicari. Inilah pasar ekspor yang harus masuk radar setiap pedagang kopi Indonesia.",
    },
    body: {
      en: [
        "Indonesia ranks among the top four coffee producers in the world, and demand for our single-origin beans — Mandheling, Gayo, Toraja, Java — keeps climbing in 2025. If you produce coffee or roast at scale, here are the markets to watch.",
        "**1. United States.** Specialty buyers continue to prize Sumatran and Sulawesi beans. Expect to provide ICO certificates, COO Form A, and full traceability documentation.",
        "**2. Japan.** Premium pricing, but extremely strict on residue testing and moisture content. Ideal for washed-process Gayo and Toraja.",
        "**3. South Korea.** Rapidly growing third-wave market. Smaller order sizes, shorter shipping times, very direct relationships.",
        "**4. Germany & Netherlands.** EU buyers care strongly about EUDR (Deforestation-free) compliance. Make sure your supply chain has GPS plot-level evidence.",
        "**5. Australia.** Close, fast, and aligned with our harvest season. Relationships often start with sample shipments under 60 kg before scaling.",
        "Each market has unique paperwork, packaging, and pricing dynamics. Our team handles PEB, COO, phytosanitary certificates, and shipping arrangements end-to-end.",
      ],
      id: [
        "Indonesia menduduki empat besar produsen kopi dunia, dan permintaan biji single-origin kami — Mandheling, Gayo, Toraja, Java — terus meningkat di 2025. Jika Anda produsen atau roaster skala besar, inilah pasar yang harus diawasi.",
        "**1. Amerika Serikat.** Pembeli spesialti tetap mengincar biji Sumatera dan Sulawesi. Siapkan sertifikat ICO, COO Form A, dan dokumen traceability lengkap.",
        "**2. Jepang.** Harga premium, namun sangat ketat soal pengujian residu dan kadar air. Cocok untuk Gayo dan Toraja proses washed.",
        "**3. Korea Selatan.** Pasar third-wave yang berkembang pesat. Order lebih kecil, pengiriman lebih cepat, relasi sangat langsung.",
        "**4. Jerman & Belanda.** Pembeli Uni Eropa sangat ketat soal kepatuhan EUDR (Deforestation-free). Pastikan rantai pasok Anda memiliki bukti GPS hingga plot.",
        "**5. Australia.** Dekat, cepat, dan selaras dengan musim panen kita. Biasanya diawali dengan pengiriman sampel di bawah 60 kg sebelum naik skala.",
        "Setiap pasar memiliki dokumen, pengemasan, dan dinamika harga yang berbeda. Tim kami menangani PEB, COO, sertifikat phytosanitary, dan pengaturan pengiriman secara end-to-end.",
      ],
    },
  },
  {
    slug: "kepabeanan-pib-langkah-demi-langkah",
    cover: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1400&q=80",
    date: "2025-10-15",
    readTime: 8,
    views: 1784,
    category: { en: "Customs", id: "Kepabeanan" },
    tags: ["customs", "pib", "import", "insw", "documents"],
    author: editor,
    title: {
      en: "PIB Customs Declaration in Indonesia: A Step-by-Step Walkthrough",
      id: "PIB di Indonesia: Panduan Langkah Demi Langkah",
    },
    excerpt: {
      en: "From document preparation to red-channel inspection — what really happens between your shipment arriving and clearing customs.",
      id: "Dari persiapan dokumen hingga inspeksi jalur merah — apa yang sebenarnya terjadi antara barang tiba dan keluar dari bea cukai.",
    },
    body: {
      en: [
        "PIB (Pemberitahuan Impor Barang) is the import declaration filed through the INSW/CEISA system. Getting it right speeds up clearance; getting it wrong adds days and unexpected costs.",
        "**Step 1 – Pre-arrival preparation.** Commercial invoice, packing list, B/L or AWB, COO if applicable, HS code, and proof of payment must all align with the actual cargo.",
        "**Step 2 – HS code classification.** This single decision determines duty, PPN, PPnBM, and any special restrictions. A 10-digit HS code mismatch is the #1 reason for delays.",
        "**Step 3 – Filing PIB.** Submit via CEISA (INSW). The system returns one of three lanes: Green (auto-release), Yellow (document check), or Red (physical inspection).",
        "**Step 4 – Payment of duty + PPN + PPh 22.** This must be settled before the SPPB (release order) is issued.",
        "**Step 5 – Inspection (if Yellow/Red).** Yellow lane requires only documents; red lane requires physical inspection at the port. Plan an extra 1–3 working days for red lane.",
        "**Step 6 – SPPB & delivery.** Once customs releases the goods, our trucking partner picks up at port and delivers to your warehouse.",
        "Most delays come from inconsistent paperwork or wrong HS codes. We pre-classify every shipment before it leaves origin, which dramatically reduces red-lane incidents.",
      ],
      id: [
        "PIB (Pemberitahuan Impor Barang) adalah pernyataan impor yang diajukan melalui sistem INSW/CEISA. Diisi benar, clearance cepat. Diisi keliru, hari bertambah dan biaya membengkak.",
        "**Langkah 1 – Persiapan sebelum kedatangan.** Invoice komersial, packing list, B/L atau AWB, COO bila ada, kode HS, dan bukti pembayaran harus selaras dengan barang sebenarnya.",
        "**Langkah 2 – Klasifikasi kode HS.** Satu keputusan ini menentukan bea masuk, PPN, PPnBM, dan pembatasan khusus. Kode HS 10 digit yang salah adalah penyebab #1 keterlambatan.",
        "**Langkah 3 – Pengajuan PIB.** Submit melalui CEISA (INSW). Sistem mengembalikan salah satu dari tiga jalur: Hijau (auto-release), Kuning (cek dokumen), atau Merah (inspeksi fisik).",
        "**Langkah 4 – Pembayaran bea masuk + PPN + PPh 22.** Wajib dilunasi sebelum SPPB (Surat Persetujuan Pengeluaran Barang) diterbitkan.",
        "**Langkah 5 – Inspeksi (jika Kuning/Merah).** Jalur kuning hanya verifikasi dokumen; jalur merah butuh pemeriksaan fisik di pelabuhan. Sediakan 1–3 hari kerja tambahan untuk jalur merah.",
        "**Langkah 6 – SPPB & pengiriman.** Setelah barang dilepaskan, mitra trucking kami menjemput di pelabuhan dan mengantar ke gudang Anda.",
        "Mayoritas keterlambatan berasal dari dokumen yang tidak konsisten atau kode HS yang salah. Kami melakukan pra-klasifikasi setiap pengiriman sebelum berangkat dari origin — ini sangat menurunkan insiden jalur merah.",
      ],
    },
  },
  {
    slug: "logistik-pelabuhan-belawan",
    cover: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1400&q=80",
    date: "2025-09-30",
    readTime: 5,
    views: 1203,
    category: { en: "Logistics", id: "Logistik" },
    tags: ["logistics", "belawan", "ports", "sumatra", "routes"],
    author: editor,
    title: {
      en: "Belawan Port: Why It's the Underrated Gateway of Western Indonesia",
      id: "Pelabuhan Belawan: Gerbang Indonesia Barat yang Sering Diremehkan",
    },
    excerpt: {
      en: "Tanjung Priok dominates headlines, but Belawan offers shorter routes to South Asia and lower congestion for many trade lanes.",
      id: "Tanjung Priok mendominasi pemberitaan, tapi Belawan menawarkan rute lebih pendek ke Asia Selatan dan kemacetan lebih rendah.",
    },
    body: {
      en: [
        "Located in North Sumatra, Belawan is Indonesia's third-largest port by container throughput — yet shippers from outside Sumatra often overlook it. Here's why that's a missed opportunity.",
        "**Geography.** Belawan sits directly on the Strait of Malacca, the world's busiest shipping lane. Vessels heading to India, the Middle East, and Europe pass within hours. Routes from Java often add 2–3 days.",
        "**Congestion.** Tanjung Priok dwell time spikes during peak season. Belawan typically runs at lower utilization, which means faster yard turnover and fewer demurrage surprises.",
        "**Specialization.** Belawan is the natural port for palm oil, rubber, coffee, and tobacco — all products Sumatra produces in volume. Equipment, warehouses, and inspection capacity are tuned for these commodities.",
        "**Last-mile logistics.** Toll roads from Medan to Belawan are smooth. Truck cycle times are consistently under 90 minutes during business hours.",
        "If your supply chain originates in Sumatra or you ship to South Asia or the Middle East, ask us to model a Belawan routing — sometimes the savings are 7–14 days.",
      ],
      id: [
        "Terletak di Sumatera Utara, Belawan adalah pelabuhan kontainer terbesar ketiga di Indonesia — namun shipper dari luar Sumatera sering mengabaikannya. Berikut alasannya kenapa itu peluang yang terlewat.",
        "**Geografi.** Belawan berada langsung di Selat Malaka, jalur pelayaran tersibuk di dunia. Kapal menuju India, Timur Tengah, dan Eropa lewat dalam hitungan jam. Dari Jawa, perjalanan biasanya bertambah 2–3 hari.",
        "**Kemacetan.** Dwell time Tanjung Priok melonjak saat musim puncak. Belawan umumnya beroperasi pada utilisasi lebih rendah — perputaran yard lebih cepat dan minim kejutan demurrage.",
        "**Spesialisasi.** Belawan adalah pelabuhan alami untuk kelapa sawit, karet, kopi, dan tembakau — semua produk yang diproduksi Sumatera dalam volume besar. Alat, gudang, dan inspeksi sudah dirancang untuk komoditas ini.",
        "**Last-mile logistik.** Tol Medan–Belawan lancar. Truck cycle time konsisten di bawah 90 menit pada jam kerja.",
        "Jika supply chain Anda berasal dari Sumatera atau dikirim ke Asia Selatan dan Timur Tengah, mintalah kami memodelkan routing via Belawan — terkadang penghematannya 7–14 hari.",
      ],
    },
  },
  {
    slug: "regulasi-eudr-eksportir-sawit",
    cover: "https://images.unsplash.com/photo-1605300045061-a2cca0deb38d?auto=format&fit=crop&w=1400&q=80",
    date: "2025-09-08",
    readTime: 6,
    views: 2156,
    category: { en: "Regulation", id: "Regulasi" },
    tags: ["regulation", "eudr", "palm-oil", "sustainability", "eu"],
    author: editor,
    title: {
      en: "EUDR & Indonesian Palm Oil: What Exporters Must Prepare",
      id: "EUDR & Sawit Indonesia: Apa yang Harus Disiapkan Eksportir",
    },
    excerpt: {
      en: "The EU Deforestation Regulation enters enforcement in 2025. Here's the practical checklist for Indonesian palm oil exporters.",
      id: "Regulasi Anti-Deforestasi Uni Eropa mulai berlaku 2025. Inilah checklist praktis untuk eksportir sawit Indonesia.",
    },
    body: {
      en: [
        "EUDR (EU Deforestation Regulation) requires importers to prove that commodities entering the EU were not produced on land deforested after 31 December 2020. For palm oil exporters, this is a significant compliance lift.",
        "**1. Plot-level GPS coordinates.** Every parcel of supply must be mapped to coordinates. For smallholder networks, this means an organized data collection program — usually starting with mill catchments.",
        "**2. Risk classification.** Indonesia is currently classified as 'standard risk'. Documentation must show that each plot was either pre-2020 land use or sustainably managed.",
        "**3. Due diligence statement.** Every shipment requires a Due Diligence Statement (DDS) registered in the EU's TRACES system before customs release.",
        "**4. Chain of custody.** Mass-balance and segregated supply chains both require third-party verification. Mills, refiners, and traders need aligned documentation.",
        "**5. Sanctions.** Non-compliance can result in goods being seized at EU ports plus fines up to 4% of EU annual turnover.",
        "If you ship CPO, RBD palm olein, or palm derivatives to the EU, talk to us about pre-shipment DDS preparation. The pain of last-minute scramble at the port is entirely avoidable.",
      ],
      id: [
        "EUDR (Regulasi Anti-Deforestasi Uni Eropa) mengharuskan importir membuktikan bahwa komoditas yang masuk ke UE tidak diproduksi di lahan yang dideforestasi setelah 31 Desember 2020. Untuk eksportir sawit, ini compliance yang berat.",
        "**1. Koordinat GPS tingkat plot.** Setiap parsel pasokan harus dipetakan ke koordinat. Untuk jaringan smallholder, ini berarti program pendataan terorganisir — biasanya dimulai dari catchment pabrik.",
        "**2. Klasifikasi risiko.** Indonesia saat ini diklasifikasikan sebagai 'risiko standar'. Dokumentasi harus menunjukkan bahwa setiap plot merupakan penggunaan lahan pra-2020 atau dikelola secara berkelanjutan.",
        "**3. Pernyataan due diligence.** Setiap pengiriman memerlukan Due Diligence Statement (DDS) yang didaftarkan di sistem TRACES Uni Eropa sebelum pelepasan bea cukai.",
        "**4. Rantai kepemilikan.** Mass-balance dan supply chain tersegregasi sama-sama memerlukan verifikasi pihak ketiga. PKS, refinery, dan trader memerlukan dokumentasi selaras.",
        "**5. Sanksi.** Ketidakpatuhan dapat berakibat penyitaan barang di pelabuhan UE plus denda hingga 4% dari omzet UE tahunan.",
        "Jika Anda mengekspor CPO, RBD palm olein, atau turunan sawit ke UE, bicarakan dengan kami soal persiapan DDS pre-shipment. Sengkarut last-minute di pelabuhan sangat bisa dihindari.",
      ],
    },
  },
  {
    slug: "kode-hs-panduan-klasifikasi-2025",
    cover: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    date: "2025-12-05",
    readTime: 9,
    views: 3512,
    category: { en: "Customs", id: "Kepabeanan" },
    tags: ["hs-code", "customs", "classification", "import", "duty"],
    author: editor,
    title: {
      en: "HS Code Classification in Indonesia: How One Wrong Digit Costs You Millions",
      id: "Klasifikasi Kode HS di Indonesia: Satu Digit Salah Bisa Merugikan Jutaan Rupiah",
    },
    excerpt: {
      en: "The 10-digit HS code is the spine of every import declaration. Get it right and goods flow; get it wrong and you face delays, audits, or penalties.",
      id: "Kode HS 10 digit adalah tulang punggung setiap deklarasi impor. Benar, barang lancar; salah, siap menghadapi keterlambatan, audit, atau denda.",
    },
    body: {
      en: [
        "Indonesia uses the BTKI (Buku Tarif Kepabeanan Indonesia), based on the global Harmonized System, to classify every imported or exported product into a 10-digit code. That code determines your duty rate, PPN, PPh 22, and any non-tariff restrictions. One wrong digit can change your duty from 0% to 15% — or flag your shipment for a physical inspection.",
        "**How the HS code structure works.** The first 6 digits are universal (aligned with the WCO Harmonized System). Digits 7–8 are ASEAN-level (AHTN). Digits 9–10 are Indonesia-specific sub-headings used for domestic tariff differentiation. Most importers only look at 6 digits — the last 4 are where the real cost differences hide.",
        "**Common misclassification traps.** Food supplements classified as food (lower duty) vs. pharmaceuticals (different BPOM requirements). Used machinery classified as new. Raw materials classified as finished goods. These aren't always intentional — the BTKI has over 17,000 headings and many descriptions overlap.",
        "**How Customs audits classification.** DJBC uses post-clearance audit (audit pasca impor) to review up to 3 years of historical shipments. If they find systematic misclassification, they can retroactively apply back duties plus fines of 100–1000% of the underpaid duty. This is not hypothetical — it happens regularly to importers who self-classify without expert review.",
        "**How to get it right.** Use the INSW portal's tariff search as a starting point. Cross-check with the official BTKI 2022 book. For complex products, file a formal BTI (Binding Tariff Information) request with DJBC — it gives legal certainty for 3 years. For ongoing shipments, use a licensed PPJK (customs broker) who is accountable for classification accuracy.",
        "**Our pre-classification service.** At PT. Dira Baraka Mulia, every shipment we handle goes through a pre-classification review before the cargo departs origin. We catch mismatches at the invoice stage — before they become customs problems. If you're self-filing, we also offer standalone HS classification consulting.",
        "The cost of getting classification right is a few hours of expert review. The cost of getting it wrong is months of dispute and bills you didn't budget for.",
      ],
      id: [
        "Indonesia menggunakan BTKI (Buku Tarif Kepabeanan Indonesia), berdasarkan Harmonized System global, untuk mengklasifikasikan setiap produk impor atau ekspor ke dalam kode 10 digit. Kode itulah yang menentukan tarif bea masuk, PPN, PPh 22, dan larangan non-tarif. Satu digit salah bisa mengubah bea masuk dari 0% menjadi 15% — atau memicu pemeriksaan fisik atas barang Anda.",
        "**Cara kerja struktur kode HS.** Enam digit pertama bersifat universal (selaras dengan Harmonized System WCO). Digit 7–8 adalah level ASEAN (AHTN). Digit 9–10 adalah sub-pos khusus Indonesia untuk diferensiasi tarif domestik. Kebanyakan importir hanya melihat 6 digit — padahal 4 digit terakhir adalah tempat perbedaan biaya tersembunyi.",
        "**Jebakan misklaasifikasi yang sering terjadi.** Suplemen makanan diklasifikasikan sebagai pangan (bea lebih rendah) vs. farmasi (persyaratan BPOM berbeda). Mesin bekas diklasifikasikan sebagai baru. Bahan baku diklasifikasikan sebagai barang jadi. Ini tidak selalu disengaja — BTKI memiliki lebih dari 17.000 pos dan banyak deskripsi yang tumpang tindih.",
        "**Cara Bea Cukai mengaudit klasifikasi.** DJBC menggunakan audit pasca impor untuk meninjau hingga 3 tahun pengiriman historis. Jika ditemukan misklaasifikasi sistematis, mereka dapat menerapkan kembali bea tertunggak ditambah denda 100–1000% dari bea yang kurang dibayar. Ini bukan teori — ini terjadi secara rutin pada importir yang mengklasifikasikan sendiri tanpa review ahli.",
        "**Cara mendapatkan klasifikasi yang benar.** Gunakan pencarian tarif di portal INSW sebagai titik awal. Cocokkan dengan buku BTKI 2022 resmi. Untuk produk kompleks, ajukan permohonan BTI (Binding Tariff Information) resmi ke DJBC — memberikan kepastian hukum selama 3 tahun. Untuk pengiriman rutin, gunakan PPJK berlisensi yang bertanggung jawab atas akurasi klasifikasi.",
        "**Layanan pre-klasifikasi kami.** Di PT. Dira Baraka Mulia, setiap pengiriman yang kami tangani melalui review pre-klasifikasi sebelum kargo berangkat dari asal. Kami mendeteksi ketidaksesuaian di tahap invoice — sebelum menjadi masalah bea cukai. Jika Anda self-filing, kami juga menawarkan konsultasi klasifikasi HS secara terpisah.",
        "Biaya untuk mendapatkan klasifikasi yang benar adalah beberapa jam review ahli. Biaya untuk salah adalah berbulan-bulan sengketa dan tagihan yang tidak pernah Anda anggarkan.",
      ],
    },
  },
  {
    slug: "ekspor-sawit-cpo-indonesia-2025",
    cover: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1400&q=80",
    date: "2025-11-28",
    readTime: 7,
    views: 2987,
    category: { en: "Export", id: "Ekspor" },
    tags: ["export", "palm-oil", "cpo", "commodities", "sumatra"],
    author: editor,
    title: {
      en: "Exporting CPO & Palm Oil Derivatives from Sumatra: Documents, Duties & Market Access",
      id: "Ekspor CPO & Turunan Sawit dari Sumatera: Dokumen, Pungutan & Akses Pasar",
    },
    excerpt: {
      en: "Palm oil is Indonesia's top export commodity. But the levy structure, PEB requirements, and destination-specific compliance make it deceptively complex.",
      id: "Sawit adalah komoditas ekspor utama Indonesia. Namun struktur pungutan, persyaratan PEB, dan kepatuhan per tujuan membuatnya sangat kompleks.",
    },
    body: {
      en: [
        "Indonesia supplies roughly 60% of the world's palm oil. North Sumatra alone — home base for PT. Dira Baraka Mulia — is one of the largest producing regions. But exporting CPO (Crude Palm Oil), RBD Olein, or any palm derivative involves a layered compliance process that trips up even experienced exporters.",
        "**Export Levy (Pungutan Ekspor).** Indonesia applies a progressive export levy on palm oil products, collected by BPDPKS. The rate changes monthly based on the reference price set by the Ministry of Trade. In 2025, levy rates for CPO range from USD 33–85/MT depending on the month's reference price. Budget this as a variable cost — not a fixed one.",
        "**Export Duty (Bea Keluar).** Separate from the levy, bea keluar is also applied progressively. At reference prices above USD 680/MT, the duty is 18%. Below USD 680/MT, it drops to 0%. Both levy and duty are paid before the PEB (Pemberitahuan Ekspor Barang) is approved.",
        "**Key export documents.** PEB filed via CEISA, commercial invoice and packing list, Phytosanitary Certificate (for fresh derivatives), Certificate of Origin (GSTP Form D or Form A for preferential tariffs), Bill of Lading, and for EU destinations — EUDR Due Diligence Statement.",
        "**Market access nuances.** India applies anti-dumping measures on refined palm oil from Indonesia — raw CPO is preferred. China requires CNCA-registered suppliers for food-grade palm products. EU now requires EUDR compliance (see our separate article). Pakistan and Bangladesh are high-volume, less document-intensive markets.",
        "**Our role in your palm oil export.** We handle PEB filing, coordinate with surveyors (PT. Sucofindo, SGS) for quantity and quality certification, manage COO issuance at the Chamber of Commerce, and book freight on direct Belawan–destination vessels. For refiners and mills in North Sumatra looking for a reliable trading partner, talk to us.",
      ],
      id: [
        "Indonesia memasok sekitar 60% minyak sawit dunia. Sumatera Utara sendiri — markas PT. Dira Baraka Mulia — adalah salah satu daerah penghasil terbesar. Namun mengekspor CPO (Crude Palm Oil), RBD Olein, atau turunan sawit apapun melibatkan proses kepatuhan berlapis yang sering menjatuhkan bahkan eksportir berpengalaman.",
        "**Pungutan Ekspor.** Indonesia menerapkan pungutan ekspor progresif pada produk sawit, dipungut oleh BPDPKS. Tarif berubah setiap bulan berdasarkan harga referensi yang ditetapkan Kementerian Perdagangan. Pada 2025, tarif pungutan untuk CPO berkisar USD 33–85/MT tergantung harga referensi bulan berjalan. Anggarkan ini sebagai biaya variabel — bukan tetap.",
        "**Bea Keluar.** Terpisah dari pungutan, bea keluar juga diterapkan secara progresif. Pada harga referensi di atas USD 680/MT, bea adalah 18%. Di bawah USD 680/MT, turun ke 0%. Keduanya dibayar sebelum PEB (Pemberitahuan Ekspor Barang) disetujui.",
        "**Dokumen ekspor utama.** PEB via CEISA, invoice komersial dan packing list, Sertifikat Phytosanitary (untuk turunan segar), Certificate of Origin (GSTP Form D atau Form A untuk tarif preferensial), Bill of Lading, dan untuk tujuan UE — Due Diligence Statement EUDR.",
        "**Nuansa akses pasar.** India menerapkan anti-dumping atas minyak sawit olahan dari Indonesia — CPO mentah lebih disukai. China mensyaratkan supplier terdaftar CNCA untuk produk sawit kelas pangan. UE kini mewajibkan kepatuhan EUDR. Pakistan dan Bangladesh adalah pasar bervolume tinggi dengan dokumen lebih sederhana.",
        "**Peran kami dalam ekspor sawit Anda.** Kami menangani pengajuan PEB, berkoordinasi dengan surveyor (PT. Sucofindo, SGS) untuk sertifikasi kuantitas dan kualitas, mengelola penerbitan COO di Kamar Dagang, dan memesan freight pada kapal langsung Belawan–tujuan. Untuk refiner dan PKS di Sumatera Utara yang mencari mitra trading andal, hubungi kami.",
      ],
    },
  },
  {
    slug: "bc20-importir-baru-panduan",
    cover: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
    date: "2025-11-10",
    readTime: 6,
    views: 2234,
    category: { en: "Import", id: "Impor" },
    tags: ["import", "bc20", "customs", "beginner", "documents"],
    author: editor,
    title: {
      en: "BC 2.0 Explained: The Import Customs Declaration New Importers Get Wrong",
      id: "BC 2.0 Dijelaskan: Deklarasi Kepabeanan Impor yang Sering Salah di Importir Baru",
    },
    excerpt: {
      en: "BC 2.0 is the general import customs declaration in Indonesia. Here's what it is, when it's used, and the five mistakes that cause most delays.",
      id: "BC 2.0 adalah dokumen pernyataan kepabeanan impor umum di Indonesia. Ini penjelasannya, kapan digunakan, dan lima kesalahan yang menyebabkan sebagian besar keterlambatan.",
    },
    body: {
      en: [
        "When goods arrive at an Indonesian port, they must be declared to customs before they can be released. The primary document for general imports is BC 2.0 — which is filed through the CEISA system under the Directorate General of Customs and Excise (DJBC). This is distinct from PIB (Pemberitahuan Impor Barang) which is technically the printed output of the BC 2.0 declaration.",
        "**When is BC 2.0 used?** For all general commercial imports arriving by sea or air. It does not apply to personal effects under certain thresholds, postal imports (which use BC 2.8), or bonded zone entries (BC 2.5). If you're importing goods for your business through a sea port or airport, BC 2.0 is your document.",
        "**The 5 most common mistakes.** First: mismatched data between the commercial invoice and the BC 2.0 — even a single digit difference in quantity triggers a Yellow or Red lane. Second: using the wrong HS code (see our HS Code article). Third: filing BC 2.0 after goods arrive — it should be filed before or at the moment of arrival, not after dwell starts. Fourth: declaring FOB value instead of CIF value — Indonesian customs uses CIF as the dutiable value base. Fifth: forgetting to include SNI certificates for restricted goods (electronics, helmets, toys, etc.).",
        "**The clearance lane system.** After BC 2.0 is filed and duty paid, CEISA assigns one of three lanes. Green: auto-release, no inspection. Yellow: document verification, typically 1 business day. Red: physical inspection at port, 2–5 business days. Lane assignment is not random — it's driven by the importer's compliance history, HS code risk profile, and value declarations.",
        "**The role of a PPJK (customs broker).** Licensed customs brokers (PPJK) are the professionals who file BC 2.0 on behalf of importers. They are legally accountable for declaration accuracy and must hold a valid license from DJBC. When using an undername service like ours, the PPJK is coordinated by us — you provide the commercial documents, we handle the rest.",
        "**Our import handling service.** PT. Dira Baraka Mulia manages the full BC 2.0 / PIB process: pre-arrival document review, HS classification, duty calculation, CEISA filing, lane management, duty payment, and port pickup coordination. We've cleared shipments of fertilizers, food ingredients, machinery, and consumer goods with a strong Green lane track record.",
      ],
      id: [
        "Ketika barang tiba di pelabuhan Indonesia, barang tersebut harus dideklarasikan ke bea cukai sebelum bisa dikeluarkan. Dokumen utama untuk impor umum adalah BC 2.0 — yang diajukan melalui sistem CEISA di bawah Direktorat Jenderal Bea dan Cukai (DJBC). Ini berbeda dari PIB (Pemberitahuan Impor Barang) yang secara teknis adalah output cetak dari deklarasi BC 2.0.",
        "**Kapan BC 2.0 digunakan?** Untuk semua impor komersial umum yang datang melalui laut atau udara. Tidak berlaku untuk barang bawaan pribadi di bawah ambang tertentu, impor pos (yang menggunakan BC 2.8), atau barang masuk kawasan berikat (BC 2.5). Jika Anda mengimpor barang untuk bisnis melalui pelabuhan laut atau bandar udara, BC 2.0 adalah dokumen Anda.",
        "**5 kesalahan paling umum.** Pertama: data tidak cocok antara invoice komersial dan BC 2.0 — perbedaan satu digit saja dalam kuantitas memicu jalur Kuning atau Merah. Kedua: menggunakan kode HS yang salah (lihat artikel HS Code kami). Ketiga: mengajukan BC 2.0 setelah barang tiba — seharusnya diajukan sebelum atau saat kedatangan, bukan setelah dwell dimulai. Keempat: mendeklarasikan nilai FOB alih-alih nilai CIF — bea cukai Indonesia menggunakan CIF sebagai dasar nilai kena bea. Kelima: lupa menyertakan sertifikat SNI untuk barang terbatas (elektronik, helm, mainan, dll.).",
        "**Sistem jalur clearance.** Setelah BC 2.0 diajukan dan bea dibayar, CEISA menetapkan salah satu dari tiga jalur. Hijau: auto-release, tanpa inspeksi. Kuning: verifikasi dokumen, biasanya 1 hari kerja. Merah: inspeksi fisik di pelabuhan, 2–5 hari kerja. Penetapan jalur bukan acak — didorong oleh rekam jejak kepatuhan importir, profil risiko kode HS, dan deklarasi nilai.",
        "**Peran PPJK (broker bea cukai).** Broker bea cukai berlisensi (PPJK) adalah profesional yang mengajukan BC 2.0 atas nama importir. Mereka bertanggung jawab secara hukum atas akurasi deklarasi dan harus memiliki lisensi valid dari DJBC. Saat menggunakan layanan undername seperti milik kami, PPJK dikoordinasikan oleh kami — Anda menyediakan dokumen komersial, kami mengurus sisanya.",
        "**Layanan penanganan impor kami.** PT. Dira Baraka Mulia mengelola proses BC 2.0 / PIB secara penuh: review dokumen pra-kedatangan, klasifikasi HS, perhitungan bea, pengajuan CEISA, manajemen jalur, pembayaran bea, dan koordinasi pengambilan di pelabuhan. Kami telah meng-clearance pengiriman pupuk, bahan makanan, mesin, dan barang konsumsi dengan rekam jejak jalur Hijau yang kuat.",
      ],
    },
  },
  {
    slug: "perdagangan-umum-komoditas-agri",
    cover: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=80",
    date: "2025-10-20",
    readTime: 5,
    views: 1876,
    category: { en: "General Trading", id: "Perdagangan Umum" },
    tags: ["trading", "commodities", "agriculture", "wholesale", "fertilizer"],
    author: editor,
    title: {
      en: "General Trading of Agricultural Commodities: How Wholesale Works in Indonesia",
      id: "Perdagangan Umum Komoditas Agrikultur: Cara Kerja Perdagangan Besar di Indonesia",
    },
    excerpt: {
      en: "Beyond export-import, general trading is the backbone of Indonesia's commodity supply chain. Here's how it works and what a licensed trader actually does.",
      id: "Di luar ekspor-impor, perdagangan umum adalah tulang punggung rantai pasok komoditas Indonesia. Begini cara kerjanya dan apa yang sebenarnya dilakukan trader berlisensi.",
    },
    body: {
      en: [
        "When most people think about a trading company, they imagine containers at ports. But a significant portion of Indonesia's commodity economy runs through domestic general trading — wholesale purchasing, stocking, and distributing goods between producers, processors, and end-buyers within the country.",
        "**What KBLI-licensed general trading covers.** PT. Dira Baraka Mulia holds KBLI codes covering wholesale trade of fertilizers and agrochemicals, food and beverage ingredients, coffee, tea and cocoa, oil-bearing fruits, fresh vegetables, ornamental plants, household appliances, and motorcycle spare parts. These are not arbitrary — they represent the sectors where we have active supplier and buyer relationships.",
        "**The role of a trading intermediary.** Producers — especially smallholder farmers — rarely have the logistics, storage, and payment infrastructure to sell directly to large buyers. A trading company bridges this gap: it purchases in smaller lots, aggregates to buyer-required volumes, arranges transport and storage, and handles payment terms that neither party can easily manage alone.",
        "**Fertilizer and agrochemical trading.** This is one of our most active KBLI areas. Demand is consistent across North Sumatra's plantation sector. We source from authorized distributors and deliver to plantation groups, cooperatives, and agricultural SMEs. Proper invoicing, NIB documentation, and tax compliance are required for every transaction — grey-market fertilizer trade is heavily penalized.",
        "**Coffee and cocoa aggregation.** For specialty buyers who need consistent volume, we aggregate from multiple collectors and smallholder clusters. We arrange storage, basic sorting and grading (to exporter or processor spec), and transport to Belawan or Kualanamu for further processing or export.",
        "If your business needs a reliable trading partner for domestic agricultural commodities — whether you're a buyer looking for consistent supply, or a producer looking for a trusted off-taker — PT. Dira Baraka Mulia operates across all of these KBLI sectors with full legal standing and active market relationships.",
      ],
      id: [
        "Ketika kebanyakan orang membayangkan perusahaan trading, yang terbayang adalah kontainer di pelabuhan. Tapi sebagian besar ekonomi komoditas Indonesia berjalan melalui perdagangan umum domestik — pembelian grosir, penimbunan, dan distribusi barang antara produsen, pengolah, dan pembeli akhir di dalam negeri.",
        "**Apa yang dicakup perdagangan umum berlisensi KBLI.** PT. Dira Baraka Mulia memiliki kode KBLI yang mencakup perdagangan besar pupuk dan agrokimia, bahan makanan dan minuman, kopi, teh dan kakao, buah berminyak, sayuran segar, tanaman hias, peralatan rumah tangga, dan suku cadang sepeda motor. Ini bukan sembarangan — mewakili sektor di mana kami memiliki hubungan aktif dengan pemasok dan pembeli.",
        "**Peran perantara trading.** Produsen — terutama petani kecil — jarang memiliki infrastruktur logistik, penyimpanan, dan pembayaran untuk menjual langsung ke pembeli besar. Perusahaan trading menjembatani kesenjangan ini: membeli dalam lot lebih kecil, mengagregasi ke volume yang dibutuhkan pembeli, mengatur transportasi dan penyimpanan, serta menangani syarat pembayaran yang tidak dapat dikelola sendiri oleh salah satu pihak.",
        "**Perdagangan pupuk dan agrokimia.** Ini adalah salah satu area KBLI paling aktif kami. Permintaan konsisten di sektor perkebunan Sumatera Utara. Kami bersumber dari distributor resmi dan mengirimkan ke kelompok perkebunan, koperasi, dan UMKM pertanian. Invoicing yang benar, dokumentasi NIB, dan kepatuhan pajak diperlukan untuk setiap transaksi — perdagangan pupuk pasar gelap sangat dipidana.",
        "**Agregasi kopi dan kakao.** Untuk pembeli spesialti yang membutuhkan volume konsisten, kami mengagregasi dari beberapa kolektor dan kluster petani kecil. Kami mengatur penyimpanan, sortasi dan grading dasar (sesuai spesifikasi eksportir atau pengolah), dan transportasi ke Belawan atau Kualanamu untuk pengolahan lebih lanjut atau ekspor.",
        "Jika bisnis Anda membutuhkan mitra trading yang andal untuk komoditas pertanian domestik — baik Anda pembeli yang mencari pasokan konsisten, atau produsen yang mencari off-taker tepercaya — PT. Dira Baraka Mulia beroperasi di semua sektor KBLI ini dengan posisi hukum penuh dan hubungan pasar aktif.",
      ],
    },
  },
  {
    slug: "konsultasi-strategi-ekspor-umkm",
    cover: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=80",
    date: "2025-10-01",
    readTime: 6,
    views: 1543,
    category: { en: "Consulting", id: "Konsultasi" },
    tags: ["consulting", "strategy", "umkm", "export", "beginner"],
    author: editor,
    title: {
      en: "Export Strategy Consulting for Indonesian SMEs: Where to Start When You Know Nothing",
      id: "Konsultasi Strategi Ekspor untuk UMKM Indonesia: Mulai dari Mana Jika Belum Tahu Apa-apa",
    },
    excerpt: {
      en: "Most SMEs that could export, don't — because they don't know where to start. Here's the practical first map for businesses ready to go international.",
      id: "Sebagian besar UMKM yang bisa ekspor, tidak melakukannya — karena tidak tahu harus mulai dari mana. Inilah peta pertama yang praktis untuk bisnis yang siap go international.",
    },
    body: {
      en: [
        "Indonesia has over 64 million SMEs. Only a tiny fraction exports — not because their products aren't world-class, but because the process feels impossibly complex from the outside. Export strategy consulting is about turning that complexity into a clear, step-by-step roadmap tailored to your specific product, market, and capacity.",
        "**Step 1: Product readiness assessment.** Before talking about markets, we need to assess whether your product is export-ready. This means: Can you produce to consistent quality? Do you have minimum viable packaging (labeling, barcodes)? What are the regulatory requirements in your target country for your product category? Many SMEs skip this and fail at the first importer meeting.",
        "**Step 2: Market selection.** Not all markets are equal. We analyze demand data, import duty levels, competition from other origin countries, logistical proximity, and regulatory complexity. For North Sumatran food products, for example, Malaysia is often the fastest first market — short distance, similar consumer taste, lower trade barriers than EU or US.",
        "**Step 3: Commodity and HS code feasibility.** What is your product's HS code? What duty does the target country apply to it? Are there non-tariff barriers (sanitary, phytosanitary, labeling) your product must clear? This analysis determines whether exporting is financially viable given your cost structure.",
        "**Step 4: Legal and licensing requirements.** To export legally from Indonesia, you need a minimum NIB (Nomor Induk Berusaha) with the relevant KBLI codes. Some commodities (certain food, wood products, textiles) require additional export licenses or registration. We map exactly what you need before you invest in export infrastructure.",
        "**Step 5: First shipment planning.** The first shipment is the hardest. We recommend starting with a sample shipment (under 50 kg or 1 CBM) before committing to a full container. This validates product acceptance, clears customs in the target country, and identifies documentation gaps without significant financial exposure.",
        "PT. Dira Baraka Mulia offers free initial export consultations — no fee, no commitment. We make money when your export succeeds, not from charging you for advice. If you have a product and a dream destination, let's map it out together.",
      ],
      id: [
        "Indonesia memiliki lebih dari 64 juta UMKM. Hanya sebagian kecil yang ekspor — bukan karena produk mereka tidak berkelas dunia, tapi karena prosesnya terasa sangat rumit dari luar. Konsultasi strategi ekspor adalah tentang mengubah kerumitan itu menjadi peta jalan yang jelas, langkah demi langkah, disesuaikan dengan produk, pasar, dan kapasitas spesifik Anda.",
        "**Langkah 1: Penilaian kesiapan produk.** Sebelum bicara soal pasar, kita perlu menilai apakah produk Anda siap diekspor. Artinya: Bisakah Anda berproduksi dengan kualitas konsisten? Apakah Anda memiliki kemasan minimum yang layak (labeling, barcode)? Apa persyaratan regulasi di negara tujuan untuk kategori produk Anda? Banyak UMKM melewati ini dan gagal di pertemuan pertama dengan importir.",
        "**Langkah 2: Pemilihan pasar.** Tidak semua pasar itu sama. Kami menganalisis data permintaan, tingkat bea masuk, persaingan dari negara asal lain, kedekatan logistik, dan kompleksitas regulasi. Untuk produk pangan asal Sumatera Utara, misalnya, Malaysia sering menjadi pasar pertama yang paling cepat — jarak dekat, selera konsumen serupa, hambatan perdagangan lebih rendah dari UE atau AS.",
        "**Langkah 3: Kelayakan komoditas dan kode HS.** Apa kode HS produk Anda? Berapa bea masuk yang diterapkan negara tujuan atas produk tersebut? Apakah ada hambatan non-tarif (sanitasi, fitosanitasi, pelabelan) yang harus dipenuhi produk Anda? Analisis ini menentukan apakah ekspor layak secara finansial dengan struktur biaya Anda.",
        "**Langkah 4: Persyaratan legal dan perizinan.** Untuk mengekspor secara legal dari Indonesia, Anda membutuhkan minimal NIB (Nomor Induk Berusaha) dengan kode KBLI yang relevan. Beberapa komoditas (pangan tertentu, produk kayu, tekstil) memerlukan izin atau pendaftaran ekspor tambahan. Kami memetakan tepat apa yang Anda butuhkan sebelum Anda berinvestasi dalam infrastruktur ekspor.",
        "**Langkah 5: Perencanaan pengiriman pertama.** Pengiriman pertama adalah yang paling sulit. Kami merekomendasikan memulai dengan pengiriman sampel (di bawah 50 kg atau 1 CBM) sebelum berkomitmen pada kontainer penuh. Ini memvalidasi penerimaan produk, melalui bea cukai di negara tujuan, dan mengidentifikasi kesenjangan dokumentasi tanpa eksposur finansial yang besar.",
        "PT. Dira Baraka Mulia menawarkan konsultasi ekspor awal gratis — tanpa biaya, tanpa komitmen. Kami menghasilkan uang ketika ekspor Anda berhasil, bukan dari membebankan biaya konsultasi. Jika Anda memiliki produk dan tujuan impian, mari petakan bersama.",
      ],
    },
  },
  {
    slug: "memilih-mitra-trading-internasional",
    cover: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1400&q=80",
    date: "2025-08-22",
    readTime: 5,
    views: 1645,
    category: { en: "Strategy", id: "Strategi" },
    tags: ["strategy", "partnership", "diligence", "business"],
    author: editor,
    title: {
      en: "Choosing an International Trading Partner: 7 Questions Worth Asking",
      id: "Memilih Mitra Trading Internasional: 7 Pertanyaan yang Wajib Diajukan",
    },
    excerpt: {
      en: "Most trading partnerships fail not because of price, but because of mismatched expectations. Here's the diligence we wish more clients did.",
      id: "Sebagian besar kemitraan trading gagal bukan karena harga, tapi karena ekspektasi yang tidak selaras. Inilah due diligence yang sebaiknya lebih banyak klien lakukan.",
    },
    body: {
      en: [
        "After three years and dozens of partnerships, here are the questions that consistently separate strong long-term partners from headaches.",
        "**1. What's your real volume capacity?** Numbers on a website often reflect peak — not steady-state. Ask for last 12 months of monthly shipments.",
        "**2. Can I speak with two existing clients?** A confident partner will arrange this without hesitation.",
        "**3. Who handles disputes — you or a third party?** A clear written escalation path matters far more than a low price.",
        "**4. What is your cash-flow cycle?** Will they finance the deal, or do you front the customs duty? This single question reshapes a lot of negotiations.",
        "**5. How do you price exchange-rate risk?** USD pricing, IDR pricing, fixed vs floating — agree explicitly upfront.",
        "**6. What does your insurance cover?** Marine cargo insurance has gaps. War risk, storage, demurrage — confirm in writing.",
        "**7. What does 'success' look like in 12 months?** If a partner can't articulate this, they're optimizing for the next deal, not the relationship.",
        "Trade is a relationship business. Speed and price matter, but trust compounds.",
      ],
      id: [
        "Setelah tiga tahun dan puluhan kemitraan, inilah pertanyaan yang konsisten memisahkan mitra jangka panjang yang solid dari yang bermasalah.",
        "**1. Berapa kapasitas volume Anda yang sebenarnya?** Angka di website biasanya merefleksikan peak — bukan steady-state. Minta laporan 12 bulan terakhir.",
        "**2. Bolehkah saya bicara dengan dua klien aktif?** Mitra yang percaya diri akan mengatur ini tanpa keraguan.",
        "**3. Siapa yang menangani sengketa — Anda atau pihak ketiga?** Escalation path tertulis lebih penting daripada harga rendah.",
        "**4. Bagaimana siklus arus kas Anda?** Apakah mereka membiayai deal, atau Anda yang mendahulukan bea masuk? Pertanyaan ini mengubah banyak negosiasi.",
        "**5. Bagaimana Anda mengelola risiko nilai tukar?** Harga USD, IDR, fixed vs floating — sepakati eksplisit di depan.",
        "**6. Apa yang dicakup asuransi Anda?** Asuransi marine cargo punya celah. War risk, storage, demurrage — konfirmasi tertulis.",
        "**7. Bagaimana 'sukses' terlihat dalam 12 bulan?** Jika mitra tidak bisa mengartikulasikannya, mereka mengoptimalkan deal berikutnya, bukan hubungan.",
        "Perdagangan adalah bisnis hubungan. Kecepatan dan harga penting, tapi kepercayaan ber-compounding.",
      ],
    },
  },
];

export const getPostBySlug = (slug) => blogPosts.find((p) => p.slug === slug);

export const getAllTags = () => {
  const counts = {};
  blogPosts.forEach((p) => p.tags.forEach((t) => (counts[t] = (counts[t] || 0) + 1)));
  return Object.entries(counts)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
};

export const getAllCategories = (lang) => {
  const counts = {};
  blogPosts.forEach((p) => {
    const key = p.category[lang];
    counts[key] = (counts[key] || 0) + 1;
  });
  return Object.entries(counts).map(([name, count]) => ({ name, count }));
};

export const getArchive = (lang) => {
  const map = {};
  blogPosts.forEach((p) => {
    const d = new Date(p.date);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    if (!map[key]) map[key] = { key, year: d.getFullYear(), month: d.getMonth(), count: 0 };
    map[key].count += 1;
  });
  return Object.values(map)
    .sort((a, b) => b.key.localeCompare(a.key))
    .map((item) => ({
      ...item,
      label: new Date(item.year, item.month, 1).toLocaleDateString(lang === "id" ? "id-ID" : "en-US", {
        month: "long",
        year: "numeric",
      }),
    }));
};

export const getPopularPosts = (limit = 4) =>
  [...blogPosts].sort((a, b) => b.views - a.views).slice(0, limit);
