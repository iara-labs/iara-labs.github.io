import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/obrigado")({
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-background)] via-[var(--color-neutral-50)] to-[var(--color-primary)]/10 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
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

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
            O que acontece agora?
          </h2>
          <div className="space-y-4 text-left">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                1
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-neutral-900)]">
                  Confirmação por Email
                </h3>
                <p className="text-[var(--color-neutral-600)]">
                  Enviaremos um email de confirmação em breve
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                2
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-neutral-900)]">
                  Acesso Antecipado
                </h3>
                <p className="text-[var(--color-neutral-600)]">
                  Você receberá acesso antes do lançamento público
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                3
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-neutral-900)]">
                  Desconto Garantido
                </h3>
                <p className="text-[var(--color-neutral-600)]">
                  30% de desconto nos primeiros 3 meses de uso
                </p>
              </div>
            </div>
          </div>
        </div>

        <a
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-[var(--color-primary)] px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-[#188f6a] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2"
        >
          Voltar ao Início
        </a>
      </div>
    </div>
  );
}
