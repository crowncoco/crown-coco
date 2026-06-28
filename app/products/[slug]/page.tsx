import { notFound } from "next/navigation";
import ProductDetails from "@/components/products/ProductDetails";
import ProductHero from "@/components/products/ProductHero";
import { products } from "@/lib/products";
import ProductProcess from "@/components/products/ProductProcess";
import BulkOrderCTA from "@/components/products/BulkOrderCTA";
import RelatedProducts from "@/components/products/RelatedProducts";

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
    <>
      <ProductHero product={product} />

      <ProductDetails product={product} />
      <ProductProcess />
      <BulkOrderCTA />
      <RelatedProducts />
    </>
  );
}
