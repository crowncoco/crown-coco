import { notFound } from "next/navigation";
import Image from "next/image";
import Button from "@/components/ui/Button";

import { products } from "@/lib/products";
import { site } from "@/lib/site";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const detailCards = [
    { label: "Net Weight", value: product.weight },
    { label: "Ingredients", value: product.ingredients },
  ];

  const productInfoCardClass =
    "rounded-2xl border border-[#d9b45f]/30 bg-[#f8f5ee] p-6";
  const productGridCardClass =
    "rounded-2xl border border-[#d9b45f]/30 bg-[#fffaf0] p-5 font-semibold text-[#4c5f56]";

  return (
    <>
      <section className="bg-[#f8f5ee] py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#d9b45f]/20 bg-gradient-to-br from-white via-[#fffdf8] to-[#f8f5ee] p-10 shadow-2xl">
            {product.image ? (
              <Image
  src={product.image}
  alt={product.name}
  width={750}
  height={750}
  priority
  className="mx-auto w-full max-w-md object-contain transition-transform duration-500 hover:scale-105"
/>
            ) : (
              <div className="flex h-[420px] items-center justify-center rounded-2xl bg-[#fffaf0] text-5xl font-bold text-[#0b5a3d]">
                {product.name}
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <span className="mb-5 inline-flex w-fit rounded-full border border-[#d9b45f]/30 bg-[#f3ead3] px-4 py-2 text-sm font-semibold tracking-wide text-[#0b5a3d]">
              {product.badge}
            </span>

            <h1 className="text-4xl font-extrabold leading-tight text-[#073d2b] md:text-5xl lg:text-6xl">
              {product.name}
            </h1>

           <p className="mt-6 max-w-xl text-lg leading-8 text-[#4c5f56]">
  {product.description}
</p>

<div className="mt-8 grid gap-4 sm:grid-cols-2">
  <div className="rounded-2xl border border-[#d9b45f]/30 bg-white p-5 shadow-sm">
    <p className="text-xs font-semibold uppercase tracking-wider text-[#0b5a3d]">
      Net Weight
    </p>
    <p className="mt-2 text-xl font-bold text-[#073d2b]">
      {product.weight}
    </p>
  </div>

  <div className="rounded-2xl border border-[#d9b45f]/30 bg-white p-5 shadow-sm">
    <p className="text-xs font-semibold uppercase tracking-wider text-[#0b5a3d]">
      Ingredients
    </p>
    <p className="mt-2 text-xl font-bold text-[#073d2b]">
      {product.ingredients}
    </p>
  </div>
</div>

<div className="mt-8">
  <h2 className="text-sm font-semibold uppercase tracking-wider text-[#0b5a3d]">
   Why You&apos;ll Love It
  </h2>

  <div className="mt-4 flex flex-wrap gap-3">
    {product.features.map((feature) => (
      <span
        key={feature}
        className="rounded-full border border-[#d9b45f]/40 bg-[#fffaf0] px-4 py-2 text-sm font-medium text-[#073d2b]"
      >
        ✓ {feature}
      </span>
    ))}
  </div>
</div>

<div className="mt-10 flex flex-col gap-4 sm:flex-row">
  <Button href={site.whatsapp}>
    {product.button}
  </Button>

  <Button href={site.phoneLink} variant="outline">
    Call Now
  </Button>
</div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-bold text-[#073d2b]">
            Product Details
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {detailCards.map(({ label, value }) => (
              <div key={label} className={productInfoCardClass}>
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
                  <div
                    key={feature}
                    className={productGridCardClass}
                  >
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
                  <div
                    key={item}
                    className={productGridCardClass}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
