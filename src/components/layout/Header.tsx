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
import { CaretDown, Heart, MagnifyingGlass, ShoppingCart, User, X, Gauge, SignOut, UserCircle, List, CaretRight } from "@phosphor-icons/react/dist/ssr";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedNav, setExpandedNav] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const headerRef = useRef<HTMLElement>(null);

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
      if (e.key === "Escape") { setSearchOpen(false); setMenuOpen(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
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
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Search — desktop only */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Rechercher"
            className="hidden lg:flex text-foreground/75 hover:bg-secondary hover:text-primary"
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

          {/* Profile — desktop only */}
          <div className="hidden lg:block">
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

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden ml-1 flex size-9 items-center justify-center rounded-full hover:bg-secondary text-foreground/75 transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X size={20} /> : <List size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile dropdown — absolute below header, lg+ hidden */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-t border-border shadow-xl overflow-y-auto max-h-[calc(100dvh-5rem)]">
          <nav className="py-2">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => setExpandedNav(expandedNav === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between px-5 py-3 text-[14px] font-medium text-foreground/80 hover:text-primary hover:bg-secondary/50 transition-colors"
                    >
                      {item.label}
                      <CaretRight size={14} className={cn("transition-transform duration-200 text-foreground/40", expandedNav === item.label && "rotate-90")} />
                    </button>
                    {expandedNav === item.label && (
                      <div className="bg-secondary/30 border-l-2 border-primary/20 mx-5 mb-1 rounded-r-lg">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMenuOpen(false)}
                            className="block px-4 py-2 text-[13px] text-foreground/65 hover:text-primary transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "block px-5 py-3 text-[14px] font-medium transition-colors hover:text-primary hover:bg-secondary/50",
                      isActive(item) ? "text-primary" : "text-foreground/80"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Account */}
          <div className="border-t border-border px-5 py-4">
            {user ? (
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="size-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shrink-0">{initials}</div>
                  <p className="text-sm font-medium truncate">{user.name}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    href={user.role === "admin" ? "/account/admin" : "/account/profile"}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-secondary text-foreground/75 hover:text-primary transition-colors"
                  >
                    {user.role === "admin" ? <Gauge size={13} /> : <UserCircle size={13} />}
                    {user.role === "admin" ? "Dashboard" : "Profil"}
                  </Link>
                  <button
                    onClick={() => { handleLogout(); setMenuOpen(false); }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-destructive bg-destructive/10 hover:bg-destructive/20 transition-colors"
                  >
                    <SignOut size={13} />
                  </button>
                </div>
              </div>
            ) : (
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full rounded-full bg-primary text-white py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                <User size={16} />
                Se connecter
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
