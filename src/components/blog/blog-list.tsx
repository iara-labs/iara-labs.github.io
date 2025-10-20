import { Link } from "@tanstack/react-router";
import { getBlogPosts } from "@/lib/blog-data";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock } from "lucide-react";

export default function BlogList() {
  const posts = getBlogPosts();

  return (
    <div className="space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.slug} to="/blog/$slug" params={{ slug: post.slug }}>
            <article className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[var(--color-border)]/50 hover:shadow-xl hover:border-[var(--color-primary)]/30 blog-card cursor-pointer h-full">
              {/* Header */}
              <div className="space-y-4 mb-4">
                <h2 className="text-xl font-bold text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                  {post.title}
                </h2>

                <div className="flex items-center gap-4 text-sm text-[var(--color-muted-foreground)]">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(post.date).toLocaleDateString("pt-BR")}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>5 min read</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <p className="text-[var(--color-muted-foreground)] line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {post.tags && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-[var(--color-primary)]/10 text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{post.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                )}
              </div>

              {/* Read More */}
              <div className="mt-6 pt-4 border-t border-[var(--color-border)]/30">
                <span className="text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                  Ler mais →
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
