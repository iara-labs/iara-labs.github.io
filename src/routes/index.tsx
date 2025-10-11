import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";

// Lazy load components for better performance
const Hero = lazy(() => import("../components/pages/index/Hero"));
const Resources = lazy(() => import("../components/pages/index/Resources"));
const HowItWorks = lazy(() => import("../components/pages/index/HowItWorks"));
const Developers = lazy(() => import("../components/pages/index/Developers"));
const SabIA = lazy(() => import("../components/pages/index/SabIA"));
const Compatibility = lazy(
  () => import("../components/pages/index/Compatibility")
);
const Quickstart = lazy(() => import("../components/pages/index/Quickstart"));
const Pricing = lazy(() => import("../components/pages/index/Pricing"));
const Faq = lazy(() => import("../components/pages/index/Faq"));
const Cta = lazy(() => import("../components/pages/index/Cta"));

export const Route = createFileRoute("/")({
  component: Index,
});

// Loading component for Suspense fallback
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-primary)]"></div>
    </div>
  );
}

function Index() {
  const { trackCustomEvent } = useAnalytics();

  // Rastrear visualização da página inicial
  useEffect(() => {
    trackCustomEvent("page_view", {
      page_name: "home",
      page_path: "/",
    });
  }, [trackCustomEvent]);

  return (
    <div className="bg-[var(--color-background)]">
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <SabIA />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Resources />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <HowItWorks />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Developers />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Compatibility />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Quickstart />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Pricing />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Faq />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Cta />
      </Suspense>
    </div>
  );
}
