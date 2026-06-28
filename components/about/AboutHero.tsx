import Button from "@/components/ui/Button";
import { site } from "@/lib/site";

export default function AboutHero() {
  return (
    <section className="bg-[#f8f5ee] py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0b5a3d]">
            About CROWN COCO®
          </p>

          <h1 className="mt-4 text-5xl font-bold leading-tight text-[#073d2b]">
            Bringing Freshness from Kerala to Every Kitchen.
          </h1>

          <p className="mt-8 text-lg leading-8 text-[#4c5f56]">
            CROWN COCO® is committed to delivering premium quality food
            products prepared with care. Starting with Frozen Grated Coconut,
            our goal is to make everyday cooking easier while maintaining the
            freshness, taste and quality that families and businesses trust.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/products">
              Explore Products
            </Button>

            <Button
              href={site.whatsapp}
              variant="outline"
            >
              Contact Us
            </Button>
          </div>
        </div>

        <div className="rounded-3xl border border-[#d9b45f]/30 bg-white p-10 shadow-xl">
          <div className="flex h-[420px] items-center justify-center rounded-2xl bg-[#fffaf0] text-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0b5a3d]">
                Fresh. Clean. Trusted.
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#073d2b]">
                From Coconut
                <br />
                to Coast.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}