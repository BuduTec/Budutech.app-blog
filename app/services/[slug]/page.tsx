
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceBySlug, getServiceSlugs } from '@/lib/services';
import { ServicePage } from '@/components/service-page';
import { SITE } from '@/lib/site';

export async function generateStaticParams() { return getServiceSlugs(); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const service = getServiceBySlug(slug); if (!service) return { title: 'Service not found' }; return { title: service.title, description: service.summary, alternates: { canonical: `${SITE.mainUrl}/services/${service.slug}` }, openGraph: { title: service.title, description: service.summary, url: `${SITE.mainUrl}/services/${service.slug}`, images: [`${SITE.mainUrl}/og-image.svg`] } }; }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const service = getServiceBySlug(slug); if (!service) notFound(); return <ServicePage service={service} />; }
