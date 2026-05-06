export type Currency = 'MXN' | 'USD';

export type ProductStatus = 'draft' | 'active' | 'paused' | 'sold_out';

export interface ProductSummary {
  id: string;
  title: string;
  price: number;
  currency: Currency;
  stock: number;
  sellerId: string;
  thumbnailUrl?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  parentId?: string | null;
}

export interface CartItem {
  productId: string;
  quantity: number;
  unitPrice: number;
}

export interface OrderSummary {
  id: string;
  buyerId: string;
  total: number;
  currency: Currency;
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';
}
