"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Layout"
import { useMousePosition } from "@/hooks/use-mouse-position"

export function BusinessWebHero({ onBook }) {
    const { x, y } = useMousePosition();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const xOffset = mounted ? (x - (typeof window !== 'undefined' ? window.innerWidth : 0) / 2) / 25 : 0;
    const yOffset = mounted ? (y - (typeof window !== 'undefined' ? window.innerHeight : 0) / 2) / 25 : 0;

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 perspective-1000">
            {/* Background - Elegant, Professional */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/hero-bg.png"
                    alt="Background"
                    fill
                    className="object-cover object-center opacity-20 dark:opacity-10 translate-y-10 scale-105 saturate-0"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
            </div>

            <Container className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Text Content */}
                <div className="flex-1 flex flex-col items-start text-left space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-1000">
                    <div className="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-400 backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
                        Premium Business Websites
                    </div>

                    <div className="space-y-4 max-w-2xl">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading tracking-tight text-balance leading-tight">
                            Convert Visitors Into <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 animate-gradient-x">
                                Paying Customers
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                            Your website is your 24/7 salesperson. We build stunning, fast, and mobile-optimized websites that build trust and drive sales for your business.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" onClick={onBook} className="h-12 px-8 text-lg shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all bg-indigo-600 hover:bg-indigo-700 text-white border-none">
                            Get a Free Mockup
                        </Button>
                    </div>

                    {/* Trust List */}
                    <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm font-medium text-muted-foreground opacity-90">
                        <div className="flex items-center gap-2">
                            <span className="text-indigo-500">✓</span> SEO Optimized (Rank #1)
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-indigo-500">✓</span> Mobile Responsive Design
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-indigo-500">✓</span> Fast Loading Speed (90+)
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-indigo-500">✓</span> Easy Content Management
                        </div>
                    </div>
                </div>

                {/* 3D Visual - Responsive Grid */}
                <div className="flex-1 flex justify-center items-center relative w-full h-[350px] md:h-[500px] perspective-1000 hidden md:flex">
                    <div
                        className="relative w-80 h-[450px] transition-transform duration-100 ease-out z-10"
                        style={{
                            transform: `rotateX(${-yOffset * 0.5}deg) rotateY(${xOffset * 0.5}deg)`,
                            transformStyle: "preserve-3d"
                        }}
                    >
                        {/* Desktop Mockup */}
                        <div className="absolute top-10 -left-10 w-96 h-64 bg-background border border-white/20 rounded-lg shadow-2xl overflow-hidden" style={{ transform: "translateZ(20px)" }}>
                            <div className="h-6 bg-muted/50 w-full border-b flex items-center px-2 gap-1">
                                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            </div>
                            <div className="p-4 space-y-2">
                                <div className="h-32 bg-indigo-500/10 rounded w-full flex items-center justify-center">
                                    <span className="text-indigo-500 text-xs font-bold">HERO SECTION</span>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="h-20 bg-muted/20 rounded"></div>
                                    <div className="h-20 bg-muted/20 rounded"></div>
                                    <div className="h-20 bg-muted/20 rounded"></div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Mockup */}
                        <div className="absolute -bottom-10 right-0 w-32 h-64 bg-background border border-white/20 rounded-2xl shadow-2xl overflow-hidden" style={{ transform: "translateZ(80px)" }}>
                            <div className="p-2 space-y-2">
                                <div className="h-20 bg-indigo-500/20 rounded w-full"></div>
                                <div className="h-8 bg-muted/20 rounded w-full"></div>
                                <div className="h-8 bg-muted/20 rounded w-full"></div>
                                <div className="h-8 bg-muted/20 rounded w-full"></div>
                            </div>
                        </div>

                        {/* SEO Badge */}
                        <div
                            className="absolute bottom-20 -left-16 bg-white/95 text-black backdrop-blur-xl p-3 rounded-xl shadow-2xl border border-indigo-500/20"
                            style={{ transform: "translateZ(100px)" }}
                        >
                            <p className="font-bold text-lg text-indigo-600">Google Rank #1</p>
                            <div className="flex gap-1 mt-1">
                                {"★★★★★".split("").map((star, i) => (
                                    <span key={i} className="text-yellow-500 text-xs">{star}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
