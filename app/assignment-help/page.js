import { AssignmentHelpView } from "@/components/sections/assignment/AssignmentHelpView"
import { SITE_URL } from "@/lib/seo"

export const metadata = {
  title: "Assignment Help for CS Students | Expert Coding Support",
  description: "Get A+ grade assistance for your Computer Science assignments, Capstone projects, and coding tasks. Plagiarism-free, confidential, and expert guidance.",
  keywords: [
    "Assignment Help",
    "Computer Science Assignment Help",
    "Python Assignment Help",
    "Java Homework Help",
    "Programming Tutor",
    "CS Project Support",
    "Do My Coding Assignment",
    "Pay Someone to Code",
    "C++ Assignment Help",
    "Web Development Homework",
    "React Assignment Help",
    "Database Management Assignment"
  ],
  openGraph: {
    title: "Assignment Help for CS Students - Guaranteed Results",
    description: "Struggling with code? Get expert help for Python, Java, C++, and Web Dev assignments. 100% Confidential.",
    url: `${SITE_URL}/assignment-help`,
  }
}

export default function AssignmentHelpPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is this cheating/plagiarism?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. We provide educational assistance and guidance. The code we provide is for reference and learning purposes. We also offer 1-on-1 explanation sessions so you understand the logic and can write your own solution or defend the provided one. All code is written from scratch and is 100% plagiarism-free."
        }
      },
      {
        "@type": "Question",
        "name": "Do you guarantee a passing grade?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While we cannot legally guarantee a grade from your university, our track record shows that 98% of our students achieve an A or B grade. We follow the requirements strictly and test all code against provided test cases."
        }
      },
      {
        "@type": "Question",
        "name": "How fast can you deliver?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in urgent deadlines. For small assignments, we can often deliver within 24 hours."
        }
      }
    ]
  }

  return <AssignmentHelpView faqSchema={faqSchema} />
}
