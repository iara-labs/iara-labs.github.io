import { createFileRoute } from "@tanstack/react-router";
import BlogList from "@/components/blog/blog-list";
import BlogSidebar from "@/components/blog/blog-sidebar";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="font-['Space_Grotesk'] text-4xl font-bold text-[var(--color-secondary)] md:text-5xl">
          Blog Iara Labs
        </h1>
        <p className="text-lg text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
          Descubra insights, tutoriais e novidades sobre inteligência artificial
          e desenvolvimento.
        </p>
      </div>

      {/* Main Content with Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <BlogList />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="blog-sidebar">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
