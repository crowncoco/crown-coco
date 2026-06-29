"use client";

import { useMemo, useState } from "react";
import { products } from "@/lib/products";
import { site } from "@/lib/site";
import Button from "@/components/ui/Button";
import { useSearchParams } from "next/navigation";

export default function PrebookForm() {
    const searchParams = useSearchParams();

const selectedProduct = useMemo(() => {
  const slug = searchParams.get("product");

  return (
    products.find((product) => product.slug === slug)?.name ??
    products.find((product) => product.available)?.name ??
    ""
  );
}, [searchParams]);
  const [form, setForm] = useState({
    name: "",
    phone: "",
   product: selectedProduct,
    quantity: "1",
    notes: "",
  });
 
  const whatsappMessage = encodeURIComponent(`Hi CROWN COCO,

I'd like to prebook an order.

Name: ${form.name}
Phone: ${form.phone}
Product: ${form.product}
Quantity: ${form.quantity}
Notes: ${form.notes || "-"}

Please confirm availability. Thank you!`);
const canSubmit =
  form.name.trim() !== "" &&
  form.phone.trim() !== "";

  return (
    <form className="mt-10 space-y-7">
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#073d2b]">
          Name
        </label>

        <input
          type="text"
          required
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-[#0b5a3d] focus:ring-4 focus:ring-[#0b5a3d]/10"
          placeholder="Your Name"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-[#073d2b]">
          Phone Number
        </label>

        <input
          type="tel"
          required
          inputMode="numeric"
pattern="[0-9]{10}"
maxLength={10}
          value={form.phone}
         onChange={(e) =>
  setForm({
    ...form,
    phone: e.target.value.replace(/\D/g, "").slice(0, 10),
  })
}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-[#0b5a3d] focus:ring-4 focus:ring-[#0b5a3d]/10"
          placeholder="Your Phone Number"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-[#073d2b]">
          Product
        </label>

        <select
          value={form.product}
          onChange={(e) =>
            setForm({ ...form, product: e.target.value })
          }
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-[#0b5a3d] focus:ring-4 focus:ring-[#0b5a3d]/10"
        >
          {products
            .filter((product) => product.available)
            .map((product) => (
              <option key={product.slug} value={product.name}>
                {product.name}
              </option>
            ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-[#073d2b]">
          Quantity
        </label>

        <input
          type="number"
          min={1}
          value={form.quantity}
          onChange={(e) =>
            setForm({ ...form, quantity: e.target.value })
          }
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-[#0b5a3d] focus:ring-4 focus:ring-[#0b5a3d]/10"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-[#073d2b]">
          Notes
        </label>

        <textarea
          rows={4}
          value={form.notes}
          onChange={(e) =>
            setForm({ ...form, notes: e.target.value })
          }
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-[#0b5a3d] focus:ring-4 focus:ring-[#0b5a3d]/10 resize-none"
          placeholder="Additional requirements..."
        />
     </div>

<div className="pt-2">
  <Button
    href={`${site.whatsapp}?text=${whatsappMessage}`}
    disabled={!canSubmit}
  >
    Prebook on WhatsApp
  </Button>
</div>

</form>
  );
}