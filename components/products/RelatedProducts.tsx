import Image from "next/image";
import Button from "@/components/ui/Button";
import { products } from "@/lib/products";

export default function RelatedProducts() {
  const related = products.filter(
    (product) => product.slug !== "frozen-grated-coconut"
  );

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0b5a3d]">
            More Products
          </p>

          <h2 className="mt-3 text-4xl font-bold text-[#073d2b]">
            Coming Soon
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {related.map((product) => (
            <div
              key={product.slug}
              className="rounded-3xl border border-[#d9b45f]/30 bg-[#f8f5ee] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-48 items-center justify-center rounded-2xl bg-white">
  {product.image ? (
    <Image
      src={product.image}
      alt={product.name}
      width={180}
      height={180}
      className="object-contain"
    />
  ) : (
    <span className="text-center text-xl font-bold text-[#073d2b]">
      {product.name}
    </span>
  )}
</div>

              <h3 className="mt-6 text-2xl font-bold text-[#073d2b]">
                {product.name}
              </h3>

              <p className="mt-3 text-[#4c5f56]">
                {product.shortDescription}
              </p>

              <span className="mt-6 inline-block rounded-full bg-[#0b5a3d] px-4 py-2 text-sm font-semibold text-white">
                {product.badge}
              </span>

              {product.available && (
                <div className="mt-6">
                  <Button
  href={`/products/${product.slug}`}
  variant="outline"
>
  View Product
</Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}