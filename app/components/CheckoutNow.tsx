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

  function buyNow(priceId: string) {
    checkoutSingleItem(priceId);
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
    <Button variant={"secondary"}
      onClick={() => {
        buyNow(product.price_id);
      }}
    >
      Checkout Now
    </Button>
  );
}
