import type { Product } from "@/lib/products";
import { Package, Leaf, CheckCircle, Utensils } from "lucide-react";

type ProductDetailsProps = {
  product: Product;
};

export default function ProductDetails({
  product,
}: ProductDetailsProps) {
 const detailCards = [
  {
    label: "Net Weight",
    value: product.weight,
    icon: Package,
  },
  {
    label: "Ingredients",
    value: product.ingredients,
    icon: Leaf,
  },
];

  const infoCard =
    "rounded-2xl border border-[#d9b45f]/30 bg-[#f8f5ee] p-6";

  const gridCard =
    "rounded-2xl border border-[#d9b45f]/30 bg-[#fffaf0] p-5 font-semibold text-[#4c5f56]";

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-4xl font-bold text-[#073d2b]">
          Product Details
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {detailCards.map(({ label, value, icon: Icon }) => (
            <div key={label} className={infoCard}>
                <div className="mb-4 inline-flex rounded-xl bg-[#0b5a3d]/10 p-3">
  <Icon className="h-6 w-6 text-[#0b5a3d]" />
</div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#0b5a3d]">
                {label}
              </h3>

              <p className="mt-3 text-lg font-semibold text-[#073d2b]">
                {value}
              </p>
            </div>
          ))}
        </div>

        {product.features.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-[#073d2b]">
              Key Features
            </h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {product.features.map((feature) => (
                <div key={feature} className={gridCard}>
                 <div className="flex items-center gap-3">
  <CheckCircle className="h-5 w-5 text-[#0b5a3d]" />
  <span>{feature}</span>
</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {product.idealFor.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-[#073d2b]">
              Ideal For
            </h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {product.idealFor.map((item) => (
                <div key={item} className={gridCard}>
                  <div className="flex items-center gap-3">
  <Utensils className="h-5 w-5 text-[#0b5a3d]" />
  <span>{item}</span>
</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}