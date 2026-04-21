import {
  Truck,
  ShieldCheck,
  CreditCard,
  Wrench,
  ChatCircle,
  Receipt,
  Clock,
  Seal,
  Info,
} from "@phosphor-icons/react/dist/ssr";

const TRUST_SIGNALS = [
  { icon: Truck,        text: "Livraison rapide 5 jours" },
  { icon: ShieldCheck,  text: "Garantie 2 ans" },
  { icon: CreditCard,   text: "Paiement 4x PayPal" },
  { icon: Wrench,       text: "Assistance technique" },
  { icon: ChatCircle,   text: "Support WhatsApp réactif" },
  { icon: Receipt,      text: "Facture TVA fournie" },
  { icon: Clock,        text: "Devis professionnel en 1 heure" },
  { icon: Seal,         text: "Matériel certifié CE" },
];

const COUNTRIES = ["France", "Belgique", "Luxembourg", "Allemagne", "Espagne", "Italie", "Portugal"];

export function TopBar() {
  return (
    <div className="w-full bg-[#1a202c] text-white overflow-hidden">
      <div className="w-full px-8 lg:px-14 h-11 flex items-center gap-0 divide-x divide-white/10">

        {/* Left: Shipping countries */}
        <div className="flex items-center gap-2.5 pr-5 shrink-0">
          <Truck size={14} weight="fill" className="text-[#f2a74c] shrink-0" />
          <span className="text-[11.5px] font-semibold text-white whitespace-nowrap">
            Livraison gratuite :
          </span>
          <span className="text-[11px] text-white/60 whitespace-nowrap hidden sm:block">
            {COUNTRIES.join(" · ")}
          </span>
          <span className="text-[11px] text-white/60 whitespace-nowrap sm:hidden">
            France & Europe
          </span>
          <span
            className="text-[10px] text-[#f2a74c]/80 font-bold cursor-default relative group"
            title="Selon poids, volume et type de produit"
          >
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex bg-[#2d3748] text-white text-[10px] px-2.5 py-1.5 rounded-lg whitespace-nowrap shadow-xl z-50 border border-white/10">
              <Info size={10} className="mr-1 mt-px shrink-0" />
              Selon poids, volume et type de produit
            </span>
          </span>
        </div>

        {/* Right: scrolling trust signals */}
        <div className="flex-1 min-w-0 overflow-hidden pl-5">
          <div className="flex w-fit animate-[marquee-trust_28s_linear_infinite] hover:[animation-play-state:paused]">
            {[...TRUST_SIGNALS, ...TRUST_SIGNALS].map((signal, i) => {
              const Icon = signal.icon;
              return (
                <span
                  key={i}
                  className="flex items-center gap-1.5 px-5 whitespace-nowrap text-[11px] font-medium text-white/75"
                >
                  <Icon size={12} weight="fill" className="text-[#f2a74c] shrink-0" />
                  {signal.text}
                  <span className="ml-3 text-white/20">·</span>
                </span>
              );
            })}
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-trust {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
