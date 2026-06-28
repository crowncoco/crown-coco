"use client";

import Button from "@/components/ui/Button";
import { site } from "@/lib/site";
import { useCart } from "@/lib/cart";

export default function CartSummary() {
  const items = useCart((state) => state.items);
  const clearCart = useCart((state) => state.clearCart);

  const totalItems = items.reduce(
  (sum, item) => sum + item.quantity,
  0
);

const message = encodeURIComponent(`Hi CROWN COCO,

I'd like to prebook the following items:

${items
  .map(
    (item) => `• ${item.name}
  Weight: ${item.weight}
  Quantity: ${item.quantity}`
  )
  .join("\n\n")}

Total Items: ${totalItems}

Please confirm availability.
`);

  return (
    <div className="rounded-3xl border border-[#d9b45f]/30 bg-white p-8">
      <h2 className="text-2xl font-bold text-[#073d2b]">
        Order Summary
      </h2>

      <p className="mt-4 text-[#4c5f56]">
        Total Items:{" "}
        <span className="font-bold">
          {items.reduce((sum, item) => sum + item.quantity, 0)}
        </span>
      </p>

      <div className="mt-8 space-y-3">
  <Button href={`${site.whatsapp}?text=${message}`}>
    Continue on WhatsApp
  </Button>

  <button
    onClick={clearCart}
    className="w-full rounded-full border border-red-500 py-3 font-semibold text-red-500 transition hover:bg-red-500 hover:text-white"
  >
    Empty Cart
  </button>
</div>
    </div>
  );
}