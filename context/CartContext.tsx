"use client";
import { createContext, useContext, useMemo, useState } from "react";
import type { Product } from "@/data/products";

export type CartItem = Product & { quantity: number };

type CartContextValue = {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clear: () => void;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p));
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeItem = (id: string) => setItems((prev) => prev.filter((p) => p.id !== id));
  const updateQuantity = (id: string, quantity: number) => setItems((prev) => prev.map((p) => (p.id === id ? { ...p, quantity } : p)));
  const clear = () => setItems([]);

  const subtotal = useMemo(() => items.reduce((sum, i) => sum + i.price * i.quantity, 0), [items]);

  const value: CartContextValue = { items, addItem, removeItem, updateQuantity, clear, subtotal };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
