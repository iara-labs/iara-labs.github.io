import { useState } from "react";
import { plans } from "@/data/plans";
import { Switch } from "@/components/ui/switch";
import { useAnalytics } from "@/hooks/useAnalytics";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const { trackCTAClick, trackCustomEvent } = useAnalytics();

  const handleBillingToggle = (checked: boolean) => {
    setIsAnnual(checked);
    trackCustomEvent("billing_toggle", {
      billing_type: checked ? "annual" : "monthly",
      location: "pricing-section",
    });
  };
  return (
    <section
      id="precos"
      className="bg-gradient-to-br from-[var(--color-primary)]/5 via-[var(--color-primary)]/10 to-[var(--color-primary)]/20 py-20 md:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-16 text-center">
          <h2 className="font-['Space_Grotesk'] text-4xl font-bold leading-tight text-[var(--color-neutral-900)] md:text-5xl lg:text-6xl">
            Preços
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-neutral-700)]">
            Cobrança em reais, sem surpresas cambiais.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="flex items-center gap-4">
              <span
                className={`text-sm font-medium ${!isAnnual ? "text-[var(--color-primary)]" : "text-[var(--color-neutral-600)]"}`}
              >
                Mensal
              </span>
              <Switch
                checked={isAnnual}
                onCheckedChange={handleBillingToggle}
                className="data-[state=checked]:bg-[var(--color-primary)]"
              />
              <span
                className={`text-sm font-medium ${isAnnual ? "text-[var(--color-primary)]" : "text-[var(--color-neutral-600)]"}`}
              >
                Anual
              </span>
            </div>
            {isAnnual && (
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                -17% de desconto
              </span>
            )}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border-2 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]/20"
                  : "border-[var(--color-neutral-200)] hover:border-[var(--color-primary)]/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-[var(--color-primary)] px-4 py-1 text-sm font-semibold text-white">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[var(--color-neutral-900)]">
                  {plan.name}
                </h3>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-[var(--color-neutral-900)]">
                    {isAnnual ? plan.annualPrice : plan.price}
                  </div>
                  <div className="text-[var(--color-neutral-600)]">
                    {isAnnual ? plan.annualPriceSubtext : plan.priceSubtext}
                  </div>
                </div>
                <p className="mt-2 text-sm text-[var(--color-neutral-600)]">
                  {plan.mainFeature}
                </p>
              </div>

              <div className="mt-8 flex-1 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    {feature.included ? (
                      <svg
                        className="mr-3 h-5 w-5 text-green-500"
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
                    ) : (
                      <svg
                        className="mr-3 h-5 w-5 text-[var(--color-neutral-400)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                    <span
                      className={`text-sm ${
                        feature.included
                          ? "text-[var(--color-neutral-700)]"
                          : "text-[var(--color-neutral-400)]"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="/registrar-se"
                  onClick={() =>
                    trackCTAClick(
                      `pricing-${plan.name.toLowerCase().replace(/\s+/g, "-")}`,
                      "pricing-section"
                    )
                  }
                  className={`w-full inline-flex items-center justify-center rounded-4xl px-6 py-3 font-semibold transition-all duration-200 ${
                    plan.ctaVariant === "primary"
                      ? "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90"
                      : "border-2 border-[var(--color-neutral-300)] text-[var(--color-neutral-700)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 hover:text-[var(--color-primary)]"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[var(--color-neutral-600)]">
            * Todos os planos incluem suporte por email. <br />* Enterprise
            inclui SLA e suporte prioritário.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
