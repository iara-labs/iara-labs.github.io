const HowItWorks = () => {
  return (
    <section
      id="como-funciona"
      className="bg-gradient-to-br from-[var(--color-primary)]/5 via-[var(--color-primary)]/10 to-[var(--color-primary)]/15 py-20 md:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-16 text-center">
          <h2 className="font-['Space_Grotesk'] text-4xl font-bold leading-tight text-[var(--color-neutral-900)] md:text-5xl lg:text-6x">
            Como Funciona?
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3 text-center justify-center items-center">
          <div className="relative flex flex-col justify-center items-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)] text-2xl font-bold text-white">
              1
            </div>
            <h3 className="mb-3 font-['Space_Grotesk'] text-2xl font-semibold text-[var(--color-neutral-900)]">
              Crie sua conta
            </h3>
            <p className="leading-relaxed text-[var(--color-neutral-700)]">
              Cadastro gratuito em menos de 2 minutos. Receba suas credenciais
              de API instantaneamente.
            </p>
          </div>
          <div className="relative flex flex-col justify-center items-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)] text-2xl font-bold text-white">
              2
            </div>
            <h3 className="mb-3 font-['Space_Grotesk'] text-2xl font-semibold text-[var(--color-neutral-900)]">
              Configure o SDK
            </h3>
            <p className="leading-relaxed text-[var(--color-neutral-700)]">
              Use o AWS SDK v3 apontando para nosso endpoint. Compatível com seu
              código existente.
            </p>
          </div>
          <div className="relative flex flex-col justify-center items-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)] text-2xl font-bold text-white">
              3
            </div>
            <h3 className="mb-3 font-['Space_Grotesk'] text-2xl font-semibold text-[var(--color-neutral-900)]">
              Comece a processar
            </h3>
            <p className="leading-relaxed text-[var(--color-neutral-700)]">
              Envie imagens e documentos. Receba resultados em JSON estruturado,
              idêntico ao formato AWS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
