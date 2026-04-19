# 🏗️ Shell App (Host)

Aplikasi ini adalah **Host/Orchestrator** utama dari Sasa Super App Ecosystem. Ia bertugas menggabungkan berbagai modul remote menjadi satu pengalaman pengguna yang utuh.

## 🔑 Key Features
- Dashboard Dashboard terpadu.
- Navigasi global dan manajemen user profile.
- **Asynchronous Bootstrapping** untuk resolusi Hook React yang stabil.

## ⚙️ Konfigurasi Module Federation
Dikonfigurasi di `next.config.js`:
- **Name**: `shell`
- **Remotes**: Menghubungkan ke `catalog` (3001) dan `order` (3002).
- **Shared**: Mengelola satu instance `react` dan `react-dom` untuk seluruh ekosistem.

## 📂 Struktur Direktori
- `components/HomePage.tsx`: Komponen utama dashboard (dipisahkan dari Pages untuk mendukung dynamic bootstrap).
- `pages/index.tsx`: Entry point yang menggunakan **dynamic import** ke `HomePage` untuk mencegah error "useState is null".
- `declarations.d.ts`: Definisi tipe data TypeScript untuk modul-modul remote.
- `pages/globals.css`: Konfigurasi Tailwind 4 dengan `@source` ke remote components agar CSS tetap sinkron.

## 🧩 Cara Kerja (Integration Logic)
`shell-app` menyimpan state `selectedId` menggunakan `useState`. State ini:
1. Dikirim ke `RemoteProductList` sebagai callback (`onSelectProduct`) untuk diubah.
2. Dikirim ke `RemoteOrderDetail` sebagai prop (`productId`) untuk menampilkan detail.

## 🚀 Script Running
```bash
npm run dev # Berjalan di localhost:3000
```
