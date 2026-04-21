"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Role = "client" | "admin";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
  phone?: string;
  joinDate: string;
};

type AuthContextType = {
  user: AuthUser | null;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  isLoading: boolean;
};

const HARDCODED_USERS: (AuthUser & { password: string })[] = [
  {
    id: "1",
    name: "Mohamed Alami",
    email: "user@globalstock.ma",
    password: "client123",
    role: "client",
    phone: "+212 6 12 34 56 78",
    joinDate: "2024-03-15",
  },
  {
    id: "2",
    name: "Administrateur",
    email: "admin@globalstock.ma",
    password: "admin123",
    role: "admin",
    phone: "+212 5 22 00 11 22",
    joinDate: "2023-01-01",
  },
];

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 150));
    const found = HARDCODED_USERS.find(
      (u) => u.email === email && u.password === password
    );
    setIsLoading(false);
    if (!found) return { success: false, error: "Email ou mot de passe incorrect" };
    const { password: _pw, ...authUser } = found;
    setUser(authUser);
    return { success: true };
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
