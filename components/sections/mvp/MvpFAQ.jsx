"use client"

import { Container, Section } from "@/components/ui/Layout"
import { Accordion } from "@/components/ui/Accordion"

export function MvpFAQ() {
    const faqItems = [
        {
            title: "How long does it take to build an MVP?",
            content: "For most startups, we target a 4-6 week delivery time. This includes planning, design, development, and testing. We focus on the core features needed to validate your idea."
        },
        {
            title: "Who owns the Intellectual Property (IP)?",
            content: "You do. 100%. We work as a 'Work for Hire'. Once the final payment is made, all code, designs, and database schemas belong to you. We claim no equity."
        },
        {
            title: "What tech stack do you use?",
            content: "We use the modern 'T3 Stack' or similar robust technologies: Next.js (React), TypeScript, Supabase/PostgreSQL, and Tailwind CSS. This ensures your app scales easily from 100 to 1 million users."
        },
        {
            title: "What happens after the launch?",
            content: "We offer ongoing support packages to handle bugs, server updates, and new feature requests. We won't leave you stranded after deployment."
        },
        {
            title: "Do you sign NDAs?",
            content: "Yes. We respect your confidentiality and are happy to sign a Non-Disclosure Agreement before discussing your specific idea."
        }
    ]

    return (
        <Section className="py-24 bg-background">
            <Container className="max-w-4xl">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading">Startup FAQs</h2>
                    <p className="text-lg text-muted-foreground">Answers to common founder questions.</p>
                </div>

                <Accordion items={faqItems} className="w-full" />
            </Container>
        </Section>
    )
}
