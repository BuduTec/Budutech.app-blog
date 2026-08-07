
import { buildRssXml } from '@/lib/rss';
export function GET() { return new Response(buildRssXml(), { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }); }
