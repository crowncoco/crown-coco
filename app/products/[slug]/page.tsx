import { notFound } from "next/navigation";
import ProductDetails from "@/components/products/ProductDetails";
import ProductHero from "@/components/products/ProductHero";
import { products } from "@/lib/products";


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
    </>
  );
}
