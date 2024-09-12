// export type Category = {
//   date_created?: string | null;
//   date_updated?: string | null;
//   description?: string | null;
//   id: string;
//   name?: string | null;
//   user_created?: string | null;
//   user_updated?: string | null;
// };

// export type ProductCategory = {
//   category_id?: string | Category | null;
//   id: number;
//   product_id?: string | Product | null;
// };

// export type ProductImage = {
//   date_created?: string | null;
//   date_updated?: string | null;
//   id: string;
//   image?: string | null;
//   is_primary?: boolean | null;
//   product_id?: string | Product | null;
//   user_created?: string | null;
//   user_updated?: string | null;
// };

export interface Product {
  category: string | null;
  price?: number | null;
  id: string;
  description?: string | null;
  title?: string | null;
  image: string | null;
  rating?: { rate: number | null; count: number | null };
}
