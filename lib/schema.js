export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "MindToCode",
  "url": "https://mind-to-code.vercel.app",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://mind-to-code.vercel.app?s={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Talha Ghauri",
  "jobTitle": "Full Stack Engineer & Founder",
  "url": "https://mind-to-code.vercel.app",
  "image": "https://mind-to-code.vercel.app/assets/my3.png",
  "sameAs": [
    "https://github.com/Talha49",
    "https://www.linkedin.com/in/talha-ghauri-web-application-developer-a366311b5",
    "https://portfolio-talha-psi.vercel.app/"
  ]
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MindToCode",
  "url": "https://mind-to-code.vercel.app",
  "logo": "https://mind-to-code.vercel.app/assets/logo.png",
  "description": "MindToCode delivers custom software, rapid startup MVP development, and technical academic guidance for students and founders worldwide.",
  "email": "ghaurit82@gmail.com",
  "sameAs": [
    "https://github.com/Talha49",
    "https://www.linkedin.com/in/talha-ghauri-web-application-developer-a366311b5",
    "https://portfolio-talha-psi.vercel.app/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+4407448690269",
    "contactType": "customer service",
    "areaServed": "Global",
    "availableLanguage": "English"
  }
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "MVP Development & Technical Guidance",
  "provider": {
    "@type": "Organization",
    "name": "MindToCode"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Global"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Student Assignment Help & Guidance",
          "description": "Expert assistance with university assignments, coding projects, and debugging for students."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Capstone Project Development",
          "description": "End-to-end support for final year capstone projects, from documentation to implementation."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "MVP Development for Startups",
          "description": "Rapid Minimum Viable Product (MVP) development for founders and business owners."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Web Application",
          "description": "Professional web app development for businesses, e-commerce, and SaaS platforms."
        }
      }
    ]
  }
};

export const academicServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Academic Guidance & Capstone Project Support",
  "serviceType": "Academic Software & Capstone Guidance",
  "description": "Comprehensive support for Computer Science university assignments, Final Year Projects (FYP), AI/ML tasks, and viva examination preparation.",
  "provider": {
    "@type": "Organization",
    "name": "MindToCode",
    "url": "https://mind-to-code.vercel.app"
  },
  "areaServed": "Global"
};

export const mvpServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "MVP Development for Startups",
  "serviceType": "Minimum Viable Product (MVP) Development",
  "description": "Rapid, scalable Next.js and React MVP development for startup founders and businesses with full IP ownership and direct senior engineering.",
  "provider": {
    "@type": "Organization",
    "name": "MindToCode",
    "url": "https://mind-to-code.vercel.app"
  },
  "areaServed": "Global"
};

