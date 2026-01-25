import { BusinessWebProjectView } from "@/components/sections/business/BusinessWebProjectView"

export const metadata = {
  title: "Professional Business Website Design | High Converting Sites",
  description: "Custom web design for small businesses and agencies. We build fast, mobile-responsive, and SEO-optimized websites that convert visitors into customers.",
  keywords: [
    "Business Website Design",
    "Small Business Web Developer",
    "Corporate Website Design",
    "High Converting Landing Page",
    "SEO Optimized Web Design",
    "Professional Portfolio Site"
  ],
  openGraph: {
    title: "Convert Visitors into Customers - Premium Web Design",
    description: "Your business deserves a professional online presence. Get a fast, beautiful website in 2 weeks.",
    url: "https://mindtocode.com/business-web",
  }
}

export default function BusinessWebPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why do I need a professional website vs. a generic template?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Templates often look generic and load slowly. A professional site is built to showcase your unique brand and guide visitors to contact you."
        }
      },
      {
        "@type": "Question",
        "name": "Will my website work on mobile phones?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, 100%. We take a 'Mobile-First' approach, meaning your site will look perfect on iPhones, Androids, tablets, and desktops."
        }
      },
      {
         "@type": "Question",
        "name": "How do you handle SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We solve technical SEO from day one. This includes fast loading speeds, proper header tags, and meta descriptions."
        }
      }
    ]
  }

  return <BusinessWebProjectView faqSchema={faqSchema} />
}
