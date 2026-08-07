
import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
export default function manifest(): MetadataRoute.Manifest { return { name: SITE.brand, short_name: 'BuduTech', start_url: '/', display: 'standalone', background_color: '#082d83', theme_color: '#082d83', icons: [] }; }
