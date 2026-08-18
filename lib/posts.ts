import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import { slugify } from '@/lib/slugify';

const dir = path.join(process.cwd(), 'content', 'posts');

export type PostMeta = {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  date: string;
  updated: string;
  author: string;
  readingTime: string;
  featured?: boolean;
  seoTitle: string;
  seoDescription: string;
};

export type Post = PostMeta & {
  content: string;
};

export function getAllPosts(): PostMeta[] {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((file) => {
      const { data } = matter(
        fs.readFileSync(path.join(dir, file), 'utf8')
      );

      return {
        title: data.title,
        slug: data.slug,
        category: data.category,
        excerpt: data.excerpt,
        date: data.date,
        updated: data.updated,
        author: data.author,
        readingTime: data.readingTime,
        featured: Boolean(data.featured),
        seoTitle: data.seoTitle,
        seoDescription: data.seoDescription,
      } as PostMeta;
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getFeaturedPosts() {
  return getAllPosts().filter((p) => p.featured);
}

export function getCategories() {
  return Array.from(
    new Set(getAllPosts().map((p) => p.category))
  ).sort();
}

export function getPostsByCategory(category: string) {
  return getAllPosts().filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}

export function getPostBySlug(slug: string): Post {
  const { data, content } = matter(
    fs.readFileSync(path.join(dir, `${slug}.mdx`), 'utf8')
  );

  return {
    title: data.title,
    slug: data.slug,
    category: data.category,
    excerpt: data.excerpt,
    date: data.date,
    updated: data.updated,
    author: data.author,
    readingTime: data.readingTime,
    featured: Boolean(data.featured),
    seoTitle: data.seoTitle,
    seoDescription: data.seoDescription,
    content,
  };
}

export async function markdownToHtml(markdown: string) {
  return (
    await remark()
      .use(remarkGfm)
      .use(remarkHtml)
      .process(markdown)
  ).toString();
}

export function extractHeadings(markdown: string) {
  return markdown
    .split('\n')
    .filter(
      l => l.startsWith('## ') || l.startsWith('### ')
    )
    .map(l => {
      const text = l.replace(/^###+\s/, '');
      return {
        id: slugify(text),
        text,
      };
    });
}
// Add this to the bottom of lib/posts.ts
export function getSearchIndex(): PostMeta[] {
  // Returns exactly what getAllPosts() does, but strips out the 'content' field
  // This prevents sending megabytes of text to the client browser on the search page.
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((file) => {
      const { data } = matter(
        fs.readFileSync(path.join(dir, file), 'utf8')
      );

      return {
        title: data.title,
        slug: slugify(data.title),
        category: data.category,
        excerpt: data.excerpt,
        date: data.date,
        updated: data.updated || data.date,
        author: data.author,
        readingTime: data.readingTime || '5 min read',
        featured: data.featured || false,
        seoTitle: data.seoTitle || data.title,
        seoDescription: data.seoDescription || data.excerpt,
      } as PostMeta;
    })
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}
