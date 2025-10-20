export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  tags?: string[];
}
