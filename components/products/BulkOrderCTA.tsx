import Button from "@/components/ui/Button";
import { site } from "@/lib/site";

export default function BulkOrderCTA() {
  return (
    <section className="bg-[#0b5a3d] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-[2rem] bg-white p-10 text-center shadow-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0b5a3d]">
            Bulk Orders
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#073d2b]">
            Supplying Homes & Businesses Across Kerala
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#4c5f56]">
            Whether you&apos;re a restaurant, hotel, catering service,
supermarket or retailer, CROWN COCO® can supply hygienically
packed Frozen Grated Coconut in bulk quantities.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              "Restaurants",
              "Hotels",
              "Catering",
              "Retail Shops",
              "Wholesale",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-[#f8f5ee] px-5 py-2 font-medium text-[#073d2b]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10">
            <Button href={site.whatsapp}>
              Enquire on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}