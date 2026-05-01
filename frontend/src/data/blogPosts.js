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
