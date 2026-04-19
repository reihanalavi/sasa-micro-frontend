# 🛒 Order App (Remote)

Aplikasi ini bertindak sebagai **Remote App** yang menangani logika checkout dan detail pesanan produk sosis Sasa.

## 🔑 Key Features
- Mengekspos komponen `OrderDetail`.
- Menampilkan ringkasan pesanan berdasarkan ID produk yang diterima.
- Desain kartu checkout yang premium.

## ⚙️ Konfigurasi Module Federation
Dikonfigurasi di `next.config.js`:
- **Name**: `order`
- **Exposes**: `'./OrderDetail': './components/OrderDetail.tsx'`
- **Port**: 3002

## 📂 Struktur Direktori
- `components/`: Berisi `OrderDetail.tsx`.
- `pages/`: Halaman testing mandiri di localhost:3002.

## 🧩 Cara Kerja (Exposed Component)
Komponen `OrderDetail` menerima prop:
- `productId`: Digunakan untuk mencari detail produk dan menampilkannya di ringkasan order. Jika `null`, akan menampilkan state "Keranjang Kosong".

## 🚀 Script Running
```bash
npm run dev # Berjalan di localhost:3002
```
