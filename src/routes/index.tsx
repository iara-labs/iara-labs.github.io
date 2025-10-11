import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";

// Direct imports for better performance
import Hero from "../components/pages/index/Hero";
import Resources from "../components/pages/index/Resources";
import HowItWorks from "../components/pages/index/HowItWorks";
import Developers from "../components/pages/index/Developers";
import SabIA from "../components/pages/index/SabIA";
import Compatibility from "../components/pages/index/Compatibility";
import Quickstart from "../components/pages/index/Quickstart";
import Pricing from "../components/pages/index/Pricing";
import Faq from "../components/pages/index/Faq";
import Cta from "../components/pages/index/Cta";

export const Route = createFileRoute("/")({
  component: Index,
});

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
      <Hero />
      <SabIA />
      <Resources />
      <HowItWorks />
      <Developers />
      <Compatibility />
      <Quickstart />
      <Pricing />
      <Faq />
      <Cta />
    </div>
  );
}
