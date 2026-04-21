"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { mockOrders, mockAddresses } from "@/lib/mock-data";
import Image from "next/image";
import Link from "next/link";
import {
  User, Package, Heart, MapPin, Gear, PencilSimple, Plus,
  CheckCircle, Clock, Truck, XCircle, House, Buildings,
  ArrowLeft, SignOut,
} from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

type Tab = "profil" | "commandes" | "wishlist" | "adresses" | "parametres";

const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: "profil", label: "Profil", icon: User },
  { id: "commandes", label: "Commandes", icon: Package },
  { id: "wishlist", label: "Liste de souhaits", icon: Heart },
  { id: "adresses", label: "Adresses", icon: MapPin },
  { id: "parametres", label: "Paramètres", icon: Gear },
];

const statusConfig = {
  "Livré": { color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400", icon: CheckCircle },
  "Expédié": { color: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400", icon: Truck },
  "En attente": { color: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400", icon: Clock },
  "Annulé": { color: "bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400", icon: XCircle },
} as const;

function StatusBadge({ status }: { status: keyof typeof statusConfig }) {
  const cfg = statusConfig[status];
  const Icon = cfg.icon;
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium", cfg.color)}>
      <Icon size={11} weight="fill" />
      {status}
    </span>
  );
}

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const { wishlist } = useCart();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("profil");

  const userOrders = mockOrders.filter((o) => o.email === user?.email);

  const initials = user?.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="flex min-h-screen bg-secondary/40">

      {/* Sidebar */}
      <aside className="hidden w-64 shrink-0 flex-col border-r border-border bg-background lg:flex">

        {/* Top */}
        <div className="border-b border-border p-5">
          <Link href="/" className="mb-5 flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft size={14} />
            <span className="text-xs font-medium">Retour à la boutique</span>
          </Link>
          <Image src="/Logo.png" alt="GlobalStock" width={140} height={38} className="h-8 w-auto" />
        </div>

        {/* User card */}
        <div className="border-b border-border p-5">
          <div className="flex items-center gap-3">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {initials}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-foreground">{user?.name}</p>
              <p className="truncate text-xs text-muted-foreground">{user?.email}</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-0.5 p-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  activeTab === tab.id
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/60 hover:bg-secondary hover:text-foreground"
                )}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="border-t border-border p-3">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-destructive/8 hover:text-destructive"
          >
            <SignOut size={16} />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-border bg-background px-4 py-3 lg:hidden">
        <Link href="/" className="flex items-center gap-2 text-muted-foreground">
          <ArrowLeft size={16} />
          <Image src="/Logo.png" alt="GlobalStock" width={120} height={32} className="h-7 w-auto" />
        </Link>
        <div className="flex size-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
          {initials}
        </div>
      </div>

      {/* Mobile bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-border bg-background lg:hidden">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex flex-1 flex-col items-center gap-0.5 py-2.5 text-[10px] font-medium transition-colors",
                activeTab === tab.id ? "text-primary" : "text-muted-foreground"
              )}
            >
              <Icon size={18} />
              {tab.label.split(" ")[0]}
            </button>
          );
        })}
      </div>

      {/* Main content */}
      <main className="flex-1 overflow-auto pt-16 pb-20 lg:pt-0 lg:pb-0">
        <div className="mx-auto max-w-3xl px-4 py-8 lg:px-8">

          {/* PROFIL */}
          {activeTab === "profil" && (
            <div className="space-y-5">
              <div>
                <h1 className="text-xl font-bold text-foreground">Mon Profil</h1>
                <p className="mt-0.5 text-sm text-muted-foreground">Vos informations personnelles</p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
                {/* Cover */}
                <div className="h-24 bg-linear-to-r from-[#0f2236] via-[#1E3A5F] to-[#2a5080]" />
                <div className="px-6 pb-6">
                  <div className="-mt-8 mb-4 flex items-end justify-between">
                    <div className="flex size-16 items-center justify-center rounded-2xl border-4 border-background bg-primary text-xl font-bold text-primary-foreground shadow-sm">
                      {initials}
                    </div>
                    <button className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground/70 transition-colors hover:border-primary hover:text-primary">
                      <PencilSimple size={12} />
                      Modifier
                    </button>
                  </div>
                  <p className="text-lg font-bold text-foreground">{user?.name}</p>
                  <p className="text-sm text-muted-foreground">{user?.email}</p>
                </div>
                <div className="grid grid-cols-2 divide-x divide-y divide-border border-t border-border sm:grid-cols-4 sm:divide-y-0">
                  {[
                    { label: "Téléphone", value: user?.phone ?? "—" },
                    { label: "Membre depuis", value: user?.joinDate ? new Date(user.joinDate).toLocaleDateString("fr-FR", { month: "long", year: "numeric" }) : "—" },
                    { label: "Commandes", value: userOrders.length },
                    { label: "Favoris", value: wishlist.length },
                  ].map((f) => (
                    <div key={f.label} className="px-5 py-4">
                      <p className="text-xs text-muted-foreground">{f.label}</p>
                      <p className="mt-0.5 text-sm font-semibold text-foreground">{f.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* COMMANDES */}
          {activeTab === "commandes" && (
            <div className="space-y-5">
              <div>
                <h1 className="text-xl font-bold text-foreground">Mes Commandes</h1>
                <p className="mt-0.5 text-sm text-muted-foreground">{userOrders.length} commande{userOrders.length !== 1 ? "s" : ""}</p>
              </div>

              {userOrders.length === 0 ? (
                <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-background py-20">
                  <Package size={52} weight="light" className="text-muted-foreground/30" />
                  <div className="text-center">
                    <p className="font-medium text-foreground">Aucune commande</p>
                    <p className="mt-1 text-sm text-muted-foreground">Vos commandes apparaîtront ici</p>
                  </div>
                  <Link href="/" className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
                    Découvrir nos produits
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {userOrders.map((order) => (
                    <div key={order.id} className="rounded-2xl border border-border bg-background p-5 shadow-sm">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-semibold text-foreground">{order.id}</p>
                          <p className="mt-0.5 text-xs text-muted-foreground">
                            {new Date(order.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                            {" · "}{order.items} article{order.items !== 1 ? "s" : ""}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <StatusBadge status={order.status} />
                          <p className="text-sm font-bold text-foreground">{order.total.toLocaleString("fr-MA")} MAD</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* WISHLIST */}
          {activeTab === "wishlist" && (
            <div className="space-y-5">
              <div>
                <h1 className="text-xl font-bold text-foreground">Liste de Souhaits</h1>
                <p className="mt-0.5 text-sm text-muted-foreground">{wishlist.length} article{wishlist.length !== 1 ? "s" : ""}</p>
              </div>

              {wishlist.length === 0 ? (
                <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-background py-20">
                  <Heart size={52} weight="light" className="text-muted-foreground/30" />
                  <div className="text-center">
                    <p className="font-medium text-foreground">Liste vide</p>
                    <p className="mt-1 text-sm text-muted-foreground">Ajoutez des produits à votre liste de souhaits</p>
                  </div>
                  <Link href="/" className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
                    Explorer les produits
                  </Link>
                </div>
              ) : (
                <div className="grid gap-3 sm:grid-cols-2">
                  {wishlist.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4 shadow-sm">
                      <div className="size-16 shrink-0 overflow-hidden rounded-xl border border-border bg-secondary">
                        <img src={item.image} alt={item.name} className="size-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-foreground">{item.name}</p>
                        <p className="mt-1 text-sm font-bold text-primary">{item.price.toLocaleString("fr-MA")} MAD</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ADRESSES */}
          {activeTab === "adresses" && (
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-xl font-bold text-foreground">Adresses</h1>
                  <p className="mt-0.5 text-sm text-muted-foreground">{mockAddresses.length} adresses enregistrées</p>
                </div>
                <button className="flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
                  <Plus size={14} />
                  Ajouter
                </button>
              </div>

              <div className="space-y-3">
                {mockAddresses.map((addr) => {
                  const Icon = addr.label === "Domicile" ? House : Buildings;
                  return (
                    <div key={addr.id} className="relative rounded-2xl border border-border bg-background p-5 shadow-sm">
                      {addr.isDefault && (
                        <div className="absolute right-4 top-4 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                          Par défaut
                        </div>
                      )}
                      <div className="flex items-start gap-4">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{addr.label}</p>
                          <p className="mt-1 text-sm text-muted-foreground">{addr.street}</p>
                          <p className="text-sm text-muted-foreground">{addr.zip} {addr.city}, {addr.country}</p>
                        </div>
                      </div>
                      <button className="mt-3 text-xs text-muted-foreground transition-colors hover:text-primary">
                        Modifier l&apos;adresse
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* PARAMÈTRES */}
          {activeTab === "parametres" && (
            <div className="space-y-5">
              <div>
                <h1 className="text-xl font-bold text-foreground">Paramètres</h1>
                <p className="mt-0.5 text-sm text-muted-foreground">Sécurité et préférences du compte</p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
                <h2 className="mb-4 text-sm font-semibold text-foreground">Changer le mot de passe</h2>
                <div className="max-w-sm space-y-3">
                  {["Mot de passe actuel", "Nouveau mot de passe", "Confirmer"].map((label) => (
                    <div key={label}>
                      <label className="mb-1 block text-xs font-medium text-muted-foreground">{label}</label>
                      <input
                        type="password"
                        disabled
                        placeholder="••••••••"
                        className="h-10 w-full rounded-xl border border-border bg-secondary/40 px-3 text-sm cursor-not-allowed opacity-50"
                      />
                    </div>
                  ))}
                  <div className="flex items-center gap-3 pt-1">
                    <button disabled className="rounded-xl bg-primary/40 px-4 py-2 text-xs font-semibold text-primary-foreground cursor-not-allowed">
                      Mettre à jour
                    </button>
                    <p className="text-xs text-muted-foreground">Disponible prochainement</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-destructive/20 bg-background p-6 shadow-sm">
                <h2 className="mb-1 text-sm font-semibold text-destructive">Zone de danger</h2>
                <p className="mb-4 text-xs text-muted-foreground">La suppression est définitive et irréversible.</p>
                <button disabled className="rounded-xl border border-destructive/30 px-4 py-2 text-xs font-medium text-destructive/40 cursor-not-allowed">
                  Supprimer mon compte
                </button>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
