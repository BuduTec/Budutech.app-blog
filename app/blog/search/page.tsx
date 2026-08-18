// app/blog/search/page.tsx
import type { Metadata } from 'next';
// 1. Change the import from getAllPosts to getSearchIndex
import { getSearchIndex } from '@/lib/posts'; 
import { SearchClient } from '@/components/search-client';
import { SITE } from '@/lib/site';

export const metadata: Metadata = { 
  title: 'Search', 
  description: 'Search the BuduTech blog.', 
  alternates: { canonical: `${SITE.blogUrl}/blog/search` } 
};

export default function BlogSearchPage() { 
  // 2. Use the new optimized function
  const posts = getSearchIndex(); 
  
  return (
    <div className="container-page py-12 sm:py-16">
      <div className="max-w-3xl">
        <div className="small-label">Search</div>
        <h1 className="h1 mt-2">Search the blog</h1>
        <p className="lead mt-5">Find guides, FAQs and practical answers quickly.</p>
      </div>
      <div className="mt-10">
        <SearchClient posts={posts} />
      </div>
    </div>
  ); 
}
