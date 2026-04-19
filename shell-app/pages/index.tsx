/**
 * Index Page (The Bootstrapper)
 * 
 * PENTING: File ini bertindak sebagai "Asynchronous Entry Point".
 * Kita tidak langsung menulis logic di sini, melainkan mengimpor HomePage secara dinamis.
 * 
 * Kenapa? Agar Module Federation memiliki waktu untuk menginisialisasi shared scope (React, ReactDOM)
 * sebelum ada Hook (useState, dll) yang dipanggil. Ini mencegah error:
 * "TypeError: Cannot read properties of null (reading 'useState')"
 */
import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('../components/HomePage'), {
  ssr: false,
});

export default function Index() {
  return <HomePage />;
}