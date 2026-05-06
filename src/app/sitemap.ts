import { MetadataRoute } from 'next'
import { WebTemplates } from '@/lib/constants/templates'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rikustore.vercel.app'

  // Dynamic portfolio items
  const portfolioEntries: MetadataRoute.Sitemap = WebTemplates.map((template) => ({
    url: `${baseUrl}/portfolio/item/${template.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    '',
    '/portfolio',
    '/pricing',
    '/process',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }))

  return [...staticPages, ...portfolioEntries]
}
