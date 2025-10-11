export function ThankYouHero() {
  return (
    <div className="text-center">
      <div className="rounded-full bg-green-100 p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
        <svg
          className="w-10 h-10 text-green-600"
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
      </div>

      <h1 className="font-['Space_Grotesk'] text-4xl font-bold text-[var(--color-neutral-900)] mb-4">
        Cadastro Realizado com Sucesso!
      </h1>

      <p className="text-lg text-[var(--color-neutral-700)] mb-8">
        Você foi adicionado à nossa lista de espera e garantiu seu desconto de
        30% nos primeiros 3 meses.
      </p>
    </div>
  );
}
