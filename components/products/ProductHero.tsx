import Image from "next/image";
import Button from "@/components/ui/Button";
import { site } from "@/lib/site";
import type { Product } from "@/lib/products";

type ProductHeroProps = {
  product: Product;
};

export default function ProductHero({ product }: ProductHeroProps) {
  return (
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
  );
}