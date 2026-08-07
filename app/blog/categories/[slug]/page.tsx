
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCategories, getPostsByCategory } from '@/lib/posts';
import { ArticleCard } from '@/components/article-card';
import { SITE } from '@/lib/site';
export async function generateStaticParams() { return getCategories().map(category => ({ slug: category.toLowerCase().replace(/\s+/g,'-') })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const category = getCategories().find(item => item.toLowerCase().replace(/\s+/g,'-') === slug); if (!category) return { title: 'Category not found' }; return { title: category, description: `Browse BuduTech articles in ${category}.`, alternates: { canonical: `${SITE.blogUrl}/blog/categories/${slug}` } }; }
export default async function BlogCategoryPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const category = getCategories().find(item => item.toLowerCase().replace(/\s+/g,'-') === slug); if (!category) notFound(); const posts = getPostsByCategory(category); return <div className="container-page py-12 sm:py-16"><div className="max-w-3xl"><div className="small-label">Category</div><h1 className="h1 mt-2">{category}</h1><p className="lead mt-5">Articles grouped to build topical depth and authority.</p></div><div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{posts.map(post => <ArticleCard key={post.slug} post={post} />)}</div></div>; }
