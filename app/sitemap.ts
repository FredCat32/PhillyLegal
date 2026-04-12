import type { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://phillylegalguide.com';

const staticRoutes = [
  '',
  '/about',
  '/blog',
  '/disclaimer',
  '/firms',
  '/guide',
  '/guide/how-long',
  '/guide/how-to-choose',
  '/guide/what-percentage',
  '/privacy',
  '/quiz',
  '/types',
  '/types/car-accident',
  '/types/medical-malpractice',
  '/types/slip-and-fall',
  '/types/workers-comp',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : route === '/blog' || route === '/types' || route === '/guide' ? 0.9 : 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.datePublished),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticEntries, ...blogEntries];
}
