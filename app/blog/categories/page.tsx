
import type { Metadata } from 'next';
import Link from 'next/link';
import { getCategories, getPostsByCategory } from '@/lib/posts';
import { SITE } from '@/lib/site';
export const metadata: Metadata = { title: 'Categories', description: 'Browse blog categories.', alternates: { canonical: `${SITE.blogUrl}/blog/categories` } };
export default function BlogCategoriesPage() { const categories = getCategories(); return <div className="container-page py-12 sm:py-16"><div className="max-w-3xl"><div className="small-label">Categories</div><h1 className="h1 mt-2">Browse by category</h1><p className="lead mt-5">Explore the hub by topic and intent.</p></div><div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{categories.map(category => { const slug = category.toLowerCase().replace(/\s+/g,'-'); const count = getPostsByCategory(category).length; return <Link key={category} href={`/blog/categories/${slug}`} className="card p-6 transition hover:-translate-y-1 hover:shadow-glow"><div className="small-label">{count} articles</div><h2 className="mt-2 text-xl font-bold text-slate-950">{category}</h2></Link>; })}</div></div>; }
