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
  List,
} from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

type Tab = "dashboard" | "produits" | "commandes" | "utilisateurs" | "parametres";

const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: "dashboard", label: "Tableau de Bord", icon: ChartBar },
  { id: "produits", label: "Produits", icon: Package },
  { id: "commandes", label: "Commandes", icon: ShoppingCart },
  { id: "utilisateurs", label: "Utilisateurs", icon: Users },
  { id: "parametres", label: "Paramètres", icon: Gear },
];

const orderStatusConfig = {
  "Livré": { color: "bg-emerald-100 text-emerald-700", icon: CheckCircle },
  "Expédié": { color: "bg-blue-100 text-blue-700", icon: Truck },
  "En attente": { color: "bg-amber-100 text-amber-700", icon: Clock },
  "Annulé": { color: "bg-red-100 text-red-600", icon: XCircle },
} as const;

function StatusBadge({ status }: { status: keyof typeof orderStatusConfig }) {
  const cfg = orderStatusConfig[status];
  const Icon = cfg.icon;
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium", cfg.color)}>
      <Icon size={10} weight="fill" />
      {status}
    </span>
  );
}

export default function AdminPage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  const statCards = [
    {
      label: "Chiffre d'affaires",
      value: `${mockStats.totalSales.toLocaleString("fr-MA")} MAD`,
      sub: "+12% ce mois",
      trend: mockStats.salesTrend,
      icon: CurrencyDollar,
      accent: "from-emerald-500 to-emerald-600",
      iconBg: "bg-emerald-500/15 text-emerald-600",
    },
    {
      label: "Commandes",
      value: mockStats.totalOrders,
      sub: "+3 ce mois",
      trend: mockStats.ordersTrend,
      icon: ShoppingCart,
      accent: "from-blue-500 to-blue-600",
      iconBg: "bg-blue-500/15 text-blue-600",
    },
    {
      label: "Utilisateurs",
      value: mockStats.totalUsers,
      sub: "+2 ce mois",
      trend: mockStats.usersTrend,
      icon: Users,
      accent: "from-violet-500 to-violet-600",
      iconBg: "bg-violet-500/15 text-violet-600",
    },
    {
      label: "Produits",
      value: mockStats.totalProducts,
      sub: "catalogue actif",
      trend: "up" as const,
      icon: Package,
      accent: "from-amber-500 to-amber-600",
      iconBg: "bg-amber-500/15 text-amber-600",
    },
  ];

  const Sidebar = ({ mobile = false }) => (
    <div className={cn("flex h-full flex-col", mobile && "w-72 bg-background")}>
      {/* Top */}
      <div className="border-b border-border p-5">
        <Link href="/" onClick={() => setSidebarOpen(false)} className="mb-5 flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft size={14} />
          <span className="text-xs font-medium">Retour à la boutique</span>
        </Link>
        <Image src="/Logo.png" alt="GlobalStock" width={140} height={38} className="h-8 w-auto" />
      </div>

      {/* User */}
      <div className="border-b border-border p-5">
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
            {initials}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">{user?.name}</p>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
              Administrateur
            </span>
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
              onClick={() => { setActiveTab(tab.id); setSidebarOpen(false); }}
              className={cn(
                "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
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
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-destructive/8 hover:text-destructive"
        >
          <SignOut size={16} />
          Déconnexion
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-secondary/40">

      {/* Desktop sidebar */}
      <aside className="hidden w-60 shrink-0 border-r border-border bg-background lg:block">
        <div className="sticky top-0 h-screen">
          <Sidebar />
        </div>
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <div className="absolute left-0 top-0 h-full shadow-xl">
            <Sidebar mobile />
          </div>
        </div>
      )}

      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between border-b border-border bg-background px-4 py-3 lg:hidden">
        <button onClick={() => setSidebarOpen(true)} className="flex size-8 items-center justify-center rounded-lg text-foreground/70 hover:bg-secondary">
          <List size={18} />
        </button>
        <Image src="/Logo.png" alt="GlobalStock" width={120} height={32} className="h-7 w-auto" />
        <div className="flex size-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
          {initials}
        </div>
      </div>

      {/* Main */}
      <main className="flex-1 overflow-auto pt-16 lg:pt-0">
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">

          {/* DASHBOARD */}
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-xl font-bold text-foreground">Tableau de Bord</h1>
                <p className="mt-0.5 text-sm text-muted-foreground">Vue d&apos;ensemble de l&apos;activité</p>
              </div>

              {/* KPI */}
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {statCards.map((card) => {
                  const Icon = card.icon;
                  const TrendIcon = card.trend === "up" ? TrendUp : TrendDown;
                  return (
                    <div key={card.label} className="relative overflow-hidden rounded-2xl border border-border bg-background p-5 shadow-sm">
                      <div className={cn("absolute right-0 top-0 h-1 w-full bg-linear-to-r", card.accent)} />
                      <div className="flex items-start justify-between">
                        <div className={cn("flex size-10 items-center justify-center rounded-xl", card.iconBg)}>
                          <Icon size={19} />
                        </div>
                        <span className={cn(
                          "flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium",
                          card.trend === "up" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-600"
                        )}>
                          <TrendIcon size={10} />
                          {card.sub}
                        </span>
                      </div>
                      <p className="mt-4 text-2xl font-bold text-foreground">{card.value}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{card.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* Recent orders */}
              <div className="rounded-2xl border border-border bg-background shadow-sm">
                <div className="flex items-center justify-between border-b border-border px-6 py-4">
                  <h2 className="text-sm font-semibold text-foreground">Commandes récentes</h2>
                  <button onClick={() => setActiveTab("commandes")} className="text-xs text-primary hover:underline">
                    Voir tout
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-secondary/40">
                        {["N° Commande", "Client", "Date", "Statut", "Total"].map((h, i) => (
                          <th key={h} className={cn("px-5 py-3 text-xs font-medium text-muted-foreground", i === 4 ? "text-right" : "text-left")}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {mockOrders.slice(0, 5).map((order) => (
                        <tr key={order.id} className="transition-colors hover:bg-secondary/30">
                          <td className="px-5 py-3 font-medium text-foreground text-xs">{order.id}</td>
                          <td className="px-5 py-3 text-foreground/80 text-sm">{order.client}</td>
                          <td className="px-5 py-3 text-muted-foreground text-xs">{new Date(order.date).toLocaleDateString("fr-FR")}</td>
                          <td className="px-5 py-3"><StatusBadge status={order.status} /></td>
                          <td className="px-5 py-3 text-right font-semibold text-foreground text-sm">{order.total.toLocaleString("fr-MA")} MAD</td>
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
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-xl font-bold text-foreground">Produits</h1>
                  <p className="mt-0.5 text-sm text-muted-foreground">{mockProducts.length} produits dans le catalogue</p>
                </div>
                <button className="flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
                  <Plus size={14} />
                  Ajouter
                </button>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-secondary/40">
                        {["Produit", "Catégorie", "Prix", "Stock", "Statut", "Actions"].map((h, i) => (
                          <th key={h} className={cn(
                            "px-5 py-3 text-xs font-medium text-muted-foreground",
                            i >= 2 && i <= 3 ? "text-right" : "text-left",
                            i === 5 && "text-right"
                          )}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {mockProducts.map((p) => (
                        <tr key={p.id} className="transition-colors hover:bg-secondary/30">
                          <td className="px-5 py-3.5">
                            <p className="font-medium text-foreground">{p.name}</p>
                            <p className="text-[11px] text-muted-foreground">{p.id}</p>
                          </td>
                          <td className="px-5 py-3.5 text-xs text-foreground/70">{p.category}</td>
                          <td className="px-5 py-3.5 text-right font-medium text-foreground">{p.price.toLocaleString("fr-MA")} MAD</td>
                          <td className="px-5 py-3.5 text-right">
                            <span className={cn(
                              "font-semibold",
                              p.stock === 0 ? "text-red-500" : p.stock < 5 ? "text-amber-600" : "text-foreground"
                            )}>{p.stock}</span>
                          </td>
                          <td className="px-5 py-3.5">
                            <span className={cn(
                              "inline-flex rounded-full px-2.5 py-1 text-xs font-medium",
                              p.status === "Actif" ? "bg-emerald-100 text-emerald-700" : "bg-secondary text-muted-foreground"
                            )}>
                              {p.status}
                            </span>
                          </td>
                          <td className="px-5 py-3.5 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button className="flex size-7 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                                <PencilSimple size={12} />
                              </button>
                              <button className="flex size-7 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-destructive hover:text-destructive">
                                <Trash size={12} />
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
            <div className="space-y-5">
              <div>
                <h1 className="text-xl font-bold text-foreground">Commandes</h1>
                <p className="mt-0.5 text-sm text-muted-foreground">{mockOrders.length} commandes au total</p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-secondary/40">
                        {["N° Commande", "Client", "Date", "Articles", "Statut", "Total"].map((h, i) => (
                          <th key={h} className={cn(
                            "px-5 py-3 text-xs font-medium text-muted-foreground",
                            (i === 3 || i === 5) ? "text-right" : "text-left"
                          )}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {mockOrders.map((order) => (
                        <tr key={order.id} className="transition-colors hover:bg-secondary/30">
                          <td className="px-5 py-3.5 font-medium text-foreground text-xs">{order.id}</td>
                          <td className="px-5 py-3.5">
                            <p className="text-sm text-foreground">{order.client}</p>
                            <p className="text-[11px] text-muted-foreground">{order.email}</p>
                          </td>
                          <td className="px-5 py-3.5 text-xs text-muted-foreground">{new Date(order.date).toLocaleDateString("fr-FR")}</td>
                          <td className="px-5 py-3.5 text-right text-foreground/70">{order.items}</td>
                          <td className="px-5 py-3.5"><StatusBadge status={order.status} /></td>
                          <td className="px-5 py-3.5 text-right font-semibold text-foreground">{order.total.toLocaleString("fr-MA")} MAD</td>
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
            <div className="space-y-5">
              <div>
                <h1 className="text-xl font-bold text-foreground">Utilisateurs</h1>
                <p className="mt-0.5 text-sm text-muted-foreground">{mockUsers.length} clients enregistrés</p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-secondary/40">
                        {["Utilisateur", "Rôle", "Inscription", "Statut"].map((h) => (
                          <th key={h} className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {mockUsers.map((u) => {
                        const ui = u.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
                        return (
                          <tr key={u.id} className="transition-colors hover:bg-secondary/30">
                            <td className="px-5 py-3.5">
                              <div className="flex items-center gap-3">
                                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                                  {ui}
                                </div>
                                <div>
                                  <p className="font-medium text-foreground text-sm">{u.name}</p>
                                  <p className="text-[11px] text-muted-foreground">{u.email}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-3.5">
                              <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-foreground/60 capitalize">{u.role}</span>
                            </td>
                            <td className="px-5 py-3.5 text-xs text-muted-foreground">{new Date(u.joinDate).toLocaleDateString("fr-FR")}</td>
                            <td className="px-5 py-3.5">
                              <span className={cn(
                                "inline-flex rounded-full px-2.5 py-1 text-xs font-medium",
                                u.status === "Actif" ? "bg-emerald-100 text-emerald-700" : "bg-secondary text-muted-foreground"
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
            <div className="space-y-5">
              <div>
                <h1 className="text-xl font-bold text-foreground">Paramètres du site</h1>
                <p className="mt-0.5 text-sm text-muted-foreground">Configuration générale (démo statique)</p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
                <div className="space-y-3">
                  {[
                    { label: "Mode maintenance", desc: "Afficher une page de maintenance aux visiteurs", enabled: false },
                    { label: "Promotions actives", desc: "Afficher les bannières promotionnelles", enabled: true },
                    { label: "Avis clients", desc: "Afficher les témoignages sur la page d'accueil", enabled: true },
                    { label: "Achat en gros", desc: "Activer la section achats en volume", enabled: true },
                    { label: "Chat WhatsApp", desc: "Afficher le bouton WhatsApp flottant", enabled: true },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center justify-between rounded-xl border border-border px-5 py-3.5">
                      <div>
                        <p className="text-sm font-medium text-foreground">{s.label}</p>
                        <p className="text-xs text-muted-foreground">{s.desc}</p>
                      </div>
                      <button className={cn(
                        "relative h-5 w-9 rounded-full transition-colors",
                        s.enabled ? "bg-primary" : "bg-secondary"
                      )}>
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

        </div>
      </main>
    </div>
  );
}
