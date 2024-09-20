"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
import { ProductCart } from "./AddToBag";

export default function CheckoutNow({
  name,
  description,
  price,
  price_id,
  currency,
  image,
}: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart();

  async function buyNow(priceId: string) {
    try {
      await checkoutSingleItem(priceId);
    } catch (error) {
      console.error(error);
    }
  }

  const product = {
    name,
    description,
    price,
    price_id,
    currency,
    image: urlFor(image).url(),
  };

  return (
    <Button
      variant={"outline"}
      onClick={() => {
        buyNow(product.price_id);
      }}
    >
      Checkout Now
    </Button>
  );
}
