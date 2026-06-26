import {
  Leaf,
  Snowflake,
  Truck,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";

type TrustItem = {
  label: string;
  icon: LucideIcon;
};

const trustItems: TrustItem[] = [
  {
    label: "100% Natural Ingredients",
    icon: Leaf,
  },
  {
    label: "Hygienically Frozen",
    icon: Snowflake,
  },
  {
    label: "Kerala Wide Delivery",
    icon: Truck,
  },
  {
    label: "FSSAI Licensed",
    icon: ShieldCheck,
  },
];

export default function TrustBar() {
  return (
    <section className="bg-[#f8f5ee] py-6">
      <Container>
        <div className="overflow-hidden rounded-[1.5rem] border border-[#d9b45f]/35 bg-white shadow-[0_18px_50px_rgba(7,61,43,0.1)]">
          <div className="grid grid-cols-1 divide-y divide-[#d9b45f]/25 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="group flex items-center gap-4 px-5 py-5 transition duration-300 hover:bg-[#fffaf0] sm:px-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d9b45f]/35 bg-[#073d2b] text-[#f8f5ee] shadow-[0_12px_26px_rgba(7,61,43,0.18)] transition duration-300 group-hover:scale-105 group-hover:text-[#d9b45f]">
                    <Icon className="h-5 w-5" strokeWidth={2.1} />
                  </span>

                  <p className="text-sm font-bold leading-6 text-[#073d2b] sm:text-base">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
    </Container>
</section>
  );
}
