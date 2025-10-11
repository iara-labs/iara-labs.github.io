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
          <details className="group rounded-lg border border-[var(--color-neutral-200)] bg-white p-6 shadow-sm">
            <summary className="flex cursor-pointer items-center justify-between font-['Space_Grotesk'] font-semibold text-[var(--color-neutral-900)]">
              <span>Como funciona a migração do AWS Rekognition?</span>
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
              Basta trocar o endpoint na configuração do AWS SDK. Nossa API é
              100% compatível com Rekognition e Textract, então seu código
              existente funciona sem alterações.
            </p>
          </details>

          <details className="group rounded-lg border border-[var(--color-neutral-200)] bg-white p-6 shadow-sm">
            <summary className="flex cursor-pointer items-center justify-between font-['Space_Grotesk'] font-semibold text-[var(--color-neutral-900)]">
              <span>Os dados ficam realmente no Brasil?</span>
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
              Sim. Toda a infraestrutura está em São Paulo (SA-East-1). Não há
              transferência internacional de dados biométricos ou documentos.
            </p>
          </details>

          <details className="group rounded-lg border border-[var(--color-neutral-200)] bg-white p-6 shadow-sm">
            <summary className="flex cursor-pointer items-center justify-between font-['Space_Grotesk'] font-semibold text-[var(--color-neutral-900)]">
              <span>Posso testar antes de assinar?</span>
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
              Sim! O ambiente sandbox é gratuito e ilimitado para
              desenvolvimento. Você só paga quando colocar em produção.
            </p>
          </details>

          <details className="group rounded-lg border border-[var(--color-neutral-200)] bg-white p-6 shadow-sm">
            <summary className="flex cursor-pointer items-center justify-between font-['Space_Grotesk'] font-semibold text-[var(--color-neutral-900)]">
              <span>Qual a precisão comparada ao AWS Rekognition?</span>
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
              Nossos modelos têm precisão equivalente ou superior em datasets
              brasileiros, especialmente para documentos nacionais (RG, CNH,
              CPF).
            </p>
          </details>

          <details className="group rounded-lg border border-[var(--color-neutral-200)] bg-white p-6 shadow-sm">
            <summary className="flex cursor-pointer items-center justify-between font-['Space_Grotesk'] font-semibold text-[var(--color-neutral-900)]">
              <span>Vocês armazenam as imagens enviadas?</span>
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
              Não. Processamos e descartamos imediatamente. Mantemos apenas logs
              de requisição (sem conteúdo) por 30 dias para auditoria.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;
