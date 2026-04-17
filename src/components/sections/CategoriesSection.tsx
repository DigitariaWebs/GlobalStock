import { ArrowRight, Image as ImageIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export function CategoriesSection() {
  return (
    <section className="px-6 py-12 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 text-[#2d3748]">
        
        {/* Table Card (Spans 2 columns on desktop) */}
        <div className="lg:col-span-2 rounded-[2.5rem] bg-[#f8f9fa] p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-between relative overflow-hidden min-h-[340px]">
          <div className="flex flex-col items-start w-full sm:w-1/2 z-10">
            <span className="bg-white px-3.5 py-1 rounded-full text-[11px] font-bold text-primary shadow-sm mb-4">
              1230+ Item
            </span>
            
            <h3 className="text-3xl font-bold mb-4 text-[#1a202c]">Table</h3>
            
            <ul className="text-[13px] text-[#71717a] flex flex-col gap-2 mb-8">
              <li>folding table</li>
              <li>desk</li>
              <li>dining table</li>
              <li>coffee table</li>
            </ul>
            
            <Link
              href="/category/table"
              className="text-[13px] font-bold text-primary flex items-center gap-1.5 border-b-2 border-primary/30 pb-0.5 hover:border-primary transition-colors"
            >
              View All <ArrowRight size={14} weight="bold" />
            </Link>
          </div>

          <div className="w-full sm:w-1/2 h-48 sm:h-[85%] mt-8 sm:mt-0 flex flex-col items-center justify-center bg-black/5 rounded-[1.5rem] border border-black/5">
            <ImageIcon size={32} weight="duotone" className="text-black/20 mb-2" />
            <span className="text-black/30 font-medium text-sm">Table Image Placeholder</span>
          </div>
        </div>

        {/* Chairs Card (Tall, spans 2 rows) */}
        <div className="lg:col-span-1 lg:row-span-2 rounded-[2.5rem] bg-[#f0f4f5] p-8 lg:p-10 flex flex-col relative overflow-hidden">
          <div className="flex flex-col items-start z-10 shrink-0">
            <span className="bg-white px-3.5 py-1 rounded-full text-[11px] font-bold text-primary shadow-sm mb-4">
              2000+ Item
            </span>
            
            <h3 className="text-3xl font-bold mb-4 text-[#1a202c]">Chairs</h3>
            
            <ul className="text-[13px] text-[#71717a] flex flex-col gap-2 mb-8">
              <li>gaming chair</li>
              <li>office chair</li>
              <li>adirondack chair</li>
              <li>lounge chair</li>
            </ul>
            
            <Link
              href="/category/chairs"
              className="text-[13px] font-bold text-primary flex items-center gap-1.5 border-b-2 border-primary/30 pb-0.5 hover:border-primary transition-colors"
            >
              View All <ArrowRight size={14} weight="bold" />
            </Link>
          </div>

          <div className="w-full flex-1 mt-8 min-h-[240px] flex flex-col items-center justify-center bg-black/5 rounded-[1.5rem] border border-black/5">
            <ImageIcon size={32} weight="duotone" className="text-black/20 mb-2" />
            <span className="text-black/30 font-medium text-sm">Chair Image Placeholder</span>
          </div>
        </div>

        {/* Light Card */}
        <div className="lg:col-span-1 rounded-[2.5rem] bg-[#fdf3eb] p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-between relative overflow-hidden min-h-[320px]">
          <div className="flex flex-col items-start w-full sm:w-1/2 z-10">
            <span className="bg-white px-3.5 py-1 rounded-full text-[11px] font-bold text-primary shadow-sm mb-4">
              678+ Item
            </span>
            
            <h3 className="text-3xl font-bold mb-4 text-[#1a202c]">Light</h3>
            
            <ul className="text-[13px] text-[#71717a] flex flex-col gap-2 mb-8">
              <li>chandelier</li>
              <li>lantern pendant</li>
              <li>multi-light pendant</li>
              <li>pendant light</li>
            </ul>
            
            <Link
              href="/category/light"
              className="text-[13px] font-bold text-primary flex items-center gap-1.5 border-b-2 border-primary/30 pb-0.5 hover:border-primary transition-colors"
            >
              View All <ArrowRight size={14} weight="bold" />
            </Link>
          </div>

          <div className="w-full sm:w-[45%] h-44 sm:h-[85%] mt-8 sm:mt-0 flex flex-col items-center justify-center bg-black/5 rounded-[1.5rem] border border-black/5">
            <ImageIcon size={28} weight="duotone" className="text-black/20 mb-2" />
            <span className="text-black/30 font-medium text-xs text-center px-3">Light Image Placeholder</span>
          </div>
        </div>

        {/* Discount Card */}
        <div className="lg:col-span-1 rounded-[2.5rem] bg-gradient-to-b from-primary/80 to-primary p-8 lg:p-10 flex flex-col items-center justify-center gap-4 relative overflow-hidden text-center min-h-[320px]">
          <span className="bg-[#f2a74c] px-5 py-2 rounded-full text-[12px] font-bold text-white uppercase tracking-wider">
            Get Discount
          </span>
          <h3 className="text-3xl font-normal text-white tracking-wide mt-2">
            30% OFFER
          </h3>
        </div>

      </div>
    </section>
  );
}