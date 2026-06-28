import Button from "@/components/ui/Button";
import { site } from "@/lib/site";

export default function ContactCTA() {
  return (
    <section className="bg-[#0b5a3d] py-20">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-12 text-center shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0b5a3d]">
          Need Assistance?
        </p>

        <h2 className="mt-4 text-4xl font-bold text-[#073d2b]">
          Chat With Us on WhatsApp
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#4c5f56]">
          Have a question about our products, bulk orders or delivery?
          Our team is ready to help you.
        </p>

        <div className="mt-10">
          <Button href={site.whatsapp}>
            Start WhatsApp Chat
          </Button>
        </div>
      </div>
    </section>
  );
}