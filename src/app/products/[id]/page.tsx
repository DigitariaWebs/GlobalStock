"use client";

import { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import {
  CaretRight,
  Heart,
  ShoppingCart,
  Star,
  Minus,
  Plus,
  Check,
  Download,
  Lightning,
  Gauge,
  Drop,
  SpeakerSimpleNone,
  Wrench,
  Package,
  Truck,
  Phone,
  ShieldCheck,
  ArrowLeft,
  Plug,
} from "@phosphor-icons/react/dist/ssr";

// ─── Mock product data ────────────────────────────────────────────────────────
const MOCK_PRODUCT = {
  id: "ge-9500-mono-silence",
  name: "Groupe Électrogène Insonorisé 9,5 kVA Monophasé Diesel",
  brand: "Kraft",
  category: "Groupes Électrogènes",
  categoryHref: "/groupes-electrogenes",
  type: "Industriels",
  sku: "KR-GE-9500-M-INS",
  price: 3290,
  oldPrice: 4190,
  inStock: true,
  stockCount: 4,
  rating: 4.8,
  reviewCount: 52,
  images: [
    "/ProductsSection/ge-9-5kva-supersilencieux-mono.png",
    "/BestSellingSection/9-5-kva-monophase-kraft-2-high.png",
    "/ProductsSection/ge-10kva-dualpower-mobile.png",
    "/ProductsSection/ge-12kva-triphase-supersilencieux.png",
  ],
  keySpecs: [
    { icon: Lightning,        label: "Puissance",  value: "9,5 kVA"   },
    { icon: Drop,             label: "Carburant",  value: "Diesel"    },
    { icon: Plug,             label: "Tension",    value: "230 V"     },
    { icon: SpeakerSimpleNone,label: "Bruit",      value: "68 dB(A)"  },
  ],
  description: `Le groupe électrogène Kraft 9,5 kVA Insonorisé Monophasé est conçu pour les professionnels exigeant fiabilité et discrétion au quotidien. Son caisson insonorisé haute densité ramène le niveau sonore à seulement 68 dB(A) à 7 mètres, le rendant parfaitement adapté aux chantiers en zone urbaine, aux événements extérieurs et aux installations industrielles sensibles.

Équipé d'un moteur diesel robuste à injection directe et d'un alternateur brushless sans balais, il délivre un courant stable et propre pour vos équipements électroniques. Le démarrage électrique à clé assure une mise en route instantanée, même par temps froid.`,
  features: [
    "Caisson insonorisé haute performance — 68 dB(A) à 7 m",
    "Alternateur brushless — courant propre (THD < 5%)",
    "Protection disjoncteur automatique anti-surcharge",
    "Tableau de bord : voltmètre, fréquencemètre, horamètre",
    "Réservoir 19 L avec indicateur de niveau intégré",
    "Compatible coffret ATS pour commutation automatique",
    "Poignées et roues pour transport facilité",
  ],
  fullSpecs: [
    ["Puissance nominale",          "9,5 kVA / 7,6 kW"],
    ["Puissance maximale",          "10,5 kVA / 8,4 kW"],
    ["Phase",                       "Monophasé"],
    ["Tension de sortie",           "230 V"],
    ["Fréquence",                   "50 Hz"],
    ["Facteur de puissance",        "cos φ = 0,8"],
    ["Distorsion harmonique (THD)", "< 5%"],
    ["Type de démarrage",           "Électrique (clé) + manuel"],
    ["Carburant",                   "Diesel"],
    ["Cylindrée moteur",            "708 cc"],
    ["Nombre de cylindres",         "2"],
    ["Régime nominal",              "3 000 tr/min"],
    ["Capacité réservoir",          "19 L"],
    ["Autonomie (75% charge)",      "9 h"],
    ["Niveau sonore à 7 m",         "68 dB(A)"],
    ["Catégorie bruit",             "Supersilencieux"],
    ["Alternateur",                 "Brushless sans balais"],
    ["Régulateur",                  "AVR électronique"],
    ["Protection IP",               "IP23"],
    ["Sorties",                     "2× 230V (16A) + 1× 230V (32A)"],
    ["Poids",                       "275 kg"],
    ["Dimensions (L×l×H)",         "1 100 × 640 × 820 mm"],
    ["Garantie",                    "2 ans pièces & main d'œuvre"],
    ["Normes",                      "CE / ISO 8528"],
  ],
  documents: [
    { name: "Manuel d'utilisation",        size: "2,4 MB", type: "PDF" },
    { name: "Fiche technique complète",    size: "890 KB", type: "PDF" },
    { name: "Certificat de conformité CE", size: "450 KB", type: "PDF" },
    { name: "Schéma électrique",           size: "1,1 MB", type: "PDF" },
  ],
};

const TABS = ["Description", "Spécifications", "Documents"] as const;
type Tab = (typeof TABS)[number];

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = use(params);
  const product = MOCK_PRODUCT;
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist, isInCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity]           = useState(1);
  const [activeTab, setActiveTab]         = useState<Tab>("Description");

  const inWishlist = isInWishlist(product.id);
  const inCart = isInCart(product.id);

  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100,
  );

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-screen-2xl px-4 py-3 lg:py-6">
        {/* ── Main grid ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[55%_1fr] lg:gap-14">

          {/* Main image — fills full row height = right panel height */}
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-white">
            <span className="absolute left-4 top-4 z-10 rounded-full bg-destructive px-2.5 py-1 text-xs font-bold text-white">
              -{discount}%
            </span>
            {product.inStock && (
              <span className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
                <Check size={11} weight="bold" />
                En stock
              </span>
            )}
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-contain p-8 transition-transform duration-300 group-hover:scale-[1.03]"
              priority
            />
          </div>

          {/* Product info */}
          <div className="flex flex-col gap-5">

            {/* Brand · Type · Ref */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-semibold text-primary">{product.brand}</span>
              <span>·</span>
              <span>{product.type}</span>
              <span className="ml-auto">Réf : {product.sku}</span>
            </div>

            {/* Name */}
            <h1 className="text-2xl font-bold leading-snug text-foreground sm:text-[28px]">
              {product.name}
            </h1>

            {/* Rating + reviews */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    size={14}
                    weight={i < Math.floor(product.rating) ? "fill" : "regular"}
                    className={i < Math.floor(product.rating) ? "text-amber-400" : "text-muted-foreground/25"}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviewCount} avis)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-3xl font-bold text-primary">
                {product.price.toLocaleString("fr-FR")} €
              </span>
              <span className="text-base text-muted-foreground line-through">
                {product.oldPrice.toLocaleString("fr-FR")} €
              </span>
              <span className="rounded-full bg-destructive/10 px-2.5 py-0.5 text-xs font-bold text-destructive">
                -{discount}%
              </span>
            </div>

            <div className="h-px bg-border" />

            {/* Key specs — compact horizontal strip */}
            <div className="flex overflow-hidden rounded-xl border border-border bg-muted/60">
              {product.keySpecs.map(({ icon: Icon, label, value }, i) => (
                <div
                  key={label}
                  className={cn(
                    "flex flex-1 flex-col items-center gap-1 px-2 py-3 text-center",
                    i > 0 && "border-l border-border",
                  )}
                >
                  <Icon size={16} className="text-primary" />
                  <span className="text-[10px] leading-none text-muted-foreground">{label}</span>
                  <span className="text-[11px] font-bold text-foreground">{value}</span>
                </div>
              ))}
            </div>

            {/* Stock */}
            <div className="flex items-center gap-2">
              {product.inStock ? (
                <>
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100">
                    <Check size={10} className="text-emerald-600" weight="bold" />
                  </span>
                  <span className="text-sm text-emerald-700">
                    En stock — <strong>{product.stockCount} unités</strong>
                  </span>
                </>
              ) : (
                <span className="text-sm font-medium text-destructive">Rupture de stock</span>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-2.5">
              <div className="flex items-center overflow-hidden rounded-lg border border-border bg-card">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex h-11 w-10 items-center justify-center text-foreground/50 transition-colors hover:text-primary"
                  aria-label="Diminuer"
                >
                  <Minus size={14} />
                </button>
                <span className="w-9 select-none text-center text-sm font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="flex h-11 w-10 items-center justify-center text-foreground/50 transition-colors hover:text-primary"
                  aria-label="Augmenter"
                >
                  <Plus size={14} />
                </button>
              </div>

              <Button
                className="h-11 flex-1 gap-2 text-sm font-semibold"
                onClick={() =>
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.images[0],
                  })
                }
              >
                <ShoppingCart size={16} />
                {inCart ? "Dans le panier" : "Ajouter au panier"}
              </Button>

              <button
                onClick={() =>
                  inWishlist
                    ? removeFromWishlist(product.id)
                    : addToWishlist({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        oldPrice: product.oldPrice,
                        image: product.images[0],
                      })
                }
                aria-label={inWishlist ? "Retirer des favoris" : "Ajouter aux favoris"}
                className={cn(
                  "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border transition-all",
                  inWishlist
                    ? "border-rose-200 bg-rose-50 text-rose-500"
                    : "border-border text-foreground/40 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500",
                )}
              >
                <Heart size={17} weight={inWishlist ? "fill" : "regular"} />
              </button>
            </div>

            {/* B2B quote */}
            <Button variant="outline" className="h-10 gap-2 text-sm bg-white">
              <Phone size={14} />
              Demander un devis professionnel
            </Button>

            {/* Trust row */}
            <div className="flex flex-wrap justify-center gap-2 pt-1">
              {[
                { icon: Truck,       text: "Livraison gratuite dès 500 €" },
                { icon: ShieldCheck, text: "Garantie 2 ans" },
                { icon: Package,     text: "Retour 30 jours" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Icon size={13} className="shrink-0 text-primary" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnails — under image column only */}
        <div className="mt-3 grid grid-cols-1 lg:grid-cols-[55%_1fr] lg:gap-14">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={cn(
                  "relative h-18 w-18 shrink-0 overflow-hidden rounded-xl border-2 bg-white transition-all duration-150",
                  selectedImage === i
                    ? "border-primary"
                    : "border-border opacity-60 hover:border-primary/40 hover:opacity-100",
                )}
              >
                <Image src={img} alt={`Vue ${i + 1}`} fill className="object-contain p-1.5" />
              </button>
            ))}
          </div>
        </div>

        {/* ── Tabs ───────────────────────────────────────────────────────── */}
        <div className="mt-14">
          <div className="flex border-b border-border">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-5 py-3 text-sm font-medium transition-colors",
                  activeTab === tab
                    ? "border-b-2 border-primary text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-6">

            {/* Description */}
            {activeTab === "Description" && (
              <div className="max-w-2xl">
                <p className="whitespace-pre-line text-sm leading-relaxed text-foreground/75">
                  {product.description}
                </p>
                <h3 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Points forts
                </h3>
                <ul className="space-y-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/75">
                      <Check size={14} className="mt-0.5 shrink-0 text-primary" weight="bold" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Spécifications */}
            {activeTab === "Spécifications" && (
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {[
                  product.fullSpecs.slice(0, Math.ceil(product.fullSpecs.length / 2)),
                  product.fullSpecs.slice(Math.ceil(product.fullSpecs.length / 2)),
                ].map((half, col) => (
                  <div key={col} className="overflow-hidden rounded-xl border border-border">
                    <table className="w-full text-sm">
                      <tbody>
                        {half.map(([k, v], i) => (
                          <tr key={k} className={i % 2 === 0 ? "bg-muted/40" : "bg-card"}>
                            <td className="w-1/2 px-4 py-2.5 text-foreground/60">{k}</td>
                            <td className="px-4 py-2.5 font-medium text-foreground">{v}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            )}

            {/* Documents */}
            {activeTab === "Documents" && (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {product.documents.map((doc) => (
                  <div
                    key={doc.name}
                    className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                        <Wrench size={16} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">{doc.name}</div>
                        <div className="text-xs text-muted-foreground">{doc.type} · {doc.size}</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="gap-1.5">
                      <Download size={13} />
                      Télécharger
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Contact specialist ─────────────────────────────────────── */}
        <div className="mt-14 overflow-hidden rounded-2xl bg-primary px-8 py-10 lg:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                Besoin d&apos;un conseil ?
              </p>
              <h3 className="text-xl font-bold text-white lg:text-2xl">
                Parlez à un spécialiste
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-white/70">
                Nos experts en groupes électrogènes répondent à toutes vos questions techniques, vous aident à choisir la bonne puissance et établissent un devis sur mesure.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button className="gap-2 bg-white text-primary hover:bg-white/90">
                  <Phone size={15} weight="fill" />
                  Appeler un expert
                </Button>
                <Button variant="outline" className="gap-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                  Envoyer un message
                </Button>
              </div>
              <div className="flex flex-wrap gap-4">
                {[
                  { label: "Lun–Ven", value: "8h – 18h" },
                  { label: "Réponse", value: "< 2h" },
                  { label: "Devis", value: "Gratuit" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center gap-1.5 text-xs text-white/60">
                    <span className="h-1 w-1 rounded-full bg-white/40" />
                    <span>{label} ·</span>
                    <span className="font-semibold text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
