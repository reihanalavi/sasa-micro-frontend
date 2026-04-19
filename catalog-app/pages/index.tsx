/**
 * HomePage (Catalog Preview Page)
 * 
 * Halaman utama dari Catalog App. Digunakan untuk melihat tampilan katalog
 * secara mandiri (standalone) di http://localhost:3001.
 */
import ProductList from '../components/ProductList'

export default function HomePage() {
  // Filter chips untuk kategori (Hanya simulasi UI)
  const categories = ['Semua', 'Sosis', 'Nugget', 'Bakso', 'Promo'];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 dark:bg-zinc-950 dark:text-gray-100">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-30 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600 text-white font-bold">S</div>
              <span className="text-xl font-bold tracking-tight">Sasa <span className="text-orange-600">Catalog</span></span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <button className="rounded-full bg-gray-100 p-2 text-gray-400 hover:text-orange-600 dark:bg-zinc-900">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <div className="h-6 w-px bg-gray-200 dark:bg-zinc-800" />
                <button className="text-sm font-medium hover:text-orange-600">Keluar</button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Sosis Obong <span className="text-orange-600">Sasa</span>
          </h1>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            Kelezatan bintang lima dalam setiap gigitan.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-10 space-y-6">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400 group-focus-within:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="Cari menu sosis favoritmu..." 
              className="block w-full rounded-2xl border border-gray-200 bg-gray-50 py-4 pl-12 pr-4 text-sm outline-none transition-all placeholder:text-gray-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 dark:border-zinc-800 dark:bg-zinc-900/50 dark:focus:border-orange-500"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <button 
                key={cat}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  i === 0 
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/30' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-zinc-900 dark:text-gray-400 dark:hover:bg-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Pemanggilan Komponen Utama Katalog */}
        <div className="rounded-3xl bg-gray-50 p-6 dark:bg-zinc-900/30">
          <ProductList />
        </div>
      </main>

      <footer className="mt-20 border-t border-gray-200 py-10 dark:border-zinc-800">
        <div className="text-center text-sm text-gray-500">
          &copy; 2026 Sasa Sosis Obong. All rights reserved.
        </div>
      </footer>
    </div>
  )
}