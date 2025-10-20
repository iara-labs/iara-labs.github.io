import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useShare } from "@/hooks/use-share";
import { Share2, Copy, Twitter, Linkedin, Facebook, Check } from "lucide-react";
import { toast } from "sonner";

interface ShareDropdownProps {
  post: {
    title: string;
    slug: string;
  };
}

export default function ShareDropdown({ post }: ShareDropdownProps) {
  const { share, shareToSocial, isSharing } = useShare();
  const [copied, setCopied] = useState(false);

  const postUrl = `${window.location.origin}/blog/${post.slug}`;

  const handleShare = async () => {
    const result = await share({
      title: post.title,
      text: `Confira este post: ${post.title}`,
      url: postUrl,
    });

    if (result.success) {
      toast.success("Link copiado para a área de transferência!");
    } else {
      toast.error(result.error || "Erro ao compartilhar");
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(postUrl);
      setCopied(true);
      toast.success("Link copiado!");
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error("Erro ao copiar link");
    }
  };

  const handleSocialShare = (platform: "twitter" | "linkedin" | "facebook") => {
    shareToSocial(platform, {
      title: post.title,
      text: `Confira este post: ${post.title}`,
      url: postUrl,
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="ml-auto cursor-pointer"
          disabled={isSharing}
        >
          <Share2 className="w-4 h-4 mr-2" />
          {isSharing ? "Compartilhando..." : "Compartilhar"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem onClick={handleShare} className="cursor-pointer">
          <Share2 className="w-4 h-4 mr-2" />
          Compartilhar nativo
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleCopyLink} className="cursor-pointer">
          {copied ? (
            <Check className="w-4 h-4 mr-2 text-green-600" />
          ) : (
            <Copy className="w-4 h-4 mr-2" />
          )}
          {copied ? "Copiado!" : "Copiar link"}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleSocialShare("twitter")}
          className="cursor-pointer"
        >
          <Twitter className="w-4 h-4 mr-2" />
          Twitter
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleSocialShare("linkedin")}
          className="cursor-pointer"
        >
          <Linkedin className="w-4 h-4 mr-2" />
          LinkedIn
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleSocialShare("facebook")}
          className="cursor-pointer"
        >
          <Facebook className="w-4 h-4 mr-2" />
          Facebook
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
