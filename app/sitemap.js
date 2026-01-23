import { SITE_URL } from "@/lib/seo";

export default function sitemap() {
  const routes = [
    '',
    '#services',
    '#process',
    '#who-we-help',
    '#reviews',
  ].map((route) => ({
    url: `${SITE_URL}${route === '' ? '' : '/' + route.replace('#', '')}`, // Ideally these are separate pages for SEO, but for SPA we index the root.
    // Actually, for SPA anchor links don't usually go in sitemap as separate URLs unless we have pushState handling or separate pages.
    // For now, let's just index the main root effectively.
    // Wait, the guide shows routes. Let's just index the root as priority 1.
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  }));

  // Since it's an SPA, we really only have one main page indexed by Google.
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // We can add the design-system if we want it indexed, but probably not for public SEO.
  ]
}
