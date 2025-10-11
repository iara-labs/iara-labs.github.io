import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";
import { useFirebaseLead } from "../../../hooks/useFirebaseLead";

export default function RegisterForm() {
  const { saveLead, loading, error } = useFirebaseLead();
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
    },
    onSubmit: async ({ value }) => {
      const result = await saveLead(value);
      if (result) {
        navigate({ to: "/obrigado" });
      }
    },
  });

  return (
    <div className="rounded-2xl bg-white p-8 shadow-xl">
      <div className="mb-6">
        <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-[var(--color-neutral-900)]">
          Cadastre-se na Lista de Espera
        </h2>
        <p className="mt-2 text-[var(--color-neutral-600)]">
          Preencha os dados abaixo para garantir seu desconto
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="space-y-6"
      >
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-neutral-700)] mb-2">
            Nome Completo *
          </label>
          <form.Field
            name="name"
            validators={{
              onChange: ({ value }) =>
                !value ? "Nome é obrigatório" : undefined,
              onChangeAsyncDebounceMs: 500,
            }}
          >
            {(field) => (
              <>
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className={`w-full rounded-lg border px-4 py-3 text-[var(--color-neutral-900)] placeholder-[var(--color-neutral-400)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent ${
                    field.state.meta.errors.length > 0
                      ? "border-red-300 bg-red-50"
                      : "border-[var(--color-neutral-300)] bg-white hover:border-[var(--color-neutral-400)]"
                  }`}
                />
                {field.state.meta.errors.length > 0 && (
                  <p className="mt-1 text-sm text-red-600">
                    {field.state.meta.errors[0]}
                  </p>
                )}
              </>
            )}
          </form.Field>
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-neutral-700)] mb-2">
            Email *
          </label>
          <form.Field
            name="email"
            validators={{
              onChange: ({ value }) => {
                if (!value) return "Email é obrigatório";
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                  return "Email inválido";
                }
                return undefined;
              },
              onChangeAsyncDebounceMs: 500,
            }}
          >
            {(field) => (
              <>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className={`w-full rounded-lg border px-4 py-3 text-[var(--color-neutral-900)] placeholder-[var(--color-neutral-400)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent ${
                    field.state.meta.errors.length > 0
                      ? "border-red-300 bg-red-50"
                      : "border-[var(--color-neutral-300)] bg-white hover:border-[var(--color-neutral-400)]"
                  }`}
                />
                {field.state.meta.errors.length > 0 && (
                  <p className="mt-1 text-sm text-red-600">
                    {field.state.meta.errors[0]}
                  </p>
                )}
              </>
            )}
          </form.Field>
        </div>

        {/* Phone Field */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-neutral-700)] mb-2">
            Telefone *
          </label>
          <form.Field
            name="phone"
            validators={{
              onChange: ({ value }) => {
                if (!value) return "Telefone é obrigatório";
                const cleanValue = value.replace(/\D/g, "");
                if (cleanValue.length < 10) {
                  return "Telefone inválido";
                }
                return undefined;
              },
              onChangeAsyncDebounceMs: 500,
            }}
          >
            {(field) => (
              <>
                <input
                  type="tel"
                  value={field.state.value}
                  onChange={(e) => {
                    const value = e.target.value;
                    // Aplicar máscara simples
                    const maskedValue = value
                      .replace(/\D/g, "")
                      .replace(/(\d{2})(\d)/, "($1) $2")
                      .replace(/(\d{5})(\d)/, "$1-$2")
                      .slice(0, 15);
                    field.handleChange(maskedValue);
                  }}
                  placeholder="(11) 99999-9999"
                  className={`w-full rounded-lg border px-4 py-3 text-[var(--color-neutral-900)] placeholder-[var(--color-neutral-400)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent ${
                    field.state.meta.errors.length > 0
                      ? "border-red-300 bg-red-50"
                      : "border-[var(--color-neutral-300)] bg-white hover:border-[var(--color-neutral-400)]"
                  }`}
                />
                {field.state.meta.errors.length > 0 && (
                  <p className="mt-1 text-sm text-red-600">
                    {field.state.meta.errors[0]}
                  </p>
                )}
              </>
            )}
          </form.Field>
        </div>

        {/* Company Field */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-neutral-700)] mb-2">
            Empresa
          </label>
          <form.Field name="company">
            {(field) => (
              <input
                type="text"
                placeholder="Nome da sua empresa (opcional)"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                className="w-full rounded-lg border border-[var(--color-neutral-300)] bg-white px-4 py-3 text-[var(--color-neutral-900)] placeholder-[var(--color-neutral-400)] transition-colors hover:border-[var(--color-neutral-400)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
              />
            )}
          </form.Field>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading || !form.state.canSubmit}
          className="w-full rounded-lg bg-[var(--color-primary)] px-6 py-4 font-semibold text-white shadow-lg transition-all hover:bg-[#188f6a] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <svg
                className="mr-2 h-5 w-5 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Cadastrando...
            </div>
          ) : (
            "Garantir Meu Desconto"
          )}
        </button>

        {/* Error Message */}
        {error && (
          <div className="rounded-lg bg-red-50 p-4">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        {/* Privacy Notice */}
        <div className="text-center">
          <p className="text-xs text-[var(--color-neutral-500)]">
            Ao se cadastrar, você concorda em receber comunicações sobre o
            lançamento dos nossos serviços.
            <br />
            <strong>Não enviamos spam.</strong> Você pode cancelar a qualquer
            momento.
          </p>
        </div>
      </form>
    </div>
  );
}
