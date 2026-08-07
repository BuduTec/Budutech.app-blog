"use client";


import Link from 'next/link';
import type { PostMeta } from '@/lib/posts';

export function ArticleCard({ post }: { post: PostMeta }) {
  return (
    <article className="card p-6 transition hover:-translate-y-1 hover:shadow-glow">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-budutech-700">
        <span className="pill">{post.category}</span>
        {post.featured ? <span className="pill border-budutech-100 bg-budutech-50 text-budutech-800">Featured</span> : null}
      </div>
      <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-950"><Link href={`/blog/articles/${post.slug}`}>{post.title}</Link></h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
      <div className="mt-5 flex items-center justify-between text-xs text-slate-500"><span>{post.readingTime}</span><Link href={`/blog/articles/${post.slug}`} className="font-semibold text-budutech-800">Read more →</Link></div>
    </article>
  );
}
