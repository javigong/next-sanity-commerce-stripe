import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface simplifiedProduct {
  _id: string;
  imageUrl: string;
  price: number;
  name: string;
  slug: string;
  categoryName: string;
}
export interface fullProduct {
  _id: string;
  images: SanityImageSource[];
  price: number;
  price_id: string;
  name: string;
  description: string;
  slug: string;
  categoryName: string;
}