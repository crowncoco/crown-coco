import {
  ShieldCheck,
  Snowflake,
  Truck,
  PackageCheck,
} from "lucide-react";

const benefits = [
  {
    title: "Premium Quality",
    description: "Fresh coconuts processed hygienically for consistent quality.",
    icon: ShieldCheck,
  },
  {
    title: "Frozen Freshness",
    description: "Frozen immediately to preserve natural taste and aroma.",
    icon: Snowflake,
  },
  {
    title: "Bulk Supply",
    description: "Reliable supply for restaurants, hotels and retailers.",
    icon: Truck,
  },
  {
    title: "Secure Packaging",
    description: "Strong, hygienic packaging suitable for commercial use.",
    icon: PackageCheck,
  },
];

export default function BulkOrderBenefits() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0b5a3d]">
            Why Choose CROWN COCO®
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#073d2b]">
            Built for Commercial Kitchens
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="rounded-3xl border border-[#d9b45f]/20 bg-[#f8f5ee] p-6"
            >
              <Icon className="h-10 w-10 text-[#0b5a3d]" />

              <h3 className="mt-5 text-xl font-bold text-[#073d2b]">
                {title}
              </h3>

              <p className="mt-3 leading-7 text-[#4c5f56]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}