import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export default function HomePage() {
  return (
    <section>
      <h1>Dry Fruits Catalog</h1>
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />)
        )}
      </div>
    </section>
  );
}
