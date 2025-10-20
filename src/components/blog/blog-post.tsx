import { Link } from "@tanstack/react-router";
import type { BlogPost } from "@/types/blog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import ShareDropdown from "./share-dropdown";

interface BlogPostProps {
  post: BlogPost;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[var(--color-border)]/50">
      {/* Header */}
      <div className="space-y-6 mb-8">
        <Link to="/blog">
          <Button
            variant="ghost"
            className="mb-4 text-[var(--color-muted-foreground)] hover:text-[var(--color-white)] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Blog
          </Button>
        </Link>

        <h1 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-bold text-[var(--color-secondary)] leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-[var(--color-muted-foreground)]">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span className="font-medium">{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{new Date(post.date).toLocaleDateString("pt-BR")}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>5 min read</span>
          </div>
          <ShareDropdown post={{ title: post.title, slug: post.slug }} />
        </div>

        {post.tags && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="blog-prose">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>

      {/* Footer */}
      <div className="border-t border-[var(--color-border)]/30 pt-8 mt-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <Link to="/blog">
            <Button
              variant="outline"
              className="border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Ver todos os posts
            </Button>
          </Link>
          <div className="text-sm text-[var(--color-muted-foreground)]">
            Publicado em {new Date(post.date).toLocaleDateString("pt-BR")}
          </div>
        </div>
      </div>
    </article>
  );
}
