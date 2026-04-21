"use client";

import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/ui/CartDrawer";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartDrawer />
    </CartProvider>
  );
}
