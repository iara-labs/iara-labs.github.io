const SabIA = () => {
  return (
    <section
      id="sabia"
      className="bg-gradient-to-br from-[var(--color-neutral-50)] via-[var(--color-background)] to-[var(--color-neutral-100)] py-20 md:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-16 text-center">
          <h2 className="font-['Space_Grotesk'] text-4xl font-bold leading-tight text-[var(--color-neutral-900)] md:text-5xl lg:text-6x">
            Por que escolher a Iara?
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-white p-8 shadow-lg transition-shadow">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-primary)]/10">
              <svg
                className="h-6 w-6 text-[var(--color-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="mb-3 font-['Space_Grotesk'] text-2xl font-semibold text-[var(--color-neutral-900)]">
              Conformidade LGPD nativa
            </h3>
            <p className="leading-relaxed text-[var(--color-neutral-700)]">
              Dados biométricos e documentos processados exclusivamente em
              servidores brasileiros. Sem transferência internacional, sem
              riscos de compliance.
            </p>
          </div>
          <div className="rounded-xl bg-white p-8 shadow-lg transition-shadow">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-primary)]/10">
              <svg
                className="h-6 w-6 text-[var(--color-primary)]"
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
            <h3 className="mb-3 font-['Space_Grotesk'] text-2xl font-semibold text-[var(--color-neutral-900)]">
              Latência reduzida
            </h3>
            <p className="leading-relaxed text-[var(--color-neutral-700)]">
              Servidores em São Paulo garantem respostas até 60% mais rápidas
              para usuários no Brasil comparado a APIs hospedadas nos EUA.
            </p>
          </div>
          <div className="rounded-xl bg-white p-8 shadow-lg transition-shadow">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-primary)]/10">
              <svg
                className="h-6 w-6 text-[var(--color-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mb-3 font-['Space_Grotesk'] text-2xl font-semibold text-[var(--color-neutral-900)]">
              Preços transparentes em reais
            </h3>
            <p className="leading-relaxed text-[var(--color-neutral-700)]">
              Cobrança em BRL sem surpresas cambiais. Planos claros e
              previsíveis, com tier gratuito generoso para desenvolvimento.
            </p>
          </div>
          <div className="rounded-xl bg-white p-8 shadow-lg transition-shadow">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-primary)]/10">
              <svg
                className="h-6 w-6 text-[var(--color-primary)]"
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
            <h3 className="mb-3 font-['Space_Grotesk'] text-2xl font-semibold text-[var(--color-neutral-900)]">
              Drop-in replacement para AWS
            </h3>
            <p className="leading-relaxed text-[var(--color-neutral-700)]">
              APIs compatíveis com AWS SDK v3. Migre trocando apenas o endpoint
              — sem reescrever código.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SabIA;
