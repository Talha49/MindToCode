import { AcademicHelpView } from "@/components/sections/academic/AcademicHelpView"
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo"
import { academicServiceSchema } from "@/lib/schema"

export const metadata = {
  title: "Capstone & University Project Help | MindToCode",
  description: "Expert Computer Science assignment help, Final Year Capstone Project development, AI/ML implementation, and 1-on-1 viva defense preparation. 100% plagiarism-free.",
  keywords: [
    "Capstone Project Help",
    "University Project Support",
    "CS Assignment Help",
    "Computer Science Final Year Project",
    "Viva Preparation",
    "Python Project Help",
    "AI ML Student Projects",
    "Full Stack Capstone",
    "Do My Coding Assignment",
    "Engineering Project Guidance"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/academic-help`,
    title: "Capstone & University Project Help | MindToCode",
    description: "Get A+ guidance for your CS assignments, Capstone projects, and viva defense from an experienced senior engineer.",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capstone & University Project Help | MindToCode",
    description: "Expert assistance for computer science students. Code, documentation, and viva prep.",
    images: [DEFAULT_OG_IMAGE.url],
  },
}

export default function AcademicHelpPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can you help with my final year / capstone project from scratch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Whether you already have an approved project proposal or need help selecting a viable, high-scoring topic, we assist from architecture design and database modeling to complete implementation, documentation, and viva defense."
        }
      },
      {
        "@type": "Question",
        "name": "Do you write the code for me or teach me how it works?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We do both. We deliver clean, modular, production-ready code with complete setup instructions. Crucially, we also include 1-on-1 walkthrough sessions so you thoroughly understand how every component works and can confidently present it in class or during examination vivas."
        }
      },
      {
        "@type": "Question",
        "name": "What programming languages and frameworks do you support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support Python (FastAPI, Flask, Django, AI/ML), JavaScript/TypeScript (React, Next.js, Node.js), Java (Spring Boot), C, C++, PHP, SQL/NoSQL databases, and mobile frameworks like React Native and Flutter."
        }
      },
      {
        "@type": "Question",
        "name": "Is my project and personal information kept confidential?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We treat all academic inquiries with 100% confidentiality. Your identity, code, and university information are never shared, published, or reused for any other student."
        }
      },
      {
        "@type": "Question",
        "name": "How fast can you deliver urgent assignments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For smaller programming assignments and debugging tasks, we can often deliver within 24 to 48 hours. For capstone projects, timelines usually range from 1 to 3 weeks depending on the complexity of the scope."
        }
      }
    ]
  }

  return (
    <AcademicHelpView 
      faqSchema={faqSchema} 
      serviceSchema={academicServiceSchema} 
    />
  )
}
