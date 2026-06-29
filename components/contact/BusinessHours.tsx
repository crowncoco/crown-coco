import { Clock3 } from "lucide-react";

const hours = [
  { day: "Monday", time: "9:00 AM – 6:00 PM" },
  { day: "Tuesday", time: "9:00 AM – 6:00 PM" },
  { day: "Wednesday", time: "9:00 AM – 6:00 PM" },
  { day: "Thursday", time: "9:00 AM – 6:00 PM" },
  { day: "Friday", time: "9:00 AM – 6:00 PM" },
  { day: "Saturday", time: "9:00 AM – 4:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function BusinessHours() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center">
          <div className="inline-flex rounded-2xl bg-[#0b5a3d]/10 p-4">
            <Clock3 className="h-8 w-8 text-[#0b5a3d]" />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#0b5a3d]">
            Business Hours
          </p>

          <h2 className="mt-3 text-4xl font-bold text-[#073d2b]">
            We&apos;re Available
          </h2>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-[#d9b45f]/30 shadow-lg">
          {hours.map(({ day, time }) => (
            <div
              key={day}
              className="flex items-center justify-between border-b border-[#d9b45f]/20 bg-[#f8f5ee] px-8 py-5 last:border-b-0"
            >
              <span className="font-semibold text-[#073d2b]">
                {day}
              </span>

              <span className="text-[#4c5f56]">
                {time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}