"use client"

import { Container, Section } from "@/components/ui/Layout"
import { Accordion } from "@/components/ui/Accordion"

export function CapstoneFAQ() {
    const faqItems = [
        {
            title: "What is included in the Capstone package?",
            content: "Our complete package includes: 1) Full Source Code, 2) Complete Documentation (50-80 pages) in IEEE/College format, 3) Database Schema Diagrams, 4) Installation on your local machine, and 5) A 1-hour Viva preparation session to explain the code."
        },
        {
            title: "Can I choose my own topic?",
            content: "Yes! If you have a topic approved by your supervisor, we can build it. If not, we can suggest high-scoring, unique topics in AI, Machine Learning, Blockchain, or Full Stack Web Development."
        },
        {
            title: "Will the project be unique?",
            content: "Absolutely. We do not resell the same project to multiple students in the same university. We customize the UI, features, and code structure to ensure it passes uniqueness checks."
        },
        {
            title: "How does payment work for large projects?",
            content: "For Capstone projects, we typically work with a 50% deposit to start and 50% upon completion and demo. This ensures safety for both parties."
        },
        {
            title: "What tech stacks do you use?",
            content: "We focus on modern, industry-relevant stacks that impress external examiners: MERN (MongoDB, Express, React, Node), Next.js, Django (Python), and Flutter for mobile apps."
        }
    ]

    return (
        <Section className="py-24 bg-background">
            <Container className="max-w-4xl">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading">Capstone FAQs</h2>
                    <p className="text-lg text-muted-foreground">Common questions about Final Year Projects.</p>
                </div>

                <Accordion items={faqItems} className="w-full" />
            </Container>
        </Section>
    )
}
