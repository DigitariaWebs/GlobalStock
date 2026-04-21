"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { ReactNode } from "react";

export default function AccountLayout({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
      return;
    }
    if (user.role === "admin" && pathname === "/account/profile") {
      router.replace("/account/admin");
      return;
    }
    if (user.role === "client" && pathname === "/account/admin") {
      router.replace("/account/profile");
      return;
    }
  }, [user, pathname, router]);

  if (!user) return null;

  return <>{children}</>;
}
