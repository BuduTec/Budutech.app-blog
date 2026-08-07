
import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/posts';
import { ArticleCard } from '@/components/article-card';
import { SITE } from '@/lib/site';
export const metadata: Metadata = { title: 'Articles', description: 'Browse all BuduTech blog articles.', alternates: { canonical: `${SITE.blogUrl}/blog/articles` } };
export default function BlogArticlesPage() { const posts = getAllPosts(); return <div className="container-page py-12 sm:py-16"><div className="max-w-3xl"><div className="small-label">Articles</div><h1 className="h1 mt-2">All articles</h1><p className="lead mt-5">Browse all guides and knowledge pieces.</p></div><div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{posts.map(post => <ArticleCard key={post.slug} post={post} />)}</div></div>; }
