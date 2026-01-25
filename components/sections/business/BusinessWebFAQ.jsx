"use client"

import { Container, Section } from "@/components/ui/Layout"
import { Accordion } from "@/components/ui/Accordion"

export function BusinessWebFAQ() {
    const faqItems = [
        {
            title: "Why do I need a professional website vs. a generic template?",
            content: "Templates often look generic, load slowly, and aren't optimized for conversion. A professional site is built to showcase your unique brand, load instantly, and guide visitors to contact you, resulting in more sales."
        },
        {
            title: "Will my website work on mobile phones?",
            content: "Yes, 100%. We take a 'Mobile-First' approach, meaning your site will look perfect on iPhones, Androids, tablets, and desktops. Over 60% of web traffic is mobile, so we prioritize it."
        },
        {
            title: "Can I update the content myself?",
            content: "Absolutely. We can integrate a user-friendly CMS (Content Management System) that allows you to change text, images, and prices without needing to write a single line of code."
        },
        {
            title: "How do you handle SEO (Search Engine Optimization)?",
            content: "We solve technical SEO from day one. This includes fast loading speeds, proper header tags, meta descriptions, and sitemap generation. This gives you the best foundation to rank on Google."
        },
        {
            title: "What is the typical timeline?",
            content: "A standard highly-polished business website typically takes 1-2 weeks from design to launch. We work fast without compromising quality."
        }
    ]

    return (
        <Section className="py-24 bg-background">
            <Container className="max-w-4xl">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading">Business Web FAQs</h2>
                    <p className="text-lg text-muted-foreground">Everything you need to know about your new website.</p>
                </div>

                <Accordion items={faqItems} className="w-full" />
            </Container>
        </Section>
    )
}
