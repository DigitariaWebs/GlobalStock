"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { mockOrders, mockProducts, mockUsers, mockStats } from "@/lib/mock-data";
import Image from "next/image";
import Link from "next/link";
import {
  ChartBar, Package, ShoppingCart, Users, Gear,
  TrendUp, TrendDown, CurrencyDollar, PencilSimple, Trash,
  Plus, CheckCircle, Clock, Truck, XCircle, ArrowLeft, SignOut,
  List, X, CaretRight, MagnifyingGlass, Funnel,
} from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

type Tab = "dashboard" | "produits" | "commandes" | "utilisateurs" | "parametres";

const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: "dashboard",     label: "Tableau de Bord", icon: ChartBar     },
  { id: "produits",      label: "Produits",        icon: Package      },
  { id: "commandes",     label: "Commandes",       icon: ShoppingCart },
  { id: "utilisateurs",  label: "Utilisateurs",    icon: Users        },
  { id: "parametres",    label: "Paramètres",      icon: Gear         },
];

const orderStatusConfig = {
  "Livré":      { badge: "bg-green-50 text-green-700 border border-green-200",  icon: CheckCircle },
  "Expédié":    { badge: "bg-blue-50 text-blue-700 border border-blue-200",     icon: Truck       },
  "En attente": { badge: "bg-amber-50 text-amber-700 border border-amber-200",  icon: Clock       },
  "Annulé":     { badge: "bg-red-50 text-red-700 border border-red-200",        icon: XCircle     },
} as const;

function StatusBadge({ status }: { status: keyof typeof orderStatusConfig }) {
  const cfg = orderStatusConfig[status];
  const Icon = cfg.icon;
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium", cfg.badge)}>
      <Icon size={11} weight="fill" />
      {status}
    </span>
  );
}

export default function AdminPage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

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

  const statCards = [
    {
      label:  "Chiffre d'affaires",
      value:  `${mockStats.totalSales.toLocaleString("fr-MA")} MAD`,
      growth: "+12%",
      trend:  mockStats.salesTrend,
      icon:   CurrencyDollar,
    },
    {
      label:  "Commandes",
      value:  mockStats.totalOrders.toString(),
      growth: "+3",
      trend:  mockStats.ordersTrend,
      icon:   ShoppingCart,
    },
    {
      label:  "Utilisateurs",
      value:  mockStats.totalUsers.toString(),
      growth: "+2",
      trend:  mockStats.usersTrend,
      icon:   Users,
    },
    {
      label:  "Produits",
      value:  mockStats.totalProducts.toString(),
      growth: "actif",
      trend:  "up" as const,
      icon:   Package,
    },
  ];

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
        <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-wider text-gray-400">Administration</p>
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
            <p className="truncate text-[10px] text-gray-500">Administrateur</p>
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

        {/* Header */}
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
              <p className="text-[11px] font-medium uppercase tracking-wider text-gray-400">Administration</p>
              <h1 className="text-sm font-semibold text-gray-900">{activeTabLabel}</h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-3 border-l border-gray-100 pl-4 md:flex">
              <div className="text-right">
                <p className="text-xs font-semibold text-gray-900">{user?.name}</p>
                <p className="text-[10px] text-gray-500">Administrateur</p>
              </div>
              <div className="flex size-9 items-center justify-center rounded-full bg-[#1E3A5F]/10 text-xs font-bold text-[#1E3A5F]">
                {initials}
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-6 lg:p-8">

          {/* DASHBOARD */}
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-xl font-bold text-gray-900">Tableau de Bord</h1>
                <p className="mt-1 text-xs text-gray-500">Vue d&apos;ensemble de l&apos;activité de votre boutique</p>
              </div>

              {/* KPI */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {statCards.map((card) => {
                  const Icon = card.icon;
                  const TrendIcon = card.trend === "up" ? TrendUp : TrendDown;
                  const isUp = card.trend === "up";
                  return (
                    <div key={card.label} className="flex flex-col gap-3 rounded-[30px] border border-gray-100 bg-white p-6 shadow-sm">
                      <div className="flex items-center gap-2">
                        <Icon size={14} className="text-gray-400" />
                        <span className="text-xs font-medium text-gray-500">{card.label}</span>
                      </div>
                      <div className="flex items-end justify-between">
                        <span className="text-2xl font-bold text-gray-900">{card.value}</span>
                        <span className={cn(
                          "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold",
                          isUp ? "bg-green-50 text-green-700" : "bg-red-50 text-red-600"
                        )}>
                          <TrendIcon size={10} weight="bold" />
                          {card.growth}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Recent orders */}
              <div className="overflow-hidden rounded-[30px] border border-gray-100 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-gray-50 px-6 py-4">
                  <div>
                    <h2 className="text-sm font-semibold text-gray-800">Commandes récentes</h2>
                    <p className="mt-0.5 text-xs text-gray-500">5 dernières commandes reçues</p>
                  </div>
                  <button
                    onClick={() => setActiveTab("commandes")}
                    className="rounded-full px-3 py-1.5 text-xs font-medium text-[#1E3A5F] transition-colors hover:bg-[#1E3A5F]/8"
                  >
                    Voir tout
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-600">
                    <thead className="bg-gray-50/50">
                      <tr>
                        {["N° Commande", "Client", "Date", "Statut", "Total"].map((h, i) => (
                          <th key={h} className={cn("px-6 py-4 text-xs font-medium uppercase tracking-wider text-gray-500", i === 4 && "text-right")}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {mockOrders.slice(0, 5).map((o) => (
                        <tr key={o.id} className="transition-colors hover:bg-gray-50/50">
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{o.id}</td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">{o.client}</td>
                          <td className="whitespace-nowrap px-6 py-4 text-xs text-gray-500">{new Date(o.date).toLocaleDateString("fr-FR")}</td>
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
            </div>
          )}

          {/* PRODUITS */}
          {activeTab === "produits" && (
            <div className="space-y-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Produits</h1>
                  <p className="mt-1 text-xs text-gray-500">{mockProducts.length} produits dans le catalogue</p>
                </div>
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1E3A5F] px-4 py-2 text-xs font-medium text-white transition-opacity hover:opacity-90">
                  <Plus size={13} />
                  Ajouter un produit
                </button>
              </div>

              {/* Filter card */}
              <div className="flex flex-col gap-4 rounded-[25px] border border-gray-100 bg-white p-4 px-6 shadow-sm sm:flex-row sm:items-center">
                <div className="relative flex-1">
                  <MagnifyingGlass size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    placeholder="Rechercher un produit…"
                    className="block w-full rounded-full border border-gray-200 bg-gray-50/50 py-2 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1E3A5F] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1E3A5F]"
                  />
                </div>
                <button className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-700 transition-colors hover:border-[#1E3A5F] hover:text-[#1E3A5F]">
                  <Funnel size={13} />
                  Filtres
                </button>
              </div>

              {/* Table */}
              <div className="overflow-hidden rounded-[20px] border border-gray-100 bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-600">
                    <thead className="bg-gray-50/50">
                      <tr>
                        {["Produit", "Catégorie", "Prix", "Stock", "Statut", "Actions"].map((h, i) => (
                          <th
                            key={h}
                            className={cn(
                              "px-6 py-4 text-xs font-medium uppercase tracking-wider text-gray-500",
                              (i === 2 || i === 3) && "text-right",
                              i === 5 && "text-right"
                            )}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {mockProducts.map((p) => (
                        <tr key={p.id} className="transition-colors hover:bg-gray-50/50">
                          <td className="px-6 py-4">
                            <p className="text-sm font-medium text-gray-900">{p.name}</p>
                            <p className="mt-0.5 text-[10px] text-gray-400">{p.id}</p>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-xs text-gray-500">{p.category}</td>
                          <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-semibold text-gray-900">
                            {p.price.toLocaleString("fr-MA")} MAD
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-right">
                            <span className={cn(
                              "text-sm font-semibold",
                              p.stock === 0 ? "text-red-500" : p.stock < 5 ? "text-amber-600" : "text-gray-900"
                            )}>
                              {p.stock}
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <span className={cn(
                              "inline-flex rounded-full border px-2.5 py-1 text-xs font-medium",
                              p.status === "Actif"
                                ? "bg-green-50 text-green-700 border-green-200"
                                : "bg-gray-50 text-gray-500 border-gray-200"
                            )}>
                              {p.status}
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <div className="flex items-center justify-end gap-2">
                              <button className="flex size-7 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-[#1E3A5F]/8 hover:text-[#1E3A5F]">
                                <PencilSimple size={13} />
                              </button>
                              <button className="flex size-7 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600">
                                <Trash size={13} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* COMMANDES */}
          {activeTab === "commandes" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-xl font-bold text-gray-900">Commandes</h1>
                <p className="mt-1 text-xs text-gray-500">{mockOrders.length} commandes reçues</p>
              </div>

              <div className="flex flex-col gap-4 rounded-[25px] border border-gray-100 bg-white p-4 px-6 shadow-sm sm:flex-row sm:items-center">
                <div className="relative flex-1">
                  <MagnifyingGlass size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    placeholder="Rechercher par numéro ou client…"
                    className="block w-full rounded-full border border-gray-200 bg-gray-50/50 py-2 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1E3A5F] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1E3A5F]"
                  />
                </div>
                <button className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-700 transition-colors hover:border-[#1E3A5F] hover:text-[#1E3A5F]">
                  <Funnel size={13} />
                  Statut
                </button>
              </div>

              <div className="overflow-hidden rounded-[20px] border border-gray-100 bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-600">
                    <thead className="bg-gray-50/50">
                      <tr>
                        {["N° Commande", "Client", "Date", "Articles", "Statut", "Total"].map((h, i) => (
                          <th
                            key={h}
                            className={cn(
                              "px-6 py-4 text-xs font-medium uppercase tracking-wider text-gray-500",
                              (i === 3 || i === 5) && "text-right"
                            )}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {mockOrders.map((o) => (
                        <tr key={o.id} className="transition-colors hover:bg-gray-50/50">
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{o.id}</td>
                          <td className="px-6 py-4">
                            <p className="text-sm text-gray-900">{o.client}</p>
                            <p className="mt-0.5 text-[10px] text-gray-400">{o.email}</p>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-xs text-gray-500">{new Date(o.date).toLocaleDateString("fr-FR")}</td>
                          <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-700">{o.items}</td>
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
            </div>
          )}

          {/* UTILISATEURS */}
          {activeTab === "utilisateurs" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-xl font-bold text-gray-900">Utilisateurs</h1>
                <p className="mt-1 text-xs text-gray-500">{mockUsers.length} clients enregistrés</p>
              </div>

              <div className="overflow-hidden rounded-[20px] border border-gray-100 bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-600">
                    <thead className="bg-gray-50/50">
                      <tr>
                        {["Utilisateur", "Rôle", "Inscrit le", "Statut"].map((h) => (
                          <th key={h} className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-gray-500">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {mockUsers.map((u) => {
                        const ui = u.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
                        return (
                          <tr key={u.id} className="transition-colors hover:bg-gray-50/50">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#1E3A5F]/10 text-xs font-bold text-[#1E3A5F]">
                                  {ui}
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-900">{u.name}</p>
                                  <p className="mt-0.5 text-[10px] text-gray-400">{u.email}</p>
                                </div>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <span className="inline-flex rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium capitalize text-gray-600">
                                {u.role}
                              </span>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-xs text-gray-500">
                              {new Date(u.joinDate).toLocaleDateString("fr-FR")}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <span className={cn(
                                "inline-flex rounded-full border px-2.5 py-1 text-xs font-medium",
                                u.status === "Actif"
                                  ? "bg-green-50 text-green-700 border-green-200"
                                  : "bg-gray-50 text-gray-500 border-gray-200"
                              )}>
                                {u.status}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* PARAMÈTRES */}
          {activeTab === "parametres" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-xl font-bold text-gray-900">Paramètres du site</h1>
                <p className="mt-1 text-xs text-gray-500">Configuration générale · affichage statique de démo</p>
              </div>

              <div className="rounded-[30px] border border-gray-100 bg-white p-6 shadow-sm">
                <h2 className="text-sm font-semibold text-gray-800">Préférences générales</h2>
                <p className="mt-0.5 text-xs text-gray-500">Contrôlez l&apos;affichage de fonctionnalités du site</p>

                <div className="mt-5 space-y-2">
                  {[
                    { label: "Mode maintenance",  desc: "Afficher une page de maintenance aux visiteurs", enabled: false },
                    { label: "Promotions actives", desc: "Afficher les bannières promotionnelles",          enabled: true  },
                    { label: "Avis clients",        desc: "Afficher les témoignages sur la page d'accueil", enabled: true  },
                    { label: "Achat en gros",       desc: "Activer la section achats en volume",             enabled: true  },
                    { label: "Chat WhatsApp",       desc: "Afficher le bouton WhatsApp flottant",            enabled: true  },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50/40 px-5 py-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{s.label}</p>
                        <p className="mt-0.5 text-xs text-gray-500">{s.desc}</p>
                      </div>
                      <button
                        className={cn(
                          "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                          s.enabled ? "bg-[#1E3A5F]" : "bg-gray-200"
                        )}
                      >
                        <span className={cn(
                          "absolute top-0.5 size-4 rounded-full bg-white shadow-sm transition-transform",
                          s.enabled ? "translate-x-4" : "translate-x-0.5"
                        )} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
