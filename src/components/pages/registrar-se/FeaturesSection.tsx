export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[var(--color-primary)]/5 via-[var(--color-primary)]/10 to-[var(--color-primary)]/15">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-16">
          <h2 className="font-['Space_Grotesk'] text-4xl font-bold text-[var(--color-neutral-900)] mb-4">
            O que você vai receber
          </h2>
          <p className="text-lg text-[var(--color-neutral-700)] max-w-2xl mx-auto">
            APIs de reconhecimento facial e OCR compatíveis com AWS, hospedadas
            no Brasil
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-[var(--color-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[var(--color-neutral-900)] mb-2">
              Reconhecimento Facial
            </h3>
            <p className="text-[var(--color-neutral-600)] text-sm">
              Detecte e analise rostos em imagens com alta precisão
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-[var(--color-primary)]"
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
            <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[var(--color-neutral-900)] mb-2">
              OCR Avançado
            </h3>
            <p className="text-[var(--color-neutral-600)] text-sm">
              Extraia texto de documentos e imagens com precisão
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-[var(--color-primary)]"
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
            <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[var(--color-neutral-900)] mb-2">
              Compatível com AWS
            </h3>
            <p className="text-[var(--color-neutral-600)] text-sm">
              APIs compatíveis com AWS SDK v3, migração simples
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-[var(--color-primary)]"
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
            <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[var(--color-neutral-900)] mb-2">
              LGPD Compliant
            </h3>
            <p className="text-[var(--color-neutral-600)] text-sm">
              Dados processados no Brasil, conformidade total com LGPD
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
