"use client"

import * as React from "react"
import Image from "next/image"
import { Container, Section } from "@/components/ui/Layout"
import { cn } from "@/lib/utils"

export function Testimonials() {
    // Reviews R1-R10
    const reviews = Array.from({ length: 10 }, (_, i) => `/assets/R${i + 1}.png`)

    return (
        <Section id="reviews" className="relative py-24 bg-muted/20">
            <Container>
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading">Proven Track Record</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Hover over any review to see the details.
                    </p>
                </div>

                {/* Featured Stats Section - Full Width & Uncropped */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* P2: Success Rate */}
                    <div className="rounded-2xl border bg-background shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300">
                        <div className="p-6 h-full flex flex-col">
                            <div className="mb-4">
                                <h3 className="text-xl font-bold">100% Success Rate</h3>
                                <p className="text-sm text-muted-foreground">Detailed Fiverr statistics.</p>
                            </div>
                            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border shadow-sm bg-muted/10">
                                <Image
                                    src="/assets/P2.png"
                                    alt="Fiverr Profile Stats"
                                    fill
                                    className="object-contain hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* P1: Global Reach */}
                    <div className="rounded-2xl border bg-background shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300">
                        <div className="p-6 h-full flex flex-col">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold">Global Reach</h3>
                                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Worldwide</span>
                            </div>
                            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border shadow-sm bg-muted/10">
                                <Image
                                    src="/assets/p1.png"
                                    alt="Global Reach"
                                    fill
                                    className="object-contain hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Masonry Grid - Reviews */}
                <div className="columns-1 md:columns-2 gap-8 space-y-8 max-w-6xl mx-auto">

                    {/* Mapping Reviews R1-R10 */}
                    {reviews.map((src, i) => (
                        <div
                            key={i}
                            className="break-inside-avoid mb-8 rounded-xl border bg-background shadow-sm group transition-all duration-300 ease-out hover:scale-[1.35] hover:z-50 hover:shadow-2xl relative origin-center"
                        >
                            <div className="relative w-full rounded-xl overflow-hidden bg-white">
                                {/* Natural aspect ratio - Full View */}
                                <Image
                                    src={src}
                                    alt={`Client Result ${i + 1}`}
                                    width={0}
                                    height={0}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    style={{ width: '100%', height: 'auto' }}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}

                </div>

            </Container>
        </Section>
    )
}

