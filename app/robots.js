import { SITE_URL } from "@/lib/seo";

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/', // Disallow API routes
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
