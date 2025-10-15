import { useAnalytics } from "@/hooks/use-analytics";

export function BackToHomeCta() {
  const { trackCTAClick } = useAnalytics();

  return (
    <a
      href="/"
      onClick={() => trackCTAClick("voltar-inicio", "thank-you-page")}
      className="inline-flex items-center justify-center rounded-4xl bg-[var(--color-primary)] px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-[#188f6a] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2"
    >
      Voltar ao Início
    </a>
  );
}
