
import Link from 'next/link';
import { ArrowRight, BookOpen, Search, ShieldCheck, Sparkles } from 'lucide-react';
import { ArticleCard } from '@/components/article-card';
import { ReviewSection } from '@/components/review-section';
import { getAllPosts, getFeaturedPosts } from '@/lib/posts';
import { services } from '@/lib/services';
import { SITE } from '@/lib/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BuduTech Services LTD',
  description: 'CAC registration, company formation, NGO registration and business growth support.',
  alternates: { canonical: SITE.mainUrl },
  openGraph: { title: 'BuduTech Services LTD', description: 'CAC registration and business growth services.', url: SITE.mainUrl, images: [`${SITE.mainUrl}/og-image.svg`] }
};

export default function HomePage() {
  const featured = getFeaturedPosts();
  const latest = getAllPosts().slice(0, 6);
  return (<div>
    <section className="container-page py-12 sm:py-16 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <div className="flex flex-wrap gap-2"><span className="pill">CAC</span><span className="pill">SEO</span><span className="pill">GEO</span><span className="pill">AEO</span></div>
          <h1 className="h1 mt-6 max-w-4xl">Help entrepreneurs build legally registered businesses across Nigeria and beyond.</h1>
          <p className="lead mt-6 max-w-2xl">BuduTech Services LTD helps with CAC registration, company formation, NGO registration, compliance and practical business growth.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link href="/services" className="btn-primary">Explore Services <ArrowRight className="ml-2 h-4 w-4" /></Link><Link href="/blog" className="btn-secondary"><BookOpen className="mr-2 h-4 w-4" /> Read Blog</Link><Link href="/blog/search" className="btn-ghost"><Search className="mr-2 h-4 w-4" /> Search the Hub</Link></div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3"><MiniStat title="Authoritative" desc="Focused on high-intent registration and compliance topics." /><MiniStat title="Structured" desc="Built for SEO, GEO and AI answer engines." /><MiniStat title="Practical" desc="Clear next steps, packages, and trust signals." /></div>
        </div>
        <div className="card-elevated p-6"><div className="flex items-center gap-3"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-budutech-50 text-budutech-800"><ShieldCheck className="h-6 w-6" /></div><div><div className="text-sm font-bold text-slate-950">Built for trust</div><div className="text-sm text-slate-500">Designed to convert and rank.</div></div></div><div className="mt-6 rounded-[20px] bg-slate-950 p-5 text-white"><div className="text-xs uppercase tracking-[0.18em] text-slate-400">Featured message</div><div className="mt-3 text-2xl font-black leading-tight">Search. Read. Understand. Then take action.</div></div><div className="mt-6 grid gap-3"><Link href="/services" className="card flex items-center justify-between p-4 hover:border-budutech-300"><span className="flex items-center gap-3"><Sparkles className="h-4 w-4 text-budutech-700" /> Services</span><span className="text-sm font-semibold text-budutech-700">Open →</span></Link><Link href="/blog" className="card flex items-center justify-between p-4 hover:border-budutech-300"><span className="flex items-center gap-3"><BookOpen className="h-4 w-4 text-budutech-700" /> Blog</span><span className="text-sm font-semibold text-budutech-700">Open →</span></Link></div></div>
      </div>
    </section>
    <section className="container-page pb-8"><div className="flex items-end justify-between gap-4"><div><div className="small-label">Services</div><h2 className="h2 mt-2">What BuduTech helps with</h2></div><Link href="/services" className="hidden text-sm font-semibold text-budutech-800 sm:inline">View all services →</Link></div><div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{services.slice(0,4).map(service => <Link key={service.slug} href={`/services/${service.slug}`} className="card p-5 transition hover:-translate-y-1 hover:shadow-glow"><div className="small-label">{service.eyebrow}</div><div className="mt-2 text-lg font-bold text-slate-950">{service.title}</div><p className="mt-3 text-sm leading-7 text-slate-600">{service.subtitle}</p></Link>)}</div></section>
    <section className="container-page py-12"><div className="flex items-end justify-between gap-4"><div><div className="small-label">Featured articles</div><h2 className="h2 mt-2">Start with the big guides</h2></div><Link href="/blog" className="hidden text-sm font-semibold text-budutech-800 sm:inline">View all blog articles →</Link></div><div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{featured.map(post => <ArticleCard key={post.slug} post={post} />)}</div></section>
    <section className="container-page py-12"><div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]"><div className="card p-6"><div className="small-label">Why this works</div><h2 className="h3 mt-2">SEO, GEO and AEO together</h2><div className="mt-4 grid gap-3">{['Quick answer format for AI answer engines','Clear topic clusters for search ranking','Internal links to build authority','Service pages that convert readers into clients'].map(item => <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">{item}</div>)}</div></div><div className="card p-6"><div className="small-label">Latest content</div><h2 className="h3 mt-2">Recent articles</h2><div className="mt-6 grid gap-4">{latest.map(post => <Link key={post.slug} href={`/blog/articles/${post.slug}`} className="rounded-2xl border border-slate-200 bg-white p-4 hover:bg-slate-50"><div className="text-xs font-semibold uppercase tracking-[0.14em] text-budutech-700">{post.category}</div><div className="mt-2 font-bold text-slate-950">{post.title}</div><div className="mt-2 text-sm text-slate-500">{post.readingTime}</div></Link>)}</div></div></div></section>
    <ReviewSection />
    <section className="container-page pb-16"><div className="card p-6 sm:p-8"><div className="small-label">About BuduTech</div><h2 className="h2 mt-2">A platform built for serious business owners</h2><p className="lead mt-4 max-w-3xl">The main site focuses on conversion. The blog focuses on ranking, explaining, and helping users understand their next move.</p><div className="mt-6 flex flex-wrap gap-3"><Link href={SITE.mainUrl} className="btn-primary">Go to Main Site</Link><Link href="/contact" className="btn-secondary">Contact</Link></div></div></section>
  </div>);
}
function MiniStat({ title, desc }: { title: string; desc: string }) { return <div className="rounded-[20px] border border-slate-200 bg-white p-4"><div className="text-sm font-bold text-slate-950">{title}</div><div className="mt-2 text-sm leading-6 text-slate-600">{desc}</div></div>; }
