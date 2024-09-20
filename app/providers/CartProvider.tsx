"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { CartProvider as ShoppingCartProvider } from "use-shopping-cart";

export default function CartProvider({ children }: { children: ReactNode }) {

  return (
    <ShoppingCartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl={"http://localhost:3000/success"}
      cancelUrl={"http://localhost:3000/error"}
      currency="USD"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </ShoppingCartProvider>
  );
}
