"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: SanityImageSource;
  sku: string;
}
export default function AddToBag({
  name,
  description,
  price,
  currency,
  image,
  sku,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name,
    description,
    price,
    currency,
    sku,
    image: urlFor(image).url(),
  }

  return <Button onClick={()=>{
    addItem(product);
    handleCartClick();
  }}>Add To Cart</Button>;
}
