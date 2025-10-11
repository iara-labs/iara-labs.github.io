const Cta = () => {
  return (
    <section
      className="bg-gradient-to-br from-[var(--color-primary)]/5 via-[var(--color-primary)]/15 to-[var(--color-primary)]/25 py-20 md:py-32"
      id="cta"
    >
      <div className="mx-auto max-w-[800px] px-6 text-center">
        <h2 className="font-['Space_Grotesk'] text-4xl font-bold leading-tight text-[var(--color-neutral-900)] md:text-5xl lg:text-6x">
          Começar Agora!
        </h2>
        <p className="mx-auto mt-4 mb-8 max-w-2xl text-lg text-[var(--color-neutral-700)]">
          Cadastre-se e garanta o seu acesso antecipado ao nosso sistema!
        </p>
        <a
          href="/registrar-se"
          className="inline-flex items-center justify-center rounded-4xl bg-[var(--color-primary)] px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-[#188f6a] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:ring-offset-2"
        >
          Quero me Cadastrar
        </a>
      </div>
    </section>
  );
};

export default Cta;
