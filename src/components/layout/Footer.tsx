import Link from "next/link";
import { FacebookLogo, InstagramLogo, LinkedinLogo, TwitterLogo, PaperPlaneRight } from "@phosphor-icons/react/dist/ssr";
import { MapPin, Phone, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              {/* Logo Placeholder */}
              <div className="w-10 h-10 bg-[#f2a74c] rounded-[12px] flex items-center justify-center">
                <span className="text-primary font-bold text-xl leading-none">G</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">GlobalStock</span>
            </div>
            <p className="text-white/70 mb-8 max-w-sm leading-relaxed text-[15px]">
              Votre partenaire de confiance pour des équipements industriels, solutions solaires, et outillage professionnel de haute qualité.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-[#f2a74c] hover:text-primary">
                <FacebookLogo size={20} weight="fill" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-[#f2a74c] hover:text-primary">
                <InstagramLogo size={20} weight="fill" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-[#f2a74c] hover:text-primary">
                <TwitterLogo size={20} weight="fill" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-[#f2a74c] hover:text-primary">
                <LinkedinLogo size={20} weight="fill" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[18px] font-bold mb-6 tracking-wide">Liens Rapides</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-white/70 hover:text-[#f2a74c] transition-colors text-[15px]">À Propos</Link>
              </li>
              <li>
                <Link href="/" className="text-white/70 hover:text-[#f2a74c] transition-colors text-[15px]">Nos Services</Link>
              </li>
              <li>
                <Link href="/" className="text-white/70 hover:text-[#f2a74c] transition-colors text-[15px]">Promotions</Link>
              </li>
              <li>
                <Link href="/" className="text-white/70 hover:text-[#f2a74c] transition-colors text-[15px]">Nouveautés</Link>
              </li>
              <li>
                <Link href="/" className="text-white/70 hover:text-[#f2a74c] transition-colors text-[15px]">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-3">
            <h4 className="text-[18px] font-bold mb-6 tracking-wide">Catégories</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-white/70 hover:text-[#f2a74c] transition-colors text-[15px]">Groupes Électrogènes</Link>
              </li>
              <li>
                <Link href="/" className="text-white/70 hover:text-[#f2a74c] transition-colors text-[15px]">Équipements Solaires</Link>
              </li>
              <li>
                <Link href="/" className="text-white/70 hover:text-[#f2a74c] transition-colors text-[15px]">Outillage BTP</Link>
              </li>
              <li>
                <Link href="/" className="text-white/70 hover:text-[#f2a74c] transition-colors text-[15px]">Climatisation</Link>
              </li>
              <li>
                <Link href="/" className="text-white/70 hover:text-[#f2a74c] transition-colors text-[15px]">Jardinage & Motoculture</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="text-[18px] font-bold mb-6 tracking-wide">Contactez-nous</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-white/70 text-[15px]">
                <MapPin size={20} className="w-5 shrink-0 text-[#f2a74c] mt-0.5" weight="fill" />
                <span>Zone Industrielle de Rouiba, Casablanca, Algérie</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-[15px]">
                <Phone size={20} className="text-[#f2a74c]" weight="fill" />
                <span>+213 (0) 555 12 34 56</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-[15px]">
                <EnvelopeSimple size={20} className="text-[#f2a74c]" weight="fill" />
                <span>contact@globalstock.dz</span>
              </li>
            </ul>

            <h4 className="text-[15px] font-bold mb-4 tracking-wide">Newsletter</h4>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="w-full bg-white/10 border border-white/20 rounded-full h-12 pl-5 pr-14 text-[14px] text-white placeholder-white/40 focus:outline-none focus:border-[#f2a74c] transition-colors"
              />
              <button className="absolute right-1 top-1 w-10 h-10 rounded-full bg-[#f2a74c] flex items-center justify-center text-primary hover:bg-white transition-colors">
                <PaperPlaneRight size={18} weight="fill" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-[14px]">
          <p>© {new Date().getFullYear()} GlobalStock. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">Politique de Confidentialité</Link>
            <Link href="/" className="hover:text-white transition-colors">Conditions Générales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
