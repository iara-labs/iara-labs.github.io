export function NextSteps() {
  const steps = [
    {
      number: 1,
      title: "Confirmação por Email",
      description: "Enviaremos um email de confirmação em breve",
    },
    {
      number: 2,
      title: "Acesso Antecipado",
      description: "Você receberá acesso antes do lançamento público",
    },
    {
      number: 3,
      title: "Desconto Garantido",
      description: "30% de desconto nos primeiros 3 meses de uso",
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
      <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
        O que acontece agora?
      </h2>
      <div className="space-y-4 text-left">
        {steps.map((step) => (
          <div key={step.number} className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
              {step.number}
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-neutral-900)]">
                {step.title}
              </h3>
              <p className="text-[var(--color-neutral-600)]">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
