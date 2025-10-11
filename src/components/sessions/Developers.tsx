const Developers = () => {
  return (
    <section id="desenvolvedores" className="py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-16 text-center">
          <h2 className="font-['Space_Grotesk'] text-4xl font-bold leading-tight text-[var(--color-neutral-900)] md:text-5xl lg:text-6x">
            Feito por Devs e para Devs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-neutral-700)]">
            APIs REST simples, SDKs oficiais e documentação completa em
            português.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)]/10">
                <svg
                  className="h-8 w-8 text-[var(--color-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-3 font-['Space_Grotesk'] text-2xl font-semibold text-[var(--color-neutral-900)]">
              Docs em português
            </h3>
            <p className="text-[var(--color-neutral-700)]">
              Guias, exemplos e referência completa na sua língua.
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)]/10">
                <svg
                  className="h-8 w-8 text-[var(--color-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-3 font-['Space_Grotesk'] text-2xl font-semibold text-[var(--color-neutral-900)]">
              SDKs oficiais
            </h3>
            <p className="text-[var(--color-neutral-700)]">
              Node.js, Python, Go. Compatíveis com AWS SDK v3.
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)]/10">
                <svg
                  className="h-8 w-8 text-[var(--color-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-3 font-['Space_Grotesk'] text-2xl font-semibold text-[var(--color-neutral-900)]">
              Sandbox gratuito
            </h3>
            <p className="text-[var(--color-neutral-700)]">
              Teste ilimitado em ambiente de desenvolvimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developers;
