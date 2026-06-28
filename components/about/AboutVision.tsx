import { Eye, Leaf, PackageCheck } from "lucide-react";

const visions = [
  {
    title: "Growing Product Range",
    description:
      "Expanding from Frozen Grated Coconut to carefully selected food products.",
    icon: PackageCheck,
  },
  {
    title: "Sustainable Growth",
    description:
      "Building a trusted food brand through quality, consistency and customer satisfaction.",
    icon: Leaf,
  },
  {
    title: "Long-Term Vision",
    description:
      "To become a trusted household name for premium food products across Kerala and beyond.",
    icon: Eye,
  },
];

export default function AboutVision() {
  return (
    <section className="bg-[#f8f5ee] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0b5a3d]">
            Our Vision
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#073d2b]">
            Looking Towards the Future
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {visions.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-[#0b5a3d]/10 p-4">
                <Icon className="h-7 w-7 text-[#0b5a3d]" />
              </div>

              <h3 className="text-2xl font-bold text-[#073d2b]">
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