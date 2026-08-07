import { NextRequest, NextResponse } from 'next/server';

const BLOG_HOST = 'blog.budutech.app';

const EXCLUDED = [
  '/robots.txt',
  '/sitemap.xml',
  '/llms.txt',
  '/rss.xml',
];

export function middleware(request: NextRequest) {
  const hostname =
    request.headers.get('host')?.split(':')[0] || '';

  const isBlogHost =
    hostname === BLOG_HOST ||
    hostname.endsWith(`.${BLOG_HOST}`);

  if (!isBlogHost) {
    return NextResponse.next();
  }

  const pathname = request.nextUrl.pathname;

  // Allow Next.js internals, APIs and static files through.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Allow special files through without rewriting.
  if (EXCLUDED.includes(pathname)) {
    return NextResponse.next();
  }

  // Prevent rewriting an already-prefixed /blog route.
  if (
    pathname === '/blog' ||
    pathname.startsWith('/blog/')
  ) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();

  // Map:
  // blog.budutech.app/          → /blog
  // blog.budutech.app/articles  → /blog/articles
  // blog.budutech.app/categories → /blog/categories
  url.pathname =
    pathname === '/'
      ? '/blog'
      : `/blog${pathname}`;

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
