"use client"

import * as React from "react"
import Link from "next/link"
import { Container, Section } from "@/components/ui/Layout"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

export function Process({ onBook }) {
    const steps = [
        {
            number: "01",
            title: "Discovery Call",
            description: "We discuss your project requirements, technical challenges, and deadlines in a free 15-min consultation.",
            action: "Book Now"
        },
        {
            number: "02",
            title: "Proposal & Plan",
            description: "We provide a detailed roadmap, tech stack recommendation, and clear cost/time estimation.",
            action: "Review Plan"
        },
        {
            number: "03",
            title: "Agile Development",
            description: "We build your solution with regular updates. You verify progress at every milestone.",
            action: "Track Progress"
        },
        {
            number: "04",
            title: "Final Delivery",
            description: "We hand over the source code, documentation, and help you deploy the solution live.",
            action: "Launch"
        }
    ]

    return (
        <Section id="process" className="relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10 hidden md:block" />

            <Container>
                <div className="text-center space-y-4 mb-16">
                    <Badge>How It Works</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading">Simple 4-Step Process</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        From initial idea to final deployment, we keep it transparent and efficient.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="relative group">
                            {/* Step connection line for mobile */}
                            <div className="absolute left-6 top-12 bottom-0 w-px bg-border md:hidden last:hidden"></div>

                            <div className="flex flex-col items-center text-center space-y-4 relative z-10 bg-background md:bg-transparent p-4 md:p-0 rounded-lg">
                                <div className="h-12 w-12 rounded-full bg-background border-2 border-primary/20 text-primary font-bold font-heading flex items-center justify-center text-lg shadow-sm group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-semibold">{step.title}</h3>
                                <p className="text-sm text-muted-foreground">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button size="lg" onClick={onBook} className="rounded-full px-8">Start Your Journey</Button>
                </div>
            </Container>
        </Section>
    )
}

function Badge({ children }) {
    return (
        <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-xs font-semibold text-primary mb-2">
            {children}
        </span>
    )
}
