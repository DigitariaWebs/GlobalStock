import Link from "next/link";
import Image from "next/image";
import { FacebookLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react/dist/ssr";
import { Phone, EnvelopeSimple, WhatsappLogo, Clock } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="mx-auto max-w-300 px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <Image
                src="/LogoWhite.png"
                alt="GlobalStock"
                width={180}
                height={48}
                className="h-10 w-auto"
              />
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
                <Link href="/a-propos" className="text-white/70 hover:text-[#f2a74c] transition-colors text-[15px]">À Propos</Link>
              </li>
              <li>
                <Link href="/livraison" className="text-white/70 hover:text-[#f2a74c] transition-colors text-[15px]">Livraison</Link>
              </li>
              <li>
                <Link href="/paiement" className="text-white/70 hover:text-[#f2a74c] transition-colors text-[15px]">Paiement</Link>
              </li>
              <li>
                <Link href="/conseils-expertise" className="text-white/70 hover:text-[#f2a74c] transition-colors text-[15px]">Conseils & Expertise</Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-[#f2a74c] transition-colors text-[15px]">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-3">
            <h4 className="text-[18px] font-bold mb-6 tracking-wide">Catégories</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/groupes-electrogenes" className="text-white/70 hover:text-[#f2a74c] transition-colors text-[15px]">Groupes Électrogènes</Link>
              </li>
              <li>
                <Link href="/solaire" className="text-white/70 hover:text-[#f2a74c] transition-colors text-[15px]">Solutions Solaires</Link>
              </li>
              <li>
                <Link href="/machines-outillage-pro" className="text-white/70 hover:text-[#f2a74c] transition-colors text-[15px]">Machines & Outillage Pro</Link>
              </li>
              <li>
                <Link href="/achat-en-gros" className="text-white/70 hover:text-[#f2a74c] transition-colors text-[15px]">Achat en Gros</Link>
              </li>
              <li>
                <Link href="/machines-outillage-pro/jardin" className="text-white/70 hover:text-[#f2a74c] transition-colors text-[15px]">Jardinage & Motoculture</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-[18px] font-bold mb-6 tracking-wide">Contactez-nous</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-white/70 text-[15px]">
                <Phone size={20} className="text-[#f2a74c] shrink-0" weight="fill" />
                <span>+33 01 87 66 21 39</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-[15px]">
                <WhatsappLogo size={20} className="text-[#f2a74c] shrink-0" weight="fill" />
                <span>+33 6 01 88 51 73</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-[15px]">
                <EnvelopeSimple size={20} className="text-[#f2a74c] shrink-0" weight="fill" />
                <span>contact@globalstock.fr</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-[15px]">
                <Clock size={20} className="text-[#f2a74c] shrink-0" weight="fill" />
                <span>6j/7 — 9h00 à 20h00</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-[14px]">
          <p>© {new Date().getFullYear()} GlobalStock. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <Link href="/politique-de-confidentialite" className="hover:text-white transition-colors">Politique de Confidentialité</Link>
            <Link href="/cgv" className="hover:text-white transition-colors">CGV</Link>
            <Link href="/cgu" className="hover:text-white transition-colors">CGU</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
