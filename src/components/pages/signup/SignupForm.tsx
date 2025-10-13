import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useAnalytics } from "@/hooks/useAnalytics";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { trackCTAClick } = useAnalytics();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackCTAClick("signup-submit", "signup-form");
    // Aqui você pode adicionar a lógica de signup
  };

  const handleGitHubSignup = () => {
    trackCTAClick("github-signup", "signup-form");
    // Aqui você pode adicionar a lógica de signup com GitHub
  };

  const handleSigninClick = () => {
    trackCTAClick("signin-link", "signup-form");
    window.location.href = "/signin";
  };

  return (
    <div className="w-full max-w-md md:max-w-4xl mx-auto">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <img
          src="/images/logo-nav.webp"
          alt="SabIA Labs"
          className="h-16 w-auto"
        />
      </div>

      {/* Form Card */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 md:p-8">
        <form
          className={cn("flex flex-col gap-6", className)}
          onSubmit={handleSubmit}
          {...props}
        >
          <FieldGroup>
            <div className="flex flex-col items-center gap-2 text-center mb-6">
              <h1 className="font-['Space_Grotesk'] text-2xl font-bold text-[var(--color-neutral-900)]">
                Criar conta
              </h1>
              <p className="text-[var(--color-neutral-600)] text-sm">
                Preencha os dados abaixo para começar a usar nossas APIs
              </p>
            </div>

            {/* Grid de campos em 2 colunas para desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field>
                <FieldLabel
                  htmlFor="name"
                  className="text-[var(--color-neutral-700)] font-medium"
                >
                  Nome Completo
                </FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome completo"
                  required
                  className="border-[var(--color-neutral-200)] focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]/20"
                />
              </Field>

              <Field>
                <FieldLabel
                  htmlFor="email"
                  className="text-[var(--color-neutral-700)] font-medium"
                >
                  Email
                </FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  required
                  className="border-[var(--color-neutral-200)] focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]/20"
                />
              </Field>

              <Field>
                <FieldLabel
                  htmlFor="password"
                  className="text-[var(--color-neutral-700)] font-medium"
                >
                  Senha
                </FieldLabel>
                <Input
                  id="password"
                  type="password"
                  placeholder="Mínimo 6 caracteres"
                  required
                  minLength={6}
                  className="border-[var(--color-neutral-200)] focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]/20"
                />
              </Field>

              <Field>
                <FieldLabel
                  htmlFor="confirmPassword"
                  className="text-[var(--color-neutral-700)] font-medium"
                >
                  Confirmar Senha
                </FieldLabel>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Digite a senha novamente"
                  required
                  className="border-[var(--color-neutral-200)] focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]/20"
                />
              </Field>

              <Field>
                <FieldLabel
                  htmlFor="phone"
                  className="text-[var(--color-neutral-700)] font-medium"
                >
                  Telefone
                </FieldLabel>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  required
                  className="border-[var(--color-neutral-200)] focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]/20"
                />
              </Field>

              <Field>
                <FieldLabel
                  htmlFor="company"
                  className="text-[var(--color-neutral-700)] font-medium"
                >
                  Empresa (opcional)
                </FieldLabel>
                <Input
                  id="company"
                  type="text"
                  placeholder="Nome da sua empresa"
                  className="border-[var(--color-neutral-200)] focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]/20"
                />
              </Field>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 w-full">
              <Button
                type="submit"
                className="w-full md:w-auto md:px-8 bg-[var(--color-primary)] hover:bg-[#188f6a] text-white font-semibold py-3 rounded-4xl transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[var(--color-primary)]/25"
              >
                Criar Conta
              </Button>
            </div>

            <div className="text-center text-[var(--color-neutral-600)]">
              Já tem uma conta?{" "}
              <button
                type="button"
                onClick={handleSigninClick}
                className="text-[var(--color-primary)] hover:text-[#188f6a] underline underline-offset-4 font-medium transition-colors duration-200 hover:underline-offset-2"
              >
                Entre aqui
              </button>
            </div>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
}
