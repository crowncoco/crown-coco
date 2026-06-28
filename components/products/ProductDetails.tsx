import type { Product } from "@/lib/products";

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
    },
    {
      label: "Ingredients",
      value: product.ingredients,
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
          {detailCards.map(({ label, value }) => (
            <div key={label} className={infoCard}>
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
                  {feature}
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
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}