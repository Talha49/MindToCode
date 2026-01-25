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

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MindToCode",
    "url": "https://mind-to-code.vercel.app",
    "logo": "https://mind-to-code.vercel.app/logo.png", // Update when logo is available
    "sameAs": [
      "https://github.com/Talha49", // Placeholder
      "https://www.linkedin.com/in/talha-ghauri-web-application-developer-a366311b5", // Placeholder
      "https://twitter.com/mindtocode" // Placeholder
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1234567890", // Placeholder
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
