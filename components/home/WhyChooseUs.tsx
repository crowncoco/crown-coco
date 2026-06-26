import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  PackageCheck,
  ShieldCheck,
  Snowflake,
  Truck,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "Hygienically Processed",
    description:
      "Prepared with careful handling and clean processes for dependable everyday quality.",
    icon: ShieldCheck,
  },
  {
    title: "Premium Quality",
    description:
      "Selected ingredients packed with consistency, freshness, and a naturally rich taste.",
    icon: PackageCheck,
  },
  {
    title: "Fresh Frozen",
    description:
      "Frozen at peak freshness to preserve texture, aroma, and kitchen-ready convenience.",
    icon: Snowflake,
  },
  {
    title: "Kerala Wide Delivery",
    description:
      "Reliable delivery across Kerala for homes, retailers, hotels, and food-service buyers.",
    icon: Truck,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f8f5ee] py-16 sm:py-20">
      <Container>
        <SectionHeading
          title={"WHY CHOOSE CROWN COCO\u00ae"}
          subtitle="Fresh. Clean. Trusted."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                className="group flex h-full flex-col p-6 shadow-[0_18px_48px_rgba(7,61,43,0.1)] duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(7,61,43,0.16)] sm:p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d9b45f]/35 bg-[#0b5a3d] text-white shadow-[0_14px_30px_rgba(11,90,61,0.2)] transition duration-500 ease-out group-hover:scale-105 group-hover:text-[#d9b45f]">
                  <Icon className="h-6 w-6" strokeWidth={2.1} />
                </div>

                <h3 className="mt-6 text-xl font-bold leading-snug text-[#073d2b]">
                  {feature.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-[#4c5f56]">
                  {feature.description}
                </p>

                <div className="mt-6 h-0.5 w-16 rounded-full bg-gradient-to-r from-[#c49a3a] to-[#e6c87a] transition duration-500 group-hover:w-24" />
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
