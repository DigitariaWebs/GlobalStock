import { ArrowRight, Image as ImageIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export function CategoriesSection() {
  return (
    <section className="bg-white px-6 py-12 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-300 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 text-[#2d3748]">
        
        {/* Groupes Électrogènes Card (Spans 2 columns on desktop) */}
        <div className="lg:col-span-2 rounded-[2.5rem] bg-[#f8f9fa] p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-between relative overflow-hidden min-h-85">
          <div className="flex flex-col items-start w-full sm:w-1/2 z-10">
            <span className="bg-white px-3.5 py-1 rounded-full text-[11px] font-bold text-primary shadow-sm mb-4">
              500+ Modèles
            </span>

            <h3 className="text-3xl font-bold mb-4 text-[#1a202c]">Groupes Électrogènes</h3>

            <ul className="text-[13px] text-[#71717a] flex flex-col gap-2 mb-8">
              <li>Domestiques</li>
              <li>De chantier</li>
              <li>Industriels</li>
              <li>Inverters</li>
            </ul>

            <Link
              href="/groupes-electrogenes"
              className="text-[13px] font-bold text-primary flex items-center gap-1.5 border-b-2 border-primary/30 pb-0.5 hover:border-primary transition-colors"
            >
              Voir tout <ArrowRight size={14} weight="bold" />
            </Link>
          </div>

          <div className="w-full sm:w-1/2 h-48 sm:h-[85%] mt-8 sm:mt-0 flex flex-col items-center justify-center bg-black/5 rounded-[1.5rem] border border-black/5">
            <ImageIcon size={32} weight="duotone" className="text-black/20 mb-2" />
            <span className="text-black/30 font-medium text-sm">Image Groupe Électrogène</span>
          </div>
        </div>

        {/* Machines & Outillage Pro Card (Tall, spans 2 rows) */}
        <div className="lg:col-span-1 lg:row-span-2 rounded-[2.5rem] bg-[#f0f4f5] p-8 lg:p-10 flex flex-col relative overflow-hidden">
          <div className="flex flex-col items-start z-10 shrink-0">
            <span className="bg-white px-3.5 py-1 rounded-full text-[11px] font-bold text-primary shadow-sm mb-4">
              300+ Références
            </span>

            <h3 className="text-3xl font-bold mb-4 text-[#1a202c]">Machines & Outillage Pro</h3>

            <ul className="text-[13px] text-[#71717a] flex flex-col gap-2 mb-8">
              <li>Nettoyeurs HP</li>
              <li>Compresseurs</li>
              <li>Pompes à eau</li>
              <li>Équipement d&apos;atelier</li>
            </ul>

            <Link
              href="/machines-outillage-pro"
              className="text-[13px] font-bold text-primary flex items-center gap-1.5 border-b-2 border-primary/30 pb-0.5 hover:border-primary transition-colors"
            >
              Voir tout <ArrowRight size={14} weight="bold" />
            </Link>
          </div>

          <div className="w-full flex-1 mt-8 min-h-60 flex flex-col items-center justify-center bg-black/5 rounded-[1.5rem] border border-black/5">
            <ImageIcon size={32} weight="duotone" className="text-black/20 mb-2" />
            <span className="text-black/30 font-medium text-sm">Image Outillage Pro</span>
          </div>
        </div>

        {/* Solutions Solaires Card */}
        <div className="lg:col-span-1 rounded-[2.5rem] bg-[#fdf3eb] p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-between relative overflow-hidden min-h-80">
          <div className="flex flex-col items-start w-full sm:w-1/2 z-10">
            <span className="bg-white px-3.5 py-1 rounded-full text-[11px] font-bold text-primary shadow-sm mb-4">
              200+ Produits
            </span>

            <h3 className="text-3xl font-bold mb-4 text-[#1a202c]">Solutions Solaires</h3>

            <ul className="text-[13px] text-[#71717a] flex flex-col gap-2 mb-8">
              <li>Panneaux solaires</li>
              <li>Onduleurs</li>
              <li>Batteries solaires</li>
              <li>Pompes à chaleur</li>
            </ul>

            <Link
              href="/solaire"
              className="text-[13px] font-bold text-primary flex items-center gap-1.5 border-b-2 border-primary/30 pb-0.5 hover:border-primary transition-colors"
            >
              Voir tout <ArrowRight size={14} weight="bold" />
            </Link>
          </div>

          <div className="w-full sm:w-[45%] h-44 sm:h-[85%] mt-8 sm:mt-0 flex flex-col items-center justify-center bg-black/5 rounded-[1.5rem] border border-black/5">
            <ImageIcon size={28} weight="duotone" className="text-black/20 mb-2" />
            <span className="text-black/30 font-medium text-xs text-center px-3">Image Solaire</span>
          </div>
        </div>

        {/* Achat en Gros Card */}
        <div className="lg:col-span-1 rounded-[2.5rem] bg-linear-to-b from-primary/80 to-primary p-8 lg:p-10 flex flex-col items-center justify-center gap-4 relative overflow-hidden text-center min-h-80">
          <span className="bg-[#f2a74c] px-5 py-2 rounded-full text-[12px] font-bold text-white uppercase tracking-wider">
            Achat en Gros
          </span>
          <h3 className="text-3xl font-normal text-white tracking-wide mt-2">
            Tarifs Pro
          </h3>
          <Link
            href="/achat-en-gros"
            className="mt-2 text-[13px] font-bold text-white/80 flex items-center gap-1.5 hover:text-white transition-colors"
          >
            Demander un devis <ArrowRight size={14} weight="bold" />
          </Link>
        </div>

      </div>
    </section>
  );
}