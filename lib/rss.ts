
import { getAllPosts } from '@/lib/posts';
import { SITE } from '@/lib/site';
export function buildRssXml(){ const posts = getAllPosts().slice(0,20); const items = posts.map(post => `
      <item>
        <title><![CDATA[${post.title}]]></title>
        <link>${SITE.blogUrl}/blog/articles/${post.slug}</link>
        <guid>${SITE.blogUrl}/blog/articles/${post.slug}</guid>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <description><![CDATA[${post.excerpt}]]></description>
      </item>`).join(''); return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${SITE.brand} Blog</title>
    <link>${SITE.blogUrl}/blog</link>
    <description>Business registration, compliance, growth and AI content from BuduTech.</description>${items}
  </channel>
</rss>`; }
