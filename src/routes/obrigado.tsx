import { createFileRoute } from "@tanstack/react-router";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useEffect } from "react";
import { ThankYouHero } from "@/components/pages/obrigado/ThankYouHero";
import { NextSteps } from "@/components/pages/obrigado/NextSteps";
import { BackToHomeCta } from "@/components/pages/obrigado/BackToHomeCta";

export const Route = createFileRoute("/obrigado")({
  component: ThankYouPage,
});

function ThankYouPage() {
  const { trackConversion } = useAnalytics();

  // Rastreia a visualização da página de agradecimento
  useEffect(() => {
    trackConversion("thank_you_page_view", 1);
  }, [trackConversion]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-background)] via-[var(--color-neutral-50)] to-[var(--color-primary)]/10 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <ThankYouHero />
        <NextSteps />
        <BackToHomeCta />
      </div>
    </div>
  );
}
