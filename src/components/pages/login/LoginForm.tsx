import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useAnalytics } from "@/hooks/useAnalytics";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { trackCTAClick } = useAnalytics();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackCTAClick("login-submit", "login-form");
    // Aqui você pode adicionar a lógica de login
  };

  const handleGitHubLogin = () => {
    trackCTAClick("github-login", "login-form");
    // Aqui você pode adicionar a lógica de login com GitHub
  };

  const handleSignUpClick = () => {
    trackCTAClick("sign-up-link", "login-form");
    window.location.href = "/registrar-se";
  };

  const handleForgotPasswordClick = () => {
    trackCTAClick("forgot-password", "login-form");
    // Aqui você pode adicionar a lógica de recuperação de senha
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <img
          src="/images/logo-nav.webp"
          alt="SabIA Labs"
          className="h-16 w-auto"
        />
      </div>

      {/* Form Card */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
        <form
          className={cn("flex flex-col gap-6", className)}
          onSubmit={handleSubmit}
          {...props}
        >
          <FieldGroup>
            <div className="flex flex-col items-center gap-2 text-center mb-6">
              <h1 className="font-['Space_Grotesk'] text-2xl font-bold text-[var(--color-neutral-900)]">
                Entre na sua conta
              </h1>
              <p className="text-[var(--color-neutral-600)] text-sm">
                Digite suas credenciais para acessar sua conta
              </p>
            </div>

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
              <div className="flex items-center">
                <FieldLabel
                  htmlFor="password"
                  className="text-[var(--color-neutral-700)] font-medium"
                >
                  Senha
                </FieldLabel>
                <button
                  type="button"
                  onClick={handleForgotPasswordClick}
                  className="ml-auto text-sm text-[var(--color-primary)] hover:text-[#188f6a] underline-offset-4 hover:underline transition-colors duration-200"
                >
                  Esqueceu sua senha?
                </button>
              </div>
              <Input
                id="password"
                type="password"
                required
                className="border-[var(--color-neutral-200)] focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]/20"
              />
            </Field>

            <Field>
              <Button
                type="submit"
                className="w-full bg-[var(--color-primary)] hover:bg-[#188f6a] text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[var(--color-primary)]/25"
              >
                Entrar
              </Button>
            </Field>

            <FieldSeparator className="text-[var(--color-neutral-500)]">
              Ou continue com
            </FieldSeparator>

            <Field>
              <Button
                variant="outline"
                type="button"
                onClick={handleGitHubLogin}
                className="w-full border-[var(--color-neutral-200)] hover:bg-[var(--color-neutral-100)] hover:border-[var(--color-neutral-300)] text-[var(--color-neutral-800)] hover:text-[var(--color-neutral-900)] font-medium py-3 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-[var(--color-neutral-200)]/50 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                    fill="currentColor"
                  />
                </svg>
                Entrar com GitHub
              </Button>

              <FieldDescription className="text-center text-[var(--color-neutral-600)]">
                Não tem uma conta?{" "}
                <button
                  type="button"
                  onClick={handleSignUpClick}
                  className="text-[var(--color-primary)] hover:text-[#188f6a] underline underline-offset-4 font-medium transition-colors duration-200 hover:underline-offset-2"
                >
                  Cadastre-se
                </button>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </div>

      {/* Trust Indicators */}
      <div className="mt-6 text-center">
        <div className="text-sm text-[var(--color-neutral-500)] flex items-center justify-center">
          <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
          Seus dados estão seguros. Conformidade com LGPD.
        </div>
      </div>
    </div>
  );
}
