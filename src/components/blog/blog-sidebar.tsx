import { Link } from "@tanstack/react-router";
import { getBlogPosts } from "@/lib/blog-data";
import { Badge } from "@/components/ui/badge";

interface BlogSidebarProps {
  currentSlug?: string;
}

export default function BlogSidebar({ currentSlug }: BlogSidebarProps) {
  const posts = getBlogPosts();
  const recentPosts = posts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, 5);

  return (
    <div className="w-full lg:w-80 space-y-8">
      {/* Recent Posts Section - Only show if there are recent posts */}
      {recentPosts.length > 0 && (
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[var(--color-border)]/50">
          <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-6">
            Posts Recentes
          </h3>

          <div className="space-y-4">
            {recentPosts.map((post, index) => (
              <Link
                key={post.slug}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="block group"
              >
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-[var(--color-muted-foreground)]">
                    <span>
                      {new Date(post.date).toLocaleDateString("pt-BR")}
                    </span>
                    <span>{post.author}</span>
                  </div>
                </div>
                {index < recentPosts.length - 1 && (
                  <div className="mt-4 border-b border-[var(--color-border)]/30"></div>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Tags Section */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[var(--color-border)]/50">
        <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-6">
          Tags
        </h3>

        <div className="flex flex-wrap gap-2">
          {Array.from(new Set(posts.flatMap((post) => post.tags || []))).map(
            (tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs hover:bg-[var(--color-primary)] hover:text-white transition-colors cursor-pointer"
              >
                {tag}
              </Badge>
            )
          )}
        </div>
      </div>

      {/* Waitlist CTA Section */}
      <div className="bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/5 rounded-2xl p-6 border border-[var(--color-primary)]/20">
        <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-4">
          Pronto para começar?
        </h3>
        <p className="text-sm text-[var(--color-muted-foreground)] mb-4">
          Junte-se à lista de espera e seja um dos primeiros a experimentar as
          APIs de IA da Iara Labs.
        </p>
        <a
          href="/wait-list"
          className="inline-flex items-center justify-center w-full rounded-xl bg-[var(--color-primary)] px-4 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#188f6a] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2"
        >
          Entrar na Lista de Espera
        </a>
      </div>
    </div>
  );
}
