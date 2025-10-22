"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export function Header() {
  const { items } = useCart();
  const count = items.reduce((a, b) => a + b.quantity, 0);
  return (
    <header className="header">
      <div className="brand">
        <span className="logo" />
        <Link href="/">Dry Fruits Shop</Link>
      </div>
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/cart">Cart ({count})</Link>
      </nav>
    </header>
  );
}
