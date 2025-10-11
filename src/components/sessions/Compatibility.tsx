const Compatibility = () => {
  return (
    <section className="bg-gradient-to-br from-[var(--color-neutral-100)] via-[var(--color-neutral-50)] to-[var(--color-neutral-200)]/30 py-20 md:py-32">
      <div className="mb-16 text-center">
        <h2 className="font-['Space_Grotesk'] text-4xl font-bold leading-tight text-[var(--color-neutral-900)] md:text-5xl lg:text-6x">
          Compatibilidade com AWS
        </h2>
      </div>
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="rounded-2xl border border-[var(--color-neutral-200)] bg-white p-8 shadow-lg md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-6 leading-relaxed text-[var(--color-neutral-700)]">
                Nossa API é 100% compatível com AWS Rekognition e Textract. Use
                o mesmo código, mesmas bibliotecas, apenas mude o endpoint.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--color-primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-[var(--color-neutral-700)]">
                    Mesma estrutura de requisições e respostas JSON
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--color-primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-[var(--color-neutral-700)]">
                    Compatível com AWS SDK v3 para Node.js, Python e Go
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--color-primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-[var(--color-neutral-700)]">
                    Migração sem reescrever código — apenas configure o endpoint
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex h-54 w-54 items-center justify-center rounded-full bg-[var(--color-primary)]/10">
                <svg
                  className="h-36 w-36 text-[var(--color-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compatibility;
