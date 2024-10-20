// just how the product is structured (what the obj looks like)
export interface Product {
  id?: number; // there's a question mark cos its optional - auto-generated
  name: string;
  description: string;
  price: number;
  stock: number;
}