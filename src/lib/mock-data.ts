export type OrderStatus = "En attente" | "Expédié" | "Livré" | "Annulé";

export type Order = {
  id: string;
  date: string;
  status: OrderStatus;
  total: number;
  items: number;
  client?: string;
  email?: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: "Actif" | "Inactif";
};

export type MockUser = {
  id: string;
  name: string;
  email: string;
  role: "client" | "admin";
  joinDate: string;
  status: "Actif" | "Inactif";
};

export type Address = {
  id: string;
  label: string;
  street: string;
  city: string;
  zip: string;
  country: string;
  isDefault: boolean;
};

export type AdminStats = {
  totalSales: number;
  totalOrders: number;
  totalUsers: number;
  totalProducts: number;
  salesTrend: "up" | "down";
  ordersTrend: "up" | "down";
  usersTrend: "up" | "down";
};

export const mockOrders: Order[] = [
  { id: "GS-2024-001", date: "2024-11-02", status: "Livré", total: 12500, items: 2, client: "Mohamed Alami", email: "user@globalstock.ma" },
  { id: "GS-2024-002", date: "2024-11-18", status: "Expédié", total: 8750, items: 1, client: "Fatima Benali", email: "fatima.b@example.com" },
  { id: "GS-2024-003", date: "2024-12-05", status: "En attente", total: 34200, items: 3, client: "Karim Tazi", email: "k.tazi@example.com" },
  { id: "GS-2025-004", date: "2025-01-14", status: "Livré", total: 5900, items: 1, client: "Nadia Chraibi", email: "nadia.c@example.com" },
  { id: "GS-2025-005", date: "2025-02-03", status: "Annulé", total: 19800, items: 2, client: "Said Mansouri", email: "s.mansouri@example.com" },
  { id: "GS-2025-006", date: "2025-03-22", status: "Livré", total: 7200, items: 1, client: "Houda Lahlou", email: "h.lahlou@example.com" },
  { id: "GS-2025-007", date: "2025-04-01", status: "Expédié", total: 28000, items: 4, client: "Omar Rachidi", email: "o.rachidi@example.com" },
  { id: "GS-2025-008", date: "2025-04-18", status: "En attente", total: 15600, items: 2, client: "Amina Fassi", email: "a.fassi@example.com" },
];

export const mockProducts: Product[] = [
  { id: "P001", name: "Groupe Électrogène 5kW Domestique", category: "Groupes Électrogènes", price: 8500, stock: 12, status: "Actif" },
  { id: "P002", name: "Panneau Solaire 400W Monocristallin", category: "Solaire", price: 2200, stock: 45, status: "Actif" },
  { id: "P003", name: "Onduleur 5kW Hybride", category: "Solaire", price: 12800, stock: 8, status: "Actif" },
  { id: "P004", name: "Nettoyeur Haute Pression 200 bar", category: "Machines & Outillage", price: 4500, stock: 23, status: "Actif" },
  { id: "P005", name: "Compresseur 50L 2CV", category: "Machines & Outillage", price: 3200, stock: 15, status: "Actif" },
  { id: "P006", name: "Groupe Électrogène Inverter 3kW", category: "Groupes Électrogènes", price: 11200, stock: 6, status: "Actif" },
  { id: "P007", name: "Batterie Solaire 200Ah", category: "Solaire", price: 5800, stock: 30, status: "Actif" },
  { id: "P008", name: "Pompe à Eau Immergée 1CV", category: "Machines & Outillage", price: 1900, stock: 0, status: "Inactif" },
  { id: "P009", name: "Groupe Électrogène Industriel 20kW", category: "Groupes Électrogènes", price: 68000, stock: 3, status: "Actif" },
  { id: "P010", name: "Kit Solaire Complet 3kW", category: "Solaire", price: 24500, stock: 9, status: "Actif" },
];

export const mockUsers: MockUser[] = [
  { id: "1", name: "Mohamed Alami", email: "user@globalstock.ma", role: "client", joinDate: "2024-03-15", status: "Actif" },
  { id: "3", name: "Fatima Benali", email: "fatima.b@example.com", role: "client", joinDate: "2024-05-20", status: "Actif" },
  { id: "4", name: "Karim Tazi", email: "k.tazi@example.com", role: "client", joinDate: "2024-07-11", status: "Actif" },
  { id: "5", name: "Nadia Chraibi", email: "nadia.c@example.com", role: "client", joinDate: "2024-09-03", status: "Inactif" },
  { id: "6", name: "Said Mansouri", email: "s.mansouri@example.com", role: "client", joinDate: "2024-10-22", status: "Actif" },
  { id: "7", name: "Houda Lahlou", email: "h.lahlou@example.com", role: "client", joinDate: "2025-01-08", status: "Actif" },
];

export const mockAddresses: Address[] = [
  { id: "A1", label: "Domicile", street: "45 Rue Ibn Batouta, Appartement 3", city: "Casablanca", zip: "20000", country: "Maroc", isDefault: true },
  { id: "A2", label: "Bureau", street: "Zone Industrielle Ain Sebaa, Lot 12", city: "Casablanca", zip: "20250", country: "Maroc", isDefault: false },
];

export const mockStats: AdminStats = {
  totalSales: 131950,
  totalOrders: 8,
  totalUsers: 6,
  totalProducts: 10,
  salesTrend: "up",
  ordersTrend: "up",
  usersTrend: "up",
};
