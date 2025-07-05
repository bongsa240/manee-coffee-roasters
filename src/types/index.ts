// Product types for future e-commerce integration
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  features: string[];
  category: string;
  inStock: boolean;
  weight: string;
  roastLevel: 'light' | 'medium' | 'dark';
  origin: string;
  tastingNotes: string[];
}

export interface CartItem {
  productId: string;
  quantity: number;
  product: Product;
}

export interface Customer {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  address?: Address;
}

export interface Address {
  id: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface Order {
  id: string;
  customerId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: Address;
  createdAt: Date;
  updatedAt: Date;
}