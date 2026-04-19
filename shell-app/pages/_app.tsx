/**
 * _app.tsx (Shell Host Entry)
 * 
 * Root wrapper untuk aplikasi Host. Mengimpor desain global
 * yang akan diterapkan ke seluruh halaman dashboard.
 */
import type { AppProps } from 'next/app';
import './globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}