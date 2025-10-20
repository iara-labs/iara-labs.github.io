import { useState } from "react";

interface ShareOptions {
  title: string;
  text?: string;
  url: string;
}

interface ShareResult {
  success: boolean;
  error?: string;
}

export function useShare() {
  const [isSharing, setIsSharing] = useState(false);

  const share = async (options: ShareOptions): Promise<ShareResult> => {
    setIsSharing(true);

    try {
      // Check if Web Share API is available
      if (navigator.share && navigator.canShare) {
        const shareData = {
          title: options.title,
          text: options.text || `Confira este post: ${options.title}`,
          url: options.url,
        };

        if (navigator.canShare(shareData)) {
          await navigator.share(shareData);
          return { success: true };
        }
      }

      // Fallback: Copy to clipboard
      await navigator.clipboard.writeText(options.url);
      return { success: true };
    } catch (error) {
      console.error("Error sharing:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Erro ao compartilhar",
      };
    } finally {
      setIsSharing(false);
    }
  };

  const shareToSocial = (
    platform: "twitter" | "linkedin" | "facebook",
    options: ShareOptions
  ) => {
    const encodedUrl = encodeURIComponent(options.url);
    const encodedTitle = encodeURIComponent(options.title);
    const encodedText = encodeURIComponent(
      options.text || `Confira este post: ${options.title}`
    );

    let shareUrl = "";

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
        break;
      case "linkedin":
        // LinkedIn Share API with title and summary
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary=${encodedText}`;
        break;
      case "facebook":
        // Facebook Share API with quote (text)
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  return {
    share,
    shareToSocial,
    isSharing,
  };
}
