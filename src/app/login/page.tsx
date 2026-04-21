"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeSlash, LockKey, EnvelopeSimple, Lightning, SolarPanel, Wrench } from "@phosphor-icons/react/dist/ssr";

const features = [
  { icon: Lightning, label: "Groupes Électrogènes", desc: "Domestiques, industriels, inverter" },
  { icon: SolarPanel, label: "Solutions Solaires", desc: "Panneaux, onduleurs, batteries" },
  { icon: Wrench, label: "Machines & Outillage", desc: "Équipements professionnels" },
];

export default function LoginPage() {
  const { login, user, isLoading } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      router.replace(user.role === "admin" ? "/account/admin" : "/account/profile");
    }
  }, [user, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const result = await login(email, password);
    if (!result.success) setError(result.error ?? "Une erreur est survenue");
  };

  return (
    <div className="flex min-h-screen">

      {/* LEFT — Brand panel */}
      <div
        className="relative hidden w-[52%] flex-col justify-between overflow-hidden p-12 lg:flex"
        style={{ background: "linear-gradient(145deg, #0f2236 0%, #1E3A5F 55%, #2a5080 100%)" }}
      >
        {/* Grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Decorative circles */}
        <div className="pointer-events-none absolute -bottom-40 -left-40 size-125 rounded-full border border-white/5" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 size-85 rounded-full border border-white/8" />
        <div className="pointer-events-none absolute -top-20 -right-20 size-75 rounded-full bg-white/3 blur-3xl" />

        {/* Logo */}
        <div>
          <Link href="/">
            <Image src="/Logo.png" alt="GlobalStock" width={180} height={48} className="h-10 w-auto brightness-0 invert" />
          </Link>
        </div>

        {/* Center content */}
        <div className="relative">
          <div className="mb-2 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur-sm">
            Espace client sécurisé
          </div>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-white">
            Votre partenaire<br />
            en équipements<br />
            <span className="text-[#7ab3d9]">industriels</span>
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-xs">
            Accédez à votre espace pour suivre vos commandes, gérer vos favoris et bénéficier d&apos;offres exclusives.
          </p>

          <div className="mt-8 space-y-3">
            {features.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
                  <Icon size={17} className="text-[#7ab3d9]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{label}</p>
                  <p className="text-xs text-white/50">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <p className="relative text-xs text-white/30">
          © 2025 GlobalStock · Tous droits réservés
        </p>
      </div>

      {/* RIGHT — Form panel */}
      <div className="flex flex-1 flex-col items-center justify-center bg-background px-6 py-12">

        {/* Mobile logo */}
        <div className="mb-8 lg:hidden">
          <Link href="/">
            <Image src="/Logo.png" alt="GlobalStock" width={160} height={42} className="h-9 w-auto" />
          </Link>
        </div>

        <div className="w-full max-w-sm">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground">Connexion</h2>
            <p className="mt-1 text-sm text-muted-foreground">Entrez vos identifiants pour accéder à votre espace</p>
          </div>

          {/* Demo hint */}
          <div className="mb-6 rounded-xl border border-border bg-secondary/60 p-4">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Comptes démo</p>
            <div className="space-y-1.5">
              <button
                type="button"
                onClick={() => { setEmail("user@globalstock.ma"); setPassword("client123"); }}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs transition-colors hover:bg-background"
              >
                <span className="size-1.5 rounded-full bg-emerald-500" />
                <span className="font-medium text-foreground">Client</span>
                <span className="text-muted-foreground">user@globalstock.ma</span>
              </button>
              <button
                type="button"
                onClick={() => { setEmail("admin@globalstock.ma"); setPassword("admin123"); }}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs transition-colors hover:bg-background"
              >
                <span className="size-1.5 rounded-full bg-primary" />
                <span className="font-medium text-foreground">Admin</span>
                <span className="text-muted-foreground">admin@globalstock.ma</span>
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
              <div className="relative">
                <EnvelopeSimple size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  required
                  className="h-11 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-3 focus:ring-primary/15"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="password" className="text-sm font-medium text-foreground">Mot de passe</label>
              <div className="relative">
                <LockKey size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="h-11 w-full rounded-xl border border-border bg-background pl-10 pr-11 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-3 focus:ring-primary/15"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeSlash size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="rounded-xl border border-destructive/20 bg-destructive/6 px-4 py-3 text-sm text-destructive">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="mt-1 h-11 w-full rounded-xl bg-primary text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="size-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                  Connexion…
                </span>
              ) : (
                "Se connecter"
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              ← Retour à la boutique
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
