export default function WhyWaitSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-16">
          <h2 className="font-['Space_Grotesk'] text-4xl font-bold text-[var(--color-neutral-900)] mb-4">
            Por que entrar na Lista de Espera?
          </h2>
          <p className="text-lg text-[var(--color-neutral-700)] max-w-2xl mx-auto">
            Seja um dos primeiros a experimentar nossas APIs e garanta vantagens
            exclusivas
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-[var(--color-primary)]"
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
            <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[var(--color-neutral-900)] mb-2">
              Desconto Exclusivo
            </h3>
            <p className="text-[var(--color-neutral-600)]">
              30% de desconto nos primeiros 3 meses de uso, disponível apenas
              para membros da lista de espera
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-[var(--color-primary)]"
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
            <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[var(--color-neutral-900)] mb-2">
              Acesso Antecipado
            </h3>
            <p className="text-[var(--color-neutral-600)]">
              Teste nossas APIs antes do lançamento público e tenha suporte
              prioritário
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-[var(--color-primary)]"
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
            <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[var(--color-neutral-900)] mb-2">
              Dados Seguros
            </h3>
            <p className="text-[var(--color-neutral-600)]">
              Conformidade total com LGPD, dados processados exclusivamente no
              Brasil
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
