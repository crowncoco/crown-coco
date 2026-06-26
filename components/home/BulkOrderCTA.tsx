import Link from "next/link";
import {
  Building2,
  CheckCircle2,
  MessageCircle,
  Phone,
  Quote,
  Store,
  Utensils,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  label: string;
  Icon: LucideIcon;
};

type Action = {
  label: string;
  href: string;
  Icon: LucideIcon;
  variant: "primary" | "secondary";
};

const features: Feature[] = [
  { label: "Hotels & Restaurants", Icon: Utensils },
  { label: "Supermarkets", Icon: Store },
  { label: "Catering Services", Icon: CheckCircle2 },
  { label: "Retail Stores", Icon: Building2 },
];

const actions: Action[] = [
  {
    label: "Request a Quote",
    href: "/bulk-orders",
    Icon: Quote,
    variant: "primary",
  },
  {
    label: "Call Us",
    href: "tel:",
    Icon: Phone,
    variant: "secondary",
  },
  {
    label: "WhatsApp Us",
    href: "https://wa.me/",
    Icon: MessageCircle,
    variant: "secondary",
  },
];

export default function BulkOrderCTA() {
  return (
    <section className="bg-[#f8f5ee] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#c49a3a]">
            SPECIAL PRICING FOR BULK ORDERS
          </p>
        </div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-[#073d2b] sm:text-4xl lg:text-5xl">
              Need Products in Bulk?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#4c5f56] sm:text-lg">
              We supply premium frozen grated coconut, dry fish, dry prawns and
              fresh cut vegetables to restaurants, hotels, caterers,
              supermarkets and retailers.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.Icon;

                return (
                  <div
                    key={feature.label}
                    className="group flex items-center gap-3 rounded-full border border-[#d9b45f]/30 bg-white px-4 py-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(7,61,43,0.1)]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0b5a3d] text-white shadow-[0_10px_24px_rgba(11,90,61,0.18)] transition duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold text-[#173f31]">
                      {feature.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-6 rounded-[2rem] bg-[#d9b45f]/20 blur-3xl" />
            <div className="relative rounded-[2rem] border border-[#d9b45f]/35 bg-[#fffaf0] p-5 shadow-[0_28px_70px_rgba(7,61,43,0.16)] sm:p-7">
              <div className="rounded-[1.5rem] bg-white p-6 shadow-inner sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c49a3a]">
                  Bulk Supply
                </p>
                <h3 className="mt-3 text-2xl font-bold text-[#073d2b] sm:text-3xl">
                  Get a custom quote for your business.
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#4c5f56]">
                  Share your requirement and our team will help with pricing,
                  quantity and delivery options.
                </p>

                <div className="mt-7 grid gap-3">
                  {actions.map((action) => {
                    const Icon = action.Icon;
                    const isPrimary = action.variant === "primary";

                    return (
                      <Link
                        key={action.label}
                        href={action.href}
                        className={`inline-flex items-center justify-center gap-3 rounded-full px-5 py-3 text-sm font-semibold shadow-[0_14px_30px_rgba(7,61,43,0.1)] transition duration-300 hover:-translate-y-0.5 ${
                          isPrimary
                            ? "bg-[#0b5a3d] text-white hover:bg-[#073d2b]"
                            : "border border-[#d9b45f]/55 bg-[#fffaf0] text-[#073d2b] hover:bg-white"
                        }`}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                        {action.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
