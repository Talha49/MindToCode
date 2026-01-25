"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Layout"
import { useMousePosition } from "@/hooks/use-mouse-position"

export function CapstoneHero({ onBook }) {
    const { x, y } = useMousePosition();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const xOffset = mounted ? (x - (typeof window !== 'undefined' ? window.innerWidth : 0) / 2) / 25 : 0;
    const yOffset = mounted ? (y - (typeof window !== 'undefined' ? window.innerHeight : 0) / 2) / 25 : 0;

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 perspective-1000">
            {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/hero-bg.png"
                    alt="Background"
                    fill
                    className="object-cover object-center opacity-20 dark:opacity-10 translate-y-10 scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
            </div>

            <Container className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Text Content */}
                <div className="flex-1 flex flex-col items-start text-left space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-1000">
                    <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-400 backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2 animate-pulse"></span>
                        Full Source Code + Documentation Included
                    </div>

                    <div className="space-y-4 max-w-2xl">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading tracking-tight text-balance leading-tight">
                            Your Complete <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
                                Final Year Project
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                            Don't risk your degree. Get a professional-grade Capstone Project with complete source code, 50-page documentation, and 1-on-1 Viva preparation.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" onClick={onBook} className="h-12 px-8 text-lg shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all bg-purple-600 hover:bg-purple-700 text-white border-none">
                            Book Project Consultation
                        </Button>
                    </div>

                    {/* Trust List */}
                    <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm font-medium text-muted-foreground opacity-90">
                        <div className="flex items-center gap-2">
                            <span className="text-purple-500">✓</span> Complete Documentation (IEEE)
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-purple-500">✓</span> Running Setup on Your Laptop
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-purple-500">✓</span> Viva/Presentation Training
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-purple-500">✓</span> Unique Topic Selection
                        </div>
                    </div>
                </div>

                {/* 3D Visual - Stack/Architecture */}
                <div className="flex-1 flex justify-center items-center relative w-full h-[350px] md:h-[500px] perspective-1000 hidden md:flex">
                    <div
                        className="relative w-80 h-96 transition-transform duration-100 ease-out z-10"
                        style={{
                            transform: `rotateX(${-yOffset * 0.5}deg) rotateY(${xOffset * 0.5}deg)`,
                            transformStyle: "preserve-3d"
                        }}
                    >
                        {/* Layer 1: Database */}
                        <div className="absolute bottom-0 w-64 h-24 bg-blue-900/40 border border-blue-500/30 rounded-xl backdrop-blur-md flex items-center justify-center transform translate-x-8" style={{ transform: "translateZ(0px) translateX(30px)" }}>
                            <span className="text-blue-200 font-mono">PostgreSQL / MongoDB</span>
                        </div>

                        {/* Layer 2: Backend */}
                        <div className="absolute bottom-20 w-64 h-24 bg-green-900/40 border border-green-500/30 rounded-xl backdrop-blur-md flex items-center justify-center transform translate-x-4" style={{ transform: "translateZ(30px) translateX(15px)" }}>
                            <span className="text-green-200 font-mono">Python / Node.js API</span>
                        </div>

                        {/* Layer 3: Frontend */}
                        <div className="absolute bottom-40 w-64 h-24 bg-purple-900/40 border border-purple-500/30 rounded-xl backdrop-blur-md flex items-center justify-center shadow-2xl" style={{ transform: "translateZ(60px)" }}>
                            <span className="text-purple-200 font-mono">React / Next.js UI</span>
                        </div>

                        {/* Floating Doc Badge */}
                        <div
                            className="absolute -top-4 -right-10 bg-white/95 backdrop-blur-xl border border-purple-500/20 p-4 rounded-xl shadow-2xl text-black"
                            style={{ transform: "translateZ(90px)" }}
                        >
                            <p className="font-bold text-lg">50+ Page Report</p>
                            <p className="text-xs text-muted-foreground">IEEE Format Included</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
