/**
 * OrderDetail Component (Remote Module)
 * 
 * Komponen ini diekspos melalui Module Federation untuk digunakan oleh Shell App.
 * Menampilkan ringkasan pesanan dan aksi checkout berdasarkan produk yang dipilih.
 * 
 * @param {any} product - Objek produk lengkap yang dikirim dari Host.
 */
import React from 'react';
import { Product } from '@sasa/shared';

const OrderDetail = ({ product }: { product: Product | null }) => {
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[2.5rem] border-2 border-dashed border-gray-200 bg-white p-12 text-center dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mb-4 h-20 w-20 rounded-full bg-gray-50 flex items-center justify-center text-3xl dark:bg-zinc-900">🛒</div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Keranjang Kosong</h3>
        <p className="mt-2 text-sm text-gray-500 max-w-[200px] dark:text-gray-400">Silakan pilih sosis lezat dari katalog untuk memulai pesanan.</p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-2xl shadow-blue-500/10 dark:bg-zinc-900">
      {/* Decorative Gradient Background */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl shadow-none" />
      
      <div className="relative">
        <div className="flex items-center justify-between border-b border-gray-100 pb-6 dark:border-zinc-800">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">Ringkasan Order</h2>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Checkout Session</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-500/10">
            <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          {/* Selected Product Info */}
          <div className="flex items-center gap-4 rounded-2xl bg-gray-50 p-4 dark:bg-zinc-800/50">
            <div className="h-16 w-16 overflow-hidden rounded-xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white font-bold text-xl uppercase">
              {product.name.slice(0, 1)}
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">ID: {product.id}</p>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{product.name}</h3>
              <div className="mt-1 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button className="h-6 w-6 rounded-md bg-white border border-gray-200 flex items-center justify-center text-xs hover:bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700">-</button>
                  <span className="text-sm font-bold w-4 text-center">1</span>
                  <button className="h-6 w-6 rounded-md bg-white border border-gray-200 flex items-center justify-center text-xs hover:bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700">+</button>
                </div>
                <span className="font-black text-blue-600 dark:text-blue-400">Rp {product.price.toLocaleString('id-ID')}</span>
              </div>
            </div>
          </div>

          {/* Pricing Details */}
          <div className="space-y-3 px-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-semibold">Rp {product.price.toLocaleString('id-ID')}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Ongkos Kirim</span>
              <span className="text-green-600 font-bold uppercase tracking-tighter">Free</span>
            </div>
            <div className="h-px bg-gray-100 dark:bg-zinc-800" />
            <div className="flex justify-between">
              <span className="text-lg font-bold">Total Tagihan</span>
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Rp {product.price.toLocaleString('id-ID')}
              </span>
            </div>
          </div>

          <button className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gray-900 px-6 py-4 font-bold text-white transition-all hover:bg-blue-600 active:scale-95 dark:bg-white dark:text-zinc-900 dark:hover:bg-blue-500">
             <div className="absolute inset-0 w-full h-full bg-linear-to-r from-blue-500/0 via-white/10 to-blue-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
             <span>🚀</span>
             <span>Konfirmasi Pembelian</span>
          </button>
          
          <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest font-bold">Safe & Secure Payment</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;