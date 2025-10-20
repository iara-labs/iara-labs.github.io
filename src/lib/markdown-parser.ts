import type { BlogPost } from "@/types/blog";

// Função para extrair frontmatter de markdown
function parseFrontmatter(content: string): {
  frontmatter: Record<string, string | string[]>;
  content: string;
} {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { frontmatter: {}, content };
  }

  const frontmatterText = match[1];
  const markdownContent = match[2];

  const frontmatter: Record<string, string | string[]> = {};
  const lines = frontmatterText.split("\n");

  for (const line of lines) {
    const colonIndex = line.indexOf(":");
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();

      // Remove quotes if present
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      // Parse arrays (tags)
      if (key === "tags" && value.startsWith("[") && value.endsWith("]")) {
        const arrayContent = value.slice(1, -1);
        frontmatter[key] = arrayContent
          .split(",")
          .map((item) => item.trim().replace(/"/g, ""))
          .filter((item) => item.length > 0);
      } else {
        frontmatter[key] = value;
      }
    }
  }

  return { frontmatter, content: markdownContent };
}

// Função para converter markdown simples para HTML
function markdownToHtml(markdown: string): string {
  return (
    markdown
      // Headers
      .replace(
        /^### (.*$)/gim,
        '<h3 class="text-xl font-bold mb-2 mt-4">$1</h3>'
      )
      .replace(
        /^## (.*$)/gim,
        '<h2 class="text-2xl font-bold mb-3 mt-6">$1</h2>'
      )
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mb-4">$1</h1>')

      // Bold and italic
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/_(.*?)_/g, "<em>$1</em>")

      // Code blocks
      .replace(
        /```([\s\S]*?)```/g,
        '<pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>$1</code></pre>'
      )
      .replace(
        /`(.*?)`/g,
        '<code class="bg-muted px-1 py-0.5 rounded text-sm">$1</code>'
      )

      // Links
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" class="text-primary hover:underline">$1</a>'
      )

      // Lists - improved regex to handle multiple consecutive list items
      .replace(/^- (.*$)/gim, '<li class="ml-4">$1</li>')
      .replace(
        /((?:<li class="ml-4">.*?<\/li>\s*)+)/gs,
        '<ul class="list-disc ml-6 mb-4">$1</ul>'
      )

      // Paragraphs
      .replace(/\n\n/g, '</p><p class="mb-4">')
      .replace(
        /^(?!<[h1-6]|<pre|<code|<a|<ul|<li)(.*)$/gm,
        '<p class="mb-4">$1</p>'
      )

      // Horizontal rule
      .replace(/^---$/gm, '<hr class="my-6 border-muted">')
  );
}

// Importar todos os arquivos markdown da pasta blog automaticamente
// Em Vite, podemos usar import.meta.glob para carregar arquivos dinamicamente
const markdownModules = import.meta.glob("/src/data/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

// Função para extrair o slug do caminho do arquivo
function getSlugFromPath(path: string): string {
  const filename = path.split("/").pop() || "";
  return filename.replace(".md", "");
}

// Função para processar um post markdown
function processMarkdownPost(slug: string, markdownContent: string): BlogPost {
  const { frontmatter, content } = parseFrontmatter(markdownContent);

  return {
    slug,
    title: (frontmatter.title as string) || "Sem título",
    author: (frontmatter.author as string) || "Autor desconhecido",
    date:
      (frontmatter.date as string) || new Date().toISOString().split("T")[0],
    excerpt: (frontmatter.excerpt as string) || "",
    content: markdownToHtml(content),
    tags: (frontmatter.tags as string[]) || [],
  };
}

// Função para ler posts dos arquivos markdown automaticamente
export function loadBlogPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  // Iterar sobre todos os arquivos markdown carregados
  for (const [path, content] of Object.entries(markdownModules)) {
    const slug = getSlugFromPath(path);
    const post = processMarkdownPost(slug, content as string);
    posts.push(post);
  }

  // Ordenar por data (mais recente primeiro)
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function loadBlogPost(slug: string): BlogPost | undefined {
  const posts = loadBlogPosts();
  return posts.find((post) => post.slug === slug);
}
