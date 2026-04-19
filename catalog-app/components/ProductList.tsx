import { Product } from '@sasa/shared';

/**
 * ProductList Component (Remote Module)
 * 
 * Komponen ini diekspos melalui Module Federation untuk digunakan oleh Shell App.
 * Menampilkan daftar produk sosis dengan interaksi pemilihan produk.
 * 
 * @param {Function} onSelectProduct - Callback untuk mengirimkan ID produk terpilih ke Host.
 * @param {string} selectedId - ID produk yang sedang aktif/terpilih untuk sinkronisasi UI.
 */
export default function ProductList({ onSelectProduct, selectedId }: { onSelectProduct?: (product: Product) => void, selectedId?: string }) {
  // Mock data produk: Dalam realita bisa ditarik dari Firestore/API
  const products: Product[] = [
    { id: 'SOS-001', name: 'Sosis Obong Ori', price: 15000, desc: 'Sosis bakar bumbu original' },
    { id: 'SOS-002', name: 'Sosis Obong Jumbo', price: 25000, desc: 'Ukuran ekstra kenyang' },
    { id: 'SOS-003', name: 'Sosis Keju Meleleh', price: 18000, desc: 'Keju lumer di dalam' },
  ];

  return (
    <div className="flex flex-col gap-4">
      {products.map((p) => (
        <div 
          key={p.id} 
          className={`group flex items-center justify-between p-5 bg-white rounded-3xl border-2 transition-all duration-300 ${
            selectedId === p.id 
            ? 'border-orange-500 bg-orange-50/50 shadow-lg shadow-orange-500/10' 
            : 'border-gray-100 hover:border-orange-200 hover:shadow-md'
          }`}
        >
          <div className="flex-1">
             <div className="flex items-center gap-2 mb-1">
                <h3 className="font-black text-gray-900 leading-none">{p.name}</h3>
                {selectedId === p.id && <span className="text-[10px] bg-orange-500 text-white px-2 py-0.5 rounded-full font-bold">AKTIF</span>}
             </div>
             <p className="text-xs text-gray-400 mb-2 font-medium">{p.desc}</p>
             <p className="text-orange-600 font-black tracking-tight">Rp {p.price.toLocaleString('id-ID')}</p>
          </div>

          <button 
            onClick={() => onSelectProduct?.(p)}
            className={`cursor-pointer ml-4 px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${
              selectedId === p.id 
              ? 'bg-zinc-900 text-white shadow-lg' 
              : 'bg-orange-500 text-white hover:bg-orange-600 hover:scale-105 active:scale-95 shadow-md shadow-orange-500/20'
            }`}
          >
            {selectedId === p.id ? 'Terpilih ✅' : 'Pilih'}
          </button>
        </div>
      ))}
    </div>
  );
}