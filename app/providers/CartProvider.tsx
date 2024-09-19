"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { CartProvider as ShoppingCartProvider } from "use-shopping-cart";

export default function CartProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  console.log({pathname})
  
  return (
    <ShoppingCartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY!}
      successUrl={`${pathname}/success`}
      cancelUrl={`${pathname}/error`}
      currency="USD"
      billingAddressCollection={true}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </ShoppingCartProvider>
  );
}
