import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/dashboard/', // Disallow crawling of dashboard pages
    },
    sitemap: 'https://rikustore.vercel.app/sitemap.xml',
  }
}
