const faqs = [
  {
    question: "Do you accept bulk orders?",
    answer:
      "Yes. We supply homes, retailers, restaurants, hotels and other businesses.",
  },
  {
    question: "How can I place an order?",
    answer:
      "You can contact us directly through WhatsApp or by phone for quick assistance.",
  },
  {
    question: "Where are you located?",
    answer:
      "We are based in Kochi, Kerala, and serve customers across the region.",
  },
  {
    question: "What products do you currently offer?",
    answer:
      "Our main product is Frozen Grated Coconut, with more premium food products coming soon.",
  },
];

export default function ContactFAQ() {
  return (
    <section className="bg-[#f8f5ee] py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0b5a3d]">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#073d2b]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 space-y-6">
          {faqs.map(({ question, answer }) => (
            <div
              key={question}
              className="rounded-3xl border border-[#d9b45f]/30 bg-white p-8"
            >
              <h3 className="text-xl font-bold text-[#073d2b]">
                {question}
              </h3>

              <p className="mt-4 leading-7 text-[#4c5f56]">
                {answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}