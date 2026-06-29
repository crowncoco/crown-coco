"use client";

import { useState } from "react";
import { products } from "@/lib/products";
import { site } from "@/lib/site";
import Button from "@/components/ui/Button";


export default function BulkOrderForm() {
const [form, setForm] = useState({
  business: "",
  contact: "",
  phone: "",
  product: products.find((p) => p.available)?.name ?? "",
  quantity: "",
  city: "",
  notes: "",
});
const whatsappMessage = encodeURIComponent(`Hi CROWN COCO,

I'd like to enquire about a bulk order.

Business: ${form.business}
Contact Person: ${form.contact}
Phone: ${form.phone}
Product: ${form.product}
Estimated Monthly Quantity: ${form.quantity}
City / District: ${form.city}
Additional Requirements: ${form.notes || "-"}

Please contact me with pricing and availability. Thank you!`);

  return (
    <section className="bg-[#f8f5ee] py-20">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-lg">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0b5a3d]">
          Bulk Enquiry
        </p>

        <h2 className="mt-4 text-4xl font-bold text-[#073d2b]">
          Request a Bulk Quote
        </h2>

        <form className="mt-10 space-y-7">
          <div>
            <label className="mb-2 block font-semibold text-[#073d2b]">
              Business Name
            </label>

            <input
              type="text"
              value={form.business}
              onChange={(e) =>
                setForm({ ...form, business: e.target.value })
              }
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-[#0b5a3d] focus:ring-4 focus:ring-[#0b5a3d]/10"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-[#073d2b]">
              Contact Person
            </label>

            <input
              type="text"
              value={form.contact}
              onChange={(e) =>
                setForm({ ...form, contact: e.target.value })
              }
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-[#0b5a3d] focus:ring-4 focus:ring-[#0b5a3d]/10"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-[#073d2b]">
              Phone Number
            </label>

            <input
              type="tel"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-[#0b5a3d] focus:ring-4 focus:ring-[#0b5a3d]/10"
            />
          </div>
          <div>
  <label className="mb-2 block font-semibold text-[#073d2b]">
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
  <label className="mb-2 block font-semibold text-[#073d2b]">
    Estimated Monthly Quantity
  </label>

  <input
    type="text"
    value={form.quantity}
    onChange={(e) =>
      setForm({ ...form, quantity: e.target.value })
    }
    placeholder="Example: 100 kg / 500 packs"
    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-[#0b5a3d] focus:ring-4 focus:ring-[#0b5a3d]/10"
  />
</div>
<div>
  <label className="mb-2 block font-semibold text-[#073d2b]">
    City / District
  </label>

  <input
    type="text"
    value={form.city}
    onChange={(e) =>
      setForm({ ...form, city: e.target.value })
    }
    placeholder="Example: Kochi"
    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-[#0b5a3d] focus:ring-4 focus:ring-[#0b5a3d]/10"
  />
</div>

<div>
  <label className="mb-2 block font-semibold text-[#073d2b]">
    Additional Requirements
  </label>

  <textarea
    rows={4}
    value={form.notes}
    onChange={(e) =>
      setForm({ ...form, notes: e.target.value })
    }
    placeholder="Tell us about your requirements..."
    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-[#0b5a3d] focus:ring-4 focus:ring-[#0b5a3d]/10 resize-none"
  />
</div>

<div className="pt-2">
  <Button href={`${site.whatsapp}?text=${whatsappMessage}`}>
    Request Bulk Quote
  </Button>
</div>

</form>
      </div>
    </section>
  );
}