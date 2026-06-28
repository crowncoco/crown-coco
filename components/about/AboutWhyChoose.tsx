import {
  ShieldCheck,
  Snowflake,
  Sparkles,
  HeartHandshake,
} from "lucide-react";

const reasons = [
  {
    title: "Premium Quality",
    description: "Carefully selected ingredients prepared with high standards.",
    icon: ShieldCheck,
  },
  {
    title: "Freshness Preserved",
    description: "Quick freezing helps maintain natural taste and freshness.",
    icon: Snowflake,
  },
  {
    title: "Hygienically Packed",
    description: "Prepared and packed with cleanliness and care.",
    icon: Sparkles,
  },
  {
    title: "Trusted Brand",
    description: "Committed to serving families and businesses with consistency.",
    icon: HeartHandshake,
  },
];

export default function AboutWhyChoose() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0b5a3d]">
            Why Choose CROWN COCO®
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#073d2b]">
            Quality You Can Trust
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="rounded-3xl border border-[#d9b45f]/30 bg-[#f8f5ee] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-[#0b5a3d]/10 p-4">
                <Icon className="h-7 w-7 text-[#0b5a3d]" />
              </div>

              <h3 className="text-xl font-bold text-[#073d2b]">
                {title}
              </h3>

              <p className="mt-4 leading-7 text-[#4c5f56]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}