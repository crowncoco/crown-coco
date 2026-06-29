import { notFound } from "next/navigation";
import type { Metadata } from "next";

import ProductDetails from "@/components/products/ProductDetails";
import ProductHero from "@/components/products/ProductHero";
import { products } from "@/lib/products";
import ProductProcess from "@/components/products/ProductProcess";
import BulkOrderCTA from "@/components/products/BulkOrderCTA";
import RelatedProducts from "@/components/products/RelatedProducts";
import ProductFAQ from "@/components/products/ProductFAQ";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  const productUrl = `/products/${product.slug}`;
  const image = product.image || "/og-image.png";

  return {
    title: product.name,
    description: product.shortDescription,
    alternates: {
      canonical: productUrl,
    },
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      url: productUrl,
      type: "website",
      images: [
        {
          url: image,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.shortDescription,
      images: [image],
    },
  };
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}
export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }




  return (
    <>
      <ProductHero product={product} />

      <ProductDetails product={product} />
      <ProductProcess />
      <BulkOrderCTA />
      <RelatedProducts />
       <ProductFAQ />
    </>
  );
}
