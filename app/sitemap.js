import { SITE_URL } from "@/lib/seo";

export default function sitemap() {
  const baseUrl = SITE_URL;

  // 1. Static Pages (High Priority)
  const staticPages = [
    '',
    '/assignment-help',
    '/capstone-projects',
    '/mvp-development',
    '/business-web',
    '/custom-software',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.9,
  }));

  // 2. Blog Posts (Dynamic)
  // In a real app, fetch this from DB/CMS. Here we list them manually for the build.
  const blogPosts = [
    'top-capstone-project-ideas-2026',
    'how-to-build-mvp-4-weeks',
    'enterprise-saas-architecture',
    'cs-assignment-help-guide',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticPages, ...blogPosts];
}
