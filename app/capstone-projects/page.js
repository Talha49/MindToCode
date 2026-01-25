import { CapstoneProjectView } from "@/components/sections/capstone/CapstoneProjectView"

export const metadata = {
  title: "Capstone Project Help for CS Students | Source Code & Docs",
  description: "Complete Final Year Project (FYP) support. We provide full source code, IEEE documentation, and Viva prep for Computer Science students.",
  keywords: [
    "Capstone Project Help",
    "Final Year Project CS",
    "Computer Science Thesis",
    "Buy FYP Source Code",
    "Python Capstone Ideas",
    "MERN Stack Final Project",
    "University Project For Sale",
    "Complete Final Year Project Code",
    "Android Capstone Project",
    "AI Project with Documentation",
    "Blockchain Final Year Project",
    "IEEE Project Implementation"
  ],
  openGraph: {
    title: "Capstone Project Help - Secure Your Degree",
    description: "Don't stress about your FYP. Get a complete, running project with documentation today.",
    url: "https://mindtocode.com/capstone-projects",
  }
}

export default function CapstoneProjectPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is included in the Capstone package?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our complete package includes: 1) Full Source Code, 2) Complete Documentation (50-80 pages) in IEEE/College format, 3) Database Schema Diagrams, 4) Installation on your local machine, and 5) A 1-hour Viva preparation session."
        }
      },
      {
        "@type": "Question",
        "name": "Can I choose my own topic?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! If you have a topic approved by your supervisor, we can build it. If not, we can suggest high-scoring, unique topics."
        }
      },
      {
         "@type": "Question",
        "name": "Will the project be unique?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We do not resell the same project to multiple students in the same university. We customize the UI and features."
        }
      }
    ]
  }

  return <CapstoneProjectView faqSchema={faqSchema} />
}
