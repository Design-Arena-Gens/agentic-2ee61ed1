"use client";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const router = useRouter();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await new Promise((r) => setTimeout(r, 500));
    clear();
    router.push("/success");
  };

  if (items.length === 0) {
    return (
      <section>
        <h1>Checkout</h1>
        <p>Your cart is empty.</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Checkout</h1>
      <div className="checkout">
        <div>
          <h2>Shipping</h2>
          <form onSubmit={handleSubmit} className="form">
            <label>
              Name
              <input value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
              Address
              <textarea value={address} onChange={(e) => setAddress(e.target.value)} required />
            </label>
            <button className="button" type="submit">Place order</button>
          </form>
        </div>
        <div>
          <h2>Summary</h2>
          <ul>
            {items.map((i) => (
              <li key={i.id}>{i.quantity} x {i.name}</li>
            ))}
          </ul>
          <div>Total: <strong>${subtotal.toFixed(2)}</strong></div>
        </div>
      </div>
    </section>
  );
}
