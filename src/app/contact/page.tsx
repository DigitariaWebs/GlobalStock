"use client";

import {
  WhatsappLogo,
  EnvelopeSimple,
  Phone,
  MapPin,
  Clock,
  ChatCircle,
  ShieldCheck,
  Truck,
  FileText,
  ArrowRight,
  Seal,
  PaperPlaneTilt,
  CaretRight,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useState } from "react";

const SUBJECTS = [
  "Demande de devis",
  "Renseignement produit",
  "Service après-vente",
  "Commande en gros",
  "Livraison & expédition",
  "Autre demande",
];

const TRUST = [
  { icon: Clock,       label: "Devis en 1 heure",   sub: "Jours ouvrés" },
  { icon: ShieldCheck, label: "Garantie 2 ans",      sub: "Pièces & main d'œuvre" },
  { icon: Truck,       label: "Livraison 5 jours",   sub: "France & Europe" },
  { icon: Seal,        label: "Matériel certifié CE", sub: "Normes européennes" },
];

export default function ContactPage() {
  const [subject, setSubject] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Page header */}
      <section className="bg-background px-6 pt-8 pb-10 lg:px-6 lg:pt-8 lg:pb-14">
        <div className="mx-auto max-w-300">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <h1 className="text-[32px] md:text-[40px] font-bold text-[#1a202c] leading-tight tracking-tight">
                Contactez-nous
              </h1>
              <p className="text-[14px] text-muted-foreground mt-2 max-w-xl">
                Notre équipe répond en moins d'une heure les jours ouvrés. Devis gratuit, sans engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main grid */}
      <section className="bg-background px-6 pb-16 lg:px-10 lg:pb-20">
        <div className="mx-auto max-w-300 grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">

          {/* Left — contact card */}
          <div className="lg:col-span-2 rounded-[2.5rem] bg-primary overflow-hidden flex flex-col">

            {/* Top block */}
            <div className="p-8 lg:p-10 flex flex-col gap-6 flex-1">
              <div>
                <span className="inline-flex items-center gap-1.5 bg-white/10 text-white/80 text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                  <ChatCircle size={11} weight="fill" />
                  On vous répond vite
                </span>
                <h2 className="text-[26px] font-bold text-white leading-snug">
                  GlobalStock<br />
                  <span className="text-white/50 font-normal text-[18px]">Équipements industriels</span>
                </h2>
              </div>

              {/* Contact methods */}
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/33600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-white/10 hover:bg-white/20 transition-colors rounded-2xl px-5 py-4"
                >
                  <span className="w-10 h-10 rounded-full bg-[#f2a74c]/20 flex items-center justify-center shrink-0">
                    <WhatsappLogo size={20} weight="fill" className="text-[#f2a74c]" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] text-white/50 font-semibold uppercase tracking-wider">WhatsApp</p>
                    <p className="text-[14px] font-semibold text-white">+33 6 00 00 00 00</p>
                  </div>
                  <ArrowRight size={14} className="ml-auto text-white/30 group-hover:text-white/70 transition-colors shrink-0" />
                </a>

                <a
                  href="mailto:contact@globalstock.fr"
                  className="group flex items-center gap-4 bg-white/10 hover:bg-white/20 transition-colors rounded-2xl px-5 py-4"
                >
                  <span className="w-10 h-10 rounded-full bg-[#f2a74c]/20 flex items-center justify-center shrink-0">
                    <EnvelopeSimple size={20} weight="fill" className="text-[#f2a74c]" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] text-white/50 font-semibold uppercase tracking-wider">Email</p>
                    <p className="text-[14px] font-semibold text-white truncate">contact@globalstock.fr</p>
                  </div>
                  <ArrowRight size={14} className="ml-auto text-white/30 group-hover:text-white/70 transition-colors shrink-0" />
                </a>

                <a
                  href="tel:+33600000000"
                  className="group flex items-center gap-4 bg-white/10 hover:bg-white/20 transition-colors rounded-2xl px-5 py-4"
                >
                  <span className="w-10 h-10 rounded-full bg-[#f2a74c]/20 flex items-center justify-center shrink-0">
                    <Phone size={20} weight="fill" className="text-[#f2a74c]" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] text-white/50 font-semibold uppercase tracking-wider">Téléphone</p>
                    <p className="text-[14px] font-semibold text-white">+33 6 00 00 00 00</p>
                  </div>
                  <ArrowRight size={14} className="ml-auto text-white/30 group-hover:text-white/70 transition-colors shrink-0" />
                </a>
              </div>

              {/* Hours + address */}
              <div className="flex flex-col gap-3 pt-2 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-[#f2a74c] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[12px] font-bold text-white/50 uppercase tracking-wider mb-1">Horaires</p>
                    <p className="text-[13px] text-white/80">Lun – Ven : 8h – 18h</p>
                    <p className="text-[13px] text-white/80">Sam : 9h – 13h</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#f2a74c] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[12px] font-bold text-white/50 uppercase tracking-wider mb-1">Adresse</p>
                    <p className="text-[13px] text-white/80">12 Rue de l'Industrie<br />75010 Paris, France</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3 bg-white rounded-[2.5rem] shadow-[0_4px_20px_-5px_rgba(0,0,0,0.06)] border border-border/50 p-8 lg:p-10 flex flex-col">
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <PaperPlaneTilt size={28} weight="fill" className="text-primary" />
                </div>
                <h3 className="text-[22px] font-bold text-[#1a202c]">Message envoyé !</h3>
                <p className="text-[14px] text-muted-foreground max-w-sm">
                  Notre équipe vous répondra dans l'heure. Vérifiez vos spams si vous ne recevez rien.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 text-[13px] font-semibold text-primary hover:underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-[22px] font-bold text-[#1a202c] mb-1">Envoyez-nous un message</h2>
                <p className="text-[13px] text-muted-foreground mb-8">Tous les champs sont requis.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1">
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-[12px] font-bold text-[#1a202c] uppercase tracking-wider">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jean Dupont"
                        className="h-12 rounded-xl border border-border bg-[#f8f9fa] px-4 text-[14px] text-[#1a202c] placeholder:text-[#a1a1aa] focus:outline-none focus:border-primary focus:bg-white transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[12px] font-bold text-[#1a202c] uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jean@entreprise.fr"
                        className="h-12 rounded-xl border border-border bg-[#f8f9fa] px-4 text-[14px] text-[#1a202c] placeholder:text-[#a1a1aa] focus:outline-none focus:border-primary focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone + Subject row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-[12px] font-bold text-[#1a202c] uppercase tracking-wider">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        placeholder="+33 6 00 00 00 00"
                        className="h-12 rounded-xl border border-border bg-[#f8f9fa] px-4 text-[14px] text-[#1a202c] placeholder:text-[#a1a1aa] focus:outline-none focus:border-primary focus:bg-white transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[12px] font-bold text-[#1a202c] uppercase tracking-wider">
                        Objet
                      </label>
                      <select
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="h-12 rounded-xl border border-border bg-[#f8f9fa] px-4 text-[14px] text-[#1a202c] focus:outline-none focus:border-primary focus:bg-white transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Choisir un objet…</option>
                        {SUBJECTS.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2 flex-1">
                    <label className="text-[12px] font-bold text-[#1a202c] uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      style={{ flex: 1 }}
                      placeholder="Décrivez votre besoin, les références produits, les quantités souhaitées…"
                      className="rounded-xl border border-border bg-[#f8f9fa] px-4 py-3 text-[14px] text-[#1a202c] placeholder:text-[#a1a1aa] focus:outline-none focus:border-primary focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 h-13 rounded-full bg-primary text-white text-[14px] font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-md shadow-primary/20"
                  >
                    <PaperPlaneTilt size={16} weight="fill" />
                    Envoyer le message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
