/**
 * _app.tsx (Order App Entry)
 * 
 * Root wrapper untuk aplikasi Order. Memastikan Global CSS dimuat
 * baik saat berjalan mandiri maupun saat di-load oleh Host.
 */
import type { AppProps } from 'next/app';
import './globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}