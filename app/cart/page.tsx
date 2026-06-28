"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import EmptyCart from "@/components/cart/EmptyCart";
import { useCart } from "@/lib/cart";

export default function CartPage() {
  const items = useCart((state) => state.items);
  const clearCart = useCart((state) => state.clearCart);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8f5ee] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-[#073d2b]">
              Shopping Cart
            </h1>

            {items.length === 0 ? (
  <EmptyCart />
) : (
              items.map((item) => (
                <CartItem key={item.slug} {...item} />
              ))
            )}
          </div>

          <div className="space-y-4">
  <CartSummary />

  {items.length > 0 && (
    <button
      onClick={clearCart}
      className="w-full rounded-full border border-red-500 py-3 font-semibold text-red-500 transition hover:bg-red-500 hover:text-white"
    >
      Empty Cart
    </button>
  )}
</div>
        </div>
      </main>

      <Footer />
    </>
  );
}