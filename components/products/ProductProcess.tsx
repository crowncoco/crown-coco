export default function ProductProcess() {
  const steps = [
    {
      title: "Fresh Coconut",
      description: "Carefully selected fresh coconuts.",
    },
    {
      title: "Freshly Grated",
      description: "Grated immediately after preparation.",
    },
    {
      title: "Hygienically Packed",
      description: "Packed under hygienic conditions.",
    },
    {
      title: "Immediately Frozen",
      description: "Frozen quickly to help preserve freshness.",
    },
  ];

  return (
    <section className="bg-[#f8f5ee] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0b5a3d]">
            Our Process
          </p>

          <h2 className="mt-3 text-4xl font-bold text-[#073d2b]">
            From Fresh Coconut to Your Kitchen
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[#4c5f56]">
            Every pack is prepared with care to deliver the natural taste,
            aroma and freshness of coconut.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-[#d9b45f]/30 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#0b5a3d] font-bold text-white">
                {index + 1}
              </div>

              <h3 className="text-xl font-bold text-[#073d2b]">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-[#4c5f56]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}