"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <section>
      <h1>Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty. <Link href="/">Continue shopping</Link></p>
      ) : (
        <div className="cart">
          {items.map((item) => (
            <div key={item.id} className="cartRow">
              <div className="cartInfo">
                <strong>{item.name}</strong>
                <span>${item.price.toFixed(2)} / {item.unit}</span>
              </div>
              <div className="cartQty">
                <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>-</button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, Math.max(1, parseInt(e.target.value) || 1))}
                  min={1}
                />
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <div className="cartActions">
                <span>${(item.price * item.quantity).toFixed(2)}</span>
                <button className="link" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cartSummary">
            <div>Subtotal: <strong>${subtotal.toFixed(2)}</strong></div>
            <Link href="/checkout" className="button">Checkout</Link>
          </div>
        </div>
      )}
    </section>
  );
}
