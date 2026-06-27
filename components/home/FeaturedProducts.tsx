import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";

import { products, type Product } from "@/lib/products";
 

function ProductVisual({ product }: { product: Product }) {
  if (product.image) {
    return (
      <Image
        src={product.image}
        alt={product.name}
        width={420}
        height={320}
        className="h-full w-full object-contain p-6 transition duration-500 ease-out group-hover:scale-105"
      />
    );
  }

  return (
  <div className="flex h-full w-full items-center justify-center bg-[#fffaf0] p-6">
    <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#d9b45f]/45 bg-white text-3xl font-bold text-[#0b5a3d] shadow-[0_16px_38px_rgba(7,61,43,0.1)] transition duration-500 ease-out group-hover:scale-105">
      {product.name
  .split(" ")
  .map((word) => word[0])
  .join("")
  .slice(0, 2)}
    </div>
  </div>
);
}

export default function FeaturedProducts() {
  return (
    <section className="bg-[#f8f5ee] py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="OUR MAIN PRODUCTS"
          subtitle="Fresh. Clean. Trusted."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Card
              key={product.name}
              className="group flex h-full flex-col overflow-hidden shadow-[0_18px_48px_rgba(7,61,43,0.1)] duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(7,61,43,0.16)]"
            >
              <div className="h-56 overflow-hidden bg-[#fffaf0]">
                <ProductVisual product={product} />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
               <Badge>{product.badge}</Badge>

                <h3 className="mt-5 text-xl font-bold leading-snug text-[#073d2b]">
                  {product.name}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-[#4c5f56]">
                  {product.description}
                </p>

                <Button
                  href={`/products/${product.slug}`}
                  className="mt-7 w-full shadow-[0_14px_30px_rgba(11,90,61,0.18)]"
                >
                  View Product
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
