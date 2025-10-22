"use client";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="card">
      <div style={{height:140,background:"#0a0f1a",borderRadius:8,border:"1px solid #1f2937"}} />
      <strong>{product.name}</strong>
      <span className="price">${product.price.toFixed(2)} / {product.unit}</span>
      <button className="button" onClick={() => addItem(product)}>Add to cart</button>
    </div>
  );
}
