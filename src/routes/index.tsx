import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useAnalytics } from "@/hooks/use-analytics";

// Direct imports for better performance
import Hero from "@/components/landing/home/hero";
import Resources from "@/components/landing/home/resources";
import HowItWorks from "@/components/landing/home/how-it-works";
import Developers from "@/components/landing/home/developers";
import WhyChoose from "@/components/landing/home/why-choose";
import Compatibility from "@/components/landing/home/compatibility";
import Quickstart from "@/components/landing/home/quick-start";
import Pricing from "@/components/landing/home/pricing";
import Faq from "@/components/landing/home/faq";
import Cta from "@/components/landing/home/cta";

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
      <WhyChoose />
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
