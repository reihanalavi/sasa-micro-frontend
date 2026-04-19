# 📦 Catalog App (Remote)

Aplikasi ini bertindak sebagai **Remote App** dalam ekosistem Sasa yang bertanggung jawab atas manajemen dan tampilan daftar produk.

## 🔑 Key Features
- Mengekspos komponen `ProductList`.
- Mendukung integrasi callback untuk pemilihan produk.
- Styling premium menggunakan Tailwind CSS 4.

## ⚙️ Konfigurasi Module Federation
Dikonfigurasi di `next.config.js`:
- **Name**: `catalog`
- **Exposes**: `'./ProductList': './components/ProductList.tsx'`
- **Port**: 3001

## 📂 Struktur Direktori
- `components/`: Berisi `ProductList.tsx` yang merupakan komponen inti yang dibagikan.
- `pages/`: Halaman mandiri (`index.tsx`) untuk testing modul katalog tanpa Shell.
- `public/`: Asset statis (gambar, dll).

## 🧩 Cara Kerja (Exposed Component)
Komponen `ProductList` menerima prop berikut:
- `onSelectProduct`: Fungsi callback yang akan dipanggil saat user mengklik tombol "Pilih". Mengirimkan `productId` ke host.
- `selectedId`: ID produk yang sedang dipilih di aplikasi Host, digunakan untuk menampilkan state "Terpilih ✅".

## 🚀 Script Running
```bash
npm run dev # Berjalan di localhost:3001
```
