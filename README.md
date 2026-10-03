# Proxy Dart | Pekan Ilkomerz

Website kelompok **Proxy Dart** untuk rangkaian **Pekan Ilkomerz 62**, Departemen Ilmu Komputer.
Berisi biodata anggota, CV ATS, dokumentasi kegiatan, dan peta negara impian (wishlist) setiap anggota.

> Lewati tak terhingga, Menuju tak terbatas!

**Link website:** Menyusul

---

## Fitur

- **Landing page** dengan latar mosaik foto kegiatan yang bergerak pelan dan loading screen berlogo Proxy Dart.
- **Biodata anggota**: kartu anggota dengan modal detail (NIM, tanggal lahir, asal kota, mata kuliah favorit, wishlist negara, sosial media) dan tautan **CV ATS** dalam format PDF.
- **Dokumentasi kegiatan**: galeri dengan kategori, tanggal, keterangan, dan lightbox untuk memperbesar foto.
- **Peta wishlist**: ikon dart di negara impian setiap anggota, lengkap dengan fun fact dan daftar peminat.
- **Responsif** untuk desktop, tablet, dan HP.
- **Aksesibilitas**: HTML semantik, skip link, navigasi keyboard, dan dukungan `prefers-reduced-motion`.
- Desain **neobrutalism** dengan palet sage green.

## Anggota

| No | Nama | Panggilan | Peran |
|----|------|-----------|-------|
| 1 | Lazarus Prima Promudithia | Kak Laza | PJK |
| 2 | M.Raisza Zamzami | Rai | Ketua Proxy Dart |
| 3 | Chalisa Zahra Harahap | Chalisa | Anggota |
| 4 | Faqih Iqila Arsanta Awang | Faqih | Anggota |
| 5 | Habibi Ikramul Huda | Huda | Anggota |
| 6 | Fina Nailatul Izzah | Finay | Anggota |
| 7 | Ishana Renanditha | Ishana | Anggota |
| 8 | Kamila Izzaty | Kamila | Anggota |
| 9 | Nayla Khairunissa Ramadani | Kairu | Anggota |
| 10 | Nurjihan Rihhadatul Aisya | Jihan | Anggota |
| 11 | Satria Nugraha | Satria | Anggota |
| 12 | Haidar Dzikry Rafif | Haidar | Anggota |

## Teknologi

- **HTML, CSS, dan JavaScript murni** 
- [Leaflet](https://leafletjs.com/) 1.9.4 untuk peta interaktif
- Peta dasar dari [OpenStreetMap](https://www.openstreetmap.org/copyright) (hak cipta OpenStreetMap contributors)
- Gambar bendera dari [Flagcdn](https://flagcdn.com/)
- [Google Fonts](https://fonts.google.com/): Space Grotesk dan Inter
- Hosting: [Vercel](https://vercel.com/)

## Struktur Project

```text
proxy-dart/
├── index.html              Halaman utama (single page)
├── css/
│   └── style.css           Seluruh gaya tampilan
├── js/
│   ├── data.js             Semua data: kegiatan, anggota, info negara
│   └── main.js             Logika: kartu, modal, galeri, lightbox, peta, loader
├── assets/
│   ├── members/            Foto profil anggota
│   ├── activities/         Foto dokumentasi kegiatan
│   ├── cv/                 CV ATS (PDF)
│   ├── bg-contour.svg      Pola kontur latar belakang
│   ├── logo-dart-kecil.png Logo untuk loading screen
│   ├── favicon.ico
│   ├── favicon-32.png
│   └── apple-touch-icon.png
├── README.md
└── .gitignore
```

## Cara Menjalankan di Komputer

1. Unduh atau *clone* repository ini.
2. Buka foldernya di **Visual Studio Code**.
3. Pasang ekstensi **Live Server**.
4. Klik kanan `index.html`, lalu pilih **Open with Live Server**.

Website juga bisa dibuka langsung lewat `index.html`, tetapi Live Server lebih disarankan.
Peta dan bendera membutuhkan koneksi internet.

## Memperbarui Data

Semua data ada di **`js/data.js`**, jadi HTML tidak perlu diubah.

| Yang ingin diubah | Lokasi |
|---|---|
| Biodata, wishlist, sosial media, path foto dan CV | Array `anggota` |
| Foto, judul, tanggal, dan keterangan kegiatan | Array `kegiatan` |
| Koordinat dan fun fact negara di peta | Objek `infoNegara` |

Aturan berkas:

- Foto anggota ditaruh di `assets/members/`, CV di `assets/cv/`, foto kegiatan di `assets/activities/`.
- Gunakan **huruf kecil, tanpa spasi** pada nama file (contoh: `raisza-cv.pdf`). Server hosting membedakan huruf besar dan kecil.
- Wishlist negara memakai kode negara dua huruf (contoh: `jp`, `ca`, `gb`). Negara baru perlu ditambahkan juga di `infoNegara`.

## Deployment

Project ini adalah situs statis. Di Vercel tidak diperlukan pengaturan build:

- **Framework Preset:** Other
- **Build Command:** -
- **Output Directory:** -

Alur: **GitHub Repository → Vercel → URL Vercel → ipb.link**

## Catatan

Website ini dibuat sebagai tugas kelompok Pekan Ilkomerz. Repository tidak berisi password, token, atau API key.
