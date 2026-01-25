import { CustomSoftwareProjectView } from "@/components/sections/custom/CustomSoftwareProjectView"

export const metadata = {
  title: "Custom Software Development Company | Enterprise SaaS Solutions",
  description: "Scalable web application development for enterprises. We build custom CRMs, SaaS platforms, and internal tools using Cloud Native technologies.",
  keywords: [
    "Custom Software Development",
    "SaaS Development Company",
    "Enterprise Web Application",
    "Legacy Software Modernization",
    "Cloud Solutions Architect",
    "React Native Development Agency"
  ],
  openGraph: {
    title: "Build Scalable Software Solutions - MindToCode",
    description: "From internal tools to global SaaS platforms. We architect secure, high-performance software.",
    url: "https://mindtocode.com/custom-software",
  }
}

export default function CustomSoftwarePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do you handle data security and privacy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Security is our top priority. We implement industry-standard practices including Role-Based Access Control (RBAC) and end-to-end encryption."
        }
      },
      {
        "@type": "Question",
        "name": "Can you modernize our existing legacy software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We specialize in refactoring and migrating legacy systems to modern, scalable cloud architectures."
        }
      },
      {
         "@type": "Question",
        "name": "Do you offer long-term maintenance contracts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We offer dedicated SLA (Service Level Agreement) packages for monitoring, bug fixes, and feature updates."
        }
      }
    ]
  }

  return <CustomSoftwareProjectView faqSchema={faqSchema} />
}
