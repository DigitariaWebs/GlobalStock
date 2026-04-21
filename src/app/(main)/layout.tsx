import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TopBar } from "@/components/layout/TopBar";
import { StickyWhatsApp } from "@/components/layout/StickyWhatsApp";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
