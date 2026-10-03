// 1. MOSAIK FOTO DI HERO
function renderHeroMosaic() {
    const mosaic = document.getElementById("heroMosaic");
    const layarKecil = window.matchMedia("(max-width: 768px)").matches;
    const jumlahKotak = layarKecil ? 40 : 60;
    for (let i = 0; i < jumlahKotak; i++) {
        const item = kegiatan[i % kegiatan.length];
        const img = document.createElement("img");
        img.src = item.thumb || item.foto;
        img.alt = "";          
        img.decoding = "async";
        img.loading = "lazy";
        mosaic.appendChild(img);
    }
}
// 2. MENU HAMBURGER (HP)
function setupNavbar() {
    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("navMenu");

    toggle.addEventListener("click", function () {
        const terbuka = menu.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", terbuka);
    });

    // tutup menu setelah salah satu link diklik
    menu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            menu.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
        });
    });
}
// 3. KARTU ANGGOTA
function renderMembers() {
    const grid = document.getElementById("membersGrid");

    anggota.forEach(function (a) {
        const kartu = document.createElement("button");
        kartu.className = "member-card";
        kartu.type = "button";
        kartu.setAttribute("aria-label", "Lihat detail " + a.nama);

        kartu.innerHTML =
            '<img src="' + a.foto + '" alt="Foto ' + a.nama + '" loading="lazy">' +
            '<div class="member-card__body">' +
            '<p class="member-card__name">' + a.panggilan + '</p>' +
            '<p class="member-card__city">' + a.asalKota + '</p>' +
            '</div>';

        kartu.addEventListener("click", function () {
            openMemberModal(a.id);
        });

        grid.appendChild(kartu);
    });
}
// 4. MODAL DETAIL ANGGOTA
let kartuTerakhir = null;

function openMemberModal(id) {
    const a = anggota.find(function (item) { return item.id === id; });
    const modal = document.getElementById("memberModal");

    document.getElementById("modalFoto").src = a.foto;
    document.getElementById("modalFoto").alt = "Foto " + a.nama;
    document.getElementById("modalPeran").textContent = a.peran;
    document.getElementById("modalNama").textContent = a.nama;
    document.getElementById("modalLahir").textContent = a.tanggalLahir;
    document.getElementById("modalKota").textContent = a.asalKota;
    document.getElementById("modalNim").textContent = a.nim;
    document.getElementById("modalMatkul").textContent = a.mataKuliahFavorit;

    // wishlist negara bendera jika ada kode, emoji globe jika belum
    const wishlist = document.getElementById("modalWishlist");
    wishlist.innerHTML = "";
    a.wishlistNegara.slice(0, 3).forEach(function (n) {
        const li = document.createElement("li");

        if (n.kode) {
            const img = document.createElement("img");
            img.src = "https://flagcdn.com/w40/" + n.kode.toLowerCase() + ".png";
            img.alt = ""; // nama negara sudah tertulis di samping gambar
            li.appendChild(img);
        } else {
            const globe = document.createElement("span");
            globe.className = "wishlist__emoji";
            globe.textContent = "🌏";
            globe.setAttribute("aria-hidden", "true");
            li.appendChild(globe);
        }

        li.appendChild(document.createTextNode(n.nama));
        wishlist.appendChild(li);
    });

    // tombol sosial media
    const sosmed = document.getElementById("modalSosmed");
    sosmed.innerHTML = "";
    Object.keys(a.sosmed).forEach(function (nama) {
        const link = document.createElement("a");
        link.className = "btn";
        link.href = a.sosmed[nama];
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = nama.charAt(0).toUpperCase() + nama.slice(1);
        sosmed.appendChild(link);
    });

    // tombol CV
    const cvBox = document.getElementById("modalCv");
    cvBox.innerHTML = "";
    if (a.cv) {
        const cv = document.createElement("a");
        cv.className = "btn btn--accent";
        cv.href = a.cv;
        cv.target = "_blank";
        cv.rel = "noopener noreferrer";
        cv.textContent = "Lihat CV ATS";
        cvBox.appendChild(cv);
    }

    kartuTerakhir = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = "hidden"; // cegah scroll latar
    document.getElementById("modalClose").focus();
}

function closeMemberModal() {
    document.getElementById("memberModal").hidden = true;
    document.body.style.overflow = "";
    if (kartuTerakhir) kartuTerakhir.focus();
}

function setupModal() {
    const modal = document.getElementById("memberModal");
    document.getElementById("modalClose").addEventListener("click", closeMemberModal);
    modal.addEventListener("click", function (e) {
        if (e.target === modal) closeMemberModal();
    });
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && !modal.hidden) closeMemberModal();
    });
}
function altKegiatan(k) {
    if (k.alt && k.alt.charAt(0) !== "[") return k.alt;
    return k.judul + ": " + k.caption;
}
// 5. GALERI DOKUMENTASI
function renderGallery() {
    const grid = document.getElementById("galleryGrid");

    kegiatan.forEach(function (k) {
        const item = document.createElement("button");
        item.className = "gallery-item";
        item.type = "button";
        item.setAttribute("aria-label", "Perbesar foto " + k.judul);

        item.innerHTML =
            '<img src="' + k.foto + '" alt="' + altKegiatan(k) + '" loading="lazy">' +
            '<div class="gallery-item__body">' +
            '<p class="gallery-item__kategori">' + k.kategori + '</p>' +
            '<p class="gallery-item__judul">' + k.judul + '</p>' +
            '<p class="gallery-item__tanggal">' + k.tanggal + '</p>' +
            '</div>';

        item.addEventListener("click", function () {
            openLightbox(k.id);
        });

        grid.appendChild(item);
    });
}

// 6. LIGHTBOX
let itemTerakhir = null;

function openLightbox(id) {
    const k = kegiatan.find(function (item) { return item.id === id; });

    document.getElementById("lightboxImg").src = k.foto;
    document.getElementById("lightboxImg").alt = altKegiatan(k);
    document.getElementById("lightboxKategori").textContent = k.kategori;
    document.getElementById("lightboxJudul").textContent = k.judul;
    document.getElementById("lightboxTanggal").textContent = k.tanggal;
    document.getElementById("lightboxCaption").textContent = k.caption;

    itemTerakhir = document.activeElement;
    document.getElementById("lightbox").hidden = false;
    document.body.style.overflow = "hidden";
    document.getElementById("lightboxClose").focus();
}

function closeLightbox() {
    document.getElementById("lightbox").hidden = true;
    document.body.style.overflow = "";
    if (itemTerakhir) itemTerakhir.focus();
}

function setupLightbox() {
    const box = document.getElementById("lightbox");

    document.getElementById("lightboxClose").addEventListener("click", closeLightbox);

    box.addEventListener("click", function (e) {
        if (e.target === box) closeLightbox();
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && !box.hidden) closeLightbox();
    });
}
// 7. PETA WISHLIST
function namaTampil(a) {
    return a.panggilan && a.panggilan.charAt(0) !== "[" ? a.panggilan : a.nama;
}

// Ikon dart
function buatIkonDart(jumlah) {
    const svg =
        '<svg width="40" height="48" viewBox="0 0 40 48" aria-hidden="true">' +
        '<path d="M20 22 L6 4 L14 4 L20 14 L26 4 L34 4 Z" fill="#FFD84D" stroke="#111" stroke-width="2.5" stroke-linejoin="round"/>' +
        '<rect x="18" y="14" width="4" height="14" fill="#FAF6E9" stroke="#111" stroke-width="2.5"/>' +
        '<rect x="16.5" y="26" width="7" height="12" fill="#5F7A4F" stroke="#111" stroke-width="2.5"/>' +
        '<polygon points="16.5,38 23.5,38 20,47" fill="#111"/>' +
        '</svg>';
    const badge = jumlah > 1 ? '<span class="dart-marker__count">' + jumlah + '</span>' : "";

    return L.divIcon({
        className: "dart-marker",
        html: svg + badge,
        iconSize: [40, 48],
        iconAnchor: [20, 47],
        popupAnchor: [0, -44]
    });
}

function buatPopup(kode, info, daftarNama) {
    const fakta = info.fakta.map(function (f) { return "<li>" + f + "</li>"; }).join("");
    return (
        '<div class="popup">' +
        '<h3 class="popup__title">' +
        '<img class="popup__flag" src="https://flagcdn.com/w40/' + kode + '.png" alt="">' +
        info.nama +
        '</h3>' +
        '<p class="popup__who"><strong>Wishlist:</strong> ' + daftarNama.join(", ") + '</p>' +
        '<ul class="popup__facts">' + fakta + '</ul>' +
        '</div>'
    );
}

function renderMap() {
    const wadah = document.getElementById("wishMap");

    if (typeof L === "undefined") {
        wadah.textContent = "Peta gagal dimuat. Periksa koneksi internet.";
        return;
    }

    // 1. kelompokkan anggota berdasarkan negara wishlist-nya
    const peminat = {};
    anggota.forEach(function (a) {
        a.wishlistNegara.slice(0, 3).forEach(function (n) {
            if (!n.kode) return;
            const kode = n.kode.toLowerCase();
            if (!peminat[kode]) peminat[kode] = [];
            peminat[kode].push(namaTampil(a));
        });
    });

    // 2. buat peta dunia
    const map = L.map("wishMap", {
        minZoom: 2,
        maxBounds: [[-85, -180], [85, 180]],
        maxBoundsViscosity: 1
    }).setView([25, 15], 2);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 12,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // 3. satu dart per negara + satu tombol per negara
    const chips = document.getElementById("mapChips");
    const daftarKode = Object.keys(peminat).filter(function (kode) {
        if (!infoNegara[kode]) {
            console.warn("Data negara belum ada untuk kode: " + kode);
            return false;
        }
        return true;
    }).sort(function (a, b) {
        return infoNegara[a].nama.localeCompare(infoNegara[b].nama, "id");
    });

    daftarKode.forEach(function (kode) {
        const info = infoNegara[kode];
        const marker = L.marker([info.lat, info.lng], {
            icon: buatIkonDart(peminat[kode].length),
            title: info.nama,
            alt: "Penanda wishlist " + info.nama
        }).addTo(map);

        marker.bindPopup(buatPopup(kode, info, peminat[kode]), { maxWidth: 300 });

        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "btn map-chip";
        chip.innerHTML = '<img src="https://flagcdn.com/w40/' + kode + '.png" alt=""><span>' + info.nama + '</span>';
        chip.addEventListener("click", function () {
            wadah.scrollIntoView({ behavior: "smooth", block: "center" });
            map.flyTo([info.lat, info.lng], info.zoom || 5, { duration: 1.2 });
            map.once("moveend", function () { marker.openPopup(); });
        });
        chips.appendChild(chip);
    });
}
// 8. LOADING SCREEN
function setupLoader() {
    const loader = document.getElementById("loader");
    if (!loader) return;
    const MINIMAL_MS = 900;
    const MAKSIMAL_MS = 3000;
    const mulai = Date.now();
    let sudahDisembunyikan = false;
    function sembunyikan() {
        if (sudahDisembunyikan) return;
        sudahDisembunyikan = true;
        const sisa = Math.max(0, MINIMAL_MS - (Date.now() - mulai));
        setTimeout(function () {
            loader.classList.add("is-hidden");
            document.body.classList.remove("is-loading");
            setTimeout(function () { loader.remove(); }, 600);
        }, sisa);
    }
    if (document.readyState === "complete") {
        sembunyikan();
    } else {
        window.addEventListener("load", sembunyikan);
    }
    setTimeout(sembunyikan, MAKSIMAL_MS);
}
// 10. MUAT PETA HANYA SAAT MENDEKATI SECTION PETA
function muatLeaflet() {
    return new Promise(function (resolve, reject) {
        const css = document.createElement("link");
        css.rel = "stylesheet";
        css.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(css);

        const js = document.createElement("script");
        js.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        js.onload = resolve;
        js.onerror = reject;
        document.body.appendChild(js);
    });
}

function setupMapLazy() {
    const section = document.getElementById("peta");

    function mulai() {
        muatLeaflet().then(renderMap).catch(function () {
            document.getElementById("wishMap").textContent =
                "Peta gagal dimuat. Periksa koneksi internet.";
        });
    }

    if (!("IntersectionObserver" in window)) {
        mulai();
        return;
    }

    const pengamat = new IntersectionObserver(function (entri) {
        if (entri[0].isIntersecting) {
            pengamat.disconnect();
            mulai();
        }
    }, { rootMargin: "400px" });

    pengamat.observe(section);
}
setupLoader();
renderHeroMosaic();
setupNavbar();
renderMembers();
setupModal();
renderGallery();
setupLightbox();
setupMapLazy();