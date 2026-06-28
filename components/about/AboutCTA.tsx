import Button from "@/components/ui/Button";
import { site } from "@/lib/site";

export default function AboutCTA() {
  return (
    <section className="bg-[#0b5a3d] py-20">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-4xl font-bold text-white">
          Experience the Freshness of CROWN COCO®
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
          Whether you are a home cook, retailer, restaurant or wholesale
          customer, we are ready to provide premium quality food products with
          freshness and care.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/products">
            Explore Products
          </Button>

          <Button
            href={site.whatsapp}
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-[#0b5a3d]"
          >
            Contact on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}