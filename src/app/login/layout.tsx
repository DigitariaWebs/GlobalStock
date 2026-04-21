import { Rubik } from "next/font/google";
import { ReactNode } from "react";

const rubik = Rubik({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function LoginLayout({ children }: { children: ReactNode }) {
  return <div className={rubik.className}>{children}</div>;
}
