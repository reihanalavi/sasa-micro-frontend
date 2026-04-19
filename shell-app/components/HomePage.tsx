/**
 * HomePage Component (Shell Dashboard)
 * 
 * Ini adalah pusat orkestrasi dari Sasa Super App. Komponen ini:
 * 1. Mengimpor modul remote secara dinamis (Catalog & Order).
 * 2. Mengelola state 'selectedId' untuk sinkronisasi data antar remote.
 * 3. Menyediakan layout dashboard utama.
 */
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { Product } from '@sasa/shared';

// Impor dinamis modul remote dengan loading placeholder
const RemoteProductList = dynamic(() => import('catalog/ProductList'), { 
  ssr: false,
  loading: () => <div className="h-40 animate-pulse rounded-2xl bg-gray-100 dark:bg-zinc-800" />
});
const RemoteOrderDetail = dynamic(() => import('order/OrderDetail'), { 
  ssr: false,
  loading: () => <div className="h-40 animate-pulse rounded-2xl bg-gray-100 dark:bg-zinc-800" />
});

export default function HomePage() {
  // State untuk menyimpan objek produk terpilih dengan type Product
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const selectedId = selectedProduct?.id || '';

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 dark:bg-zinc-950 dark:text-white">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-tr from-orange-600 to-red-600 text-white font-black italic shadow-lg shadow-orange-500/20">S</div>
              <span className="text-xl font-black tracking-tighter uppercase italic">Sasa<span className="text-orange-600">SuperApp</span></span>
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-4 text-sm font-bold text-gray-500">
                <span className="hover:text-orange-600 cursor-pointer transition-colors">Dashboard</span>
                <span className="hover:text-orange-600 cursor-pointer transition-colors">Riwayat</span>
                <span className="hover:text-orange-600 cursor-pointer transition-colors">Voucher</span>
              </div>
              <div className="h-8 w-8 rounded-full bg-linear-to-tr from-gray-200 to-gray-400 border-2 border-white shadow-sm dark:border-zinc-800" />
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Hero Banner */}
        <div className="relative mb-12 overflow-hidden rounded-[3rem] bg-gray-900 p-8 text-white md:p-14 dark:bg-zinc-900">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-orange-600/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-1 w-24 -translate-x-1/2 bg-orange-600 rounded-t-full shadow-[0_0_20px_rgba(234,88,12,0.5)]" />
          
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-4xl font-black tracking-tight sm:text-6xl italic uppercase">
              Sosis Lezat <br /> <span className="text-orange-500 uppercase not-italic">Tanpa Ribet.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-400 font-medium">
              Selamat datang kembali, <span className="text-white font-bold">Reihan!</span> Siap untuk menambah stok kebahagiaan hari ini?
            </p>
            <div className="mt-10 flex gap-4">
              <button className="rounded-full bg-orange-600 px-8 py-4 font-bold text-white shadow-xl shadow-orange-600/30 transition-all hover:scale-105 active:scale-95">Pesan Sekarang</button>
              <button className="rounded-full bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/20">Info Promo</button>
            </div>
          </div>
        </div>

        {/* Ecosystem Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* CATALOG SECTION */}
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center justify-between px-2">
              <div>
                <h2 className="text-2xl font-black tracking-tight tracking-tight uppercase italic">Katalog <span className="text-orange-600">Produk</span></h2>
                <p className="text-sm font-medium text-gray-400">Dikelola oleh Micro-frontend Katalog</p>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-orange-600 dark:bg-orange-950 dark:text-orange-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m7 6H4" />
                </svg>
              </div>
            </div>
            
            <div className="rounded-[2.5rem] border border-gray-100 bg-white p-6 shadow-xl shadow-gray-200/50 dark:border-zinc-800 dark:bg-zinc-900/50 dark:shadow-none">
              <RemoteProductList 
                selectedId={selectedId} 
                onSelectProduct={(product: any) => setSelectedProduct(product)} 
              />
            </div>
          </div>

          {/* ORDER SECTION */}
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center justify-between px-2">
              <div>
                <h2 className="text-2xl font-black tracking-tight uppercase italic text-blue-600 dark:text-blue-400">Checkout <span className="text-gray-900 dark:text-white">Order</span></h2>
                <p className="text-sm font-medium text-gray-400">Dikelola oleh Micro-frontend Order</p>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>

            <div className="sticky top-24">
              <RemoteOrderDetail product={selectedProduct} />
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-20 border-t border-gray-200 py-12 dark:border-zinc-800">
        <div className="text-center">
          <p className="text-sm font-medium text-gray-400 tracking-widest uppercase italic">&copy; 2026 Sasa Super App Ecosystem. Verified Micro-frontend Architecture.</p>
        </div>
      </footer>
    </div>
  );
}
