import Button from "@/components/ui/Button";
import { site } from "@/lib/site";
import { MapPinned } from "lucide-react";

export default function ContactMap() {
  return (
    <section className="bg-[#f8f5ee] py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="rounded-3xl border border-[#d9b45f]/30 bg-white p-10 shadow-sm text-center">
          <div className="mb-6 inline-flex rounded-2xl bg-[#0b5a3d]/10 p-4">
            <MapPinned className="h-8 w-8 text-[#0b5a3d]" />
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0b5a3d]">
            Visit Us
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#073d2b]">
            Find Our Location
          </h2>

          <div className="mt-6 space-y-1 text-[#4c5f56]">
            {site.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="mt-10">
            <Button href={site.map}>
              View on Google Maps
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}