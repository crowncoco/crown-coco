import Button from "@/components/ui/Button";
import { site } from "@/lib/site";

export default function ContactHero() {
  return (
    <section className="bg-[#f8f5ee] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0b5a3d]">
              Contact Us
            </p>

            <h1 className="mt-4 text-5xl font-bold leading-tight text-[#073d2b]">
              We Are Here to Help.
            </h1>

            <p className="mt-8 text-lg leading-8 text-[#4c5f56]">
              Whether you have questions about our products, need bulk
              quantities, or would like to become a retail partner, our team is
              ready to assist you.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={site.whatsapp}>
                Chat on WhatsApp
              </Button>

              <Button
                href="/products"
                variant="outline"
              >
                View Products
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-[#d9b45f]/30 bg-white p-10 shadow-xl">
            <div className="flex h-[420px] items-center justify-center rounded-2xl bg-[#fffaf0] text-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0b5a3d]">
                  CROWN COCO®
                </p>

                <h2 className="mt-4 text-4xl font-bold text-[#073d2b]">
                  Let&apos;s Connect
                </h2>

                <p className="mt-6 text-[#4c5f56]">
                 We&apos;re only a message away.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}