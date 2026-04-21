"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CaretDown, Heart, MagnifyingGlass, ShoppingCart, User, X, Gauge, SignOut, UserCircle } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";










type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const navItems: NavItem[] = [
  { label: "Accueil", href: "/" },
  {
    label: "Groupes Électrogènes",
    href: "/groupes-electrogenes",
    children: [
      { label: "Domestiques", href: "/groupes-electrogenes?type=Domestiques" },
      { label: "Inverters", href: "/groupes-electrogenes?type=Inverters" },
      { label: "De chantier", href: "/groupes-electrogenes?type=De chantier" },
      { label: "Industriels", href: "/groupes-electrogenes?type=Industriels" },
      {
        label: "Pièces & accessoires",
        href: "/groupes-electrogenes?type=Pi%C3%A8ces%20%26%20accessoires",
      },
    ],
  },
  {
    label: "Solaire",
    href: "/solaire",
    children: [
      { label: "Panneaux solaires", href: "/solaire?type=Panneaux%20solaires" },
      { label: "Onduleurs", href: "/solaire?type=Onduleurs" },
      {
        label: "Batteries solaires",
        href: "/solaire?type=Batteries%20solaires",
      },
      {
        label: "Pompes à chaleur",
        href: "/solaire?type=Pompes%20%C3%A0%20chaleur",
      },
    ],
  },
  {
    label: "Machines & Outillage Pro",
    href: "/machines-outillage-pro",
    children: [
      {
        label: "Nettoyeurs haute pression",
        href: "/machines-outillage-pro?type=Nettoyeurs%20haute%20pression",
      },
      {
        label: "Balayeuses & Autolaveuses",
        href: "/machines-outillage-pro?type=Balayeuses%20%26%20Autolaveuses",
      },
      {
        label: "Compresseurs",
        href: "/machines-outillage-pro?type=Compresseurs",
      },
      {
        label: "Équipement d'atelier",
        href: "/machines-outillage-pro?type=%C3%89quipement%20d'atelier",
      },
      {
        label: "Pompes à eau",
        href: "/machines-outillage-pro?type=Pompes%20%C3%A0%20eau",
      },
      { label: "Chantiers", href: "/machines-outillage-pro?type=Chantiers" },
      { label: "Jardin", href: "/machines-outillage-pro?type=Jardin" },
      {
        label: "Manutention",
        href: "/machines-outillage-pro?type=Manutention",
      },
    ],
  },
  { label: "Achat en gros", href: "/achat-en-gros" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { cartCount, wishlistCount, setCartOpen } = useCart();
  const { user, logout } = useAuth();
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const initials = user?.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const isActive = (item: NavItem) => {
    if (item.href === "/") return pathname === "/";
    return pathname === item.href || pathname.startsWith(item.href + "/");
  };

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [searchOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="mx-auto flex h-20 w-full max-w-screen-2xl items-center justify-between px-3">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/Logo.png"
            alt="GlobalStock"
            width={180}
            height={48}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Center — Nav or Search */}
        <div className="hidden flex-1 items-center justify-center lg:flex">
         <div className="relative flex items-center">

          {/* Nav links */}
          <nav
            className={cn(
              "flex items-center gap-8 transition-all duration-300",
              searchOpen ? "pointer-events-none opacity-0" : "opacity-100",
            )}
          >
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex items-center gap-1 text-sm font-medium text-foreground/75 transition-colors hover:text-primary focus:outline-none",
                      isActive(item) && "text-primary",
                    )}
                  >
                    <span className="relative pb-1">
                      {item.label}
                      {isActive(item) && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.75 rounded-full bg-primary" />
                      )}
                    </span>
                    <CaretDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                  </Link>

                  <div className="invisible absolute left-0 top-full z-50 min-w-52 translate-y-1 rounded-md border border-border bg-background py-1 opacity-0 shadow-md transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-foreground/75 transition-colors hover:bg-secondary hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative pb-1 text-sm font-medium text-foreground/75 transition-colors hover:text-primary",
                    isActive(item) && "text-primary",
                  )}
                >
                  {item.label}
                  {isActive(item) && (
                    <span className="absolute bottom-0 left-[5%] right-[5%] h-1 rounded-full bg-primary" />
                  )}
                </Link>
              ),
            )}
          </nav>

          {/* Search input overlay */}
          <div
            className={cn(
              "absolute inset-x-0 flex origin-right items-center gap-2 transition-all duration-300",
              searchOpen
                ? "pointer-events-auto scale-x-100 opacity-100"
                : "pointer-events-none scale-x-0 opacity-0",
            )}
          >
            <div className="relative flex-1">
              <MagnifyingGlass size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Rechercher un produit…"
                className="h-10 w-full rounded-full border border-border bg-secondary pl-9 pr-4 text-sm text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              />
            </div>
            <button
              onClick={() => setSearchOpen(false)}
              className="flex size-9 shrink-0 items-center justify-center rounded-full text-foreground/60 transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Fermer la recherche"
            >
              <X size={16} />
            </button>
          </div>

         </div>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Rechercher"
            className="text-foreground/75 hover:bg-secondary hover:text-primary"
            onClick={() => setSearchOpen((v) => !v)}
          >
            <MagnifyingGlass size={20} />
          </Button>

          <Button variant="ghost" size="icon" aria-label="Favoris" className="relative text-foreground/75 hover:bg-secondary hover:text-primary" asChild>
            <Link href="/wishlist">
              <Heart size={20} />
              {wishlistCount > 0 && (
                <span className="absolute right-1 top-1 flex size-3.5 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-white">
                  {wishlistCount}
                </span>
              )}
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Panier"
            className="relative text-foreground/75 hover:bg-secondary hover:text-primary"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute right-1 top-1 flex size-3.5 items-center justify-center rounded-full bg-destructive text-[9px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Button>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="ml-1 flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold transition-opacity hover:opacity-90 focus:outline-none"
                  aria-label="Mon compte"
                >
                  {initials}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-52">
                <div className="px-3 py-2">
                  <p className="text-sm font-medium truncate">{user.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                </div>
                <DropdownMenuSeparator />
                {user.role === "admin" ? (
                  <DropdownMenuItem asChild>
                    <Link href="/account/admin" className="flex items-center gap-2 cursor-pointer">
                      <Gauge size={15} />
                      Tableau de Bord
                    </Link>
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem asChild>
                    <Link href="/account/profile" className="flex items-center gap-2 cursor-pointer">
                      <UserCircle size={15} />
                      Mon Profil
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-destructive focus:text-destructive cursor-pointer"
                >
                  <SignOut size={15} />
                  Déconnexion
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              href="/login"
              aria-label="Mon compte"
              className="ml-1 flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90"
            >
              <User size={16} />
            </Link>
          )}
        </div>

      </div>
    </header>
  );
}
