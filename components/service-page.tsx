
import Link from 'next/link';
import { SITE } from '@/lib/site';
import type { Service } from '@/lib/services';

export function ServicePage({ service }: { service: Service }) {
  return (
    <div>
      <section className="container-page py-12 sm:py-16">
        <div className="max-w-4xl">
          <div className="flex flex-wrap gap-2"><span className="pill">{service.eyebrow}</span><span className="pill">Timeline: {service.timeline}</span></div>
          <h1 className="h1 mt-6 max-w-4xl">{service.title}</h1>
          <p className="lead mt-5 max-w-3xl">{service.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link href={SITE.mainUrl} className="btn-primary">Start on Main Site</Link><Link href="/blog" className="btn-secondary">Read related guides</Link></div>
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card p-6">
            <div className="small-label">Overview</div>
            <h2 className="h2 mt-2">What this service solves</h2>
            <p className="lead mt-4">{service.summary}</p>
            <div className="mt-8 grid gap-3">{service.benefits.map((benefit) => <div key={benefit} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">{benefit}</div>)}</div>
          </div>
          <div className="card p-6">
            <div className="small-label">Packages</div>
            <div className="mt-4 grid gap-4">{service.packages.map((pkg) => <div key={pkg.name} className="rounded-3xl border border-slate-200 p-5"><div className="flex items-start justify-between gap-4"><div><h3 className="h3">{pkg.name}</h3><p className="mt-1 text-sm text-slate-500">{pkg.price}</p></div>{pkg.name === 'Premium' ? <span className="pill border-budutech-100 bg-budutech-50 text-budutech-800">Recommended</span> : null}</div><ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">{pkg.includes.map((item) => <li key={item}>• {item}</li>)}</ul></div>)}</div>
          </div>
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="card p-6 sm:p-8">
          <div className="small-label">FAQ</div>
          <h2 className="h2 mt-2">Questions people ask before they choose</h2>
          <div className="mt-6 grid gap-4">{service.faq.map((item) => <details key={item.q} className="rounded-2xl border border-slate-200 bg-white px-5 py-4"><summary className="cursor-pointer list-none font-semibold text-slate-950">{item.q}</summary><p className="mt-3 text-sm leading-7 text-slate-600">{item.a}</p></details>)}</div>
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="card-elevated p-6 sm:p-8"><div className="small-label">Next step</div><h2 className="h2 mt-2">Move from reading to action</h2><p className="lead mt-4 max-w-3xl">Use the main site to choose your package and continue via WhatsApp.</p><div className="mt-6 flex flex-wrap gap-3"><Link href={SITE.mainUrl} className="btn-primary">Go to Main Site</Link><Link href={SITE.googleReviewUrl} target="_blank" className="btn-secondary">Leave a Google Review</Link></div></div>
      </section>
    </div>
  );
}
