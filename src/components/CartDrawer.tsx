"use client";

import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import {
  X,
  Minus,
  Plus,
  Trash,
  ShoppingCart,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export function CartDrawer() {
  const { cart, cartOpen, setCartOpen, removeFromCart, updateQty, cartTotal, cartCount } =
    useCart();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCartOpen(false);
    };
    if (cartOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [cartOpen, setCartOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300",
          cartOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setCartOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        role="dialog"
        aria-label="Panier"
        aria-modal="true"
        className={cn(
          "fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out",
          cartOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <div className="flex items-center gap-2.5">
            <ShoppingCart size={20} className="text-primary" weight="fill" />
            <h2 className="text-base font-bold text-foreground">
              Votre Panier
            </h2>
            {cartCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[11px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </div>
          <button
            onClick={() => setCartOpen(false)}
            aria-label="Fermer le panier"
            className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-muted">
                <ShoppingCart size={28} className="text-muted-foreground" />
              </div>
              <div>
                <p className="text-base font-semibold text-foreground">
                  Votre panier est vide
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Ajoutez des produits pour commencer
                </p>
              </div>
              <Link
                href="/groupes-electrogenes"
                onClick={() => setCartOpen(false)}
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Voir les produits
                <ArrowRight size={14} />
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {cart.map((item) => (
                <li key={item.id} className="flex gap-4 px-6 py-4">
                  <div className="relative size-20 shrink-0 overflow-hidden rounded-xl border border-border bg-muted/40">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 min-w-0">
                    <p className="line-clamp-2 text-sm font-medium leading-snug text-foreground">
                      {item.name}
                    </p>
                    <p className="text-sm font-bold text-primary">
                      {(item.price * item.quantity).toLocaleString("fr-FR")} €
                    </p>
                    <div className="flex items-center justify-between">
                      {/* Qty controls */}
                      <div className="flex items-center overflow-hidden rounded-lg border border-border">
                        <button
                          onClick={() => updateQty(item.id, item.quantity - 1)}
                          aria-label="Diminuer la quantité"
                          className="flex size-8 items-center justify-center text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-sm font-semibold text-foreground">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, item.quantity + 1)}
                          aria-label="Augmenter la quantité"
                          className="flex size-8 items-center justify-center text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Supprimer l'article"
                        className="flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                      >
                        <Trash size={15} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-border px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Sous-total</span>
              <span className="text-lg font-bold text-foreground">
                {cartTotal.toLocaleString("fr-FR")} €
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Frais de livraison calculés à l&apos;étape suivante
            </p>
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90">
              Passer la commande
              <ArrowRight size={15} />
            </button>
            <button
              onClick={() => setCartOpen(false)}
              className="w-full text-center text-sm text-muted-foreground underline-offset-2 hover:underline"
            >
              Continuer mes achats
            </button>
          </div>
        )}
      </div>
    </>
  );
}
