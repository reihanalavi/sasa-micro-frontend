/**
 * HomePage (Order Preview Page)
 * 
 * Halaman utama untuk testing modul Order secara mandiri di http://localhost:3002.
 */
import OrderDetail from '../components/OrderDetail';

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-tr from-gray-50 to-blue-50 py-20 dark:from-zinc-950 dark:to-zinc-900">
      <div className="mx-auto max-w-xl px-4">
        <div className="mb-10 text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg text-xl mb-4 dark:bg-zinc-800">📦</div>
          <h1 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white uppercase italic">Order <span className="text-blue-600">Module</span></h1>
          <p className="mt-2 text-sm text-gray-500 font-medium dark:text-gray-400">Standalone Preview & Testing Page</p>
        </div>
        
        {/* Testing kirim ID manual */}
        <OrderDetail product={{ id: 'SOS-001', name: 'Sosis Obong Ori', price: 15000, desc: 'Sosis bakar bumbu original' }} />
        
        <div className="mt-10 text-center">
          <button className="text-sm font-bold text-gray-400 hover:text-blue-600 transition-colors">
            Kembali ke Katalog &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}