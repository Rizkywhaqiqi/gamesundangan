# Undangan Digital Side-Scrolling — Lionel & Gianni

Undangan interaktif seperti "game 2D": karakter mempelai berjalan di sepanjang taman. Tekan-tahan tombol ←/→ (atau keyboard) untuk berjalan; saat sampai ke checkpoint, modal isi undangan terbuka.

## Aset yang dipakai (upload ke Lovable Assets)
- `background.webp` → panorama dunia (dijadikan latar penuh yang di-scroll horizontal)
- `idle.gif` → karakter saat diam
- `right.gif` → karakter saat berjalan ke kanan
- `left.gif` → karakter saat berjalan ke kiri
- `walk.mp3` → sfx langkah (loop pelan saat tombol ditahan, volume ~0.4)

Semua diupload via `lovable-assets create` → `src/assets/{name}.asset.json`. File binary asli tidak disimpan di repo.

## Layout checkpoint (mengikuti ChatGPT_Image_24_Jul_2026_14.16.12.png)
Posisi X ditetapkan proporsional terhadap lebar background (asumsi lebar dunia = lebar natural background, mis. ~2400px). Persentase X dari kiri:

1. **Opening** (rumah pintu kayu, ~7%) — Halaman Pembuka & Intro
2. **Couple Story** (Love Café, ~22%) — Kisah Kami
3. **Event Details** (papan "Schedule", ~37%) — Detail Acara (Akad Nikah & Resepsi)
4. **Gallery** (gazebo, ~50%) — Galeri Foto
5. **RSVP** (arch "RSVP", ~62%) — Konfirmasi Kehadiran
6. **Wedding Wishes** (pohon lentera, ~76%) — Ucapan & Doa
7. **Thank You** (arch bunga kanan, ~93%) — Penutup

Marker pin (❤ dengan warna sesuai gambar: pink, orange, green, blue, purple, yellow, red) ditampilkan menempel di ground; label "Checkpoint N — Title" muncul di atas pin saat karakter mendekat.

## Nama tamu (dari URL)
- `/?to=Nama%20Tamu` → pembuka menampilkan "Kepada Yth. Nama Tamu".
- Tanpa parameter → "Kepada Yth. Bapak/Ibu/Saudara/i".
- Sanitasi: max 60 karakter, strip HTML.

## Isi setiap checkpoint (modal shadcn Dialog)
1. **Opening** — Selamat datang + nama tamu + "Lionel Messi & Gianni Infantino" + tombol "Buka Undangan"
2. **Couple Story** — foto & bio singkat kedua mempelai + kisah singkat
3. **Event Details** — Akad & Resepsi (tanggal, waktu, lokasi + tombol Google Maps + Add to Calendar). Placeholder: 12 Oktober 2026, Zurich (mudah diedit di `src/lib/wedding-config.ts`)
4. **Gallery** — grid foto placeholder 6 slot
5. **RSVP** — form: nama, jumlah tamu, hadir/tidak, pesan → simpan ke DB
6. **Wedding Wishes** — form ucapan + feed ucapan tamu lain (dari DB, realtime refetch)
7. **Thank You** — "Terima Kasih Telah Menjadi Bagian dari Hari Spesial Kami"

## Mekanik side-scroll
- Container full-screen (100dvh). Background dirender sebagai `<img>` besar dengan `transform: translateX(-cameraX)`.
- Karakter fixed di tengah bawah layar; kamera clamp antara 0 dan (worldWidth - viewportWidth).
- **Manual hold**: `pointerdown`/`pointerup` pada tombol ← / → dan keydown ←/→ men-set state `moving = "left" | "right"`; loop `requestAnimationFrame` menambah cameraX ~5 px/frame selama moving aktif.
- Saat bergerak: swap `<img>` karakter ke `right.gif`/`left.gif`, mainkan `walk.mp3` (loop). Saat berhenti: kembali ke `idle.gif`, pause sfx.
- Deteksi checkpoint: jika |cameraX - checkpointX| < 80px → tampilkan tombol floating "Buka [Nama Checkpoint]"; klik → buka modal (auto-pause gerak).
- Progress bar 7 titik di atas menandai checkpoint yang sudah dibuka (persist ke `sessionStorage`).

## Desain
- Font pair: `cormorant-karla` (heading serif elegan + body sans bersih)
- Warna hangat pastel taman (hijau, cream, gold) sebagai semantic tokens di `src/styles.css` (oklch)
- Modal bergaya kartu kertas dengan border floral
- Mobile-first; kontrol tombol besar kiri/kanan di pojok bawah, aman touch
- Preview device di-set ke mobile

## Backend (Lovable Cloud)
Aktifkan Cloud, buat dua tabel via migration (dengan GRANT):

- `rsvps`: `id`, `guest_name`, `attendance` ('attending'|'not_attending'), `party_size` int, `message` text, `created_at`
- `wishes`: `id`, `guest_name`, `message`, `created_at`

RLS:
- `wishes`: `anon` boleh `INSERT` dan `SELECT` (feed publik)
- `rsvps`: `anon` boleh `INSERT` saja (privasi kehadiran)

Server functions publik (`createServerFn` dengan server publishable client, tanpa `requireSupabaseAuth`):
- `submitRsvp({ guest_name, attendance, party_size, message })` — validasi zod
- `submitWish({ guest_name, message })` — validasi zod (nama ≤80, message ≤500)
- `listWishes()` — return 50 ucapan terbaru

Feed di checkpoint 6 pakai TanStack Query; setelah submit → `invalidateQueries(['wishes'])`.

## Struktur file baru
```
src/lib/wedding-config.ts               # nama, tanggal, lokasi, checkpoint meta (x%, label, warna pin)
src/lib/wedding.functions.ts            # submitRsvp, submitWish, listWishes
src/lib/sanitize.ts                     # sanitasi ?to param
src/components/wedding/World.tsx        # scroll horizontal + kamera + karakter + pin
src/components/wedding/Controls.tsx     # tombol ← / → (hold) + progress dots
src/components/wedding/CheckpointModal.tsx
src/components/wedding/checkpoints/{Opening,CoupleStory,EventDetails,Gallery,Rsvp,Wishes,ThankYou}.tsx
src/assets/{background.webp,idle.gif,left.gif,right.gif,walk.mp3}.asset.json
src/routes/index.tsx                    # render <World/> (menggantikan placeholder)
supabase/migrations/xxxx_wedding.sql    # tabel + RLS + GRANT
```

Head/SEO di `index.tsx`: title "Undangan Pernikahan Lionel & Gianni", description, og:title/description, og:image (URL background asset), twitter:card.

## Verifikasi
- Build otomatis oleh harness.
- Playwright: buka `/?to=Budi`, cek nama muncul di modal opening, tekan tombol → cameraX naik & karakter pakai right.gif, sampai di checkpoint 1, buka modal; submit sebuah wish, cek feed muncul.

## Yang TIDAK termasuk (bisa ditambah nanti)
- Musik latar (hanya sfx langkah)
- Daftar tamu di DB (pakai URL `?to=`)
- Countdown timer, share WhatsApp, foto asli galeri (masih placeholder)
