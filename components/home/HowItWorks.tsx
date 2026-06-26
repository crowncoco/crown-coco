import {
  ArrowRight,
  ClipboardCheck,
  PackageCheck,
  ShoppingBasket,
  Truck,
  type LucideIcon,
} from "lucide-react";

type Step = {
  number: string;
  title: string;
  description: string;
  Icon: LucideIcon;
};

const steps: Step[] = [
  {
    number: "1",
    title: "Choose Products",
    description:
      "Browse premium coconut products, dry fish, dry prawns and fresh cut vegetables.",
    Icon: ShoppingBasket,
  },
  {
    number: "2",
    title: "Place Your Order",
    description: "Pre-book online or order instantly through WhatsApp.",
    Icon: ClipboardCheck,
  },
  {
    number: "3",
    title: "Fresh Preparation",
    description:
      "Products are hygienically prepared, packed and quality checked.",
    Icon: PackageCheck,
  },
  {
    number: "4",
    title: "Fast Delivery",
    description: "Delivered fresh to your doorstep on time.",
    Icon: Truck,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#f8f5ee] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-wide text-[#073d2b] sm:text-4xl">
            HOW IT WORKS
          </h2>
          <p className="mt-3 text-lg font-medium text-[#6b4423]">
            Simple. Fresh. Delivered.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-7 top-0 h-full w-px bg-[#d9b45f]/35 lg:hidden" />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.Icon;

              return (
                <div key={step.title} className="relative">
                  <article className="group relative z-10 flex h-full flex-col rounded-[1.5rem] border border-[#d9b45f]/30 bg-white p-6 shadow-[0_18px_48px_rgba(7,61,43,0.1)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(7,61,43,0.16)]">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d9b45f]/35 bg-[#0b5a3d] text-white shadow-[0_14px_30px_rgba(11,90,61,0.2)] transition duration-300 group-hover:scale-105">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fffaf0] text-sm font-bold text-[#c49a3a]">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-[#073d2b]">
                      {step.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-[#4c5f56]">
                      {step.description}
                    </p>
                  </article>

                  {index < steps.length - 1 ? (
                    <div className="absolute -right-6 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-[#d9b45f]/35 bg-[#fffaf0] p-2 text-[#c49a3a] shadow-sm lg:block">
                      <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
