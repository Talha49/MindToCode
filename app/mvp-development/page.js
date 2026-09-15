import { MvpProjectView } from "@/components/sections/mvp/MvpProjectView"
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo"
import { mvpServiceSchema } from "@/lib/schema"

export const metadata = {
  title: "MVP Development for Startups | Build Your SaaS in 4 Weeks",
  description: "Rapid Minimum Viable Product (MVP) development for founders. We build scalable, investor-ready web and mobile apps using Next.js and React. Full IP ownership.",
  keywords: [
    "MVP Development Services",
    "Startup App Development",
    "Hire React Developer",
    "SaaS MVP Builder",
    "Next.js Development Agency",
    "Direct Freelance Developer",
    "Build a Startup App",
    "React Native App Developer",
    "Prototype to Product",
    "Hire Solo Developer",
    "Fast MVP Launch"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Launch Your Startup in 4 Weeks - Expert MVP Development",
    description: "Don't waste months hiring. Get your idea built by a senior technical partner. Scalable, fast, and cost-effective.",
    url: `${SITE_URL}/mvp-development`,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "MVP Development for Startups | MindToCode",
    description: "Turn your startup concept into a functional, investor-ready MVP in 4 weeks.",
    images: [DEFAULT_OG_IMAGE.url],
  },
}

export default function MvpDevelopmentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does it take to build an MVP?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For most startups, we target a 4-6 week delivery time. This includes planning, design, development, and testing. We focus on the core features needed to validate your idea."
        }
      },
      {
        "@type": "Question",
        "name": "Who owns the Intellectual Property (IP)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You do. 100%. We work as a 'Work for Hire'. Once the final payment is made, all code, designs, and database schemas belong to you. We claim no equity."
        }
      },
      {
        "@type": "Question",
        "name": "What tech stack do you use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use modern, robust technologies: Next.js (React), TypeScript, Supabase/PostgreSQL, and Tailwind CSS. This ensures your app scales easily from 100 to 1 million users."
        }
      },
      {
        "@type": "Question",
        "name": "What happens after the launch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer ongoing support packages to handle bugs, server updates, and new feature requests. We won't leave you stranded after deployment."
        }
      },
      {
        "@type": "Question",
        "name": "Do you sign NDAs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We respect your confidentiality and are happy to sign a Non-Disclosure Agreement before discussing your specific idea."
        }
      }
    ]
  }

  return (
    <MvpProjectView 
      faqSchema={faqSchema} 
      serviceSchema={mvpServiceSchema}
    />
  )
}

