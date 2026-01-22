"use client"

import Link from "next/link"
import { Container, Section } from "@/components/ui/Layout"
import { Button } from "@/components/ui/Button"

export function CallToAction({ onBook }) {
    return (
        <Section className="relative py-24 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-primary/5 -z-10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-primary/10 blur-[100px] rounded-full -z-10" />

            <Container>
                <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight">
                        Ready to Build Your Solution?
                    </h2>
                    <p className="text-xl text-muted-foreground text-balance">
                        Whether you need help with a capstone project or a scalable SaaS MVP, we have the expertise to deliver.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" onClick={onBook} className="h-14 px-8 text-lg rounded-full shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                            Book Your Free Consultation
                        </Button>
                        <Link href="mailto:contact@mindtocode.com">
                            <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full">
                                Contact Support
                            </Button>
                        </Link>
                    </div>

                    <p className="text-sm text-muted-foreground pt-4">
                        No commitment required. 15-minute free discovery call.
                    </p>
                </div>
            </Container>
        </Section>
    )
}
