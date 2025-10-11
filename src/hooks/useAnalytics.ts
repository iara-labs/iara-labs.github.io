import { useCallback } from "react";

// Declaração global do dataLayer
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const useAnalytics = () => {
  // Função para enviar eventos para o GTM
  const pushToDataLayer = useCallback((data: any) => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push(data);
    }
  }, []);

  // Função para rastrear cliques em CTAs importantes
  const trackCTAClick = useCallback(
    (ctaName: string, location?: string) => {
      pushToDataLayer({
        event: "cta_click",
        cta_name: ctaName,
        cta_location: location || window.location.pathname,
      });
    },
    [pushToDataLayer]
  );

  // Função para rastrear conversões (cadastros, downloads, etc.)
  const trackConversion = useCallback(
    (conversionType: string, value?: number) => {
      pushToDataLayer({
        event: "conversion",
        conversion_type: conversionType,
        value: value,
        page_path: window.location.pathname,
      });
    },
    [pushToDataLayer]
  );

  // Função para rastrear scroll em percentuais específicos
  const trackScrollDepth = useCallback(
    (depth: number) => {
      pushToDataLayer({
        event: "scroll_depth",
        scroll_percentage: depth,
        page_path: window.location.pathname,
      });
    },
    [pushToDataLayer]
  );

  // Função para rastrear eventos customizados
  const trackCustomEvent = useCallback(
    (eventName: string, parameters?: Record<string, any>) => {
      pushToDataLayer({
        event: eventName,
        ...parameters,
      });
    },
    [pushToDataLayer]
  );

  return {
    trackCTAClick,
    trackConversion,
    trackScrollDepth,
    trackCustomEvent,
    pushToDataLayer,
  };
};
