
import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.mainUrl),
  title: { default: 'BuduTech Knowledge Hub', template: '%s | BuduTech Knowledge Hub' },
  description: 'A business registration, compliance, and growth knowledge hub for Nigerian entrepreneurs and beyond.',
  openGraph: { title: 'BuduTech Knowledge Hub', description: 'Business registration, compliance, AI, growth and practical guides.', url: SITE.mainUrl, siteName: SITE.brand, type: 'website', images: [`${SITE.mainUrl}/og-image.svg`] },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body><Header /><main>{children}</main><Footer /></body></html>);
}
