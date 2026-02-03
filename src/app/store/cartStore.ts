import { create } from "zustand";

export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  rating?: {
    rate: number;
  };
};

type ProductStore = {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  searchQuery: string;

  fetchProducts: () => Promise<void>;
  setSearchQuery: (query: string) => void;
};

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  isLoading: false,
  error: null,
  searchQuery: "",

  fetchProducts: async () => {
    set({ isLoading: true, error: null });

    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      set({ products: data, isLoading: false });
    } catch {
      set({ error: "Failed to fetch products", isLoading: false });
    }
  },

  setSearchQuery: (query) => set({ searchQuery: query }),
}));
