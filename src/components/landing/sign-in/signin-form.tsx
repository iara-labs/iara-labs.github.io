import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useAnalytics } from "@/hooks/use-analytics";

export function SigninForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { trackCTAClick } = useAnalytics();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackCTAClick("signin-submit", "signin-form");
    // Aqui você pode adicionar a lógica de signin
  };

  const handleForgotPasswordClick = () => {
    trackCTAClick("forgot-password", "signin-form");
    // Aqui você pode adicionar a lógica de recuperação de senha
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <img
          src="/images/logo-nav.webp"
          alt="Iara Labs"
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
                className="w-full bg-[var(--color-primary)] hover:bg-[#188f6a] text-white font-semibold py-3 rounded-4xl transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[var(--color-primary)]/25"
              >
                Entrar
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
}
