import { lazy, Suspense } from "react";

const RegisterForm = lazy(() => import("./RegisterForm"));

export default function RegisterHero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background Pattern Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric shapes */}
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-gradient-to-tr from-[var(--color-secondary)]/15 to-[var(--color-primary)]/20 blur-2xl"></div>

        {/* Subtle particles */}
        <div className="absolute top-1/6 left-1/6 h-4 w-4 rounded-full bg-[var(--color-primary)]/5 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 h-3 w-3 rounded-full bg-[var(--color-secondary)]/8 animate-pulse delay-500"></div>
        <div className="absolute top-1/3 left-1/5 h-5 w-5 rounded-full bg-[var(--color-primary)]/3 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/6 left-1/6 h-3 w-3 rounded-full bg-[var(--color-primary)]/8 animate-pulse delay-3000"></div>
        <div className="absolute bottom-1/4 right-1/5 h-5 w-5 rounded-full bg-[var(--color-secondary)]/5 animate-pulse delay-3500"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full bg-[var(--color-primary)]/10 px-4 py-2 text-sm font-medium text-[var(--color-primary)]">
              <svg
                className="mr-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Lista de Espera Exclusiva
            </div>

            {/* Main Heading */}
            <h1 className="font-['Space_Grotesk'] text-4xl font-bold leading-tight text-[var(--color-neutral-900)] md:text-5xl lg:text-6xl">
              Garanta seu{" "}
              <span className="text-[var(--color-primary)]">
                desconto de 30%
              </span>{" "}
              nos primeiros 3 meses
            </h1>

            {/* Subheading */}
            <p className="text-lg leading-relaxed text-[var(--color-neutral-700)] md:text-xl">
              Seja um dos primeiros a experimentar nossas APIs de reconhecimento
              facial e OCR hospedadas no Brasil. Cadastre-se agora e garanta
              acesso antecipado com desconto especial.
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              <div className="flex items-center">
                <svg
                  className="mr-3 h-5 w-5 text-[var(--color-primary)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[var(--color-neutral-700)]">
                  30% de desconto nos primeiros 3 meses
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="mr-3 h-5 w-5 text-[var(--color-primary)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[var(--color-neutral-700)]">
                  Acesso antecipado às APIs
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="mr-3 h-5 w-5 text-[var(--color-primary)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[var(--color-neutral-700)]">
                  Dados seguros no Brasil (LGPD)
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="mr-3 h-5 w-5 text-[var(--color-primary)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[var(--color-neutral-700)]">
                  Compatível com AWS SDK
                </span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4">
              <p className="text-sm text-[var(--color-neutral-500)]">
                <svg
                  className="mr-2 inline h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Seus dados estão seguros. Não enviamos spam.
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:pl-8">
            <Suspense
              fallback={
                <div className="flex items-center justify-center py-20">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-primary)]"></div>
                </div>
              }
            >
              <RegisterForm />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
