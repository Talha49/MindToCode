"use client"

import * as React from "react"
import Image from "next/image"
import { Container, Section } from "@/components/ui/Layout"
import { cn } from "@/lib/utils"

export function Testimonials() {
    // Reviews R1-R10 with descriptive search-optimized alt tags
    const reviews = [
        { src: "/assets/R1.webp", alt: "5-Star Fiverr client review for Python scripting, debugging, and web automation project" },
        { src: "/assets/R2.webp", alt: "Fiverr client review praising rapid delivery and clean code on Next.js web application" },
        { src: "/assets/R3.webp", alt: "Top Rated Seller 5-star review for computer science algorithm and capstone implementation" },
        { src: "/assets/R4.webp", alt: "Client feedback praising full-stack SaaS MVP delivery, responsiveness, and clean architecture" },
        { src: "/assets/R5.webp", alt: "5-Star testimonial praising exceptional problem solving, database schema, and frontend UI" },
        { src: "/assets/R6.webp", alt: "Client review highlighting machine learning model accuracy and seamless backend API integration" },
        { src: "/assets/R7.webp", alt: "5-Star Fiverr rating for complex SQL database optimization and reliable system architecture" },
        { src: "/assets/R8.webp", alt: "Client feedback praising on-time university final year project submission and clear documentation" },
        { src: "/assets/R9.webp", alt: "5-Star review for high-performance React dashboard and thorough code comments" },
        { src: "/assets/R10.webp", alt: "Client review praising 1-on-1 code explanation, viva defense preparation, and professionalism" },
    ]

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
                                    src="/assets/P2.webp"
                                    alt="Fiverr Seller Dashboard showing 100% order completion and 5.0 star rating"
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
                                    src="/assets/p1.webp"
                                    alt="Fiverr World Map graphic displaying projects delivered to clients across 30+ countries"
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
                    {reviews.map((review, i) => (
                        <div
                            key={i}
                            className="break-inside-avoid mb-8 rounded-xl border bg-background shadow-sm group transition-all duration-300 ease-out hover:scale-[1.35] hover:z-50 hover:shadow-2xl relative origin-center"
                        >
                            <div className="relative w-full rounded-xl overflow-hidden bg-white">
                                {/* Natural aspect ratio - Full View */}
                                <Image
                                    src={review.src}
                                    alt={review.alt}
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

