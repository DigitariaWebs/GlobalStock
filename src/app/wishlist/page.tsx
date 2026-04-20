"use client";

import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import {
  Heart,
  ShoppingCart,
  Trash,
  ArrowRight,
  Tag,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, moveToCart, setCartOpen, isInCart } =
    useCart();

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-screen-xl px-4 py-10 lg:py-14">

        {/* Page header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Mon compte
            </p>
            <h1 className="flex items-center gap-3 text-2xl font-bold text-foreground lg:text-3xl">
              <Heart size={26} className="text-primary" weight="fill" />
              Ma liste de souhaits
              {wishlist.length > 0 && (
                <span className="text-base font-normal text-muted-foreground">
                  ({wishlist.length} article{wishlist.length > 1 ? "s" : ""})
                </span>
              )}
            </h1>
          </div>
          {wishlist.length > 0 && (
            <Link
              href="/groupes-electrogenes"
              className="hidden items-center gap-2 text-sm font-medium text-primary hover:underline sm:flex"
            >
              Continuer mes achats
              <ArrowRight size={14} />
            </Link>
          )}
        </div>

        {/* Empty state */}
        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-6 py-24 text-center">
            <div className="relative">
              <div className="flex size-24 items-center justify-center rounded-full bg-muted">
                <Heart size={40} className="text-muted-foreground/40" />
              </div>
              <div className="absolute -right-1 -top-1 flex size-7 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-white">
                0
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">
                Votre liste est vide
              </h2>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Ajoutez des produits à votre liste de souhaits pour les retrouver facilement et les commander quand vous êtes prêt.
              </p>
            </div>
            <Link
              href="/groupes-electrogenes"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              Explorer nos produits
              <ArrowRight size={15} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {wishlist.map((item) => {
              const discount = Math.round(
                ((item.oldPrice - item.price) / item.oldPrice) * 100,
              );
              const inCart = isInCart(item.id);

              return (
                <div
                  key={item.id}
                  className="group flex flex-col rounded-2xl border border-border bg-white shadow-sm transition-all duration-200 hover:border-primary/20 hover:shadow-md overflow-hidden"
                >
                  {/* Image area */}
                  <div className="relative bg-muted/30 h-52 flex items-center justify-center p-4">
                    <Link
                      href={`/products/${item.id}`}
                      className="absolute inset-0 z-1"
                      aria-label={`Voir ${item.name}`}
                    />

                    {/* Discount badge */}
                    <span className="pointer-events-none absolute left-3 top-3 z-2 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold text-white">
                      -{discount}%
                    </span>

                    {/* Remove button */}
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      aria-label="Retirer des favoris"
                      className="absolute right-3 top-3 z-3 flex size-8 items-center justify-center rounded-full bg-white shadow-sm text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                    >
                      <Trash size={14} />
                    </button>

                    <Image
                      src={item.image}
                      alt={item.name}
                      width={200}
                      height={160}
                      className="pointer-events-none object-contain w-full h-full transition-transform duration-300 group-hover:scale-[1.04]"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-1 flex-col gap-3 p-4">
                    <Link href={`/products/${item.id}`} tabIndex={-1} aria-hidden="true">
                      <p className="line-clamp-2 text-sm font-semibold leading-snug text-foreground">
                        {item.name}
                      </p>
                    </Link>

                    <div className="flex items-center gap-2 mt-auto">
                      <span className="text-base font-bold text-primary">
                        {item.price.toLocaleString("fr-FR")} €
                      </span>
                      <span className="text-xs text-muted-foreground line-through">
                        {item.oldPrice.toLocaleString("fr-FR")} €
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          moveToCart(item.id);
                          setCartOpen(true);
                        }}
                        className={cn(
                          "flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-bold transition-all",
                          inCart
                            ? "bg-primary/10 text-primary cursor-default"
                            : "bg-primary text-white hover:opacity-90",
                        )}
                      >
                        <ShoppingCart size={13} weight="fill" />
                        {inCart ? "Dans le panier" : "Ajouter au panier"}
                      </button>

                      <Link
                        href={`/products/${item.id}`}
                        className="flex items-center justify-center rounded-xl border border-border px-3 py-2.5 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                      >
                        <Tag size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
