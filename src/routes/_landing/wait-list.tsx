import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useAnalytics } from "@/hooks/use-analytics";

// Direct imports for better performance
import RegisterHero from "@/components/landing/wait-list/register-hero";
import WhyWaitSection from "@/components/landing/wait-list/why-wait-section";
import FeaturesSection from "@/components/landing/wait-list/features-section";

export const Route = createFileRoute("/_landing/wait-list")({
  component: RegisterPage,
});

function RegisterPage() {
  const { trackCustomEvent } = useAnalytics();

  // Rastrear visualização da página de registro
  useEffect(() => {
    trackCustomEvent("page_view", {
      page_name: "register",
      page_path: "/wait-list",
    });
  }, [trackCustomEvent]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-background)] via-[var(--color-neutral-50)] to-[var(--color-primary)]/10">
      {/* Hero Section with Form */}
      <RegisterHero />

      {/* Additional Sections */}
      <WhyWaitSection />
      <FeaturesSection />
    </div>
  );
}
