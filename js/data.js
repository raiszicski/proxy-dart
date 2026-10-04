// DATA KEGIATAN PEKAN ILKOMERZ
const kegiatan = [
  { id: 1, judul: "Pekan Ilkomerz Day 1", tanggal: "30 Agustus 2026", kategori: "Pekan Ilkomerz", caption: "Pengenalan Departemen Ilmu Komputer", foto: "assets/activities/Day1.jpeg", alt: "[ISI DESKRIPSI FOTO]" },
  { id: 2, judul: "Pekan Ilkomerz Day 2", tanggal: "6 September 2026", kategori: "Pekan Ilkomerz", caption: "Pengenalan Gedung Departemen Ilmu Komputer", foto: "assets/activities/Day2.jpg", alt: "[ISI DESKRIPSI FOTO]" },
  { id: 3, judul: "Pekan Ilkomerz Day 3", tanggal: "13 September 2026", kategori: "Pekan Ilkomerz", caption: "Outbound", foto: "assets/activities/Day 3.jpg", alt: "[ISI DESKRIPSI FOTO]" },
  { id: 4, judul: "Pekan Ilkomerz Day 4", tanggal: "20 September 2026", kategori: "Pekan Ilkomerz", caption: "Pemilihan Ketua Angkatan dan Komisaris Tingkat", foto: "assets/activities/Day 4.jpg", alt: "[ISI DESKRIPSI FOTO]" },
  { id: 5, judul: "Pekan Ilkomerz Day 5", tanggal: "27 September 2026", kategori: "Pekan Ilkomerz", caption: "Closing Ceremony", foto: "assets/activities/Day 5.jpg", alt: "[ISI DESKRIPSI FOTO]" },
  { id: 6, judul: "Forum Day", tanggal: "5 September 2026", kategori: "Pekan Ilkomerz", caption: "Forum Diskusi Calon Ketua Angkatan dan Calon Komisaris Tingkat", foto: "assets/activities/Forum.jpeg", alt: "[ISI DESKRIPSI FOTO]" },
  { id: 7, judul: "Prepare the Showtime Force", tanggal: "2, 9, 16 September 2026", kategori: "Komtroopers", caption: "Latihan Supporter Komtroopers", foto: "assets/activities/Komtroops.jpg", alt: "[ISI DESKRIPSI FOTO]" },
  { id: 8, judul: "Spectra Fusion", tanggal: "20 September 2026", kategori: "Komtroopers", caption: "Opening Spectra", foto: "assets/activities/Spectra.jpg", alt: "[ISI DESKRIPSI FOTO]" }
];
// DATA ANGGOTA PROXY DART
const anggota = [
  {
    id: "lazarus",
    nama: "Lazarus Prima Promudithia",
    panggilan: "Kak Laza",
    peran: "PJK",
    tanggalLahir: "11 Desember 2005",
    asalKota: "Sukabumi",
    nim: "M0403241005",
    wishlistNegara: [
      { nama: "Yunani"  , kode: "gr" },
      { nama: "Australia", kode: "au" },
      { nama: "Inggris", kode: "gb" }
    ],
    mataKuliahFavorit: "Rangkaian Digital",
    foto: "assets/members/laza.jpg",
    sosmed: { instagram: "https://instagram.com/lazarusp_", linkedin: "https://www.linkedin.com/in/lazarusprima", github: "https://github.com/lazarusprima" },
    cv: "assets/cv/laza-cv.pdf"
  },
  {
    id: "raisza",
    nama: "M.Raisza Zamzami",
    panggilan: "Rai",
    peran: "Ketua Proxy Dart",
    tanggalLahir: "30 Mei 2007",
    asalKota: "Bandar Lampung",
    nim: "M0403251082",
    wishlistNegara: [
      { nama: "Belgia", kode: "be" },
      { nama: "Italia", kode: "it" },
      { nama: "Ceko", kode: "cz" }
    ],
    mataKuliahFavorit: "Basis Data",
    foto: "assets/members/rai.png",
    sosmed: { instagram: "https://www.instagram.com/raisz.szm/", linkedin: "https://www.linkedin.com/in/m-raisza-zamzami-a11069380/", github: "https://github.com/raiszicski" },
    cv: "assets/cv/rai-cv.pdf"
  },
  {
    id: "chalisa",
    nama: "Chalisa Zahra Harahap",
    panggilan: "Chalisa",
    peran: "Anggota",
    tanggalLahir: "18 Juni 2008",
    asalKota: "Medan",
    nim: "M0403251076",
    wishlistNegara: [
      { nama: "Jepang", kode: "jp" },
      { nama: "Arab Saudi", kode: "sa" },
      { nama: "Swiss", kode: "ch" }
    ],
    mataKuliahFavorit: "Rangkaian Digital",
    foto: "assets/members/chalisa.jpg",
    sosmed: { instagram: "https://www.instagram.com/cha_luvcat", linkedin: "https://www.linkedin.com/in/chalisa-zahra-harahap-00826638b" },
    cv: "assets/cv/chalisa-cv.pdf"
  },
  {
    id: "faqih",
    nama: "Faqih Iqila Arsanta Awang",
    panggilan: "Faqih",
    peran: "Anggota",
    tanggalLahir: "8 Desember 2007",
    asalKota: "Bogor",
    nim: "M0403251085",
    wishlistNegara: [
      { nama: "Singapura", kode: "sg" },
      { nama: "Swedia", kode: "se" },
      { nama: "Jepang", kode: "jp" }
    ],
    mataKuliahFavorit: "Pemrograman",
    foto: "assets/members/faqih.jpg",
    sosmed: { instagram: "https://www.instagram.com/faqihiaawang", linkedin: "https://www.linkedin.com/in/faqih-iqlia-arsanta-awang-590944322", github: "https://www.github.com/faqih-awang" },
    cv: "assets/cv/faqih-cv.pdf"
  },
  {
    id: "habibi",
    nama: "Habibi Ikramul Huda",
    panggilan: "Huda",
    peran: "Anggota",
    tanggalLahir: "20 Maret 2006",
    asalKota: "Jambi",
    nim: "M0403251079",
    wishlistNegara: [
      { nama: "Amerika Serikat", kode: "us" },
      { nama: "Kanada", kode: "ca" },
      { nama: "Selandia Baru", kode: "nz" }
    ],
    mataKuliahFavorit: "Struktur Diskrit",
    foto: "assets/members/huda.jpg",
    sosmed: { instagram: "https://instagram.com/lunchskinny", linkedin: "https://www.linkedin.com/in/habibi-ikramul-huda-b91360369", github: "http://github.com/slantedfloor" },
    cv: "assets/cv/huda-cv.pdf"
  },
  {
    id: "fina",
    nama: "Fina Nailatul Izzah",
    panggilan: "Finay",
    peran: "Anggota",
    tanggalLahir: "15 Juni 2007",
    asalKota: "Batam",
    nim: "M0403251077",
    wishlistNegara: [
      { nama: "Swiss", kode: "ch" },
      { nama: "Kanada", kode: "ca" },
      { nama: "Australia", kode: "au" }
    ],
    mataKuliahFavorit: "Rangkaian Digital",
    foto: "assets/members/finay.jpg",
    sosmed: { instagram: "https://instagram.com/finaaaila", linkedin: "https://id.linkedin.com/in/finanailatul" },
    cv: "assets/cv/finay-cv.pdf"
  },
  {
    id: "ishana",
    nama: "Ishana Renanditha",
    panggilan: "Ishana",
    peran: "Anggota",
    tanggalLahir: "7 Juli 2007",
    asalKota: "Batam",
    nim: "M0403251078",
    wishlistNegara: [
      { nama: "Kanada", kode: "ca" },
      { nama: "Inggris", kode: "gb" },
      { nama: "Swiss", kode: "ch" }
    ],
    mataKuliahFavorit: "Pemrograman",
    foto: "assets/members/ishana.jpg",
    sosmed: { instagram: "https://www.instagram.com/ishanarenanditha/", linkedin: "https://www.linkedin.com/in/ishana-renanditha"},
    cv: "assets/cv/ishana-cv.pdf"
  },
  {
    id: "kamila",
    nama: "Kamila Izzaty",
    panggilan: "Kamila",
    peran: "Anggota",
    tanggalLahir: "8 September 2006",
    asalKota: "Bukittinggi",
    nim: "M0403251080",
    wishlistNegara: [
      { nama: "Inggris", kode: "gb" },
      { nama: "Australia", kode: "au" },
      { nama: "Arab Saudi", kode: "sa" }
    ],
    mataKuliahFavorit: "Struktur Diskrit",
    foto: "assets/members/kamila.jpg",
    sosmed: { instagram: "https://instagram.com/kmiilzztyy", linkedin: "https://www.linkedin.com/in/kamila-izzaty-5a628636a"},
    cv: "assets/cv/kamila-cv.pdf"
  },
  {
    id: "nayla",
    nama: "Nayla Khairunissa Ramadani",
    panggilan: "Kairu",
    peran: "Anggota",
    tanggalLahir: "3 Desember 2006",
    asalKota: "Bandar Lampung",
    nim: "M0403251083",
    wishlistNegara: [
      { nama: "Jepang", kode: "jp" },
      { nama: "Inggris", kode: "gb" },
      { nama: "Prancis", kode: "fr" }
    ],
    mataKuliahFavorit: "Basis Data",
    foto: "assets/members/kairu.jpg",
    sosmed: { instagram: "https://www.instagram.com/naylasumatra", linkedin: "https://www.linkedin.com/in/nayla-khairunnisa-ramadani-ba1009348/" },
    cv: "assets/cv/kairu-cv.pdf"
  },
  {
    id: "nurjihan",
    nama: "Nurjihan Rihhadatul Aisya",
    panggilan: "Jihan",
    peran: "Anggota",
    tanggalLahir: "8 Januari 2007",
    asalKota: "Tulang Bawang",
    nim: "M0403251081",
    wishlistNegara: [
      { nama: "Italia", kode: "it" },
      { nama: "Cina", kode: "cn" },
      { nama: "Hungaria", kode: "hu" }
    ],
    mataKuliahFavorit: "Pemrograman",
    foto: "assets/members/jihan.jpg",
    sosmed: { instagram: "https://instagram.com/jhannra_", linkedin: "https://www.linkedin.com/in/nurjihan-rihhadatul-aisya-a26b9837b" },
    cv: "assets/cv/jihan-cv.pdf"
  },
  {
    id: "satria",
    nama: "Satria Nugraha",
    panggilan: "Satria",
    peran: "Anggota",
    tanggalLahir: "2 Juli 2007",
    asalKota: "Samarinda",
    nim: "M0403251074",
    wishlistNegara: [
      { nama: "Kanada", kode: "ca" },
      { nama: "Inggris", kode: "gb" },
      { nama: "Singapura", kode: "sg" }
    ],
    mataKuliahFavorit: "Basis Data",
    foto: "assets/members/satria.jpeg",
    sosmed: { instagram: "https://instagram.com/disil07", linkedin: "https://www.linkedin.com/in/satria-n", github: "https://github.com/Disil" },
    cv: "assets/cv/satria-cv.pdf"
  },
  {
    id: "haidar",
    nama: "Haidar Dzikry Rafif",
    panggilan: "Haidar",
    peran: "Anggota",
    tanggalLahir: "2 November 2006",
    asalKota: "Jakarta",
    nim: "M0403251075",
    wishlistNegara: [
      { nama: "Singapura", kode: "sg" },
      { nama: "Malaysia", kode: "my" },
      { nama: "Jepang", kode: "jp" }
    ],
    mataKuliahFavorit: "Pemrograman",
    foto: "assets/members/haidar.jpg",
    sosmed: { instagram: "https://www.instagram.com/haidartdr", linkedin: "https://id.linkedin.com/in/haidardzikrirafif"},
    cv: "assets/cv/haidar-cv.pdf"
  }
];
// INFO NEGARA UNTUK PETA WISHLIST
const infoNegara = {
  be: { nama: "Belgia", lat: 50.85, lng: 4.35, zoom: 7, fakta: [
    "Ibu kotanya, Brussel, dikenal sebagai pusat Uni Eropa.",
    "Punya tiga bahasa resmi: Belanda, Prancis, dan Jerman.",
    "Terkenal dengan cokelat, wafel, dan kentang goreng (frites)."
  ]},
  it: { nama: "Italia", lat: 42.5, lng: 12.5, zoom: 5, fakta: [
    "Salah satu negara dengan situs Warisan Dunia UNESCO terbanyak.",
    "Di dalam wilayahnya ada dua negara kecil: Vatikan dan San Marino.",
    "Pizza modern berasal dari kota Napoli."
  ]},
  cz: { nama: "Ceko", lat: 49.8, lng: 15.5, zoom: 7, fakta: [
    "Ibu kotanya, Praha, punya jam astronomi (Orloj) yang sudah ada sejak abad ke-15.",
    "Warganya termasuk peminum bir per kapita tertinggi di dunia.",
    "Selain Czech Republic, nama singkat resminya adalah Czechia."
  ]},
  us: { nama: "Amerika Serikat", lat: 39.5, lng: -98.35, zoom: 3, fakta: [
    "Terdiri dari 50 negara bagian.",
    "Patung Liberty adalah hadiah dari Prancis dan diresmikan tahun 1886.",
    "Grand Canyon di Arizona panjangnya sekitar 446 km."
  ]},
  ca: { nama: "Kanada", lat: 56, lng: -96, zoom: 3, fakta: [
    "Memiliki garis pantai terpanjang di dunia.",
    "Punya dua bahasa resmi di tingkat nasional: Inggris dan Prancis.",
    "Sebagian besar sirup maple dunia berasal dari provinsi Quebec."
  ]},
  nz: { nama: "Selandia Baru", lat: -41.5, lng: 172.5, zoom: 5, fakta: [
    "Nama Māori-nya adalah Aotearoa.",
    "Termasuk negara pertama yang memberi hak pilih kepada perempuan dalam pemilu nasional (1893).",
    "Jumlah dombanya jauh lebih banyak daripada jumlah penduduknya."
  ]},
  ch: { nama: "Swiss", lat: 46.8, lng: 8.2, zoom: 7, fakta: [
    "Tidak punya laut dan punya empat bahasa nasional: Jerman, Prancis, Italia, dan Romansh.",
    "Terkenal dengan cokelat dan jam tangan.",
    "Puncak Matterhorn (4.478 m) adalah salah satu ikon Pegunungan Alpen."
  ]},
  au: { nama: "Australia", lat: -25.5, lng: 134, zoom: 3, fakta: [
    "Great Barrier Reef adalah sistem terumbu karang terbesar di dunia.",
    "Sydney Opera House termasuk Warisan Dunia UNESCO.",
    "Satu-satunya negara yang menempati satu benua penuh."
  ]},
  gb: { nama: "Inggris", lat: 54, lng: -2.5, zoom: 5, fakta: [
    "Britania Raya terdiri dari empat negara: Inggris, Skotlandia, Wales, dan Irlandia Utara.",
    "London Underground, dibuka tahun 1863, adalah kereta bawah tanah tertua di dunia.",
    "\"Big Ben\" sebenarnya nama lonceng di menara jam, bukan nama menaranya."
  ]},
  sa: { nama: "Arab Saudi", lat: 24.5, lng: 45, zoom: 5, fakta: [
    "Rumah bagi dua kota suci Islam: Mekah dan Madinah.",
    "Negara terbesar di Timur Tengah.",
    "Tidak memiliki sungai permanen."
  ]},
  jp: { nama: "Jepang", lat: 36.5, lng: 138, zoom: 5, fakta: [
    "Terdiri dari lebih dari 6.000 pulau.",
    "Gunung Fuji (3.776 m) adalah gunung tertinggi di Jepang.",
    "Kereta cepat Shinkansen mulai beroperasi tahun 1964."
  ]},
  fr: { nama: "Prancis", lat: 46.6, lng: 2.4, zoom: 6, fakta: [
    "Menara Eiffel selesai dibangun tahun 1889.",
    "Museum Louvre di Paris termasuk museum yang paling banyak dikunjungi di dunia.",
    "Sering menjadi salah satu negara yang paling banyak dikunjungi turis."
  ]},
  cn: { nama: "Cina", lat: 35, lng: 103, zoom: 3, fakta: [
    "Tembok Besarnya dibangun bertahap selama berabad-abad.",
    "Kertas, percetakan, kompas, dan mesiu dikenal sebagai empat penemuan besar Tiongkok kuno.",
    "Panda raksasa hanya hidup liar di Tiongkok."
  ]},
  hu: { nama: "Hungaria", lat: 47.1, lng: 19.5, zoom: 7, fakta: [
    "Budapest terbentuk dari penyatuan kota Buda, Óbuda, dan Pest pada 1873.",
    "Kubus Rubik ditemukan oleh Ernő Rubik, seorang arsitek Hungaria, tahun 1974.",
    "Terkenal dengan pemandian air panas alaminya."
  ]},
  sg: { nama: "Singapura", lat: 1.35, lng: 103.82, zoom: 10, fakta: [
    "Negara kota dengan luas sekitar 730 km².",
    "Patung Merlion (kepala singa, tubuh ikan) adalah lambang pariwisatanya.",
    "Penjualan permen karet sangat dibatasi di sana."
  ]},
  my: { nama: "Malaysia", lat: 4.2, lng: 102, zoom: 5, fakta: [
    "Menara Kembar Petronas adalah gedung tertinggi di dunia pada 1998 hingga 2004.",
    "Wilayahnya terpisah oleh Laut Cina Selatan: Semenanjung Malaysia dan Sabah-Sarawak di Borneo.",
    "Bunga Rafflesia, salah satu bunga terbesar di dunia, tumbuh di hutan Malaysia."
  ]},
  gr: { nama: "Yunani", lat: 39.1, lng: 21.8, zoom: 6, fakta: [
    "Athena termasuk salah satu kota tertua di dunia, dihuni terus-menerus selama ribuan tahun.",
    "Olimpiade kuno berasal dari Olympia, Yunani.",
    "Punya lebih dari 6.000 pulau dan pulau kecil, tetapi hanya sebagian kecil yang berpenghuni."
  ]},
  se: { nama: "Swedia", lat: 62, lng: 15, zoom: 4, fakta: [
    "Alfred Nobel, pencipta Hadiah Nobel, berasal dari Swedia.",
    "Dikenal dengan hak allemansrätten, yaitu hak publik menjelajahi alam terbuka.",
    "IKEA didirikan di Swedia pada tahun 1943."
  ]}
};
