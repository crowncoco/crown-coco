const faqs = [
  {
    question: "Is CROWN COCO® Frozen Grated Coconut ready to use?",
    answer:
      "Yes. Simply use the required quantity directly for your cooking.",
  },
  {
    question: "Does it contain preservatives?",
    answer:
      "No. It is prepared using 100% fresh coconut with no added preservatives.",
  },
  {
    question: "What dishes is it suitable for?",
    answer:
      "It is ideal for curries, chutneys, desserts and everyday cooking.",
  },
];

export default function ProductFAQ() {
  return (
    <section className="bg-[#f8f5ee] py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0b5a3d]">
            FAQ
          </p>

          <h2 className="mt-3 text-4xl font-bold text-[#073d2b]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-[#d9b45f]/30 bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-[#073d2b]">
                {faq.question}
              </h3>

              <p className="mt-3 leading-7 text-[#4c5f56]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}