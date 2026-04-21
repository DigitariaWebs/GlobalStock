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
  ArrowLeft, SignOut, CaretRight, List, X,
} from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

type Tab = "profil" | "commandes" | "wishlist" | "adresses" | "parametres";

const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: "profil", label: "Mon Profil", icon: User },
  { id: "commandes", label: "Mes Commandes", icon: Package },
  { id: "wishlist", label: "Liste de souhaits", icon: Heart },
  { id: "adresses", label: "Adresses", icon: MapPin },
  { id: "parametres", label: "Paramètres", icon: Gear },
];

const statusConfig = {
  "Livré":      { badge: "bg-green-50 text-green-700 border border-green-200",  icon: CheckCircle },
  "Expédié":    { badge: "bg-blue-50 text-blue-700 border border-blue-200",     icon: Truck       },
  "En attente": { badge: "bg-amber-50 text-amber-700 border border-amber-200",  icon: Clock       },
  "Annulé":     { badge: "bg-red-50 text-red-700 border border-red-200",        icon: XCircle     },
} as const;

function StatusBadge({ status }: { status: keyof typeof statusConfig }) {
  const cfg = statusConfig[status];
  const Icon = cfg.icon;
  return (
    <span className={cn("inline-flex items-center justify-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium", cfg.badge)}>
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
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

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

  const activeTabLabel = tabs.find((t) => t.id === activeTab)?.label;

  const Sidebar = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={cn("flex h-full flex-col bg-white", mobile ? "w-72" : "w-64")}>

      {/* Logo */}
      <div className="flex h-20 items-center justify-between border-b border-gray-50 px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setMobileNavOpen(false)}>
          <Image src="/Logo.png" alt="GlobalStock" width={130} height={36} className="h-7 w-auto" />
        </Link>
        {mobile && (
          <button onClick={() => setMobileNavOpen(false)} className="rounded-full p-2 text-gray-400 hover:bg-gray-50 hover:text-gray-700">
            <X size={18} />
          </button>
        )}
      </div>

      {/* Back link */}
      <Link
        href="/"
        onClick={() => setMobileNavOpen(false)}
        className="mx-3 mt-4 flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-700"
      >
        <ArrowLeft size={13} />
        Retour à la boutique
      </Link>

      {/* Nav */}
      <nav className="flex-1 space-y-1 px-3 py-5">
        <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-wider text-gray-400">Espace client</p>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); setMobileNavOpen(false); }}
              className={cn(
                "group flex w-full items-center gap-3 rounded-full px-3 py-2.5 text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-[#1E3A5F] text-white shadow-sm"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <Icon size={16} weight={isActive ? "fill" : "regular"} />
              <span className="flex-1 text-left">{tab.label}</span>
              {isActive && <CaretRight size={13} />}
            </button>
          );
        })}
      </nav>

      {/* User card + Logout */}
      <div className="border-t border-gray-50 p-3">
        <div className="mb-2 flex items-center gap-3 rounded-2xl bg-gray-50/60 p-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#1E3A5F] text-xs font-bold text-white">
            {initials}
          </div>
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-gray-900">{user?.name}</p>
            <p className="truncate text-[10px] text-gray-500">{user?.email}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-full px-3 py-2 text-xs font-medium text-gray-500 transition-colors hover:bg-red-50 hover:text-red-600"
        >
          <SignOut size={14} />
          Déconnexion
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">

      {/* Desktop sidebar */}
      <aside className="hidden shrink-0 border-r border-gray-100 lg:block">
        <div className="sticky top-0 h-screen">
          <Sidebar />
        </div>
      </aside>

      {/* Mobile drawer */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileNavOpen(false)} />
          <div className="absolute left-0 top-0 h-full shadow-2xl">
            <Sidebar mobile />
          </div>
        </div>
      )}

      {/* Main column */}
      <div className="flex flex-1 flex-col min-w-0">

        {/* Header bar */}
        <header className="sticky top-0 z-10 flex h-20 items-center justify-between border-b border-gray-100 bg-white px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileNavOpen(true)}
              className="rounded-full p-2 text-gray-500 hover:bg-gray-50 lg:hidden"
              aria-label="Menu"
            >
              <List size={18} />
            </button>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-gray-400">Espace client</p>
              <h1 className="text-sm font-semibold text-gray-900">{activeTabLabel}</h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-3 border-l border-gray-100 pl-4 md:flex">
              <div className="text-right">
                <p className="text-xs font-semibold text-gray-900">{user?.name}</p>
                <p className="text-[10px] text-gray-500">Client</p>
              </div>
              <div className="flex size-9 items-center justify-center rounded-full bg-[#1E3A5F]/10 text-xs font-bold text-[#1E3A5F]">
                {initials}
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-6 lg:p-8">

          {/* PROFIL */}
          {activeTab === "profil" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Mon Profil</h1>
                  <p className="mt-1 text-xs text-gray-500">Vos informations personnelles</p>
                </div>
                <button className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-700 transition-colors hover:border-[#1E3A5F] hover:text-[#1E3A5F]">
                  <PencilSimple size={13} />
                  Modifier le profil
                </button>
              </div>

              {/* Identity card */}
              <div className="overflow-hidden rounded-[30px] border border-gray-100 bg-white shadow-sm">
                <div className="h-28 bg-linear-to-br from-[#0f2236] via-[#1E3A5F] to-[#2a5080]" />
                <div className="flex flex-col gap-4 px-6 pb-6 sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex flex-col items-center -mt-10 sm:flex-row sm:items-end sm:gap-5">
                    <div className="flex size-20 items-center justify-center rounded-full border-4 border-white bg-[#1E3A5F] text-2xl font-bold text-white shadow-md">
                      {initials}
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:pb-2 sm:text-left">
                      <p className="text-lg font-bold text-gray-900">{user?.name}</p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                {[
                  { label: "Téléphone",     value: user?.phone ?? "—",                                                                       icon: User    },
                  { label: "Membre depuis", value: user?.joinDate ? new Date(user.joinDate).toLocaleDateString("fr-FR", { month: "long", year: "numeric" }) : "—", icon: Clock   },
                  { label: "Commandes",     value: userOrders.length,                                                                         icon: Package },
                  { label: "Favoris",       value: wishlist.length,                                                                           icon: Heart   },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label} className="flex flex-col gap-2 rounded-[30px] border border-gray-100 bg-white p-6 shadow-sm">
                      <div className="flex items-center gap-2">
                        <Icon size={14} className="text-gray-400" />
                        <span className="text-xs font-medium text-gray-500">{s.label}</span>
                      </div>
                      <span className="text-xl font-bold text-gray-900">{s.value}</span>
                    </div>
                  );
                })}
              </div>

              {/* Info form */}
              <div className="rounded-[30px] border border-gray-100 bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h2 className="text-sm font-semibold text-gray-800">Informations personnelles</h2>
                    <p className="mt-0.5 text-xs text-gray-500">Affichage uniquement en mode démo</p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Nom complet", value: user?.name },
                    { label: "Email",       value: user?.email },
                    { label: "Téléphone",   value: user?.phone ?? "—" },
                    { label: "Rôle",        value: "Client" },
                  ].map((field) => (
                    <div key={field.label}>
                      <label className="mb-1.5 ml-1 block text-xs font-medium text-gray-700">{field.label}</label>
                      <input
                        readOnly
                        value={field.value ?? ""}
                        className="block w-full rounded-full border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-sm text-gray-900 focus:outline-none"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* COMMANDES */}
          {activeTab === "commandes" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Mes Commandes</h1>
                  <p className="mt-1 text-xs text-gray-500">{userOrders.length} commande{userOrders.length !== 1 ? "s" : ""} enregistrée{userOrders.length !== 1 ? "s" : ""}</p>
                </div>
              </div>

              {userOrders.length === 0 ? (
                <div className="flex flex-col items-center gap-4 rounded-[30px] border border-gray-100 bg-white py-20 shadow-sm">
                  <Package size={56} weight="light" className="text-gray-300" />
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-800">Aucune commande</p>
                    <p className="mt-1 text-xs text-gray-500">Vos commandes apparaîtront ici</p>
                  </div>
                  <Link href="/" className="rounded-full bg-[#1E3A5F] px-5 py-2 text-xs font-medium text-white transition-opacity hover:opacity-90">
                    Découvrir nos produits
                  </Link>
                </div>
              ) : (
                <div className="overflow-hidden rounded-[20px] border border-gray-100 bg-white">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-600">
                      <thead className="bg-gray-50/50">
                        <tr>
                          {["N° Commande", "Date", "Articles", "Statut", "Total"].map((h, i) => (
                            <th key={h} className={cn("px-6 py-4 text-xs font-medium uppercase tracking-wider text-gray-500", i === 4 && "text-right")}>
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {userOrders.map((o) => (
                          <tr key={o.id} className="transition-colors hover:bg-gray-50/50">
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{o.id}</td>
                            <td className="whitespace-nowrap px-6 py-4 text-xs text-gray-500">
                              {new Date(o.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-xs text-gray-500">{o.items} article{o.items !== 1 ? "s" : ""}</td>
                            <td className="whitespace-nowrap px-6 py-4"><StatusBadge status={o.status} /></td>
                            <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-semibold text-gray-900">
                              {o.total.toLocaleString("fr-MA")} MAD
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* WISHLIST */}
          {activeTab === "wishlist" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-xl font-bold text-gray-900">Liste de Souhaits</h1>
                <p className="mt-1 text-xs text-gray-500">{wishlist.length} article{wishlist.length !== 1 ? "s" : ""} sauvegardé{wishlist.length !== 1 ? "s" : ""}</p>
              </div>

              {wishlist.length === 0 ? (
                <div className="flex flex-col items-center gap-4 rounded-[30px] border border-gray-100 bg-white py-20 shadow-sm">
                  <Heart size={56} weight="light" className="text-gray-300" />
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-800">Liste vide</p>
                    <p className="mt-1 text-xs text-gray-500">Ajoutez des produits pour les retrouver ici</p>
                  </div>
                  <Link href="/" className="rounded-full bg-[#1E3A5F] px-5 py-2 text-xs font-medium text-white transition-opacity hover:opacity-90">
                    Explorer les produits
                  </Link>
                </div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {wishlist.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 rounded-[30px] border border-gray-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                      <div className="size-16 shrink-0 overflow-hidden rounded-2xl bg-gray-50">
                        <img src={item.image} alt={item.name} className="size-full object-cover" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-gray-900">{item.name}</p>
                        <p className="mt-1 text-sm font-bold text-[#1E3A5F]">{item.price.toLocaleString("fr-MA")} MAD</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ADRESSES */}
          {activeTab === "adresses" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Adresses</h1>
                  <p className="mt-1 text-xs text-gray-500">{mockAddresses.length} adresse{mockAddresses.length !== 1 ? "s" : ""} enregistrée{mockAddresses.length !== 1 ? "s" : ""}</p>
                </div>
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1E3A5F] px-4 py-2 text-xs font-medium text-white transition-opacity hover:opacity-90">
                  <Plus size={13} />
                  Ajouter une adresse
                </button>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                {mockAddresses.map((addr) => {
                  const Icon = addr.label === "Domicile" ? House : Buildings;
                  return (
                    <div key={addr.id} className="relative rounded-[30px] border border-gray-100 bg-white p-6 shadow-sm">
                      {addr.isDefault && (
                        <div className="absolute right-5 top-5 rounded-full border border-green-200 bg-green-50 px-2.5 py-0.5 text-[10px] font-semibold text-green-700">
                          Par défaut
                        </div>
                      )}
                      <div className="flex items-start gap-4">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#1E3A5F]/8 text-[#1E3A5F]">
                          <Icon size={20} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-gray-900">{addr.label}</p>
                          <p className="mt-1 text-xs leading-relaxed text-gray-500">
                            {addr.street}<br />
                            {addr.zip} {addr.city}, {addr.country}
                          </p>
                        </div>
                      </div>
                      <div className="mt-5 flex gap-2 border-t border-gray-50 pt-4">
                        <button className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:border-[#1E3A5F] hover:text-[#1E3A5F]">
                          Modifier
                        </button>
                        <button className="rounded-full px-3 py-1.5 text-xs font-medium text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600">
                          Supprimer
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* PARAMÈTRES */}
          {activeTab === "parametres" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-xl font-bold text-gray-900">Paramètres</h1>
                <p className="mt-1 text-xs text-gray-500">Sécurité et préférences du compte</p>
              </div>

              <div className="rounded-[30px] border border-gray-100 bg-white p-6 shadow-sm">
                <h2 className="text-sm font-semibold text-gray-800">Changer le mot de passe</h2>
                <p className="mt-1 text-xs text-gray-500">Mettez à jour votre mot de passe pour sécuriser votre compte</p>

                <div className="mt-5 grid max-w-md gap-4">
                  {["Mot de passe actuel", "Nouveau mot de passe", "Confirmer le mot de passe"].map((label) => (
                    <div key={label}>
                      <label className="mb-1.5 ml-1 block text-xs font-medium text-gray-700">{label}</label>
                      <input
                        type="password"
                        disabled
                        placeholder="••••••••"
                        className="block w-full cursor-not-allowed rounded-full border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-sm text-gray-400 focus:outline-none"
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3 border-t border-gray-50 pt-4">
                  <button disabled className="inline-flex cursor-not-allowed items-center justify-center rounded-full bg-[#1E3A5F]/40 px-5 py-2 text-xs font-medium text-white">
                    Mettre à jour
                  </button>
                  <p className="text-xs text-gray-400">Disponible prochainement</p>
                </div>
              </div>

              <div className="rounded-[30px] border border-red-100 bg-white p-6 shadow-sm">
                <h2 className="text-sm font-semibold text-red-600">Zone de danger</h2>
                <p className="mt-1 text-xs text-gray-500">Cette action est définitive et irréversible</p>
                <div className="mt-4 border-t border-gray-50 pt-4">
                  <button disabled className="inline-flex cursor-not-allowed items-center justify-center rounded-full border border-red-200 px-4 py-2 text-xs font-medium text-red-400">
                    Supprimer mon compte
                  </button>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
