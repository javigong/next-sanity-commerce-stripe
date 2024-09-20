"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  price_id: string;
  currency: string;
  image: SanityImageSource;
}
export default function AddToBag({
  name,
  description,
  price,
  price_id,
  currency,
  image,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name,
    description,
    price,
    price_id,
    currency,
    image: urlFor(image).url(),
  }

  return <Button onClick={()=>{
    addItem(product);
    handleCartClick();
  }}>Add To Cart</Button>;
}
