import Button from "@/components/ui/Button";
import { site } from "@/lib/site";

export default function BulkOrdersHero() {
  return (
    <section className="bg-[#f8f5ee] py-20">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0b5a3d]">
          Bulk Orders
        </p>

        <h1 className="mt-4 text-5xl font-bold text-[#073d2b]">
          Bulk Supply for Businesses Across Kerala
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5f56]">
          We supply premium Frozen Grated Coconut in bulk quantities for
          restaurants, hotels, supermarkets, catering services, retailers,
          wholesalers and food businesses.
        </p>

        <div className="mt-10">
          <Button href={site.whatsapp}>
            Get a Bulk Quote
          </Button>
        </div>
      </div>
    </section>
  );
}