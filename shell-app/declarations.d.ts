/**
 * Module Declarations (TypeScript Definitions)
 * 
 * PENTING: Jangan gunakan 'import' di level paling atas (top-level) file ini
 * agar deklarasi module 'catalog/...' tetap terbaca sebagai Global ambient.
 */

declare module 'catalog/ProductList' {
  import React from 'react';
  
  interface ProductListProps {
    // Menggunakan inline import untuk tetap menjaga sifat ambient file ini
    onSelectProduct: (product: import('@sasa/shared').Product) => void;
    selectedId?: string | null;
  }

  const ProductList: React.ComponentType<ProductListProps>;
  export default ProductList;
}

declare module 'order/OrderDetail' {
  import React from 'react';

  interface OrderDetailProps {
    product: import('@sasa/shared').Product | null;
  }

  const OrderDetail: React.ComponentType<OrderDetailProps>;
  export default OrderDetail;
}