export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discountedPrice: number;
  stockQuantity: number;
  lowStockThreshold: number;
  imageUrl: string;
  category: string;
}
