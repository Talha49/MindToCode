"use client"

import { Container, Section } from "@/components/ui/Layout"
import { Accordion } from "@/components/ui/Accordion"

export function CustomSoftwareFAQ() {
    const faqItems = [
        {
            title: "How do you handle data security and privacy?",
            content: "Security is our top priority. We implement industry-standard practices including Role-Based Access Control (RBAC), end-to-end encryption for sensitive data, and secure authentication flows (JWT/OAuth). We follow OWASP guidelines to prevent common vulnerabilities."
        },
        {
            title: "Can you modernize our existing legacy software?",
            content: "Yes. We specialize in refactoring and migrating legacy systems (PHP, Old .NET) to modern, scalable cloud architectures (Next.js, Node.js, AWS) without losing data."
        },
        {
            title: "Do you offer long-term maintenance contracts?",
            content: "Absolutely. Enterprise software requires ongoing care. We offer dedicated SLA (Service Level Agreement) packages for monitoring, bug fixes, and feature updates."
        },
        {
            title: "Can the software scale to millions of users?",
            content: "Yes. We architect 'Cloud Native' solutions. By using Serverless computing and scalable databases (like PostgreSQL or DynamoDB), your application can handle massive spikes in traffic without manual intervention."
        },
        {
            title: "What is your development methodology?",
            content: "We use Agile/Scrum. You get a dedicated project manager and weekly Sprint demos. You see progress every single week, not just at the end."
        }
    ]

    return (
        <Section className="py-24 bg-background">
            <Container className="max-w-4xl">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading">Technical FAQs</h2>
                    <p className="text-lg text-muted-foreground">About our architecture and process.</p>
                </div>

                <Accordion items={faqItems} className="w-full" />
            </Container>
        </Section>
    )
}
