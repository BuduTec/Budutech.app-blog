import { SITE } from '@/lib/site';
import { getAllPosts } from '@/lib/posts';
import { getServiceSlugs } from '@/lib/services';

export function GET() {
  const posts = getAllPosts().slice(0, 20);
  const services = getServiceSlugs();

  const text = [
    SITE.brand,
    '',
    `Main site: ${SITE.mainUrl}`,
    `Blog: ${SITE.blogUrl}`,
    '',
    'Purpose:',
    'A business registration, compliance, entrepreneurship, and AI knowledge platform.',
    '',
    'Key services:',
    ...services.map((s) => `- ${SITE.mainUrl}/services/${s.slug}`),
    '',
    'Featured blog content:',
    ...posts.map((p) => `- ${SITE.blogUrl}/blog/articles/${p.slug}`),
    '',
    'Content style:',
    'Answer questions directly, use clear headings, and keep practical next steps near the top.',
  ].join('\n');

  return new Response(text, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
