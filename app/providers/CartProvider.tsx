"use client";

import { ReactNode } from "react";
import { CartProvider as ShoppingCartProvider } from "use-shopping-cart";

export default function CartProvider({ children }: { children: ReactNode }) {
  const env = process.env.NODE_ENV;

  return (
    <ShoppingCartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl={
        env === "production"
          ? `${process.env.VERCEL_URL}/stripe/success`
          : "http://localhost:3000/stripe/success"
      }
      cancelUrl={
        env === "production"
          ? `${process.env.VERCEL_URL}/stripe/error`
          : "http://localhost:3000/stripe/error"
      }
      currency="USD"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </ShoppingCartProvider>
  );
}
