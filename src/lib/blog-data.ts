import type { BlogPost } from "@/types/blog";
import { loadBlogPosts, loadBlogPost } from "@/lib/markdown-parser";

export function getBlogPosts(): BlogPost[] {
  return loadBlogPosts().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return loadBlogPost(slug);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  const posts = getBlogPosts();
  return posts.filter((post) => post.tags?.includes(tag));
}
