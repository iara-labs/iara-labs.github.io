import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

// Lazy load components for better performance
const RegisterHero = lazy(
  () => import("../components/pages/registrar-se/RegisterHero")
);
const WhyWaitSection = lazy(
  () => import("../components/pages/registrar-se/WhyWaitSection")
);
const FeaturesSection = lazy(
  () => import("../components/pages/registrar-se/FeaturesSection")
);

export const Route = createFileRoute("/registrar-se")({
  component: RegisterPage,
});

// Loading component for Suspense fallback
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-primary)]"></div>
    </div>
  );
}

function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-background)] via-[var(--color-neutral-50)] to-[var(--color-primary)]/10">
      {/* Hero Section with Form */}
      <Suspense fallback={<LoadingSpinner />}>
        <RegisterHero />
      </Suspense>

      {/* Additional Sections */}
      <Suspense fallback={<LoadingSpinner />}>
        <WhyWaitSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <FeaturesSection />
      </Suspense>
    </div>
  );
}
