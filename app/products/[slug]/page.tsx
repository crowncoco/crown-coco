import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

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

  return (
    <section className="bg-[#f8f5ee] py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2">

        <div className="rounded-3xl border border-[#d9b45f]/30 bg-white p-8 shadow-xl">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              width={700}
              height={700}
              className="mx-auto object-contain"
            />
          ) : (
            <div className="flex h-[420px] items-center justify-center rounded-2xl bg-[#fffaf0] text-5xl font-bold text-[#0b5a3d]">
              {product.name}
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center">

          <span className="mb-4 inline-flex w-fit rounded-full bg-[#0b5a3d] px-4 py-2 text-sm font-semibold text-white">
            {product.badge}
          </span>

          <h1 className="text-5xl font-bold text-[#073d2b]">
            {product.name}
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#4c5f56]">
            {product.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <Link
              href={site.whatsapp}
              className="rounded-full bg-[#0b5a3d] px-8 py-4 text-center font-semibold text-white transition hover:bg-[#073d2b]"
            >
              Order on WhatsApp
            </Link>

            <Link
              href={site.phoneLink}
              className="rounded-full border border-[#0b5a3d] px-8 py-4 text-center font-semibold text-[#0b5a3d] transition hover:bg-[#0b5a3d] hover:text-white"
            >
              Call Now
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}