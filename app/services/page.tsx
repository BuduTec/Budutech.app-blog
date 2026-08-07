
import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/services';

export const metadata: Metadata = { title: 'Services', description: 'Browse BuduTech services.' };
export default function ServicesPage() { return <div className="container-page py-12 sm:py-16"><div className="max-w-3xl"><div className="small-label">Services</div><h1 className="h1 mt-2">Browse services</h1><p className="lead mt-5">Choose the service that matches what you need.</p></div><div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{services.map(service => <Link key={service.slug} href={`/services/${service.slug}`} className="card p-6 transition hover:-translate-y-1 hover:shadow-glow"><div className="small-label">{service.eyebrow}</div><h2 className="mt-2 text-xl font-bold text-slate-950">{service.title}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{service.subtitle}</p></Link>)}</div></div> }
