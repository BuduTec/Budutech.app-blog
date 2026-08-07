
import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { getAllPosts, getCategories } from '@/lib/posts';
import { getServiceSlugs } from '@/lib/services';
export default function sitemap(): MetadataRoute.Sitemap {
  const base: MetadataRoute.Sitemap = [
    { url: SITE.mainUrl, lastModified: new Date() },
    { url: `${SITE.mainUrl}/services`, lastModified: new Date() },
    { url: `${SITE.mainUrl}/blog`, lastModified: new Date() },
    { url: `${SITE.mainUrl}/blog/articles`, lastModified: new Date() },
    { url: `${SITE.mainUrl}/blog/categories`, lastModified: new Date() },
    { url: `${SITE.mainUrl}/blog/search`, lastModified: new Date() },
    { url: `${SITE.mainUrl}/about`, lastModified: new Date() },
    { url: `${SITE.mainUrl}/contact`, lastModified: new Date() },
    { url: `${SITE.mainUrl}/privacy`, lastModified: new Date() },
    { url: `${SITE.mainUrl}/terms`, lastModified: new Date() }
  ];
  const services = getServiceSlugs().map(s => ({ url: `${SITE.mainUrl}/services/${s.slug}`, lastModified: new Date() }));
  const posts = getAllPosts().map(post => ({ url: `${SITE.blogUrl}/blog/articles/${post.slug}`, lastModified: new Date(post.updated) }));
  const categories = getCategories().map(category => ({ url: `${SITE.blogUrl}/blog/categories/${category.toLowerCase().replace(/\s+/g,'-')}`, lastModified: new Date() }));
  return [...base, ...services, ...posts, ...categories];
}
