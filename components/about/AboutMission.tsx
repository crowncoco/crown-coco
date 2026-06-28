export default function AboutMission() {
  return (
    <section className="bg-[#f8f5ee] py-20">
  <div className="mx-auto max-w-7xl px-4 text-center">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0b5a3d]">
      Our Mission
    </p>

    <h2 className="mt-4 text-4xl font-bold text-[#073d2b]">
      Delivering Freshness with Every Pack.
    </h2>

    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#4c5f56]">
      Our mission is to provide premium food products that combine freshness,
      hygiene and convenience. Every product is prepared with care so families,
      retailers and food businesses can enjoy consistent quality every day.
    </p>

    <div className="mt-12 grid gap-6 md:grid-cols-3">
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h3 className="text-xl font-bold text-[#073d2b]">
          Fresh Quality
        </h3>

        <p className="mt-4 text-[#4c5f56]">
          Premium ingredients selected with care.
        </p>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h3 className="text-xl font-bold text-[#073d2b]">
          Hygienic Preparation
        </h3>

        <p className="mt-4 text-[#4c5f56]">
          Clean processes that help preserve freshness.
        </p>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h3 className="text-xl font-bold text-[#073d2b]">
          Trusted Service
        </h3>

        <p className="mt-4 text-[#4c5f56]">
          Supporting homes and businesses across Kerala.
        </p>
      </div>
    </div>
  </div>
</section>
  );
}