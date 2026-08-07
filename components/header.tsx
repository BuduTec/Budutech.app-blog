
import Link from 'next/link';
import { Search } from 'lucide-react';
import { SITE } from '@/lib/site';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-budutech-700 text-base font-black text-white shadow-glow">B</div>
          <div className="leading-tight">
            <div className="text-sm font-black uppercase tracking-[0.16em] text-slate-950">BUDUTECH</div>
            <div className="text-xs text-slate-500">Knowledge Hub</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          <Link href="/services" className="btn-ghost">Services</Link>
          <Link href="/blog" className="btn-ghost">Blog</Link>
          <Link href="/blog/categories" className="btn-ghost">Categories</Link>
          <Link href="/blog/search" className="btn-ghost">Search</Link>
          <Link href="/about" className="btn-ghost">About</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/blog/search" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"><Search className="h-4 w-4" /> Search</Link>
          <a href={SITE.mainUrl} className="btn-primary hidden sm:inline-flex">Main Site</a>
        </div>
      </div>
    </header>
  );
}
