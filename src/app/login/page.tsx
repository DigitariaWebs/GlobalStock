"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeSlash, LockKey, EnvelopeSimple, ShieldCheck, Package, Headset } from "@phosphor-icons/react/dist/ssr";

const trustItems = [
  { icon: ShieldCheck, text: "Paiement sécurisé" },
  { icon: Package,     text: "+500 équipements" },
  { icon: Headset,     text: "Support 7j/7" },
];

export default function LoginPage() {
  const { login, user, isLoading } = useAuth();
  const router = useRouter();
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw]     = useState(false);
  const [error, setError]       = useState("");

  useEffect(() => {
    if (user) router.replace(user.role === "admin" ? "/account/admin" : "/account/profile");
  }, [user, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const res = await login(email, password);
    if (!res.success) setError(res.error ?? "Une erreur est survenue");
  };

  const fill = (e: string, p: string) => { setEmail(e); setPassword(p); setError(""); };

  return (
    <div className="flex min-h-screen bg-[#080f1a]">

      {/* ─── LEFT PANEL ─── */}
      <div className="relative hidden w-[46%] flex-col justify-between overflow-hidden lg:flex" style={{ background: "#080f1a" }}>

        {/* Radial glow — no squares, no grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(30,58,95,0.55) 0%, transparent 70%)",
          }}
        />
        {/* Second accent glow bottom-right */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 50% 40% at 85% 90%, rgba(74,123,170,0.10) 0%, transparent 65%)",
          }}
        />

        {/* Watermark — giant faint text */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 select-none overflow-hidden leading-none"
          aria-hidden
        >
          <span
            className="block whitespace-nowrap font-black uppercase tracking-tighter text-white"
            style={{ fontSize: "clamp(5rem, 11vw, 9rem)", opacity: 0.025, lineHeight: 1 }}
          >
            GLOBAL<br />STOCK
          </span>
        </div>

        {/* Thin right border accent */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-px bg-linear-to-b from-transparent via-white/10 to-transparent" />

        {/* ── Content ── */}
        <div className="relative z-10 px-12 pt-12">
          <Link href="/" className="inline-block">
            <Image src="/Logo.png" alt="GlobalStock" width={160} height={44} className="h-9 w-auto brightness-0 invert opacity-90" />
          </Link>
        </div>

        <div className="relative z-10 px-12">
          <div className="mb-3 h-px w-10 bg-[#4A7BAA]" />
          <h1
            className="font-bold leading-[1.1] text-white"
            style={{ fontSize: "clamp(2.2rem, 3.8vw, 3.2rem)" }}
          >
            Votre espace<br />
            <span className="text-[#7ab3d9]">professionnel</span><br />
            en équipements
          </h1>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/45">
            Accédez à vos commandes, gérez vos favoris et bénéficiez d&apos;offres exclusives réservées aux clients.
          </p>
        </div>

        <div className="relative z-10 px-12 pb-12">
          <div className="flex flex-col gap-3">
            {trustItems.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-md bg-white/7">
                  <Icon size={14} className="text-[#7ab3d9]" />
                </div>
                <span className="text-xs font-medium text-white/50">{text}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[11px] text-white/20">© 2025 GlobalStock · Casablanca, Maroc</p>
        </div>
      </div>

      {/* ─── RIGHT PANEL ─── */}
      <div className="flex flex-1 flex-col bg-[#f8fafc]">

        {/* Mobile header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 lg:hidden" style={{ background: "#080f1a" }}>
          <Image src="/Logo.png" alt="GlobalStock" width={130} height={36} className="h-8 w-auto brightness-0 invert opacity-90" />
        </div>

        {/* Center form */}
        <div className="flex flex-1 flex-col items-center justify-center px-12 py-10">
          <div className="w-full max-w-lg">

            {/* Heading */}
            <div className="mb-8">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900">Connexion</h2>
              <p className="mt-2.5 text-base text-slate-400">Entrez vos identifiants pour continuer</p>
            </div>

            {/* Demo accounts — clickable */}
            <div className="mb-7 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <p className="border-b border-slate-100 px-5 py-3 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                Comptes démo
              </p>
              <div className="divide-y divide-slate-100">
                {[
                  { label: "Client",         email: "user@globalstock.ma",  pw: "client123", dot: "bg-emerald-400" },
                  { label: "Administrateur", email: "admin@globalstock.ma", pw: "admin123",  dot: "bg-[#4A7BAA]"  },
                ].map((acc) => (
                  <button
                    key={acc.label}
                    type="button"
                    onClick={() => fill(acc.email, acc.pw)}
                    className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-slate-50 active:bg-slate-100"
                  >
                    <span className={`size-3 shrink-0 rounded-full ${acc.dot}`} />
                    <div className="min-w-0">
                      <span className="block text-sm font-semibold text-slate-700">{acc.label}</span>
                      <span className="block truncate text-sm text-slate-400">{acc.email}</span>
                    </div>
                    <span className="ml-auto shrink-0 text-xs font-medium text-slate-300">cliquer pour remplir</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-600">
                  Adresse email
                </label>
                <div className="relative">
                  <EnvelopeSimple size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    required
                    className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-5 text-base text-slate-800 placeholder:text-slate-300 outline-none transition-all focus:border-[#1E3A5F] focus:ring-3 focus:ring-[#1E3A5F]/10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-semibold text-slate-600">
                  Mot de passe
                </label>
                <div className="relative">
                  <LockKey size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    id="password"
                    type={showPw ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-13 text-base text-slate-800 placeholder:text-slate-300 outline-none transition-all focus:border-[#1E3A5F] focus:ring-3 focus:ring-[#1E3A5F]/10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw((v) => !v)}
                    tabIndex={-1}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-600"
                  >
                    {showPw ? <EyeSlash size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-3.5 text-sm font-medium text-red-600">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="h-14 w-full rounded-2xl text-base font-semibold text-white transition-all active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
                style={{ background: isLoading ? "#1E3A5F" : "linear-gradient(135deg, #1E3A5F 0%, #2a5080 100%)" }}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="size-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Connexion…
                  </span>
                ) : (
                  "Se connecter"
                )}
              </button>
            </form>

          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-slate-100 px-8 py-4 text-center">
          <p className="text-xs text-slate-300">GlobalStock · Équipements industriels · Casablanca</p>
        </div>
      </div>

    </div>
  );
}
