const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-[var(--color-background)] via-[var(--color-neutral-50)] to-[var(--color-primary)]/10 py-20 md:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-8">
            <h1 className="font-['Space_Grotesk'] text-4xl font-bold leading-tight text-[var(--color-neutral-900)] md:text-5xl lg:text-6xl">
              Reconhecimento facial e OCR{" "}
              <span className="text-[var(--color-primary)] text-2xl lg:text-4xl">
                hospedado no Brasil
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-[var(--color-neutral-700)] md:text-xl">
              APIs compatíveis com AWS Rekognition e Textract. Dados seguros em
              território nacional, conformidade com LGPD e latência reduzida
              para aplicações brasileiras.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-4xl bg-[var(--color-primary)] px-8 py-4 font-semibold text-white shadow-md transition-all hover:bg-[#188f6a] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:ring-offset-2"
              >
                Começar Agora
              </a>
              <a
                href="#quickstart"
                className="inline-flex items-center justify-center rounded-4xl border-2 border-[var(--color-secondary)] px-8 py-4 font-semibold text-[var(--color-secondary)] transition-all hover:bg-[var(--color-secondary)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:ring-offset-2"
              >
                Ver documentação
              </a>
            </div>
            <div className="space-y-4 pt-8">
              <p className="text-md italic text-[var(--color-neutral-400)]">
                "Migramos do Rekognition e reduzimos custos em 40% mantendo a
                mesma qualidade."
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/images/logo.webp"
              alt="Hero"
              className="md:w-[75%] lg:w-[85%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
