export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface Plan {
  name: string;
  price: string;
  priceSubtext: string;
  annualPrice: string;
  annualPriceSubtext: string;
  mainFeature: string;
  features: PlanFeature[];
  cta: string;
  ctaVariant: "primary" | "secondary";
  popular: boolean;
}

export const plans: Plan[] = [
  {
    name: "Sandbox",
    price: "Gratuito",
    priceSubtext: "Para desenvolvimento",
    annualPrice: "Gratuito",
    annualPriceSubtext: "Para desenvolvimento",
    mainFeature: "Requisições ilimitadas (dev)",
    features: [
      { text: "Suporte por email", included: true },
      { text: "Rate limit: 5 req/s", included: true },
      { text: "Ambiente de desenvolvimento", included: true },
      { text: "Sem custo adicional", included: true },
      { text: "Produção", included: false },
    ],
    cta: "Começar grátis",
    ctaVariant: "secondary",
    popular: false,
  },
  {
    name: "Starter",
    price: "R$ 99",
    priceSubtext: "/mês",
    annualPrice: "R$ 990",
    annualPriceSubtext: "/ano",
    mainFeature: "5.000 requisições/mês",
    features: [
      { text: "Suporte por email", included: true },
      { text: "Rate limit: 10 req/s", included: true },
      { text: "Ambiente de produção", included: true },
      { text: "R$ 0,015/req adicional", included: true },
      { text: "SLA garantido", included: false },
    ],
    cta: "Começar agora",
    ctaVariant: "primary",
    popular: true,
  },
  {
    name: "Pro",
    price: "R$ 499",
    priceSubtext: "/mês",
    annualPrice: "R$ 4.990",
    annualPriceSubtext: "/ano",
    mainFeature: "50.000 requisições/mês",
    features: [
      { text: "Suporte por email", included: true },
      { text: "Rate limit: 50 req/s", included: true },
      { text: "Ambiente de produção", included: true },
      { text: "R$ 0,008/req adicional", included: true },
      { text: "SLA garantido", included: true },
    ],
    cta: "Começar agora",
    ctaVariant: "primary",
    popular: false,
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    priceSubtext: "Plano personalizado",
    annualPrice: "Sob consulta",
    annualPriceSubtext: "Plano personalizado",
    mainFeature: "Requisições customizadas",
    features: [
      { text: "Suporte prioritário", included: true },
      { text: "Rate limit: 200+ req/s", included: true },
      { text: "Ambiente de produção", included: true },
      { text: "Preço negociável", included: true },
      { text: "SLA garantido", included: true },
    ],
    cta: "Falar com vendas",
    ctaVariant: "secondary",
    popular: false,
  },
];
