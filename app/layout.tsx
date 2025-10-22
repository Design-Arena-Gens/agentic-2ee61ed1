import "./globals.css";
import type { Metadata } from "next";
import { CartProvider } from "@/context/CartContext";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Dry Fruits Shop",
  description: "Premium dry fruits delivered fresh.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main className="container">{children}</main>
          <footer className="footer">© {new Date().getFullYear()} Dry Fruits Shop</footer>
        </CartProvider>
      </body>
    </html>
  );
}
