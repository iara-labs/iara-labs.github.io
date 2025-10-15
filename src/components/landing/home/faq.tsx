import { faqItems } from "@/data/faq";

const Faq = () => {
  return (
    <section
      id="faq"
      className="bg-gradient-to-br from-[var(--color-neutral-100)] via-[var(--color-neutral-200)]/40 to-[var(--color-neutral-100)] py-20 md:py-32"
    >
      <div className="mx-auto max-w-[800px] px-6">
        <div className="mb-16 text-center">
          <h2 className="font-['Space_Grotesk'] text-4xl font-bold leading-tight text-[var(--color-neutral-900)] md:text-5xl lg:text-6x">
            Perguntas frequentes
          </h2>
        </div>

        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <details
              key={index}
              className="group rounded-lg border border-[var(--color-neutral-200)] bg-white p-6 shadow-sm"
            >
              <summary className="flex cursor-pointer items-center justify-between font-['Space_Grotesk'] font-semibold text-[var(--color-neutral-900)]">
                <span>{item.question}</span>
                <svg
                  className="h-5 w-5 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed text-[var(--color-neutral-700)]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
