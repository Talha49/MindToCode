"use client"

import { Container, Section } from "@/components/ui/Layout"
import { Accordion } from "@/components/ui/Accordion"

export function AssignmentFAQ() {
    const faqItems = [
        {
            title: "Is this cheating/plagiarism?",
            content: "No. We provide educational assistance and guidance. The code we provide is for reference and learning purposes. We also offer 1-on-1 explanation sessions so you understand the logic and can write your own solution or defend the provided one. All code is written from scratch and is 100% plagiarism-free."
        },
        {
            title: "Do you guarantee a passing grade?",
            content: "While we cannot legally guarantee a grade from your university, our track record shows that 98% of our students achieve an A or B grade. We follow the requirements strictly and test all code against provided test cases."
        },
        {
            title: "What languages do you cover?",
            content: "We cover all major programming languages including Python, Java, C++, C#, JavaScript (React, Node.js), PHP, SQL, and more. We also handle theoretical Computer Science papers."
        },
        {
            title: "How fast can you deliver?",
            content: "We specialize in urgent deadlines. For small assignments, we can often deliver within 24 hours. Larger projects require more time, but we will always be transparent about feasibility before accepting payment."
        },
        {
            title: "Is my identity kept private?",
            content: "Absolutely. We use a strict NDA (Non-Disclosure Agreement) policy. Your university details, name, and project files are never shared with third parties."
        }
    ]

    return (
        <Section className="py-24 bg-background">
            <Container className="max-w-4xl">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading">Frequently Asked Questions</h2>
                    <p className="text-lg text-muted-foreground">Everything you need to know about our assignment help service.</p>
                </div>

                <Accordion items={faqItems} className="w-full" />
            </Container>
        </Section>
    )
}
