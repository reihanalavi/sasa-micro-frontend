/**
 * _app.tsx (Root Wrapper)
 * 
 * Entry point utama untuk aplikasi Catalog. Di sini kita memuat Global CSS.
 * Semua komponen yang dirender akan dibungkus oleh komponen App ini.
 */
import type { AppProps } from 'next/app'
import './globals.css' // Memuat Tailwind CSS untuk seluruh aplikasi

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}