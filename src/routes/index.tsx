import { createFileRoute } from "@tanstack/react-router";
import Hero from "../components/sessions/Hero";
import Resources from "../components/sessions/Resources";
import HowItWorks from "../components/sessions/HowItWorks";
import Developers from "../components/sessions/Developers";
import SabIA from "../components/sessions/SabIA";
import Compatibility from "../components/sessions/Compatibility";
import Quickstart from "../components/sessions/Quickstart";
import Pricing from "../components/sessions/Pricing";
import Faq from "../components/sessions/Faq";
import Cta from "../components/sessions/Cta";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
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
