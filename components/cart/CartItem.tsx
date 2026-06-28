"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart";

type Props = {
  slug: string;
  name: string;
  image: string;
  weight: string;
  quantity: number;
};

export default function CartItem({
  slug,
  name,
  image,
  weight,
  quantity,
}: Props) {
  const increaseQuantity = useCart((state) => state.increaseQuantity);
  const decreaseQuantity = useCart((state) => state.decreaseQuantity);
  const removeItem = useCart((state) => state.removeItem);

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-[#d9b45f]/30 bg-white p-5">
      <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-[#fffaf0]">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={80}
            height={80}
            className="object-contain"
          />
        ) : (
          <span className="text-sm font-semibold text-[#0b5a3d]">
            Coming Soon
          </span>
        )}
      </div>

      <div className="flex-1">
        <h3 className="font-bold text-[#073d2b]">{name}</h3>

        <p className="text-sm text-[#4c5f56]">{weight}</p>

        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={() => decreaseQuantity(slug)}
            className="rounded-lg border p-2"
          >
            <Minus className="h-4 w-4" />
          </button>

          <span className="w-8 text-center font-bold">
            {quantity}
          </span>

          <button
            onClick={() => increaseQuantity(slug)}
            className="rounded-lg border p-2"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <button onClick={() => removeItem(slug)}>
        <Trash2 className="h-5 w-5 text-red-500" />
      </button>
    </div>
  );
}