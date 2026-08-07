
import Link from 'next/link';
import { SITE } from '@/lib/site';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="container-page py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-sm font-black uppercase tracking-[0.16em] text-budutech-700">{SITE.brand}</div>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">A knowledge platform for business registration, compliance, entrepreneurship, AI and practical business growth guidance.</p>
          </div>
          <div><h3 className="text-sm font-bold text-slate-950">Explore</h3><div className="mt-4 grid gap-2 text-sm text-slate-600"><Link href="/services">Services</Link><Link href="/blog">Blog</Link><Link href="/blog/categories">Categories</Link><Link href="/blog/search">Search</Link></div></div>
          <div><h3 className="text-sm font-bold text-slate-950">Legal</h3><div className="mt-4 grid gap-2 text-sm text-slate-600"><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms</Link><Link href="/contact">Contact</Link></div></div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 BuduTech Services LTD.</span><span>{SITE.blogUrl}</span></div>
      </div>
    </footer>
  );
}
