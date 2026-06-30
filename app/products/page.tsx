"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/lib/cart";
import { products } from "@/lib/products";
import type { Product } from "@/lib/products";
import { toast } from "sonner";
import { Share2 } from "lucide-react";

const categories = [
  "All",
  "Frozen Coconut",
  "Dry Fish",
  "Dry Prawns",
  "Vegetables",
];

function ProductImage({ product }: { product: Product }) {
  if (product.image) {
    return (
      <Image
        src={product.image}
        alt={product.name}
        width={460}
        height={340}
        priority
        className="h-full w-full object-contain p-6 transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
      />
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-[#fffaf0] p-6">
      <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#d9b45f]/45 bg-white text-3xl font-bold text-[#0b5a3d] shadow-[0_16px_38px_rgba(7,61,43,0.1)] transition-all duration-700 ease-out group-hover:scale-110">
       Coming Soon 
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const addItem = useCart((state) => state.addItem);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

const filteredProducts = useMemo(() => {
  const query = search.trim().toLowerCase();

  return products.filter((product) => {
    const matchesSearch =
      query === "" ||
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query);

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });
}, [search, selectedCategory]);
const shareProduct = async (product: Product) => {
  const url = `${window.location.origin}/products/${product.slug}`;

  try {
    await navigator.clipboard.writeText(url);
    toast.success("Product link copied");
  } catch {
    toast.error("Unable to copy product link");
  }
};
  return (
    <main className="min-h-screen bg-[#f8f5ee]">
      <Navbar />

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#c49a3a]">
              Crown Coco Premium Foods
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-[#073d2b] sm:text-5xl lg:text-6xl">
              Our Products
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#4c5f56] sm:text-xl">
              Premium coconut products and seafood, hygienically prepared and
              packed.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
  key={category}
  type="button"
  onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-5 py-3 text-sm font-semibold shadow-sm transition duration-300 hover:-translate-y-0.5 ${
                  selectedCategory === category
                    ? "border-[#0b5a3d] bg-[#0b5a3d] text-white shadow-[0_14px_30px_rgba(11,90,61,0.18)]"
                    : "border-[#d9b45f]/45 bg-white text-[#173f31] hover:bg-[#fffaf0] hover:text-[#0b5a3d]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
<div className="mx-auto mt-8 max-w-xl">
  <input
    type="search"
    placeholder="Search products..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full rounded-full border border-[#d9b45f]/40 bg-white px-5 py-3 text-[#073d2b] shadow-sm outline-none transition focus:border-[#0b5a3d] focus:ring-2 focus:ring-[#0b5a3d]/10"
  />
</div>
          {filteredProducts.length > 0 ? (
  <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {filteredProducts.map((product) => (
              <article
  key={product.name}
  className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[#d9b45f]/30 bg-white shadow-[0_18px_48px_rgba(7,61,43,0.1)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_32px_80px_rgba(7,61,43,0.18)]"
>
                <div className="relative h-56 bg-[#fffaf0]">
                  {product.badge ? (
                    <span className="absolute left-4 top-4 z-10 rounded-full bg-[#c49a3a] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-sm">
                      {product.badge}
                    </span>
                  ) : null}
                  <ProductImage product={product} />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-xl font-bold text-[#073d2b]">
                      {product.name}
                    </h2>
                    <span className="shrink-0 rounded-full bg-[#fffaf0] px-3 py-1 text-xs font-bold text-[#c49a3a]">
                      {product.weight}
                    </span>
                  </div>

                  <p className="mt-3 flex-1 text-sm leading-6 text-[#4c5f56]">
                    {product.description}
                  </p>

                  <div className="mt-6 grid gap-3">
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center justify-center rounded-full border border-[#d9b45f]/55 bg-[#fffaf0] px-5 py-3 text-sm font-semibold text-[#073d2b] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white"
                    >
                      View Details
                    </Link>
                    <button
  type="button"
  onClick={() => shareProduct(product)}
  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d9b45f]/55 bg-white px-5 py-3 text-sm font-semibold text-[#073d2b] transition duration-300 hover:-translate-y-0.5 hover:bg-[#fffaf0]"
>
  <Share2 size={18} />
  Share
</button>
                    <button
                      type="button"
                      onClick={() => {
  addItem({
    slug: product.slug,
    name: product.name,
    image: product.image ?? "",
    weight: product.weight,
    quantity: 1,
  });

  toast.success(`${product.name} added to cart`);
}}
                      className="inline-flex items-center justify-center rounded-full bg-[#0b5a3d] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(11,90,61,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#073d2b]"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </article>
                      ))}
          </div>
) : (
  <div className="mt-16 rounded-[1.5rem] border border-dashed border-[#d9b45f]/40 bg-white p-12 text-center shadow-sm">
    <h3 className="text-2xl font-bold text-[#073d2b]">
      No products found
    </h3>

    <p className="mt-3 text-[#4c5f56]">
      Try another search or category.
    </p>
  </div>
)}
        </div>
      </section>

      <Footer />
    </main>
  );
}
