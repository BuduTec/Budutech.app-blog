
"use client";

import { useMemo, useState } from 'react';
import type { PostMeta } from '@/lib/posts';
import { ArticleCard } from '@/components/article-card';

export function SearchClient({ posts }: { posts: PostMeta[] }) {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => { const q = query.toLowerCase().trim(); if (!q) return posts; return posts.filter((post) => [post.title, post.excerpt, post.category].some((value) => value.toLowerCase().includes(q))); }, [posts, query]);
  return (<div><div className="card p-5"><label htmlFor="search" className="small-label">Search the hub</label><input id="search" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search CAC, company registration, NGO, grants, AI..." className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-budutech-700" /></div><div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{filtered.map((post) => <ArticleCard key={post.slug} post={post} />)}</div></div>);
}
