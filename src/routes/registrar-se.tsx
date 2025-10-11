import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";

// Direct imports for better performance
import RegisterHero from "../components/pages/registrar-se/RegisterHero";
import WhyWaitSection from "../components/pages/registrar-se/WhyWaitSection";
import FeaturesSection from "../components/pages/registrar-se/FeaturesSection";

export const Route = createFileRoute("/registrar-se")({
  component: RegisterPage,
});

function RegisterPage() {
  const { trackCustomEvent } = useAnalytics();

  // Rastrear visualização da página de registro
  useEffect(() => {
    trackCustomEvent("page_view", {
      page_name: "register",
      page_path: "/registrar-se",
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
