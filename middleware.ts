
import { NextRequest, NextResponse } from 'next/server';
const BLOG_HOST = 'blog.budutech.app';
const EXCLUDED = ['/robots.txt', '/sitemap.xml', '/llms.txt', '/rss.xml'];
export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host')?.split(':')[0] || '';
  const isBlogHost = hostname === BLOG_HOST || hostname.endsWith(`.${BLOG_HOST}`);
  const pathname = request.nextUrl.pathname;
  if (!isBlogHost) return NextResponse.next();
  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.includes('.')) return NextResponse.next();
  if (EXCLUDED.includes(pathname)) return NextResponse.next();
  const url = request.nextUrl.clone();
  url.pathname = pathname === '/' ? '/blog' : pathname;
  return NextResponse.rewrite(url);
}
export const config = { matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'] };
