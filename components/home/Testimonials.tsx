import { BadgeCheck, Star, Store, Users } from "lucide-react";

type Testimonial = {
  name: string;
  type: string;
  review: string;
  initials: string;
};

type TrustItem = {
  label: string;
  Icon: typeof Users;
};

const testimonials: Testimonial[] = [
  {
    name: "Anil Kumar",
    type: "Home Customer",
    review:
      "The grated coconut is always fresh and saves so much time in the kitchen.",
    initials: "AK",
  },
  {
    name: "Priya Foods",
    type: "Restaurant Owner",
    review: "Excellent quality and consistent supply for our restaurant.",
    initials: "PF",
  },
  {
    name: "Fresh Mart",
    type: "Retail Partner",
    review: "Customers love the freshness and packaging quality.",
    initials: "FM",
  },
];

const trustItems: TrustItem[] = [
  { label: "500+ Happy Customers", Icon: Users },
  { label: "25+ Retail Partners", Icon: Store },
  { label: "100% Quality Checked", Icon: BadgeCheck },
];

function Stars() {
  return (
    <div className="flex items-center gap-1 text-[#c49a3a]" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#f8f5ee] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-wide text-[#073d2b] sm:text-4xl">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <p className="mt-3 text-lg font-medium text-[#6b4423]">
            Trusted by families, restaurants and retailers.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="group flex h-full flex-col rounded-[1.5rem] border border-[#d9b45f]/30 bg-white p-6 shadow-[0_18px_48px_rgba(7,61,43,0.1)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(7,61,43,0.16)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d9b45f]/35 bg-[#0b5a3d] text-sm font-bold text-white shadow-[0_14px_30px_rgba(11,90,61,0.2)] transition duration-300 group-hover:scale-105">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#073d2b]">
                      {testimonial.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-[#6b4423]">
                      {testimonial.type}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <Stars />
              </div>

              <p className="mt-5 flex-1 text-base leading-7 text-[#4c5f56]">
                &quot;{testimonial.review}&quot;
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[1.5rem] border border-[#d9b45f]/35 bg-[#fffaf0] p-4 shadow-[0_22px_58px_rgba(7,61,43,0.12)] sm:p-6">
          <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-[auto_1fr]">
            <div className="flex items-center justify-center gap-1 rounded-[1.25rem] bg-white px-6 py-5 text-[#c49a3a] shadow-sm">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="h-5 w-5 fill-current"
                  aria-hidden="true"
                />
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {trustItems.map((item) => {
                const Icon = item.Icon;

                return (
                  <div
                    key={item.label}
                    className="group flex items-center justify-center gap-3 rounded-[1.25rem] bg-white px-5 py-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(7,61,43,0.12)]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0b5a3d] text-white shadow-[0_10px_24px_rgba(11,90,61,0.18)] transition duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold text-[#173f31]">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
