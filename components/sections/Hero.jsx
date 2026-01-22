"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Layout"
import { cn } from "@/lib/utils"

export function Hero({ onBook }) {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">

            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="MindToCode Tech Background"
                    fill
                    className="object-cover object-center opacity-40 dark:opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background" />
            </div>

            <Container className="relative z-10 flex flex-col items-center text-center space-y-8 animate-in fade-in zoom-in-95 duration-1000 slide-in-from-bottom-5">

                {/* Badge / Pill */}
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                    <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                    Accepting New Clients for Feb 2026
                </div>

                {/* Headlines */}
                <div className="space-y-4 max-w-4xl">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-balance">
                        Technical Guidance & <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-accent animate-gradient-x">
                            Digital Solutions
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
                        We help learners, graduates, startups, and businesses turn ideas into working solutions with expert support and reliable execution.
                    </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button size="lg" onClick={onBook} className="h-12 px-8 text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                        Book a Free Consultation
                    </Button>
                    <Link href="#services">
                        <Button variant="outline" size="lg" className="h-12 px-8 text-lg glass border-primary/20 hover:bg-primary/5">
                            Explore Services
                        </Button>
                    </Link>
                </div>

                {/* Social Proof / Trust Indicators */}
                <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Simple text or icons for "Trusted By" vibes */}
                    {['100+ Projects', 'Top Rated Seller', 'Global Clients', '5-Star Support'].map((item, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                            <span className="text-xl font-bold font-heading text-foreground">{item.split(' ')[0]}</span>
                            <span className="text-xs uppercase tracking-wider text-muted-foreground">{item.split(' ').slice(1).join(' ')}</span>
                        </div>
                    ))}
                </div>

            </Container>
        </section>
    )
}
