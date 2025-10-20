import { createFileRoute } from "@tanstack/react-router";
import BlogPost from "@/components/blog/blog-post";
import BlogSidebar from "@/components/blog/blog-sidebar";
import { getBlogPost } from "@/lib/blog-data";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPostPage,
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) {
      throw new Error("Post not found");
    }
    return { post };
  },
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-3">
        <BlogPost post={post} />
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-1">
        <div className="blog-sidebar">
          <BlogSidebar currentSlug={post.slug} />
        </div>
      </div>
    </div>
  );
}
