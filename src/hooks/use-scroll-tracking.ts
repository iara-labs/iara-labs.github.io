import { useEffect, useRef } from "react";
import { useAnalytics } from "./use-analytics";

export const useScrollTracking = () => {
  const { trackScrollDepth } = useAnalytics();
  const trackedDepths = useRef<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);

      // Rastreia percentuais específicos (25%, 50%, 75%)
      const thresholds = [25, 50, 75];
      const nearestThreshold = thresholds.find(
        (t) => scrollPercentage >= t && !trackedDepths.current.has(t)
      );

      if (nearestThreshold) {
        trackedDepths.current.add(nearestThreshold);
        trackScrollDepth(nearestThreshold);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [trackScrollDepth]);

  // Reset quando a página muda
  useEffect(() => {
    trackedDepths.current.clear();
  }, []);
};
