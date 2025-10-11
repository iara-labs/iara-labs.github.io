const Pricing = () => {
  return (
    <section
      id="precos"
      className="bg-gradient-to-br from-[var(--color-primary)]/5 via-[var(--color-primary)]/10 to-[var(--color-primary)]/20 py-20 md:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-16 text-center">
          <h2 className="font-['Space_Grotesk'] text-4xl font-bold leading-tight text-[var(--color-neutral-900)] md:text-5xl lg:text-6x">
            Preços
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-neutral-700)]">
            Cobrança em reais, sem surpresas cambiais.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-xl border border-[var(--color-neutral-200)] bg-white shadow-lg">
              <table className="min-w-full divide-y divide-[var(--color-neutral-200)]">
                <thead className="bg-[var(--color-neutral-100)]">
                  <tr>
                    <th className="px-6 py-4 text-left font-['Space_Grotesk'] text-lg font-semibold text-[var(--color-neutral-900)]">
                      Plano
                    </th>
                    <th className="px-6 py-4 text-left font-['Space_Grotesk'] text-lg font-semibold text-[var(--color-neutral-900)]">
                      Preço/mês
                    </th>
                    <th className="px-6 py-4 text-left font-['Space_Grotesk'] text-lg font-semibold text-[var(--color-neutral-900)]">
                      Requisições incluídas
                    </th>
                    <th className="px-6 py-4 text-left font-['Space_Grotesk'] text-lg font-semibold text-[var(--color-neutral-900)]">
                      Custo adicional
                    </th>
                    <th className="px-6 py-4 text-left font-['Space_Grotesk'] text-lg font-semibold text-[var(--color-neutral-900)]">
                      Rate limit
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-neutral-200)]">
                  <tr className="transition-colors hover:bg-[var(--color-neutral-50)]">
                    <td className="px-6 py-4 font-semibold text-[var(--color-neutral-900)]">
                      Sandbox
                    </td>
                    <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                      Gratuito
                    </td>
                    <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                      Ilimitadas (dev)
                    </td>
                    <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                      —
                    </td>
                    <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                      5 req/s
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-[var(--color-neutral-50)]">
                    <td className="px-6 py-4 font-semibold text-[var(--color-neutral-900)]">
                      Starter
                    </td>
                    <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                      R$ 99
                    </td>
                    <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                      5.000
                    </td>
                    <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                      R$ 0,015/req
                    </td>
                    <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                      10 req/s
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-[var(--color-neutral-50)]">
                    <td className="px-6 py-4 font-semibold text-[var(--color-neutral-900)]">
                      Pro
                    </td>
                    <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                      R$ 499
                    </td>
                    <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                      50.000
                    </td>
                    <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                      R$ 0,008/req
                    </td>
                    <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                      50 req/s
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-[var(--color-neutral-50)]">
                    <td className="px-6 py-4 font-semibold text-[var(--color-neutral-900)]">
                      Enterprise
                    </td>
                    <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                      Sob consulta
                    </td>
                    <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                      Customizado
                    </td>
                    <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                      Negociável
                    </td>
                    <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                      200+ req/s
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-[var(--color-neutral-600)]">
            * Todos os planos incluem suporte por email. Enterprise inclui SLA e
            suporte prioritário.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
