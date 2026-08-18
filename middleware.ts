// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  
  // Get hostname of request (e.g., 'blog.budutech.app' or 'localhost:3000')
  const hostname = req.headers.get('host') || '';

  // Only rewrite if it's the specific blog subdomain
  if (hostname.includes('blog.budutech.app')) {
    // Prevent rewriting if the path already starts with /blog
    // to avoid infinite loops or doubling up (/blog/blog/...)
    if (!url.pathname.startsWith('/blog')) {
      url.pathname = `/blog${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

// Ensure the middleware only runs on relevant paths, avoiding static assets
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
