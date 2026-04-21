import { Providers } from "@/components/ui/Providers";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GlobalStock",
  description: "Équipements industriels et groupes électrogènes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased flex flex-col min-h-screen">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
